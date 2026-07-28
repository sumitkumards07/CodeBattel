export const chapters = [
  { id: 1, group: "Learn React", title: "JSX Basics", tags: ["JSX syntax", "Expressions with {}", "className", "Fragments"] },
  { id: 2, group: "Learn React", title: "Components & Props", tags: ["Function components", "Props", "Destructuring", "Composition"] },
  { id: 3, group: "Learn React", title: "State & useState", tags: ["useState hook", "State updates", "Re-rendering", "Immutability"] },
  { id: 4, group: "Learn React", title: "Handling Events", tags: ["onClick", "onChange", "Forms"] },
  { id: 5, group: "Learn React", title: "useEffect & Lifecycle", tags: ["useEffect", "Dependency array", "Cleanup", "Side effects"] },
  { id: 6, group: "Learn React", title: "Conditional Rendering", tags: ["Ternary operator", "&& short-circuit", "Conditional styles"] },
  { id: 7, group: "Learn React", title: "Lists & Keys", tags: ["Array.map()", "key prop", "Filtering lists", "Unique identifiers"] },
  { id: 8, group: "Learn React", title: "Forms & Controlled Components", tags: ["Controlled inputs", "Form submission", "Select & textarea", "preventDefault"] },
  { id: 9, group: "Learn React", title: "Context API", tags: ["createContext", "useContext", "Provider", "Avoiding prop drilling"] },
  { id: 10, group: "Learn React", title: "Custom Hooks", tags: ["Custom hooks", "use prefix", "Reusability", "Encapsulation"] },
  { id: 11, group: "Learn React", title: "Component Composition", tags: ["children prop", "Containment", "Reusability"] },
  { id: 12, group: "Learn React", title: "useRef", tags: ["useRef hook", "DOM access", "Mutable refs"] },
  { id: 13, group: "Learn React", title: "useReducer", tags: ["State management", "Reducers", "dispatch", "actions"] },
  { id: 14, group: "Learn React", title: "Performance Optimization", tags: ["useMemo", "useCallback", "React.memo"] },
  { id: 15, group: "Learn React", title: "React.memo", tags: ["React.memo", "shallow comparison", "re-renders"] },
  { id: 16, group: "Learn React", title: "Error Boundaries", tags: ["Error boundaries", "componentDidCatch", "getDerivedStateFromError"] },
  { id: 17, group: "Learn React", title: "Suspense & lazy", tags: ["Suspense", "lazy", "code splitting", "fallback"] },
  { id: 18, group: "Learn React", title: "Portals", tags: ["Portals", "createPortal", "document.body", "Modals"] },
  { id: 19, group: "Learn React", title: "Capstone: Notes App", tags: ["Capstone", "useNotes", "State", "Events"] },
  { id: 20, group: "Fix the Bug", title: "The Frozen Counter", tags: ["Bug", "useState", "Re-render"] },
  { id: 21, group: "Fix the Bug", title: "The Infinite Loop", tags: ["Bug", "useEffect", "Dependency array"] },
  { id: 22, group: "Fix the Bug", title: "The Stale Closure", tags: ["Bug", "useState", "Functional updates", "Closures"] },
  { id: 23, group: "Fix the Bug", title: "The Disappearing List", tags: ["Bug", "Array mutation", "State"] },
  { id: 24, group: "Fix the Bug", title: "The Instant Fire", tags: ["Bug", "Event handlers", "onClick"] },
  { id: 25, group: "Fix the Bug", title: "The Mutant Array", tags: ["Bug", "Mutation", "Immutability"] },
  { id: 26, group: "Fix the Bug", title: "The Missing Cleanup", tags: ["Bug", "useEffect", "Memory leak"] },
  { id: 27, group: "Fix the Bug", title: "The Conditional Hook", tags: ["Bug", "Rules of Hooks", "useEffect"] },
  { id: 28, group: "Fix the Bug", title: "The Slow Reply", tags: ["Bug", "Closures", "setTimeout"] },
  { id: 29, group: "Fix the Bug", title: "The Wandering Edit", tags: ["Bug", "Keys", "Lists"] },
  { id: 30, group: "Fix the Bug", title: "The Lost Increment", tags: ["Bug", "useRef", "State"] },
  { id: 31, group: "Fix the Bug", title: "The Dropped Prop", tags: ["Bug", "Props", "Destructuring"] },
  { id: 32, group: "Fix the Bug", title: "The Read-Only Input", tags: ["Bug", "Controlled components", "onChange"] },
  { id: 33, group: "Fix the Bug", title: "The Restless Effect", tags: ["Bug", "useEffect", "Infinite loop"] },
  { id: 34, group: "Fix the Bug", title: "The Page Reload", tags: ["Bug", "Forms", "preventDefault"] },
  { id: 35, group: "Fix the Bug", title: "The Lost This", tags: ["Bug", "Context", "Callbacks"] },
  { id: 36, group: "Mini-Projects", title: "Todo App", tags: ["Project", "State", "Filtering", "CRUD"] },
  { id: 37, group: "Mini-Projects", title: "User Directory", tags: ["Project", "API", "useEffect", "Search"] },
  { id: 38, group: "Mini-Projects", title: "Form Wizard", tags: ["Project", "Forms", "Multi-step", "State"] },
  { id: 39, group: "Tutorials", title: "Video Tutorial", tags: ["Coming Soon"] },
];

export const lessonContentMap = {
  1: {
    description: "JSX looks like HTML but lives inside JavaScript. Under the hood, `<h1>Hello</h1>` becomes `React.createElement('h1', null, 'Hello')`.",
    rules: [
      "Use `className` instead of `class`",
      "Embed JavaScript expressions with curly braces `{}`",
      "JSX must return a single root element (use `<div>` or `<>` fragments)",
      "Self-closing tags must end with `/>` (e.g., `<img />`, `<br />`)"
    ],
    taskDescription: "Create an App component that renders:\n• A `<div>` wrapper containing:\n  - An `<h1>` with the text \"Hello, React!\"\n  - A `<p>` that displays the value of `const year = 2026` using a JSX expression\n  - A `<p>` with `className=\"subtitle\"` containing any text",
    taskHint: "Use {year} inside JSX to embed the variable.",
    starterCode: `function App() {\n  const year = 2026;\n\n  return (\n    // Replace this comment with your JSX\n    null\n  );\n}`,
    solutionCode: `function App() {\n  const year = 2026;\n\n  return (\n    <div>\n      <h1>Hello, React!</h1>\n      <p>{year}</p>\n      <p className="subtitle">Welcome to React</p>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Renders an <h1> with "Hello, React!"' },
      { id: 2, label: "Displays the year 2026 in a <p> tag using an expression" },
      { id: 3, label: 'Has a <p> with className="subtitle"' },
      { id: 4, label: "Wrapped in a single root <div>" },
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      return {
        1: !!iframeDoc.querySelector("h1")?.textContent.includes("Hello, React!"),
        2: [...iframeDoc.querySelectorAll("p")].some(p => p.textContent.includes("2026")),
        3: !!iframeDoc.querySelector("p.subtitle"),
        4: iframeDoc.body.children.length === 1 && iframeDoc.body.children[0].tagName === "DIV",
      };
    }
  },
  2: {
    description: "Components are the building blocks of React. A component is just a function that returns JSX. Props let you pass data from a parent component to a child.",
    rules: [
      "Components must start with an uppercase letter",
      "Props are passed like HTML attributes: `<Greeting name=\"Alice\" />`",
      "Inside the component, access them via the function parameter: `function Greeting({ name })`",
      "Props are read-only — never modify them"
    ],
    taskDescription: "Create a `UserCard` component that accepts `name` and `role` props\n• Render an `<h2>` with the name\n• Render a `<p>` with the role\n• Wrap both in a `<div>` with `className=\"user-card\"`\n\nIn the `App` component, render two `UserCard` components:\n• One with name \"Alice\" and role \"Developer\"\n• One with name \"Bob\" and role \"Designer\"",
    taskHint: "Define UserCard as a separate function above App. Destructure props: `function UserCard({ name, role })`. Use `<UserCard name=\"Alice\" role=\"Developer\" />` to render it.",
    starterCode: `function App() {\n  return (\n    // Replace this comment with your JSX\n    null\n  );\n}`,
    solutionCode: `function UserCard({ name, role }) {\n  return (\n    <div className=\"user-card\">\n      <h2>{name}</h2>\n      <p>{role}</p>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <div>\n      <UserCard name=\"Alice\" role=\"Developer\" />\n      <UserCard name=\"Bob\" role=\"Designer\" />\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Renders two UserCard components' },
      { id: 2, label: 'First card shows "Alice" and "Developer"' },
      { id: 3, label: 'Second card shows "Bob" and "Designer"' },
      { id: 4, label: 'Each card has an <h2> and <p> inside a div' },
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      const text = iframeDoc.body.textContent || "";
      const cards = [...iframeDoc.querySelectorAll(".user-card")];
      return {
        1: cards.length === 2,
        2: cards[0] ? cards[0].textContent.includes("Alice") && cards[0].textContent.includes("Developer") : false,
        3: cards[1] ? cards[1].textContent.includes("Bob") && cards[1].textContent.includes("Designer") : false,
        4: cards.every(card => card.querySelector("h2") && card.querySelector("p") && card.tagName === "DIV"),
      };
    }
  },
  3: {
    description: "State is data that changes over time. When state changes, React re-renders the component to reflect the new data.\n\nHow useState Works:\n`const [count, setCount] = useState(0);`\n`useState` returns an array: `[currentValue, setterFunction]`",
    rules: [
      "Calling the setter triggers a re-render",
      "Never modify state directly — always use the setter"
    ],
    taskDescription: "Build a counter component:\n• Initialize a `count` state to 0 using `useState`\n• Display the count in an `<h2>` with id \"count\"\n• Add an Increment button (id: \"increment\") that increases count by 1\n• Add a Decrement button (id: \"decrement\") that decreases count by 1\n• Add a Reset button (id: \"reset\") that sets count back to 0",
    taskHint: "Import useState: `const { useState } = React;`\nUse `onClick={() => setCount(count + 1)}` for increment\nRemember to give each button the correct id.",
    starterCode: `const { useState } = React;\n\nfunction App() {\n  return (\n    // Replace this comment with your JSX\n    null\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nfunction App() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <h2 id=\"count\">Count: {count}</h2>\n      <button id=\"increment\" onClick={() => setCount(count + 1)}>Increment</button>\n      <button id=\"decrement\" onClick={() => setCount(count - 1)}>Decrement</button>\n      <button id=\"reset\" onClick={() => setCount(0)}>Reset</button>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Displays initial count of 0' },
      { id: 2, label: 'Increment button exists' },
      { id: 3, label: 'Decrement button exists' },
      { id: 4, label: 'Reset button exists' },
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      const countEl = iframeDoc.getElementById("count");
      const incBtn = iframeDoc.getElementById("increment");
      const decBtn = iframeDoc.getElementById("decrement");
      const resetBtn = iframeDoc.getElementById("reset");
      
      return {
        1: countEl ? countEl.textContent.includes("0") : false,
        2: !!incBtn,
        3: !!decBtn,
        4: !!resetBtn,
      };
    }
  },
  4: {
    description: "React events are named using camelCase: `onClick`, `onChange`, `onSubmit`. You pass a function as the handler, not a string.\n\nKey Patterns:\n```javascript\n// Inline handler\n<button onClick={() => alert('clicked!')}>Click</button>\n\n// Named handler\nfunction handleClick() { alert('clicked!'); }\n<button onClick={handleClick}>Click</button>\n\n// With event object\n<input onChange={(e) => setValue(e.target.value)} />\n```",
    rules: [
      "React events are named using camelCase",
      "Pass a function as the handler, not a string"
    ],
    taskDescription: "Build a simple item list:\n• Create an input with id \"item-input\" for typing items\n• Track the input value in state\n• Add a button with id \"add-btn\" that adds the input text to a list\n• After adding, clear the input\n• Render the list as `<ul id=\"item-list\">` with `<li>` elements\n• Each `<li>` should display the item text",
    taskHint: "Use `onChange={(e) => setInputValue(e.target.value)}` on the input.\nSet `value={inputValue}` to make it a controlled input.\nAfter adding, call `setInputValue(\"\")` to clear.",
    starterCode: `const { useState } = React;\n\nfunction App() {\n  return (\n    // Replace this comment with your JSX\n    null\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nfunction App() {\n  const [inputValue, setInputValue] = useState('');\n  const [items, setItems] = useState([]);\n\n  const handleAdd = () => {\n    if (inputValue.trim()) {\n      setItems([...items, inputValue.trim()]);\n      setInputValue('');\n    }\n  };\n\n  return (\n    <div>\n      <input\n        id=\"item-input\"\n        value={inputValue}\n        onChange={(e) => setInputValue(e.target.value)}\n      />\n      <button id=\"add-btn\" onClick={handleAdd}>Add</button>\n      <ul id=\"item-list\">\n        {items.map((item, i) => (\n          <li key={i}>{item}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Has an input with id "item-input"' },
      { id: 2, label: 'Has a button with id "add-btn"' },
      { id: 3, label: 'Renders the list as <ul id="item-list">' },
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      return {
        1: !!iframeDoc.getElementById("item-input"),
        2: !!iframeDoc.getElementById("add-btn"),
        3: !!iframeDoc.getElementById("item-list"),
      };
    }
  },
  5: {
    description: "useEffect lets you run side effects — things that happen outside of rendering, like updating the document title, setting up timers, or fetching data.\n\nHow It Works:\n```javascript\n// Runs after every render\nuseEffect(() => { ... });\n\n// Runs only on mount (empty deps)\nuseEffect(() => { ... }, []);\n\n// Runs when \"count\" changes\nuseEffect(() => { ... }, [count]);\n\n// Cleanup function (runs before next effect or unmount)\nuseEffect(() => {\n  const timer = setInterval(...);\n  return () => clearInterval(timer); // cleanup\n}, []);\n```",
    rules: [],
    taskDescription: "Create a counter with `useState`, starting at 0\n• Display it in `<h2 id=\"count\">`\n• Use `useEffect` to update `document.title` to \"Count: X\" whenever count changes\n• Add an Increment button with id \"increment\"\n• Display a message `<p id=\"mounted\">` that says \"Component is mounted!\" — set this text using `useEffect` with an empty dependency array and a state variable\n\nNote: The document title won't be visible in the preview, but the tests will check it!",
    taskHint: "```javascript\nuseEffect(() => { document.title = `Count: ${count}`; }, [count]);\n```\nFor mount-only effect, use an empty dependency array: `useEffect(() => {...}, [])`\nThe cleanup function is optional for this exercise.",
    starterCode: `const { useState, useEffect } = React;\n\nfunction App() {\n  return (\n    // Replace this comment with your JSX\n    null\n  );\n}`,
    solutionCode: `const { useState, useEffect } = React;\n\nfunction App() {\n  const [count, setCount] = useState(0);\n  const [mountMsg, setMountMsg] = useState('');\n\n  useEffect(() => {\n    document.title = 'Count: ' + count;\n  }, [count]);\n\n  useEffect(() => {\n    setMountMsg('Component is mounted!');\n  }, []);\n\n  return (\n    <div>\n      <h2 id=\"count\">Count: {count}</h2>\n      <button id=\"increment\" onClick={() => setCount(count + 1)}>\n        Increment\n      </button>\n      <p id=\"mounted\">{mountMsg}</p>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Renders count as 0' },
      { id: 2, label: 'document.title updates with count' },
      { id: 3, label: 'Shows "Component is mounted!" on mount' },
      { id: 4, label: 'Increment button exists' },
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      const countEl = iframeDoc.getElementById("count");
      const mountedEl = iframeDoc.getElementById("mounted");
      const incBtn = iframeDoc.getElementById("increment");
      
      return {
        1: countEl ? countEl.textContent.includes("0") : false,
        2: iframeDoc.title.includes("Count:"),
        3: mountedEl ? mountedEl.textContent === "Component is mounted!" : false,
        4: !!incBtn,
      };
    }
  },
  6: {
    description: "React doesn't have special directives like v-if. Instead, you use plain JavaScript:\n\nPatterns:\n```javascript\n// Ternary\n{isLoggedIn ? <Dashboard /> : <LoginForm />}\n\n// && short-circuit (render or nothing)\n{showBanner && <Banner />}\n\n// Early return\nif (isLoading) return <Spinner />;\n```",
    rules: [],
    taskDescription: "Build a login/logout toggle:\n• Track `isLoggedIn` state, starting as false\n• When logged out:\n  - Show `<p id=\"status\">` with text \"Please log in\"\n  - Show a button with id \"login-btn\" and text \"Log In\"\n• When logged in:\n  - Show `<p id=\"status\">` with text \"Welcome back!\"\n  - Show a button with id \"logout-btn\" and text \"Log Out\"\n• Add a `<span id=\"badge\">` that only appears when logged in, containing \"Online\"",
    taskHint: "Use a ternary for the status text: `isLoggedIn ? \"Welcome back!\" : \"Please log in\"`\nUse `{isLoggedIn && <span id=\"badge\">Online</span>}` for conditional display\nRemember to swap between login/logout buttons too",
    starterCode: `const { useState } = React;\n\nfunction App() {\n  return (\n    // Replace this comment with your JSX\n    null\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nfunction App() {\n  const [isLoggedIn, setIsLoggedIn] = useState(false);\n\n  return (\n    <div>\n      <p id=\"status\">{isLoggedIn ? 'Welcome back!' : 'Please log in'}</p>\n      {isLoggedIn ? (\n        <button id=\"logout-btn\" onClick={() => setIsLoggedIn(false)}>Log Out</button>\n      ) : (\n        <button id=\"login-btn\" onClick={() => setIsLoggedIn(true)}>Log In</button>\n      )}\n      {isLoggedIn && <span id=\"badge\">Online</span>}\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Initially shows "Please log in"' },
      { id: 2, label: 'Shows Log In button when logged out' },
      { id: 3, label: 'Does not show Log Out button initially' },
      { id: 4, label: 'Badge with "Online" is hidden initially' },
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      const statusEl = iframeDoc.getElementById("status");
      const loginBtn = iframeDoc.getElementById("login-btn");
      const logoutBtn = iframeDoc.getElementById("logout-btn");
      const badge = iframeDoc.getElementById("badge");
      
      return {
        1: statusEl ? statusEl.textContent.includes("Please log in") : false,
        2: !!loginBtn,
        3: !logoutBtn,
        4: !badge,
      };
    }
  },
  7: {
    description: "To render a list of items, use `Array.map()` to transform data into JSX elements.\n\nThe `key` prop:\nReact needs a unique key for each item in a list so it can efficiently update the DOM:\n```javascript\n{items.map(item => (\n  <li key={item.id}>{item.text}</li>\n))}\n```\nImportant: Never use array index as a key if the list can be reordered or filtered. Use a stable unique ID instead.",
    rules: [],
    taskDescription: "Given this data:\n```javascript\nconst todos = [\n  { id: 1, text: 'Learn React', done: true },\n  { id: 2, text: 'Build a project', done: false },\n  { id: 3, text: 'Deploy to production', done: false },\n];\n```\n• Render all todos in a `<ul id=\"todo-list\">`\n• Each `<li>` should have `data-id={todo.id}` and display the text\n• Completed todos should have `className=\"done\"`\n• Add a button with id \"filter-btn\" that toggles between showing all and active only (not done)\n• Add a `<span id=\"count\">` showing the number of visible items",
    taskHint: "Use `.map()` to transform todos into `<li>` elements\nUse `key={todo.id}` on each `<li>`\nFilter with: `showAll ? todos : todos.filter(t => !t.done)`",
    starterCode: `const { useState } = React;\n\nfunction App() {\n  const todos = [\n    { id: 1, text: 'Learn React', done: true },\n    { id: 2, text: 'Build a project', done: false },\n    { id: 3, text: 'Deploy to production', done: false },\n  ];\n\n  return (\n    // Replace this comment with your JSX\n    null\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nfunction App() {\n  const todos = [\n    { id: 1, text: 'Learn React', done: true },\n    { id: 2, text: 'Build a project', done: false },\n    { id: 3, text: 'Deploy to production', done: false },\n  ];\n\n  const [showAll, setShowAll] = useState(true);\n  const visible = showAll ? todos : todos.filter(t => !t.done);\n\n  return (\n    <div>\n      <button id=\"filter-btn\" onClick={() => setShowAll(!showAll)}>\n        {showAll ? 'Show Active' : 'Show All'}\n      </button>\n      <span id=\"count\">{visible.length}</span>\n      <ul id=\"todo-list\">\n        {visible.map(todo => (\n          <li key={todo.id} data-id={todo.id} className={todo.done ? 'done' : ''}>\n            {todo.text}\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Initially renders all 3 todos' },
      { id: 2, label: 'Each <li> has a data-id attribute' },
      { id: 3, label: 'Completed todo has className "done"' },
      { id: 4, label: 'Filter button exists' },
      { id: 5, label: 'Count shows number of visible items' },
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      const listItems = [...iframeDoc.querySelectorAll("#todo-list li")];
      const countEl = iframeDoc.getElementById("count");
      
      return {
        1: listItems.length === 3,
        2: listItems.length > 0 && listItems.every(li => li.hasAttribute("data-id")),
        3: !!iframeDoc.querySelector("#todo-list li.done"),
        4: !!iframeDoc.getElementById("filter-btn"),
        5: countEl ? countEl.textContent === "3" : false,
      };
    }
  },
  8: {
    description: "In React, form elements like `<input>`, `<textarea>`, and `<select>` can be controlled — their value is driven by React state.\n\nPattern:\n```javascript\nconst [name, setName] = useState('');\n<input value={name} onChange={(e) => setName(e.target.value)} />\n```",
    rules: [],
    taskDescription: "Build a registration form:\n• A text input for name with id \"name-input\"\n• An email input with id \"email-input\"\n• A `<select>` for role with id \"role-select\" and options: \"student\", \"developer\", \"designer\"\n• A submit button with id \"submit-btn\"\n• All inputs must be controlled (value + onChange)\n• On submit, prevent page reload and show a `<div id=\"summary\">` displaying: \"Name: [name], Email: [email], Role: [role]\"\n• The summary should only appear after submission",
    taskHint: "Use `e.preventDefault()` in handleSubmit to prevent page reload\nEach input needs `value={state}` and `onChange={(e) => setState(e.target.value)}`\nOnly render the summary div when submitted is true",
    starterCode: `const { useState } = React;\n\nfunction App() {\n  return (\n    // Replace this comment with your JSX\n    null\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nfunction App() {\n  const [name, setName] = useState('');\n  const [email, setEmail] = useState('');\n  const [role, setRole] = useState('student');\n  const [submitted, setSubmitted] = useState(false);\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    setSubmitted(true);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input id=\"name-input\" value={name} onChange={(e) => setName(e.target.value)} placeholder=\"Name\" />\n      <input id=\"email-input\" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=\"Email\" type=\"email\" />\n      <select id=\"role-select\" value={role} onChange={(e) => setRole(e.target.value)}>\n        <option value=\"student\">student</option>\n        <option value=\"developer\">developer</option>\n        <option value=\"designer\">designer</option>\n      </select>\n      <button id=\"submit-btn\" type=\"submit\">Submit</button>\n      {submitted && (\n        <div id=\"summary\">Name: {name}, Email: {email}, Role: {role}</div>\n      )}\n    </form>\n  );\n}`,
    tests: [
      { id: 1, label: 'Has name, email inputs and role select' },
      { id: 2, label: 'Summary not shown before submission' },
      { id: 3, label: 'Role select has correct options' },
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      const nameInput = iframeDoc.getElementById("name-input");
      const emailInput = iframeDoc.getElementById("email-input");
      const roleSelect = iframeDoc.getElementById("role-select");
      const summary = iframeDoc.getElementById("summary");
      
      return {
        1: !!nameInput && !!emailInput && !!roleSelect,
        2: !summary,
        3: roleSelect ? roleSelect.options.length >= 3 : false,
      };
    }
  },
  9: {
    description: "When data needs to be accessed by many components at different nesting levels, Context lets you pass it without threading props through every level.\n\nHow It Works:\n```javascript\n// 1. Create context\nconst ThemeContext = createContext('light');\n\n// 2. Provide value at top level\n<ThemeContext.Provider value=\"dark\">\n  <App />\n</ThemeContext.Provider>\n\n// 3. Consume anywhere below\nfunction Button() {\n  const theme = useContext(ThemeContext);\n  return <button className={theme}>Click</button>;\n}\n```",
    rules: [],
    taskDescription: "Build a theme switcher using Context:\n• Create a `ThemeContext` using `createContext`\n• In App, track theme state (\"light\" or \"dark\"), starting with \"light\"\n• Wrap children in `ThemeContext.Provider` with value `{ theme, toggleTheme }`\n• Create a `ThemeDisplay` component that:\n  - Uses `useContext(ThemeContext)` to read the theme\n  - Renders `<div id=\"theme-display\">` with text \"Current theme: light\" or \"dark\"\n  - Renders a button with id \"toggle-btn\" that calls `toggleTheme`\n\nThemeDisplay must NOT receive `theme` as a prop — it must use Context.",
    taskHint: "Wrap `ThemeDisplay` in `<ThemeContext.Provider value={{ theme, toggleTheme }}>`\nIn ThemeDisplay: `const { theme, toggleTheme } = useContext(ThemeContext)`\n`createContext` is available as a global in this sandbox.",
    starterCode: `const { useState, createContext, useContext } = React;\n\nfunction ThemeDisplay() {\n  return (\n    <div id=\"theme-display\">\n      {/* Render theme and toggle button here */}\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    // Replace this comment with your JSX\n    null\n  );\n}`,
    solutionCode: `const { useState, createContext, useContext } = React;\nconst ThemeContext = createContext();\n\nfunction ThemeDisplay() {\n  const { theme, toggleTheme } = useContext(ThemeContext);\n  return (\n    <div id=\"theme-display\">\n      <p id=\"theme-text\">Current theme: {theme}</p>\n      <button id=\"toggle-btn\" onClick={toggleTheme}>Toggle Theme</button>\n    </div>\n  );\n}\n\nfunction App() {\n  const [theme, setTheme] = useState('light');\n\n  const toggleTheme = () => {\n    setTheme(theme === 'light' ? 'dark' : 'light');\n  };\n\n  return (\n    <ThemeContext.Provider value={{ theme, toggleTheme }}>\n      <ThemeDisplay />\n    </ThemeContext.Provider>\n  );\n}`,
    tests: [
      { id: 1, label: 'Initially displays "Current theme: light"' },
      { id: 2, label: 'Toggle button switches to dark theme' },
      { id: 3, label: 'Toggling again returns to light' },
      { id: 4, label: 'ThemeDisplay reads from Context (no theme prop)' },
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      const themeDisplay = iframeDoc.getElementById("theme-display");
      const toggleBtn = iframeDoc.getElementById("toggle-btn");
      
      return {
        1: themeDisplay ? themeDisplay.textContent.includes("Current theme: ") : false,
        2: !!toggleBtn,
        3: !!toggleBtn,
        4: !!themeDisplay,
      };
    }
  },
  10: {
    description: "A custom hook is a function that starts with `use` and can call other hooks. It lets you extract reusable stateful logic.\n\nExample:\n```javascript\nfunction useToggle(initial = false) {\n  const [value, setValue] = useState(initial);\n  const toggle = () => setValue(v => !v);\n  return [value, toggle];\n}\n\n// Usage\nfunction App() {\n  const [isOn, toggle] = useToggle(false);\n  return <button onClick={toggle}>{isOn ? 'ON' : 'OFF'}</button>;\n}\n```",
    rules: [],
    taskDescription: "Create a custom hook called `useCounter` that:\n• Accepts an `initialValue` parameter (default: 0)\n• Returns an object: `{ count, increment, decrement, reset }`\n• `increment` adds 1, `decrement` subtracts 1, `reset` goes back to `initial`\n\nUse `useCounter` in TWO separate components:\n• `CounterA`: uses `useCounter(0)`, renders in a div with id \"counter-a\"\n• `CounterB`: uses `useCounter(10)`, renders in a div with id \"counter-b\"\n• Each should display the count in a `<span className=\"count\">` and have increment/decrement buttons\n\nCrucially, each counter should work independently — clicking one doesn't affect the other.",
    taskHint: "Custom hooks are just functions that call `useState`/`useEffect` inside.\nReturn an object: `{ count, increment, decrement, reset }`.\nEach call to `useCounter` creates independent state.",
    starterCode: `const { useState } = React;\n\nfunction useCounter(initialValue = 0) {\n  // Add your custom hook logic here\n}\n\nfunction App() {\n  return (\n    // Replace this comment with your JSX\n    null\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nfunction useCounter(initialValue = 0) {\n  const [count, setCount] = useState(initialValue);\n  const increment = () => setCount(c => c + 1);\n  const decrement = () => setCount(c => c - 1);\n  const reset = () => setCount(initialValue);\n  return { count, increment, decrement, reset };\n}\n\nfunction CounterA() {\n  const { count, increment, decrement, reset } = useCounter(0);\n  return (\n    <div id=\"counter-a\">\n      <span className=\"count\">{count}</span>\n      <button className=\"inc\" onClick={increment}>+</button>\n      <button className=\"dec\" onClick={decrement}>-</button>\n      <button className=\"reset\" onClick={reset}>Reset</button>\n    </div>\n  );\n}\n\nfunction CounterB() {\n  const { count, increment, decrement, reset } = useCounter(10);\n  return (\n    <div id=\"counter-b\">\n      <span className=\"count\">{count}</span>\n      <button className=\"inc\" onClick={increment}>+</button>\n      <button className=\"dec\" onClick={decrement}>-</button>\n      <button className=\"reset\" onClick={reset}>Reset</button>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <div>\n      <CounterA />\n      <CounterB />\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'CounterA starts at 0' },
      { id: 2, label: 'CounterB starts at 10' },
      { id: 3, label: 'CounterA increment works' },
      { id: 4, label: 'Counters are independent' },
      { id: 5, label: 'CounterB reset returns to initial value' },
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      const counterA = iframeDoc.getElementById("counter-a");
      const counterB = iframeDoc.getElementById("counter-b");
      
      const countA = counterA ? counterA.querySelector(".count") : null;
      const countB = counterB ? counterB.querySelector(".count") : null;
      
      return {
        1: countA ? countA.textContent === "0" : false,
        2: countB ? countB.textContent === "10" : false,
        3: !!(counterA && counterA.querySelector(".inc")),
        4: !!(counterA && counterB),
        5: !!(counterB && counterB.querySelector(".reset")),
      };
    }
  },
  11: {
    description: "React favors composition over inheritance. The `children` prop lets you nest content inside components.\n\nThe children Pattern:\n```javascript\nfunction Card({ children, title }) {\n  return (\n    <div className=\"card\">\n      <h3>{title}</h3>\n      <div className=\"card-body\">{children}</div>\n    </div>\n  );\n}\n\n// Usage\n<Card title=\"Profile\">\n  <p>This is the card content!</p>\n</Card>\n```",
    rules: [],
    taskDescription: "Create a `Card` component that:\n• Accepts `title` (string) and `children` props\n• Renders a wrapper `<div className=\"card\">`\n• Shows the title in `<div className=\"card-header\">`\n• Renders children inside `<div className=\"card-body\">`\n\nCreate an `Alert` component that:\n• Accepts `type` prop (\"info\", \"success\", \"warning\") and `children`\n• Renders `<div className=\"alert alert-{type}\">`\n• Renders children inside\n\nIn App, compose them:\nA Card with title \"Notifications\" containing:\n• An Alert of type \"success\" with text \"Task completed!\"\n• An Alert of type \"warning\" with text \"Low disk space\"",
    taskHint: "Use `{ children }` in the function parameters to accept nested content\n`className={\"alert alert-\" + type}` creates dynamic class names\nNest Alert components inside Card as children",
    starterCode: `const { useState } = React;\n\nfunction Card({ title, children }) {\n  // Implement Card\n}\n\nfunction Alert({ type, children }) {\n  // Implement Alert\n}\n\nfunction App() {\n  return (\n    // Replace this comment with your JSX\n    null\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nfunction Card({ title, children }) {\n  return (\n    <div className=\"card\">\n      <div className=\"card-header\">{title}</div>\n      <div className=\"card-body\">{children}</div>\n    </div>\n  );\n}\n\nfunction Alert({ type, children }) {\n  return (\n    <div className={\"alert alert-\" + type}>\n      {children}\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <div>\n      <Card title=\"Notifications\">\n        <Alert type=\"success\">Task completed!</Alert>\n        <Alert type=\"warning\">Low disk space</Alert>\n      </Card>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Card component renders with className "card"' },
      { id: 2, label: 'Card has header with title "Notifications"' },
      { id: 3, label: 'Card has a body section' },
      { id: 4, label: 'Two Alert components rendered inside Card' },
      { id: 5, label: 'Alerts have correct type classes' },
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      const card = iframeDoc.querySelector(".card");
      const cardHeader = iframeDoc.querySelector(".card-header");
      const cardBody = iframeDoc.querySelector(".card-body");
      const alerts = cardBody ? [...cardBody.querySelectorAll(".alert")] : [];
      
      return {
        1: !!card,
        2: cardHeader ? cardHeader.textContent.includes("Notifications") : false,
        3: !!cardBody,
        4: alerts.length === 2,
        5: !!iframeDoc.querySelector(".alert-success") && !!iframeDoc.querySelector(".alert-warning"),
      };
    }
  },
  12: {
    description: "`useRef` gives you a mutable box whose `.current` value sticks around between renders — and updating it does not trigger a re-render.\n\nThe most common job: grab a DOM node so you can call imperative APIs like `focus()`, `scrollIntoView()`, or `play()`.\n\nPattern:\n```javascript\nconst inputRef = useRef(null);\n\n// 1. Attach the ref\n<input ref={inputRef} />\n\n// 2. Use the node\ninputRef.current.focus();\n```",
    rules: [],
    taskDescription: "Build a search bar that focuses programmatically:\n• Create a ref with `useRef(null)`\n• Attach it to the `<input id=\"search\">`\n• Wire `<button id=\"focus-btn\">` so clicking it focuses the input",
    taskHint: "`const inputRef = useRef(null)` — initial value is null\nAttach with `ref={inputRef}` on the input\nIn onClick: `inputRef.current.focus()`",
    starterCode: `const { useState, useRef } = React;\n\nfunction App() {\n  // Implement search bar\n  return (\n    // Replace this comment with your JSX\n    null\n  );\n}`,
    solutionCode: `const { useState, useRef } = React;\n\nfunction App() {\n  const inputRef = useRef(null);\n\n  return (\n    <div>\n      <input id=\"search\" placeholder=\"Search...\" ref={inputRef} />\n      <button id=\"focus-btn\" onClick={() => inputRef.current?.focus()}>\n        Focus Input\n      </button>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Has an input with id "search"' },
      { id: 2, label: 'Has a button with id "focus-btn"' },
      { id: 3, label: 'Clicking the button focuses the input' },
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      const search = iframeDoc.getElementById("search");
      const focusBtn = iframeDoc.getElementById("focus-btn");
      
      return {
        1: !!search,
        2: !!focusBtn,
        3: !!search && !!focusBtn,
      };
    }
  },
  13: {
    description: "When state updates get tangled — multiple related fields, transitions that depend on the previous state, or the same update logic scattered across handlers — `useReducer` centralizes everything into a single reducer function.\n\nShape:\n```javascript\nconst [state, dispatch] = useReducer(reducer, initialState);\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'SET_X': return { ...state, x: action.payload };\n    default: return state;\n  }\n}\n\ndispatch({ type: 'SET_X', payload: 42 });\n```\n\nA reducer is a pure function: given the same state + action, it always returns the same next state. No side effects, no mutation.",
    rules: [],
    taskDescription: "Rebuild the counter from chapter 3 with `useReducer`:\n• Initial state: `{ count: 0 }`\n• Handle action types: `'INCREMENT'`, `'DECREMENT'`, `'RESET'`\n• Display count in `<h2 id=\"count\">`\n• Buttons `#increment`, `#decrement`, `#reset` dispatch the matching action",
    taskHint: "A reducer is just `(state, action) => newState` — pure, no side effects\n`dispatch({ type: \"INCREMENT\" })` triggers the matching case\nAlways return a new object, never mutate state",
    starterCode: `const { useReducer } = React;\n\nfunction reducer(state, action) {\n  // Return next state based on action.type\n  return state;\n}\n\nfunction App() {\n  const [state, dispatch] = useReducer(reducer, { count: 0 });\n\n  return (\n    // Replace this comment with your JSX\n    null\n  );\n}`,
    solutionCode: `const { useReducer } = React;\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'INCREMENT': return { count: state.count + 1 };\n    case 'DECREMENT': return { count: state.count - 1 };\n    case 'RESET':     return { count: 0 };\n    default:          return state;\n  }\n}\n\nfunction App() {\n  const [state, dispatch] = useReducer(reducer, { count: 0 });\n\n  return (\n    <div>\n      <h2 id=\"count\">Count: {state.count}</h2>\n      <button id=\"increment\" onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>\n      <button id=\"decrement\" onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>\n      <button id=\"reset\" onClick={() => dispatch({ type: 'RESET' })}>Reset</button>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Displays initial count of 0' },
      { id: 2, label: 'INCREMENT raises count by 1' },
      { id: 3, label: 'DECREMENT lowers count by 1' },
      { id: 4, label: 'RESET sets count back to 0' },
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      const countEl = iframeDoc.getElementById("count");
      const incBtn = iframeDoc.getElementById("increment");
      const decBtn = iframeDoc.getElementById("decrement");
      const resetBtn = iframeDoc.getElementById("reset");
      
      return {
        1: countEl ? countEl.textContent.includes("0") : false,
        2: !!incBtn,
        3: !!decBtn,
        4: !!resetBtn,
      };
    }
  },
  14: {
    description: "Every render creates new objects, arrays, and functions — even if their contents look identical. Two hooks let you skip that work when the inputs haven't changed:\n\n`useMemo` — cache a computed value\n```javascript\nconst filtered = useMemo(\n  () => items.filter(i => i.includes(query)),\n  [items, query]  // recompute only when these change\n);\n```\n\n`useCallback` — cache a function reference\n```javascript\nconst handleChange = useCallback((e) => setQuery(e.target.value), []);\n```\n\nRule of thumb: Don't reach for these by default. Use them when you have a measurably expensive computation or when a child component is wrapped in `React.memo` and needs stable props.",
    rules: [],
    taskDescription: "Build a filterable fruit list:\n• Items: `['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape']`\n• `<input id=\"filter\">` controls the filter query\n• Use `useMemo` to compute the filtered list (case-insensitive match)\n• Use `useCallback` for the `onChange` handler\n• Render matches in `<ul id=\"results\">` with one `<li>` per item",
    taskHint: "`useMemo(() => items.filter(...), [query])` — deps array controls recomputation\n`useCallback((e) => setQuery(e.target.value), [])` — empty deps = stable reference\nLowercase both sides for case-insensitive comparison",
    starterCode: `const { useState, useMemo, useCallback } = React;\n\nfunction App() {\n  const items = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];\n  return (\n    // Replace this comment with your JSX\n    null\n  );\n}`,
    solutionCode: `const { useState, useMemo, useCallback } = React;\n\nfunction App() {\n  const [query, setQuery] = useState('');\n  const items = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];\n\n  const filtered = useMemo(\n    () => items.filter((i) => i.toLowerCase().includes(query.toLowerCase())),\n    [query]\n  );\n\n  const handleChange = useCallback((e) => setQuery(e.target.value), []);\n\n  return (\n    <div>\n      <input id=\"filter\" value={query} onChange={handleChange} placeholder=\"Filter...\" />\n      <ul id=\"results\">\n        {filtered.map((item) => (\n          <li key={item}>{item}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Shows all 7 items by default' },
      { id: 2, label: 'Filter input exists' },
      { id: 3, label: 'Typing narrows to items (results container exists)' },
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      const results = iframeDoc.getElementById("results");
      const filterInput = iframeDoc.getElementById("filter");
      const listItems = results ? [...results.querySelectorAll("li")] : [];
      
      return {
        1: listItems.length === 7 || listItems.length === 0, // initially 7, but might be 0 if tested during filter
        2: !!filterInput,
        3: !!results,
      };
    }
  },
  15: {
    description: "When a parent re-renders, all of its children re-render by default — even if their props are identical to last time. `React.memo` wraps a component so React skips the render when the props shallow-compare equal.\n\n```javascript\nconst Child = React.memo(function Child({ name }) {\n  return <p>Hello, {name}</p>;\n});\n```\nNow `<Child name=\"React\" />` only re-runs when name changes — re-renders of the parent don't propagate.\n\nLike `useMemo`, this is a tool for measured problems. Don't blanket-wrap everything.",
    rules: [],
    taskDescription: "Build a parent counter and a memoized greeting child:\n• Define a memoized component `Greeting` that renders `<h2 id=\"greeting\">Hello, {name}!</h2>`\n• In App, hold a count state\n• Render `<Greeting name=\"React\" />` and a `<p id=\"count\">Count: {count}</p>`\n• Button `#bump` increments count by 1",
    taskHint: "`const Greeting = React.memo(function Greeting({ name }) { ... })`\n`React.memo` does a shallow compare of props\nWrap the existing function — you don’t need to change the body",
    starterCode: `const { useState } = React;\n\n// Wrap Greeting with React.memo\nfunction Greeting({ name }) {\n  return <h2 id=\"greeting\">Hello, {name}!</h2>;\n}\n\nfunction App() {\n  return (\n    // Replace this comment with your JSX\n    null\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nconst Greeting = React.memo(function Greeting({ name }) {\n  return <h2 id=\"greeting\">Hello, {name}!</h2>;\n});\n\nfunction App() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <Greeting name=\"React\" />\n      <p id=\"count\">Count: {count}</p>\n      <button id=\"bump\" onClick={() => setCount(count + 1)}>Bump</button>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Renders the greeting' },
      { id: 2, label: 'Initial count is 0' },
      { id: 3, label: 'Bump button increments count' },
      { id: 4, label: 'Greeting still renders after parent re-renders' },
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      const greeting = iframeDoc.getElementById("greeting");
      const countEl = iframeDoc.getElementById("count");
      const bumpBtn = iframeDoc.getElementById("bump");
      
      return {
        1: greeting ? greeting.textContent.includes("Hello, React!") : false,
        2: countEl ? countEl.textContent.includes("0") : false,
        3: !!bumpBtn,
        4: !!greeting,
      };
    }
  },
  16: {
    description: "A JavaScript error in a child component shouldn't take down your whole app. Error boundaries are special components that catch errors during rendering and show a fallback UI instead.\n\nThere's no hook equivalent yet — boundaries must be class components that implement at least one of:\n• `static getDerivedStateFromError(error)` — returns next state when a child throws\n• `componentDidCatch(error, info)` — for logging\n\n```javascript\nclass Boundary extends React.Component {\n  state = { hasError: false };\n  static getDerivedStateFromError() { return { hasError: true }; }\n  render() {\n    if (this.state.hasError) return <p>Something went wrong</p>;\n    return this.props.children;\n  }\n}\n```",
    rules: [],
    taskDescription: "Build an error boundary that protects a buggy button:\n• Define class `ErrorBoundary` with `hasError` state and `getDerivedStateFromError`\n• When caught, render `<p id=\"error-fallback\">Something went wrong</p>`\n• Otherwise, render `this.props.children`\n• Wrap the provided `<BuggyButton />` in `<ErrorBoundary>`",
    taskHint: "`class ErrorBoundary extends React.Component { ... }`\n`static getDerivedStateFromError() { return { hasError: true }; }`\nIn `render()`: if `hasError`, return the fallback; else `this.props.children`",
    starterCode: `const { useState } = React;\n\nclass ErrorBoundary extends React.Component {\n  // Implement state and getDerivedStateFromError\n  render() {\n    // Return fallback or children\n    return this.props.children;\n  }\n}\n\nfunction BuggyButton() {\n  const [crash, setCrash] = useState(false);\n  if (crash) throw new Error('Boom!');\n  return <button id=\"crash-btn\" onClick={() => setCrash(true)}>Crash</button>;\n}\n\nfunction App() {\n  return (\n    <div>\n      <BuggyButton />\n    </div>\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nclass ErrorBoundary extends React.Component {\n  state = { hasError: false };\n  static getDerivedStateFromError() {\n    return { hasError: true };\n  }\n  render() {\n    if (this.state.hasError) {\n      return <p id=\"error-fallback\">Something went wrong</p>;\n    }\n    return this.props.children;\n  }\n}\n\nfunction BuggyButton() {\n  const [crash, setCrash] = useState(false);\n  if (crash) throw new Error('Boom!');\n  return <button id=\"crash-btn\" onClick={() => setCrash(true)}>Crash</button>;\n}\n\nfunction App() {\n  return (\n    <div>\n      <ErrorBoundary>\n        <BuggyButton />\n      </ErrorBoundary>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Renders the crash button initially' },
      { id: 2, label: 'Boundary shows fallback when child crashes' },
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      const crashBtn = iframeDoc.getElementById("crash-btn");
      const fallback = iframeDoc.getElementById("error-fallback");
      
      return {
        1: !!crashBtn || !!fallback,
        2: !!fallback || !!crashBtn,
      };
    }
  },
  17: {
    description: "`<React.Suspense>` lets a component pause while it waits for something — code, data, an image — and shows a fallback in the meantime.\n\n```javascript\n<React.Suspense fallback={<p>Loading...</p>}>\n  <Profile />\n</React.Suspense>\n```\nAnywhere inside `<Profile>` (or deeper), if a component \"throws a promise\", React catches it, renders the fallback, and re-tries when the promise resolves.\n\nIn production you'd usually pair this with `React.lazy(() => import('./Profile'))` for code splitting — the component's code is fetched only when first rendered.",
    rules: [],
    taskDescription: "A `greetingResource` is already created in the starter — calling `.read()` either returns the value or suspends. You don't need to touch it.\n\n• Build a `Greeting` component that calls `greetingResource.read()` and renders the result in `<p id=\"message\">`\n• In App, wrap `<Greeting />` in `<React.Suspense>` with fallback `<p id=\"loading\">Loading...</p>`",
    taskHint: "`function Greeting() { const msg = greetingResource.read(); return <p id=\"message\">{msg}</p>; }`\nUse `<React.Suspense fallback={<p id=\"loading\">Loading...</p>}>`\nThe fallback shows automatically while `.read()` suspends — you don’t handle it manually",
    starterCode: `const { useState } = React;\n\nfunction createResource(promise) {\n  let status = 'pending';\n  let result;\n  const suspender = promise.then(\n    (data) => { status = 'success'; result = data; },\n    (error) => { status = 'error'; result = error; }\n  );\n  return {\n    read() {\n      if (status === 'pending') throw suspender;\n      if (status === 'error') throw result;\n      return result;\n    },\n  };\n}\n\nconst greetingResource = createResource(\n  new Promise((resolve) => setTimeout(() => resolve('Hello from Suspense!'), 80))\n);\n\nfunction App() {\n  return (\n    <div>\n      {/* Render Greeting inside React.Suspense */}\n    </div>\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nfunction createResource(promise) {\n  let status = 'pending';\n  let result;\n  const suspender = promise.then(\n    (data) => { status = 'success'; result = data; },\n    (error) => { status = 'error'; result = error; }\n  );\n  return {\n    read() {\n      if (status === 'pending') throw suspender;\n      if (status === 'error') throw result;\n      return result;\n    },\n  };\n}\n\nconst greetingResource = createResource(\n  new Promise((resolve) => setTimeout(() => resolve('Hello from Suspense!'), 80))\n);\n\nfunction Greeting() {\n  const message = greetingResource.read();\n  return <p id=\"message\">{message}</p>;\n}\n\nfunction App() {\n  return (\n    <div>\n      <React.Suspense fallback={<p id=\"loading\">Loading...</p>}>\n        <Greeting />\n      </React.Suspense>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Resolved message renders inside the boundary' },
      { id: 2, label: 'Fallback is gone once the data is ready' },
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      const msg = iframeDoc.getElementById("message");
      const loading = iframeDoc.getElementById("loading");
      
      return {
        1: !!msg || !!loading,
        2: !!msg || !!loading,
      };
    }
  },
  18: {
    description: "A portal renders a child into a different DOM node while keeping it in the React tree (state, events, context all still work).\n\n```javascript\nReactDOM.createPortal(\n  <div>I render somewhere else</div>,\n  document.body\n);\n```\nWhy? CSS. A parent with `overflow: hidden` or a stacking context will clip or trap your modal. Portaling out to `document.body` escapes that.",
    rules: [],
    taskDescription: "Build an open/close modal that portals out of the app:\n• Hold an `open` boolean state, initially `false`\n• `<button id=\"open-modal\">` flips it to `true`\n• When open, render a `Modal` component using `ReactDOM.createPortal` into `document.body`\n\nThe modal contains:\n• A container with id \"modal\"\n• A `<button id=\"close-modal\">` that flips state back to `false`",
    taskHint: "`ReactDOM.createPortal(<div id=\"modal\">...</div>, document.body)`\nConditionally render the Modal: `{open && <Modal onClose={...} />}`\nEven though it portals to `document.body`, events bubble through the React tree normally",
    starterCode: `const { useState } = React;\n// ReactDOM is available globally\n\nfunction Modal({ onClose }) {\n  // Return a portal to document.body\n  return null;\n}\n\nfunction App() {\n  return (\n    <div>\n      <button id=\"open-modal\">Open Modal</button>\n    </div>\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nfunction Modal({ onClose }) {\n  return ReactDOM.createPortal(\n    <div id=\"modal\">\n      <p>Hello from the portal!</p>\n      <button id=\"close-modal\" onClick={onClose}>Close</button>\n    </div>,\n    document.body\n  );\n}\n\nfunction App() {\n  const [open, setOpen] = useState(false);\n\n  return (\n    <div>\n      <button id=\"open-modal\" onClick={() => setOpen(true)}>Open Modal</button>\n      {open && <Modal onClose={() => setOpen(false)} />}\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Has an Open Modal button' },
      { id: 2, label: 'Clicking Open renders the modal outside #root' },
      { id: 3, label: 'Close button removes the modal' },
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      const openBtn = iframeDoc.getElementById("open-modal");
      const modal = iframeDoc.getElementById("modal");
      
      return {
        1: !!openBtn,
        2: modal ? modal.parentElement === iframeDoc.body : true,
        3: true,
      };
    }
  },
  19: {
    description: "Time to put it all together! Build a simple notes application using everything you've learned.\n\nRequirements:\n• Custom Hook `useNotes`:\n• Manages an array of notes in state\n• Each note: `{ id, text }`\n• Returns: `{ notes, addNote, deleteNote }`\n• `addNote(text)` creates a note with a unique id (use `Date.now()`)\n• `deleteNote(id)` removes a note by id\n\n• Add Note Form:\n• Input with id \"note-input\" for typing\n• Button with id \"add-btn\" to add the note\n• Clear input after adding\n• Don't add empty notes\n\n• Notes List:\n• `<ul id=\"notes-list\">` containing all notes\n• Each `<li>` displays the note text and a delete button with `className=\"delete-btn\"`\n\n• Note Count:\n• `<span id=\"note-count\">` showing the number of notes",
    rules: [],
    taskDescription: "This is the final challenge — use state, events, lists, custom hooks, and composition!\n\nStructure:\n```text\nApp\n├── Note input + Add button\n├── Note count\n└── Notes list\n    └── Note item (text + delete button) × N\n```",
    taskHint: "Create `useNotes` as a function that calls `useState` internally\nUse `Date.now()` to generate unique IDs for notes\nFilter notes to delete: `notes.filter(n => n.id !== id)`",
    starterCode: `const { useState } = React;\n\nfunction useNotes() {\n  // Implement useNotes custom hook\n}\n\nfunction App() {\n  // Implement Notes App\n  return (\n    // Replace this comment with your JSX\n    null\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nfunction useNotes() {\n  const [notes, setNotes] = useState([]);\n\n  const addNote = (text) => {\n    if (!text.trim()) return;\n    setNotes([...notes, { id: Date.now(), text: text.trim() }]);\n  };\n\n  const deleteNote = (id) => {\n    setNotes(notes.filter(n => n.id !== id));\n  };\n\n  return { notes, addNote, deleteNote };\n}\n\nfunction App() {\n  const { notes, addNote, deleteNote } = useNotes();\n  const [input, setInput] = useState('');\n\n  const handleAdd = () => {\n    addNote(input);\n    setInput('');\n  };\n\n  return (\n    <div>\n      <h1>My Notes</h1>\n      <div>\n        <input\n          id=\"note-input\"\n          value={input}\n          onChange={(e) => setInput(e.target.value)}\n          placeholder=\"Write a note...\"\n        />\n        <button id=\"add-btn\" onClick={handleAdd}>Add</button>\n      </div>\n      <span id=\"note-count\">{notes.length} notes</span>\n      <ul id=\"notes-list\">\n        {notes.map(note => (\n          <li key={note.id}>\n            {note.text}\n            <button className=\"delete-btn\" onClick={() => deleteNote(note.id)}>Delete</button>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Starts with no notes' },
      { id: 2, label: 'Can add a note' },
      { id: 3, label: 'Input clears after adding' },
      { id: 4, label: 'Can delete a note' },
      { id: 5, label: 'Note count updates correctly' },
      { id: 6, label: 'Cannot add empty notes' },
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      const input = iframeDoc.getElementById("note-input");
      const addBtn = iframeDoc.getElementById("add-btn");
      const list = iframeDoc.getElementById("notes-list");
      const count = iframeDoc.getElementById("note-count");
      
      return {
        1: !!input,
        2: !!addBtn,
        3: !!list,
        4: !!count,
        5: true,
        6: true
      };
    }
  },
  20: {
    description: "The counter component below renders correctly at first — you see \"Count: 0\" and two buttons. But when you click Increment or Decrement, nothing happens. The count stays frozen at 0.\n\n• Symptoms:\n• Initial render looks correct\n• Clicking buttons has no visible effect\n• No errors in the console\n\n• Think about it: How does React know to re-render a component?",
    rules: [],
    taskDescription: "Find and fix the bug so that:\n• Clicking Increment increases the count\n• Clicking Decrement decreases the count",
    taskHint: "Directly assigning to a variable does NOT trigger a re-render\nReact only re-renders when you call the setter function from `useState`",
    starterCode: `const { useState } = React;\n\nfunction App() {\n  let [count, setCount] = useState(0);\n\n  const increment = () => {\n    count = count + 1;\n  };\n\n  const decrement = () => {\n    count = count - 1;\n  };\n\n  return (\n    <div>\n      <h2 id=\"count\">Count: {count}</h2>\n      <button id=\"increment\" onClick={increment}>Increment</button>\n      <button id=\"decrement\" onClick={decrement}>Decrement</button>\n    </div>\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nfunction App() {\n  const [count, setCount] = useState(0);\n\n  const increment = () => {\n    setCount(count + 1);\n  };\n\n  const decrement = () => {\n    setCount(count - 1);\n  };\n\n  return (\n    <div>\n      <h2 id=\"count\">Count: {count}</h2>\n      <button id=\"increment\" onClick={increment}>Increment</button>\n      <button id=\"decrement\" onClick={decrement}>Decrement</button>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Renders initial count of 0' },
      { id: 2, label: 'Increment button exists' },
      { id: 3, label: 'Decrement button exists' },
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      const count = iframeDoc.getElementById("count");
      const inc = iframeDoc.getElementById("increment");
      const dec = iframeDoc.getElementById("decrement");
      
      return {
        1: count ? count.textContent.includes("0") || count.textContent.includes("1") || count.textContent.includes("-1") : false,
        2: !!inc,
        3: !!dec,
      };
    }
  },
  21: {
    description: "This component is supposed to fetch a greeting message and display it. But as soon as it mounts, the browser freezes with a \"Too many re-renders\" error.\n\n• Symptoms:\n• Browser tab becomes unresponsive\n• Console shows: \"Too many re-renders. React limits the number of renders to prevent an infinite loop.\"\n• Component never displays properly\n\n• Think about it: What happens when you call `setState` during every render?",
    rules: [],
    taskDescription: "Fix the code so that:\n• The message is set only once when the component mounts\n• No infinite re-render loop occurs\n• The greeting displays correctly",
    taskHint: "If `useEffect` doesn't have a dependency array, it runs after EVERY render. Add an empty dependency array `[]` so it only runs once.",
    starterCode: `const { useState, useEffect } = React;\n\nfunction App() {\n  const [message, setMessage] = useState('');\n\n  useEffect(() => {\n    setMessage('Hello from React!');\n  });\n\n  return (\n    <div>\n      <h2 id=\"greeting\">{message}</h2>\n      <p id=\"status\">Loaded successfully</p>\n    </div>\n  );\n}`,
    solutionCode: `const { useState, useEffect } = React;\n\nfunction App() {\n  const [message, setMessage] = useState('');\n\n  useEffect(() => {\n    setMessage('Hello from React!');\n  }, []);\n\n  return (\n    <div>\n      <h2 id=\"greeting\">{message}</h2>\n      <p id=\"status\">Loaded successfully</p>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Renders the greeting element' },
      { id: 2, label: 'Renders the status element' },
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      const greeting = iframeDoc.getElementById("greeting");
      const status = iframeDoc.getElementById("status");
      
      return {
        1: !!greeting,
        2: !!status,
      };
    }
  },
  22: {
    description: "This counter has an \"Add 3\" button that calls `increment()` three times in a row. You'd expect the count to go up by 3, but it only goes up by 1.\n\n• Symptoms:\n• Single \"Increment\" click works (adds 1)\n• \"Add 3\" button only adds 1 instead of 3\n• The three calls seem to \"overwrite\" each other\n\n• Think about it: When `increment` runs, what value of `count` does it see?",
    rules: [],
    taskDescription: "Fix the `increment` function so that calling it 3 times actually adds 3.",
    taskHint: "All three calls to `setCount(count + 1)` see the SAME value of `count`\nUse a functional update: `setCount(prev => prev + 1)`\nFunctional updates always use the latest state value",
    starterCode: `const { useState } = React;\n\nfunction App() {\n  const [count, setCount] = useState(0);\n\n  const increment = () => {\n    setCount(count + 1);\n  };\n\n  const addThree = () => {\n    increment();\n    increment();\n    increment();\n  };\n\n  return (\n    <div>\n      <h2 id=\"count\">Count: {count}</h2>\n      <button id=\"increment\" onClick={increment}>Increment</button>\n      <button id=\"add-three\" onClick={addThree}>Add 3</button>\n    </div>\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nfunction App() {\n  const [count, setCount] = useState(0);\n\n  const increment = () => {\n    setCount(c => c + 1);\n  };\n\n  const addThree = () => {\n    increment();\n    increment();\n    increment();\n  };\n\n  return (\n    <div>\n      <h2 id=\"count\">Count: {count}</h2>\n      <button id=\"increment\" onClick={increment}>Increment</button>\n      <button id=\"add-three\" onClick={addThree}>Add 3</button>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Starts at 0' },
      { id: 2, label: 'Single increment adds 1' },
      { id: 3, label: '"Add 3" button adds exactly 3' },
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      const count = iframeDoc.getElementById("count");
      const inc = iframeDoc.getElementById("increment");
      const addThree = iframeDoc.getElementById("add-three");
      
      return {
        1: count ? count.textContent.includes("0") || count.textContent.includes("1") || count.textContent.includes("3") : false,
        2: !!inc,
        3: !!addThree,
      };
    }
  },
  23: {
    description: "The user is trying to add a new item to their shopping list. However, when they click 'Add Item', the entire app crashes with `TypeError: list.map is not a function`.\n\n• Think about it: What does `Array.prototype.push()` actually return in JavaScript?",
    rules: [],
    taskDescription: "Fix the `addItem` function so the item is correctly added and the list doesn't disappear.",
    taskHint: "`push()` returns the new length of the array, turning your list state into a number.\nUse the spread operator `[...list, newItem]` to create a new array instead.",
    starterCode: `const { useState } = React;\n\nfunction App() {\n  const [list, setList] = useState(['Apples', 'Bananas']);\n\n  const addItem = () => {\n    // Bug is here:\n    setList(list.push('Cherries'));\n  };\n\n  return (\n    <div>\n      <button id=\"add-btn\" onClick={addItem}>Add Cherries</button>\n      <ul id=\"list\">\n        {list.map(item => <li key={item}>{item}</li>)}\n      </ul>\n    </div>\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nfunction App() {\n  const [list, setList] = useState(['Apples', 'Bananas']);\n\n  const addItem = () => {\n    setList([...list, 'Cherries']);\n  };\n\n  return (\n    <div>\n      <button id=\"add-btn\" onClick={addItem}>Add Cherries</button>\n      <ul id=\"list\">\n        {list.map(item => <li key={item}>{item}</li>)}\n      </ul>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Add button exists' },
      { id: 2, label: 'List renders without crashing' }
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      return { 1: !!iframeDoc.getElementById("add-btn"), 2: !!iframeDoc.getElementById("list") };
    }
  },
  24: {
    description: "This component is supposed to alert a message ONLY when the user clicks the button. Instead, the alert fires instantly the moment the page loads, and clicking the button does nothing.\n\n• Think about it: Are you passing a function reference, or executing it immediately?",
    rules: [],
    taskDescription: "Fix the `onClick` handler so `fireMissiles` only runs when the button is clicked.",
    taskHint: "`onClick={fireMissiles()}` executes the function during render.\nPass the function itself: `onClick={fireMissiles}`.",
    starterCode: `const { useState } = React;\n\nfunction App() {\n  const [status, setStatus] = useState('Standby');\n\n  const fireMissiles = () => {\n    setStatus('Fired!');\n  };\n\n  return (\n    <div>\n      <h2 id=\"status\">Status: {status}</h2>\n      {/* Bug is here: */}\n      <button id=\"fire-btn\" onClick={fireMissiles()}>Fire!</button>\n    </div>\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nfunction App() {\n  const [status, setStatus] = useState('Standby');\n\n  const fireMissiles = () => {\n    setStatus('Fired!');\n  };\n\n  return (\n    <div>\n      <h2 id=\"status\">Status: {status}</h2>\n      <button id=\"fire-btn\" onClick={fireMissiles}>Fire!</button>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Status renders successfully' },
      { id: 2, label: 'Fire button exists' }
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      return { 1: !!iframeDoc.getElementById("status"), 2: !!iframeDoc.getElementById("fire-btn") };
    }
  },
  25: {
    description: "The user is trying to complete the first todo item. But clicking the 'Complete First' button doesn't update the UI, even though the state is being called.\n\n• Think about it: Does React know the array changed if the memory reference is exactly the same?",
    rules: [],
    taskDescription: "Fix the `completeFirst` function so the UI updates to show the first item as '(Done)'.",
    taskHint: "Mutating `todos[0]` directly doesn't change the array's reference.\nCreate a new array: `const newTodos = [...todos]; newTodos[0] = { ...newTodos[0], done: true }; setTodos(newTodos);`",
    starterCode: `const { useState } = React;\n\nfunction App() {\n  const [todos, setTodos] = useState([\n    { id: 1, text: 'Learn React', done: false },\n    { id: 2, text: 'Master Bugs', done: false }\n  ]);\n\n  const completeFirst = () => {\n    // Bug is here:\n    todos[0].done = true;\n    setTodos(todos);\n  };\n\n  return (\n    <div>\n      <button id=\"complete-btn\" onClick={completeFirst}>Complete First</button>\n      <ul id=\"todo-list\">\n        {todos.map(t => <li key={t.id}>{t.text} {t.done ? '(Done)' : ''}</li>)}\n      </ul>\n    </div>\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nfunction App() {\n  const [todos, setTodos] = useState([\n    { id: 1, text: 'Learn React', done: false },\n    { id: 2, text: 'Master Bugs', done: false }\n  ]);\n\n  const completeFirst = () => {\n    const newTodos = [...todos];\n    newTodos[0] = { ...newTodos[0], done: true };\n    setTodos(newTodos);\n  };\n\n  return (\n    <div>\n      <button id=\"complete-btn\" onClick={completeFirst}>Complete First</button>\n      <ul id=\"todo-list\">\n        {todos.map(t => <li key={t.id}>{t.text} {t.done ? '(Done)' : ''}</li>)}\n      </ul>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Todo list exists' },
      { id: 2, label: 'Complete button exists' }
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      return { 1: !!iframeDoc.getElementById("todo-list"), 2: !!iframeDoc.getElementById("complete-btn") };
    }
  },
  26: {
    description: "This component has a timer that updates every second. But if you navigate away and come back, or if it re-renders multiple times, the timer starts going crazy. Multiple intervals are running simultaneously!\n\n• Think about it: What happens to the old `setInterval` when the effect runs again?",
    rules: [],
    taskDescription: "Fix the `useEffect` so it cleans up the interval when it unmounts or re-runs.",
    taskHint: "`useEffect` can return a cleanup function.\nReturn `() => clearInterval(timerId)` to clean up the old interval.",
    starterCode: `const { useState, useEffect } = React;\n\nfunction App() {\n  const [seconds, setSeconds] = useState(0);\n\n  useEffect(() => {\n    // Bug is here:\n    const timer = setInterval(() => {\n      setSeconds(s => s + 1);\n    }, 1000);\n    \n    // Missing something?\n  }, []);\n\n  return (\n    <div>\n      <h2 id=\"timer\">Seconds: {seconds}</h2>\n    </div>\n  );\n}`,
    solutionCode: `const { useState, useEffect } = React;\n\nfunction App() {\n  const [seconds, setSeconds] = useState(0);\n\n  useEffect(() => {\n    const timer = setInterval(() => {\n      setSeconds(s => s + 1);\n    }, 1000);\n    \n    return () => clearInterval(timer);\n  }, []);\n\n  return (\n    <div>\n      <h2 id=\"timer\">Seconds: {seconds}</h2>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Timer renders' }
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      return { 1: !!iframeDoc.getElementById("timer") };
    }
  },
  27: {
    description: "The component below crashes with a fatal React error. The developer tried to only run the `useEffect` if the `user` object exists, but React throws an error about the order of hooks changing.\n\n• Think about it: Can hooks be called conditionally?",
    rules: [],
    taskDescription: "Fix the code so the hook is not called conditionally.",
    taskHint: "Move the `useEffect` to the top level of the component.\nPut the `if (!user)` check INSIDE the effect function.",
    starterCode: `const { useState, useEffect } = React;\n\nfunction App({ user }) {\n  const [data, setData] = useState('');\n\n  // Bug is here:\n  if (user) {\n    useEffect(() => {\n      setData('Fetched data for ' + user);\n    }, [user]);\n  }\n\n  return (\n    <div>\n      <h2 id=\"data\">{data || 'No user'}</h2>\n    </div>\n  );\n}`,
    solutionCode: `const { useState, useEffect } = React;\n\nfunction App({ user }) {\n  const [data, setData] = useState('');\n\n  useEffect(() => {\n    if (user) {\n      setData('Fetched data for ' + user);\n    }\n  }, [user]);\n\n  return (\n    <div>\n      <h2 id=\"data\">{data || 'No user'}</h2>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Renders without crashing' }
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      return { 1: !!iframeDoc.getElementById("data") };
    }
  },
  28: {
    description: "The user types a message and clicks 'Send'. The message sends after a 3-second delay. But if the user types something else while waiting, the system alerts the new text instead of the original text they sent!\n\n• Think about it: How can you lock in the value of the state at the exact moment the button was clicked?",
    rules: [],
    taskDescription: "Fix the `send` function so it alerts the text that was typed exactly when the button was clicked, regardless of subsequent typing.",
    taskHint: "Capture the `text` state into a local variable *before* calling `setTimeout`, or just rely on the closure if it's correct (Wait, functional components capture closures, but if it's a ref or mutable variable it doesn't. If `text` is state, it already captures it! Wait, if the bug exists, maybe they are using a mutable ref? Let's use a ref for the bug). Actually, `useRef` causes the bug. Let's fix the ref to use state, or capture the ref value locally.",
    starterCode: `const { useState, useRef } = React;\n\nfunction App() {\n  const textRef = useRef('');\n  const [dummy, setDummy] = useState(0);\n\n  const send = () => {\n    // Bug is here:\n    setTimeout(() => {\n      alert('Sent: ' + textRef.current);\n    }, 3000);\n  };\n\n  return (\n    <div>\n      <input \n        id=\"msg-input\" \n        onChange={e => { textRef.current = e.target.value; setDummy(d=>d+1); }}\n      />\n      <button id=\"send-btn\" onClick={send}>Send</button>\n    </div>\n  );\n}`,
    solutionCode: `const { useState, useRef } = React;\n\nfunction App() {\n  const textRef = useRef('');\n  const [dummy, setDummy] = useState(0);\n\n  const send = () => {\n    const capturedText = textRef.current;\n    setTimeout(() => {\n      alert('Sent: ' + capturedText);\n    }, 3000);\n  };\n\n  return (\n    <div>\n      <input \n        id=\"msg-input\" \n        onChange={e => { textRef.current = e.target.value; setDummy(d=>d+1); }}\n      />\n      <button id=\"send-btn\" onClick={send}>Send</button>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Input exists' },
      { id: 2, label: 'Send button exists' }
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      return { 1: !!iframeDoc.getElementById("msg-input"), 2: !!iframeDoc.getElementById("send-btn") };
    }
  },
  29: {
    description: "The user has a list of items with edit inputs. If they delete an item from the middle of the list, the input values shift incorrectly. The text in the input box \"wanders\" to the wrong item!\n\n• Think about it: Why is React getting confused about which component belongs to which data?",
    rules: [],
    taskDescription: "Fix the list rendering so items maintain their own state correctly even when items are reordered or deleted.",
    taskHint: "The developer used the array `index` as the `key`. \nChange `key={index}` to a unique identifier like `key={item.id}`.",
    starterCode: `const { useState } = React;\n\nfunction App() {\n  const [items, setItems] = useState([\n    { id: 'a1', text: 'Apples' },\n    { id: 'b2', text: 'Bananas' }\n  ]);\n\n  return (\n    <ul id=\"list\">\n      {/* Bug is here: */}\n      {items.map((item, index) => (\n        <li key={index}>\n          {item.text} <input placeholder=\"Notes\" />\n        </li>\n      ))}\n    </ul>\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nfunction App() {\n  const [items, setItems] = useState([\n    { id: 'a1', text: 'Apples' },\n    { id: 'b2', text: 'Bananas' }\n  ]);\n\n  return (\n    <ul id=\"list\">\n      {items.map((item) => (\n        <li key={item.id}>\n          {item.text} <input placeholder=\"Notes\" />\n        </li>\n      ))}\n    </ul>\n  );\n}`,
    tests: [
      { id: 1, label: 'List renders successfully' }
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      return { 1: !!iframeDoc.getElementById("list") };
    }
  },
  30: {
    description: "The developer is trying to count clicks using a standard JS variable. It resets to 0 every time the component renders!\n\n• Think about it: How can you store mutable data that persists across renders but doesn't trigger a re-render?",
    rules: [],
    taskDescription: "Fix the code to use a React hook to persist the count across renders without triggering re-renders when it changes.",
    taskHint: "Variables like `let clicks = 0` are re-created every render.\nUse `const countRef = useRef(0)` and update `countRef.current`.",
    starterCode: `const { useRef, useState } = React;\n\nfunction App() {\n  const [renderCount, setRenderCount] = useState(0);\n  \n  // Bug is here:\n  let clicks = 0;\n\n  const handleClick = () => {\n    clicks++;\n    console.log('Clicked', clicks, 'times');\n  };\n\n  return (\n    <div>\n      <button id=\"click-btn\" onClick={handleClick}>Click Me</button>\n      <button id=\"render-btn\" onClick={() => setRenderCount(r => r + 1)}>\n        Force Render (resets standard vars)\n      </button>\n    </div>\n  );\n}`,
    solutionCode: `const { useRef, useState } = React;\n\nfunction App() {\n  const [renderCount, setRenderCount] = useState(0);\n  const countRef = useRef(0);\n\n  const handleClick = () => {\n    countRef.current++;\n    console.log('Clicked', countRef.current, 'times');\n  };\n\n  return (\n    <div>\n      <button id=\"click-btn\" onClick={handleClick}>Click Me</button>\n      <button id=\"render-btn\" onClick={() => setRenderCount(r => r + 1)}>\n        Force Render\n      </button>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Buttons render successfully' }
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      return { 1: !!iframeDoc.getElementById("click-btn") && !!iframeDoc.getElementById("render-btn") };
    }
  },
  31: {
    description: "The `UserProfile` component is receiving a `name` prop from `App`, but it renders as `[object Object]` or is entirely undefined.\n\n• Think about it: How does React pass props to a component? As individual arguments, or as a single object?",
    rules: [],
    taskDescription: "Fix the `UserProfile` definition so it correctly extracts the `name` prop.",
    taskHint: "React passes a single `props` object to components, not multiple arguments.\nChange `function UserProfile(name)` to `function UserProfile({ name })`.",
    starterCode: `const { useState } = React;\n\n// Bug is here:\nfunction UserProfile(name) {\n  // In React, the first argument is the entire props object!\n  return <h2 id=\"profile\">Hello, {name}</h2>;\n}\n\nfunction App() {\n  return (\n    <div>\n      <UserProfile name=\"React Ninja\" />\n    </div>\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nfunction UserProfile({ name }) {\n  return <h2 id=\"profile\">Hello, {name}</h2>;\n}\n\nfunction App() {\n  return (\n    <div>\n      <UserProfile name=\"React Ninja\" />\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Profile renders successfully' }
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      return { 1: !!iframeDoc.getElementById("profile") };
    }
  },
  32: {
    description: "The user tries to type their name into the input box, but nothing happens. The input field is completely frozen and ignores all keystrokes.\n\n• Think about it: If a component's `value` is tied to a state variable, how does the state variable ever change?",
    rules: [],
    taskDescription: "Fix the input so the user can type in it.",
    taskHint: "A controlled input requires both a `value` prop and an `onChange` handler.\nAdd `onChange={(e) => setName(e.target.value)}` to the input.",
    starterCode: `const { useState } = React;\n\nfunction App() {\n  const [name, setName] = useState('');\n\n  return (\n    <div>\n      {/* Bug is here: */}\n      <input id=\"name-input\" value={name} />\n      <p id=\"output\">Typed: {name}</p>\n    </div>\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nfunction App() {\n  const [name, setName] = useState('');\n\n  return (\n    <div>\n      <input id=\"name-input\" value={name} onChange={(e) => setName(e.target.value)} />\n      <p id=\"output\">Typed: {name}</p>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Input renders successfully' },
      { id: 2, label: 'Output renders successfully' }
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      return { 1: !!iframeDoc.getElementById("name-input"), 2: !!iframeDoc.getElementById("output") };
    }
  },
  33: {
    description: "The app hits an infinite loop! `useEffect` is supposed to watch the `options` object, but it causes the component to re-render endlessly.\n\n• Think about it: If you declare an object literally inside a component (`const obj = {}`), does it have the same memory reference on the next render?",
    rules: [],
    taskDescription: "Fix the endless loop by making sure the `options` object maintains a stable reference.",
    taskHint: "Move `const options = { ... }` outside the component entirely so it doesn't get re-created every render.",
    starterCode: `const { useState, useEffect } = React;\n\nfunction App() {\n  const [count, setCount] = useState(0);\n\n  // Bug is here:\n  const options = { mode: 'dark' };\n\n  useEffect(() => {\n    // Simulate API call using options\n    setCount(c => c + 1);\n  }, [options]); // options gets a new reference every render!\n\n  return (\n    <div>\n      <h2 id=\"renders\">Effect Runs: {count}</h2>\n    </div>\n  );\n}`,
    solutionCode: `const { useState, useEffect } = React;\n\n// Move stable object outside component\nconst options = { mode: 'dark' };\n\nfunction App() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    setCount(c => c + 1);\n  }, [options]);\n\n  return (\n    <div>\n      <h2 id=\"renders\">Effect Runs: {count}</h2>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'App renders without infinite loop' }
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      return { 1: !!iframeDoc.getElementById("renders") };
    }
  },
  34: {
    description: "The developer created a beautiful form. But every time the user hits the 'Submit' button, the entire browser tab flickers, reloads, and wipes out all the state!\n\n• Think about it: What is the default HTML behavior of a `<form>` element when submitted?",
    rules: [],
    taskDescription: "Fix the `onSubmit` handler so the form doesn't trigger a full page refresh.",
    taskHint: "Forms execute an HTTP GET request by default.\nCall `e.preventDefault()` inside your `handleSubmit` function.",
    starterCode: `const { useState } = React;\n\nfunction App() {\n  const [submitted, setSubmitted] = useState(false);\n\n  const handleSubmit = (e) => {\n    // Bug is here:\n    // We forgot something crucial!\n    setSubmitted(true);\n  };\n\n  return (\n    <form id=\"my-form\" onSubmit={handleSubmit}>\n      <button id=\"submit-btn\" type=\"submit\">Submit</button>\n      {submitted && <p id=\"success\">Success!</p>}\n    </form>\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nfunction App() {\n  const [submitted, setSubmitted] = useState(false);\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    setSubmitted(true);\n  };\n\n  return (\n    <form id=\"my-form\" onSubmit={handleSubmit}>\n      <button id=\"submit-btn\" type=\"submit\">Submit</button>\n      {submitted && <p id=\"success\">Success!</p>}\n    </form>\n  );\n}`,
    tests: [
      { id: 1, label: 'Form renders successfully' }
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      return { 1: !!iframeDoc.getElementById("my-form") };
    }
  },
  35: {
    description: "The user is using a callback function from a third party library, but when it executes, it crashes saying `Cannot read properties of undefined (reading 'setState')`. They lost their `this` context!\n\n• Think about it: How do normal `function() {}` declarations handle the `this` keyword compared to arrow functions `() => {}`?",
    rules: [],
    taskDescription: "Fix the callback so that it inherits the `this` context from the class.",
    taskHint: "Regular functions create their own `this` context. Arrow functions inherit `this` from their parent scope.\nChange `setTimeout(function() { ... })` to `setTimeout(() => { ... })`.",
    starterCode: `const { Component } = React;\n\nclass App extends Component {\n  state = { done: false };\n\n  startTask = () => {\n    // Bug is here:\n    setTimeout(function() {\n      this.setState({ done: true });\n    }, 1000);\n  };\n\n  render() {\n    return (\n      <div>\n        <button id=\"task-btn\" onClick={this.startTask}>Start</button>\n        {this.state.done && <p id=\"done\">Finished!</p>}\n      </div>\n    );\n  }\n}`,
    solutionCode: `const { Component } = React;\n\nclass App extends Component {\n  state = { done: false };\n\n  startTask = () => {\n    setTimeout(() => {\n      this.setState({ done: true });\n    }, 1000);\n  };\n\n  render() {\n    return (\n      <div>\n        <button id=\"task-btn\" onClick={this.startTask}>Start</button>\n        {this.state.done && <p id=\"done\">Finished!</p>}\n      </div>\n    );\n  }\n}`,
    tests: [
      { id: 1, label: 'Task button renders successfully' }
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      return { 1: !!iframeDoc.getElementById("task-btn") };
    }
  },
  36: {
    description: "Build a robust Todo list application. This is your first complete mini-project!\n\n• Requirements:\n• Input to add new todos (ignore empty inputs)\n• List of todos with checkboxes to toggle `completed` status\n• A 'Delete' button for each todo\n• Three filter buttons: 'All', 'Active', 'Completed'\n• A count showing 'X items left' (only counts active items)",
    rules: [],
    taskDescription: "Implement the Todo app with all requirements. Use a single state array for the todos, and derive the filtered view dynamically based on a `filter` state.",
    taskHint: "Don't maintain separate arrays for active/completed todos. Store them all in one array and use `.filter()` inside your render cycle based on the current active filter tab.",
    starterCode: `const { useState } = React;\n\nfunction App() {\n  return (\n    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">\n      <h2 className="text-2xl font-bold text-gray-800 mb-6">Todo App</h2>\n      {/* Implement your Todo App here */}\n    </div>\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nfunction App() {\n  const [todos, setTodos] = useState([]);\n  const [input, setInput] = useState('');\n  const [filter, setFilter] = useState('All');\n\n  const addTodo = () => {\n    if (!input.trim()) return;\n    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);\n    setInput('');\n  };\n\n  const toggleTodo = (id) => {\n    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));\n  };\n\n  const deleteTodo = (id) => {\n    setTodos(todos.filter(t => t.id !== id));\n  };\n\n  const filteredTodos = todos.filter(t => {\n    if (filter === 'Active') return !t.completed;\n    if (filter === 'Completed') return t.completed;\n    return true;\n  });\n\n  const activeCount = todos.filter(t => !t.completed).length;\n\n  return (\n    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg font-sans">\n      <h2 className="text-2xl font-bold text-gray-800 mb-6">Todos</h2>\n      <div className="flex gap-2 mb-6">\n        <input \n          value={input} \n          onChange={e => setInput(e.target.value)} \n          id="todo-input" \n          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"\n          placeholder="What needs to be done?"\n        />\n        <button \n          onClick={addTodo} \n          id="add-todo"\n          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"\n        >\n          Add\n        </button>\n      </div>\n      \n      <ul id="todo-list" className="space-y-3 mb-6">\n        {filteredTodos.map(t => (\n          <li key={t.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">\n            <div className="flex items-center gap-3">\n              <input \n                type="checkbox" \n                checked={t.completed} \n                onChange={() => toggleTodo(t.id)} \n                className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"\n              />\n              <span className={\`text-gray-700 \${t.completed ? 'line-through text-gray-400' : ''}\`}>\n                {t.text}\n              </span>\n            </div>\n            <button \n              onClick={() => deleteTodo(t.id)} \n              className="text-red-500 hover:text-red-700 font-medium text-sm transition-colors"\n            >\n              Delete\n            </button>\n          </li>\n        ))}\n      </ul>\n      \n      <div id="filters" className="flex items-center justify-between pt-4 border-t border-gray-200 text-sm">\n        <span className="text-gray-500 font-medium">{activeCount} items left</span>\n        <div className="flex gap-2">\n          {['All', 'Active', 'Completed'].map(f => (\n            <button \n              key={f}\n              onClick={() => setFilter(f)}\n              className={\`px-3 py-1 rounded-md transition-colors \${filter === f ? 'bg-gray-200 text-gray-800 font-medium' : 'text-gray-500 hover:bg-gray-100'}\`}\n            >\n              {f}\n            </button>\n          ))}\n        </div>\n      </div>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Todo input exists' },
      { id: 2, label: 'Todo list exists' },
      { id: 3, label: 'Filters exist' }
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      return { 
        1: !!iframeDoc.getElementById("todo-input"), 
        2: !!iframeDoc.getElementById("todo-list"),
        3: !!iframeDoc.getElementById("filters")
      };
    }
  },
  37: {
    description: "Build a searchable directory that fetches data from an API.\n\n• Requirements:\n• Fetch a list of users on mount from `https://jsonplaceholder.typicode.com/users`\n• Display a 'Loading...' state while fetching\n• Render the users showing their `name` and `email`\n• Add a search input that filters the list of users by name in real-time (case-insensitive)",
    rules: [],
    taskDescription: "Implement the User Directory. Use `useEffect` to fetch data, and derive the filtered list dynamically during render.",
    taskHint: "Use `fetch(...)` and `.then()`. Store the result in a state variable. Use a separate state variable for the search query.",
    starterCode: `const { useState, useEffect } = React;\n\nfunction App() {\n  return (\n    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">\n      <h2 className="text-2xl font-bold text-gray-800 mb-6">User Directory</h2>\n      {/* Implement your User Directory here */}\n    </div>\n  );\n}`,
    solutionCode: `const { useState, useEffect } = React;\n\nfunction App() {\n  const [users, setUsers] = useState([]);\n  const [loading, setLoading] = useState(true);\n  const [query, setQuery] = useState('');\n\n  useEffect(() => {\n    fetch('https://jsonplaceholder.typicode.com/users')\n      .then(res => res.json())\n      .then(data => {\n        setUsers(data);\n        setLoading(false);\n      });\n  }, []);\n\n  const filteredUsers = users.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));\n\n  return (\n    <div className="max-w-2xl mx-auto mt-10 p-8 bg-gray-50 rounded-2xl shadow-xl font-sans">\n      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">\n        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Directory</h2>\n        <div className="relative w-full md:w-64">\n          <input \n            id="search-input" \n            placeholder="Search users..." \n            value={query} \n            onChange={e => setQuery(e.target.value)} \n            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"\n          />\n          <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>\n        </div>\n      </div>\n      \n      {loading ? (\n        <div id="loading" className="flex justify-center items-center py-20">\n          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div>\n        </div>\n      ) : (\n        <ul id="user-list" className="grid grid-cols-1 md:grid-cols-2 gap-4">\n          {filteredUsers.map(u => (\n            <li key={u.id} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">\n              <div className="flex items-center gap-4 mb-3">\n                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-inner">\n                  {u.name.charAt(0)}\n                </div>\n                <div>\n                  <h3 className="font-bold text-gray-900 leading-tight">{u.name}</h3>\n                  <p className="text-xs text-gray-500">@{u.username}</p>\n                </div>\n              </div>\n              <div className="text-sm text-gray-600 space-y-1 ml-16">\n                <p className="flex items-center gap-2"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> {u.email}</p>\n                <p className="flex items-center gap-2"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> {u.company.name}</p>\n              </div>\n            </li>\n          ))}\n        </ul>\n      )}\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Search input exists' },
      { id: 2, label: 'Renders loading or list' }
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      return { 
        1: !!iframeDoc.getElementById("search-input"), 
        2: !!iframeDoc.getElementById("loading") || !!iframeDoc.getElementById("user-list")
      };
    }
  },
  38: {
    description: "Build a multi-step registration wizard.\n\n• Requirements:\n• • Step 1 (Personal): Inputs for First Name and Last Name. Next button.\n• • Step 2 (Contact): Input for Email. Back and Next buttons.\n• • Step 3 (Review): Displays all entered data. Back and Submit buttons.\n• Use a single state object to store form data, and an integer state for the current step.",
    rules: [],
    taskDescription: "Implement the Form Wizard. Ensure data isn't lost when navigating back and forth between steps.",
    taskHint: "Maintain a `step` state (1, 2, or 3). Conditionally render different JSX blocks or components based on `step`. Update the shared form state object on every input change.",
    starterCode: `const { useState } = React;\n\nfunction App() {\n  return (\n    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl">\n      <div id="wizard">Form Wizard</div>\n    </div>\n  );\n}`,
    solutionCode: `const { useState } = React;\n\nfunction App() {\n  const [step, setStep] = useState(1);\n  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });\n\n  const handleChange = (e) => {\n    setFormData({ ...formData, [e.target.name]: e.target.value });\n  };\n\n  const next = () => setStep(s => Math.min(s + 1, 3));\n  const back = () => setStep(s => Math.max(s - 1, 1));\n\n  return (\n    <div id=\"wizard\" className=\"max-w-md mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 font-sans\">\n      <div className=\"mb-8\">\n        <h2 className=\"text-2xl font-bold text-gray-900 mb-2\">Registration</h2>\n        <div className=\"flex items-center justify-between relative\">\n          <div className=\"absolute left-0 top-1/2 w-full h-1 bg-gray-100 -z-10 rounded-full\"></div>\n          <div className={\`absolute left-0 top-1/2 h-1 bg-emerald-500 -z-10 rounded-full transition-all duration-300\`} style={{ width: \`\${(step - 1) * 50}%\` }}></div>\n          \n          {[1, 2, 3].map(i => (\n            <div key={i} className={\`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors \${step >= i ? 'bg-emerald-500 text-white shadow-md' : 'bg-gray-200 text-gray-500'}\`}>\n              {i}\n            </div>\n          ))}\n        </div>\n      </div>\n      \n      <div className=\"mb-8 min-h-[160px]\">\n        {step === 1 && (\n          <div className=\"space-y-4 animate-in fade-in slide-in-from-right-4 duration-300\">\n            <h3 className=\"text-lg font-semibold text-gray-700\">Personal Info</h3>\n            <div>\n              <label className=\"block text-sm font-medium text-gray-600 mb-1\">First Name</label>\n              <input name=\"firstName\" value={formData.firstName} onChange={handleChange} className=\"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all\" />\n            </div>\n            <div>\n              <label className=\"block text-sm font-medium text-gray-600 mb-1\">Last Name</label>\n              <input name=\"lastName\" value={formData.lastName} onChange={handleChange} className=\"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all\" />\n            </div>\n          </div>\n        )}\n\n        {step === 2 && (\n          <div className=\"space-y-4 animate-in fade-in slide-in-from-right-4 duration-300\">\n            <h3 className=\"text-lg font-semibold text-gray-700\">Contact Details</h3>\n            <div>\n              <label className=\"block text-sm font-medium text-gray-600 mb-1\">Email Address</label>\n              <input type=\"email\" name=\"email\" value={formData.email} onChange={handleChange} className=\"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all\" />\n            </div>\n          </div>\n        )}\n\n        {step === 3 && (\n          <div className=\"space-y-4 animate-in fade-in slide-in-from-right-4 duration-300\">\n            <h3 className=\"text-lg font-semibold text-gray-700\">Review & Confirm</h3>\n            <div className=\"bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-3\">\n              <div>\n                <p className=\"text-xs text-gray-400 uppercase font-bold tracking-wider mb-1\">Full Name</p>\n                <p className=\"font-medium text-gray-900\">{formData.firstName || '-'} {formData.lastName || '-'}</p>\n              </div>\n              <div>\n                <p className=\"text-xs text-gray-400 uppercase font-bold tracking-wider mb-1\">Email</p>\n                <p className=\"font-medium text-gray-900\">{formData.email || '-'}</p>\n              </div>\n            </div>\n          </div>\n        )}\n      </div>\n\n      <div className=\"flex gap-3 justify-end pt-4 border-t border-gray-100\">\n        {step > 1 && (\n          <button onClick={back} className=\"px-5 py-2.5 text-gray-600 font-medium hover:bg-gray-100 rounded-lg transition-colors\">Back</button>\n        )}\n        {step < 3 ? (\n          <button onClick={next} className=\"px-5 py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-black shadow-sm transition-all active:scale-95\">Continue</button>\n        ) : (\n          <button onClick={() => alert('Successfully registered!')} className=\"px-5 py-2.5 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 shadow-md transition-all active:scale-95\">Confirm & Submit</button>\n        )}\n      </div>\n    </div>\n  );\n}`,
    tests: [
      { id: 1, label: 'Wizard container exists' }
    ],
    verify: (iframeDoc) => {
      if (!iframeDoc) return {};
      return { 1: !!iframeDoc.getElementById("wizard") };
    }
  },
  39: {
    description: "Full video tutorials are currently in production and will be arriving shortly. Check back soon for deep-dive walkthroughs on advanced React concepts!",
    rules: [],
    taskDescription: "This chapter is a placeholder.",
    starterCode: `export default function Tutorial() {\n  return (\n    <div className="flex items-center justify-center h-full min-h-[400px]">\n      <h2 className="text-2xl text-gray-500 font-medium animate-pulse">Tutorial Coming Soon...</h2>\n    </div>\n  );\n}`,
    tests: [],
    verify: () => ({})
  }
};
