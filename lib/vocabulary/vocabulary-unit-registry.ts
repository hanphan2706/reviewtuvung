import type { VocabularyUnit } from "@/lib/vocabulary/vocabulary-unit-types";
import type { VocabularyUnitCatalogEntry } from "@/lib/vocabulary/vocabulary-catalog-types";
import {
  EVIU_ELEMENTARY_CATALOG,
  getVocabularyCatalogEntry as getElementaryCatalogEntry,
  listEVIUElementaryCatalog,
} from "@/lib/vocabulary/eviu-elementary-catalog";
import {
  EVIU_PRE_INTERMEDIATE_CATALOG,
  getEVIUPreIntermediateCatalogEntry,
  listEVIUPreIntermediateCatalog,
} from "@/lib/vocabulary/eviu-pre-intermediate-catalog";
import {
  getEviuElementaryUnit,
  listEviuElementaryUnits,
} from "@/lib/vocabulary/units/eviu-elementary-all-units";
import {
  getEviuPreIntermediateUnit,
  listEviuPreIntermediateUnits,
} from "@/lib/vocabulary/units/eviu-pre-intermediate-all-units";

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
  {
    id: "eviu-pre-intermediate",
    title: "English Vocabulary in Use · Pre-Intermediate",
    description:
      "100 unit trình độ A2 — lý thuyết, bài tập và thẻ SRS theo EVIU Pre-Intermediate (4th ed.), bổ sung sau Elementary.",
    unitIds: EVIU_PRE_INTERMEDIATE_CATALOG.map((entry) => entry.id),
  },
];

export function getVocabularyUnit(unitId: string): VocabularyUnit | null {
  return getEviuElementaryUnit(unitId) ?? getEviuPreIntermediateUnit(unitId);
}

export function listCuratedVocabularyUnits(): VocabularyUnit[] {
  return [...listEviuElementaryUnits(), ...listEviuPreIntermediateUnits()];
}

export function buildUnitDeckName(unit: VocabularyUnit): string {
  return `${unit.title} · ${unit.level}`;
}

export function curatedUnitHref(unitId: string): string {
  return `/tu-hoc/tu-vung/goi-y/${unitId}`;
}

function withPublishedStatus(
  entry: VocabularyUnitCatalogEntry,
  hasContent: boolean,
): VocabularyUnitCatalogEntry {
  return { ...entry, status: hasContent ? "published" : entry.status };
}

export function getVocabularyCatalogEntry(unitId: string): VocabularyUnitCatalogEntry | null {
  return getElementaryCatalogEntry(unitId) ?? getEVIUPreIntermediateCatalogEntry(unitId);
}

export function getPublishedCatalogEntry(unitId: string): VocabularyUnitCatalogEntry | null {
  const entry = getVocabularyCatalogEntry(unitId);
  if (!entry || !getVocabularyUnit(unitId)) return null;
  return { ...entry, status: "published" };
}

export function listPublishedCatalog(): readonly VocabularyUnitCatalogEntry[] {
  const elementary = listEVIUElementaryCatalog().map((entry) =>
    withPublishedStatus(entry, Boolean(getEviuElementaryUnit(entry.id))),
  );
  const preIntermediate = listEVIUPreIntermediateCatalog()
    .map((entry) => withPublishedStatus(entry, Boolean(getEviuPreIntermediateUnit(entry.id))))
    .filter((entry) => entry.status === "published");
  return [...elementary, ...preIntermediate];
}

export { listEVIUElementaryCatalog, listEVIUPreIntermediateCatalog };
