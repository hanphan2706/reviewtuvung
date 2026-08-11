import type { VocabularyUnitCatalogEntry } from "@/lib/vocabulary/vocabulary-catalog-types";
import { lookupVocabularyIpa } from "@/lib/vocabulary/ipa/vocabulary-ipa-lookup";
import type {
  VocabularyExercise,
  VocabularyTheoryBlock,
  VocabularyUnit,
  VocabularyWordPreset,
} from "@/lib/vocabulary/vocabulary-unit-types";
import { MAX_VOCABULARY_UNIT_EXERCISES } from "@/lib/vocabulary/vocabulary-unit-types";

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

/** JSON book units store legacy `${purple("…")}` / `${bold("…")}` — render to HTML. */
export function renderBookTemplateHtml(text: string): string {
  if (!text.includes("${")) return text;
  return text
    .replace(/\$\{purple\("((?:\\"|[^"])*)"\)\}/g, (_, inner: string) =>
      purple(inner.replace(/\\"/g, '"')),
    )
    .replace(/\$\{bold\("((?:\\"|[^"])*)"\)\}/g, (_, inner: string) =>
      bold(inner.replace(/\\"/g, '"')),
    );
}

export type WordInput = {
  term: string;
  definition: string;
  partOfSpeech?: string;
  example?: string;
  /** Phiên âm IPA — nếu bỏ trống sẽ thử lookup tập trung. */
  ipa?: string;
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
  return words.map((w) => {
    const ipa = w.ipa?.trim() || lookupVocabularyIpa(w.term);
    return {
      id: wordId(unitNumber, w.term),
      term: w.term,
      definition: w.definition,
      partOfSpeech: w.partOfSpeech ?? "NOUN",
      example: w.example,
      ...(ipa ? { ipa } : {}),
    };
  });
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

export function buildEviuUnit(
  catalog: VocabularyUnitCatalogEntry,
  content: UnitContentInput,
  options?: { series?: "elementary" | "pre-intermediate" | "upper-intermediate" | "advanced" },
): VocabularyUnit {
  if (content.exercises.length > MAX_VOCABULARY_UNIT_EXERCISES) {
    throw new Error(
      `Unit ${catalog.unitNumber} (${catalog.id}) has ${content.exercises.length} exercises; max is ${MAX_VOCABULARY_UNIT_EXERCISES}.`,
    );
  }

  const series = options?.series ?? "elementary";
  const seriesLabel =
    series === "advanced"
      ? "English Vocabulary in Use · Advanced (3rd ed.)"
      : series === "upper-intermediate"
        ? "English Vocabulary in Use · Upper-Intermediate (4th ed.)"
        : series === "pre-intermediate"
          ? "English Vocabulary in Use · Pre-Intermediate (4th ed.)"
          : "English Vocabulary in Use · Elementary (3rd ed.)";

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
    sourceNote: `Unit ${catalog.unitNumber} ${catalog.topic}. Từ vựng và bài tập biên soạn theo khung ${seriesLabel}; nội dung diễn đạt gốc, không sao chép sách.`,
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

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function blankTermInText(text: string, term: string): string | null {
  const pattern = new RegExp(`\\b${escapeRegExp(term)}\\b`, "i");
  if (!pattern.test(text)) return null;
  return text.replace(pattern, "___");
}

function shuffleWithSeed<T>(items: readonly T[], seed: number): T[] {
  const next = [...items];
  let state = seed;
  for (let i = next.length - 1; i > 0; i -= 1) {
    state = (state * 1103515245 + 12345) & 0x7fffffff;
    const j = state % (i + 1);
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function pickDistractorTerms(words: readonly WordInput[], targetIndex: number, count: number): string[] {
  const target = words[targetIndex]?.term.toLowerCase();
  if (!target) return [];
  const picked: string[] = [];
  for (let offset = 1; offset < words.length && picked.length < count; offset += 1) {
    const term = words[(targetIndex + offset) % words.length].term;
    if (term.toLowerCase() !== target && !picked.some((item) => item.toLowerCase() === term.toLowerCase())) {
      picked.push(term);
    }
  }
  return picked;
}

function buildTermOptions(correct: string, distractors: readonly string[], seed: number) {
  const labels = shuffleWithSeed([correct, ...distractors], seed);
  const options = labels.map((label, index) => ({ key: String.fromCharCode(97 + index), label }));
  const correctKey = options.find((option) => option.label.toLowerCase() === correct.toLowerCase())?.key ?? "a";
  return { options, correctKey };
}

function wordIndexOf(words: readonly WordInput[], target: WordInput): number {
  const index = words.findIndex((word) => word.term === target.term);
  return index >= 0 ? index : 0;
}

function plainDefinition(definition: string): string {
  return definition
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Tạo bài tập đa dạng từ ví dụ / nghĩa — tránh dạng máy móc hoặc "tìm câu có chuỗi chữ".
 * Mỗi từ chỉ xuất hiện một lần; luân phiên cloze, chọn từ theo nghĩa VI, chọn từ điền chỗ trống.
 */
export function buildVariedWordExercises(
  unitNumber: number,
  words: readonly WordInput[],
  count = 10,
): VocabularyExercise[] {
  if (words.length < 4) return [];

  const limit = Math.min(count, MAX_VOCABULARY_UNIT_EXERCISES);
  const exercises: VocabularyExercise[] = [];
  const usedTerms = new Set<string>();
  let exerciseIndex = 1;

  for (let i = 0; i < words.length && exercises.length < limit; i += 1) {
    const target = words[i];
    const termKey = target.term.toLowerCase();
    if (usedTerms.has(termKey)) continue;

    const targetIndex = wordIndexOf(words, target);
    const distractorTerms = pickDistractorTerms(words, targetIndex, 3);
    if (distractorTerms.length < 3) continue;

    const variant = exercises.length % 3;
    let created: VocabularyExercise | null = null;

    if (variant === 0 && target.example) {
      const prompt = blankTermInText(target.example, target.term);
      if (prompt) {
        const { options, correctKey } = buildTermOptions(target.term, distractorTerms, unitNumber * 100 + i);
        created = fillBlank(
          unitNumber,
          exerciseIndex,
          prompt,
          target.term,
          options,
          correctKey,
          [target.term.toLowerCase()],
          "Điền từ vào chỗ trống",
        );
      }
    } else if (variant === 1) {
      const meaning = plainDefinition(target.definition);
      if (meaning) {
        const { options, correctKey } = buildTermOptions(
          target.term,
          distractorTerms,
          unitNumber * 100 + i + 17,
        );
        created = mcq(
          unitNumber,
          exerciseIndex,
          `Từ nào mang nghĩa: “${meaning}”?`,
          options,
          correctKey,
          "Chọn từ theo nghĩa",
        );
      }
    } else if (target.example) {
      const prompt = blankTermInText(target.example, target.term);
      if (prompt) {
        const { options, correctKey } = buildTermOptions(target.term, distractorTerms, unitNumber * 100 + i + 53);
        created = mcq(
          unitNumber,
          exerciseIndex,
          prompt,
          options,
          correctKey,
          "Chọn từ thích hợp",
        );
      }
    }

    if (!created) continue;
    usedTerms.add(termKey);
    exerciseIndex += 1;
    exercises.push(created);
  }

  return exercises.slice(0, limit);
}

export { B, _B, P, _P };
