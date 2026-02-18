"use client";

import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { oneDark } from "@codemirror/theme-one-dark";

interface HTMLEditorProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

export default function HTMLEditor({ value, onChange, className }: HTMLEditorProps) {
    return (
        <div className={`text-sm font-mono overflow-hidden rounded-md bg-[#050505] ${className}`}>
            <CodeMirror
                value={value}
                height="100%"
                theme={oneDark}
                extensions={[html()]}
                onChange={onChange}
                basicSetup={{
                    lineNumbers: true,
                    highlightActiveLineGutter: true,
                    dropCursor: true,
                    foldGutter: true,
                    autocompletion: true,
                }}
                className="h-full"
            />
        </div>
    );
}
