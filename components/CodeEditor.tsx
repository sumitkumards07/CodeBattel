"use client";

import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";

interface CodeEditorProps {
    value: string;
    language?: "javascript" | "python";
    onChange?: (value: string) => void;
    className?: string;
}

export default function CodeEditor({
    value,
    language = "python",
    onChange,
    className,
}: CodeEditorProps) {
    const extensions = [language === "python" ? python() : javascript({ jsx: true })];

    return (
        <div className={`text-sm font-mono overflow-hidden rounded-md ${className}`}>
            <CodeMirror
                value={value}
                height="100%"
                theme={oneDark}
                extensions={extensions}
                onChange={(val) => onChange && onChange(val)}
                basicSetup={{
                    lineNumbers: true,
                    highlightActiveLineGutter: true,
                    dropCursor: true,
                    foldGutter: true,
                }}
                className="h-full"
            />
        </div>
    );
}
