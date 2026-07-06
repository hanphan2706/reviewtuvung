"use client";

import { studyHubSubpageContentClass } from "@/components/study-module/study-hub-shell";
import { VocabularyCuratedCatalogGrid } from "@/components/vocabulary/vocabulary-curated-catalog-grid";
import type { VocabularyUnitLevel } from "@/lib/vocabulary/vocabulary-catalog-types";
import { vocabularyLevelPageTitle } from "@/lib/vocabulary/vocabulary-level-nav";

export function VocabularyCuratedListView({ level }: { level?: VocabularyUnitLevel }) {
  return (
    <div className={studyHubSubpageContentClass}>
      <header className="mb-10">
        <h1 className="font-serif text-2xl font-bold text-[#000001] md:text-3xl">
          {level ? vocabularyLevelPageTitle(level) : "Bộ từ vựng gợi ý"}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[#47464b] md:text-base lg:whitespace-nowrap">
          Các bộ từ vựng gợi ý được chia theo chủ đề và độ khó, tổng hợp từ các nguồn uy tín như{" "}
          <strong className="font-semibold text-[#000001]">English Vocabulary in Use</strong> hoặc{" "}
          <strong className="font-semibold text-[#000001]">Vocabulary for IELTS</strong>.
        </p>
      </header>

      <VocabularyCuratedCatalogGrid level={level} />
    </div>
  );
}
