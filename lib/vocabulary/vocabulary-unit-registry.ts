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
  EVIU_UPPER_INTERMEDIATE_CATALOG,
  getEVIUUpperIntermediateCatalogEntry,
  listEVIUUpperIntermediateCatalog,
} from "@/lib/vocabulary/eviu-upper-intermediate-catalog";
import {
  EVIU_ADVANCED_CATALOG,
  getEVIUAdvancedCatalogEntry,
  listEVIUAdvancedCatalog,
} from "@/lib/vocabulary/eviu-advanced-catalog";
import {
  getEviuElementaryUnit,
  listEviuElementaryUnits,
} from "@/lib/vocabulary/units/eviu-elementary-all-units";
import {
  getEviuPreIntermediateUnit,
  listEviuPreIntermediateUnits,
} from "@/lib/vocabulary/units/eviu-pre-intermediate-all-units";
import {
  getEviuUpperIntermediateUnit,
  listEviuUpperIntermediateUnits,
} from "@/lib/vocabulary/units/eviu-upper-intermediate-all-units";
import {
  getEviuAdvancedUnit,
  listEviuAdvancedUnits,
} from "@/lib/vocabulary/units/eviu-advanced-all-units";
import { enrichVocabularyUnitIpa } from "@/lib/vocabulary/ipa/enrich-vocabulary-unit-ipa";

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
      "Unit chủ đề trình độ A2 — lý thuyết, bài tập và thẻ SRS theo EVIU Pre-Intermediate (4th ed.), bổ sung sau Elementary.",
    unitIds: EVIU_PRE_INTERMEDIATE_CATALOG.filter((entry) => entry.section !== "learning").map(
      (entry) => entry.id,
    ),
  },
  {
    id: "eviu-upper-intermediate",
    title: "English Vocabulary in Use · Upper-Intermediate",
    description:
      "101 unit trình độ B2 — lý thuyết, bài tập và thẻ SRS theo EVIU Upper-Intermediate (4th ed.); đang mở dần theo chủ đề.",
    unitIds: EVIU_UPPER_INTERMEDIATE_CATALOG.map((entry) => entry.id),
  },
  {
    id: "eviu-advanced",
    title: "English Vocabulary in Use · Advanced",
    description:
      "101 unit trình độ C1–C2 — lý thuyết, bài tập và thẻ SRS theo EVIU Advanced (3rd ed.); đang mở dần theo chủ đề.",
    unitIds: EVIU_ADVANCED_CATALOG.map((entry) => entry.id),
  },
];

export function getVocabularyUnit(unitId: string): VocabularyUnit | null {
  const unit =
    getEviuElementaryUnit(unitId) ??
    getEviuPreIntermediateUnit(unitId) ??
    getEviuUpperIntermediateUnit(unitId) ??
    getEviuAdvancedUnit(unitId);
  return unit ? enrichVocabularyUnitIpa(unit) : null;
}

export function listCuratedVocabularyUnits(): VocabularyUnit[] {
  return [
    ...listEviuElementaryUnits(),
    ...listEviuPreIntermediateUnits(),
    ...listEviuUpperIntermediateUnits(),
    ...listEviuAdvancedUnits(),
  ].map(enrichVocabularyUnitIpa);
}

export function buildUnitDeckName(unit: VocabularyUnit): string {
  return `${unit.title} · ${unit.level}`;
}

export function curatedUnitHref(unitId: string): string {
  return `/tu-hoc/tu-vung/goi-y/${unitId}`;
}

/** Ôn flashcard theo unit — không tạo / ghi SRS deck. */
export function curatedUnitPracticeHref(unitId: string): string {
  return `${curatedUnitHref(unitId)}/on-tap`;
}

function withPublishedStatus(
  entry: VocabularyUnitCatalogEntry,
  hasContent: boolean,
): VocabularyUnitCatalogEntry {
  return { ...entry, status: hasContent ? "published" : entry.status };
}

export function getVocabularyCatalogEntry(unitId: string): VocabularyUnitCatalogEntry | null {
  return (
    getElementaryCatalogEntry(unitId) ??
    getEVIUPreIntermediateCatalogEntry(unitId) ??
    getEVIUUpperIntermediateCatalogEntry(unitId) ??
    getEVIUAdvancedCatalogEntry(unitId)
  );
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
  const upperIntermediate = listEVIUUpperIntermediateCatalog()
    .map((entry) => withPublishedStatus(entry, Boolean(getEviuUpperIntermediateUnit(entry.id))))
    .filter((entry) => entry.status === "published");
  const advanced = listEVIUAdvancedCatalog()
    .map((entry) => withPublishedStatus(entry, Boolean(getEviuAdvancedUnit(entry.id))))
    .filter((entry) => entry.status === "published");
  return [...elementary, ...preIntermediate, ...upperIntermediate, ...advanced];
}

export {
  listEVIUElementaryCatalog,
  listEVIUPreIntermediateCatalog,
  listEVIUUpperIntermediateCatalog,
  listEVIUAdvancedCatalog,
};
