/** Sample Speaking (Part 1 / 2 / 3) — đồng bộ từ HTML library. */

export type SpeakingPartKind = "part1" | "part2" | "part3";

export type SpeakingVocabItem = {
  term: string;
  meta?: string;
  glossVi: string;
  example?: string;
};

export type SpeakingQaPair = {
  question: string;
  answer: string;
};

export type SpeakingSample = {
  /** Khớp tên file HTML nguồn, không có `.html`. */
  id: string;
  title: string;
  part: SpeakingPartKind;
  band: string;
  questions: readonly string[];
  answers: readonly SpeakingQaPair[];
  /** Part 2 monologue — khi không tách Q/A. */
  modelMonologue?: string;
  vocabulary: readonly SpeakingVocabItem[];
  /** id bài Part 3 liên kết (nếu có). */
  relatedPart3Id?: string;
  /** id bài Part 2 liên kết (nếu có). */
  relatedPart2Id?: string;
  sourceUrl: string;
  syncedAt: string;
};

export type SpeakingSampleCatalogEntry = Pick<SpeakingSample, "id" | "title" | "part" | "band">;
