"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { GrammarRequireAuth } from "@/components/grammar/grammar-require-auth";
import { VocabularyUnitExerciseQuiz } from "@/components/vocabulary/vocabulary-unit-exercise-quiz";
import { studyHubSubpageContentClass } from "@/components/study-module/study-hub-shell";
import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

function progressStorageKey(slug: string): string {
  return `grammar-topic-exercise-progress-${slug}`;
}

type GrammarTopicPracticeViewProps = {
  topic: GrammarTopicDetail;
  exercises: readonly GrammarExercise[];
};

function syncProgressToAccount(topicSlug: string, progress: number) {
  void fetch("/api/grammar/progress", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ topicSlug, progress }),
  }).catch(() => {
    /* offline / not configured */
  });
}

export function GrammarTopicPracticeView({ topic, exercises }: GrammarTopicPracticeViewProps) {
  const [checkedExercises, setCheckedExercises] = useState<Record<string, boolean>>({});
  const lastPostedRef = useRef(-1);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(progressStorageKey(topic.slug));
      if (!raw) return;
      const parsed = JSON.parse(raw) as Record<string, boolean>;
      if (parsed && typeof parsed === "object") setCheckedExercises(parsed);
    } catch {
      // ignore corrupt storage
    }
  }, [topic.slug]);

  useEffect(() => {
    try {
      localStorage.setItem(progressStorageKey(topic.slug), JSON.stringify(checkedExercises));
    } catch {
      // ignore quota errors
    }
  }, [checkedExercises, topic.slug]);

  const completedCount = useMemo(
    () => exercises.filter((item) => checkedExercises[item.id]).length,
    [checkedExercises, exercises],
  );

  const progressRatio = exercises.length > 0 ? completedCount / exercises.length : 0;

  useEffect(() => {
    if (progressRatio < lastPostedRef.current) return;
    if (progressRatio === lastPostedRef.current && progressRatio === 0) return;
    lastPostedRef.current = progressRatio;
    syncProgressToAccount(topic.slug, progressRatio);
  }, [progressRatio, topic.slug]);

  return (
    <GrammarRequireAuth>
      <div className={studyHubSubpageContentClass}>
        <div>
          {topic.levelLabel && topic.kindLabel ? (
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]">
              {topic.levelLabel} - {topic.kindLabel}
            </p>
          ) : null}
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#000001] md:text-4xl">
            Bài tập · {topic.title}
          </h1>
        </div>

        <div className="mt-10">
          <VocabularyUnitExerciseQuiz
            exercises={exercises}
            completed={checkedExercises}
            onComplete={(id) => setCheckedExercises((prev) => ({ ...prev, [id]: true }))}
            manualAdvance
          />
        </div>
      </div>
    </GrammarRequireAuth>
  );
}
