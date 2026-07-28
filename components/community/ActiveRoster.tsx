"use client";

import React from 'react';
import { User } from 'lucide-react';

const COMMANDERS = [
    { name: "Cmdr_Shepard", status: "Playing VS Code", online: true },
    { name: "CyberPunk_22", status: "Compiling...", online: true },
    { name: "System_Admin", status: "BOT", online: true, isBot: true },
];

const RECRUITS = [
    { name: "NullPointer", online: true },
    { name: "StackOverflowed", online: true },
    { name: "BitMask_7", online: true },
];

export default function ActiveRoster() {
  return (
    <div className="w-[240px] hidden xl:flex flex-col bg-[#2B2D31] shrink-0 overflow-y-auto py-6 px-4 z-10">
      <h3 className="text-[11px] text-gray-400 font-bold tracking-[0.05em] uppercase mb-4">Active Roster</h3>

      {/* Commanders */}
      <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">Commanders</span>
              <span className="text-[10px] text-zinc-600">{COMMANDERS.length}</span>
          </div>
          <div className="space-y-3">
              {COMMANDERS.map((c) => (
                  <div
                      key={c.name}
                      className="flex items-center gap-3 hover:bg-white/5 px-2 py-1.5 rounded transition-colors cursor-pointer group"
                  >
                      <div className="relative shrink-0">
                          <div className="w-8 h-8 rounded-full bg-[#1E1F22] flex items-center justify-center">
                              <User className="w-4 h-4 text-gray-400" />
                          </div>
                          <div className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-[3px] border-[#2B2D31] ${c.online ? "bg-emerald-500" : "bg-gray-500"}`}></div>
                      </div>
                      <div className="min-w-0">
                          <div className="text-[15px] font-medium text-gray-300 group-hover:text-gray-100 truncate">{c.name}</div>
                          <div className={`text-[12px] truncate ${c.isBot ? "text-indigo-400 font-medium" : "text-gray-400"}`}>
                              {c.status}
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* Recruits */}
      <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">Recruits</span>
              <span className="text-[10px] text-zinc-600">{RECRUITS.length}</span>
          </div>
          <div className="space-y-3">
              {RECRUITS.map((r) => (
                  <div
                      key={r.name}
                      className="flex items-center gap-3 hover:bg-white/5 px-2 py-1.5 rounded transition-colors cursor-pointer group"
                  >
                      <div className="relative shrink-0">
                          <div className="w-8 h-8 rounded-full bg-[#1E1F22] flex items-center justify-center">
                              <User className="w-4 h-4 text-gray-400" />
                          </div>
                          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-[3px] border-[#2B2D31] bg-emerald-500"></div>
                      </div>
                      <div className="text-[15px] font-medium text-gray-400 group-hover:text-gray-200 truncate">{r.name}</div>
                  </div>
              ))}
          </div>
      </div>

      {/* System Status */}
      <div className="pt-4 mt-auto">
          <h3 className="text-[11px] text-gray-400 font-bold tracking-[0.05em] uppercase mb-3">System Status</h3>
          <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
              <span className="text-[13px] font-medium text-gray-300">All Systems Operational</span>
          </div>
      </div>
    </div>
  );
}
