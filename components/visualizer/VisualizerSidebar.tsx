import Link from "next/link";
import { getCategories, getLessonsByCategory } from "@/lib/visualizer";
import { ChevronRight } from "lucide-react";

export function VisualizerSidebar() {
  const categories = getCategories();

  return (
    <aside className="hidden lg:flex w-72 shrink-0 h-screen overflow-y-auto border-r border-[var(--border)] bg-[var(--bg-1)] px-4 py-6 flex-col custom-scrollbar">
      <Link href="/visualizer" className="text-xl font-bold tracking-tight text-[var(--text-primary)] mb-8 pl-2 font-[family-name:var(--font-display)]">
        DSA Visualizer
      </Link>
      
      <div className="flex flex-col gap-6">
        {categories.map((category) => {
          const lessons = getLessonsByCategory(category);
          return (
            <div key={category} className="flex flex-col gap-2">
              <h3 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest pl-2 mb-1 font-[family-name:var(--font-display)]">
                {category.replace(/-/g, " ")}
              </h3>
              <div className="flex flex-col gap-1">
                {lessons.map((lesson) => (
                  <Link
                    key={lesson.slug}
                    href={`/visualizer/${category}/${lesson.slug}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-3)] transition-colors group font-[family-name:var(--font-display)]"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-[var(--neon-red)]" />
                    <span className="truncate">{lesson.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
