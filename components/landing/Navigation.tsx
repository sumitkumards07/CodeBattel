"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Search } from "lucide-react";

export default function Navigation() {
    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
            <div className="glass-panel rounded-full px-2 py-2 flex items-center gap-2 max-w-6xl w-full justify-between shadow-glass-glow transition-all duration-300 hover:border-primary/50 bg-black/80">

                {/* Brand Logo */}
                <div className="flex items-center gap-3 pl-4">
                    <div className="size-8 rounded-full bg-black border border-white/20 flex items-center justify-center shadow-inner-light">
                        <Terminal className="text-primary w-5 h-5" />
                    </div>
                    <span className="dot-matrix-text text-lg tracking-wider text-white">CODERUSH</span>
                </div>

                {/* Playground Links (Desktop) */}
                <div className="hidden lg:flex items-center gap-1 bg-black/40 rounded-full p-1 border border-white/10">
                    {["HTML", "CSS", "JavaScript", "Python", "Java"].map((lang) => (
                        <Link
                            key={lang}
                            href={lang === "Python" ? "/playground/python" : "#"}
                            className="nothing-ui-text px-4 py-2 rounded-full text-xs font-medium text-zinc-400 border border-transparent hover:text-white hover:bg-primary/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] hover:drop-shadow-[0_0_5px_rgba(255,0,0,1)] transition-all duration-300 uppercase tracking-wide whitespace-nowrap"
                        >
                            {lang}
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pr-1">
                    <button className="size-10 flex items-center justify-center rounded-full bg-transparent hover:bg-white/5 text-zinc-400 hover:text-white transition-colors border border-transparent hover:border-white/10">
                        <Search className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => alert("Wallet Connection Module Loading...")}
                        className="bg-zinc-950 hover:bg-zinc-900 text-white text-xs font-mono uppercase tracking-widest px-6 py-2.5 rounded-full border border-zinc-700 hover:border-primary transition-all flex items-center gap-2 group shadow-inner-light"
                    >
                        <span>Connect</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,0,0,0.8)] animate-pulse"></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
