export type Difficulty = "recruit" | "soldier" | "commander" | "general" | "boss";

export type MissionType = "bootcamp" | "boss";

export type Language = "HTML" | "CSS" | "JavaScript" | "Python" | "Database";

export interface Mission {
    id: string;
    title: string;
    description: string;
    objective: string;
    xp: number;
    difficulty: Difficulty;
    skills: string[];
    code: string;
    solution: string;
    testAssertions: string[];
    hints: string[];
    type: MissionType;
}

export interface Phase {
    id: string;
    title: string;
    description: string;
    language: Language;
    languageBadgeColor: string;
    iconUrl?: string;
    missions: Mission[];
    isLocked: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// PHASE 1: HTML DATA STREAM
// ─────────────────────────────────────────────────────────────────────────────

const phase1Missions: Mission[] = [
    {
        id: "m-html-01",
        title: "Initialize the Neural Link",
        description: "Recruit, every simulation requires a foundation. You must lay the structural groundwork for the neural link interface by configuring the fundamental tags.",
        objective: "Create a complete HTML structure with `<!DOCTYPE html>`, an `<html>` root, a `<head>` containing a `<title>` ('Neural Link Status'), and an empty `<body>`.",
        xp: 100,
        difficulty: "recruit",
        skills: ["html", "beginner", "structure"],
        code: "<!-- Initialize system here -->",
        solution: "<!DOCTYPE html>\n<html>\n  <head>\n    <title>Neural Link Status</title>\n  </head>\n  <body>\n  </body>\n</html>",
        testAssertions: [
            "There should be a `<!DOCTYPE html>` declaration.",
            "There should be an `html` element.",
            "There should be a `head` element inside the `html` element.",
            "There should be a `body` element inside the `html` element.",
            "The `title` should be 'Neural Link Status'."
        ],
        hints: [
            "Start with the Document Type declaration.",
            "The `<head>` goes before the `<body>`."
        ],
        type: "bootcamp"
    },
    {
        id: "m-html-02",
        title: "Deploy Warning Header",
        description: "The system interface is too quiet. We need to deploy a high-priority warning message to all connected operatives via a primary header node.",
        objective: "Add an `h1` element inside the `<body>` containing the text 'SYSTEM BREACH DETECTED'.",
        xp: 100,
        difficulty: "recruit",
        skills: ["html", "beginner", "elements", "typography"],
        code: "<body>\n  <!-- Add header below -->\n\n</body>",
        solution: "<body>\n  <h1>SYSTEM BREACH DETECTED</h1>\n</body>",
        testAssertions: [
            "There should be an `h1` element.",
            "The `h1` should contain the text 'SYSTEM BREACH DETECTED'."
        ],
        hints: ["Use the `<h1>` and `</h1>` tags for the primary header."],
        type: "bootcamp"
    },
    {
        id: "m-html-03",
        title: "Establish Main Interface Sector",
        description: "Operative, it's critical to isolate primary interactive elements from background radiation. We use the `<main>` structural tag to define where the core action occurs.",
        objective: "Wrap the two provided paragraph elements within a `<main>` tag to isolate the core data.",
        xp: 100,
        difficulty: "soldier",
        skills: ["html", "semantic"],
        code: "<body>\n  <h1>Access Logs</h1>\n  <p>User Cypher logged in at 02:00.</p>\n  <p>Incoming transmission encrypted.</p>\n</body>",
        solution: "<body>\n  <h1>Access Logs</h1>\n  <main>\n    <p>User Cypher logged in at 02:00.</p>\n    <p>Incoming transmission encrypted.</p>\n  </main>\n</body>",
        testAssertions: [
            "There should be a `main` element.",
            "The `main` element should wrap both `p` elements."
        ],
        hints: ["Place `<main>` before the first `<p>` and `</main>` after the second `<p>`."],
        type: "bootcamp"
    },
    {
        id: "m-html-04",
        title: "Configure Terminal Authentication",
        description: "The mainframe is exposed. We need to establish an authentication form to accept operative credentials. Without proper attributes, the data cannot be routed to the secure server.",
        objective: "Create a `<form>` containing an `<input type=\"text\">` with `name=\"operative_id\"`, and a `<button type=\"submit\">` labeled 'Authorize'.",
        xp: 150,
        difficulty: "soldier",
        skills: ["html", "forms", "input"],
        code: "<main>\n  <h2>Login Node</h2>\n  <!-- Build the form here -->\n\n</main>",
        solution: "<main>\n  <h2>Login Node</h2>\n  <form>\n    <input type=\"text\" name=\"operative_id\">\n    <button type=\"submit\">Authorize</button>\n  </form>\n</main>",
        testAssertions: [
            "There should be a `form` element.",
            "The form should contain an `input` element.",
            "The input element must have the `name` attribute set to `operative_id`.",
            "There should be a `button` with type `submit` containing the text 'Authorize'."
        ],
        hints: [
            "An input element does not have a closing tag.",
            "Remember to nest the input and button inside the `<form>`."
        ],
        type: "bootcamp"
    },
    {
        id: "boss-html-reconstruct",
        title: "BOSS: Reconstruct Control Panel",
        description: "The enemy has wiped the orbital control panel's structural code! You must single-handedly rebuild the interface structure from memory to regain control of the orbital lasers.",
        objective: "Write a full HTML document skeleton. Include a `<head>` with a `<title>` ('Orbital Control'), and a `<body>` containing an `<h1>` ('Laser Status') and a `<ul>` list with two `<li>` elements ('Laser 1: Offline', 'Laser 2: Online').",
        xp: 500,
        difficulty: "boss",
        skills: ["html", "structure", "lists", "exam"],
        code: "",
        solution: "<!DOCTYPE html>\n<html>\n  <head>\n    <title>Orbital Control</title>\n  </head>\n  <body>\n    <h1>Laser Status</h1>\n    <ul>\n      <li>Laser 1: Offline</li>\n      <li>Laser 2: Online</li>\n    </ul>\n  </body>\n</html>",
        testAssertions: [
            "There must be a valid HTML skeleton (DOCTYPE, html, head, body).",
            "Title must be 'Orbital Control'.",
            "Body must have an `h1` with 'Laser Status'.",
            "Body must have a `ul` list with two `li` items.",
            "The `li` items must match the required status text."
        ],
        hints: [
            "Combine everything you've learned: Document structure, headers, and lists.",
            "`<ul>` means unordered list, and each list item is an `<li>`."
        ],
        type: "boss"
    }
];

// ─────────────────────────────────────────────────────────────────────────────
// EXPORT EXPERIENCES
// ─────────────────────────────────────────────────────────────────────────────

export const curriculum: Phase[] = [
    {
        id: "p1-html",
        title: "Phase 1: Structure Subversion",
        description: "Master the foundational protocols of HTML5. Construct logical document structures to map out targets before deploying cascading styles.",
        language: "HTML",
        languageBadgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/50",
        missions: phase1Missions,
        isLocked: false
    },
    {
        id: "p2-css",
        title: "Phase 2: Visual Obfuscation",
        description: "Manipulate the visual perception of the interface. Employ basic CSS, Flexbox routines, and Grid frameworks to mask underlying structures and construct responsive layouts.",
        language: "CSS",
        languageBadgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/50",
        missions: [],
        isLocked: true
    },
    {
        id: "p3-js-basics",
        title: "Phase 3: Logic Injection",
        description: "The core of interactive warfare. Inject JavaScript primitives, manipulate loops, breach conditional defenses, and interface directly with DOM structures.",
        language: "JavaScript",
        languageBadgeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
        missions: [],
        isLocked: true
    },
    {
        id: "p4-algorithms",
        title: "Phase 4: Algorithmic Engineering",
        description: "Optimize payload delivery. Construct advanced data structures, execute sorting maneuvers, and develop regex filters to parse encrypted intelligence.",
        language: "JavaScript",
        languageBadgeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
        missions: [],
        isLocked: true
    },
    {
        id: "p5-python",
        title: "Phase 5: Backend Operations",
        description: "Deploy server-side logic sequences. Utilize Python scripts for heavy computation, file manipulation, and building robust API fortifications.",
        language: "Python",
        languageBadgeColor: "bg-green-500/20 text-green-400 border-green-500/50",
        missions: [],
        isLocked: true
    }
];
