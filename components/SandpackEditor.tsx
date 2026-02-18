"use client";

import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { oneDark } from "@codemirror/theme-one-dark";

export default function SandpackEditor() {
    return (
        <div className="w-full h-full">
            <Sandpack
                template="react"
                theme="dark"
                options={{
                    showNavigator: true,
                    editorHeight: 600,
                    showTabs: true,
                }}
                files={{
                    "/App.js": `export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Hello CodeRush</h1>
      <p>Start building your project here.</p>
    </div>
  );
}`
                }}
            />
        </div>
    );
}
