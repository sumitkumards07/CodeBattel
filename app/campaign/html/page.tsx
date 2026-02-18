"use client";

import React from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import { Terminal, Lock, Play, Star, CheckCircle2 } from "lucide-react";

const PHASES = [
    {
        id: 1,
        title: "The Recruit",
        subtitle: "Structure & Text",
        description: "Master the skeleton of the web. No CSS yet—just pure, semantic structure.",
        missions: [
            { id: "1", title: "Mission 1: The 'Wanted' Poster", status: "unlocked" },
            { id: "2", title: "Mission 2: The Secret Letter", status: "locked" },
        ],
        battles: ["Battle 1: Semantics Quiz"],
        progress: 0
    },
    {
        id: 2,
        title: "The Scout",
        subtitle: "Links & Media",
        description: "Connecting the world. Images, hyperlinks, and file paths.",
        missions: [],
        battles: [],
        progress: 0,
        locked: true
    }
];

export default function HTMLCampaignDashboard() {
    return (
        <div className="flex h-screen overflow-hidden bg-background-dark text-slate-100 font-display">
            <Sidebar />

            <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
                <div className="p-8 pb-20 pt-20 max-w-5xl mx-auto w-full">
                    <header className="mb-10">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="h-px w-8 bg-primary"></div>
                            <span className="text-primary font-mono text-xs uppercase tracking-widest">Campaign Mode</span>
                        </div>
                        <h1 className="text-4xl font-black dot-matrix-text text-white mb-4">HTML PROTOCOL</h1>
                        <p className="text-zinc-400 max-w-2xl text-lg">
                            Complete missions to rise from Recruit to Legend. Your objective is clear: Master the structural language of the web.
                        </p>
                    </header>

                    <div className="space-y-12">
                        {PHASES.map((phase) => (
                            <div key={phase.id} className={`relative ${phase.locked ? 'opacity-50 grayscale pointer-events-none' : ''}`}>
                                {/* Connecting Line */}
                                <div className="absolute left-6 top-16 bottom-[-4rem] w-0.5 bg-zinc-800 -z-10"></div>

                                <div className="flex items-start gap-6">
                                    <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 bg-background-dark ${phase.locked ? 'border-zinc-700 text-zinc-700' : 'border-primary text-primary shadow-red-glow'}`}>
                                        {phase.locked ? <Lock className="w-5 h-5" /> : <Terminal className="w-5 h-5" />}
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-baseline justify-between mb-2">
                                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                                Phase {phase.id}: {phase.title}
                                                <span className="text-xs font-mono text-zinc-500 font-normal px-2 py-1 rounded border border-white/10 uppercase">{phase.subtitle}</span>
                                            </h2>
                                            <span className="text-zinc-500 font-mono text-xs">{phase.progress}% Complete</span>
                                        </div>
                                        <p className="text-zinc-400 mb-6 text-sm">{phase.description}</p>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            {phase.missions.map((mission) => (
                                                <Link
                                                    key={mission.id}
                                                    href={`/campaign/html/mission/${mission.id}`}
                                                    className={`p-4 rounded-lg border flex items-center justify-between group transition-all duration-300 ${mission.status === 'locked' ? 'border-zinc-800 bg-zinc-900/50 cursor-not-allowed' : 'border-zinc-700 bg-zinc-900 hover:border-primary/50 hover:bg-zinc-800'}`}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className={`w-8 h-8 rounded flex items-center justify-center ${mission.status === 'locked' ? 'bg-zinc-800' : 'bg-primary/10 text-primary'}`}>
                                                            {mission.status === 'locked' ? <Lock className="w-4 h-4 text-zinc-600" /> : <Play className="w-4 h-4 fill-current" />}
                                                        </div>
                                                        <div>
                                                            <h3 className={`font-bold text-sm ${mission.status === 'locked' ? 'text-zinc-600' : 'text-white'}`}>{mission.title}</h3>
                                                            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">100 XP REWARD</span>
                                                        </div>
                                                    </div>
                                                    {mission.status !== 'locked' && (
                                                        <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-300">
                                                            Start
                                                        </div>
                                                    )}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
