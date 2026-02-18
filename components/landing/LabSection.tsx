"use client";

import React from "react";
import Link from "next/link";
import { Lock, ArrowRight, Code, Database, Globe, Palette, FileCode, Coffee } from "lucide-react";


const LABS = [
    {
        id: "html",
        title: "HTML Playground",
        icon: Globe,
        description: "Build the structure of the web. Master HTML5 elements, semantic markup, forms, and accessibility with 50+ interactive challenges.",
        status: "LOCKED",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        borderColor: "group-hover:border-orange-500/50",
        href: "/campaign/html"
    },
    {
        id: "css",
        title: "CSS Playground",
        icon: Palette,
        description: "Style the web beautifully. Learn layouts, flexbox, grid, animations, and responsive design through creative exercises.",
        status: "LOCKED",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        borderColor: "group-hover:border-blue-500/50",
        href: "/campaign/css"
    },
    {
        id: "js",
        title: "JavaScript Playground",
        icon: FileCode,
        description: "Bring the web to life. Master JavaScript fundamentals, DOM manipulation, events, and async programming with real projects.",
        status: "LOCKED",
        color: "text-yellow-400",
        bgColor: "bg-yellow-400/10",
        borderColor: "group-hover:border-yellow-400/50",
        href: "/campaign/js"
    },
    {
        id: "python",
        title: "Python Playground",
        icon: Code,
        description: "Code with Python power. Learn syntax, data structures, algorithms, and problem-solving with hands-on challenges.",
        status: "FREE",
        color: "text-green-400",
        bgColor: "bg-green-400/10",
        borderColor: "group-hover:border-green-400/50",
        href: "/playground/python"
    },
    {
        id: "sql",
        title: "SQL Lab",
        icon: Database,
        description: "Query data like a pro. Practice SQL from basics to complex joins, aggregations, and database design with real scenarios.",
        status: "FREE",
        color: "text-purple-400",
        bgColor: "bg-purple-400/10",
        borderColor: "group-hover:border-purple-400/50",
        href: "/playground/sql"
    },
    {
        id: "java",
        title: "Java Playground",
        icon: Coffee,
        description: "Master object-oriented programming with Java. Build robust applications, understand classes, inheritance, and data structures.",
        status: "FREE",
        color: "text-red-400",
        bgColor: "bg-red-400/10",
        borderColor: "group-hover:border-red-400/50",
        href: "/playground/java"
    }
];

export default function LabSection() {
    return (
        <div className="w-full max-w-7xl mx-auto mt-32 relative z-20">
            <div className="flex items-center gap-3 mb-8 justify-center">
                <div className="h-px w-12 bg-zinc-800"></div>
                <h2 className="text-2xl font-black dot-matrix-text text-white tracking-widest uppercase">Choose Your Lab</h2>
                <div className="h-px w-12 bg-zinc-800"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {LABS.map((lab) => (
                    <div
                        key={lab.id}
                        className={`glass-panel p-8 rounded-2xl border border-white/5 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden ${lab.borderColor}`}
                    >
                        {/* Background Glow */}
                        <div className={`absolute top-0 right-0 w-32 h-32 ${lab.bgColor} blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none`}></div>

                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${lab.bgColor} ${lab.color} border border-white/5`}>
                                <lab.icon className="w-6 h-6" />
                            </div>

                            {lab.status === "LOCKED" ? (
                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-700 text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                                    <Lock className="w-3 h-3" />
                                    Locked
                                </div>
                            ) : (
                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-[10px] font-mono uppercase tracking-wider text-primary shadow-[0_0_10px_rgba(255,0,0,0.2)]">
                                    Free Access
                                </div>
                            )}
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                            {lab.title}
                        </h3>

                        <p className="text-zinc-400 text-sm leading-relaxed mb-8 h-20">
                            {lab.description}
                        </p>

                        <div className="mt-auto">
                            {lab.status === "LOCKED" ? (
                                <Link
                                    href="/coming-soon"
                                    className="w-full py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-500 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all group/btn"
                                >
                                    <Lock className="w-3 h-3 group-hover/btn:text-white" />
                                    Coming Soon
                                </Link>
                            ) : (
                                <Link
                                    href="/coming-soon"
                                    className="w-full py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-500 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                                >
                                    Coming Soon
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
