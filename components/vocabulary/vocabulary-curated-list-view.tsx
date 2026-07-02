"use client";

import { studyHubSubpageContentClass } from "@/components/study-module/study-hub-shell";
import { VocabularyCuratedCatalogGrid } from "@/components/vocabulary/vocabulary-curated-catalog-grid";

export function VocabularyCuratedListView() {
  return (
    <div className={studyHubSubpageContentClass}>
      <header className="mb-10 max-w-2xl">
        <h1 className="font-serif text-2xl font-bold text-[#000001] md:text-3xl">Bộ từ vựng gợi ý</h1>
        <p className="mt-3 text-sm leading-relaxed text-[#47464b] md:text-base">
          Toàn bộ 60 unit từ{" "}
          <strong className="font-semibold text-[#000001]">English Vocabulary in Use · Elementary</strong> — mỗi unit gồm
          lý thuyết, bài tập và thẻ SRS.
        </p>
      </header>

      <VocabularyCuratedCatalogGrid />
    </div>
  );
}
