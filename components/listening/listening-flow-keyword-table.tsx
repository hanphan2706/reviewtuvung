"use client";

import { isListeningParaphraseMatch } from "@/lib/listening/listening-flow-answer-match";
import type { ListeningFlowCopy } from "@/lib/listening/listening-seven-step-copy";
import type { ResolvedKeywordParaphraseRow } from "@/lib/listening/tactics-basic-flow-types";

const fieldClass =
  "mt-2 w-full rounded-xl border border-[#E4E4E7] bg-white px-3 py-2.5 text-sm text-[#000001] outline-none placeholder:text-[#616365] focus:border-[#4B2876] focus:ring-1 focus:ring-[#4B2876]/20 sm:px-4 sm:py-3 sm:text-[15px]";

export function ListeningFlowKeywordTable({
  rows,
  answers,
  checked,
  copy,
  onChange,
}: {
  rows: readonly ResolvedKeywordParaphraseRow[];
  answers: Record<string, string>;
  checked: boolean;
  copy: ListeningFlowCopy;
  onChange: (key: string, value: string) => void;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#E4E4E7]">
      <div className="hidden grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] bg-[#f3f0f8] text-[10px] font-bold uppercase tracking-[0.12em] text-[#4b2876] sm:grid">
        <div className="border-r border-[#E4E4E7] px-3 py-2.5">{copy.stepKeywordQuestionCol}</div>
        <div className="px-3 py-2.5">{copy.stepKeywordParaphraseCol}</div>
      </div>
      <ul>
        {rows.map((row) => {
          const value = answers[row.key] ?? "";
          const near = checked && isListeningParaphraseMatch(value, row.acceptedAnswers);
          const empty = checked && !value.trim();
          return (
            <li
              key={row.key}
              className="grid border-t border-[#E4E4E7] first:border-t-0 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
            >
              <div className="border-[#E4E4E7] px-3 py-3 sm:border-r sm:py-3.5">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#4b2876] sm:hidden">
                  {copy.stepKeywordQuestionCol}
                </p>
                <p className="cursor-text select-text text-sm text-[#000001] sm:text-[15px]">
                  <span className="font-semibold">Q{row.questionNumber}. </span>
                  {row.question}
                </p>
              </div>
              <div className="px-3 pb-3 sm:py-3.5">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#4b2876] sm:hidden">
                  {copy.stepKeywordParaphraseCol}
                </p>
                <input
                  className={`${fieldClass} ${
                    checked && near
                      ? "border-emerald-500 bg-emerald-50"
                      : empty
                        ? "border-red-300 bg-red-50/60"
                        : ""
                  }`}
                  value={value}
                  onChange={(event) => onChange(row.key, event.target.value)}
                  aria-label={`Q${row.questionNumber} paraphrase`}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck={false}
                />
                {checked ? (
                  <div className="mt-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-sm text-emerald-900">
                    {near && value.trim() ? (
                      <p className="mb-1 text-xs font-medium text-emerald-800">{copy.stepKeywordNearMatch}</p>
                    ) : null}
                    <p className="leading-relaxed">
                      <span className="font-semibold">{copy.modelAnswerLabel}: </span>
                      <span className="cursor-text select-text">{row.modelParaphrase}</span>
                    </p>
                    {row.explanation ? (
                      <p className="mt-1.5 cursor-text select-text leading-relaxed text-emerald-800/90">
                        {row.explanation}
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
