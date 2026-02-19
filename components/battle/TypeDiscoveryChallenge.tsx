"use client";

import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { cyberpunkTheme } from "@/components/battle/CyberpunkTheme"; // Reusing our custom theme
import { ChevronLeft, ChevronRight, Lock, Unlock } from "lucide-react";
import Link from "next/link";
import CurriculumSidebar from "@/components/battle/CurriculumSidebar";

export default function TypeDiscoveryChallenge() {
    const [code, setCode] = useState(`# Create name variable\nname = "Cyber_Punk"\n\n# Check type\nprint(type(name))`);
    const [output, setOutput] = useState<string[]>([
        "user@coderush:~$ _"
    ]);
    const [validationStatus, setValidationStatus] = useState<'idle' | 'running' | 'success' | 'minimized'>('idle');

    const runCode = () => {
        setValidationStatus('running');
        setOutput([
            "user@coderush:~$ python3 main.py",
        ]);

        // Simple Mock Interpreter
        setTimeout(() => {
            const newOutput: string[] = [];
            let isSuccess = false;
            let nameDefined = false;

            const lines = code.split('\n');

            lines.forEach(line => {
                const trimmed = line.trim();

                // 1. Mock variable assignment: name = "value" or name = 'value'
                if (trimmed.startsWith("name") && trimmed.includes("=")) {
                    const parts = trimmed.split("=");
                    if (parts.length > 1) {
                        const value = parts[1].trim();
                        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                            nameDefined = true;
                        }
                    }
                }

                // 2. Mock print statements
                if (trimmed.startsWith("print(") && trimmed.endsWith(")")) {
                    const content = trimmed.slice(6, -1); // Extract content inside ()

                    // Case A: print(type(name))
                    if (content.includes("type(name)")) {
                        if (nameDefined) {
                            newOutput.push("<class 'str'>");
                            isSuccess = true; // This is the win condition
                        } else {
                            newOutput.push("NameError: name is not defined");
                        }
                    }
                    // Case B: print("string") or print('string')
                    else if ((content.startsWith('"') && content.endsWith('"')) || (content.startsWith("'") && content.endsWith("'"))) {
                        newOutput.push(content.slice(1, -1));
                    }
                    // Case C: print(name)
                    else if (content === "name") {
                        if (nameDefined) {
                            // Extract the value from the code if we want to be fancy, but for now just showing we know it exists
                            // Ideally we'd store the value map, but let's keep it simple
                            newOutput.push("Cyber_Punk"); // Assumption based on prompt instructions
                        } else {
                            newOutput.push("NameError: name is not defined");
                        }
                    } else {
                        // Fallback for unknown print
                        newOutput.push(content); // Just echo for now if it doesn't match specific patterns
                    }
                }
            });

            setOutput(prev => [
                ...prev,
                ...newOutput
            ]);

            if (isSuccess) {
                setValidationStatus('success');
            } else {
                setValidationStatus('idle');
            }
        }, 800);
    };

    return (
        <div className="flex h-screen bg-[#050505] text-gray-300 font-mono selection:bg-[#FF0033] selection:text-white overflow-hidden">

            {/* Left Sidebar */}
            <div className="w-80 flex-shrink-0 border-r border-white/10 bg-[#080808]">
                <CurriculumSidebar />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col p-6 gap-6 overflow-y-auto">

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
                </section>

                {/* Section 3: The Battleground (Editor & Output) */}
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
                                disabled={validationStatus === 'running'}
                                className="absolute bottom-4 right-4 bg-[#FF0033] text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#FF0033] transition-colors shadow-[4px_4px_0px_black] border border-white disabled:opacity-50 disabled:cursor-not-allowed z-10"
                            >
                                {validationStatus === 'running' ? 'EXECUTING...' : 'RUN CODE'}
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
                                <div key={i} className={`mb-2 ${line.startsWith('user@') ? 'text-zinc-500' : 'text-[#00F0FF]'}`}>
                                    {line}
                                </div>
                            ))}
                            <div className="animate-pulse text-[#FF0033] mt-2">_</div>
                        </div>
                    </div>

                </section>

                {/* Section 4: Validation Results Bar */}
                <section className="h-32 bg-[#0a0a0a] border border-[#333] flex flex-col shadow-lg mt-auto">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-[#333] bg-[#111]">
                        <span className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${validationStatus === 'success' ? 'bg-green-500 shadow-[0_0_8px_lime]' : 'bg-[#333]'}`}></span>
                            Validation Results
                        </span>
                        {validationStatus !== 'running' && (
                            <button onClick={runCode} className="text-[#FF0033] text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">
                                RERUN TESTS
                            </button>
                        )}
                    </div>
                    <div className="flex-1 p-4 flex items-center justify-center">
                        {validationStatus === 'idle' && (
                            <p className="text-zinc-500 text-xs font-mono text-center">
                                Write your code and run tests to see validation results.
                            </p>
                        )}
                        {validationStatus === 'running' && (
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-4 h-4 border-2 border-[#FF0033] border-t-transparent rounded-full animate-spin"></div>
                                <p className="text-[#FF0033] text-xs font-mono animate-pulse">Running Validation Suite...</p>
                            </div>
                        )}
                        {validationStatus === 'success' && (
                            <div className="flex items-center gap-3 text-green-500 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500 shadow-[0_0_10px_rgba(0,255,0,0.2)]">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm tracking-wide text-green-400">TEST PASSED</h4>
                                    <p className="text-xs opacity-70 font-mono">Type identified as &lt;class 'str'&gt;</p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}
