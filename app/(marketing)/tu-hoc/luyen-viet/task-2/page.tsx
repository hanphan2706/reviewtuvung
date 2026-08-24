import type { Metadata } from "next";
import { WritingPracticeLibraryView } from "@/components/writing/writing-practice-library-view";
import { listWritingPracticeCatalog } from "@/lib/ielts-samples/writing-sample-registry";
import { LANDING } from "@/lib/landing-content";

export const metadata: Metadata = {
  title: `IELTS Writing Task 2 | ${LANDING.brand}`,
  description: "Kho đề IELTS Writing Task 2 — luyện lập luận và triển khai ý cho bài luận.",
};

export default function WritingTask2Page() {
  return (
    <WritingPracticeLibraryView
      task="task2"
      catalog={listWritingPracticeCatalog("task2")}
      pageTitle="IELTS Writing Task 2"
      pageDescription="Tất cả các đề IELTS Writing Task 2 để bạn luyện tập và cải thiện kỹ năng viết."
    />
  );
}
