"use client";

import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { Play, RotateCcw, Settings, FileCode } from "lucide-react";

export default function EditorPanel() {
    const [code, setCode] = useState(`function findOptimalPath(nodes, start, end) {
  // Initialize your algorithm here
  console.log("Breaching firewall...");
  
  // TODO: Implement Dijkstra's or A*
  
  return null;
}`);

    return (
        <div className="flex flex-col h-full bg-[#050505]">
            {/* Editor Header */}
            <div className="h-10 flex items-center justify-between bg-[#0A0A0A] border-b border-white/10">

                {/* File Tabs */}
                <div className="flex items-end h-full px-2">
                    <div className="h-full flex items-center gap-2 px-4 bg-[#111] border-t-2 border-[#00F0FF] text-[#00F0FF] text-xs font-mono uppercase tracking-wider relative top-[1px]">
                        <FileCode className="w-3 h-3" />
                        breach_protocol.js
                    </div>
                    <div className="h-full flex items-center gap-2 px-4 text-zinc-600 text-xs font-mono uppercase tracking-wider hover:text-zinc-400 cursor-pointer transition-colors">
                        utils.js
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center h-full">
                    <button className="h-full px-4 text-zinc-500 hover:text-white transition-colors border-l border-white/5">
                        <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                    <button className="h-full px-4 text-zinc-500 hover:text-white transition-colors border-l border-white/5">
                        <Settings className="w-3.5 h-3.5" />
                    </button>
                    <button className="h-full px-6 flex items-center gap-2 bg-transparent text-[#FF0033] hover:bg-[#FF0033]/10 transition-colors border-l border-white/10 font-['VT323'] uppercase text-lg tracking-wider group relative overflow-hidden">
                        <Play className="w-3 h-3 fill-current" />
                        Deploy Script
                        <div className="absolute inset-0 border-b-2 border-[#FF0033] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    </button>
                </div>
            </div>

            {/* Editor Canvas */}
            <div className="flex-1 relative overflow-hidden">
                <CodeMirror
                    value={code}
                    height="100%"
                    theme={oneDark}
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value) => setCode(value)}
                    className="absolute inset-0 text-base font-mono"
                    basicSetup={{
                        lineNumbers: true,
                        highlightActiveLineGutter: true,
                        highlightSpecialChars: true,
                        history: true,
                        foldGutter: true,
                        drawSelection: true,
                        dropCursor: true,
                        allowMultipleSelections: true,
                        indentOnInput: true,
                        syntaxHighlighting: true,
                        bracketMatching: true,
                        closeBrackets: true,
                        autocompletion: true,
                        rectangularSelection: true,
                        crosshairCursor: true,
                        highlightActiveLine: true,
                        highlightSelectionMatches: true,
                        closeBracketsKeymap: true,
                        defaultKeymap: true,
                        searchKeymap: true,
                        historyKeymap: true,
                        foldKeymap: true,
                        completionKeymap: true,
                        lintKeymap: true,
                    }}
                />
            </div>
        </div>
    );
}
