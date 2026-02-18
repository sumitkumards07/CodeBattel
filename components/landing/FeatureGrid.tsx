"use client";

import React from "react";
import { Code, Star, Heart } from "lucide-react";

export default function FeatureGrid() {
    const features = [
        { icon: Code, label: "Write Code" },
        { icon: Star, label: "Earn XP" },
        { icon: Heart, label: "Get Feedback" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 w-full">
            {features.map((item, idx) => (
                <div
                    key={idx}
                    className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center gap-3 text-center transition-all duration-300 hover:-translate-y-1 group border border-white/5 hover:border-primary/30"
                >
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                        <item.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                    </div>
                    <span className="dot-matrix-text text-sm text-white mt-1">{item.label}</span>
                </div>
            ))}
        </div>
    );
}
