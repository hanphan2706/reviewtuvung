"use client";

import {
  EVIU_ELEMENTARY_SECTION_LABELS,
  type EVIUElementarySection,
} from "@/lib/vocabulary/eviu-elementary-catalog";
import {
  EVIU_PRE_INTERMEDIATE_SECTION_LABELS,
  type EVIUPreIntermediateSection,
} from "@/lib/vocabulary/eviu-pre-intermediate-catalog";
import {
  EVIU_UPPER_INTERMEDIATE_SECTION_LABELS,
  type EVIUUpperIntermediateSection,
} from "@/lib/vocabulary/eviu-upper-intermediate-catalog";
import {
  EVIU_ADVANCED_SECTION_LABELS,
  type EVIUAdvancedSection,
} from "@/lib/vocabulary/eviu-advanced-catalog";
import type { VocabularyUnitCatalogEntry, VocabularyUnitLevel } from "@/lib/vocabulary/vocabulary-catalog-types";
import {
  CURATED_VOCABULARY_SERIES,
  curatedUnitHref,
  listPublishedCatalog,
} from "@/lib/vocabulary/vocabulary-unit-registry";
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
        {entry.level}
      </span>
      <h3 className="mt-2 font-serif text-lg font-bold text-[#000001]">{entry.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#47464b]">{entry.description}</p>
      <span className="mt-auto pt-4 text-xs font-semibold text-[#4b2876]">Mở bộ thẻ</span>
    </button>
  );
}

const ELEMENTARY_SECTION_ORDER: EVIUElementarySection[] = [
  "people",
  "at-home",
  "school-work",
  "leisure",
  "world",
  "social",
  "verbs",
  "grammar",
];

const PRE_INTERMEDIATE_SECTION_ORDER: EVIUPreIntermediateSection[] = [
  "world",
  "people",
  "daily-life",
  "education",
  "work",
  "leisure",
  "tourism",
  "communication",
  "social",
  "concepts",
  "functional",
  "word-formation",
  "phrase-building",
  "key-verbs",
  "words-grammar",
  "connecting",
  "style",
];

const UPPER_INTERMEDIATE_SECTION_ORDER: EVIUUpperIntermediateSection[] = [
  "learning",
  "topics",
  "feelings",
  "concepts",
  "connecting",
  "word-formation",
  "pronunciation",
  "counting",
  "phrasal",
  "style",
];

const ADVANCED_SECTION_ORDER: EVIUAdvancedSection[] = [
  "work-study",
  "people",
  "leisure",
  "travel",
  "environment",
  "society",
  "media",
  "health",
  "technology",
  "concepts",
  "functional",
  "words-meanings",
  "fixed",
  "variation",
];

type SeriesGridConfig = {
  seriesId: string;
  level: VocabularyUnitLevel;
  sectionOrder: readonly string[];
  sectionLabels: Record<string, string>;
};

const SERIES_GRID_CONFIG: Record<string, SeriesGridConfig> = {
  "eviu-elementary": {
    seriesId: "eviu-elementary",
    level: "A1",
    sectionOrder: ELEMENTARY_SECTION_ORDER,
    sectionLabels: EVIU_ELEMENTARY_SECTION_LABELS,
  },
  "eviu-pre-intermediate": {
    seriesId: "eviu-pre-intermediate",
    level: "A2",
    sectionOrder: PRE_INTERMEDIATE_SECTION_ORDER,
    sectionLabels: EVIU_PRE_INTERMEDIATE_SECTION_LABELS,
  },
  "eviu-upper-intermediate": {
    seriesId: "eviu-upper-intermediate",
    level: "B2",
    sectionOrder: UPPER_INTERMEDIATE_SECTION_ORDER,
    sectionLabels: EVIU_UPPER_INTERMEDIATE_SECTION_LABELS,
  },
  "eviu-advanced": {
    seriesId: "eviu-advanced",
    level: "C1",
    sectionOrder: ADVANCED_SECTION_ORDER,
    sectionLabels: EVIU_ADVANCED_SECTION_LABELS,
  },
};

type SectionGroup = {
  key: string;
  label: string;
  entries: VocabularyUnitCatalogEntry[];
};

function groupCatalogBySeries(
  catalog: readonly VocabularyUnitCatalogEntry[],
  seriesId: string,
  config: SeriesGridConfig,
): SectionGroup[] {
  const series = CURATED_VOCABULARY_SERIES.find((item) => item.id === seriesId);
  if (!series) return [];

  const unitIdSet = new Set(series.unitIds);
  const published = catalog.filter((entry) => unitIdSet.has(entry.id) && entry.status === "published");
  if (published.length === 0) return [];

  const map = new Map<string, VocabularyUnitCatalogEntry[]>();
  for (const section of config.sectionOrder) {
    map.set(section, []);
  }
  for (const entry of published) {
    const bucket = map.get(entry.section);
    if (bucket) {
      bucket.push(entry);
    } else {
      map.set(entry.section, [entry]);
    }
  }

  const sections = [...config.sectionOrder];
  for (const section of map.keys()) {
    if (!sections.includes(section)) sections.push(section);
  }

  return sections
    .map((section) => ({
      key: `${seriesId}-${section}`,
      label: config.sectionLabels[section] ?? section,
      entries: (map.get(section) ?? []).sort((a, b) => a.unitNumber - b.unitNumber),
    }))
    .filter((group) => group.entries.length > 0);
}

export function VocabularyCuratedCatalogGrid({ level }: { level?: VocabularyUnitLevel }) {
  const sectionGroups = useMemo(() => {
    const catalog = level ? listPublishedCatalog().filter((entry) => entry.level === level) : listPublishedCatalog();

    const seriesIds = level
      ? Object.values(SERIES_GRID_CONFIG)
          .filter((config) => config.level === level)
          .map((config) => config.seriesId)
      : ["eviu-elementary", "eviu-pre-intermediate", "eviu-upper-intermediate", "eviu-advanced"];

    return seriesIds.flatMap((seriesId) => {
      const config = SERIES_GRID_CONFIG[seriesId];
      if (!config) return [];
      return groupCatalogBySeries(catalog, seriesId, config);
    });
  }, [level]);

  return (
    <div className="space-y-12">
      {sectionGroups.map(({ key, label, entries }) => (
        <section key={key}>
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
