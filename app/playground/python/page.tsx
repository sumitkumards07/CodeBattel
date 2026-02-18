"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import CodeEditor from "@/components/CodeEditor";
import { Play, Trash2, Terminal, AlertTriangle, Lightbulb } from "lucide-react";

export default function PythonPlayground() {
    const [code, setCode] = useState(`import re\n\ndef validate_email(email):\n # Write your tactical code here\n pass\n\n# Test cases\nprint(validate_email('user@example.com')) # True\nprint(validate_email('invalid.email'))    # False\nprint(validate_email('test@domain.co.uk'))# True`);
    const [output, setOutput] = useState<string[]>([
        " // System initialization...",
        " // Waiting for input..."
    ]);
    const [isRunning, setIsRunning] = useState(false);

    const handleRun = () => {
        setIsRunning(true);
        setOutput((prev) => [...prev, "> Executing script..."]);

        // Mock execution delay
        setTimeout(() => {
            const newOutput = [
                "> True",
                "> False",
                "> True",
                "> [SUCCESS] All test cases passed.",
                "> XP Gained: +50"
            ];
            setOutput((prev) => [...prev, ...newOutput]);
            setIsRunning(false);
        }, 800);
    };

    return (
        <div className="flex h-screen overflow-hidden bg-background-dark text-slate-100 font-display">
            <Sidebar />

            <main className="flex-1 flex flex-col min-w-0">
                {/* Top Panel: Mission Briefing */}
                <div className="h-1/3 min-h-[250px] border-b border-white/10 bg-background-dark/90 flex flex-col relative z-20">
                    <div className="flex items-center border-b border-white/5 bg-zinc-900/50">
                        <div className="px-6 py-3 border-r border-red-900/30 text-xs font-mono uppercase text-white font-bold bg-white/5 border-t-2 border-t-primary shadow-[inset_0_10px_20px_rgba(255,0,0,0.05)]">
                            Mission Briefing
                        </div>
                        <div className="px-6 py-3 border-r border-white/5 text-xs font-mono uppercase text-zinc-500 hover:text-zinc-300 cursor-pointer transition-colors">
                            Hints (0/3)
                        </div>
                    </div>
                    <div className="flex-1 p-8 overflow-y-auto">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="text-primary w-6 h-6" />
                                <h2 className="text-xl text-white font-bold">Validate Transmission Protocols</h2>
                            </div>
                            <p className="text-zinc-400 font-mono text-sm leading-relaxed mb-6">
                                Create a function called <span className="text-white bg-white/10 px-1 rounded">validate_email</span> that takes an email string as a parameter. Use regular expressions to validate the email format.
                            </p>
                            <div className="bg-zinc-900/80 border border-white/10 p-4 rounded-lg mb-6">
                                <h4 className="text-xs text-primary font-mono uppercase mb-2">Objectives:</h4>
                                <ul className="text-sm text-zinc-400 font-mono list-disc list-inside space-y-1">
                                    <li>Check for: username (alphanumeric, dots, underscores)</li>
                                    <li>Must contain <span className="text-white">@</span> symbol</li>
                                    <li>Verify domain and TLD structure</li>
                                    <li>Return <span className="text-green-500">True</span> if valid, <span className="text-red-500">False</span> otherwise</li>
                                </ul>
                            </div>
                            <div className="flex gap-4">
                                <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 text-primary text-xs font-mono uppercase hover:bg-primary/10 transition-colors">
                                    <Lightbulb className="w-4 h-4" />
                                    Unlock Hint (Cost: 10xp)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Panel: Editor & Console */}
                <div className="flex-1 flex min-h-0">
                    {/* Editor */}
                    <div className="flex-1 bg-editor-bg relative flex flex-col border-r border-red-900/30">
                        <div className="flex justify-between items-center px-4 py-2 border-b border-white/5 bg-[#050505]">
                            <span className="dot-matrix-text text-xs text-zinc-500">PYTHON_EDITOR</span>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                            </div>
                        </div>

                        <div className="flex-1 relative overflow-hidden">
                            <CodeEditor
                                value={code}
                                language="python"
                                onChange={setCode}
                                className="h-full"
                            />

                            <div className="absolute bottom-6 right-6 z-30">
                                <button
                                    onClick={handleRun}
                                    disabled={isRunning}
                                    className="group relative px-8 py-3 bg-black rounded-full text-white font-bold tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 shadow-red-glow hover:shadow-red-glow-strong border border-primary/60 hover:border-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <Play className={`text-primary group-hover:rotate-90 transition-transform w-5 h-5 ${isRunning ? 'animate-spin' : ''}`} />
                                    <span className="relative z-10 dot-matrix-text text-xs">
                                        {isRunning ? "EXECUTING..." : "EXECUTE"}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Console */}
                    <div className="w-1/3 min-w-[320px] bg-obsidian border-l border-border-separator flex flex-col crt-scanline relative shadow-[-10px_0_20px_-10px_rgba(0,0,0,0.8)] z-10">
                        <div className="flex justify-between items-center px-4 py-2 border-b border-white/5 bg-obsidian-light">
                            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">CONSOLE (STDOUT)</span>
                            <Trash2
                                onClick={() => setOutput([])}
                                className="text-zinc-600 w-4 h-4 hover:text-white cursor-pointer transition-colors"
                            />
                        </div>
                        <div className="flex-1 p-4 font-terminal text-xs overflow-y-auto console-scroll tracking-wide leading-relaxed">
                            {output.map((line, i) => (
                                <div key={i} className={`mb-1 ${line.startsWith('>') ? 'text-zinc-300' : 'text-zinc-600 italic'}`}>
                                    {line.startsWith('>') && <span className="text-primary font-bold mr-2">&gt;</span>}
                                    {line.replace('>', '')}
                                </div>
                            ))}
                            <div className="mt-2 text-zinc-500">
                                <span className="text-primary font-bold mr-2">&gt;</span>
                                <span className="animate-pulse">_</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
