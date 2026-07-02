"use client";

type VocabularyUnitMasteryProgressProps = {
  masteredCount: number;
  totalCount: number;
  dailyGoal?: number;
};

export function VocabularyUnitMasteryProgress({
  masteredCount,
  totalCount,
  dailyGoal = 20,
}: VocabularyUnitMasteryProgressProps) {
  const pct = totalCount > 0 ? Math.round((masteredCount / totalCount) * 100) : 0;
  const ringRadius = 54;
  const circumference = 2 * Math.PI * ringRadius;
  const strokeDashoffset = circumference * (1 - pct / 100);
  const dailyDone = Math.min(masteredCount, dailyGoal);
  const dailyPct = Math.round((dailyDone / dailyGoal) * 100);

  return (
    <div className="rounded-xl border border-[#E4E4E7] bg-white p-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#000001]">Mastery progress</p>

      <div className="relative mx-auto mt-5 flex size-36 items-center justify-center">
        <svg className="-rotate-90" width="144" height="144" viewBox="0 0 144 144" aria-hidden>
          <circle cx="72" cy="72" r={ringRadius} fill="none" stroke="#ece7f2" strokeWidth="10" />
          <circle
            cx="72"
            cy="72"
            r={ringRadius}
            fill="none"
            stroke="#4b2876"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="font-serif text-3xl font-bold tabular-nums text-[#000001]">{masteredCount}</span>
          <span className="text-xs text-[#47464b]">/ {totalCount} Mastered</span>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#47464b]">Target daily goal</span>
          <span className="font-bold tabular-nums text-[#000001]">
            {dailyDone}/{dailyGoal}
          </span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#E4E4E7]">
          <div
            className="h-full rounded-full bg-[#0a0a0a] transition-all"
            style={{ width: `${Math.min(100, dailyPct)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
