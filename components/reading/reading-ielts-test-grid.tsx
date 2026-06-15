"use client";

import { RealExamTestCard } from "@/components/exam/real-exam-test-card";
import { ReadingIeltsTestCard } from "@/components/reading/reading-ielts-test-card";
import type { RealExamListing } from "@/lib/exam/real-exam-catalog";
import type { ReadingIeltsTest } from "@/lib/reading/ielts-test-catalog";

type ReadingIeltsTestGridProps = {
  realExams?: readonly RealExamListing[];
  tests: readonly ReadingIeltsTest[];
  onStartRealExam?: (exam: RealExamListing) => void;
  onStartTest: (test: ReadingIeltsTest) => void;
  emptyMessage?: string;
};

export function ReadingIeltsTestGrid({
  realExams = [],
  tests,
  onStartRealExam,
  onStartTest,
  emptyMessage = "Chưa có đề IELTS trong mục này.",
}: ReadingIeltsTestGridProps) {
  if (realExams.length === 0 && tests.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-[#E4E4E7] bg-white px-6 py-12 text-center text-sm text-[#47464b]">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {realExams.map((exam) => (
        <RealExamTestCard
          key={exam.slug}
          exam={exam}
          moduleLabel="Academic Reading"
          onClick={() => onStartRealExam?.(exam)}
        />
      ))}
      {tests.map((test) => (
        <ReadingIeltsTestCard key={test.pilotId} test={test} onClick={() => onStartTest(test)} />
      ))}
    </div>
  );
}
