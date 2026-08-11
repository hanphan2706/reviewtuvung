"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Plus, Search, Volume2 } from "lucide-react";
import { speakEnglish } from "@/lib/reading/speak-english";
import { htmlToPlainTrim } from "@/lib/sanitize-word-html";
import type { VocabularyWordPreset } from "@/lib/vocabulary/vocabulary-unit-types";

const INITIAL_VISIBLE = 8;

type VocabularyUnitWordListProps = {
  words: readonly VocabularyWordPreset[];
  onAddWord: (word: VocabularyWordPreset) => void;
  addedLemmaSet: ReadonlySet<string>;
};

export function VocabularyUnitWordList({ words, onAddWord, addedLemmaSet }: VocabularyUnitWordListProps) {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [...words];
    return words.filter((w) => {
      const term = htmlToPlainTrim(w.term).toLowerCase();
      const def = htmlToPlainTrim(w.definition).toLowerCase();
      return term.includes(q) || def.includes(q);
    });
  }, [words, query]);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);
  const hiddenCount = Math.max(0, filtered.length - INITIAL_VISIBLE);

  return (
    <div>
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end">
        <label className="relative block w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#47464b]/50" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm trong bộ này..."
            className="h-10 w-full rounded-lg border border-[#E4E4E7] bg-white py-2 pl-9 pr-3 text-sm text-[#000001] outline-none placeholder:text-[#47464b]/50 focus:border-[#4b2876]/40 focus:ring-1 focus:ring-[#4b2876]/15"
          />
        </label>
      </div>

      <ul className="divide-y divide-[#E4E4E7] border-y border-[#E4E4E7]">
        {visible.map((word) => {
          const term = htmlToPlainTrim(word.term);
          const lemma = term.toLowerCase();
          const added = addedLemmaSet.has(lemma);

          return (
            <li key={word.id} className="grid grid-cols-[minmax(0,1.2fr)_auto_minmax(0,1fr)_auto] items-center gap-3 py-4 sm:gap-5">
              <div className="min-w-0">
                <p className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span className="font-serif text-lg font-bold text-[#000001] sm:text-xl">{term}</span>
                  {word.ipa ? (
                    <span className="inline-flex items-center gap-1 font-ipa text-[13px] leading-none tracking-normal text-[#47464b]/70 sm:text-sm">
                      {word.ipa}
                      <button
                        type="button"
                        onClick={() => speakEnglish(term)}
                        className="inline-flex rounded p-0.5 text-[#47464b]/50 transition hover:bg-[#f3f0f8] hover:text-[#4b2876]"
                        title="Nghe phát âm"
                        aria-label={`Nghe phát âm ${term}`}
                      >
                        <Volume2 className="size-3.5" strokeWidth={1.75} />
                      </button>
                    </span>
                  ) : null}
                </p>
              </div>

              {word.partOfSpeech ? (
                <span className="hidden rounded bg-[#ececec] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#47464b] sm:inline-block">
                  {word.partOfSpeech}
                </span>
              ) : (
                <span className="hidden sm:block" />
              )}

              <p className="min-w-0 text-sm leading-relaxed text-[#47464b]">
                {htmlToPlainTrim(word.definition)}
              </p>

              <button
                type="button"
                disabled={added}
                onClick={() => onAddWord(word)}
                className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-[#E4E4E7] bg-white text-[#47464b] transition hover:border-[#4b2876]/30 hover:text-[#4b2876] disabled:cursor-default disabled:opacity-35"
                aria-label={added ? "Đã có trong deck" : `Thêm ${term}`}
              >
                <Plus className="size-3.5" strokeWidth={1.75} />
              </button>
            </li>
          );
        })}
      </ul>

      {!showAll && hiddenCount > 0 ? (
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="mx-auto mt-6 flex flex-col items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#47464b] hover:text-[#4b2876]"
        >
          Xem thêm {hiddenCount} từ khác
          <ChevronDown className="size-4" strokeWidth={2} />
        </button>
      ) : null}
    </div>
  );
}
