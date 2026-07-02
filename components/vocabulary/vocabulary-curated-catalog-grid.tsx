"use client";

import {
  EVIU_ELEMENTARY_SECTION_LABELS,
  type EVIUElementarySection,
  type VocabularyUnitCatalogEntry,
} from "@/lib/vocabulary/eviu-elementary-catalog";
import { curatedUnitHref, listPublishedCatalog } from "@/lib/vocabulary/vocabulary-unit-registry";
import { useVocabularyAuth } from "@/components/vocabulary/vocabulary-auth-context";
import { useMemo } from "react";

function CatalogUnitCard({ entry }: { entry: VocabularyUnitCatalogEntry }) {
  const { navigateWithAuth } = useVocabularyAuth();
  const href = curatedUnitHref(entry.id);

  return (
    <button
      type="button"
      onClick={() => navigateWithAuth(href)}
      className="flex min-h-[148px] flex-col rounded-2xl border border-[#E4E4E7] bg-white p-5 text-left shadow-sm transition hover:border-[#4b2876]/25 hover:shadow-md"
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#47464b]/60">
        Unit {entry.unitNumber}
      </span>
      <h3 className="mt-2 font-serif text-lg font-bold text-[#000001]">{entry.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#47464b]">{entry.description}</p>
      <span className="mt-auto pt-4 text-xs font-semibold text-[#4b2876]">Mở unit</span>
    </button>
  );
}

const SECTION_ORDER: EVIUElementarySection[] = [
  "people",
  "at-home",
  "school-work",
  "leisure",
  "world",
  "social",
  "verbs",
  "grammar",
];

export function VocabularyCuratedCatalogGrid() {
  const grouped = useMemo(() => {
    const catalog = listPublishedCatalog();
    const map = new Map<EVIUElementarySection, VocabularyUnitCatalogEntry[]>();
    for (const section of SECTION_ORDER) {
      map.set(section, []);
    }
    for (const entry of catalog) {
      map.get(entry.section)?.push(entry);
    }
    return SECTION_ORDER.map((section) => ({
      section,
      label: EVIU_ELEMENTARY_SECTION_LABELS[section],
      entries: map.get(section) ?? [],
    }));
  }, []);

  return (
    <div className="space-y-12">
      {grouped.map(({ section, label, entries }) => (
        <section key={section}>
          <h2 className="font-serif text-xl font-bold text-[#000001] md:text-2xl">{label}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {entries.map((entry) => (
              <CatalogUnitCard key={entry.id} entry={entry} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
