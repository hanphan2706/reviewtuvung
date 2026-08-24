import { WRITING_HISTORY_HREF } from "@/lib/writing/writing-hub-nav";

/** Snapshot Recent Progress trên hub luyện viết. */

export type WritingProgressSnapshot = {
  essaysCompleted: { current: number; total: number };
  languageAccuracyPercent: number;
  streakDays: number;
  historyHref: string;
};

export type WritingSkillId = "dich-cau" | "cloze" | "sua-loi";

export type WritingEssayProgressPayload = {
  kind: "essay";
  promptId: string;
  task: "task1" | "task2";
  wordCount: number;
  body: string;
  title: string;
  promptText: string;
};

export type WritingSkillProgressPayload = {
  kind: "skill";
  skill: WritingSkillId;
  itemId: string;
  /** Số chỗ/câu đúng trong lần check này. */
  correctCount: number;
  /** Tổng chỗ/câu được chấm trong lần check này (≥ 1). */
  totalCount: number;
};

export type WritingProgressPostPayload = WritingEssayProgressPayload | WritingSkillProgressPayload;

export type WritingEssayHistoryItem = {
  id: number;
  promptId: string;
  task: "task1" | "task2";
  title: string;
  excerpt: string;
  wordCount: number;
  submittedAt: string;
};

export type WritingEssaySubmission = WritingEssayHistoryItem & {
  promptText: string;
  body: string;
  visualSrc?: string;
};

export type WritingSavedSampleItem = {
  sampleId: string;
  task: "task1" | "task2";
  title: string;
  excerpt: string;
  wordCount: number;
  savedAt: string;
  href: string;
};

export const MAX_WRITING_ESSAY_BODY_CHARS = 20_000;

export const EMPTY_WRITING_PROGRESS: WritingProgressSnapshot = {
  essaysCompleted: { current: 0, total: 0 },
  languageAccuracyPercent: 0,
  streakDays: 0,
  historyHref: WRITING_HISTORY_HREF,
};
