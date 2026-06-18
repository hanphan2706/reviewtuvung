"use client";

import { RealExamTestCard } from "@/components/exam/real-exam-test-card";
import { ListeningIeltsTestCard } from "@/components/listening/listening-ielts-test-card";
import type { ListeningIeltsTest } from "@/lib/listening/ielts-test-catalog";
import type { ListeningIeltsExamGridItem } from "@/lib/study-hub/ielts-exam-grid";

type ListeningIeltsTestGridProps = {
  items: readonly ListeningIeltsExamGridItem[];
  onStartRealExam: (exam: Parameters<typeof RealExamTestCard>[0]["exam"]) => void;
  onStartTest: (test: ListeningIeltsTest) => void;
  emptyMessage?: string;
};

export function ListeningIeltsTestGrid({
  items,
  onStartRealExam,
  onStartTest,
  emptyMessage = "Chưa có đề IELTS trong mục này.",
}: ListeningIeltsTestGridProps) {
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
            moduleLabel="Academic Listening"
            onClick={() => onStartRealExam(item.exam)}
          />
        ) : (
          <ListeningIeltsTestCard
            key={item.key}
            test={item.test}
            onClick={() => onStartTest(item.test)}
          />
        ),
      )}
    </div>
  );
}
