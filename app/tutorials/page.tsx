"use client";

import { Share2, MessageSquare, Edit2, Zap, ArrowRight, User, CheckCircle2, Lock, Unlock, Terminal, ShieldAlert, Cpu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { curriculum } from "./curriculum";

export default function TutorialsPage() {
    const [mounted, setMounted] = useState(false);
    const [activePhaseId, setActivePhaseId] = useState(curriculum[0].id);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const activePhase = curriculum.find(p => p.id === activePhaseId) || curriculum[0];

    return (
        <div className="min-h-screen bg-black text-white relative flex flex-col font-mono" style={{ fontFamily: "var(--font-mono), monospace" }}>

            <div className="flex flex-1 max-w-[1600px] w-full mx-auto px-4 gap-8 pt-24 pb-12">

                {/* LEFT SIDEBAR: CAMPAIGN PHASES */}
                <aside className="w-[260px] hidden lg:flex flex-col border-r border-[#1a1a1a] pr-6 relative shrink-0">
                    <div className="absolute inset-0 bg-[#050505] z-0"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] bg-[size:16px_16px] opacity-30 z-0"></div>

                    <div className="relative z-10">
                        <div className="mb-8">
                            <h3 className="text-[10px] text-zinc-500 font-bold tracking-[0.2em] mb-4">TACTICAL_MAP : PHASES</h3>
                            <ul className="flex flex-col space-y-2">
                                {curriculum.map((phase, idx) => {
                                    const isActive = phase.id === activePhaseId;
                                    return (
                                        <li key={phase.id} className="relative group">
                                            {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[70%] bg-[#ff2a2a]"></div>}
                                            <button
                                                onClick={() => !phase.isLocked && setActivePhaseId(phase.id)}
                                                disabled={phase.isLocked}
                                                className={`flex items-center justify-between py-3 px-3 w-full text-left transition-colors border max-w-full ${isActive
                                                        ? "bg-white/[0.04] border-[#333] pl-4"
                                                        : phase.isLocked
                                                            ? "opacity-50 cursor-not-allowed border-transparent"
                                                            : "hover:bg-white/[0.02] border-transparent cursor-pointer"
                                                    }`}
                                            >
                                                <div className="flex flex-col gap-1 overflow-hidden pr-2">
                                                    <span className={`text-[13px] truncate ${isActive ? 'text-white font-bold' : 'text-zinc-400 font-medium'}`}>
                                                        {phase.title.split(":")[0]}
                                                    </span>
                                                    <span className={`text-[9px] truncate tracking-widest uppercase ${isActive ? 'text-[#ff2a2a]' : 'text-zinc-600'}`}>
                                                        {phase.language}
                                                    </span>
                                                </div>
                                                {phase.isLocked ? (
                                                    <Lock className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                                                ) : (
                                                    <Unlock className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#ff2a2a]' : 'text-zinc-500'}`} />
                                                )}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* Active Progress */}
                        <div className="mt-8 border border-[#1a1a1a] bg-black p-5 rounded-sm relative">
                            <div className="text-[9px] text-[#ff2a2a] font-bold tracking-widest mb-2 uppercase">CURRENT DEPLOYMENT</div>
                            <div className="text-white font-bold text-[14px] mb-5 tracking-tight leading-snug">{activePhase.title}</div>

                            {/* Progress bar simulation */}
                            <div className="w-full bg-[#1a1a1a] h-1 mb-5 flex">
                                <div className="w-[10%] bg-[#ff2a2a] h-full shadow-[0_0_10px_rgba(255,42,42,0.5)]"></div>
                            </div>

                            <button className="w-full bg-[#ff2a2a] hover:bg-[#e02020] text-black text-[10px] font-bold uppercase tracking-[0.2em] py-3 transition-colors">
                                RESUME BATTLE
                            </button>
                        </div>
                    </div>
                </aside>

                {/* MAIN CONTENT: PHASE DETAILS & MISSIONS */}
                <main className="flex-1 px-4 lg:px-8 max-w-[850px] pb-20 mt-2 relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <span className={`border text-[10px] font-bold px-2 py-1 tracking-widest ${activePhase.languageBadgeColor}`}>
                            {activePhase.language}
                        </span>
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                            STATUS: {activePhase.isLocked ? "ENCRYPTED" : "UNLOCKED"}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-[52px] font-bold mb-6 text-white tracking-widest leading-[1.1] uppercase" style={{ fontFamily: "var(--font-vt323), monospace" }}>
                        {activePhase.title.split(":")[1] || activePhase.title}
                    </h1>

                    <p className="text-[#a1a1aa] text-[16px] leading-[1.8] mb-12 font-sans max-w-3xl">
                        {activePhase.description}
                    </p>

                    <div className="w-full h-px bg-[#1a1a1a] mb-12 relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-[#ff2a2a]"></div>
                    </div>

                    {/* MISSIONS TIMELINE */}
                    <h3 className="text-[13px] text-white font-bold tracking-[0.2em] mb-8 uppercase flex items-center gap-3">
                        <Terminal className="w-4 h-4 text-[#ff2a2a]" />
                        AVAILABLE MISSIONS ({activePhase.missions.length})
                    </h3>

                    {activePhase.missions.length === 0 ? (
                        <div className="border border-dashed border-[#333] p-12 flex flex-col items-center justify-center text-center bg-white/[0.01]">
                            <Lock className="w-8 h-8 text-zinc-600 mb-4" />
                            <h4 className="text-zinc-400 font-bold mb-2">RESTRICTED INTEL</h4>
                            <p className="text-zinc-600 text-sm">Clear previous phases to decrypt these mission objectives.</p>
                        </div>
                    ) : (
                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[19px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#1a1a1a] before:to-transparent">
                            {activePhase.missions.map((mission, idx) => {
                                const isBoss = mission.type === "boss";
                                return (
                                    <div key={mission.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group select-none">

                                        {/* Timeline Dot */}
                                        <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-black bg-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_1px_#1a1a1a] z-10 transition-colors ${isBoss ? 'shadow-[0_0_0_1px_#ff2a2a] bg-[#2a0000]' : 'group-hover:shadow-[0_0_0_1px_#ff2a2a]'}`}>
                                            {isBoss ? (
                                                <ShieldAlert className="w-4 h-4 text-[#ff2a2a]" />
                                            ) : (
                                                <Cpu className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                                            )}
                                        </div>

                                        {/* Card */}
                                        <Link href={`/campaign/${activePhase.language.toLowerCase()}/${mission.id}`} className={`w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-5 border transition-all duration-300 hover:-translate-y-1 block ${isBoss
                                                ? "border-[#ff2a2a]/40 bg-[#1a0505] shadow-[0_4px_20px_rgba(255,42,42,0.1)] hover:border-[#ff2a2a] hover:shadow-[0_4px_30px_rgba(255,42,42,0.2)]"
                                                : "border-[#1a1a1a] bg-[#050505] hover:border-[#333] hover:bg-[#0a0a0a]"
                                            }`}>
                                            <div className="flex justify-between items-start mb-3 gap-2">
                                                <span className={`text-[10px] font-bold tracking-widest uppercase ${isBoss ? 'text-[#ff2a2a]' : 'text-zinc-500'}`}>
                                                    {isBoss ? 'BOSS PROTOCOL' : `MISSION ${String(idx + 1).padStart(2, '0')}`}
                                                </span>
                                                <span className="flex items-center gap-1 text-[10px] text-zinc-400 border border-[#1a1a1a] px-1.5 py-0.5 bg-black shrink-0">
                                                    <Zap className={`w-3 h-3 ${isBoss ? 'text-[#ff2a2a] fill-[#ff2a2a]' : 'text-yellow-500 fill-yellow-500'}`} />
                                                    {mission.xp} XP
                                                </span>
                                            </div>

                                            <h4 className={`font-bold mb-3 ${isBoss ? 'text-[#ff2a2a] text-lg' : 'text-white text-base'}`}>
                                                {mission.title}
                                            </h4>

                                            <p className="text-zinc-400 text-[13px] leading-relaxed mb-4 line-clamp-2 font-sans">
                                                {mission.objective}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {mission.skills.slice(0, 3).map(skill => (
                                                    <span key={skill} className="text-[9px] text-zinc-500 border border-zinc-800 px-1.5 py-0.5 uppercase tracking-wider">
                                                        {skill}
                                                    </span>
                                                ))}
                                                {mission.skills.length > 3 && (
                                                    <span className="text-[9px] text-zinc-600 border border-transparent px-1.5 py-0.5">
                                                        +{mission.skills.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </main>

                {/* RIGHT SIDEBAR: COMMUNITY & INTEL */}
                <aside className="w-[300px] hidden xl:flex flex-col border-l border-[#1a1a1a] pl-6 relative shrink-0">
                    <div className="absolute inset-0 bg-[#050505] z-0"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] bg-[size:16px_16px] opacity-30 z-0"></div>

                    <div className="relative z-10 pt-2">
                        {/* Upcoming Battles */}
                        <div className="mb-14">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-[11px] text-white font-bold tracking-[0.2em]">UPCOMING_BATTLES</h3>
                                <ArrowRight className="w-3.5 h-3.5 text-[#ff2a2a]" />
                            </div>

                            <div className="space-y-4">
                                {/* Battle Card 1 */}
                                <div className="border border-[#1a1a1a] bg-[#0a0a0a] p-5 group hover:border-[#333] transition-colors cursor-pointer relative">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-[10px] text-zinc-500 font-mono">21 FEB 2026</span>
                                        <div className="flex gap-[1px] text-[9px] text-[#ff2a2a]">
                                            <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-zinc-700">★</span>
                                        </div>
                                    </div>
                                    <h4 className="text-white text-[15px] font-bold mb-4 group-hover:text-[#ff2a2a] transition-colors font-sans tracking-tight">System Design Training</h4>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse shadow-[0_0_8px_#00ff9d]"></div>
                                        <span className="text-[9px] text-[#00ff9d] font-bold tracking-widest uppercase">Live Now</span>
                                    </div>
                                </div>

                                {/* Battle Card 2 */}
                                <div className="border border-[#1a1a1a] bg-[#0a0a0a] p-5 group hover:border-[#333] transition-colors cursor-pointer relative">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-[10px] text-zinc-500 font-mono">24 FEB 2026</span>
                                        <div className="flex gap-[1px] text-[9px] text-[#ff2a2a]">
                                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                        </div>
                                    </div>
                                    <h4 className="text-white text-[15px] font-bold mb-4 group-hover:text-[#ff2a2a] transition-colors font-sans tracking-tight">MERN Full Stack Dev</h4>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[9px] text-zinc-500 font-bold tracking-widest uppercase">Registration Open</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trending Intel */}
                        <div>
                            <h3 className="text-[11px] text-white font-bold tracking-[0.2em] mb-6">TRENDING_INTEL</h3>

                            <div className="space-y-6 mb-10">
                                {/* Intel 1 */}
                                <div className="flex gap-3">
                                    <div className="relative shrink-0">
                                        <div className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center border-2 border-[#00ff9d]">
                                            <User className="w-4 h-4 text-zinc-500" />
                                        </div>
                                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#ff2a2a] border-2 border-black"></div>
                                    </div>
                                    <div className="pt-0.5">
                                        <div className="flex items-center gap-1.5 mb-1">
                                            <span className="text-[13px] font-bold text-white font-sans tracking-tight">Harini R K</span>
                                            <span className="text-[10px] text-[#ff2a2a] font-mono">@h_code</span>
                                        </div>
                                        <p className="text-[11px] text-zinc-400 font-sans leading-relaxed line-clamp-2">
                                            First computer bug was an actual bug. In 1947, engineers found a moth...
                                        </p>
                                    </div>
                                </div>

                                {/* Intel 2 */}
                                <div className="flex gap-3">
                                    <div className="relative shrink-0">
                                        <div className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center">
                                            <User className="w-4 h-4 text-zinc-500" />
                                        </div>
                                    </div>
                                    <div className="pt-0.5">
                                        <div className="flex items-center gap-1.5 mb-1">
                                            <span className="text-[13px] font-bold text-white font-sans tracking-tight">Arpita Jain</span>
                                            <span className="text-[10px] text-zinc-500 font-mono">@arpita_j</span>
                                        </div>
                                        <p className="text-[11px] text-zinc-400 font-sans leading-relaxed line-clamp-2">
                                            The 2038 Problem: Another Time Bug. We're Slowly Walking Towards...
                                        </p>
                                    </div>
                                </div>

                                {/* Intel 3 */}
                                <div className="flex gap-3">
                                    <div className="relative shrink-0">
                                        <div className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center">
                                            <User className="w-4 h-4 text-zinc-500" />
                                        </div>
                                    </div>
                                    <div className="pt-0.5">
                                        <div className="flex items-center gap-1.5 mb-1">
                                            <span className="text-[13px] font-bold text-white font-sans tracking-tight">Potta Lokesh</span>
                                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                                        </div>
                                        <p className="text-[11px] text-zinc-400 font-sans leading-relaxed line-clamp-2">
                                            Company: Goldman Sachs (org: GBM) YOE: ~2 Role: Software Associate...
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full border border-[#222] bg-[#050505] hover:bg-[#111] text-zinc-400 hover:text-white text-[10px] font-bold uppercase tracking-[0.2em] py-3.5 transition-colors">
                                LOAD MORE INTEL
                            </button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
