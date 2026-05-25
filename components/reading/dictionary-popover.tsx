"use client";

import Link from "next/link";
import { useCallback, useRef } from "react";
import { BookOpen, Loader2, Volume2, X } from "lucide-react";
import type { SelectionAnchor } from "@/components/reading/use-article-text-selection";
import type { LookupPronunciation, ReadingLookupResult } from "@/lib/reading/lookup-types";

type DictionaryPopoverProps = {
  anchor: SelectionAnchor | null;
  lookup: ReadingLookupResult | null;
  loading: boolean;
  addWordHref: string | null;
  onClose: () => void;
};

function PronunciationButton({ label, data }: { label: string; data: LookupPronunciation }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = useCallback(() => {
    if (!data.audioUrl) return;
    if (!audioRef.current) audioRef.current = new Audio(data.audioUrl);
    audioRef.current.currentTime = 0;
    void audioRef.current.play().catch(() => undefined);
  }, [data.audioUrl]);

  if (!data.ipa && !data.audioUrl) return null;

  const Root = "di" + "v" as "div";

  return (
    <Root className="flex items-center gap-2 text-sm text-[#47464b]">
      <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717A]">{label}</span>
      {data.audioUrl ? (
        <button
          type="button"
          onClick={play}
          className="inline-flex size-7 items-center justify-center rounded-md text-[#47464b] hover:bg-zinc-100"
          aria-label={`Phát âm ${label}`}
        >
          <Volume2 className="size-4" aria-hidden />
        </button>
      ) : null}
      {data.ipa ? <span className="font-mono text-xs text-[#47464b]">{data.ipa}</span> : null}
    </Root>
  );
}

function sourceLabel(source: string): string {
  if (source.includes("FreeDictionary")) return "Free Dictionary + MyMemory";
  if (source === "MyMemory") return "MyMemory";
  return source;
}

export function DictionaryPopover({
  anchor,
  lookup,
  loading,
  addWordHref,
  onClose,
}: DictionaryPopoverProps) {
  if (!anchor || !lookup) return null;

  const pad = 12;
  const maxW = 380;
  const left = Math.min(
    Math.max(pad, anchor.rect.left + anchor.rect.width / 2 - maxW / 2),
    window.innerWidth - maxW - pad,
  );
  const top = anchor.rect.bottom + 8;
  const flipAbove = top + 320 > window.innerHeight;
  const styleTop = flipAbove ? anchor.rect.top - 8 : top;

  const { pronunciation, senses, paraphrases, phraseGlossVi, error, kind, source } = lookup;
  const showPronunciation = kind === "word" && pronunciation && (pronunciation.us || pronunciation.uk);
  const Root = "di" + "v" as "div";

  return (
    <Root
      aria-label="Từ điển"
      className="fixed z-[100] w-[min(380px,calc(100vw-24px))] overflow-hidden rounded-xl border border-[#E4E4E7] bg-white shadow-[0_8px_30px_rgb(0_0_0/0.12)]"
      style={{
        left,
        top: styleTop,
        transform: flipAbove ? "translateY(-100%)" : undefined,
      }}
    >
      <Root className="flex items-start justify-between gap-2 border-b border-[#f1eded] px-4 py-3">
        <Root className="min-w-0 flex-1">
          <Root className="flex flex-wrap items-center gap-2">
            <p className="font-serif text-lg font-semibold capitalize text-[#1c1b1c]">{lookup.query}</p>
            <span className="rounded-full bg-[#ebebeb] px-2 py-0.5 text-[9px] font-medium uppercase tracking-wide text-[#47464b]">
              Tra nhanh
            </span>
          </Root>
        </Root>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-md text-[#47464b] hover:bg-zinc-100"
          aria-label="Đóng"
        >
          <X className="size-4" aria-hidden />
        </button>
      </Root>

      <Root className="max-h-[min(420px,55vh)] overflow-y-auto px-4 py-3">
        {loading ? (
          <p className="flex items-center gap-2 text-sm text-[#47464b]">
            <Loader2 className="size-4 animate-spin" aria-hidden />
            Đang tra…
          </p>
        ) : error ? (
          <p className="text-sm text-[#47464b]">{error}</p>
        ) : (
          <>
            {showPronunciation ? (
              <Root className="mb-4 flex flex-wrap gap-4 border-b border-[#f1eded] pb-3">
                {pronunciation?.us ? <PronunciationButton label="US" data={pronunciation.us} /> : null}
                {pronunciation?.uk ? <PronunciationButton label="UK" data={pronunciation.uk} /> : null}
              </Root>
            ) : null}

            {kind === "phrase" && phraseGlossVi ? (
              <Root className="rounded-lg bg-[#f7f3f2] px-3 py-3">
                <p className="text-sm font-medium leading-relaxed text-[#1c1b1c]">{phraseGlossVi}</p>
              </Root>
            ) : null}

            {senses.length > 0 ? (
              <Root className="space-y-4">
                {senses.map((sense) => (
                  <Root key={`${sense.partOfSpeech}-${sense.definitionEn.slice(0, 40)}`} className="border-b border-[#f1eded] pb-4 last:border-0 last:pb-0">
                    <p className="text-xs font-medium lowercase text-[#c45c26]">{sense.partOfSpeech}</p>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-[#1c1b1c]">{sense.glossVi}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#47464b]">{sense.definitionEn}</p>
                    {sense.examples.map((ex) => (
                      <Root key={ex.en} className="mt-2 rounded-md bg-[#fafafa] px-3 py-2 text-sm">
                        <p className="italic text-[#47464b]">&ldquo;{ex.en}&rdquo;</p>
                        {ex.vi ? <p className="mt-1 text-[#1c1b1c]">{ex.vi}</p> : null}
                      </Root>
                    ))}
                  </Root>
                ))}
              </Root>
            ) : null}

            {paraphrases.length > 0 ? (
              <Root className="mt-4 border-t border-[#f1eded] pt-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#71717A]">Diễn đạt khác</p>
                <ul className="mt-2 space-y-2">
                  {paraphrases.map((p) => (
                    <li key={p.en} className="text-sm leading-relaxed text-[#47464b]">
                      <span className="text-[#1c1b1c]">{p.en}</span>
                      {p.vi ? <span className="mt-0.5 block text-[#47464b]">{p.vi}</span> : null}
                    </li>
                  ))}
                </ul>
              </Root>
            ) : null}
          </>
        )}
        {source && !loading ? (
          <p className="mt-3 text-[10px] text-[#71717A]">{sourceLabel(source)}</p>
        ) : null}
      </Root>

      {addWordHref ? (
        <Root className="border-t border-[#f1eded] px-4 py-3">
          <Link
            href={addWordHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1c1b1c] px-3 py-2.5 text-xs font-semibold text-white hover:bg-black/90"
          >
            <BookOpen className="size-3.5" aria-hidden />
            Thêm vào deck
          </Link>
        </Root>
      ) : null}
    </Root>
  );
}
