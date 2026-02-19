"use client";

import { Terminal, Search, ChevronDown } from "lucide-react";
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

                {/* Navigation Links (Desktop) */}
                <div className="hidden lg:flex items-center gap-6">
                    {/* Labs Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-sm font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest py-4">
                            LABS
                            <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                        </button>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-2 shadow-2xl backdrop-blur-xl min-w-[200px] flex flex-col gap-1">
                                {[
                                    { name: "HTML", href: "/campaign/html/basics", color: "text-orange-500" },
                                    { name: "CSS", href: "/campaign/css/basics", color: "text-blue-500" },
                                    { name: "JavaScript", href: "/campaign/javascript/basics", color: "text-yellow-500" },
                                    { name: "Python", href: "/campaign/python/type-discovery", color: "text-green-500" },
                                    { name: "Java", href: "/campaign/java/basics", color: "text-red-500" }
                                ].map((lab) => (
                                    <Link
                                        key={lab.name}
                                        href={lab.href}
                                        className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-md transition-colors group/item"
                                    >
                                        <span className={`text-xs font-bold ${lab.color} group-hover/item:text-white transition-colors`}>
                                            {lab.name}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link href="/courses" className="text-sm font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">
                        COURSES
                    </Link>

                    <Link href="/community" className="text-sm font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">
                        COMMUNITY
                    </Link>
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
