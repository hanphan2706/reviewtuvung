"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import {
  STUDY_FLASHCARD_SECTION_GAP,
  STUDY_FLASHCARD_SHELL_EDGE_Y,
  StudyFlipCard,
  StudyRatingButton,
} from "@/components/study-flashcard-ui";
import { htmlToPlainTrim } from "@/lib/sanitize-word-html";
import { resolveWordIpa } from "@/lib/vocabulary/ipa/vocabulary-ipa-lookup";
import { curatedUnitHref } from "@/lib/vocabulary/vocabulary-unit-registry";
import type { VocabularyUnit, VocabularyWordPreset } from "@/lib/vocabulary/vocabulary-unit-types";

function cardBack(word: VocabularyWordPreset): string {
  const definition = htmlToPlainTrim(word.definition);
  const example = word.example ? htmlToPlainTrim(word.example) : "";
  if (definition && example) return `${definition}\n\n${example}`;
  return definition || example;
}

type VocabularyUnitFlashcardSessionProps = {
  unit: VocabularyUnit;
};

export function VocabularyUnitFlashcardSession({ unit }: VocabularyUnitFlashcardSessionProps) {
  const cards = unit.words;
  const backHref = curatedUnitHref(unit.id);
  const [index, setIndex] = useState(0);
  const [cardKey, setCardKey] = useState(0);
  const [done, setDone] = useState(false);

  const current = cards[index];
  const total = cards.length;
  const term = current ? htmlToPlainTrim(current.term) : "";
  const ipa = current ? resolveWordIpa(term, current.ipa) : undefined;

  const handleRate = () => {
    if (!current) return;
    if (index + 1 >= total) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setCardKey((k) => k + 1);
  };

  if (total === 0) {
    return (
      <div className="flex h-dvh items-center justify-center bg-[#f5f5f7] px-5 text-center text-sm text-[#47464b]">
        <div>
          Bộ này chưa có từ để ôn.
          <Link href={backHref} className="mt-4 block font-semibold text-[#4b2876] underline">
            Quay lại bộ từ
          </Link>
        </div>
      </div>
    );
  }

  if (done) {
    return (
      <div className="flex h-dvh flex-col items-center justify-center bg-[#f5f5f7] px-6">
        <p className="max-w-prose text-center text-sm font-medium leading-snug text-[#4b2876] sm:text-[15px]">
          Xong {total} từ trong «{unit.title}»!
        </p>
        <Link
          href={backHref}
          className="mt-8 box-border inline-flex h-10 items-center justify-center rounded-lg bg-[#4b2876] px-4 text-sm font-semibold text-white shadow-sm"
        >
          Về bộ từ
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`flex h-dvh max-h-dvh w-full flex-col overflow-hidden bg-[#f5f5f7] px-5 ${STUDY_FLASHCARD_SHELL_EDGE_Y}`}
    >
      <div className="mx-auto flex min-h-0 w-full max-w-md flex-1 flex-col">
        <header className="w-full shrink-0">
          <Link
            href={backHref}
            className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-xl px-2 py-1.5 text-sm font-medium text-ink-muted"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2} />
            Quay lại bộ từ
          </Link>
        </header>

        <div className="mt-2 w-full shrink-0 sm:mt-3">
          <div className="flex w-full flex-col items-center text-center">
            <p className="w-full text-pretty text-sm font-medium leading-snug text-[#4b2876]">{unit.title}</p>
            <p className="mt-1 w-full text-xs tabular-nums text-ink-muted sm:text-sm">
              Thẻ {index + 1} / {total}
            </p>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden scroll-py-4">
            <div
              className={`mx-auto flex min-h-full w-full max-w-md flex-1 flex-col justify-center py-3 sm:py-5 ${STUDY_FLASHCARD_SECTION_GAP}`}
            >
              <div className="w-full shrink-0">
                <StudyFlipCard
                  key={`${current?.id}-${cardKey}`}
                  front={term}
                  frontSub={ipa}
                  back={current ? cardBack(current) : ""}
                />
              </div>
              <div className="w-full shrink-0 pt-1">
                <p className="mb-2 text-center text-xs font-medium text-ink-muted sm:mb-2.5 sm:text-sm">
                  Bạn nhớ từ này đến mức nào?
                </p>
                <div className="grid w-full grid-cols-3 gap-2 sm:gap-3">
                  <StudyRatingButton
                    title="Khó"
                    subtitle="Xem lại thêm"
                    onPick={handleRate}
                    titleClassName="text-red-600"
                    borderClassName="border-red-500"
                  />
                  <StudyRatingButton
                    title="OK"
                    subtitle="Tạm ổn"
                    onPick={handleRate}
                    titleClassName="text-orange-600"
                    borderClassName="border-orange-500"
                  />
                  <StudyRatingButton
                    title="Dễ"
                    subtitle="Nhớ tốt"
                    onPick={handleRate}
                    titleClassName="text-emerald-700"
                    borderClassName="border-emerald-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
