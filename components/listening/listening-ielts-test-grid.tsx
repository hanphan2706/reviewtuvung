"use client";

import { RealExamTestCard } from "@/components/exam/real-exam-test-card";
import { ListeningIeltsTestCard } from "@/components/listening/listening-ielts-test-card";
import type { RealExamListing } from "@/lib/exam/real-exam-catalog";
import type { ListeningIeltsTest } from "@/lib/listening/ielts-test-catalog";

type ListeningIeltsTestGridProps = {
  realExams?: readonly RealExamListing[];
  tests: readonly ListeningIeltsTest[];
  onStartRealExam?: (exam: RealExamListing) => void;
  onStartTest: (test: ListeningIeltsTest) => void;
  emptyMessage?: string;
};

export function ListeningIeltsTestGrid({
  realExams = [],
  tests,
  onStartRealExam,
  onStartTest,
  emptyMessage = "Chưa có đề IELTS trong mục này.",
}: ListeningIeltsTestGridProps) {
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
          moduleLabel="Academic Listening"
          onClick={() => onStartRealExam?.(exam)}
        />
      ))}
      {tests.map((test) => (
        <ListeningIeltsTestCard key={test.testId} test={test} onClick={() => onStartTest(test)} />
      ))}
    </div>
  );
}
