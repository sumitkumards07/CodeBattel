"use client";

import { useState, useEffect } from "react";
import { Lesson } from "@/lib/visualizer";
import { ArrayVisualizer } from "./ArrayVisualizer";
import { PseudocodeBlock } from "./PseudocodeBlock";
import { Controls } from "./Controls";
import { StatePanel } from "./StatePanel";
import { cn } from "@/lib/utils";

interface VisualizerAppProps {
  lesson: Lesson;
}

export function VisualizerApp({ lesson }: VisualizerAppProps) {
  const [currentPhaseIdx, setCurrentPhaseIdx] = useState(0);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Reset step and playback when switching phases or lessons
  useEffect(() => {
    setCurrentStepIdx(0);
    setIsPlaying(false);
  }, [currentPhaseIdx, lesson.slug]);

  const phase = lesson.phases[currentPhaseIdx];
  const steps = phase?.steps || [];
  const currentStep = steps[currentStepIdx];
  const canStepForward = currentStepIdx < steps.length - 1;
  const canStepBackward = currentStepIdx > 0;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && canStepForward) {
      interval = setInterval(() => {
        setCurrentStepIdx((prev) => {
          if (prev < steps.length - 1) return prev + 1;
          setIsPlaying(false);
          return prev;
        });
      }, 1500);
    } else if (isPlaying && !canStepForward) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, canStepForward, steps.length]);

  const handlePlayPause = () => {
    if (!isPlaying && !canStepForward) {
      setCurrentStepIdx(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleStepForward = () => {
    setIsPlaying(false);
    if (canStepForward) setCurrentStepIdx(currentStepIdx + 1);
  };

  const handleStepBackward = () => {
    setIsPlaying(false);
    if (canStepBackward) setCurrentStepIdx(currentStepIdx - 1);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStepIdx(0);
  };

  if (!phase || !currentStep) return null;

  return (
    <div className="flex flex-col h-full font-[family-name:var(--font-display)]">
      {/* Header */}
      <div className="flex flex-col gap-2 px-8 pt-8 pb-4 border-b border-[var(--border)]">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">{lesson.title}</h1>
          {lesson.leetcode && (
            <a 
              href={lesson.leetcode.url} 
              target="_blank" 
              rel="noreferrer"
              className={cn(
                "px-2.5 py-0.5 rounded-full text-xs font-semibold border",
                lesson.leetcode.difficulty === "Easy" ? "text-[var(--neon-blue)] border-[var(--neon-blue)]/30 bg-[var(--neon-blue)]/10" :
                lesson.leetcode.difficulty === "Medium" ? "text-amber-400 border-amber-400/30 bg-amber-400/10" :
                "text-[var(--neon-red)] border-[var(--neon-red)]/30 bg-[var(--neon-red)]/10"
              )}
            >
              LC {lesson.leetcode.number}
            </a>
          )}
        </div>
        <p className="text-[var(--text-secondary)]">{lesson.oneLiner}</p>
        
        {/* Companies */}
        {lesson.companies && lesson.companies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {lesson.companies.map(c => (
              <span key={c} className="px-2 py-1 bg-[var(--bg-3)] border border-[var(--border)] rounded-md text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-bold">
                {c}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Phase Tabs */}
      <div className="flex items-center px-8 border-b border-[var(--border)] bg-[var(--bg-1)]">
        {lesson.phases.map((p, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPhaseIdx(idx)}
            className={cn(
              "px-6 py-3 text-sm font-medium transition-colors border-b-2",
              currentPhaseIdx === idx
                ? "border-[var(--neon-red)] text-[var(--neon-red)] bg-[var(--orange-bg)]"
                : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-3)]"
            )}
          >
            {p.label}
          </button>
        ))}
        {/* Complexity info */}
        <div className="ml-auto flex items-center gap-4 text-xs font-[family-name:var(--font-mono)] text-[var(--text-muted)]">
          <span>Time: <span className="text-[var(--text-primary)]">{phase.complexity.time}</span></span>
          <span>Space: <span className="text-[var(--text-primary)]">{phase.complexity.space}</span></span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col p-8 gap-8 overflow-y-auto custom-scrollbar">
        {/* Top: Array and Controls */}
        <div className="flex flex-col gap-6 items-center w-full">
          <ArrayVisualizer sequence={lesson.sequence} pointers={currentStep.pointers || {}} />
          <Controls
            isPlaying={isPlaying}
            canStepForward={canStepForward}
            canStepBackward={canStepBackward}
            onPlayPause={handlePlayPause}
            onStepForward={handleStepForward}
            onStepBackward={handleStepBackward}
            onReset={handleReset}
          />
        </div>

        {/* Bottom: 2 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
          <PseudocodeBlock pseudocode={phase.pseudocode} activeLine={currentStep.highlightLine} />
          <StatePanel stateVars={currentStep.state || {}} narration={currentStep.narration || ""} />
        </div>
      </div>
    </div>
  );
}
