"use client";

import { BadgeCheck, Mic } from "lucide-react";
import { useMemo } from "react";
import { studyHubCourseSectionStackClass } from "@/components/study-module/study-hub-shell";
import type { ListeningPartMeta } from "@/lib/listening/content-manifest";
import { useListeningCourseCompletion } from "@/hooks/use-listening-course-completion";

type ListeningCourseLibrarySidebarProps = {
  lessons: readonly ListeningPartMeta[];
  isLoggedIn: boolean;
};

function ListeningWeeklyChallengeCard() {
  return (
    <section className="rounded-xl bg-[#000001] p-6 text-white shadow-sm">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/65">Thử thách mỗi tuần</p>
      <h2 className="mt-3 font-serif text-xl font-semibold leading-snug md:text-[1.35rem]">Ghi âm đối thoại</h2>
      <p className="mt-2 text-sm leading-relaxed text-white/80">
        Ghi âm lại 1 đoạn hội thoại ngắn và nhận phản hồi trực tiếp từ giáo viên IELTS 8.0.
      </p>
      <div className="mt-5 flex justify-center">
        <button
          type="button"
          disabled
          aria-disabled="true"
          title="Sắp có"
          className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#000001] opacity-90"
        >
          <Mic className="size-4 shrink-0" aria-hidden />
          Tham gia ngay
        </button>
      </div>
    </section>
  );
}

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
      <ListeningWeeklyChallengeCard />
      <ListeningCertificateCard
        totalLessons={lessons.length}
        completed={stats.completed}
        percent={stats.percent}
        loading={loading}
      />
    </aside>
  );
}
