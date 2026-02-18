"use client";

import React, { useState, useEffect } from "react";

import HeroSection from "@/components/landing/HeroSection";
import FeatureGrid from "@/components/landing/FeatureGrid";
import PlatinumCore from "@/components/landing/PlatinumCore";
import StatusPanel from "@/components/landing/StatusPanel";

export default function Home() {
  // --- Simulation State ---
  // Mock data to make the page feel "alive"
  const [timeLeft, setTimeLeft] = useState(4 * 3600 + 22 * 60 + 10);
  const [playerCount, setPlayerCount] = useState(85291);

  useEffect(() => {
    // 1. Countdown Logic
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // 2. Mock Player Count Fluctuation
    const fluctuating = setInterval(() => {
      setPlayerCount((prev) => prev + Math.floor(Math.random() * 50) - 20);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(fluctuating);
    };
  }, []);

  // Helper: Format seconds into HH:MM:SS
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background-dark text-slate-100 font-display selection:bg-primary selection:text-white">

      {/* --- Background Effects --- */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black">
        <div className="absolute inset-0 grid-bg opacity-30 z-10"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_70%)] z-0"></div>
      </div>



      {/* --- Main Content Area --- */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-32 pb-12 px-4 perspective-1000">

        {/* Top Section: Hero & Visuals */}
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <HeroSection />
            <FeatureGrid />
          </div>
          <PlatinumCore />
        </div>

        {/* Bottom Section: Live Stats */}
        <StatusPanel
          playerCount={playerCount}
          timeLeftString={formatTime(timeLeft)}
        />

      </main>

      {/* --- Footer --- */}
      <footer className="relative z-10 w-full border-t border-white/10 bg-black backdrop-blur-md mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs font-mono uppercase tracking-wide">© 2024 CodeBattle. System Optimized.</p>
          <div className="flex gap-6">
            <a className="text-zinc-600 hover:text-white transition-colors text-xs font-mono uppercase tracking-wide" href="#">Privacy</a>
            <a className="text-zinc-600 hover:text-white transition-colors text-xs font-mono uppercase tracking-wide" href="#">Terms</a>
            <a className="text-zinc-600 hover:text-white transition-colors text-xs font-mono uppercase tracking-wide flex items-center gap-2" href="#">
              Status
              <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(255,0,0,0.8)]"></span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
