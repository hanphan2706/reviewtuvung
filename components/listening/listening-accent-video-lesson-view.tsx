"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, Lock, Play } from "lucide-react";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import {
  studyHubPageBgClass,
  studyHubSubpageContentClass,
} from "@/components/study-module/study-hub-shell";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";
import { LISTENING_ACCENT_CHALLENGE_HREF } from "@/lib/listening/accent-nav";
import {
  ACCENT_VIDEO_LESSON_PAGE,
  ACCENT_VIDEO_LESSON_TRANSCRIPT_PLACEHOLDER,
  accentVideoLessonHref,
  getAccentVideoLessons,
  isAccentVideoLessonPlayable,
  type AccentVideoLessonDetail,
} from "@/lib/listening/accent-video-lesson-content";
import { AccentVideoTranscriptBody } from "@/components/listening/accent-video-transcript-body";
import { usePathname } from "next/navigation";

type TabId = "content" | "transcript";

type ListeningAccentVideoLessonViewProps = {
  lesson: AccentVideoLessonDetail;
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

function lessonStatus(
  item: AccentVideoLessonDetail,
  currentId: string,
  currentIndex: number,
  itemIndex: number,
): "completed" | "current" | "available" | "locked" {
  if (!isAccentVideoLessonPlayable(item)) return "locked";
  if (item.id === currentId) return "current";
  if (itemIndex < currentIndex) return "completed";
  return "available";
}

export function ListeningAccentVideoLessonView({
  lesson,
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
}: ListeningAccentVideoLessonViewProps) {
  const pathname = usePathname();
  const [tab, setTab] = useState<TabId>("content");
  const lessons = getAccentVideoLessons();
  const currentIndex = lessons.findIndex((item) => item.id === lesson.id);

  return (
    <div className={studyHubPageBgClass}>
      <StudyHubHeader
        title="Luyện nghe"
        showListeningFilters
        isLoggedIn={isLoggedIn}
        userProfile={userProfile}
        supabaseConfigured={supabaseConfigured}
        signInNext={pathname}
      />

      <div className={studyHubSubpageContentClass}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
          <div>
            <div className="relative aspect-video overflow-hidden rounded-xl border border-[#E4E4E7] bg-black">
              {lesson.youtubeVideoId ? (
                <iframe
                  title={lesson.pageTitle}
                  src={`https://www.youtube.com/embed/${lesson.youtubeVideoId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 size-full"
                />
              ) : null}
            </div>

            <h1 className="mt-6 flex flex-wrap items-baseline gap-x-2 font-serif text-2xl font-semibold leading-tight text-[#000001] md:text-[1.85rem]">
              <span>{lesson.pageTitle}:</span>
              <span>{lesson.scopeLabel}</span>
            </h1>

            <div className="mt-6 border-b border-[#E4E4E7]">
              <div className="flex gap-8">
                {(
                  [
                    { id: "content" as const, label: ACCENT_VIDEO_LESSON_PAGE.tabContent },
                    { id: "transcript" as const, label: ACCENT_VIDEO_LESSON_PAGE.tabTranscript },
                  ] as const
                ).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTab(item.id)}
                    className={`cursor-pointer border-b-2 pb-3 text-[11px] font-bold uppercase tracking-[0.12em] transition ${
                      tab === item.id
                        ? "border-[#000001] text-[#000001]"
                        : "border-transparent text-[#616365] hover:text-[#000001]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {tab === "content" ? (
              <div className="mt-6 space-y-6">
                <p className="text-sm leading-relaxed text-[#47464b] md:text-[15px]">{lesson.intro}</p>
                {lesson.highlight ? (
                  <blockquote className="border-l-4 border-[#000001] bg-[#f5f5f7] px-5 py-4 text-sm italic leading-relaxed text-[#47464b]">
                    {lesson.highlight}
                  </blockquote>
                ) : null}
                <div>
                  <h2 className="font-serif text-lg font-semibold text-[#000001]">
                    {ACCENT_VIDEO_LESSON_PAGE.keyPointsHeading}
                  </h2>
                  <ul className="mt-3 space-y-2">
                    {lesson.keyPoints.map((point) => (
                      <li key={point} className="flex gap-2 text-sm leading-relaxed text-[#47464b]">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#4B2876]" aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="mt-6">
                {lesson.transcript ? (
                  <AccentVideoTranscriptBody lessonId={lesson.id} text={lesson.transcript} />
                ) : (
                  <p className="text-sm leading-relaxed text-[#616365]">
                    {ACCENT_VIDEO_LESSON_TRANSCRIPT_PLACEHOLDER}
                  </p>
                )}
              </div>
            )}
          </div>

          <aside className="rounded-xl border border-[#E4E4E7] bg-white p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#616365]">
              {ACCENT_VIDEO_LESSON_PAGE.sidebarTitle}
            </p>
            <ul className="mt-4 space-y-1">
              {lessons.map((item, index) => {
                const status = lessonStatus(item, lesson.id, currentIndex, index);
                const playable = isAccentVideoLessonPlayable(item);
                const rowClass =
                  status === "current"
                    ? "bg-[#4B2876]/10"
                    : status === "locked"
                      ? "opacity-50"
                      : "hover:bg-[#fafafa]";

                const inner = (
                  <div className={`flex items-center gap-3 rounded-lg px-3 py-3 ${rowClass}`}>
                    <span className="flex size-6 shrink-0 items-center justify-center">
                      {status === "completed" ? (
                        <span className="inline-flex size-6 items-center justify-center rounded-full bg-[#4B2876] text-white">
                          <Check className="size-3.5" aria-hidden />
                        </span>
                      ) : status === "current" ? (
                        <Play className="size-4 fill-[#000001] text-[#000001]" aria-hidden />
                      ) : status === "locked" ? (
                        <Lock className="size-4 text-[#616365]" aria-hidden />
                      ) : (
                        <span className="text-xs font-semibold text-[#616365]">{item.lessonNumber}</span>
                      )}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#616365]">
                        Bài {item.lessonNumber}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold leading-snug text-[#000001]">
                        {item.scopeLabel}
                      </p>
                      {status === "current" ? (
                        <p className="mt-1 text-xs font-medium text-[#616365]">
                          {ACCENT_VIDEO_LESSON_PAGE.watchingLabel}
                        </p>
                      ) : (
                        <p className="mt-1 text-xs text-[#616365]">{item.durationLabel}</p>
                      )}
                    </div>
                  </div>
                );

                if (!playable || status === "locked") {
                  return (
                    <li key={item.id} aria-disabled>
                      {inner}
                    </li>
                  );
                }

                return (
                  <li key={item.id}>
                    <Link href={accentVideoLessonHref(item.id)} className="block">
                      {inner}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href={LISTENING_ACCENT_CHALLENGE_HREF}
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-[#000001] bg-white px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#000001] transition hover:bg-[#fafafa]"
            >
              {ACCENT_VIDEO_LESSON_PAGE.quizCta}
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
