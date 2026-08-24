import type { Metadata } from "next";
import { WritingPracticeLibraryView } from "@/components/writing/writing-practice-library-view";
import { listWritingPracticeCatalog } from "@/lib/ielts-samples/writing-sample-registry";
import { LANDING } from "@/lib/landing-content";

export const metadata: Metadata = {
  title: `IELTS Writing Task 1 | ${LANDING.brand}`,
  description: "Kho đề IELTS Writing Task 1 — luyện miêu tả biểu đồ, bản đồ và quy trình.",
};

export default function WritingTask1Page() {
  return (
    <WritingPracticeLibraryView
      task="task1"
      catalog={listWritingPracticeCatalog("task1")}
      pageTitle="IELTS Writing Task 1"
      pageDescription="Tất cả các đề IELTS Writing Task 1 để bạn luyện tập và cải thiện kỹ năng viết."
    />
  );
}
