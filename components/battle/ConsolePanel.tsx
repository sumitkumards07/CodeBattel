"use client";

import React from "react";
import { Terminal, CheckCircle2, XCircle, PlayCircle } from "lucide-react";

export default function ConsolePanel() {
    return (
        <div className="h-full flex flex-col font-mono text-sm">

            {/* Test Cases Panel (Top Half) */}
            <div className="h-1/2 border-b border-white/10 flex flex-col">
                <div className="px-4 py-2 border-b border-white/10 bg-[#0A0A0A] flex items-center justify-between">
                    <span className="font-['VT323'] text-lg text-zinc-400 uppercase">Test Vectors</span>
                    <span className="text-[10px] text-zinc-600 uppercase tracking-widest">3 Tests</span>
                </div>

                <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#080808]">
                    {/* Passing Test */}
                    <div className="bg-[#00F0FF]/5 border border-[#00F0FF]/30 p-3 flex items-start gap-3 relative group">
                        <div className="absolute inset-0 bg-[#00F0FF]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        <CheckCircle2 className="w-4 h-4 text-[#00F0FF] mt-0.5 shrink-0" />
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-[#00F0FF] font-bold text-xs uppercase tracking-wider">Pass</span>
                                <span className="text-zinc-500 text-[10px]">12ms</span>
                            </div>
                            <p className="text-zinc-400 text-xs">Standard Path (A -&gt; E)</p>
                        </div>
                    </div>

                    {/* Failing Test */}
                    <div className="bg-[#FF0033]/5 border border-[#FF0033]/30 p-3 flex items-start gap-3">
                        <XCircle className="w-4 h-4 text-[#FF0033] mt-0.5 shrink-0" />
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-[#FF0033] font-bold text-xs uppercase tracking-wider">Fail</span>
                                <span className="text-zinc-500 text-[10px]">--</span>
                            </div>
                            <p className="text-zinc-400 text-xs">No Path Exists (Isolated Node)</p>
                            <div className="mt-2 text-[#FF0033] text-[10px] border-t border-[#FF0033]/20 pt-1">
                                Expected: null, Received: undefined
                            </div>
                        </div>
                    </div>

                    {/* Pending Test */}
                    <div className="bg-zinc-900 border border-zinc-800 p-3 flex items-start gap-3 opacity-50">
                        <PlayCircle className="w-4 h-4 text-zinc-600 mt-0.5 shrink-0" />
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-zinc-500 font-bold text-xs uppercase tracking-wider">Pending</span>
                            </div>
                            <p className="text-zinc-600 text-xs">Complex Graph Cycle</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Battle Log (Bottom Half) */}
            <div className="h-1/2 flex flex-col bg-[#050505]">
                <div className="px-4 py-2 border-b border-white/10 bg-[#0A0A0A] flex items-center gap-2">
                    <Terminal className="w-3 h-3 text-zinc-500" />
                    <span className="font-['VT323'] text-lg text-zinc-400 uppercase">Battle Log</span>
                </div>
                <div className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-1">
                    <div className="text-zinc-500">[SYSTEM] Initializing environment...</div>
                    <div className="text-zinc-500">[SYSTEM] Loading protocols...</div>
                    <div className="text-[#00F0FF]">[SUCCESS] Environment ready.</div>
                    <div className="text-zinc-300 pointer-events-none opacity-0 h-4"></div>
                    <div className="text-zinc-300">&gt; console.log("Breaching firewall...");</div>
                    <div className="text-white">Breaching firewall...</div>
                    <div className="text-[#FF0033]">[ERROR] Stack overflow at line 14:2</div>
                </div>
            </div>
        </div>
    );
}
