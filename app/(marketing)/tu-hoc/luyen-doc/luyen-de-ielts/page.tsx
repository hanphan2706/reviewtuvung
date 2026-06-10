import type { Metadata } from "next";
import { LANDING } from "@/lib/landing-content";
import { readingIeltsExamPage } from "@/lib/reading/library-nav";
import { renderReadingIeltsExamPage } from "@/lib/reading/ielts-exam-page";

export const dynamic = "force-dynamic";

const page = readingIeltsExamPage();

export const metadata: Metadata = {
  title: `${page.title} | ${LANDING.brand}`,
  description: page.description,
};

export default function ReadingIeltsExamLibraryPage() {
  return renderReadingIeltsExamPage();
}
