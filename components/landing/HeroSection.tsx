"use client";

import React from "react";
import { ArrowRight, GraduationCap, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <div className="lg:col-span-7 flex flex-col gap-10 lg:pr-12 relative z-20">
            {/* Badge */}
            <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8 bg-primary"></div>
                <span className="text-white font-semibold dot-matrix-text text-xs tracking-[0.2em] uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                    Season 04 // RED_SHIFT
                </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] dot-matrix-text">
                <span className="block text-white">CODE IS</span>
                <motion.span
                    className="block text-primary drop-shadow-[0_0_25px_rgba(255,0,0,0.4)] mt-2"
                    animate={{ opacity: [0.9, 1, 0.9] }}
                    transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse" }}
                >
                    WARFARE
                </motion.span>
            </h1>

            {/* Subtitle */}
            <p className="nothing-ui-text text-zinc-300 text-lg leading-relaxed max-w-md font-normal border-l border-zinc-700 pl-6">
                From Recruit to Commander. Master the craft of code through tactical challenges.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
                <button
                    onClick={() => alert("Recruitment Protocol Initiated")}
                    className="group relative px-10 py-4 bg-black rounded-full text-white font-bold tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 shadow-red-glow border border-primary/50 hover:border-primary"
                >
                    <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10 flex items-center gap-3 nothing-ui-text text-sm uppercase tracking-widest">
                        Join Battle
                        <ArrowRight className="text-primary group-hover:translate-x-1 transition-transform w-5 h-5" />
                    </span>
                </button>
                <button className="group relative px-8 py-4 bg-transparent rounded-full text-zinc-300 font-bold tracking-wide overflow-hidden transition-all duration-300 hover:text-white border border-white/20 hover:border-white/50 hover:bg-white/5">
                    <span className="relative z-10 flex items-center gap-2 nothing-ui-text text-sm uppercase tracking-widest">
                        Enter Bootcamp
                        <GraduationCap className="text-zinc-500 group-hover:text-white transition-colors w-5 h-5" />
                    </span>
                </button>
            </div>
        </div>
    );
}
