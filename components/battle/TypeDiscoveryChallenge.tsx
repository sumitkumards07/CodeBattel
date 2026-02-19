"use client";

import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { cyberpunkTheme } from "@/components/battle/CyberpunkTheme"; // Reusing our custom theme
import { ChevronLeft, ChevronRight, Lock, Unlock } from "lucide-react";
import Link from "next/link";

export default function TypeDiscoveryChallenge() {
    const [code, setCode] = useState(`# Create name variable\nname = "Cyber_Punk"\n\n# Check type\nprint(type(name))`);
    const [output, setOutput] = useState<string[]>([
        "> System initialized...",
        "> Awaiting deployment..."
    ]);

    const runCode = () => {
        setOutput([
            "> System initialized...",
            "> Awaiting deployment...",
            "> Executing...",
            "<class 'str'>",
            "> [SUCCESS] Type Identified."
        ]);
    };

    return (
        <div className="min-h-screen bg-[#050505] text-gray-300 font-mono p-6 flex flex-col gap-6 selection:bg-[#FF0033] selection:text-white">

            {/* Section 1: Header & Navigation */}
            <header className="flex flex-col gap-4">
                {/* Top Row */}
                <div className="flex justify-between items-center border-b border-[#333] pb-4">
                    <h1 className="text-3xl font-bold text-white tracking-tighter" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                        TYPE DISCOVERY
                    </h1>
                    <div className="flex gap-4">
                        <div className="border border-[#FF0033] text-[#FF0033] px-3 py-1 text-xs font-bold tracking-widest shadow-[0_0_8px_rgba(255,0,51,0.2)]">
                            [ 50 XP ]
                        </div>
                        <div className="border border-[#00F0FF] text-[#00F0FF] px-3 py-1 text-xs font-bold tracking-widest shadow-[0_0_8px_rgba(0,240,255,0.2)]">
                            [ EASY ]
                        </div>
                    </div>
                </div>

                {/* Second Row: Navigation */}
                <div className="flex justify-between text-zinc-500 text-sm font-bold tracking-widest">
                    <Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        PREVIOUS
                    </Link>
                    <Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                        NEXT
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </header>

            {/* Section 2: Mission Briefing & Instructions */}
            <section className="bg-[#111] border-l-4 border-[#FF0033] p-6 shadow-lg">
                <p className="text-lg text-white mb-4 leading-relaxed">
                    Every value has a type. Use the <span className="text-[#FF0033] mx-1">type()</span> function to discover what they are.
                </p>

                <div className="mb-6">
                    <h2 className="text-white font-bold mb-2 uppercase tracking-wide text-sm">Instructions:</h2>
                    <ul className="list-disc list-inside text-sm space-y-2 text-zinc-400">
                        <li>Declare a variable named <span className="text-white bg-white/10 px-1">name</span> with the value "Cyber_Punk".</li>
                        <li>Use the <span className="text-white bg-white/10 px-1">print()</span> function to output the type of the variable.</li>
                        <li>Verify the output matches <span className="text-[#00F0FF]">&lt;class 'str'&gt;</span>.</li>
                    </ul>
                </div>

                <div className="flex justify-between items-center border-t border-white/5 pt-4">
                    <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider">HINTS (0/3)</span>
                    <button className="text-[#FF0033]/70 text-xs font-bold uppercase tracking-widest hover:text-[#FF0033] hover:shadow-[0_0_10px_#FF0033] transition-all flex items-center gap-2">
                        [ UNLOCK HINT ]
                        <Lock className="w-3 h-3" />
                    </button>
                </div>
                <p className="text-[10px] text-zinc-600 mt-2 font-mono">Stuck? Unlock hints to get help with this task.</p>
            </section>

            {/* Section 3: The Battleground */}
            <section className="grid grid-cols-2 gap-4 flex-1 min-h-[400px]">

                {/* Left Column: Editor */}
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center bg-[#111] px-4 py-2 border-t border-x border-[#333]">
                        <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">PYTHON EDITOR</span>
                        <div className="flex gap-1">
                            <div className="w-2 h-2 bg-[#FF0033]"></div>
                            <div className="w-2 h-2 bg-orange-500"></div>
                            <div className="w-2 h-2 bg-green-500"></div>
                        </div>
                    </div>
                    <div className="flex-1 bg-black border border-[#333] relative overflow-hidden group">
                        <div className="absolute inset-0">
                            <CodeMirror
                                value={code}
                                height="100%"
                                theme={cyberpunkTheme}
                                extensions={[python()]}
                                onChange={setCode}
                                className="h-full text-base"
                                basicSetup={{
                                    lineNumbers: true,
                                    highlightActiveLineGutter: true,
                                    highlightSpecialChars: true,
                                    history: true,
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
                        {/* Run Button Overlay */}
                        <button
                            onClick={runCode}
                            className="absolute bottom-4 right-4 bg-[#FF0033] text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#FF0033] transition-colors shadow-[4px_4px_0px_black] border border-white"
                        >
                            Run Code
                        </button>
                    </div>
                </div>

                {/* Right Column: Output */}
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center bg-[#111] px-4 py-2 border-t border-x border-[#333]">
                        <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">BATTLE LOG</span>
                    </div>
                    <div className="flex-1 bg-[#0a0a0a] border border-[#333] p-4 font-mono text-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] overflow-y-auto">
                        {output.map((line, i) => (
                            <div key={i} className={`mb-2 ${line.startsWith('>') ? 'text-zinc-500' : 'text-[#00F0FF]'}`}>
                                {line}
                            </div>
                        ))}
                        <div className="animate-pulse text-[#FF0033] mt-2">_</div>
                    </div>
                </div>

            </section>
        </div>
    );
}
