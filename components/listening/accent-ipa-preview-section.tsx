"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ACCENT_IPA_PREVIEW_CONSONANT_ROWS,
  ACCENT_IPA_PREVIEW_VOWEL_ROWS,
  type IpaPreviewSymbol,
} from "@/lib/listening/accent-explore-content";
import { americanIpaPhonemeAudioUrl } from "@/lib/listening/american-ipa-chart";

type IpaSymbolCardProps = {
  item: IpaPreviewSymbol;
  isPlaying: boolean;
  onPlay: (item: IpaPreviewSymbol) => void;
};

function IpaSymbolCard({ item, isPlaying, onPlay }: IpaSymbolCardProps) {
  const isVowel = item.kind === "vowel";
  return (
    <button
      type="button"
      onClick={() => onPlay(item)}
      aria-label={`Nghe âm /${item.symbol}/ như trong từ ${item.example}`}
      aria-pressed={isPlaying}
      className={`flex min-w-[4.5rem] flex-1 cursor-pointer flex-col items-center justify-center rounded-lg border px-2 py-3 text-center transition ${
        isVowel
          ? "border-[#e8e0f4] bg-[#f7f4fc] hover:border-[#c9b8e8] hover:bg-[#f0ebf8]"
          : "border-[#f0e0eb] bg-[#fdf6fa] hover:border-[#e8b8d4] hover:bg-[#fbf0f5]"
      } ${isPlaying ? "ring-2 ring-[#4B2876]/45 ring-offset-1" : ""}`}
    >
      <span className="font-serif text-xl font-semibold text-[#000001] md:text-2xl">
        /{item.symbol}/
      </span>
      <span className="mt-1 text-[11px] text-[#616365]">{item.example}</span>
    </button>
  );
}

export function AccentIpaPreviewSection() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playingSymbol, setPlayingSymbol] = useState<string | null>(null);

  const stopAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setPlayingSymbol(null);
  }, []);

  const playSymbol = useCallback(
    (item: IpaPreviewSymbol) => {
      const audio = audioRef.current;
      if (!audio) return;

      if (playingSymbol === item.symbol && !audio.paused) {
        stopAudio();
        return;
      }

      stopAudio();
      audio.src = americanIpaPhonemeAudioUrl(item.audioSlug);
      const play = audio.play();
      if (play) {
        play
          .then(() => setPlayingSymbol(item.symbol))
          .catch(() => setPlayingSymbol(null));
      }
    },
    [playingSymbol, stopAudio],
  );

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;
    audio.addEventListener("ended", () => setPlayingSymbol(null));
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const renderSymbolRow = (row: readonly IpaPreviewSymbol[], rowKey: string) => (
    <div key={rowKey} className="flex flex-wrap gap-2">
      {row.map((item) => (
        <IpaSymbolCard
          key={`${rowKey}-${item.symbol}`}
          item={item}
          isPlaying={playingSymbol === item.symbol}
          onPlay={playSymbol}
        />
      ))}
    </div>
  );

  return (
    <section className="mb-10">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#4B2876]">
            Học thuật
          </p>
          <h2 className="mt-1 font-serif text-2xl font-semibold text-[#000001] md:text-[1.75rem]">
            Bảng âm IPA
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs text-[#616365]">
          <span className="inline-flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#c9b8e8]" aria-hidden />
            Vowels
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#e8b8d4]" aria-hidden />
            Consonants
          </span>
        </div>
      </div>

      <div className="rounded-2xl border border-[#E4E4E7] bg-white p-5 md:p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#616365]">
          Nguyên âm &amp; nhị biến âm
        </p>
        <div className="mt-3 space-y-2">
          {ACCENT_IPA_PREVIEW_VOWEL_ROWS.map((row, index) =>
            renderSymbolRow(row, `vowel-row-${index}`),
          )}
        </div>

        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.14em] text-[#616365]">
          Phụ âm
        </p>
        <div className="mt-3 space-y-2">
          {ACCENT_IPA_PREVIEW_CONSONANT_ROWS.map((row, index) =>
            renderSymbolRow(row, `consonant-row-${index}`),
          )}
        </div>

        <p className="mt-6 text-sm text-[#47464b]">Bấm từng ô để nghe âm mẫu.</p>
      </div>
    </section>
  );
}
