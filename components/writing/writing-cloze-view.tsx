"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Languages, SkipForward } from "lucide-react";
import { studyHubPageContentClass } from "@/components/study-module/study-hub-shell";
import { useWritingHubAuth } from "@/components/writing/writing-hub-auth";
import { useListeningFlowDictionary } from "@/hooks/use-listening-flow-dictionary";
import { useShuffledDeck } from "@/hooks/use-shuffled-deck";
import type { WritingClozeItem } from "@/lib/writing/writing-cloze-item";
import { WRITING_CLOZE_ITEMS } from "@/lib/writing/writing-cloze-item";
import { recordWritingProgress } from "@/lib/writing/writing-progress-client";

const cardClass = "rounded-lg border border-[#E4E4E7] bg-white shadow-sm";
const secondaryBtnClass =
  "inline-flex items-center gap-2 rounded-lg border border-[#E4E4E7] bg-white px-4 py-2.5 text-sm font-semibold text-[#000001] transition hover:border-[#000001]/25 hover:bg-[#fafafa]";
const primaryBtnClass =
  "inline-flex items-center gap-2 rounded-lg bg-[#000001] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black/90 disabled:opacity-50";

function normalizeClozeAnswer(text: string): string {
  return text.trim().toLowerCase().replace(/\s+/g, " ");
}

function emptyAnswers(count: number): string[] {
  return Array.from({ length: count }, () => "");
}

export function WritingClozeView() {
  const { loggedIn } = useWritingHubAuth();
  const passageRef = useRef<HTMLParagraphElement>(null);
  const deck = useShuffledDeck(WRITING_CLOZE_ITEMS);
  const [index, setIndex] = useState(0);
  const item: WritingClozeItem | null = deck?.[index] ?? null;
  const [answers, setAnswers] = useState<string[]>([]);
  const [showVi, setShowVi] = useState(false);
  const [checked, setChecked] = useState(false);
  const [attemptCorrect, setAttemptCorrect] = useState<boolean[] | null>(null);
  const { popover: dictionaryPopover } = useListeningFlowDictionary(passageRef, {
    enabled: Boolean(item) && checked && !showVi,
    isLoggedIn: loggedIn,
  });

  useEffect(() => {
    if (!item) return;
    setAnswers(emptyAnswers(item.answers.length));
    setShowVi(false);
    setChecked(false);
    setAttemptCorrect(null);
  }, [item?.id]);

  function updateAnswer(blankIndex: number, value: string) {
    if (checked || !item) return;
    setAnswers((prev) => {
      const base = prev.length === item.answers.length ? prev : emptyAnswers(item.answers.length);
      const next = [...base];
      next[blankIndex] = value;
      return next;
    });
  }

  function submitExercise() {
    if (!item || checked) return;
    const current =
      answers.length === item.answers.length ? answers : emptyAnswers(item.answers.length);
    const result = current.map((value, blankIndex) => {
      const expected = item.answers[blankIndex] ?? "";
      return normalizeClozeAnswer(value) === normalizeClozeAnswer(expected);
    });
    const correctCount = result.filter(Boolean).length;
    setAttemptCorrect(result);
    setAnswers([...item.answers]);
    setShowVi(false);
    setChecked(true);
    void recordWritingProgress({
      kind: "skill",
      skill: "cloze",
      itemId: item.id,
      correctCount,
      totalCount: result.length,
    });
  }

  function goNextPassage() {
    if (!deck?.length) return;
    setIndex((current) => (current + 1) % deck.length);
  }

  const passageNodes = useMemo(() => {
    if (!item) return null;
    const parts = item.passageEn.split(/(___+)/g);
    let blankIndex = 0;
    const displayAnswers =
      answers.length === item.answers.length ? answers : emptyAnswers(item.answers.length);
    return parts.map((part, i) => {
      if (!/^___+$/.test(part)) {
        return <span key={`seg-${i}`}>{part}</span>;
      }
      const current = blankIndex;
      blankIndex += 1;
      const isCorrect = attemptCorrect?.[current];
      if (checked) {
        return (
          <span
            key={`${item.id}-blank-${current}`}
            className={isCorrect === false ? "font-semibold text-red-700" : "font-semibold text-emerald-700"}
          >
            {item.answers[current] ?? ""}
          </span>
        );
      }

      return (
        <input
          key={`${item.id}-blank-${current}`}
          type="text"
          value={displayAnswers[current] ?? ""}
          onChange={(event) => updateAnswer(current, event.target.value)}
          aria-label={`Chỗ trống ${current + 1}`}
          className="mx-1 inline-block min-w-[7.5rem] max-w-[12rem] border-0 border-b border-[#000001]/40 bg-transparent px-1 py-0.5 text-center text-[15px] text-[#4b2876] outline-none focus:border-[#4b2876]"
          style={{
            width: `${Math.max(7.5, (displayAnswers[current]?.length ?? 0) * 0.55 + 1.5)}rem`,
          }}
        />
      );
    });
  }, [answers, attemptCorrect, checked, item]);

  return (
    <main className={studyHubPageContentClass}>
      {!item ? (
        <p className="text-sm text-[#47464b]/70">Đang tải đoạn luyện…</p>
      ) : (
        <>
          <section className={`relative overflow-hidden p-5 md:p-7 ${cardClass}`}>
            <div className="absolute inset-y-0 left-0 w-1 bg-[#000001]" aria-hidden />
            <h1 className="font-serif text-2xl font-bold text-[#000001] md:text-[1.75rem]">
              {item.title}
            </h1>

            {showVi ? (
              <p className="mt-6 text-[15px] leading-8 text-[#142238]">{item.passageVi}</p>
            ) : (
              <p ref={passageRef} className={`mt-6 text-[15px] leading-8 text-[#142238] ${checked ? "select-text" : ""}`}>
                {passageNodes}
              </p>
            )}
            {checked && !showVi ? (
              <p className="mt-3 text-xs leading-relaxed text-[#47464b]/70">
                Chọn từ trong đoạn để tra nghĩa và thêm vào deck.
              </p>
            ) : null}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#E4E4E7] pt-5">
              <button
                type="button"
                className={secondaryBtnClass}
                onClick={() => setShowVi((v) => !v)}
              >
                <Languages className="size-4" strokeWidth={1.75} aria-hidden />
                {showVi ? "Bản tiếng Anh" : "Bản dịch tiếng Việt"}
              </button>
              {checked ? (
                <button type="button" className={primaryBtnClass} onClick={goNextPassage}>
                  <SkipForward className="size-4" strokeWidth={1.75} aria-hidden />
                  Đoạn tiếp theo
                </button>
              ) : (
                <button type="button" className={primaryBtnClass} onClick={submitExercise}>
                  Check answers
                </button>
              )}
            </div>
          </section>

          <div className="mt-4 rounded-lg border border-[#E4E4E7] bg-[#fafafa] p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]/60">
              Vocabulary list
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#47464b]">
              Dùng các từ trong danh sách này để điền vào chỗ trống trong đoạn văn.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.vocabularyList.map((word) => (
                <span
                  key={word}
                  className="rounded border border-[#E4E4E7] bg-white px-2.5 py-1 text-xs font-medium text-[#000001]"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
      {dictionaryPopover}
    </main>
  );
}
