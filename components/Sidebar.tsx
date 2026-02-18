"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Lock, CheckCircle2, Circle } from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="w-72 flex-none border-r border-white/10 bg-black/40 flex flex-col backdrop-blur-sm h-full">
            <div className="p-4 border-b border-white/5">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="dot-matrix-text text-xs text-zinc-500">The Python Codex</h2>
                    <span className="text-[10px] font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded border border-primary/20">500 XP</span>
                </div>
                <div className="relative w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-[35%] bg-primary shadow-[0_0_10px_rgba(255,0,0,0.5)]"></div>
                </div>
                <p className="font-mono text-[10px] text-zinc-400 mt-2 text-right">35% COMPLETE</p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
                {/* Module 1 - Completed */}
                <div className="group">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-sm text-white font-mono group-hover:text-primary transition-colors">Python Fundamentals</h3>
                        <div className="size-5 rounded-full border border-primary/50 flex items-center justify-center text-[10px] text-primary font-mono">1</div>
                    </div>
                    <div className="flex gap-2 mb-2 pl-1">
                        {[...Array(3)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-white"></div>)}
                        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#FF0000]"></div>
                        {[...Array(3)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-zinc-800"></div>)}
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed font-mono">Master variables, data types, and operators.</p>
                </div>

                {/* Module 2 - Active */}
                <div className="group opacity-70 hover:opacity-100 transition-opacity">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-sm text-zinc-400 font-mono group-hover:text-white transition-colors">Control Flow</h3>
                        <div className="size-5 rounded-full border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-500 font-mono">2</div>
                    </div>
                    <div className="flex gap-2 mb-2 pl-1">
                        {[...Array(5)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-zinc-800"></div>)}
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed font-mono">Logic gates and decision trees.</p>
                </div>

                {/* Module 3 - Locked */}
                <div className="group opacity-50">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-sm text-zinc-600 font-mono">Loops & Iteration</h3>
                        <Lock className="w-4 h-4 text-zinc-700" />
                    </div>
                    <div className="flex gap-2 mb-2 pl-1">
                        {[...Array(4)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-zinc-800"></div>)}
                    </div>
                </div>
            </div>

            <div className="p-4 border-t border-white/10 bg-zinc-900/50">
                <Link href="/" className="flex items-center justify-center w-full py-2 border border-zinc-700 hover:border-white text-zinc-400 hover:text-white text-xs font-mono uppercase tracking-widest rounded transition-colors">
                    Back to Hub
                </Link>
            </div>
        </aside>
    );
}
