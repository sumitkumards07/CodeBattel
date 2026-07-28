import { getLesson } from "@/lib/visualizer";
import { VisualizerApp } from "@/components/visualizer/VisualizerApp";
import { notFound } from "next/navigation";

export default async function VisualizerLessonPage(props: { params: Promise<{ category: string; slug: string }> }) {
  const params = await props.params;
  const lesson = getLesson(params.category, params.slug);

  if (!lesson) {
    notFound();
  }

  return <VisualizerApp lesson={lesson} />;
}
