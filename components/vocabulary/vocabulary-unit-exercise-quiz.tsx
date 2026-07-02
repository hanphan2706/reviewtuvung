"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useListeningFlowDictionary } from "@/hooks/use-listening-flow-dictionary";
import type { VocabularyExercise } from "@/lib/vocabulary/vocabulary-unit-types";

const ANSWER_REVEAL_MS = 3000;

type QuizExercise = Extract<VocabularyExercise, { type: "fill-blank" } | { type: "mcq" }>;

function isQuizExercise(ex: VocabularyExercise): ex is QuizExercise {
  return ex.type === "fill-blank" || ex.type === "mcq";
}

function getExerciseOptions(ex: QuizExercise): { key: string; label: string }[] {
  if (ex.type === "mcq") return [...ex.options];
  if (ex.options && ex.options.length > 0) return [...ex.options];
  return [{ key: "a", label: ex.answer }];
}

function getCorrectKey(ex: QuizExercise): string {
  if (ex.correctKey) return ex.correctKey;
  if (ex.type === "mcq") return ex.correctKey;
  const opts = getExerciseOptions(ex);
  const match = opts.find((o) => o.label.toLowerCase() === ex.answer.toLowerCase());
  return match?.key ?? "a";
}

function getPrompt(ex: QuizExercise): string {
  if (ex.type === "mcq") return ex.question;
  return ex.prompt.replace(/___+/g, "________");
}

function formatExerciseLabel(raw: string | undefined, type: QuizExercise["type"]): string {
  const stripped = (raw ?? "").replace(/^10\.\d+\s*·\s*/, "").trim();
  if (stripped) return stripped;
  return type === "mcq" ? "Chọn a, b hoặc c" : "Hoàn thành câu";
}

type VocabularyUnitExerciseQuizProps = {
  exercises: readonly VocabularyExercise[];
  completed: Record<string, boolean>;
  onComplete: (exerciseId: string) => void;
};

export function VocabularyUnitExerciseQuiz({
  exercises,
  completed,
  onComplete,
}: VocabularyUnitExerciseQuizProps) {
  const quizRef = useRef<HTMLDivElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { popover: dictionaryPopover } = useListeningFlowDictionary(quizRef, {
    enabled: true,
    isLoggedIn,
  });

  const quizItems = useMemo(() => exercises.filter(isQuizExercise), [exercises]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const advanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = quizItems.length;
  const current = quizItems[index];
  const completedCount = useMemo(
    () => quizItems.filter((ex) => completed[ex.id]).length,
    [quizItems, completed],
  );
  const progressPct = total > 0 ? Math.round((completedCount / total) * 100) : 0;

  useEffect(() => {
    let cancelled = false;
    void fetch("/api/auth/me", { credentials: "include", cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { loggedIn?: boolean } | null) => {
        if (!cancelled) setIsLoggedIn(Boolean(data?.loggedIn));
      })
      .catch(() => {
        if (!cancelled) setIsLoggedIn(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    setSelected(null);
    setChecked(false);
    setResult(null);
  }, [index]);

  useEffect(() => {
    return () => {
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    };
  }, []);

  if (!current || total === 0) {
    return (
      <p className="text-sm text-[#47464b]">Chưa có bài tập trắc nghiệm cho bộ này.</p>
    );
  }

  const options = getExerciseOptions(current);
  const correctKey = getCorrectKey(current);
  const label = formatExerciseLabel(current.label, current.type);

  const handleCheck = () => {
    if (!selected || checked) return;
    const ok = selected === correctKey;
    setChecked(true);
    setResult(ok ? "correct" : "wrong");
    if (ok) onComplete(current.id);

    advanceTimerRef.current = setTimeout(() => {
      if (index < total - 1) {
        setIndex((i) => i + 1);
      }
    }, ANSWER_REVEAL_MS);
  };

  const handleSkip = () => {
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    setIndex((i) => Math.min(total - 1, i + 1));
  };

  return (
    <div ref={quizRef} className="max-w-3xl select-text">
      <p className="mb-4 text-xs text-[#47464b]/70">Bôi đen từ hoặc cụm từ để tra nghĩa.</p>

      <div className="mb-8 flex items-end justify-between gap-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#47464b]">
          Câu hỏi {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
        <p className="text-sm font-bold tabular-nums text-[#000001]">{progressPct}% Hoàn thành</p>
      </div>
      <div className="mb-8 h-1 overflow-hidden rounded-full bg-[#E4E4E7]">
        <div
          className="h-full rounded-full bg-[#0a0a0a] transition-all duration-300"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <div className="rounded-xl border border-[#E4E4E7] bg-white px-5 py-6 md:px-8 md:py-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]/60">{label}</p>
        <p className="mt-4 font-serif text-xl italic leading-relaxed text-[#000001] md:text-2xl">
          {getPrompt(current)}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {options.map((opt) => {
          const isSelected = selected === opt.key;
          const isCorrect = opt.key === correctKey;
          const showCorrect = checked && isCorrect;
          const showWrong = checked && isSelected && !isCorrect;
          return (
            <button
              key={opt.key}
              type="button"
              disabled={checked}
              onClick={() => !checked && setSelected(opt.key)}
              className={`rounded-xl border px-4 py-5 text-left transition select-text ${
                isSelected && !checked
                  ? "border-[#0a0a0a]/25 bg-[#fafafa]"
                  : "border-[#E4E4E7] bg-white hover:border-[#0a0a0a]/15"
              } ${showCorrect ? "border-emerald-400 bg-emerald-50" : ""} ${showWrong ? "border-red-300 bg-red-50" : ""}`}
            >
              <span className="text-[11px] font-bold uppercase text-[#47464b]">{opt.key}.</span>
              <span className="mt-2 block font-serif text-lg font-bold text-[#000001] md:text-xl">
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>

      {checked && result === "wrong" && current.type === "mcq" && current.explanation ? (
        <p className="mt-4 text-sm text-red-600">{current.explanation}</p>
      ) : null}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={handleSkip}
          className="inline-flex h-11 items-center justify-center rounded-xl border border-[#E4E4E7] bg-white px-5 text-[11px] font-bold uppercase tracking-wide text-[#47464b] hover:border-[#0a0a0a]/15"
        >
          Bỏ qua câu này
        </button>
        <button
          type="button"
          onClick={handleCheck}
          disabled={!selected || checked}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-[#0a0a0a] px-6 text-[11px] font-bold uppercase tracking-wide text-white hover:bg-[#1a1a1a] disabled:opacity-40"
        >
          Kiểm tra đáp án
        </button>
      </div>

      {dictionaryPopover}
    </div>
  );
}
