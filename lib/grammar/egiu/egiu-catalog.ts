import egiuUnitsJson from "@/lib/grammar/egiu/egiu-units.json";
import type { GrammarCategoryId, GrammarTopic } from "@/lib/grammar/grammar-hub-data";

export type EgiuMapFlag =
  | "picture-exercises"
  | "contrast-pair"
  | "needs-side-by-side-with-unit-3"
  | "needs-side-by-side-with-unit-4"
  | "needs-side-by-side-with-unit-13"
  | "needs-side-by-side-with-unit-14"
  | "collocation-list"
  | "phrasal-vocab-heavy"
  | "nuance-multiple-adverbs"
  | "nuance-like-as";

export type EgiuUnitRecord = {
  unitNumber: number;
  id: string;
  title: string;
  subtitle: string;
  section: string;
  category: GrammarCategoryId;
  kindLabel: string;
  difficulty: GrammarTopic["difficulty"];
  mapFlags: readonly EgiuMapFlag[];
  description: string;
};

const DIFFICULTY_VI: Record<GrammarTopic["difficulty"], GrammarTopic["difficultyVi"]> = {
  Easy: "Dễ",
  Medium: "Trung bình",
  Hard: "Khó",
};

const CATEGORY_LABEL: Record<GrammarCategoryId, string> = {
  tenses: "TENSES",
  clauses: "CLAUSES",
  structures: "STRUCTURES",
  verbs: "VERBS",
  modals: "MODALS",
  nouns: "NOUNS",
};

export const EGIU_UNITS: readonly EgiuUnitRecord[] = egiuUnitsJson as EgiuUnitRecord[];

export const EGIU_UNIT_COUNT = EGIU_UNITS.length;

export const EGIU_UNITS_BY_ID: Readonly<Record<string, EgiuUnitRecord>> = Object.fromEntries(
  EGIU_UNITS.map((unit) => [unit.id, unit]),
);

export const EGIU_UNITS_BY_NUMBER: Readonly<Record<number, EgiuUnitRecord>> = Object.fromEntries(
  EGIU_UNITS.map((unit) => [unit.unitNumber, unit]),
);

export const EGIU_HARD_TO_MAP_UNITS: readonly EgiuUnitRecord[] = EGIU_UNITS.filter(
  (unit) => unit.mapFlags.length > 0,
);

/** Fully curated: all mapped EGIU Intermediate units (1–128; 129–145 removed). */
const CURATED_UNIT_NUMBERS = new Set(
  Array.from({ length: 128 }, (_, index) => index + 1),
);

export function egiuUnitToGrammarTopic(unit: EgiuUnitRecord): GrammarTopic {
  const isCurated = CURATED_UNIT_NUMBERS.has(unit.unitNumber);
  return {
    id: unit.id,
    title: unit.title,
    description: unit.description,
    category: unit.category,
    categoryLabel: CATEGORY_LABEL[unit.category],
    difficulty: unit.difficulty,
    difficultyVi: DIFFICULTY_VI[unit.difficulty],
    progressPercent: 0,
    status: isCurated ? "published" : "coming-soon",
    unitNumber: unit.unitNumber,
  };
}

export const EGIU_GRAMMAR_TOPICS: readonly GrammarTopic[] = EGIU_UNITS.map(egiuUnitToGrammarTopic);
