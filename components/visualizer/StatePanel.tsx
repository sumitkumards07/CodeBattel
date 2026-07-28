"use client";

import { motion, AnimatePresence } from "framer-motion";

interface StatePanelProps {
  stateVars: Record<string, string | number>;
  narration: string;
}

export function StatePanel({ stateVars, narration }: StatePanelProps) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-0)] h-full">
      <div className="bg-[var(--bg-1)] px-4 py-2 border-b border-[var(--border)] text-xs font-semibold text-[var(--text-muted)] tracking-widest uppercase font-[family-name:var(--font-display)]">
        Explanation & State
      </div>
      <div className="p-4 flex flex-col gap-6 h-full">
        {/* Narration */}
        <div className="p-4 bg-[var(--orange-bg)] border-l-2 border-[var(--neon-red)] rounded-r-lg">
          <p className="text-[var(--text-primary)] text-sm leading-relaxed font-[family-name:var(--font-display)]">{narration}</p>
        </div>

        {/* State Variables Grid */}
        <div className="flex flex-wrap gap-3 mt-auto">
          <AnimatePresence>
            {Object.entries(stateVars).map(([key, val]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex items-center rounded overflow-hidden border border-[var(--border)] shadow-sm"
              >
                <div className="bg-[var(--bg-1)] px-3 py-1.5 text-xs font-[family-name:var(--font-mono)] text-[var(--text-muted)] border-r border-[var(--border)]">
                  {key}
                </div>
                <div className="bg-[var(--bg-0)] px-3 py-1.5 text-xs font-[family-name:var(--font-mono)] font-bold text-[var(--text-primary)] min-w-[40px] text-center">
                  {val}
                </div>
              </motion.div>
            ))}
            {Object.keys(stateVars).length === 0 && (
              <div className="text-xs text-[var(--text-muted)] italic font-[family-name:var(--font-display)]">No variables tracked</div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
