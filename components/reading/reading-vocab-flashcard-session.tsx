"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { ArrowLeft } from "lucide-react";
import {
  STUDY_FLASHCARD_SECTION_GAP,
  STUDY_FLASHCARD_SHELL_EDGE_Y,
  StudyFlipCard,
  StudyRatingButton,
} from "@/components/study-flashcard-ui";
import type { PassageVocabItem } from "@/lib/reading/passage-vocabulary";

type ReadingVocabFlashcardSessionProps = {
  articleId: string;
  articleTitle: string;
  backHref: string;
  vocabItems: PassageVocabItem[];
  isLoggedIn: boolean;
};

export function ReadingVocabFlashcardSession({
  articleId,
  articleTitle,
  backHref,
  vocabItems,
  isLoggedIn,
}: ReadingVocabFlashcardSessionProps) {
  const cards = vocabItems;
  const [index, setIndex] = useState(0);
  const [cardKey, setCardKey] = useState(0);
  const [done, setDone] = useState(false);
  const [ratings, setRatings] = useState<Record<string, "hard" | "ok" | "easy">>({});

  const current = cards[index];
  const total = cards.length;

  const trackComplete = useCallback(() => {
    if (isLoggedIn) {
      void fetch("/api/reading/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ articleKey: articleId, progress: 1, vocabFlashcards: true }),
      });
    }
  }, [articleId, isLoggedIn]);

  const handleRate = (rating: "hard" | "ok" | "easy") => {
    if (!current) return;
    setRatings((prev) => ({ ...prev, [current.term]: rating }));
    if (index + 1 >= total) {
      setDone(true);
      trackComplete();
      return;
    }
    setIndex((i) => i + 1);
    setCardKey((k) => k + 1);
  };

  if (total === 0) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-[#f5f5f7] px-5 text-center text-sm text-[#47464b]">
        <div>
          Chưa có từ vựng cho bài này.
          <Link href={backHref} className="mt-4 block font-semibold text-[#4b2876] underline">
            Quay lại bài đọc
          </Link>
        </div>
      </div>
    );
  }

  if (done) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center bg-[#f5f5f7] px-6">
        <p className="max-w-prose text-center text-sm font-medium leading-snug text-[#4b2876] sm:text-[15px]">
          Xong {total} từ! Tiến độ luyện từ đã được ghi nhận.
        </p>
        <Link
          href={backHref}
          className="mt-8 box-border inline-flex h-10 items-center justify-center rounded-lg bg-[#4b2876] px-4 text-sm font-semibold text-white shadow-sm"
        >
          Về bài đọc
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
            Quay lại bài đọc
          </Link>
        </header>

        <div className="mt-2 w-full shrink-0 sm:mt-3">
          <div className="flex w-full flex-col items-center text-center">
            <p className="w-full text-pretty text-sm font-medium leading-snug text-[#4b2876]">
              {articleTitle}
            </p>
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
                  key={`${current?.term}-${cardKey}`}
                  front={current?.term ?? ""}
                  back={current?.definitionVi ?? ""}
                />
              </div>
              <div className="w-full shrink-0 pt-1">
                <p className="mb-2 text-center text-xs font-medium text-ink-muted sm:mb-2.5 sm:text-sm">
                  Bạn nhớ từ này đến mức nào?
                </p>
                <div className="grid w-full grid-cols-3 gap-2 sm:gap-3">
                  <StudyRatingButton
                    title="Khó"
                    subtitle="Ôn lại ngày mai"
                    onPick={() => handleRate("hard")}
                    titleClassName="text-red-600"
                    borderClassName="border-red-500"
                  />
                  <StudyRatingButton
                    title="OK"
                    subtitle="Vài ngày tới"
                    onPick={() => handleRate("ok")}
                    titleClassName="text-orange-600"
                    borderClassName="border-orange-500"
                  />
                  <StudyRatingButton
                    title="Dễ"
                    subtitle="Khoảng một tuần"
                    onPick={() => handleRate("easy")}
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
