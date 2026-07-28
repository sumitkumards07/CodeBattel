"use client";

import { Play, Pause, StepBack, StepForward, RotateCcw } from "lucide-react";

interface ControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onStepForward: () => void;
  onStepBackward: () => void;
  onReset: () => void;
  canStepForward: boolean;
  canStepBackward: boolean;
}

export function Controls({
  isPlaying,
  onPlayPause,
  onStepForward,
  onStepBackward,
  onReset,
  canStepForward,
  canStepBackward,
}: ControlsProps) {
  return (
    <div className="flex items-center justify-center gap-4 py-4">
      <button
        onClick={onReset}
        title="Reset"
        className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--bg-1)] hover:bg-[var(--bg-3)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center justify-center"
      >
        <RotateCcw className="w-4 h-4" />
      </button>
      <button
        onClick={onStepBackward}
        disabled={!canStepBackward}
        title="Step Backward"
        className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--bg-1)] hover:bg-[var(--bg-3)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <StepBack className="w-4 h-4" />
      </button>
      <button
        onClick={onPlayPause}
        title={isPlaying ? "Pause" : "Play"}
        className="w-14 h-14 rounded-full bg-[var(--neon-red)] hover:brightness-110 text-white shadow-[var(--shadow-red-glow)] flex items-center justify-center transition-all"
      >
        {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
      </button>
      <button
        onClick={onStepForward}
        disabled={!canStepForward}
        title="Step Forward"
        className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--bg-1)] hover:bg-[var(--bg-3)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <StepForward className="w-4 h-4" />
      </button>
    </div>
  );
}
