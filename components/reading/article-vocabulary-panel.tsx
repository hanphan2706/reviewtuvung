"use client";

import Link from "next/link";
import { Volume2 } from "lucide-react";
import type { PassageVocabItem } from "@/lib/reading/passage-vocabulary";
import { speakEnglish } from "@/lib/reading/speak-english";

type ArticleVocabularyPanelProps = {
  words: PassageVocabItem[];
  flashcardsHref: string;
};

export function ArticleVocabularyPanel({
  words,
  flashcardsHref,
}: ArticleVocabularyPanelProps) {

  if (words.length === 0) {
    return (
      <p className="mt-4 text-sm text-[#47464b]">Chưa có danh sách từ gợi ý cho bài này.</p>
    );
  }

  return (
    <>
      <div className="mt-4 flex flex-col">
        {words.map((w, i) => (
          <div
            key={w.term}
            className={
              i === 0
                ? "pb-5"
                : "border-t border-[#E4E4E7] pt-5 pb-4"
            }
          >
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <p className="font-semibold leading-none text-[#1c1b1c]">{w.term}</p>
                <button
                  type="button"
                  onClick={() => speakEnglish(w.term)}
                  className="inline-flex size-7 shrink-0 items-center justify-center rounded-md text-[#71717A] transition hover:bg-[#f7f3f2] hover:text-[#4b2876]"
                  title="Nghe phát âm"
                  aria-label={`Nghe phát âm ${w.term}`}
                >
                  <Volume2 className="size-[16px]" aria-hidden />
                </button>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#47464b]">{w.definitionVi}</p>
            </div>
          </div>
        ))}
      </div>
      <Link
        href={flashcardsHref}
        className="mt-4 flex w-full items-center justify-center rounded-lg border border-[#1c1b1c] py-3 text-[10px] font-bold uppercase tracking-wider text-[#1c1b1c] transition hover:bg-[#1c1b1c] hover:text-white"
      >
        Luyện tập flashcards
      </Link>
    </>
  );
}
