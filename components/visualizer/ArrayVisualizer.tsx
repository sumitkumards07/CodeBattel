"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ArrayVisualizerProps {
  sequence: (string | number)[];
  pointers: Record<string, number>;
}

export function ArrayVisualizer({ sequence, pointers }: ArrayVisualizerProps) {
  const pointersByIndex: Record<number, string[]> = {};
  Object.entries(pointers).forEach(([name, index]) => {
    if (!pointersByIndex[index]) {
      pointersByIndex[index] = [];
    }
    pointersByIndex[index].push(name);
  });

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[var(--bg-1)] rounded-xl border border-[var(--border)] min-h-[300px] overflow-x-auto w-full">
      <div className="flex items-center gap-1.5 mt-10">
        {sequence.map((item, index) => {
          const isTargeted = !!pointersByIndex[index];
          return (
            <div key={index} className="flex flex-col items-center relative">
              {/* Box */}
              <motion.div
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-lg font-[family-name:var(--font-mono)] font-medium rounded border-2 transition-all duration-300",
                  isTargeted
                    ? "bg-[var(--orange-bg)] border-[var(--neon-red)]/50 text-[var(--neon-red)] shadow-[0_0_15px_rgba(255,0,51,0.2)]"
                    : "bg-[var(--bg-0)] border-[var(--border)] text-[var(--text-secondary)]"
                )}
              >
                {item}
              </motion.div>
              
              {/* Index */}
              <div className="text-[10px] text-[var(--text-muted)] font-[family-name:var(--font-mono)] mt-1.5">{index}</div>

              {/* Pointers */}
              {isTargeted && (
                <div className="absolute -bottom-14 flex flex-col items-center gap-1">
                  <motion.div
                    layoutId={`pointer-arrow-${pointersByIndex[index].join("-")}`}
                    className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-transparent border-b-[var(--neon-red)] mb-1"
                  />
                  <div className="flex flex-col gap-1">
                    {pointersByIndex[index].map((ptr) => (
                      <motion.div
                        key={ptr}
                        layoutId={`pointer-label-${ptr}`}
                        className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-[var(--orange-bg)] text-[var(--neon-red)] border border-[var(--neon-red)]/30"
                      >
                        {ptr}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
