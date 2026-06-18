"use client";

import { RealExamTestCard } from "@/components/exam/real-exam-test-card";
import { ReadingIeltsTestCard } from "@/components/reading/reading-ielts-test-card";
import type { ReadingIeltsTest } from "@/lib/reading/ielts-test-catalog";
import type { ReadingIeltsExamGridItem } from "@/lib/study-hub/ielts-exam-grid";

type ReadingIeltsTestGridProps = {
  items: readonly ReadingIeltsExamGridItem[];
  onStartRealExam: (exam: Parameters<typeof RealExamTestCard>[0]["exam"]) => void;
  onStartTest: (test: ReadingIeltsTest) => void;
  emptyMessage?: string;
};

export function ReadingIeltsTestGrid({
  items,
  onStartRealExam,
  onStartTest,
  emptyMessage = "Chưa có đề IELTS trong mục này.",
}: ReadingIeltsTestGridProps) {
  if (items.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-[#E4E4E7] bg-white px-6 py-12 text-center text-sm text-[#47464b]">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) =>
        item.kind === "real" ? (
          <RealExamTestCard
            key={item.key}
            exam={item.exam}
            moduleLabel="Academic Reading"
            onClick={() => onStartRealExam(item.exam)}
          />
        ) : (
          <ReadingIeltsTestCard
            key={item.key}
            test={item.test}
            onClick={() => onStartTest(item.test)}
          />
        ),
      )}
    </div>
  );
}
