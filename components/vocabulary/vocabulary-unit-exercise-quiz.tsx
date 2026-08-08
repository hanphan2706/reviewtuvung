"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useListeningFlowDictionary } from "@/hooks/use-listening-flow-dictionary";
import { ExerciseChoiceBank } from "@/components/study-module/exercise-choice-bank";
import type { VocabularyExercise } from "@/lib/vocabulary/vocabulary-unit-types";

const ANSWER_REVEAL_MS = 3000;

const fieldClass =
  "mt-4 w-full rounded-xl border border-[#E4E4E7] bg-white px-4 py-3 font-serif text-lg text-[#000001] outline-none placeholder:text-[#616365]/60 focus:border-[#0a0a0a]/25 focus:ring-1 focus:ring-[#0a0a0a]/10";

type QuizExercise = VocabularyExercise;

function isQuizExercise(ex: VocabularyExercise): ex is QuizExercise {
  return ex.type === "fill-blank" || ex.type === "mcq" || ex.type === "match";
}

function isTypedFillBlank(ex: Extract<VocabularyExercise, { type: "fill-blank" }>): boolean {
  return !ex.options || ex.options.length === 0;
}

function normalizeAnswer(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[’‘‛]/g, "'")
    .replace(/[.?!…]+$/g, "")
    .replace(/\s+/g, " ");
}

function isFillBlankCorrect(
  ex: Extract<VocabularyExercise, { type: "fill-blank" }>,
  value: string,
): boolean {
  const normalized = normalizeAnswer(value);
  if (!normalized) return false;
  const accepted = [ex.answer, ...(ex.alternatives ?? [])].map((a) => normalizeAnswer(a));
  return accepted.includes(normalized);
}

function getAcceptedAnswers(
  ex: Extract<VocabularyExercise, { type: "fill-blank" }>,
): string[] {
  const seen = new Set<string>();
  const ordered: string[] = [];
  for (const raw of [ex.answer, ...(ex.alternatives ?? [])]) {
    const key = normalizeAnswer(raw);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    ordered.push(raw.trim());
  }
  return ordered;
}

function getExerciseOptions(ex: Extract<VocabularyExercise, { type: "fill-blank" | "mcq" }>): {
  key: string;
  label: string;
}[] {
  if (ex.type === "mcq") return [...ex.options];
  if (ex.options && ex.options.length > 0) return [...ex.options];
  return [{ key: "a", label: ex.answer }];
}

function getCorrectKey(ex: Extract<VocabularyExercise, { type: "fill-blank" | "mcq" }>): string {
  if (ex.correctKey) return ex.correctKey;
  if (ex.type === "mcq") return ex.correctKey;
  const opts = getExerciseOptions(ex);
  const match = opts.find((o) => o.label.toLowerCase() === ex.answer.toLowerCase());
  return match?.key ?? "a";
}

function getPrompt(ex: QuizExercise): string {
  if (ex.type === "match") {
    return stripExerciseLabelPrefix(ex.instruction);
  }
  const raw = ex.type === "mcq" ? ex.question : ex.prompt;
  const normalized = raw.replace(/___+/g, "________");
  return stripRedundantInstruction(normalized, ex.label, ex.type);
}

function getPromptVi(ex: QuizExercise): string | undefined {
  const vi = ex.promptVi?.trim();
  return vi || undefined;
}

const CONTENT_ONLY_LABELS = new Set([
  "Điền từ vào chỗ trống",
  "Hoàn thành câu",
  "Chọn từ thích hợp",
  "Chọn từ theo nghĩa",
  "Chọn câu đúng",
]);

/** Strip book subsection (e.g. "16.2 ·", "4.2 •", "3 ·") from exercise titles/prompts. */
const EXERCISE_LABEL_PREFIX_RE = /^\d+(?:\.\d+)?\s*[·•.\-–—]\s*/;

function stripExerciseLabelPrefix(label: string | undefined): string {
  return (label ?? "").replace(EXERCISE_LABEL_PREFIX_RE, "").trim();
}

function stripRedundantInstruction(
  text: string,
  label: string | undefined,
  type: QuizExercise["type"],
): string {
  const normalizedLabel = stripExerciseLabelPrefix(label);
  if (!CONTENT_ONLY_LABELS.has(normalizedLabel)) return text;
  if (type === "fill-blank") return text;

  return text
    .replace(/^Which word best fits this context\?\s*/i, "")
    .replace(/^Choose the best word:\s*/i, "")
    .replace(/^Choose the best word to complete:\s*/i, "")
    .replace(/^Which sentence uses ".+?" correctly\?\s*/i, "")
    .trim();
}

function formatExerciseLabel(raw: string | undefined, type: QuizExercise["type"]): string {
  const stripped = stripExerciseLabelPrefix(raw);
  if (stripped) return stripped;
  if (type === "match") return "Ghép cặp";
  return type === "mcq" ? "Chọn a, b hoặc c" : "Hoàn thành câu";
}

type VocabularyUnitExerciseQuizProps = {
  exercises: readonly VocabularyExercise[];
  completed: Record<string, boolean>;
  onComplete: (exerciseId: string) => void;
  /** Clear progress and restart from question 1. */
  onReset?: () => void;
  /** When true, wait for "Câu tiếp theo" instead of auto-advancing after check. */
  manualAdvance?: boolean;
};

export function VocabularyUnitExerciseQuiz({
  exercises,
  completed,
  onComplete,
  onReset,
  manualAdvance = false,
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
  const [typedValue, setTypedValue] = useState("");
  const [matchLeft, setMatchLeft] = useState<string | null>(null);
  const [matched, setMatched] = useState<Record<string, string>>({});
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
  const allDone = total > 0 && completedCount >= total;

  const isTyped = current?.type === "fill-blank" && isTypedFillBlank(current);
  const isMatch = current?.type === "match";
  const allMatched =
    isMatch && current.pairs.every((p) => matched[p.left] === p.right);
  const remainingRights =
    isMatch && current
      ? current.pairs.map((p) => p.right).filter((r) => !Object.values(matched).includes(r))
      : [];

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

  const resetStep = () => {
    setSelected(null);
    setTypedValue("");
    setMatchLeft(null);
    setMatched({});
    setChecked(false);
    setResult(null);
  };

  const goToIndex = (next: number) => {
    resetStep();
    setIndex(next);
  };

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

  const label = formatExerciseLabel(
    current.type === "match" ? current.instruction : current.label,
    current.type,
  );

  const handleCheck = () => {
    if (checked) return;

    let ok = false;

    if (current.type === "fill-blank" && isTypedFillBlank(current)) {
      if (!typedValue.trim()) return;
      ok = isFillBlankCorrect(current, typedValue);
    } else if (current.type === "match") {
      if (!allMatched) return;
      ok = true;
    } else {
      if (!selected) return;
      const correctKey = getCorrectKey(current);
      ok = selected === correctKey;
    }

    setChecked(true);
    setResult(ok ? "correct" : "wrong");
    if (ok) onComplete(current.id);

    if (!manualAdvance) {
      advanceTimerRef.current = setTimeout(() => {
        if (index < total - 1) {
          goToIndex(index + 1);
        }
      }, ANSWER_REVEAL_MS);
    }
  };

  const handleSkip = () => {
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    goToIndex(Math.min(total - 1, index + 1));
  };

  const handleContinue = () => {
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    if (index < total - 1) {
      goToIndex(index + 1);
    }
  };

  const canCheck =
    !checked &&
    (isMatch
      ? allMatched
      : isTyped
        ? Boolean(typedValue.trim())
        : Boolean(selected));

  const options =
    current.type === "mcq" || (current.type === "fill-blank" && !isTyped)
      ? getExerciseOptions(current)
      : [];
  const correctKey =
    current.type === "mcq" || (current.type === "fill-blank" && !isTyped)
      ? getCorrectKey(current)
      : null;

  return (
    <div ref={quizRef} className="max-w-3xl select-text">
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
        {getPromptVi(current) ? (
          <p className="mt-2 text-sm leading-relaxed text-[#47464b]/80">{getPromptVi(current)}</p>
        ) : null}
        {current.type === "fill-blank" && current.hint && !checked ? (
          <p className="mt-2 text-sm text-[#47464b]/70">{current.hint}</p>
        ) : null}
        {current.type === "fill-blank" && current.choiceBank && current.choiceBank.length > 0 ? (
          <ExerciseChoiceBank words={current.choiceBank} />
        ) : null}
        {isTyped ? (
          <input
            className={fieldClass}
            value={typedValue}
            onChange={(e) => setTypedValue(e.target.value)}
            disabled={checked}
            placeholder="Gõ đáp án..."
            autoComplete="off"
            spellCheck={false}
            onKeyDown={(e) => {
              if (e.key === "Enter" && canCheck) handleCheck();
            }}
          />
        ) : null}
      </div>

      {isMatch ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            {current.pairs.map((p) => {
              const done = matched[p.left];
              return (
                <button
                  key={p.left}
                  type="button"
                  disabled={checked || Boolean(done)}
                  onClick={() => setMatchLeft(p.left)}
                  className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${
                    done
                      ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                      : matchLeft === p.left
                        ? "border-[#0a0a0a]/25 bg-[#fafafa]"
                        : "border-[#E4E4E7] bg-white hover:border-[#0a0a0a]/15"
                  }`}
                >
                  <span className="font-serif text-base font-semibold text-[#000001]">{p.left}</span>
                  {done ? <span className="mt-1 block text-[#47464b]">→ {done}</span> : null}
                </button>
              );
            })}
          </div>
          <div className="space-y-2">
            {remainingRights.map((right) => (
              <button
                key={right}
                type="button"
                disabled={checked || !matchLeft}
                onClick={() => {
                  if (!matchLeft) return;
                  const pair = current.pairs.find((p) => p.left === matchLeft);
                  if (pair?.right === right) {
                    setMatched((m) => ({ ...m, [matchLeft]: right }));
                  }
                  setMatchLeft(null);
                }}
                className="w-full rounded-xl border border-[#E4E4E7] bg-white px-4 py-3 text-left text-sm hover:border-[#0a0a0a]/15"
              >
                {right}
              </button>
            ))}
          </div>
        </div>
      ) : !isTyped ? (
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
      ) : null}

      {checked && isTyped && current.type === "fill-blank" ? (
        <div
          className={`mt-4 space-y-2 rounded-xl border px-4 py-3 text-sm leading-relaxed ${
            result === "correct"
              ? "border-emerald-200 bg-emerald-50 text-emerald-900"
              : "border-red-200 bg-red-50 text-red-900"
          }`}
        >
          <p className="font-semibold">
            {result === "correct" ? "Đúng rồi!" : "Chưa đúng."}
          </p>
          {result === "wrong" ? (
            <p>
              Đáp án gợi ý: <span className="font-semibold">{current.answer}</span>
            </p>
          ) : null}
          {result === "wrong" && getAcceptedAnswers(current).length > 1 ? (
            <p className="text-[13px] opacity-90">
              Cũng chấp nhận:{" "}
              {getAcceptedAnswers(current)
                .filter((a) => normalizeAnswer(a) !== normalizeAnswer(current.answer))
                .slice(0, 4)
                .join(" · ")}
            </p>
          ) : null}
          {current.explanation ? <p>{current.explanation}</p> : null}
        </div>
      ) : null}

      {checked && result === "wrong" && current.type === "mcq" && current.explanation ? (
        <p className="mt-4 text-sm text-red-600">{current.explanation}</p>
      ) : null}

      {allDone && onReset ? (
        <div className="mt-8 rounded-xl border border-[#E4E4E7] bg-[#fafafa] px-5 py-5">
          <p className="text-sm font-semibold text-[#000001]">Bạn đã hoàn thành {total}/{total} câu.</p>
          <p className="mt-1 text-sm text-[#47464b]">Muốn luyện lại từ đầu? Tiến độ bài tập sẽ được đặt lại.</p>
          <button
            type="button"
            onClick={onReset}
            className="mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-[#0a0a0a] px-6 text-[11px] font-bold uppercase tracking-wide text-white hover:bg-[#1a1a1a]"
          >
            Làm lại từ đầu
          </button>
        </div>
      ) : null}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={handleSkip}
          disabled={allDone}
          className="inline-flex h-11 items-center justify-center rounded-xl border border-[#E4E4E7] bg-white px-5 text-[11px] font-bold uppercase tracking-wide text-[#47464b] hover:border-[#0a0a0a]/15 disabled:opacity-40"
        >
          Bỏ qua câu này
        </button>
        {manualAdvance && checked && index < total - 1 ? (
          <button
            type="button"
            onClick={handleContinue}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-[#0a0a0a] px-6 text-[11px] font-bold uppercase tracking-wide text-white hover:bg-[#1a1a1a]"
          >
            Câu tiếp theo
          </button>
        ) : (
          <button
            type="button"
            onClick={handleCheck}
            disabled={!canCheck || checked || allDone}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-[#0a0a0a] px-6 text-[11px] font-bold uppercase tracking-wide text-white hover:bg-[#1a1a1a] disabled:opacity-40"
          >
            Kiểm tra đáp án
          </button>
        )}
      </div>

      {dictionaryPopover}
    </div>
  );
}
