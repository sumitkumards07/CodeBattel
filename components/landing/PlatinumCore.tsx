"use client";

import React from "react";
import { Terminal } from "lucide-react";

export default function PlatinumCore() {
    return (
        <div className="lg:col-span-5 relative h-[600px] flex items-center justify-center perspective-1000 hidden lg:flex">
            {/* Simple visual representation of Platinum Core */}
            <div className="relative z-10 w-full flex justify-center animate-[float_6s_ease-in-out_infinite]">
                <div className="w-80 h-96 relative group cursor-pointer transition-transform duration-500 hover:scale-105">
                    <div className="absolute inset-0 bg-black rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_-12px_rgba(255,0,0,0.15)] flex flex-col items-center justify-center overflow-hidden backdrop-blur-xl">
                        <div className="absolute inset-0 bg-zinc-900/50 z-0"></div>
                        <div className="relative z-20 w-48 h-48 flex items-center justify-center bg-zinc-950 rounded-full border border-zinc-800 shadow-inner">
                            <Terminal className="text-primary w-24 h-24 drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                            <h3 className="dot-matrix-text text-lg text-white mb-1">Platinum Core</h3>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-zinc-500 font-mono">ID: #8821X</span>
                                <span className="text-[10px] text-primary font-bold font-mono border border-primary/30 bg-primary/10 px-2 py-1 rounded">
                                    LEGENDARY
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
