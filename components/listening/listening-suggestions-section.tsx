"use client";

import { useEffect, useState } from "react";
import { ListeningLessonCard } from "@/components/listening/listening-lesson-card";
import {
  LISTENING_PARTS_PILOT,
  type ListeningPartMeta,
} from "@/lib/listening/content-manifest";
import {
  LISTENING_SUGGESTIONS_COUNT,
  pickListeningSuggestedParts,
  type PickListeningSuggestionsOptions,
} from "@/lib/listening/listening-suggestions";

type ListeningSuggestionsSectionProps = {
  onOpenLesson: (slug: string) => void;
  suggestionOptions?: PickListeningSuggestionsOptions;
};

export function ListeningSuggestionsSection({
  onOpenLesson,
  suggestionOptions,
}: ListeningSuggestionsSectionProps) {
  const [suggestions, setSuggestions] = useState<ListeningPartMeta[]>([]);

  useEffect(() => {
    setSuggestions(
      pickListeningSuggestedParts(LISTENING_PARTS_PILOT, LISTENING_SUGGESTIONS_COUNT, suggestionOptions),
    );
  }, [suggestionOptions]);

  if (suggestions.length === 0) return null;

  return (
    <section>
      <h2 className="mb-6 font-serif text-2xl font-semibold text-[#000001]">Gợi ý dành cho bạn</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {suggestions.map((lesson, index) => (
          <div key={lesson.id} className={index >= 2 ? "hidden xl:block" : undefined}>
            <ListeningLessonCard
              lesson={lesson}
              onClick={() => onOpenLesson(lesson.slug)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
