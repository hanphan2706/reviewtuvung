"use client";

import type { ListeningPartMeta } from "@/lib/listening/content-manifest";
import { ListeningLessonCard } from "@/components/listening/listening-lesson-card";

type ListeningLessonGridProps = {
  lessons: readonly ListeningPartMeta[];
  onOpenLesson: (slug: string) => void;
  emptyMessage?: string;
};

export function ListeningLessonGrid({
  lessons,
  onOpenLesson,
  emptyMessage = "Chưa có bài nghe trong mục này.",
}: ListeningLessonGridProps) {
  if (lessons.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-[#E4E4E7] bg-white px-6 py-12 text-center text-sm text-[#47464b]">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {lessons.map((lesson) => (
        <ListeningLessonCard
          key={lesson.id}
          lesson={lesson}
          onClick={() => onOpenLesson(lesson.slug)}
        />
      ))}
    </div>
  );
}
