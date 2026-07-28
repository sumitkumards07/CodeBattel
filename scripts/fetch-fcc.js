#!/usr/bin/env node

/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  CODEBATTLE — FreeCodeCamp Curriculum Extraction Engine        ║
 * ║  ─────────────────────────────────────────────────────────────  ║
 * ║  Pulls open-source challenge data from freeCodeCamp/freeCodeCamp║
 * ║  and saves raw .md files locally for AI-powered conversion.     ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * Usage:
 *   node scripts/fetch-fcc.js                   → Fetch ALL configured blocks
 *   node scripts/fetch-fcc.js --block basic-css → Fetch only one block
 *   node scripts/fetch-fcc.js --list            → List available blocks
 *
 * Output:
 *   scripts/fcc-raw/<block-name>/<challenge-id>.md
 *
 * Rate Limits:
 *   GitHub API allows 60 requests/hour for unauthenticated requests.
 *   To increase to 5,000/hour, set GITHUB_TOKEN env variable.
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

// ═══════════════════════════════════════════════════════════════
// CONFIGURATION — Add or remove blocks relevant to CodeBattle
// ═══════════════════════════════════════════════════════════════

const CODEBATTLE_BLOCKS = [
    // ── HTML ──
    "basic-html-and-html5",

    // ── CSS ──
    "basic-css",
    "applied-visual-design",
    "applied-accessibility",
    "css-flexbox",
    "css-grid",

    // ── JavaScript ──
    "basic-javascript",
    "es6",
    "debugging",
    "basic-data-structures",
    "basic-algorithm-scripting",
    "object-oriented-programming",
    "functional-programming",
    "intermediate-algorithm-scripting",
    "regular-expressions",

    // ── Python (via Scientific Computing) ──
    "build-an-arithmetic-formatter-project",
    "build-a-time-calculator-project",
    "build-a-budget-app-project",
    "build-a-polygon-area-calculator-project",
    "build-a-probability-calculator-project",

    // ── Data Structures & Algorithms ──
    "algorithms",
    "data-structures",
];

const GITHUB_API_BASE = "https://api.github.com";
const REPO = "freeCodeCamp/freeCodeCamp";
const BRANCH = "main";
const CHALLENGES_PATH = "curriculum/challenges/english/blocks";
const OUTPUT_DIR = path.join(__dirname, "fcc-raw");

// ═══════════════════════════════════════════════════════════════
// GITHUB API HELPER
// ═══════════════════════════════════════════════════════════════

function githubRequest(urlPath) {
    return new Promise((resolve, reject) => {
        const url = urlPath.startsWith("http")
            ? urlPath
            : `${GITHUB_API_BASE}${urlPath}`;

        const headers = {
            "User-Agent": "CodeBattle-FCC-Fetcher/1.0",
            Accept: "application/vnd.github.v3+json",
        };

        // Use personal access token if available (5,000 req/hr vs 60)
        if (process.env.GITHUB_TOKEN) {
            headers["Authorization"] = `token ${process.env.GITHUB_TOKEN}`;
        }

        const parsedUrl = new URL(url);
        const options = {
            hostname: parsedUrl.hostname,
            path: parsedUrl.pathname + parsedUrl.search,
            headers,
        };

        https
            .get(options, (res) => {
                let data = "";
                res.on("data", (chunk) => (data += chunk));
                res.on("end", () => {
                    if (res.statusCode === 403) {
                        reject(
                            new Error(
                                `Rate limited! Set GITHUB_TOKEN env variable. Headers: ${JSON.stringify(res.headers)}`
                            )
                        );
                        return;
                    }
                    if (res.statusCode !== 200) {
                        reject(
                            new Error(`HTTP ${res.statusCode}: ${data.substring(0, 200)}`)
                        );
                        return;
                    }
                    try {
                        resolve(JSON.parse(data));
                    } catch {
                        resolve(data); // raw content
                    }
                });
            })
            .on("error", reject);
    });
}

function downloadRawFile(url) {
    return new Promise((resolve, reject) => {
        const parsedUrl = new URL(url);
        const options = {
            hostname: parsedUrl.hostname,
            path: parsedUrl.pathname,
            headers: { "User-Agent": "CodeBattle-FCC-Fetcher/1.0" },
        };

        https
            .get(options, (res) => {
                // Handle redirects
                if (res.statusCode === 301 || res.statusCode === 302) {
                    downloadRawFile(res.headers.location).then(resolve).catch(reject);
                    return;
                }
                let data = "";
                res.on("data", (chunk) => (data += chunk));
                res.on("end", () => resolve(data));
            })
            .on("error", reject);
    });
}

// ═══════════════════════════════════════════════════════════════
// CORE FETCHER
// ═══════════════════════════════════════════════════════════════

async function fetchBlock(blockName) {
    const blockDir = path.join(OUTPUT_DIR, blockName);
    fs.mkdirSync(blockDir, { recursive: true });

    console.log(`\n  ⚡ Fetching block: ${blockName}`);

    // Step 1: List all .md files in this block
    const apiPath = `/repos/${REPO}/contents/${CHALLENGES_PATH}/${blockName}?ref=${BRANCH}`;
    let files;

    try {
        files = await githubRequest(apiPath);
    } catch (err) {
        console.error(`    ✗ Failed to list files: ${err.message}`);
        return { block: blockName, fetched: 0, skipped: 0, error: err.message };
    }

    const mdFiles = files.filter(
        (f) => f.type === "file" && f.name.endsWith(".md")
    );
    console.log(`    Found ${mdFiles.length} challenge files`);

    let fetched = 0;
    let skipped = 0;

    for (const file of mdFiles) {
        const outPath = path.join(blockDir, file.name);

        // Skip if already downloaded
        if (fs.existsSync(outPath)) {
            skipped++;
            continue;
        }

        try {
            const content = await downloadRawFile(file.download_url);
            fs.writeFileSync(outPath, content, "utf-8");
            fetched++;
            process.stdout.write(`    ↓ ${file.name} (${file.size} bytes)\n`);

            // Be polite to GitHub — 100ms delay between downloads
            await new Promise((r) => setTimeout(r, 100));
        } catch (err) {
            console.error(`    ✗ Failed: ${file.name} — ${err.message}`);
        }
    }

    console.log(
        `    ✓ Done: ${fetched} downloaded, ${skipped} already cached`
    );
    return { block: blockName, fetched, skipped };
}

// ═══════════════════════════════════════════════════════════════
// DATA ARCHITECT PROMPT (saved alongside the data)
// ═══════════════════════════════════════════════════════════════

const DATA_ARCHITECT_PROMPT = `
Role: Senior Data Engineer and Content Architect
Task: Convert standard open-source educational Markdown files into a highly stylized, gamified JSON format for a platform called "CodeBattle".
Context: I will be providing you with raw Markdown files copied from the open-source freeCodeCamp GitHub repository (specifically from their HTML/CSS and JavaScript challenges).

The Objective:
Do not simply copy the text. You must parse the educational intent of the Markdown file and rewrite it to fit a "Cyberpunk / Military Warfare" theme. The output must be strictly formatted as a JSON object that can be pushed directly into a Supabase database.

The Persona/Tone Rules:
• Replace boring academic words with "Warfare" terminology (e.g., instead of "Lesson", use "Mission Briefing"; instead of "Test", use "System Breach"; instead of "Submit", use "Deploy Payload").
• The tone should be urgent, aggressive, and highly immersive—like a drill sergeant teaching a recruit how to hack a mainframe.
• Keep explanations incredibly concise. Developers want to write code, not read textbooks.

The JSON Output Schema:
You must map the parsed Markdown into this exact JSON structure:
{
  "mission_title": "[String: A cool, themed title for the lesson]",
  "xp_reward": [Number: between 50 and 500 based on difficulty],
  "briefing": "[String: 2-3 sentences explaining the core concept in the Cyberpunk tone]",
  "objective": "[String: A 1-sentence clear goal of what the user must code]",
  "starting_code": "[String: The raw code snippet the user starts with, properly escaped]",
  "solution_regex": "[String: A regex pattern to check if the user successfully completed the objective]",
  "hints": ["[Array of 1-3 short hint strings in the cyberpunk tone]"],
  "tags": ["[Array of relevant tags like 'html', 'beginner', 'elements']"],
  "difficulty": "[String: 'recruit' | 'soldier' | 'commander' | 'general']"
}

Execution:
I will now paste the first raw Markdown file. Parse it, rewrite it according to the CodeBattle tone, and output ONLY the valid JSON object.
`.trim();

function savePromptFile() {
    const promptPath = path.join(OUTPUT_DIR, "DATA_ARCHITECT_PROMPT.md");
    fs.writeFileSync(
        promptPath,
        `# CodeBattle — Data Architect Conversion Prompt\n\nUse this prompt with any AI (Claude, GPT, etc.) to convert raw freeCodeCamp .md files into CodeBattle-themed JSON missions.\n\n---\n\n\`\`\`\n${DATA_ARCHITECT_PROMPT}\n\`\`\`\n`,
        "utf-8"
    );
    console.log(`\n  📋 Saved AI conversion prompt → ${promptPath}`);
}

// ═══════════════════════════════════════════════════════════════
// CLI
// ═══════════════════════════════════════════════════════════════

async function main() {
    const args = process.argv.slice(2);

    console.log(`
╔══════════════════════════════════════════════════════╗
║   CODEBATTLE — FCC Curriculum Extraction Engine      ║
║   Source: github.com/freeCodeCamp/freeCodeCamp       ║
║   License: BSD-3-Clause (fully open-source)          ║
╚══════════════════════════════════════════════════════╝`);

    // --list flag
    if (args.includes("--list")) {
        console.log("\n  Available blocks:\n");
        CODEBATTLE_BLOCKS.forEach((b, i) =>
            console.log(`    ${String(i + 1).padStart(2)}. ${b}`)
        );
        console.log(`\n  Total: ${CODEBATTLE_BLOCKS.length} blocks configured\n`);
        return;
    }

    fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    // --block flag for single block
    const blockIdx = args.indexOf("--block");
    const blocksToFetch =
        blockIdx !== -1 ? [args[blockIdx + 1]] : CODEBATTLE_BLOCKS;

    console.log(`\n  Target: ${blocksToFetch.length} block(s)`);
    console.log(`  Output: ${OUTPUT_DIR}`);

    if (!process.env.GITHUB_TOKEN) {
        console.log(
            `  ⚠ No GITHUB_TOKEN set — limited to 60 API requests/hour`
        );
        console.log(
            `    Tip: export GITHUB_TOKEN=ghp_... for 5,000 requests/hour\n`
        );
    }

    const results = [];
    for (const block of blocksToFetch) {
        const result = await fetchBlock(block);
        results.push(result);
    }

    // Save the AI conversion prompt alongside the data
    savePromptFile();

    // Summary
    const totalFetched = results.reduce((a, r) => a + r.fetched, 0);
    const totalSkipped = results.reduce((a, r) => a + r.skipped, 0);
    const errors = results.filter((r) => r.error);

    console.log(`\n  ════════════════════════════════════════`);
    console.log(`  EXTRACTION COMPLETE`);
    console.log(`  ────────────────────────────────────────`);
    console.log(`  Files downloaded : ${totalFetched}`);
    console.log(`  Already cached   : ${totalSkipped}`);
    console.log(`  Errors           : ${errors.length}`);
    console.log(`  Output directory : ${OUTPUT_DIR}`);
    console.log(`  ════════════════════════════════════════\n`);

    if (totalFetched > 0) {
        console.log(`  🎯 NEXT STEP:`);
        console.log(`  Feed the .md files and the DATA_ARCHITECT_PROMPT.md`);
        console.log(`  into an AI to generate CodeBattle-themed JSON missions.\n`);
    }
}

main().catch((err) => {
    console.error("\n  ✗ Fatal error:", err.message);
    process.exit(1);
});
