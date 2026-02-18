"use client";

import React from "react";
import { Trophy, Zap, BookOpen, Activity } from "lucide-react";

const FEATURES = [
    {
        icon: Trophy,
        title: "Gamified Learning",
        description: "Earn XP, unlock achievements, and level up your skills with every challenge you complete.",
        color: "text-yellow-400",
        bg: "bg-yellow-400/10"
    },
    {
        icon: Zap,
        title: "Instant Validation",
        description: "Write code, run it instantly, and get real-time feedback with live previews.",
        color: "text-blue-400",
        bg: "bg-blue-400/10"
    },
    {
        icon: BookOpen,
        title: "Story-Driven Curriculum",
        description: "Learn through engaging narratives and real-world scenarios that make coding stick.",
        color: "text-green-400",
        bg: "bg-green-400/10"
    },
    {
        icon: Activity,
        title: "Track Your Progress",
        description: "Monitor your learning journey with detailed analytics and progress tracking.",
        color: "text-purple-400",
        bg: "bg-purple-400/10"
    }
];

export default function WhyCodeBattle() {
    return (
        <div className="w-full max-w-7xl mx-auto mt-32 relative z-20 px-6 lg:px-0">
            <div className="flex items-center gap-3 mb-12 justify-center">
                <div className="h-px w-12 bg-zinc-800"></div>
                <h2 className="text-2xl font-black dot-matrix-text text-white tracking-widest uppercase">Why CodeBattle?</h2>
                <div className="h-px w-12 bg-zinc-800"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {FEATURES.map((feature, idx) => (
                    <div
                        key={idx}
                        className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 group"
                    >
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform`}>
                            <feature.icon className="w-7 h-7" />
                        </div>

                        <h3 className="text-lg font-bold text-white mb-3">
                            {feature.title}
                        </h3>

                        <p className="text-zinc-400 text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
