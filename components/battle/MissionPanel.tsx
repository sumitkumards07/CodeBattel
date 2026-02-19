"use client";

import React from "react";
import { Terminal, Star, AlertCircle } from "lucide-react";

export default function MissionPanel() {
    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-[#0A0A0A]">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Mission ID: #8492</span>
                    <span className="px-2 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-[10px] uppercase font-bold tracking-wider">
                        Hard Difficulty
                    </span>
                </div>
                <h1 className="font-['VT323'] text-3xl text-white uppercase leading-none mb-2 text-shadow-red">
                    Neural Network Breach
                </h1>
                <div className="flex items-center gap-2 text-zinc-400 text-xs">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span>500 XP Reward</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto flex-1 text-sm text-zinc-300 space-y-6 font-mono leading-relaxed">
                <div className="p-4 border border-red-500/20 bg-red-500/5 relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50"></div>
                    <h3 className="flex items-center gap-2 text-red-400 font-bold uppercase text-xs mb-2">
                        <AlertCircle className="w-3 h-3" />
                        Objective
                    </h3>
                    <p>
                        Infiltrate the core server by identifying the optimal path through the node network.
                    </p>
                </div>

                <div>
                    <h3 className="font-['VT323'] text-xl text-white uppercase mb-3 border-b border-white/10 pb-1">
                        Mission Brief
                    </h3>
                    <p>
                        Write a function <code>findOptimalPath(nodes, start, end)</code> that returns the shortest path between two nodes in a weighted graph.
                    </p>
                    <p className="mt-4">
                        The network is represented as an adjacency matrix where <code>0</code> indicates no connection.
                    </p>
                </div>

                <div>
                    <h3 className="font-['VT323'] text-xl text-white uppercase mb-3 border-b border-white/10 pb-1">
                        Input Data
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-zinc-400 ml-2">
                        <li><code>nodes</code>: Array of strings (Node IDs)</li>
                        <li><code>start</code>: String (Start Node ID)</li>
                        <li><code>end</code>: String (Target Node ID)</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-['VT323'] text-xl text-white uppercase mb-3 border-b border-white/10 pb-1">
                        Output Data
                    </h3>
                    <p>
                        Return an array of strings representing the path. If no path exists, return <code>null</code>.
                    </p>
                </div>
            </div>
        </div>
    );
}
