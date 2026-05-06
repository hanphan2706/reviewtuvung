"use client";

import { useEffect, useMemo } from "react";
import { LandingSectionLink } from "@/components/landing-section-link";
import { SignedInTopBar } from "@/components/signed-in-top-bar";
import { buildRecallPercentSeries, type RecallDayPoint } from "@/lib/review-day-stats";
import { countDue } from "@/lib/srs";
import { useSrsStore } from "@/store/srs-store";
import { useNowTick } from "@/hooks/use-now-tick";

const CHART_DAYS = 14;

function ProgressRecallChart({ series, className }: { series: RecallDayPoint[]; className?: string }) {
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
    <div className={className}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full max-h-[220px] text-zinc-400"
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
    </div>
  );
}

export function VocabularyProgressView() {
  const now = useNowTick();
  const words = useSrsStore((s) => s.words);
  const reviewDayTallies = useSrsStore((s) => s.reviewDayTallies);
  const closeDeck = useSrsStore((s) => s.closeDeck);

  useEffect(() => {
    closeDeck();
  }, [closeDeck]);

  const dueAll = useMemo(() => countDue(words, now), [words, now]);
  const series = useMemo(
    () => buildRecallPercentSeries(reviewDayTallies, now, CHART_DAYS),
    [reviewDayTallies, now],
  );
  const totalWords = words.length;

  return (
    <div className="flex min-h-dvh w-full flex-col items-center px-5 pb-6 pt-10">
      <div className="flex w-full max-w-md flex-col gap-6">
        <SignedInTopBar
          left={
            <LandingSectionLink
              sectionId="tu-hoc"
              className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-xl px-2 py-1.5 text-sm font-medium text-ink-muted"
            >
              ← Tự học
            </LandingSectionLink>
          }
        />

        <section className="w-full rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm ring-1 ring-zinc-950/5">
          <h1 className="text-center font-serif text-2xl font-bold tracking-tight text-[#4b2876]">Theo dõi tiến độ</h1>
          <p className="mt-2 text-center text-sm text-zinc-500">
            Khả năng ghi nhớ theo từng ngày.
            <br />
            (Trong vòng 14 ngày gần nhất)
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3 text-center">
            <div className="min-w-22 rounded-xl border border-zinc-200/90 bg-zinc-50/60 px-3 py-2.5">
              <p className="text-lg font-bold tabular-nums text-orange-600">{dueAll}</p>
              <p className="mt-0.5 text-[10px] font-medium text-ink-muted">Đến hạn</p>
            </div>
            <div className="min-w-22 rounded-xl border border-zinc-200/90 bg-zinc-50/60 px-3 py-2.5">
              <p className="text-lg font-bold tabular-nums text-[#4b2876]">{totalWords}</p>
              <p className="mt-0.5 text-[10px] font-medium text-ink-muted">Tất cả từ</p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-zinc-200/80 bg-zinc-50/30 p-4">
            <ProgressRecallChart series={series} />
          </div>
        </section>
      </div>
    </div>
  );
}
