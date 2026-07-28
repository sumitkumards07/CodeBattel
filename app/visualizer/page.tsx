import { getCategories, getLessonsByCategory } from "@/lib/visualizer";
import Link from "next/link";
import { Play } from "lucide-react";

export default function VisualizerIndexPage() {
  const categories = getCategories();

  return (
    <div className="min-h-screen py-12 px-6 font-[family-name:var(--font-display)]">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-2">DSA Visualizer</h1>
          <p className="text-[var(--text-secondary)] text-lg">Master algorithms and data structures through interactive animations.</p>
        </div>

        {categories.length === 0 ? (
          <div className="p-8 border border-[var(--border)] rounded-xl bg-[var(--bg-1)] text-center text-[var(--text-muted)]">
            No categories found. Run the scraper to populate content!
          </div>
        ) : (
          <div className="flex flex-col gap-12">
            {categories.map((category) => {
              const lessons = getLessonsByCategory(category);
              return (
                <div key={category} className="flex flex-col gap-6">
                  <h2 className="text-2xl font-semibold capitalize text-[var(--neon-red)] border-b border-[var(--border)] pb-2">
                    {category.replace(/-/g, " ")}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {lessons.map((lesson) => (
                      <Link
                        key={lesson.slug}
                        href={`/visualizer/${category}/${lesson.slug}`}
                        className="group flex flex-col gap-2 p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-1)] hover:bg-[var(--bg-3)] hover:border-[var(--neon-red)]/30 transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-lg text-[var(--text-primary)] group-hover:text-[var(--neon-red)] transition-colors">
                            {lesson.title}
                          </h3>
                          <Play className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--neon-red)] transition-colors" />
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] line-clamp-2">{lesson.oneLiner}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
