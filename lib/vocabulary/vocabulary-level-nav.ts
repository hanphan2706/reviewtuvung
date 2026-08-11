import type { VocabularyUnitLevel } from "@/lib/vocabulary/vocabulary-catalog-types";
import { listPublishedCatalog } from "@/lib/vocabulary/vocabulary-unit-registry";

export type VocabularyLevelNavItem = {
  label: string;
  href: string;
};

export const VOCABULARY_GOI_Y_HREF = "/tu-hoc/tu-vung/goi-y" as const;

const LEVEL_SLUG: Record<VocabularyUnitLevel, string> = {
  A1: "a1",
  A2: "a2",
  B2: "b2",
  C1: "c1",
};

const LEVEL_BY_SLUG = Object.fromEntries(
  Object.entries(LEVEL_SLUG).map(([level, slug]) => [slug, level as VocabularyUnitLevel]),
) as Record<string, VocabularyUnitLevel>;

const LEVEL_LABEL: Record<VocabularyUnitLevel, string> = {
  A1: "A1 (Elementary)",
  A2: "A2 (Pre-Intermediate)",
  B2: "B2 (Upper-Intermediate)",
  C1: "C1 (Advanced)",
};

export function vocabularyLevelLabel(level: VocabularyUnitLevel): string {
  return LEVEL_LABEL[level];
}

function usedLevels(): VocabularyUnitLevel[] {
  const order: VocabularyUnitLevel[] = ["A1", "A2", "B2", "C1"];
  const set = new Set(listPublishedCatalog().map((entry) => entry.level));
  return order.filter((level) => set.has(level));
}

export const VOCABULARY_LEVEL_NAV: VocabularyLevelNavItem[] = usedLevels().map((level) => ({
  label: LEVEL_LABEL[level],
  href: `${VOCABULARY_GOI_Y_HREF}/do-kho/${LEVEL_SLUG[level]}`,
}));

export function vocabularyLevelBySlug(slug: string): VocabularyUnitLevel | null {
  return LEVEL_BY_SLUG[slug] ?? null;
}

export function vocabularyLevelPageTitle(level: VocabularyUnitLevel): string {
  return `Độ khó: ${LEVEL_LABEL[level]}`;
}
