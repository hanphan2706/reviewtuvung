"use client";

import { useEffect, useState } from "react";
import { useGrammarAuth } from "@/components/grammar/grammar-auth-context";
import { studyHubSubpageContentClass } from "@/components/study-module/study-hub-shell";
import {
  grammarDifficultyColor,
  grammarProgressBarColor,
  grammarTopicCardSubtitle,
  getGrammarPathLevelDefinition,
  listTopicsForPathLevel,
  type GrammarPathLevelId,
  type GrammarTopic,
} from "@/lib/grammar/grammar-hub-data";
import {
  grammarProgressPercent,
  type GrammarTopicProgressMap,
} from "@/lib/grammar/grammar-progress";
import { grammarTopicHref } from "@/lib/grammar/grammar-topic-registry";

function ThinProgressBar({
  value,
  barClassName,
}: {
  value: number;
  barClassName: string;
}) {
  return (
    <div className="h-1 overflow-hidden rounded-full bg-[#ece7f2]">
      <div className={`h-full rounded-full ${barClassName}`} style={{ width: `${value}%` }} />
    </div>
  );
}

function PathTopicCard({
  topic,
  progressPercent,
  onOpen,
}: {
  topic: GrammarTopic;
  progressPercent: number;
  onOpen: (slug: string) => void;
}) {
  const subtitle = grammarTopicCardSubtitle(topic.description);

  return (
    <button
      type="button"
      onClick={() => onOpen(topic.id)}
      className="flex min-h-[180px] flex-col rounded-lg border border-[#E4E4E7] bg-white p-5 text-left shadow-sm transition hover:border-[#000001]/20 hover:shadow-md md:p-6"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]/55">
        Unit {topic.unitNumber} · {topic.categoryLabel}
      </p>
      <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-[#000001]">{topic.title}</h3>
      {subtitle ? (
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#47464b]">{subtitle}</p>
      ) : (
        <div className="flex-1" />
      )}
      <div className="mt-5 space-y-2">
        <div className="flex items-center justify-between gap-2 text-xs">
          <span className="text-[#47464b]/70">
            Độ khó:{" "}
            <span className={`font-semibold ${grammarDifficultyColor(topic.difficulty)}`}>
              {topic.difficultyVi}
            </span>
          </span>
          <span className="font-semibold text-[#47464b]">{progressPercent}%</span>
        </div>
        <ThinProgressBar
          value={progressPercent}
          barClassName={grammarProgressBarColor(topic.difficulty)}
        />
      </div>
    </button>
  );
}

export function GrammarPathLevelView({ levelId }: { levelId: GrammarPathLevelId }) {
  const { loggedIn, navigateWithAuth } = useGrammarAuth();
  const level = getGrammarPathLevelDefinition(levelId);
  const topics = listTopicsForPathLevel(levelId);
  const [progressBySlug, setProgressBySlug] = useState<GrammarTopicProgressMap>({});

  useEffect(() => {
    if (!loggedIn) {
      setProgressBySlug({});
      return;
    }
    let cancelled = false;
    void fetch("/api/grammar/progress", { credentials: "include", cache: "no-store" })
      .then(async (res) => {
        if (!res.ok) return null;
        return (await res.json()) as { progress?: GrammarTopicProgressMap };
      })
      .then((data) => {
        if (cancelled || !data?.progress) return;
        setProgressBySlug(data.progress);
      })
      .catch(() => {
        /* keep empty map */
      });
    return () => {
      cancelled = true;
    };
  }, [loggedIn]);

  return (
    <div className={studyHubSubpageContentClass}>
      <header className="mb-8 max-w-3xl md:mb-10">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]/55">
          {level.cefrLabel}
        </p>
        <h1 className="mt-2 font-serif text-2xl font-bold text-[#000001] md:text-3xl">
          {level.titleEn}{" "}
          <span className="font-normal text-[#47464b]">({level.titleVi})</span>
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[#47464b] md:text-base">{level.description}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#47464b]/70">
          {topics.length} chủ điểm
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <PathTopicCard
            key={topic.id}
            topic={topic}
            progressPercent={loggedIn ? grammarProgressPercent(progressBySlug[topic.id] ?? 0) : 0}
            onOpen={(slug) => navigateWithAuth(grammarTopicHref(slug))}
          />
        ))}
      </div>
    </div>
  );
}
