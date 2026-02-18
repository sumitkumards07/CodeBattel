"use client";

import React from "react";
import { Code, Trophy, BookOpen, Zap } from "lucide-react";
import { motion } from "framer-motion";

const CARDS = [
    {
        id: 1,
        label: "Write Code",
        icon: Code,
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "border-blue-400/30",
        glow: "shadow-[0_0_30px_rgba(96,165,250,0.3)]",
        rotate: -12,
        x: -140,
        y: 0,
        delay: 0
    },
    {
        id: 2,
        label: "Earn XP",
        icon: Trophy,
        color: "text-yellow-400",
        bg: "bg-yellow-400/10",
        border: "border-yellow-400/30",
        glow: "shadow-[0_0_30px_rgba(250,204,21,0.3)]",
        rotate: 12,
        x: 140,
        y: -40,
        delay: 0.2
    },
    {
        id: 3,
        label: "Level Up",
        icon: Zap,
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        border: "border-purple-400/30",
        glow: "shadow-[0_0_30px_rgba(192,132,252,0.3)]",
        rotate: -3,
        x: 0,
        y: 80,
        delay: 0.4
    }
];

export default function FloatingCards() {
    return (
        <div className="lg:col-span-5 relative h-[500px] flex items-center justify-center perspective-1000 hidden lg:flex">
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

                {CARDS.map((card) => (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, x: card.x, y: card.y + 50, rotate: card.rotate }}
                        animate={{ opacity: 1, x: card.x, y: card.y, rotate: card.rotate }}
                        transition={{ delay: card.delay, duration: 0.8, type: "spring" }}
                        className={`absolute cursor-pointer group`}
                        style={{ zIndex: 10 }}
                    >
                        <div
                            className={`
                relative w-48 h-64 
                ${card.bg} backdrop-blur-xl 
                border ${card.border} 
                rounded-2xl p-6 
                flex flex-col items-center justify-center gap-4
                transition-all duration-500
                group-hover:scale-110 group-hover:rotate-0 group-hover:z-50
                group-hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]
                group-hover:-translate-y-4
                ${card.glow}
              `}
                        >
                            <div className={`w-16 h-16 rounded-full ${card.bg} flex items-center justify-center border ${card.border} group-hover:scale-110 transition-transform duration-300`}>
                                <card.icon className={`w-8 h-8 ${card.color}`} />
                            </div>

                            <div className="text-center">
                                <h3 className="text-white font-bold text-lg dot-matrix-text uppercase tracking-wider mb-2">{card.label}</h3>
                                <div className="h-1 w-8 bg-white/20 mx-auto rounded-full group-hover:w-16 group-hover:bg-primary transition-all duration-300"></div>
                            </div>

                            {/* Shine Effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
