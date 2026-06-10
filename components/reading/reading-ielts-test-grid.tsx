"use client";

import { ReadingIeltsTestCard } from "@/components/reading/reading-ielts-test-card";
import type { ReadingIeltsTest } from "@/lib/reading/ielts-test-catalog";

type ReadingIeltsTestGridProps = {
  tests: readonly ReadingIeltsTest[];
  onStartTest: (test: ReadingIeltsTest) => void;
};

export function ReadingIeltsTestGrid({ tests, onStartTest }: ReadingIeltsTestGridProps) {
  if (tests.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-[#E4E4E7] bg-white px-6 py-12 text-center text-sm text-[#47464b]">
        Chưa có đề IELTS trong mục này.
      </p>
    );
  }

  return (
    <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tests.map((test) => (
        <ReadingIeltsTestCard key={test.pilotId} test={test} onClick={() => onStartTest(test)} />
      ))}
    </div>
  );
}
