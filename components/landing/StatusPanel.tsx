"use client";

import React from "react";
import { Terminal, Globe, Trophy } from "lucide-react";

interface StatusPanelProps {
    playerCount: number;
    timeLeftString: string;
}

export default function StatusPanel({ playerCount, timeLeftString }: StatusPanelProps) {
    return (
        <div className="w-full max-w-7xl mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 relative z-20">
            {/* Current Mission */}
            <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between group hover:border-primary/50 transition-colors cursor-pointer bg-black hover:bg-zinc-950">
                <div className="flex justify-between items-start mb-4">
                    <Terminal className="text-zinc-600 group-hover:text-primary transition-colors w-6 h-6" />
                    <span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-1 rounded">PRIORITY: HIGH</span>
                </div>
                <div>
                    <h4 className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-2">Current Mission</h4>
                    <p className="text-xl text-white dot-matrix-text">Mission: Repair Python Core</p>
                </div>
            </div>

            {/* Global Players */}
            <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between group hover:border-primary/50 transition-colors cursor-pointer relative overflow-hidden bg-black hover:bg-zinc-950 h-full">
                <div className="flex justify-between items-start mb-4 relative z-10">
                    <Globe className="text-zinc-600 group-hover:text-primary transition-colors w-6 h-6" />
                    <span className="text-[10px] font-mono text-primary border border-primary/30 bg-primary/10 px-2 py-1 rounded animate-pulse">LIVE</span>
                </div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                        <h4 className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-2">Global Players</h4>
                        <p className="text-xl text-white dot-matrix-text mb-3">{playerCount.toLocaleString()} Online</p>
                    </div>
                </div>
            </div>

            {/* Next Tournament */}
            <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between group hover:border-primary/50 transition-colors cursor-pointer bg-black hover:bg-zinc-950">
                <div className="flex justify-between items-start mb-4">
                    <Trophy className="text-zinc-600 group-hover:text-primary transition-colors w-6 h-6" />
                    <span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-1 rounded">$50K POOL</span>
                </div>
                <div>
                    <h4 className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-2">Next Tournament</h4>
                    <p className="text-xl text-white dot-matrix-text">In {timeLeftString}</p>
                </div>
            </div>
        </div>
    );
}
