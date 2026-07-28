"use client";

import { cn } from "@/lib/utils";

interface PseudocodeBlockProps {
  pseudocode: string[];
  activeLine: number; // 1-indexed
}

export function PseudocodeBlock({ pseudocode, activeLine }: PseudocodeBlockProps) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-0)]">
      <div className="bg-[var(--bg-1)] px-4 py-2 border-b border-[var(--border)] text-xs font-semibold text-[var(--text-muted)] tracking-widest uppercase font-[family-name:var(--font-display)]">
        Pseudocode
      </div>
      <div className="p-4 font-[family-name:var(--font-mono)] text-sm leading-relaxed overflow-x-auto">
        {pseudocode.map((line, index) => {
          const lineNumber = index + 1;
          const isActive = lineNumber === activeLine;
          return (
            <div
              key={index}
              className={cn(
                "flex items-start px-2 py-0.5 rounded transition-colors",
                isActive ? "bg-[var(--orange-bg)] text-[var(--neon-red)]" : "text-[var(--text-muted)]"
              )}
            >
              <span className="w-6 shrink-0 text-[var(--text-muted)] select-none text-xs flex items-center h-full opacity-50">
                {lineNumber}
              </span>
              <span className={cn("whitespace-pre", isActive ? "text-[var(--text-primary)] font-medium" : "text-[var(--text-secondary)]")}>
                {line}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
