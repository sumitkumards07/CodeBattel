"use client";

import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { cyberpunkTheme } from "@/components/battle/CyberpunkTheme";
import { ChevronLeft, ChevronRight, Lock, Unlock, Eye } from "lucide-react";
import Link from "next/link";
import CurriculumSidebar from "@/components/battle/CurriculumSidebar";

export default function HtmlChallenge() {
    const [code, setCode] = useState(`<!-- Create a heading -->\n\n\n<!-- Create a paragraph -->\n`);
    const [previewDoc, setPreviewDoc] = useState("");
    const [validationStatus, setValidationStatus] = useState<'idle' | 'running' | 'success' | 'minimized'>('idle');

    // Update preview when code changes
    useEffect(() => {
        const timeout = setTimeout(() => {
            setPreviewDoc(`
                <html>
                    <head>
                        <style>
                            body { color: white; font-family: sans-serif; padding: 10px; }
                            h1 { color: #00F0FF; text-shadow: 0 0 5px #00F0FF; }
                            p { color: #ccc; }
                        </style>
                    </head>
                    <body>${code}</body>
                </html>
            `);
        }, 500);
        return () => clearTimeout(timeout);
    }, [code]);

    const runValidation = () => {
        setValidationStatus('running');

        setTimeout(() => {
            // Simple string matching validation
            const hasH1 = /<h1>.*<\/h1>/.test(code);
            const hasP = /<p>.*<\/p>/.test(code);

            if (hasH1 && hasP) {
                setValidationStatus('success');
            } else {
                setValidationStatus('idle'); // Or error if we implement it
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
                    <div className="flex justify-between items-center border-b border-[#333] pb-4">
                        <h1 className="text-3xl font-bold text-white tracking-tighter" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                            HTML BASICS
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

                {/* Section 2: Mission Briefing */}
                <section className="bg-[#111] border-l-4 border-[#FF0033] p-6 shadow-lg">
                    <p className="text-lg text-white mb-4 leading-relaxed">
                        Structure the web. Use HTML tags to create content.
                    </p>

                    <div className="mb-6">
                        <h2 className="text-white font-bold mb-2 uppercase tracking-wide text-sm">Instructions:</h2>
                        <ul className="list-disc list-inside text-sm space-y-2 text-zinc-400">
                            <li>Create an <span className="text-[#00F0FF]">&lt;h1&gt;</span> heading with any text.</li>
                            <li>Create a <span className="text-[#00F0FF]">&lt;p&gt;</span> paragraph with any text.</li>
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

                {/* Section 3: The Battleground (Editor & Live Preview) */}
                <section className="grid grid-cols-2 gap-4 flex-1 min-h-[400px]">

                    {/* Left Column: Editor */}
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center bg-[#111] px-4 py-2 border-t border-x border-[#333]">
                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">HTML EDITOR</span>
                            <div className="flex gap-1">
                                <div className="w-2 h-2 bg-[#FF0033]"></div>
                                <div className="w-2 h-2 bg-orange-500"></div>
                                <div className="w-2 h-2 bg-green-500"></div>
                            </div>
                        </div>
                        <div className="flex-1 bg-black border border-[#333] relative overflow-hidden group">
                            <CodeMirror
                                value={code}
                                height="100%"
                                theme={cyberpunkTheme}
                                extensions={[html()]}
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
                    </div>

                    {/* Right Column: Live Preview */}
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center bg-[#111] px-4 py-2 border-t border-x border-[#333]">
                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                                <Eye className="w-3 h-3" /> LIVE PREVIEW
                            </span>
                        </div>
                        <div className="flex-1 bg-black border border-[#333] p-0 overflow-hidden relative">
                            {/* Grid Background Pattern */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none"
                                style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                            </div>
                            <iframe
                                srcDoc={previewDoc}
                                title="Live Preview"
                                className="w-full h-full border-none relative z-10"
                                sandbox="allow-scripts"
                            />
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
                            <button onClick={runValidation} className="text-[#FF0033] text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">
                                RUN TESTS
                            </button>
                        )}
                    </div>
                    <div className="flex-1 p-4 flex items-center justify-center">
                        {validationStatus === 'idle' && (
                            <p className="text-zinc-500 text-xs font-mono text-center">
                                Write code and execute tests to verify your valid HTML structure.
                            </p>
                        )}
                        {validationStatus === 'running' && (
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-4 h-4 border-2 border-[#FF0033] border-t-transparent rounded-full animate-spin"></div>
                                <p className="text-[#FF0033] text-xs font-mono animate-pulse">Scanning DOM Structure...</p>
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
                                    <h4 className="font-bold text-sm tracking-wide text-green-400">STRUCTURE VERIFIED</h4>
                                    <p className="text-xs opacity-70 font-mono">Found &lt;h1&gt; and &lt;p&gt; tags.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}
