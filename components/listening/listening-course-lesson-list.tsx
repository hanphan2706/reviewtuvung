"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Clock, Sparkles, User } from "lucide-react";
import { StudyHubLibraryPagination } from "@/components/study-module/study-hub-library-pagination";
import { studyHubCourseSectionHeaderClass } from "@/components/study-module/study-hub-shell";
import {
  listeningPartDurationMinutes,
  type ListeningPartMeta,
} from "@/lib/listening/content-manifest";
import { listeningDifficultyBandForLesson } from "@/lib/listening/listening-difficulty-bands";
import {
  TACTICS_BASIC_LESSONS_PAGE_SIZE,
  TACTICS_BASIC_SOURCE_LABEL_VI,
  tacticsBasicLessonDisplayVi,
} from "@/lib/listening/tactics-basic-catalog";
import { basicIeltsListeningLessonDisplayVi } from "@/lib/listening/basic-ielts-listening-catalog";
import { parseLibraryPage } from "@/lib/study-hub/library-grid";

type ListeningCourseLessonListProps = {
  lessons: readonly ListeningPartMeta[];
  onOpenLesson: (slug: string) => void;
  sourceLabel?: string;
  useVietnameseCopy?: boolean;
  pageSize?: number;
};

function lessonCopy(
  lesson: ListeningPartMeta,
  useVietnameseCopy: boolean,
): { title: string; summary: string } {
  if (useVietnameseCopy) {
    const vi =
      tacticsBasicLessonDisplayVi(lesson.id) ?? basicIeltsListeningLessonDisplayVi(lesson.id);
    if (vi) return vi;
  }
  return { title: lesson.title, summary: lesson.summary };
}

function difficultyBadgeLabel(lesson: ListeningPartMeta): string {
  return listeningDifficultyBandForLesson(lesson).toLocaleUpperCase("vi-VN");
}

export function ListeningCourseLessonList({
  lessons,
  onOpenLesson,
  sourceLabel = TACTICS_BASIC_SOURCE_LABEL_VI,
  useVietnameseCopy = true,
  pageSize = TACTICS_BASIC_LESSONS_PAGE_SIZE,
}: ListeningCourseLessonListProps) {
  const searchParams = useSearchParams();

  const totalPages = Math.max(1, Math.ceil(lessons.length / pageSize));
  const currentPage = parseLibraryPage(searchParams.get("trang"), totalPages);

  const pageLessons = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return lessons.slice(start, start + pageSize);
  }, [currentPage, lessons, pageSize]);

  if (lessons.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-[#E4E4E7] bg-white px-6 py-12 text-center text-sm text-[#47464b]">
        Chưa có bài nghe trong mục này.
      </p>
    );
  }

  const globalIndexOffset = (currentPage - 1) * pageSize;

  return (
    <section>
      <div className={`${studyHubCourseSectionHeaderClass} flex flex-wrap items-center justify-between gap-3`}>
        <h2 className="font-serif text-xl font-semibold text-[#000001] md:text-2xl">Danh sách bài học</h2>
        <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-[#47464b]">
          <Sparkles className="size-3.5 text-[#4B2876]" aria-hidden />
          {lessons.length} bài học có sẵn
        </span>
      </div>

      <ul className="flex flex-col gap-4">
        {pageLessons.map((lesson, index) => {
          const minutes = listeningPartDurationMinutes(lesson);
          const copy = lessonCopy(lesson, useVietnameseCopy);
          return (
            <li key={lesson.id}>
              <button
                type="button"
                onClick={() => onOpenLesson(lesson.slug)}
                className="group flex w-full cursor-pointer items-start gap-4 rounded-lg border border-[#E4E4E7] bg-white p-4 text-left transition hover:border-[#000001]/10 hover:shadow-sm sm:p-5"
              >
                <span
                  className="flex size-12 shrink-0 items-center justify-center rounded-md bg-[#ebe6f4] font-serif text-lg font-bold tabular-nums text-[#4B2876]"
                  aria-hidden
                >
                  {String(globalIndexOffset + index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-serif text-base font-semibold leading-snug text-[#000001] md:text-[1.05rem]">
                      {copy.title}
                    </p>
                    <span className="inline-block shrink-0 whitespace-nowrap rounded bg-[#F4F4F5] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[#47464b]">
                      {difficultyBadgeLabel(lesson)}
                    </span>
                  </div>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-[#47464b]">{copy.summary}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#47464b]">
                    <span className="inline-flex items-center gap-1.5">
                      <User className="size-3.5 shrink-0" aria-hidden />
                      {sourceLabel}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-3.5 shrink-0" aria-hidden />
                      {minutes} phút
                    </span>
                  </div>
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      <StudyHubLibraryPagination totalPages={totalPages} ariaLabel="Phân trang danh sách bài học" />
    </section>
  );
}
