"use client";

import React from 'react';
import { Zap } from 'lucide-react';

export default function Sidebar({ chapters, activeChapterId, onSelectChapter }) {
  return (
    <div className="w-[260px] bg-black/20 flex flex-col h-full shrink-0 border-r border-white/5 shadow-[5px_0_15px_rgba(0,0,0,0.2)] z-10">
      <div className="p-5 flex-1 overflow-y-auto custom-scrollbar">
        {Object.entries(
          chapters.reduce((acc, chapter) => {
            const group = chapter.group || "LEARN REACT";
            if (!acc[group]) acc[group] = [];
            acc[group].push(chapter);
            return acc;
          }, {})
        ).map(([groupName, groupChapters]) => (
          <div key={groupName} className="mb-8">
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-3 px-2 flex items-center gap-2">
              {groupName}
              <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent"></div>
            </div>
            <div className="flex flex-col gap-1">
              {groupChapters.map((chapter, index) => {
                const isActive = chapter.id === activeChapterId;
                return (
                  <button
                    key={chapter.id}
                    onClick={() => onSelectChapter(chapter.id)}
                    className={`group relative flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-orange-500/20 to-transparent text-orange-400 shadow-[inset_2px_0_0_#ff8c00]' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5 hover:translate-x-1'
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center w-6 h-6 rounded border transition-all duration-300 ${
                        isActive 
                          ? 'border-orange-500/50 bg-orange-500/20 text-orange-400 shadow-[0_0_10px_rgba(255,140,0,0.3)]' 
                          : 'border-white/10 bg-black/40 text-gray-500 group-hover:border-white/30 group-hover:text-gray-300'
                      } text-[11px] font-bold`}
                    >
                      {index + 1}
                    </div>
                    <span className={`text-[13px] leading-tight flex-1 ${isActive ? 'font-bold' : 'font-medium'}`}>
                      {chapter.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-white/5 flex flex-col gap-3 bg-black/40 backdrop-blur-md">
        <button className="relative overflow-hidden group flex items-center justify-center gap-2 w-full py-2.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-lg transition-all hover:bg-rose-500/20 hover:border-rose-500/40 text-sm font-bold shadow-[0_0_15px_rgba(244,63,94,0.1)] hover:shadow-[0_0_20px_rgba(244,63,94,0.2)]">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/0 via-rose-500/10 to-rose-500/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          <Zap size={16} className="group-hover:scale-110 transition-transform" />
          Mock Interview
        </button>
        <button className="text-gray-500 hover:text-gray-300 transition-colors text-xs font-medium text-left pl-1 flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Curriculum
        </button>
      </div>
    </div>
  );
}
