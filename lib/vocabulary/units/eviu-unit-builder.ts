import type { VocabularyUnitCatalogEntry } from "@/lib/vocabulary/eviu-elementary-catalog";
import type {
  VocabularyExercise,
  VocabularyTheoryBlock,
  VocabularyUnit,
  VocabularyWordPreset,
} from "@/lib/vocabulary/vocabulary-unit-types";

const B = "<b>";
const _B = "</b>";
const P = '<span style="color: #4b2876">';
const _P = "</span>";

export function purple(term: string): string {
  return `${P}${term}${_P}`;
}

export function bold(term: string): string {
  return `${B}${term}${_B}`;
}

export type WordInput = {
  term: string;
  definition: string;
  partOfSpeech?: string;
  example?: string;
};

export function ex(en: string, vi: string): string {
  const trimmedVi = vi.trim();
  if (!trimmedVi) return en;
  return `${en} (${trimmedVi})`;
}

export type PrincipleExampleInput = string | { en: string; vi: string };

function formatPrincipleExample(example: PrincipleExampleInput): string {
  if (typeof example === "string") return example;
  return ex(example.en, example.vi);
}

export type PrincipleInput = {
  title: string;
  body: string;
  examples: PrincipleExampleInput[];
};

export type UnitContentInput = {
  introVi: string;
  structureSections: { label: string; wordCount: number }[];
  collocationHtml: string;
  mistakeHtml: string;
  principles: PrincipleInput[];
  words: WordInput[];
  exercises: VocabularyExercise[];
};

function wordId(unitNumber: number, term: string): string {
  const slug = term
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `u${unitNumber}-${slug}`;
}

function mapWords(unitNumber: number, words: WordInput[]): VocabularyWordPreset[] {
  return words.map((w) => ({
    id: wordId(unitNumber, w.term),
    term: w.term,
    definition: w.definition,
    partOfSpeech: w.partOfSpeech ?? "NOUN",
    example: w.example,
  }));
}

function buildTheory(collocationHtml: string, mistakeHtml: string, principles: PrincipleInput[]): VocabularyTheoryBlock[] {
  const items = principles.map((p, i) => ({
    number: String(i + 1).padStart(2, "0"),
    title: p.title,
    body: p.body,
    exampleHtml: p.examples.map(formatPrincipleExample).join("<br>"),
  }));

  return [
    {
      type: "feature-cards",
      cards: [
        { icon: "link", title: "Cụm từ cố định", description: collocationHtml },
        { icon: "lightbulb", title: "Lỗi thường gặp", description: mistakeHtml },
      ],
    },
    { type: "heading", text: "Nguyên tắc sử dụng cơ bản" },
    { type: "principles", items },
  ];
}

export function buildEviuUnit(catalog: VocabularyUnitCatalogEntry, content: UnitContentInput): VocabularyUnit {
  return {
    id: catalog.id,
    topic: catalog.topic,
    topicVi: catalog.topicVi,
    level: catalog.level,
    title: catalog.title,
    titleVi: catalog.titleVi,
    introVi: content.introVi,
    description: catalog.description,
    sourceBook: catalog.sourceBook,
    sourceNote: `Unit ${catalog.unitNumber} ${catalog.topic}. Từ vựng và bài tập biên soạn theo chủ đề sách EVIU Elementary.`,
    structureSections: content.structureSections,
    theory: buildTheory(content.collocationHtml, content.mistakeHtml, content.principles),
    exercises: content.exercises,
    words: mapWords(catalog.unitNumber, content.words),
  };
}

export function mcq(
  unitNumber: number,
  index: number,
  question: string,
  options: { key: string; label: string }[],
  correctKey: string,
  label = "Chọn đáp án đúng",
): VocabularyExercise {
  return {
    type: "mcq",
    id: `ex-${unitNumber}-mcq-${index}`,
    label,
    question,
    options,
    correctKey,
  };
}

export function fillBlank(
  unitNumber: number,
  index: number,
  prompt: string,
  answer: string,
  options: { key: string; label: string }[],
  correctKey: string,
  alternatives?: string[],
  label = "Hoàn thành câu",
): VocabularyExercise {
  return {
    type: "fill-blank",
    id: `ex-${unitNumber}-fill-${index}`,
    label,
    prompt,
    answer,
    alternatives,
    options,
    correctKey,
  };
}

export { B, _B, P, _P };
