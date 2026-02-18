"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import HTMLEditor from "@/components/HTMLEditor";
import LivePreview from "@/components/LivePreview";
import { Play, AlertTriangle, Lightbulb, CheckCircle2, Circle } from "lucide-react";

// Mock Data for Missions (In real app, fetch from DB)
const CAMPAIGN_MISSIONS = {
    "1": {
        id: "1",
        title: "Mission 1: The 'Wanted' Poster",
        phase: "Phase 1: The Recruit",
        description: "The local sheriff needs a digital 'Wanted' poster for a bandit. It must use a big header for the name, a bold paragraph for the crime, and an unordered list for the bandit's known locations.",
        initialCode: "<!-- Write your HTML code here -->\n\n",
        validation: (code: string) => {
            const issues = [];
            if (!/<h[1-6]>/.test(code)) issues.push("Missing a header tag (<h1>...<h6>)");
            if (!/<p>/.test(code)) issues.push("Missing a paragraph tag (<p>)");
            if (!/<ul>/.test(code) || !/<li>/.test(code)) issues.push("Missing an unordered list (<ul> with <li>)");
            if (!/<b>/.test(code) && !/<strong>/.test(code)) issues.push("Missing bold text (<b> or <strong>)");
            return issues;
        }
    },
    "2": {
        id: "2",
        title: "Mission 2: The Secret Letter",
        phase: "Phase 1: The Recruit",
        description: "Write a letter to the General. Use `<sub>` and `<sup>` for secret chemical formulas (e.g., H20), and use `<br>` to break lines like a poem. Use `<hr>` to separate the signature.",
        initialCode: "<!-- Write your HTML code here -->\n<p>Dear General,</p>\n",
        validation: (code: string) => {
            const issues = [];
            if (!/<br\s*\/?>/.test(code)) issues.push("Missing line break (<br>)");
            if (!/<hr\s*\/?>/.test(code)) issues.push("Missing horizontal rule (<hr>)");
            if (!/<sub>/.test(code)) issues.push("Missing subscript (<sub>)");
            if (!/<sup>/.test(code)) issues.push("Missing superscript (<sup>)");
            return issues;
        }
    }
};

export default function MissionPage() {
    const params = useParams();
    const missionId = params?.id as string;
    const mission = CAMPAIGN_MISSIONS[missionId as keyof typeof CAMPAIGN_MISSIONS];

    const [code, setCode] = useState(mission?.initialCode || "");
    const [outputCode, setOutputCode] = useState(mission?.initialCode || "");
    const [issues, setIssues] = useState<string[]>([]);
    const [status, setStatus] = useState<"idle" | "success" | "failure">("idle");

    useEffect(() => {
        if (mission) {
            setCode(mission.initialCode);
            setOutputCode(mission.initialCode);
        }
    }, [mission]);

    // Update preview live (or debounce it)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setOutputCode(code);
        }, 500);
        return () => clearTimeout(timeout);
    }, [code]);

    if (!mission) {
        return <div className="text-white p-10">Mission not found.</div>;
    }

    const handleValidation = () => {
        const validationIssues = mission.validation(code);
        setIssues(validationIssues);
        if (validationIssues.length === 0) {
            setStatus("success");
        } else {
            setStatus("failure");
        }
    };

    return (
        <div className="flex h-screen overflow-hidden bg-background-dark text-slate-100 font-display">
            <Sidebar />

            <main className="flex-1 flex flex-col min-w-0">
                {/* Top Panel: Mission Briefing */}
                <div className="h-1/3 min-h-[200px] border-b border-white/10 bg-background-dark/90 flex flex-col relative z-20">
                    <div className="flex items-center border-b border-white/5 bg-zinc-900/50">
                        <div className="px-6 py-3 border-r border-red-900/30 text-xs font-mono uppercase text-white font-bold bg-white/5 border-t-2 border-t-primary shadow-[inset_0_10px_20px_rgba(255,0,0,0.05)]">
                            {mission.phase}
                        </div>
                        <div className="px-6 py-3 border-r border-white/5 text-xs font-mono uppercase text-zinc-500 hover:text-zinc-300 cursor-pointer transition-colors">
                            Hints (3)
                        </div>
                    </div>
                    <div className="flex-1 p-6 overflow-y-auto flex gap-8">
                        <div className="flex-1 max-w-2xl">
                            <div className="flex items-center gap-3 mb-2">
                                <AlertTriangle className="text-primary w-5 h-5" />
                                <h2 className="text-lg text-white font-bold">{mission.title}</h2>
                            </div>
                            <p className="text-zinc-400 font-mono text-sm leading-relaxed mb-4">
                                {mission.description}
                            </p>

                            <div className="flex gap-4">
                                <button
                                    onClick={handleValidation}
                                    className="flex items-center gap-2 px-6 py-2 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-red-600 transition-colors shadow-red-glow"
                                >
                                    <Play className="w-4 h-4 fill-current" />
                                    Validate Mission
                                </button>
                            </div>

                            {/* Validation Result */}
                            {status !== "idle" && (
                                <div className={`mt-4 p-3 rounded border ${status === "success" ? "bg-green-500/10 border-green-500/30" : "bg-red-500/10 border-red-500/30"}`}>
                                    <h4 className={`text-xs font-bold uppercase mb-2 ${status === "success" ? "text-green-400" : "text-red-400"}`}>
                                        {status === "success" ? "MISSION ACCOMPLISHED" : "VALIDATION FAILED"}
                                    </h4>
                                    {status === "success" ? (
                                        <div className="text-green-300 text-sm flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4" />
                                            All objectives met. +100 XP
                                        </div>
                                    ) : (
                                        <ul className="text-red-300 text-sm list-disc list-inside">
                                            {issues.map((issue, i) => (
                                                <li key={i}>{issue}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="w-64 bg-zinc-900/50 p-4 rounded border border-white/5 hidden lg:block">
                            <h4 className="text-xs text-zinc-500 uppercase tracking-widest mb-3">Required Tags</h4>
                            <div className="flex flex-wrap gap-2">
                                {missionId === "1" ? (
                                    <>
                                        <code className="text-[10px] bg-white/10 px-2 py-1 rounded text-primary">&lt;h1&gt;</code>
                                        <code className="text-[10px] bg-white/10 px-2 py-1 rounded text-primary">&lt;p&gt;</code>
                                        <code className="text-[10px] bg-white/10 px-2 py-1 rounded text-primary">&lt;ul&gt;</code>
                                        <code className="text-[10px] bg-white/10 px-2 py-1 rounded text-primary">&lt;li&gt;</code>
                                    </>
                                ) : (
                                    <>
                                        <code className="text-[10px] bg-white/10 px-2 py-1 rounded text-primary">&lt;br&gt;</code>
                                        <code className="text-[10px] bg-white/10 px-2 py-1 rounded text-primary">&lt;hr&gt;</code>
                                        <code className="text-[10px] bg-white/10 px-2 py-1 rounded text-primary">&lt;sub&gt;</code>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Panel: Split View */}
                <div className="flex-1 flex min-h-0">
                    {/* Editor */}
                    <div className="w-1/2 bg-editor-bg relative flex flex-col border-r border-white/10">
                        <div className="flex justify-between items-center px-4 py-2 border-b border-white/5 bg-[#050505]">
                            <span className="dot-matrix-text text-xs text-zinc-500">HTML_SOURCE</span>
                        </div>
                        <div className="flex-1 relative overflow-hidden">
                            <HTMLEditor
                                value={code}
                                onChange={setCode}
                                className="h-full"
                            />
                        </div>
                    </div>

                    {/* Preview */}
                    <div className="w-1/2 bg-zinc-900 relative flex flex-col">
                        <div className="flex justify-between items-center px-4 py-2 border-b border-white/5 bg-zinc-950">
                            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">RENDER_OUTPUT</span>
                        </div>
                        <div className="flex-1 bg-white relative p-4 overflow-hidden">
                            <div className="absolute inset-0 bg-white">
                                <LivePreview htmlCode={outputCode} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
