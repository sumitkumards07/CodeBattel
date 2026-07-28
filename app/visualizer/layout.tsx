import { ReactNode } from "react";
import { VisualizerSidebar } from "@/components/visualizer/VisualizerSidebar";

export default function VisualizerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <VisualizerSidebar />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
