"use client";

import { Pencil } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { VocabularyWeekBar } from "@/lib/vocabulary/vocabulary-library-stats";

const DAILY_GOAL_MIN = 1;
const DAILY_GOAL_MAX = 500;

function clampDailyGoal(raw: string, fallback: number): number {
  const n = Number.parseInt(raw.trim(), 10);
  if (!Number.isFinite(n) || n < DAILY_GOAL_MIN) return fallback;
  return Math.min(DAILY_GOAL_MAX, Math.floor(n));
}

type VocabularyWeeklyChartProps = {
  bars: VocabularyWeekBar[];
  reviewedToday: number;
  dailyGoal: number;
  streakDays: number;
  onDailyGoalChange?: (next: number) => void;
};

export function VocabularyWeeklyChart({
  bars,
  reviewedToday,
  dailyGoal,
  streakDays,
  onDailyGoalChange,
}: VocabularyWeeklyChartProps) {
  const [editingGoal, setEditingGoal] = useState(false);
  const [goalDraft, setGoalDraft] = useState(String(dailyGoal));
  const goalInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!editingGoal) setGoalDraft(String(dailyGoal));
  }, [dailyGoal, editingGoal]);

  useEffect(() => {
    if (!editingGoal) return;
    const el = goalInputRef.current;
    if (!el) return;
    el.focus();
    el.select();
  }, [editingGoal]);

  function commitGoal() {
    const next = clampDailyGoal(goalDraft, dailyGoal);
    onDailyGoalChange?.(next);
    setGoalDraft(String(next));
    setEditingGoal(false);
  }
  const maxCount = Math.max(1, ...bars.map((b) => b.count));

  return (
    <section className="rounded-2xl border border-[#E4E4E7] bg-white p-5 shadow-sm md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#4b2876]">
            Tiến độ học tập
          </p>
          <h2 className="mt-1 font-serif text-xl font-bold text-[#000001] md:text-2xl">
            Tóm tắt tuần này
          </h2>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#fbf8fd] px-3 py-1.5 text-xs font-semibold text-[#4b2876]">
          <span aria-hidden>🔥</span>
          <span>Chuỗi học tập {streakDays} Ngày</span>
        </div>
      </div>

      <div className="mt-6 flex h-36 items-end justify-between gap-2 md:gap-3">
        {bars.map((bar) => {
          const heightPct = bar.count > 0 ? Math.max(12, (bar.count / maxCount) * 100) : 8;
          return (
            <div key={bar.dayStart} className="flex min-w-0 flex-1 flex-col items-center gap-2">
              <div className="flex h-28 w-full items-end justify-center">
                <div
                  className={`w-full max-w-[2.75rem] rounded-t-md transition-colors ${
                    bar.isToday ? "bg-[#4b2876]" : "bg-[#ece7f2]"
                  }`}
                  style={{ height: `${heightPct}%` }}
                  title={`${bar.count} lượt ôn`}
                />
              </div>
              <span
                className={`text-[11px] font-medium ${
                  bar.isToday ? "font-semibold text-[#4b2876]" : "text-[#47464b]/70"
                }`}
              >
                {bar.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-5 border-t border-[#E4E4E7] pt-4">
        <div className="flex items-center justify-between gap-3 text-sm">
          <span className="font-medium text-[#47464b]">Hôm nay</span>
          <div className="flex items-center gap-1.5">
            {editingGoal && onDailyGoalChange ? (
              <form
                className="flex items-center gap-1"
                onSubmit={(e) => {
                  e.preventDefault();
                  commitGoal();
                }}
              >
                <span className="font-semibold tabular-nums text-[#000001]">{reviewedToday}/</span>
                <input
                  ref={goalInputRef}
                  type="number"
                  min={DAILY_GOAL_MIN}
                  max={DAILY_GOAL_MAX}
                  inputMode="numeric"
                  aria-label="Số từ muốn ôn trong ngày"
                  value={goalDraft}
                  onChange={(e) => setGoalDraft(e.target.value)}
                  onBlur={commitGoal}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      e.preventDefault();
                      setGoalDraft(String(dailyGoal));
                      setEditingGoal(false);
                    }
                  }}
                  className="h-7 w-12 rounded-md border border-[#4b2876]/35 bg-white px-1.5 text-center text-sm font-semibold tabular-nums text-[#000001] outline-none ring-[#4b2876]/20 focus:ring-2"
                />
                <span className="font-semibold text-[#000001]">từ</span>
              </form>
            ) : (
              <>
                <span className="font-semibold tabular-nums text-[#000001]">
                  {reviewedToday}/{dailyGoal} từ
                </span>
                {onDailyGoalChange ? (
                  <button
                    type="button"
                    onClick={() => setEditingGoal(true)}
                    className="rounded-md p-1 text-[#4b2876] transition hover:bg-[#fbf8fd]"
                    aria-label="Sửa số từ muốn ôn trong ngày"
                  >
                    <Pencil className="size-3.5" strokeWidth={2.25} aria-hidden />
                  </button>
                ) : null}
              </>
            )}
          </div>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#ece7f2]">
          <div
            className="h-full rounded-full bg-[#4b2876] transition-all"
            style={{ width: `${Math.min(100, Math.round((reviewedToday / Math.max(1, dailyGoal)) * 100))}%` }}
          />
        </div>
      </div>
    </section>
  );
}

type VocabularyReviewCtaProps = {
  onStartReview: () => void;
  onCreateDeck: () => void;
};

export function VocabularyReviewCta({ onStartReview, onCreateDeck }: VocabularyReviewCtaProps) {
  return (
    <section className="flex flex-col justify-between rounded-2xl bg-[#0a0a0a] p-6 text-white shadow-sm md:p-8">
      <div>
        <h2 className="font-serif text-2xl font-bold leading-tight md:text-[1.65rem]">
          Sẵn sàng để bắt đầu chưa?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/70">
          Học từ vựng thực sự hiệu quả và sử dụng được với phương pháp Spaced-repetition và Active learning.
        </p>
      </div>
      <div className="mt-8 flex w-full flex-col items-center gap-3">
        <button
          type="button"
          onClick={onStartReview}
          className="inline-flex h-10 w-full max-w-[12.5rem] items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-white px-4 text-xs font-bold uppercase tracking-wide text-[#0a0a0a] transition hover:bg-white/90"
        >
          <span aria-hidden>▶</span>
          Ôn tập ngay
        </button>
        <button
          type="button"
          onClick={onCreateDeck}
          className="inline-flex h-10 w-full max-w-[12.5rem] items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/30 bg-transparent px-4 text-xs font-bold uppercase tracking-wide text-white transition hover:border-white/60 hover:bg-white/5"
        >
          <span aria-hidden>+</span>
          Tạo bộ thẻ mới
        </button>
      </div>
    </section>
  );
}
