"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Volume2 } from "lucide-react";
import {
  ACCENT_DISCOVER_WORD_PAIRS,
  ACCENT_DISCOVER_WORD_PAIRS_PAGE_SIZE,
} from "@/lib/listening/accent-discover-content";
import { accentDiscoverWordAudioUrl } from "@/lib/listening/accent-discover-passages";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#4B2876]">{children}</p>
  );
}

type WordAudioKey = `${string}-${"uk" | "us"}`;

function IpaSpeakerButton({
  pairId,
  variant,
  label,
  ipa,
  isPlaying,
  onToggle,
}: {
  pairId: string;
  variant: "uk" | "us";
  label: string;
  ipa: string;
  isPlaying: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex min-w-0 items-center gap-1.5">
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={isPlaying}
        className={`inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full border transition ${
          isPlaying
            ? "border-[#4B2876] bg-[#4B2876] text-white"
            : "border-[#E4E4E7] bg-white text-[#4B2876] hover:border-[#4B2876]/40 hover:bg-[#faf9fc]"
        }`}
        aria-label={`Nghe phát âm ${label}`}
      >
        <Volume2 className="size-3.5" aria-hidden />
      </button>
      <span className="min-w-0 whitespace-nowrap font-serif text-xs leading-tight text-[#47464b]">
        {ipa}
      </span>
    </div>
  );
}

export function AccentWordPairsSection() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playingKey, setPlayingKey] = useState<WordAudioKey | null>(null);
  const [page, setPage] = useState(0);

  const pageCount = Math.ceil(ACCENT_DISCOVER_WORD_PAIRS.length / ACCENT_DISCOVER_WORD_PAIRS_PAGE_SIZE);

  const visiblePairs = useMemo(() => {
    const start = page * ACCENT_DISCOVER_WORD_PAIRS_PAGE_SIZE;
    return ACCENT_DISCOVER_WORD_PAIRS.slice(start, start + ACCENT_DISCOVER_WORD_PAIRS_PAGE_SIZE);
  }, [page]);

  const stopAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setPlayingKey(null);
  }, []);

  useEffect(() => {
    return () => stopAudio();
  }, [stopAudio]);

  const goToPage = (nextPage: number) => {
    stopAudio();
    setPage(nextPage);
  };

  const toggleWordAudio = (pairId: string, variant: "uk" | "us") => {
    const key: WordAudioKey = `${pairId}-${variant}`;
    const audio = audioRef.current;
    if (!audio) return;

    if (playingKey === key && !audio.paused) {
      stopAudio();
      return;
    }

    stopAudio();
    audio.src = accentDiscoverWordAudioUrl(pairId, variant);
    const play = audio.play();
    if (play) {
      play
        .then(() => setPlayingKey(key))
        .catch(() => setPlayingKey(null));
    }
  };

  return (
    <section className="mb-16 md:mb-20">
      <div className="mb-5">
          <SectionLabel>So sánh trực tiếp</SectionLabel>
          <h2 className="mt-1 font-serif text-2xl font-semibold text-[#000001] md:text-[1.75rem]">
            So sánh giữa các cặp từ phổ biến
          </h2>
        </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => goToPage(page - 1)}
          disabled={page <= 0}
          aria-label="Trang cặp từ trước"
          className="inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#E4E4E7] bg-white text-[#4B2876] transition hover:border-[#4B2876]/40 hover:bg-[#faf9fc] disabled:cursor-not-allowed disabled:opacity-35"
        >
          <ChevronLeft className="size-5" aria-hidden />
        </button>

        <div
          className="grid min-w-0 flex-1 grid-cols-2 gap-4 lg:grid-cols-3"
          aria-live="polite"
          aria-label={`Trang ${page + 1} / ${pageCount}`}
        >
          {visiblePairs.map((pair) => (
            <article
              key={pair.id}
              className="rounded-2xl border border-[#E4E4E7] bg-white p-4 md:p-5"
            >
              <h3 className="font-serif text-lg font-semibold text-[#000001]">{pair.word}</h3>
              <div className="mt-3 grid grid-cols-2 gap-x-2 gap-y-2">
                <IpaSpeakerButton
                  pairId={pair.id}
                  variant="uk"
                  label={`${pair.word} UK`}
                  ipa={pair.ukIpa}
                  isPlaying={playingKey === `${pair.id}-uk`}
                  onToggle={() => toggleWordAudio(pair.id, "uk")}
                />
                <IpaSpeakerButton
                  pairId={pair.id}
                  variant="us"
                  label={`${pair.word} US`}
                  ipa={pair.usIpa}
                  isPlaying={playingKey === `${pair.id}-us`}
                  onToggle={() => toggleWordAudio(pair.id, "us")}
                />
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goToPage(page + 1)}
          disabled={page >= pageCount - 1}
          aria-label="Trang cặp từ sau"
          className="inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#E4E4E7] bg-white text-[#4B2876] transition hover:border-[#4B2876]/40 hover:bg-[#faf9fc] disabled:cursor-not-allowed disabled:opacity-35"
        >
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>

      <p className="mt-4 text-center text-xs text-[#616365]">
        {page + 1} / {pageCount}
      </p>

      <audio
        ref={audioRef}
        preload="none"
        onEnded={() => setPlayingKey(null)}
        className="sr-only"
        aria-hidden
      >
        <track kind="captions" />
      </audio>
    </section>
  );
}
