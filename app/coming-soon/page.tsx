"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Construction, Clock, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function ComingSoonPage() {
    return (
        <div className="min-h-screen bg-background-dark flex flex-col items-center justify-center p-6 relative overflow-hidden">

            {/* Background Grid */}
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-2xl w-full text-center"
            >
                <div className="mb-8 flex justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.2)]">
                        <Construction className="w-10 h-10 text-primary animate-pulse" />
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white dot-matrix-text uppercase tracking-wider mb-6">
                    Under Construction
                </h1>

                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto">
                    This sector is currently being fortified. Our engineers are deploying the latest code updates. Check back soon for deployment.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                    <div className="glass-panel p-4 rounded-xl border border-white/5 flex flex-col items-center">
                        <Clock className="w-6 h-6 text-blue-400 mb-2" />
                        <span className="text-xs text-zinc-500 uppercase tracking-widest">ETA: Soon</span>
                    </div>
                    <div className="glass-panel p-4 rounded-xl border border-white/5 flex flex-col items-center">
                        <Rocket className="w-6 h-6 text-orange-400 mb-2" />
                        <span className="text-xs text-zinc-500 uppercase tracking-widest">Version 1.0</span>
                    </div>
                    <div className="glass-panel p-4 rounded-xl border border-white/5 flex flex-col items-center">
                        <Construction className="w-6 h-6 text-green-400 mb-2" />
                        <span className="text-xs text-zinc-500 uppercase tracking-widest">Building</span>
                    </div>
                </div>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all hover:scale-105"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Return to Base
                </Link>
            </motion.div>
        </div>
    );
}
