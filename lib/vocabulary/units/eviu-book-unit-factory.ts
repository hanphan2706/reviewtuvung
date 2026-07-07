import type {
  VocabularyExercise,
  VocabularyTheoryBlock,
  VocabularyUnit,
  VocabularyWordPreset,
} from "@/lib/vocabulary/vocabulary-unit-types";
import { MAX_VOCABULARY_UNIT_EXERCISES } from "@/lib/vocabulary/vocabulary-unit-types";
import { renderBookTemplateHtml } from "@/lib/vocabulary/units/eviu-unit-builder";

export type BookUnitPrinciple = {
  title: string;
  body: string;
  examples: readonly { en: string; vi: string }[];
};

export type BookUnitWord = {
  term: string;
  definition: string;
  example: string;
  partOfSpeech?: string;
};

export type BookUnitExercise =
  | {
      type: "fill-blank";
      id: string;
      label?: string;
      prompt: string;
      answer: string;
      alternatives?: readonly string[];
      hint?: string;
    }
  | {
      type: "match";
      id: string;
      instruction: string;
      pairs: readonly { left: string; right: string }[];
    };

export type BookUnitRecord = {
  unitNumber: number;
  id: string;
  topic: string;
  topicVi: string;
  description: string;
  introVi: string;
  sourceBook: string;
  sourceNote: string;
  structureSections: readonly { label: string; wordCount: number }[];
  collocationHtml: string;
  mistakeHtml: string;
  principles: readonly BookUnitPrinciple[];
  words: readonly BookUnitWord[];
  exercises: readonly BookUnitExercise[];
};

function wordId(unitNumber: number, term: string): string {
  const slug = term
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `u${unitNumber}-${slug}`;
}

function formatExampleLine(en: string, vi: string): string {
  const trimmedVi = vi.trim();
  if (!trimmedVi) return en;
  return `${en} (${trimmedVi})`;
}

function buildTheory(record: BookUnitRecord): VocabularyTheoryBlock[] {
  const cards: VocabularyTheoryBlock[] = [];
  const collocationHtml = renderBookTemplateHtml(record.collocationHtml);
  const mistakeHtml = renderBookTemplateHtml(record.mistakeHtml);

  if (collocationHtml.trim()) {
    cards.push({
      type: "feature-cards",
      cards: [
        {
          icon: "link",
          title: "Cụm từ cố định",
          description: collocationHtml,
        },
        {
          icon: "lightbulb",
          title: "Lỗi thường gặp",
          description: mistakeHtml || "Xem ví dụ trong sách và chú ý cách dùng từ theo ngữ cảnh.",
        },
      ],
    });
  } else if (mistakeHtml.trim()) {
    cards.push({
      type: "feature-cards",
      cards: [
        {
          icon: "lightbulb",
          title: "Lỗi thường gặp",
          description: mistakeHtml,
        },
      ],
    });
  }

  const principleItems = record.principles.map((p, i) => ({
    number: String(i + 1).padStart(2, "0"),
    title: p.title,
    body: renderBookTemplateHtml(p.body),
    exampleHtml: p.examples.map((ex) => formatExampleLine(ex.en, ex.vi)).join("<br>"),
  }));

  return [
    ...cards,
    { type: "heading", text: "Nguyên tắc sử dụng cơ bản" },
    { type: "principles", items: principleItems },
  ];
}

function mapWords(unitNumber: number, words: readonly BookUnitWord[]): VocabularyWordPreset[] {
  return words.map((w) => ({
    id: wordId(unitNumber, w.term),
    term: w.term,
    definition: w.definition,
    partOfSpeech: w.partOfSpeech ?? "NOUN",
    example: w.example,
  }));
}

function mapExercises(exercises: readonly BookUnitExercise[]): VocabularyExercise[] {
  return exercises.map((ex) => {
    if (ex.type === "match") {
      return {
        type: "match",
        id: ex.id,
        instruction: ex.instruction,
        pairs: ex.pairs,
      };
    }
    return {
      type: "fill-blank",
      id: ex.id,
      label: ex.label,
      prompt: ex.prompt,
      answer: ex.answer,
      alternatives: ex.alternatives,
      hint: ex.hint,
    };
  });
}

export function buildBookFaithfulUnit(record: BookUnitRecord): VocabularyUnit {
  if (record.exercises.length > MAX_VOCABULARY_UNIT_EXERCISES) {
    throw new Error(
      `Unit ${record.unitNumber} (${record.id}) has ${record.exercises.length} exercises; max is ${MAX_VOCABULARY_UNIT_EXERCISES}.`,
    );
  }

  return {
    id: record.id,
    topic: record.topic,
    topicVi: record.topicVi,
    level: "A1",
    title: record.topic,
    titleVi: record.topicVi,
    introVi: record.introVi,
    description: record.description,
    sourceBook: record.sourceBook,
    sourceNote: record.sourceNote,
    structureSections: record.structureSections,
    theory: buildTheory(record),
    exercises: mapExercises(record.exercises),
    words: mapWords(record.unitNumber, record.words),
  };
}
