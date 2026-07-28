# CodeBattle — Data Architect Conversion Prompt

Use this prompt with any AI (Claude, GPT, etc.) to convert raw freeCodeCamp .md files into CodeBattle-themed JSON missions.

---

```
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
```
