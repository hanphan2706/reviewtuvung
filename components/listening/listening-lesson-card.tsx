"use client";

import Image from "next/image";
import {
  listeningPartDurationMinutes,
  type ListeningPartMeta,
} from "@/lib/listening/content-manifest";

export function ListeningLessonCard({
  lesson,
  onClick,
}: {
  lesson: ListeningPartMeta;
  onClick?: () => void;
}) {
  const minutes = listeningPartDurationMinutes(lesson);

  const inner = (
    <>
      <div className="relative aspect-[4/3] w-full bg-[#f3f0f8]">
        <Image
          src={lesson.heroImage}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute bottom-3 right-3 rounded-md bg-black/75 px-2 py-1 text-xs font-semibold tabular-nums text-white">
          {minutes} phút
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#4b2876]">{lesson.metaPill}</p>
        <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-[#000001] md:text-[1.35rem]">
          {lesson.title}
        </h3>
        <p className="mt-2 flex-1 text-base leading-relaxed text-[#47464b]">{lesson.summary}</p>
        <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#47464b]">
          {lesson.topics[0]?.toUpperCase() ?? "IELTS"}
        </p>
      </div>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border border-[#E4E4E7] bg-white text-left shadow-sm transition hover:shadow-md"
      >
        {inner}
      </button>
    );
  }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-[#E4E4E7] bg-white shadow-sm">
      {inner}
    </article>
  );
}
