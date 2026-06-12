"use client";

import { ListeningIeltsTestCard } from "@/components/listening/listening-ielts-test-card";
import type { ListeningIeltsTest } from "@/lib/listening/ielts-test-catalog";

type ListeningIeltsTestGridProps = {
  tests: readonly ListeningIeltsTest[];
  onStartTest: (test: ListeningIeltsTest) => void;
  emptyMessage?: string;
};

export function ListeningIeltsTestGrid({
  tests,
  onStartTest,
  emptyMessage = "Chưa có đề IELTS trong mục này.",
}: ListeningIeltsTestGridProps) {
  if (tests.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-[#E4E4E7] bg-white px-6 py-12 text-center text-sm text-[#47464b]">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tests.map((test) => (
        <ListeningIeltsTestCard key={test.testId} test={test} onClick={() => onStartTest(test)} />
      ))}
    </div>
  );
}
