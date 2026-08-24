import { excerptWritingAnswer } from "@/lib/ielts-samples/writing-sample-types";
import type {
  WritingEssayHistoryItem,
  WritingEssaySubmission,
} from "@/lib/writing/writing-progress-types";

export type WritingEssaySubmissionRow = {
  id: number;
  prompt_id: string;
  task: string;
  title: string;
  prompt_text: string;
  body: string;
  word_count: number;
  submitted_at: string;
};

export function toWritingEssayHistoryItem(row: WritingEssaySubmissionRow): WritingEssayHistoryItem {
  return {
    id: Number(row.id),
    promptId: row.prompt_id,
    task: row.task === "task1" ? "task1" : "task2",
    title: row.title.trim() || "Bài viết",
    excerpt: excerptWritingAnswer(row.body, 180),
    wordCount: Number(row.word_count) || 0,
    submittedAt: row.submitted_at,
  };
}

export function toWritingEssaySubmission(
  row: WritingEssaySubmissionRow,
  visualSrc?: string,
): WritingEssaySubmission {
  return {
    ...toWritingEssayHistoryItem(row),
    promptText: row.prompt_text,
    body: row.body,
    ...(visualSrc ? { visualSrc } : {}),
  };
}
