"use client";

import Image from "next/image";
import { useState } from "react";
import { ArticleDeckHook } from "@/components/reading/article-deck-hook";
import { ArticlePassageAudioPlayer } from "@/components/reading/article-passage-audio-player";
import type { ReadingDifficulty, ReadingTopic } from "@/lib/reading/hub-articles";

type ArticleAudioHeroCardProps = {
  title: string;
  imageUrl: string;
  imageObjectPosition?: string;
  audioUrl: string;
  metaPill: string;
  readMin?: number;
  topic?: ReadingTopic;
  difficulty?: ReadingDifficulty;
  extraTags?: string[];
  /** Hook, deck, hoặc subheadline — Helvetica dưới tiêu đề. */
  deck?: string | null;
  deckTranslation?: string;
  showDeckTranslation?: boolean;
};

function formatMinutes(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds <= 0) return "";
  const mins = Math.max(1, Math.round(seconds / 60));
  return `${mins} phút`;
}

export function ArticleAudioHeroCard({
  title,
  imageUrl,
  imageObjectPosition = "object-center",
  audioUrl,
  metaPill,
  readMin,
  topic,
  difficulty,
  extraTags = [],
  deck = null,
  deckTranslation,
  showDeckTranslation = false,
}: ArticleAudioHeroCardProps) {
  const [audioSeconds, setAudioSeconds] = useState<number | null>(null);

  const durationTag = audioSeconds
    ? formatMinutes(audioSeconds).toUpperCase()
    : readMin
      ? `${readMin} PHÚT`
      : null;

  const tags = [
    topic ? topic.toUpperCase() : null,
    difficulty ? difficulty.toUpperCase() : null,
    durationTag,
    ...extraTags.map((t) => t.toUpperCase()),
  ].filter(Boolean) as string[];

  return (
    <section className="overflow-hidden rounded-xl border border-[#E4E4E7] bg-white shadow-sm">
      <div className="flex flex-col gap-2 px-5 pt-5 pb-3 md:px-6 md:pt-6 md:pb-3">
        <div className="flex items-stretch gap-4 md:gap-5">
          <div className="relative w-[88px] shrink-0 overflow-hidden rounded-lg bg-[#f7f3f2] md:w-[104px]">
            <Image
              src={imageUrl}
              alt=""
              fill
              className={`object-cover ${imageObjectPosition}`}
              sizes="104px"
              priority
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <span className="w-fit rounded-md bg-[#f7f3f2] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#616365]">
              {metaPill}
            </span>
            <h1 className="font-serif text-2xl font-bold leading-tight tracking-tight text-[#000001] md:text-[1.75rem]">
              {title}
            </h1>
            {deck ? (
              <ArticleDeckHook
                text={deck}
                translation={deckTranslation}
                showTranslation={showDeckTranslation}
              />
            ) : null}
          </div>
        </div>

        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-2 pl-[calc(88px+1rem)] md:pl-[calc(104px+1.25rem)]">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#E4E4E7] bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#616365]"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <div className="px-5 pb-4 pt-2 md:px-6 md:pb-4">
        <ArticlePassageAudioPlayer
          src={audioUrl}
          title={title}
          embedded
          onDurationChange={setAudioSeconds}
        />
      </div>
    </section>
  );
}
