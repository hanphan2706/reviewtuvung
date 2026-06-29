"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AccentPlayerCard } from "@/components/listening/accent-player-card";
import { ACCENT_PASSAGE_COMPARE_OPTIONS } from "@/lib/listening/accent-discover-content";
import {
  ACCENT_DISCOVER_PASSAGES,
  accentDiscoverArchiveSample,
  accentDiscoverPassageAudioUrl,
  type AccentDiscoverPassageId,
  type PlayableAccentId,
} from "@/lib/listening/accent-discover-passages";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#4B2876]">{children}</p>
  );
}

export function AccentPassageCompareSection() {
  const audioRefs = useRef<Partial<Record<PlayableAccentId, HTMLAudioElement>>>({});
  const [activePassageId, setActivePassageId] = useState<AccentDiscoverPassageId>("stella");
  const [activeAccentId, setActiveAccentId] = useState<PlayableAccentId | null>(null);
  const [playingAccentId, setPlayingAccentId] = useState<PlayableAccentId | null>(null);

  const activePassage =
    ACCENT_DISCOVER_PASSAGES.find((passage) => passage.id === activePassageId) ??
    ACCENT_DISCOVER_PASSAGES[0];

  const stopAll = useCallback(() => {
    for (const audio of Object.values(audioRefs.current)) {
      if (!audio) continue;
      audio.pause();
      audio.currentTime = 0;
    }
    setPlayingAccentId(null);
  }, []);

  useEffect(() => {
    return () => stopAll();
  }, [stopAll]);

  const selectPassage = (passageId: AccentDiscoverPassageId) => {
    if (passageId === activePassageId) return;
    stopAll();
    setActiveAccentId(null);
    setActivePassageId(passageId);
  };

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

  const subtitleForAccent = (accentId: PlayableAccentId) => {
    const option = ACCENT_PASSAGE_COMPARE_OPTIONS.find((item) => item.id === accentId);
    const sample = accentDiscoverArchiveSample(accentId);
    return `${option?.subtitle ?? ""} · ${sample.location}`;
  };

  return (
    <section>
      <SectionLabel>Đoạn văn tiêu chuẩn</SectionLabel>
      <h2 className="mt-1 font-serif text-2xl font-semibold text-[#000001] md:text-[1.75rem]">
        So sánh qua văn bản
      </h2>

      <div
        className="mt-5 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Chọn đoạn văn"
      >
        {ACCENT_DISCOVER_PASSAGES.map((passage) => {
          const selected = passage.id === activePassageId;
          return (
            <button
              key={passage.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => selectPassage(passage.id)}
              className={`cursor-pointer rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide transition ${
                selected
                  ? "border-[#4B2876] bg-[#4B2876] text-white"
                  : "border-[#E4E4E7] bg-white text-[#47464b] hover:border-[#4B2876]/40"
              }`}
            >
              {passage.title}
            </button>
          );
        })}
      </div>

      <div className="mt-4 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <article className="flex flex-col rounded-2xl border border-[#E4E4E7] bg-white p-6 md:p-8">
          <p className="font-serif text-lg italic leading-relaxed text-[#000001] md:text-xl">
            &ldquo;{activePassage.text}&rdquo;
          </p>
        </article>

        <div>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#616365]">
            Chọn chất giọng để nghe
          </p>
          <div className="flex flex-col gap-3">
            {ACCENT_PASSAGE_COMPARE_OPTIONS.map((option) => {
              const accentId = option.id;
              return (
                <div key={`${activePassageId}-${option.id}`}>
                  <AccentPlayerCard
                    title={option.title}
                    subtitle={subtitleForAccent(accentId)}
                    isPlaying={playingAccentId === accentId}
                    isActive={activeAccentId === accentId}
                    onToggle={() => toggleAccent(accentId)}
                  />
                  <audio
                    ref={(node) => {
                      if (node) audioRefs.current[accentId] = node;
                    }}
                    preload="none"
                    src={accentDiscoverPassageAudioUrl(activePassageId, accentId)}
                    onEnded={() => setPlayingAccentId(null)}
                    className="sr-only"
                    aria-label={`Mẫu giọng ${option.title}`}
                  >
                    <track kind="captions" />
                  </audio>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
