"use client";

import { useState } from "react";
import { ExerciseChoiceBank } from "@/components/study-module/exercise-choice-bank";
import type { VocabularyExercise } from "@/lib/vocabulary/vocabulary-unit-types";

const fieldClass =
  "mt-2 w-full rounded-xl border border-[#E4E4E7] bg-white px-3 py-2.5 text-sm text-[#000001] outline-none placeholder:text-[#616365] focus:border-[#4B2876] focus:ring-1 focus:ring-[#4B2876]/20";

export function VocabularyUnitExercise({
  exercise,
  checked,
  onCheck,
}: {
  exercise: VocabularyExercise;
  checked: boolean;
  onCheck: (correct: boolean) => void;
}) {
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [matchLeft, setMatchLeft] = useState<string | null>(null);
  const [matched, setMatched] = useState<Record<string, string>>({});

  if (exercise.type === "fill-blank") {
    const normalized = value.trim().toLowerCase();
    const alts = exercise.alternatives?.map((a) => a.toLowerCase()) ?? [];
    const correct =
      normalized === exercise.answer.toLowerCase() || alts.includes(normalized);

    return (
      <div className="rounded-xl border border-[#E4E4E7] bg-white p-4 md:p-5">
        <p className="text-sm leading-relaxed text-[#000001]">{exercise.prompt}</p>
        {exercise.hint ? <p className="mt-1 text-xs text-[#47464b]/70">{exercise.hint}</p> : null}
        {exercise.choiceBank && exercise.choiceBank.length > 0 ? (
          <ExerciseChoiceBank words={exercise.choiceBank} />
        ) : null}
        <input
          className={fieldClass}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={checked}
          placeholder="Nhập đáp án..."
        />
        {!checked ? (
          <button
            type="button"
            onClick={() => onCheck(correct)}
            disabled={!value.trim()}
            className="mt-3 inline-flex h-9 items-center justify-center rounded-xl bg-[#0a0a0a] px-4 text-xs font-bold uppercase tracking-wide text-white disabled:opacity-40"
          >
            Kiểm tra
          </button>
        ) : (
          <p className={`mt-3 text-sm font-medium ${correct ? "text-emerald-700" : "text-red-600"}`}>
            {correct ? "Đúng rồi!" : `Gợi ý: ${exercise.answer}`}
          </p>
        )}
      </div>
    );
  }

  if (exercise.type === "mcq") {
    const correct = selected === exercise.correctKey;

    return (
      <div className="rounded-xl border border-[#E4E4E7] bg-white p-4 md:p-5">
        <p className="text-sm font-medium text-[#000001]">{exercise.question}</p>
        <div className="mt-3 space-y-2">
          {exercise.options.map((opt) => {
            const isSelected = selected === opt.key;
            const showResult = checked && isSelected;
            return (
              <button
                key={opt.key}
                type="button"
                disabled={checked}
                onClick={() => setSelected(opt.key)}
                className={`flex w-full items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-sm transition ${
                  isSelected
                    ? "border-[#0a0a0a]/20 bg-[#fafafa] text-[#000001]"
                    : "border-[#E4E4E7] bg-white text-[#47464b] hover:border-[#0a0a0a]/15"
                } ${showResult ? (correct ? "border-emerald-400 bg-emerald-50" : "border-red-300 bg-red-50") : ""}`}
              >
                <span className="font-semibold uppercase text-[#47464b]">{opt.key}.</span>
                {opt.label}
              </button>
            );
          })}
        </div>
        {!checked ? (
          <button
            type="button"
            onClick={() => onCheck(selected === exercise.correctKey)}
            disabled={!selected}
            className="mt-3 inline-flex h-9 items-center justify-center rounded-xl bg-[#0a0a0a] px-4 text-xs font-bold uppercase tracking-wide text-white disabled:opacity-40"
          >
            Kiểm tra
          </button>
        ) : (
          <p className={`mt-3 text-sm font-medium ${correct ? "text-emerald-700" : "text-red-600"}`}>
            {correct ? "Đúng rồi!" : exercise.explanation ?? "Thử lại nhé."}
          </p>
        )}
      </div>
    );
  }

  const allMatched = exercise.pairs.every((p) => matched[p.left] === p.right);
  const remainingRights = exercise.pairs.map((p) => p.right).filter((r) => !Object.values(matched).includes(r));

  return (
    <div className="rounded-xl border border-[#E4E4E7] bg-white p-4 md:p-5">
      <p className="text-sm font-medium text-[#000001]">{exercise.instruction}</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          {exercise.pairs.map((p) => {
            const done = matched[p.left];
            return (
              <button
                key={p.left}
                type="button"
                disabled={checked || Boolean(done)}
                onClick={() => setMatchLeft(p.left)}
                className={`w-full rounded-xl border px-3 py-2 text-left text-sm ${
                  done
                    ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                    : matchLeft === p.left
                      ? "border-[#0a0a0a] bg-[#fafafa]"
                      : "border-[#E4E4E7] bg-white"
                }`}
              >
                {p.left}
                {done ? ` → ${done}` : null}
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
                const pair = exercise.pairs.find((p) => p.left === matchLeft);
                if (pair?.right === right) {
                  setMatched((m) => ({ ...m, [matchLeft]: right }));
                }
                setMatchLeft(null);
              }}
              className="w-full rounded-xl border border-[#E4E4E7] bg-white px-3 py-2 text-left text-sm hover:border-[#0a0a0a]/20"
            >
              {right}
            </button>
          ))}
        </div>
      </div>
      {!checked ? (
        <button
          type="button"
          onClick={() => onCheck(allMatched)}
          disabled={!allMatched}
          className="mt-3 inline-flex h-9 items-center justify-center rounded-xl bg-[#0a0a0a] px-4 text-xs font-bold uppercase tracking-wide text-white disabled:opacity-40"
        >
          Kiểm tra
        </button>
      ) : (
        <p className={`mt-3 text-sm font-medium ${allMatched ? "text-emerald-700" : "text-red-600"}`}>
          {allMatched ? "Đúng rồi!" : "Hãy thử ghép lại nhé."}
        </p>
      )}
    </div>
  );
}
