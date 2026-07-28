"use client";

import React from 'react';
import { Coffee, Home } from 'lucide-react';
import Link from 'next/link';
import Logo from '../landing/Logo';

export default function TopNav({ activeChapter, onReset, onNext, onShowSolution, onToggleHint, showHint }) {
  return (
    <div className="h-14 bg-black/40 backdrop-blur-2xl border-b border-white/10 flex items-center justify-between px-6 shrink-0 relative z-20">
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2 pr-4 py-2 hover:opacity-80 transition-opacity group">
          <Logo className="w-6 h-6 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all" />
          <span className="dot-matrix-text text-[15px] font-black tracking-[0.15em] bg-gradient-to-r from-orange-400 to-rose-400 text-transparent bg-clip-text mt-0.5">CODEBATTLE</span>
        </Link>
        <div className="w-[1px] h-6 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-3"></div>
        <span className="text-orange/90 text-xs font-bold tracking-[0.2em] uppercase mt-0.5 drop-shadow-[0_0_5px_rgba(255,165,0,0.3)]">React Labs</span>
        
        <Link href="/" className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/5 hover:bg-white/15 hover:border-white/20 hover:scale-105 text-zinc-400 hover:text-white transition-all ml-6">
            <Home className="w-4 h-4" />
        </Link>
      </div>
      
      <div className="flex items-center gap-3 bg-black/30 px-4 py-1.5 rounded-full border border-white/5 shadow-inner">
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">CH {activeChapter?.id}</span>
        <div className="w-1 h-1 rounded-full bg-white/20"></div>
        <span className="text-gray-300 font-medium text-sm truncate max-w-[200px] sm:max-w-md">{activeChapter?.title}</span>
      </div>
      
      <div className="flex items-center gap-3">
        <button 
          onClick={onReset}
          className="px-4 py-1.5 text-xs font-semibold text-gray-400 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white hover:border-white/20 transition-all hover:-translate-y-0.5"
        >
          Reset
        </button>
        <button 
          onClick={onToggleHint}
          className={`px-4 py-1.5 text-xs font-semibold rounded-lg border transition-all hover:-translate-y-0.5 ${
            showHint 
              ? 'bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-500/50' 
              : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
          }`}
        >
          {showHint ? "Hide Hint" : "Hint"}
        </button>
        <button 
          onClick={onShowSolution}
          className="px-4 py-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-all hover:-translate-y-0.5"
        >
          Solution
        </button>
        <button 
          onClick={onNext}
          className="ml-2 px-6 py-1.5 text-sm font-bold text-black bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg hover:from-orange-300 hover:to-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.4)] hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] hover:-translate-y-0.5 transition-all"
        >
          Next 
        </button>
      </div>
    </div>
  );
}
