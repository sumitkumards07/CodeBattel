#!/usr/bin/env node

/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  CODEBATTLE — AI Batch Conversion Engine                       ║
 * ║  ─────────────────────────────────────────────────────────────  ║
 * ║  Converts raw freeCodeCamp .md files into CodeBattle-themed    ║
 * ║  JSON missions using OpenAI or Anthropic APIs.                 ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * Usage:
 *   # Automatic mode (requires API key):
 *   GEMINI_API_KEY=AIza... node scripts/convert-fcc.js
 *   GEMINI_API_KEY=AIza... node scripts/convert-fcc.js --block basic-css
 *
 *   # Manual mode (generates ready-to-paste prompt files for any AI chat):
 *   node scripts/convert-fcc.js --manual
 *   node scripts/convert-fcc.js --manual --block basic-javascript
 *
 *   # Batch of N files at a time (default 5):
 *   GEMINI_API_KEY=AIza... node scripts/convert-fcc.js --batch 10
 *
 * Output:
 *   scripts/fcc-missions/<block-name>/<challenge-id>.json    (auto mode)
 *   scripts/fcc-prompts/<block-name>/<challenge-id>.txt      (manual mode)
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

const RAW_DIR = path.join(__dirname, "fcc-raw");
const MISSIONS_DIR = path.join(__dirname, "fcc-missions");
const PROMPTS_DIR = path.join(__dirname, "fcc-prompts");

// ═══════════════════════════════════════════════════════════════
// THE DATA ARCHITECT SYSTEM PROMPT
// ═══════════════════════════════════════════════════════════════

const SYSTEM_PROMPT = `You are a Senior Data Engineer and Content Architect for "CodeBattle", a cyberpunk-themed coding education platform.

Your task: Convert raw freeCodeCamp educational Markdown into a gamified JSON mission.

RULES:
• Replace academic words with Warfare terminology ("Mission Briefing" not "Lesson", "System Breach" not "Test", "Deploy Payload" not "Submit")
• Tone: Urgent, aggressive, immersive — like a drill sergeant teaching a recruit to hack a mainframe
• Keep explanations concise. Developers want to write code, not read textbooks
• Extract starting code from the --seed-- section
• Extract test assertions from the --hints-- section
• Infer difficulty from complexity: simple tag knowledge = "recruit", logic/loops = "soldier", algorithms = "commander", advanced patterns = "general"

OUTPUT ONLY THIS EXACT JSON SCHEMA (no markdown, no explanation, just valid JSON):
{
  "mission_id": "[the challenge id from frontmatter]",
  "mission_title": "[A cool cyberpunk-themed title]",
  "xp_reward": [50-500 based on difficulty],
  "difficulty": "[recruit|soldier|commander|general]",
  "briefing": "[2-3 sentences explaining the concept in cyberpunk tone]",
  "objective": "[1 sentence clear goal]",
  "starting_code": "[The starter code from --seed-- section, properly escaped]",
  "solution_code": "[The solution from --solutions-- section, properly escaped]",
  "test_assertions": ["[Array of test descriptions extracted from --hints--]"],
  "hints": ["[1-3 short hints in cyberpunk tone]"],
  "tags": ["[relevant tags like 'html', 'beginner', 'elements']"],
  "original_fcc_title": "[original title from frontmatter]",
  "block": "[the block/topic name]"
}`;

// ═══════════════════════════════════════════════════════════════
// FCC MARKDOWN PARSER
// ═══════════════════════════════════════════════════════════════

function parseFCCMarkdown(content, blockName) {
    const result = {
        id: "",
        title: "",
        challengeType: 0,
        description: "",
        instructions: "",
        hints: [],
        seedCode: "",
        solution: "",
        block: blockName,
    };

    // Parse YAML frontmatter
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (fmMatch) {
        const fm = fmMatch[1];
        const idMatch = fm.match(/^id:\s*(.+)$/m);
        const titleMatch = fm.match(/^title:\s*(.+)$/m);
        const typeMatch = fm.match(/^challengeType:\s*(\d+)$/m);
        if (idMatch) result.id = idMatch[1].trim();
        if (titleMatch) result.title = titleMatch[1].replace(/['"]/g, "").trim();
        if (typeMatch) result.challengeType = parseInt(typeMatch[1]);
    }

    // Parse sections
    const descMatch = content.match(
        /# --description--\n\n([\s\S]*?)(?=\n# --)/
    );
    if (descMatch) result.description = descMatch[1].trim();

    const instrMatch = content.match(
        /# --instructions--\n\n([\s\S]*?)(?=\n# --)/
    );
    if (instrMatch) result.instructions = instrMatch[1].trim();

    // Parse hints (test descriptions)
    const hintsSection = content.match(
        /# --hints--\n\n([\s\S]*?)(?=\n# --seed--|$)/
    );
    if (hintsSection) {
        // Extract text lines (not code blocks) as test descriptions
        const hintLines = hintsSection[1]
            .split("\n")
            .filter((l) => l.trim() && !l.startsWith("```") && !l.startsWith("assert"));
        result.hints = hintLines.map((h) => h.trim()).filter(Boolean);
    }

    // Parse seed code
    const seedMatch = content.match(
        /## --seed-contents--\n\n```\w*\n([\s\S]*?)```/
    );
    if (seedMatch) result.seedCode = seedMatch[1].trim();

    // Parse solution
    const solMatch = content.match(
        /# --solutions--\n\n```\w*\n([\s\S]*?)```/
    );
    if (solMatch) result.solution = solMatch[1].trim();

    return result;
}

// ═══════════════════════════════════════════════════════════════
// GEMINI API CALLER
// ═══════════════════════════════════════════════════════════════

function callGemini(apiKey, systemPrompt, userPrompt, model = "gemini-2.5-flash") {
    return new Promise((resolve, reject) => {
        const body = JSON.stringify({
            systemInstruction: {
                parts: [{ text: systemPrompt }]
            },
            contents: [{
                parts: [{ text: userPrompt }]
            }],
            generationConfig: {
                temperature: 0.7,
                responseMimeType: "application/json"
            }
        });

        const options = {
            hostname: "generativelanguage.googleapis.com",
            path: `/v1beta/models/${model}:generateContent?key=${apiKey}`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(body),
            },
        };

        const req = https.request(options, (res) => {
            let data = "";
            res.on("data", (chunk) => (data += chunk));
            res.on("end", () => {
                if (res.statusCode !== 200) {
                    reject(new Error(`Gemini API ${res.statusCode}: ${data.substring(0, 300)}`));
                    return;
                }
                try {
                    const parsed = JSON.parse(data);
                    const content = parsed.candidates[0].content.parts[0].text;
                    resolve(content);
                } catch (e) {
                    reject(new Error(`Failed to parse response: ${e.message}\nRaw: ${data.substring(0, 200)}`));
                }
            });
        });

        req.on("error", reject);
        req.write(body);
        req.end();
    });
}

// ═══════════════════════════════════════════════════════════════
// CONVERSION LOGIC
// ═══════════════════════════════════════════════════════════════

async function convertFile(filePath, blockName, apiKey) {
    const content = fs.readFileSync(filePath, "utf-8");
    const parsed = parseFCCMarkdown(content, blockName);

    if (!parsed.id || !parsed.title) {
        return { status: "skip", reason: "No id/title in frontmatter" };
    }

    const userPrompt = `Convert this freeCodeCamp challenge from the "${blockName}" block into a CodeBattle mission JSON.

CHALLENGE ID: ${parsed.id}
ORIGINAL TITLE: ${parsed.title}
BLOCK: ${blockName}

DESCRIPTION:
${parsed.description}

INSTRUCTIONS:
${parsed.instructions}

TEST HINTS:
${parsed.hints.join("\n")}

STARTER CODE:
${parsed.seedCode}

SOLUTION:
${parsed.solution}

Output ONLY the JSON object. No markdown fences, no explanation.`;

    try {
        const response = await callGemini(apiKey, SYSTEM_PROMPT, userPrompt);

        // Clean the response — strip markdown code fences if the AI added them
        let cleanJson = response
            .replace(/^```json?\n?/i, "")
            .replace(/\n?```$/i, "")
            .trim();

        // Fix unescaped control characters often generated by LLMs in code blocks
        cleanJson = cleanJson.replace(/[\u0000-\u001F]+/g, function (match) {
            return match === '\n' ? '\\n' : match === '\r' ? '\\r' : match === '\t' ? '\\t' : '';
        });

        // Validate it's proper JSON
        const mission = JSON.parse(cleanJson);

        return { status: "ok", mission, parsed };
    } catch (err) {
        return { status: "error", error: err.message, parsed };
    }
}

function generateManualPrompt(filePath, blockName) {
    const content = fs.readFileSync(filePath, "utf-8");
    const parsed = parseFCCMarkdown(content, blockName);

    if (!parsed.id || !parsed.title) return null;

    return `=== CODEBATTLE MISSION CONVERSION ===
Block: ${blockName}
File: ${path.basename(filePath)}
Original Title: ${parsed.title}
Challenge ID: ${parsed.id}

--- SYSTEM PROMPT (paste this first) ---

${SYSTEM_PROMPT}

--- USER PROMPT (paste this second) ---

Convert this freeCodeCamp challenge from the "${blockName}" block into a CodeBattle mission JSON.

CHALLENGE ID: ${parsed.id}
ORIGINAL TITLE: ${parsed.title}
BLOCK: ${blockName}

DESCRIPTION:
${parsed.description}

INSTRUCTIONS:
${parsed.instructions}

TEST HINTS:
${parsed.hints.join("\n")}

STARTER CODE:
${parsed.seedCode}

SOLUTION:
${parsed.solution}

Output ONLY the JSON object. No markdown fences, no explanation.

=== END ===
`;
}

// ═══════════════════════════════════════════════════════════════
// CLI RUNNER
// ═══════════════════════════════════════════════════════════════

async function main() {
    const args = process.argv.slice(2);
    const isManual = args.includes("--manual");
    const apiKey = process.env.GEMINI_API_KEY;

    console.log(`
╔══════════════════════════════════════════════════════╗
║   CODEBATTLE — AI Batch Conversion Engine            ║
║   Mode: ${isManual ? "MANUAL (prompt generation)" : apiKey ? "AUTO (Gemini API)       " : "⚠ NO API KEY SET        "}          ║
╚══════════════════════════════════════════════════════╝`);

    if (!isManual && !apiKey) {
        console.log(`
  ⚠ No GEMINI_API_KEY found. You have two options:

  1. AUTO MODE — Set your API key and run:
     export GEMINI_API_KEY=AIza...
     node scripts/convert-fcc.js

  2. MANUAL MODE — Generate prompt files to paste into any AI:
     node scripts/convert-fcc.js --manual

  The manual mode generates .txt files you can copy-paste into
  Claude, ChatGPT, or any AI chat to get the JSON output.
`);
        return;
    }

    // Determine which blocks to process
    const blockIdx = args.indexOf("--block");
    let blocksToProcess;

    if (blockIdx !== -1 && args[blockIdx + 1]) {
        blocksToProcess = [args[blockIdx + 1]];
    } else {
        // Auto-detect blocks from downloaded folders
        if (!fs.existsSync(RAW_DIR)) {
            console.log("  ✗ No fcc-raw directory found. Run fetch-fcc.js first!");
            return;
        }
        blocksToProcess = fs
            .readdirSync(RAW_DIR)
            .filter((f) => {
                const fullPath = path.join(RAW_DIR, f);
                return fs.statSync(fullPath).isDirectory();
            });
    }

    // Batch size
    const batchIdx = args.indexOf("--batch");
    const batchSize = batchIdx !== -1 ? parseInt(args[batchIdx + 1]) || 5 : 5;

    console.log(`  Blocks to process: ${blocksToProcess.length}`);
    console.log(`  Batch size: ${batchSize} files at a time\n`);

    const outputDir = isManual ? PROMPTS_DIR : MISSIONS_DIR;
    let totalConverted = 0;
    let totalSkipped = 0;
    let totalErrors = 0;

    for (const block of blocksToProcess) {
        const blockRawDir = path.join(RAW_DIR, block);
        if (!fs.existsSync(blockRawDir)) {
            console.log(`  ✗ Block not downloaded: ${block} (run fetch-fcc.js first)`);
            continue;
        }

        const blockOutDir = path.join(outputDir, block);
        fs.mkdirSync(blockOutDir, { recursive: true });

        const mdFiles = fs
            .readdirSync(blockRawDir)
            .filter((f) => f.endsWith(".md"));

        console.log(`  ⚡ Processing block: ${block} (${mdFiles.length} files)`);

        for (let i = 0; i < mdFiles.length; i += batchSize) {
            const batch = mdFiles.slice(i, i + batchSize);

            for (const file of batch) {
                const filePath = path.join(blockRawDir, file);
                const outFile = file.replace(".md", isManual ? ".txt" : ".json");
                const outPath = path.join(blockOutDir, outFile);

                // Skip if already converted
                if (fs.existsSync(outPath)) {
                    totalSkipped++;
                    continue;
                }

                if (isManual) {
                    // ── MANUAL MODE ──
                    const prompt = generateManualPrompt(filePath, block);
                    if (!prompt) {
                        totalSkipped++;
                        continue;
                    }
                    fs.writeFileSync(outPath, prompt, "utf-8");
                    totalConverted++;
                    process.stdout.write(`    📋 ${outFile}\n`);
                } else {
                    // ── AUTO MODE (Gemini) ──
                    process.stdout.write(`    🤖 Converting ${file}...`);
                    const result = await convertFile(filePath, block, apiKey);

                    if (result.status === "ok") {
                        fs.writeFileSync(
                            outPath,
                            JSON.stringify(result.mission, null, 2),
                            "utf-8"
                        );
                        totalConverted++;
                        process.stdout.write(` ✓ → ${result.mission.mission_title}\n`);
                    } else if (result.status === "skip") {
                        totalSkipped++;
                        process.stdout.write(` ⊘ skipped (${result.reason})\n`);
                    } else {
                        totalErrors++;
                        process.stdout.write(` ✗ ${result.error}\n`);
                    }

                    // Respect rate limits — 500ms between API calls
                    await new Promise((r) => setTimeout(r, 500));
                }
            }

            // Batch pause (2s between batches for rate limits)
            if (!isManual && i + batchSize < mdFiles.length) {
                process.stdout.write(`    ⏳ Batch pause (2s)...\n`);
                await new Promise((r) => setTimeout(r, 2000));
            }
        }
    }

    // Summary
    console.log(`\n  ════════════════════════════════════════`);
    console.log(`  CONVERSION COMPLETE`);
    console.log(`  ────────────────────────────────────────`);
    console.log(`  Converted        : ${totalConverted}`);
    console.log(`  Already cached   : ${totalSkipped}`);
    console.log(`  Errors           : ${totalErrors}`);
    console.log(`  Output directory : ${outputDir}`);
    console.log(`  ════════════════════════════════════════\n`);

    if (isManual && totalConverted > 0) {
        console.log(`  🎯 NEXT STEPS:`);
        console.log(`  1. Open any .txt file from ${outputDir}`);
        console.log(`  2. Copy the SYSTEM PROMPT into your AI chat`);
        console.log(`  3. Copy the USER PROMPT and send it`);
        console.log(`  4. Save the JSON response as a .json file\n`);
    }

    if (!isManual && totalConverted > 0) {
        console.log(`  🎯 NEXT STEP:`);
        console.log(`  Import the .json files from ${outputDir}`);
        console.log(`  directly into your Supabase database!\n`);
    }
}

main().catch((err) => {
    console.error("\n  ✗ Fatal error:", err.message);
    process.exit(1);
});
