"use client";

import { useEffect, useMemo } from "react";
import { studyHubSubpageContentClass } from "@/components/study-module/study-hub-shell";
import { VocabularyWeeklyChart } from "@/components/vocabulary/vocabulary-library-sections";
import { VocabularySubpageHeader } from "@/components/vocabulary/vocabulary-subpage-header";
import { useNowTick } from "@/hooks/use-now-tick";
import { vocabularyReviewedToday } from "@/lib/profile/learning-progress";
import { buildRecallPercentSeries, type RecallDayPoint } from "@/lib/review-day-stats";
import {
  buildVocabularyWeekBars,
  computeVocabularyStreak,
} from "@/lib/vocabulary/vocabulary-library-stats";
import { countDue } from "@/lib/srs";
import { useSrsStore } from "@/store/srs-store";

const CHART_DAYS = 14;

function ProgressRecallChart({ series }: { series: RecallDayPoint[] }) {
  const W = 360;
  const H = 200;
  const padL = 40;
  const padR = 12;
  const padT = 14;
  const padB = 36;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const n = series.length;

  const xAt = (i: number) => padL + (n <= 1 ? innerW / 2 : (innerW * i) / (n - 1));
  const yPct = (p: number) => padT + innerH * (1 - p / 100);
  const linePts = series.map((s, i) => `${xAt(i)},${yPct(s.lineY)}`).join(" ");
  const labelIdx = [0, Math.floor((n - 1) / 2), n - 1].filter((i, j, a) => a.indexOf(i) === j);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full max-h-[240px] text-zinc-400"
      role="img"
      aria-label="Biểu đồ khả năng ghi nhớ theo ngày, 14 ngày gần nhất"
    >
      <title>Khả năng ghi nhớ theo ngày</title>
      {[0, 0.25, 0.5, 0.75, 1].map((t) => {
        const y = padT + innerH * (1 - t);
        const pct = Math.round(t * 100);
        return (
          <g key={t}>
            <line
              x1={padL}
              y1={y}
              x2={W - padR}
              y2={y}
              stroke="currentColor"
              strokeOpacity={0.12}
              strokeWidth={1}
            />
            <text x={padL - 6} y={y + 3} textAnchor="end" className="fill-zinc-400 text-[8px] font-medium tabular-nums">
              {pct}%
            </text>
          </g>
        );
      })}
      <polyline
        fill="none"
        stroke="#4b2876"
        strokeWidth={2.25}
        strokeLinecap="round"
        strokeLinejoin="round"
        points={linePts}
      />
      {series.map((s, i) =>
        s.recallPercent !== null ? (
          <circle
            key={i}
            cx={xAt(i)}
            cy={yPct(s.recallPercent)}
            r={3.25}
            fill="#4b2876"
            stroke="white"
            strokeWidth={1}
          />
        ) : null,
      )}
      {labelIdx.map((i) => {
        const d = new Date(series[i].dayStart);
        const label = `${d.getDate()}/${d.getMonth() + 1}`;
        return (
          <text
            key={i}
            x={xAt(i)}
            y={H - 10}
            textAnchor="middle"
            className="fill-zinc-500 text-[9px] font-medium"
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}

export function VocabularyProgressView() {
  const now = useNowTick();
  const words = useSrsStore((s) => s.words);
  const settings = useSrsStore((s) => s.settings);
  const reviewDayTallies = useSrsStore((s) => s.reviewDayTallies);
  const closeDeck = useSrsStore((s) => s.closeDeck);
  const setDailyReviewLimit = useSrsStore((s) => s.setDailyReviewLimit);

  useEffect(() => {
    closeDeck();
  }, [closeDeck]);

  const dueAll = useMemo(() => countDue(words, now), [words, now]);
  const series = useMemo(
    () => buildRecallPercentSeries(reviewDayTallies, now, CHART_DAYS),
    [reviewDayTallies, now],
  );
  const weekBars = useMemo(
    () => buildVocabularyWeekBars(reviewDayTallies, now, 7),
    [reviewDayTallies, now],
  );
  const streakDays = useMemo(
    () => computeVocabularyStreak(reviewDayTallies, now),
    [reviewDayTallies, now],
  );
  const reviewedToday = useMemo(
    () => vocabularyReviewedToday(reviewDayTallies, now),
    [reviewDayTallies, now],
  );
  const totalWords = words.length;

  return (
    <div className={studyHubSubpageContentClass}>
      <VocabularySubpageHeader
        title="Theo dõi tiến độ"
        description="Xem lượt ôn tập, chuỗi học và mức ghi nhớ theo thời gian — dữ liệu lưu trên thiết bị của bạn."
      />

      <div className="grid items-start gap-4 lg:grid-cols-2 lg:gap-5">
        <VocabularyWeeklyChart
          bars={weekBars}
          reviewedToday={reviewedToday}
          dailyGoal={settings.dailyReviewLimit}
          streakDays={streakDays}
          onDailyGoalChange={setDailyReviewLimit}
        />

        <section className="flex flex-col">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#4b2876]">
            Tổng quan
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-[#E4E4E7] bg-[#fafafa] px-4 py-3">
              <p className="font-serif text-2xl font-bold tabular-nums text-orange-600">{dueAll}</p>
              <p className="mt-1 text-xs font-medium text-[#47464b]">Đến hạn</p>
            </div>
            <div className="rounded-xl border border-[#E4E4E7] bg-[#fafafa] px-4 py-3">
              <p className="font-serif text-2xl font-bold tabular-nums text-[#4b2876]">{totalWords}</p>
              <p className="mt-1 text-xs font-medium text-[#47464b]">Tất cả từ</p>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-2xl border border-[#E4E4E7] bg-white p-5 shadow-sm md:mt-8 md:p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#4b2876]">
          Khả năng ghi nhớ
        </p>
        <h2 className="mt-1 font-serif text-xl font-bold text-[#000001]">14 ngày gần nhất</h2>
        <p className="mt-2 text-sm text-[#47464b]">
          % recall ước lượng từ lượt chấm Hard / OK / Easy mỗi ngày.
        </p>
        <div className="mt-6 rounded-xl border border-[#E4E4E7] bg-[#fafafa] p-4 md:p-6">
          <ProgressRecallChart series={series} />
        </div>
      </section>
    </div>
  );
}
