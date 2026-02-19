"use client";

import { Terminal, Search } from "lucide-react";
import Link from "next/link";

import Logo from "./Logo";

export default function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
            <div className="w-full px-6 py-2 flex items-center gap-2 justify-between">

                {/* Brand Logo */}
                <Link href="/" className="flex items-center gap-3 pl-4 hover:opacity-80 transition-opacity">
                    <Logo className="w-10 h-10" />
                    <span className="dot-matrix-text text-lg tracking-wider text-white">CODEBATTLE</span>
                </Link>

                {/* Playground Links (Desktop) */}
                <div className="hidden lg:flex items-center gap-1 bg-black/40 rounded-full p-1 border border-white/10">
                    {["HTML", "CSS", "JavaScript", "Python", "Java"].map((lang) => (
                        <Link
                            key={lang}
                            href={lang === "JavaScript" ? "/battle" : "/coming-soon"}
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

                    <button disabled className="bg-zinc-950 text-zinc-500 text-xs font-mono uppercase tracking-widest px-6 py-2.5 rounded-full border border-zinc-800 flex items-center gap-2 cursor-not-allowed opacity-70">
                        <span>Sign In</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
