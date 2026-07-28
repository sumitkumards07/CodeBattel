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
        <div className="h-screen bg-[#050505] text-white flex flex-col font-mono overflow-hidden pt-24">

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
