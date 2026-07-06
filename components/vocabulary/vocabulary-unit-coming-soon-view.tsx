"use client";

import Link from "next/link";
import type { VocabularyUnitCatalogEntry } from "@/lib/vocabulary/vocabulary-catalog-types";
import { studyHubSubpageContentClass } from "@/components/study-module/study-hub-shell";

export function VocabularyUnitComingSoonView({ entry }: { entry: VocabularyUnitCatalogEntry }) {
  return (
    <div className={studyHubSubpageContentClass}>
      <div className="max-w-2xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]">{entry.sourceBook}</p>
        <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#000001] md:text-4xl">{entry.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-[#47464b]">{entry.description}</p>
        <div className="mt-8 rounded-2xl border border-[#E4E4E7] bg-white p-6 shadow-sm">
          <p className="font-serif text-lg font-semibold text-[#000001]">Bộ từ này đang được biên soạn</p>
          <p className="mt-2 text-sm leading-relaxed text-[#47464b]">
            Unit đã có trong danh mục {entry.sourceBook.split("·")[0]?.trim() ?? "EVIU"}. Lý thuyết, bài tập và thẻ SRS
            sẽ được bổ sung dần — bạn có thể quay lại sau hoặc thử các unit đã mở.
          </p>
          <Link
            href="/tu-hoc/tu-vung/goi-y"
            className="mt-5 inline-flex h-10 items-center justify-center rounded-xl bg-[#4b2876] px-4 text-sm font-semibold text-white transition hover:bg-[#3f2163]"
          >
            Xem danh sách bộ từ
          </Link>
        </div>
      </div>
    </div>
  );
}
