"use client";

import { useMemo } from "react";
import { VocabularyCuratedShowcaseGrid } from "@/components/vocabulary/vocabulary-curated-showcase-grid";
import { useVocabularyAuth } from "@/components/vocabulary/vocabulary-auth-context";
import { listPublishedCatalog } from "@/lib/vocabulary/vocabulary-unit-registry";
import { buildRandomVocabularyShowcase } from "@/lib/vocabulary/vocabulary-showcase";

type VocabularyCuratedSectionProps = {
  showViewAll?: boolean;
  hideHeading?: boolean;
};

export function VocabularyCuratedSection({ showViewAll = false, hideHeading = false }: VocabularyCuratedSectionProps) {
  const { navigateWithAuth } = useVocabularyAuth();
  const showcaseItems = useMemo(() => buildRandomVocabularyShowcase(listPublishedCatalog()), []);

  return (
    <section className={hideHeading ? "" : "mt-10 md:mt-14"}>
      {!hideHeading ? (
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="min-w-0 flex-1">
            <h2 className="font-serif text-xl font-bold text-[#000001] md:text-2xl">Bộ từ vựng gợi ý</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#47464b] md:text-base">
              Biến thư viện từ vựng từ các nguồn uy tín như English Vocabulary in Use hoặc Vocabulary for IELTS trở
              nên càng hiệu quả hơn nữa với đầy đủ lý thuyết, bài tập tương tác và thẻ SRS!
            </p>
          </div>
          {showViewAll ? (
            <button
              type="button"
              onClick={() => navigateWithAuth("/tu-hoc/tu-vung/goi-y")}
              className="shrink-0 text-sm font-semibold text-[#4b2876] hover:underline"
            >
              Xem tất cả
            </button>
          ) : null}
        </div>
      ) : null}

      <VocabularyCuratedShowcaseGrid items={showcaseItems} />
    </section>
  );
}

