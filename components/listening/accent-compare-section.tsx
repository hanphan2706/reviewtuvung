"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Info } from "lucide-react";
import { AccentPlayerCard } from "@/components/listening/accent-player-card";
import { ProtectedAudio } from "@/components/media/protected-audio";
import {
  ACCENT_PLAYER_OPTIONS,
  ACCENT_SAMPLE_PARAGRAPH_NOTE,
} from "@/lib/listening/accent-explore-content";
import {
  speechAccentAudioUrl,
  type AccentComparisonSet,
} from "@/lib/listening/speech-accent-catalog";
import { STELLA_ELICITATION_PARAGRAPH } from "@/lib/listening/stella-paragraph";

type AccentCompareSectionProps = {
  activeSet: AccentComparisonSet;
  comparisonSets: readonly AccentComparisonSet[];
  onSelectSet: (setId: string) => void;
};

type PlayableAccentId = "british" | "american" | "australian";

export function AccentCompareSection({
  activeSet,
  comparisonSets,
  onSelectSet,
}: AccentCompareSectionProps) {
  const audioRefs = useRef<Partial<Record<PlayableAccentId, HTMLAudioElement>>>({});
  const [activeAccentId, setActiveAccentId] = useState<PlayableAccentId | null>(null);
  const [playingAccentId, setPlayingAccentId] = useState<PlayableAccentId | null>(null);

  const stopAll = useCallback(() => {
    for (const audio of Object.values(audioRefs.current)) {
      if (!audio) continue;
      audio.pause();
      audio.currentTime = 0;
    }
    setPlayingAccentId(null);
  }, []);

  useEffect(() => {
    for (const audio of Object.values(audioRefs.current)) {
      if (!audio) continue;
      audio.pause();
      audio.currentTime = 0;
    }
    setPlayingAccentId(null);
    setActiveAccentId(null);
  }, [activeSet.id]);

  useEffect(() => {
    return () => stopAll();
  }, [stopAll]);

  const toggleAccent = (accentId: PlayableAccentId) => {
    const audio = audioRefs.current[accentId];
    if (!audio) return;

    setActiveAccentId(accentId);

    if (playingAccentId === accentId && !audio.paused) {
      audio.pause();
      setPlayingAccentId(null);
      return;
    }

    stopAll();
    setActiveAccentId(accentId);
    const play = audio.play();
    if (play) {
      play
        .then(() => setPlayingAccentId(accentId))
        .catch(() => setPlayingAccentId(null));
    }
  };

  const sampleForAccent = (accentId: PlayableAccentId) => activeSet[accentId];

  return (
    <section className="mb-10">
      <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#4B2876]">
            So sánh
          </p>
          <h2 className="mt-1 font-serif text-2xl font-semibold text-[#000001] md:text-[1.75rem]">
            So sánh chất giọng
          </h2>
          <p className="mt-1 text-sm text-[#616365]">{activeSet.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Chọn bộ so sánh">
          {comparisonSets.map((set) => {
            const selected = set.id === activeSet.id;
            return (
              <button
                key={set.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => onSelectSet(set.id)}
                className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide transition ${
                  selected
                    ? "border-[#4B2876] bg-[#4B2876] text-white"
                    : "border-[#E4E4E7] bg-white text-[#47464b] hover:border-[#4B2876]/40"
                }`}
              >
                {set.title}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <article className="flex flex-col rounded-2xl border border-[#E4E4E7] bg-white p-6 md:p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#616365]">
            Đoạn văn mẫu
          </p>
          <p className="mt-5 font-serif text-lg italic leading-relaxed text-[#000001] md:text-xl">
            &ldquo;{STELLA_ELICITATION_PARAGRAPH}&rdquo;
          </p>
          <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-[#616365]">
            <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden />
            {ACCENT_SAMPLE_PARAGRAPH_NOTE}
          </p>
        </article>

        <div>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#616365]">
            Chọn chất giọng để nghe
          </p>
          <div className="flex flex-col gap-3">
            {ACCENT_PLAYER_OPTIONS.map((option) => {
              if (option.comingSoon) {
                return (
                  <AccentPlayerCard
                    key={option.id}
                    title={option.title}
                    subtitle={option.subtitle}
                    isPlaying={false}
                    isActive={false}
                    disabled
                    onToggle={() => {}}
                  />
                );
              }

              const accentId = option.id as PlayableAccentId;
              const sample = sampleForAccent(accentId);
              return (
                <div key={option.id}>
                  <AccentPlayerCard
                    title={option.title}
                    subtitle={`${option.subtitle} · ${sample.location}`}
                    isPlaying={playingAccentId === accentId}
                    isActive={activeAccentId === accentId}
                    onToggle={() => toggleAccent(accentId)}
                  />
                  <ProtectedAudio
                    ref={(node) => {
                      if (node) audioRefs.current[accentId] = node;
                    }}
                    preload="none"
                    apiSrc={speechAccentAudioUrl(sample.sampleId)}
                    onEnded={() => setPlayingAccentId(null)}
                    className="sr-only"
                    aria-label={`Mẫu giọng ${option.title}`}
                  >
                    <track kind="captions" />
                  </ProtectedAudio>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
