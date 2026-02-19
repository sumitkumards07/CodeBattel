"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Trophy, Zap, Shield } from "lucide-react";

interface BattleLayoutProps {
    leftPanel: React.ReactNode;
    centerPanel: React.ReactNode;
    rightPanel: React.ReactNode;
}

export default function BattleLayout({ leftPanel, centerPanel, rightPanel }: BattleLayoutProps) {
    return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col font-mono overflow-hidden">

            {/* Top Bar */}
            <header className="h-14 border-b border-white/10 flex items-center justify-between px-4 bg-[#080808] z-50">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="sr-only">Back</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-red-500/10 border border-red-500/50 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-red-500" />
                        </div>
                        <span className="font-['VT323'] text-2xl uppercase tracking-wider text-white">
                            Mission Control
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        <span className="font-['VT323'] text-xl text-yellow-500">Rank: 001</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-blue-500" />
                        <span className="font-['VT323'] text-xl text-blue-500">Streak: 7</span>
                    </div>
                </div>
            </header>

            {/* Main Grid */}
            <main className="flex-1 grid grid-cols-12 min-h-0">
                {/* Left Panel (Mission) */}
                <div className="col-span-3 border-r border-white/10 bg-[#080808] overflow-y-auto">
                    {leftPanel}
                </div>

                {/* Center Panel (Editor) */}
                <div className="col-span-6 bg-[#050505] flex flex-col relative border-r border-white/10">
                    {centerPanel}
                </div>

                {/* Right Panel (Console) */}
                <div className="col-span-3 bg-[#080808] flex flex-col overflow-hidden">
                    {rightPanel}
                </div>
            </main>
        </div>
    );
}
