/** Sample Writing (Task 1 / Task 2) — đồng bộ từ HTML library. */

export type WritingTaskKind = "task1" | "task2";

export type WritingSample = {
  /** Khớp tên file HTML nguồn, không có `.html` (vd. `w-task2-food-waste-shops-restaurants`). */
  id: string;
  title: string;
  task: WritingTaskKind;
  /** map | table | line | opinion | two-part | … (raw từ HTML). */
  type: string;
  /** Topic keyword từ index HTML (vd. crime, food, education). */
  topic: string;
  band: string;
  promptHtml: string;
  /** Đường dẫn public cho chart Task 1, nếu có. */
  visualSrc?: string;
  modelAnswer: string;
  wordCount?: number;
  usefulLanguage: readonly { phrase: string; glossVi: string }[];
  sourceUrl: string;
  syncedAt: string;
};

export type WritingSampleCatalogEntry = Pick<
  WritingSample,
  "id" | "title" | "task" | "type" | "topic" | "band"
> & {
  /** Đoạn mở đầu để hiện trên thẻ — không gồm full essay. */
  excerpt: string;
};

/** Đề luyện Task 1/2 — chỉ prompt, không model answer. */
export type WritingPracticePrompt = Pick<
  WritingSample,
  "id" | "title" | "task" | "type" | "topic" | "promptHtml"
> & {
  visualSrc?: string;
};

export type WritingPracticeCatalogEntry = Pick<
  WritingSample,
  "id" | "title" | "task" | "type" | "topic"
> & {
  /** Đoạn đề bài trên thẻ — không gồm model answer. */
  promptExcerpt: string;
};

export function excerptWritingAnswer(answer: string, max = 160): string {
  const clean = answer.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max).trimEnd()}…`;
}

export function stripWritingPromptHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>\s*<p>/gi, "\n\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function excerptWritingPrompt(promptHtml: string, max = 160): string {
  return excerptWritingAnswer(stripWritingPromptHtml(promptHtml), max);
}
