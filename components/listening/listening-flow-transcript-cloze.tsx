"use client";

import { isListeningAnswerMatch } from "@/lib/listening/listening-flow-answer-match";
import type { ResolvedTranscriptClozeExercise } from "@/lib/listening/tactics-basic-flow-types";

function wordSlotCount(answers: readonly string[], wordSlots?: number): number {
  if (wordSlots && wordSlots > 0) return wordSlots;
  const first = answers[0] ?? "";
  return Math.max(1, first.trim().split(/\s+/).filter(Boolean).length);
}

function gapWidthCh(slots: number): number {
  return Math.min(28, Math.max(10, slots * 7 + 2));
}

export function ListeningFlowTranscriptCloze({
  exercise,
  answers,
  checked,
  onChange,
}: {
  exercise: ResolvedTranscriptClozeExercise;
  answers: Record<string, string>;
  checked: boolean;
  onChange: (gapId: string, value: string) => void;
}) {
  const gapById = new Map(exercise.gaps.map((gap) => [gap.id, gap]));

  return (
    <ul className="space-y-3">
      {exercise.lines.map((line, lineIndex) => (
        <li key={`${line.speaker ?? "line"}-${lineIndex}`} className="flex gap-2 text-[15px] leading-[1.75] text-[#000001]">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#4b2876]" aria-hidden />
          <p className="min-w-0 flex-1">
            {line.speaker ? (
              <span className="mr-1.5 font-semibold uppercase tracking-wide text-[#4b2876]">
                {line.speaker}
              </span>
            ) : null}
            {line.segments.map((segment) => {
              if (segment.type === "text") {
                return <span key={`text:${lineIndex}:${segment.text}`}>{segment.text}</span>;
              }
              const gap = gapById.get(segment.gapId);
              if (!gap) return null;
              const gapNumber = exercise.gaps.findIndex((item) => item.id === gap.id) + 1;
              const value = answers[gap.id] ?? "";
              const correct = checked && isListeningAnswerMatch(value, gap.answers);
              const wrong = checked && !correct;
              const slots = wordSlotCount(gap.answers, gap.wordSlots);
              const borderClass = correct
                ? "border-[#5cb572]"
                : wrong
                  ? "border-red-400"
                  : "border-[#E4E4E7] focus:border-[#000001]";
              return (
                <span key={gap.id} className="mx-0.5 inline-flex flex-row items-baseline gap-1 align-baseline">
                  <span className="whitespace-nowrap text-[13px] font-bold text-[#000001]">{gapNumber}</span>
                  <input
                    className={`border-0 border-b bg-transparent px-1 py-0.5 text-[15px] font-medium text-[#000001] outline-none ${borderClass}`}
                    style={{ width: `${gapWidthCh(slots)}ch` }}
                    value={value}
                    onChange={(event) => onChange(gap.id, event.target.value)}
                    aria-label={`Gap ${gapNumber}`}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck={false}
                  />
                  {checked && wrong ? (
                    <span className="ml-0.5 text-xs font-medium text-emerald-700">{gap.answers[0]}</span>
                  ) : null}
                </span>
              );
            })}
          </p>
        </li>
      ))}
    </ul>
  );
}
