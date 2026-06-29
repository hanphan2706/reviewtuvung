"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import {
  ACCENT_DISCOVER_VIDEO_LESSONS,
} from "@/lib/listening/accent-discover-content";
import {
  accentVideoLessonHref,
  getAccentVideoLesson,
  isAccentVideoLessonPlayable,
  youtubeThumbnailUrl,
} from "@/lib/listening/accent-video-lesson-content";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#4B2876]">{children}</p>
  );
}

function VideoPlaceholderCard({
  title,
  scopeLabel,
  cardNote,
  durationLabel,
}: {
  title: string;
  scopeLabel: string;
  cardNote?: string;
  durationLabel: string;
}) {
  return (
    <article className="flex flex-col opacity-70">
      <div className="relative aspect-video overflow-hidden rounded-xl border border-[#E4E4E7] bg-[#1a1a1c]">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2a2a2e] to-[#121214]">
          <span className="inline-flex size-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm">
            <Play className="ml-1 size-6" aria-hidden />
          </span>
        </div>
        <span className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-0.5 text-[11px] font-semibold text-white">
          {durationLabel}
        </span>
      </div>
      <h3 className="mt-4 font-serif text-lg font-semibold text-[#000001]">{title}</h3>
      <p className="mt-1 text-sm font-medium leading-snug text-[#47464b]">{scopeLabel}</p>
      {cardNote ? <p className="mt-1 text-xs leading-relaxed text-[#616365]">{cardNote}</p> : null}
    </article>
  );
}

function VideoLessonLinkCard({
  lessonId,
  youtubeVideoId,
  title,
  scopeLabel,
  cardNote,
  durationLabel,
}: {
  lessonId: string;
  youtubeVideoId: string;
  title: string;
  scopeLabel: string;
  cardNote?: string;
  durationLabel: string;
}) {
  const href = accentVideoLessonHref(lessonId);
  const thumbnail = youtubeThumbnailUrl(youtubeVideoId);

  return (
    <Link href={href} className="group flex flex-col">
      <div className="relative aspect-video overflow-hidden rounded-xl border border-[#E4E4E7] bg-[#1a1a1c]">
        <Image
          src={thumbnail}
          alt=""
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 360px"
        />
        <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/30" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="inline-flex size-14 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition group-hover:bg-black/55">
            <Play className="ml-1 size-6" aria-hidden />
          </span>
        </span>
        <span className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-0.5 text-[11px] font-semibold text-white">
          {durationLabel}
        </span>
      </div>
      <h3 className="mt-4 font-serif text-lg font-semibold text-[#000001] transition group-hover:text-[#4B2876]">
        {title}
      </h3>
      <p className="mt-1 text-sm font-medium leading-snug text-[#47464b]">{scopeLabel}</p>
      {cardNote ? <p className="mt-1 text-xs leading-relaxed text-[#616365]">{cardNote}</p> : null}
    </Link>
  );
}

export function AccentVideoLessonsSection() {
  return (
    <section className="mb-16 md:mb-20">
      <SectionLabel>Bài học trực quan</SectionLabel>
      <h2 className="mt-1 font-serif text-2xl font-semibold text-[#000001] md:text-[1.75rem]">
        Phân biệt chất giọng qua Video
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-[#47464b] md:text-[15px] lg:whitespace-nowrap">
        Mục này chỉ phù hợp với các bạn level B1 trở lên. Các bạn vẫn đang ở level cơ bản thì chỉ cần tập trung phát âm rõ ràng trước là được.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ACCENT_DISCOVER_VIDEO_LESSONS.map((lesson) => {
          const detail = getAccentVideoLesson(lesson.id);
          const playable = detail && isAccentVideoLessonPlayable(detail) && lesson.youtubeVideoId;

          if (playable && lesson.youtubeVideoId) {
            return (
              <VideoLessonLinkCard
                key={lesson.id}
                lessonId={lesson.id}
                youtubeVideoId={lesson.youtubeVideoId}
                title={lesson.title}
                scopeLabel={lesson.scopeLabel}
                cardNote={lesson.cardNote}
                durationLabel={lesson.durationLabel}
              />
            );
          }

          return (
            <VideoPlaceholderCard
              key={lesson.id}
              title={lesson.title}
              scopeLabel={lesson.scopeLabel}
              cardNote={lesson.cardNote}
              durationLabel={lesson.durationLabel}
            />
          );
        })}
      </div>
    </section>
  );
}
