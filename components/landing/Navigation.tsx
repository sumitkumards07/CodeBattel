"use client";

import { Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navigation() {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center w-auto max-w-4xl">
            <div className="
                relative flex items-center gap-1 p-2
                bg-[#0a0a0a]/80 backdrop-blur-2xl 
                border border-white/10 rounded-full 
                shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]
                ring-1 ring-white/5
            ">

                {/* Logo Capsule */}
                <Link href="/" className="flex items-center gap-2 pl-4 pr-6 py-2 hover:opacity-80 transition-opacity">
                    <Logo className="w-8 h-8" />
                    <span className="dot-matrix-text text-sm tracking-widest text-white/90">CODEBATTLE</span>
                </Link>

                {/* Divider */}
                <div className="w-px h-6 bg-white/10 mx-1"></div>

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center gap-1 mx-2">

                    {/* Labs Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            LABS
                            <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180 opacity-50 group-hover:opacity-100" />
                        </button>

                        {/* Premium Dropdown Menu */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0">
                            <div className="bg-[#111]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl min-w-[220px] ring-1 ring-white/5 flex flex-col gap-1 overflow-hidden">
                                {[
                                    { name: "HTML", href: "/campaign/html/basics", color: "bg-orange-500", label: "Markup & Structure" },
                                    { name: "CSS", href: "/campaign/css/basics", color: "bg-blue-500", label: "Styling & Design" },
                                    { name: "JavaScript", href: "/campaign/javascript/basics", color: "bg-yellow-500", label: "Logic & Inteactivity" },
                                    { name: "Python", href: "/campaign/python/type-discovery", color: "bg-green-500", label: "Data & Systems" },
                                    { name: "Java", href: "/campaign/java/basics", color: "bg-red-500", label: "Object Oriented" }
                                ].map((lab) => (
                                    <Link
                                        key={lab.name}
                                        href={lab.href}
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group/item"
                                    >
                                        <div className={`w-8 h-8 rounded-lg ${lab.color}/10 flex items-center justify-center border border-white/5 group-hover/item:border-${lab.color}/50 transition-colors`}>
                                            <div className={`w-2 h-2 rounded-full ${lab.color} shadow-[0_0_8px_currentColor]`}></div>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-zinc-300 group-hover/item:text-white transition-colors">{lab.name}</span>
                                            <span className="text-[10px] text-zinc-600 group-hover/item:text-zinc-500">{lab.label}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link href="/courses" className="px-5 py-2.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        COURSES
                    </Link>

                    <Link href="/community" className="px-5 py-2.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        COMMUNITY
                    </Link>
                </div>

                {/* Divider */}
                <div className="w-px h-6 bg-white/10 mx-1"></div>

                {/* Actions */}
                <div className="flex items-center gap-2 pl-2">
                    <button className="size-9 flex items-center justify-center rounded-full bg-transparent hover:bg-white/10 text-zinc-400 hover:text-white transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <Search className="w-4 h-4" />
                    </button>

                    <button disabled className="bg-white text-black text-[10px] font-bold uppercase tracking-wider px-5 py-2 rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed">
                        Sign In
                    </button>
                </div>
            </div>
        </nav>
    );
}
