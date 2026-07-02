import type { VocabularyUnit } from "@/lib/vocabulary/vocabulary-unit-types";
import {
  EVIU_ELEMENTARY_CATALOG,
  getVocabularyCatalogEntry,
  listEVIUElementaryCatalog,
  type VocabularyUnitCatalogEntry,
} from "@/lib/vocabulary/eviu-elementary-catalog";
import {
  getEviuElementaryUnit,
  listEviuElementaryUnits,
} from "@/lib/vocabulary/units/eviu-elementary-all-units";

export type CuratedVocabularySeries = {
  id: string;
  title: string;
  description: string;
  unitIds: readonly string[];
};

export type CuratedShowcaseIcon = "medical" | "book" | "compass";

export type CuratedShowcaseVariant = "featured" | "wide" | "compact-purple" | "compact";

export type CuratedShowcaseItem =
  | {
      type: "unit";
      unitId: string;
      variant: CuratedShowcaseVariant;
      badge?: string;
      imageUrl?: string;
    }
  | {
      type: "soon";
      id: string;
      variant: CuratedShowcaseVariant;
      title: string;
      description: string;
      badge?: string;
      icon?: CuratedShowcaseIcon;
      imageUrl?: string;
    };

export const CURATED_VOCABULARY_SERIES: readonly CuratedVocabularySeries[] = [
  {
    id: "eviu-elementary",
    title: "English Vocabulary in Use · Elementary",
    description:
      "60 unit theo chủ đề A1–A2 — lý thuyết, bài tập và thẻ SRS bám sát sách EVIU Elementary (3rd ed.).",
    unitIds: EVIU_ELEMENTARY_CATALOG.map((entry) => entry.id),
  },
];

export function getVocabularyUnit(unitId: string): VocabularyUnit | null {
  return getEviuElementaryUnit(unitId);
}

export function listCuratedVocabularyUnits(): VocabularyUnit[] {
  return [...listEviuElementaryUnits()];
}

export function buildUnitDeckName(unit: VocabularyUnit): string {
  return `${unit.title} · ${unit.level}`;
}

export function curatedUnitHref(unitId: string): string {
  return `/tu-hoc/tu-vung/goi-y/${unitId}`;
}

export function getPublishedCatalogEntry(unitId: string): VocabularyUnitCatalogEntry | null {
  const entry = getVocabularyCatalogEntry(unitId);
  if (!entry || !getEviuElementaryUnit(unitId)) return null;
  return { ...entry, status: "published" };
}

export function listPublishedCatalog(): readonly VocabularyUnitCatalogEntry[] {
  return listEVIUElementaryCatalog().map((entry) => ({
    ...entry,
    status: getEviuElementaryUnit(entry.id) ? ("published" as const) : entry.status,
  }));
}

export { getVocabularyCatalogEntry, listEVIUElementaryCatalog };
