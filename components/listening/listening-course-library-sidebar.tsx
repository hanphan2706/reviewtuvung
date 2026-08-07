"use client";

import { BadgeCheck } from "lucide-react";
import { useMemo } from "react";
import { studyHubCourseSectionStackClass } from "@/components/study-module/study-hub-shell";
import type { ListeningPartMeta } from "@/lib/listening/content-manifest";
import { useListeningCourseCompletion } from "@/hooks/use-listening-course-completion";

type ListeningCourseLibrarySidebarProps = {
  lessons: readonly ListeningPartMeta[];
  isLoggedIn: boolean;
};

function ListeningCertificateCard({
  totalLessons,
  completed,
  percent,
  loading,
}: {
  totalLessons: number;
  completed: number;
  percent: number;
  loading: boolean;
}) {
  return (
    <section className="rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] p-6 text-center shadow-sm">
      <div className="mx-auto flex size-12 items-center justify-center">
        <BadgeCheck className="size-10 text-[#000001]" strokeWidth={1.25} aria-hidden />
      </div>
      <h2 className="mt-4 font-serif text-xl font-semibold text-[#000001]">Chứng chỉ</h2>
      <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-relaxed text-[#47464b]">
        Hoàn thành tất cả các bài học để lên level A2 cho kỹ năng nghe!
      </p>
      <div className="mx-auto mt-5 max-w-[16rem]">
        <div className="h-2 overflow-hidden rounded-full bg-[#E4E4E7]">
          <div className="h-full rounded-full bg-[#4B2876]" style={{ width: `${percent}%` }} />
        </div>
        <p className="mt-2 text-xs font-medium text-[#47464b]">
          {loading ? "Đang tải…" : `${completed}/${totalLessons} bài · ${percent}%`}
        </p>
      </div>
    </section>
  );
}

export function ListeningCourseLibrarySidebar({ lessons, isLoggedIn }: ListeningCourseLibrarySidebarProps) {
  const lessonIds = useMemo(() => lessons.map((lesson) => lesson.id), [lessons]);
  const { stats, loading } = useListeningCourseCompletion(lessonIds, isLoggedIn);

  return (
    <aside
      className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:flex lg:flex-col ${studyHubCourseSectionStackClass}`}
    >
      <ListeningCertificateCard
        totalLessons={lessons.length}
        completed={stats.completed}
        percent={stats.percent}
        loading={loading}
      />
    </aside>
  );
}
