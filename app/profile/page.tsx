"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import { Terminal, Trophy, Flame, Target, Calendar } from "lucide-react";
import Sidebar from "@/components/Sidebar";

export default function ProfilePage() {
    const { user, isLoaded } = useUser();

    if (!isLoaded) {
        return <div className="text-white p-10">Loading profile data...</div>;
    }

    // Mock Data for Profile
    const stats = [
        { label: "Total XP", value: "12,450", icon: Trophy, color: "text-yellow-400", bg: "bg-yellow-400/10" },
        { label: "Current Streak", value: "7 Days", icon: Flame, color: "text-orange-400", bg: "bg-orange-400/10" },
        { label: "Missions Won", value: "14", icon: Target, color: "text-green-400", bg: "bg-green-400/10" },
        { label: "Days Active", value: "24", icon: Calendar, color: "text-blue-400", bg: "bg-blue-400/10" },
    ];

    const badges = [
        { name: "Code Recruit", icon: "🛡️", unlocked: true },
        { name: "HTML Architect", icon: "🏛️", unlocked: true },
        { name: "Bug Hunter", icon: "🐛", unlocked: true },
        { name: "Python Cobra", icon: "🐍", unlocked: false },
        { name: "CSS Wizard", icon: "🎨", unlocked: false },
    ];

    return (
        <div className="flex h-screen overflow-hidden bg-background-dark text-slate-100 font-display">
            <Sidebar />

            <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
                <div className="p-8 pb-20 max-w-5xl mx-auto w-full">

                    {/* Header */}
                    <header className="flex items-center gap-6 mb-12">
                        <div className="w-24 h-24 rounded-full border-2 border-primary p-1">
                            <img
                                src={user?.imageUrl}
                                alt={user?.fullName || "User"}
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div>
                            <h1 className="text-3xl font-black text-white dot-matrix-text uppercase mb-1">{user?.fullName}</h1>
                            <div className="flex items-center gap-3">
                                <span className="text-primary font-mono text-xs uppercase tracking-widest border border-primary/30 bg-primary/10 px-2 py-1 rounded">Rank: Corporal</span>
                                <span className="text-zinc-500 font-mono text-xs">Joined {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Recently'}</span>
                            </div>
                        </div>
                    </header>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="glass-panel p-6 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${stat.bg}`}>
                                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                                </div>
                                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-xs text-zinc-500 uppercase tracking-widest font-mono">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Activity Heatmap (Mock) */}
                        <div className="lg:col-span-2 glass-panel p-6 rounded-xl border border-white/5">
                            <h3 className="text-sm font-bold text-zinc-300 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <Terminal className="w-4 h-4 text-primary" />
                                Combat Activity
                            </h3>
                            <div className="flex flex-wrap gap-1">
                                {[...Array(60)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-4 h-4 rounded-sm ${Math.random() > 0.7 ? 'bg-primary/80' : Math.random() > 0.4 ? 'bg-primary/30' : 'bg-zinc-800'}`}
                                        title={`Day ${i + 1}`}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        {/* Badges */}
                        <div className="glass-panel p-6 rounded-xl border border-white/5">
                            <h3 className="text-sm font-bold text-zinc-300 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <Trophy className="w-4 h-4 text-yellow-500" />
                                Achievements
                            </h3>
                            <div className="grid grid-cols-3 gap-4">
                                {badges.map((badge, idx) => (
                                    <div key={idx} className={`flex flex-col items-center gap-2 ${badge.unlocked ? 'opacity-100' : 'opacity-30 grayscale'}`}>
                                        <div className="text-2xl bg-zinc-900 w-12 h-12 flex items-center justify-center rounded-full border border-white/10">
                                            {badge.icon}
                                        </div>
                                        <span className="text-[10px] text-zinc-400 text-center uppercase font-mono leading-tight">{badge.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
