"use client";

import { studyHubSubpageContentClass } from "@/components/study-module/study-hub-shell";
import { VocabularyCuratedCatalogGrid } from "@/components/vocabulary/vocabulary-curated-catalog-grid";

export function VocabularyCuratedListView() {
  return (
    <div className={studyHubSubpageContentClass}>
      <header className="mb-10 max-w-2xl">
        <h1 className="font-serif text-2xl font-bold text-[#000001] md:text-3xl">Bộ từ vựng gợi ý</h1>
        <p className="mt-3 text-sm leading-relaxed text-[#47464b] md:text-base">
          Các bộ từ vựng gợi ý được chia theo chủ đề và độ khó, tổng hợp từ các nguồn uy tín như{" "}
          <strong className="font-semibold text-[#000001]">English Vocabulary in Use</strong> hoặc{" "}
          <strong className="font-semibold text-[#000001]">Vocabulary for IELTS</strong>.
        </p>
      </header>

      <VocabularyCuratedCatalogGrid />
    </div>
  );
}
