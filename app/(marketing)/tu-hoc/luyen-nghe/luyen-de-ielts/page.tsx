import type { Metadata } from "next";
import { LANDING } from "@/lib/landing-content";
import { listeningIeltsExamPage } from "@/lib/listening/library-nav";
import { renderListeningIeltsExamPage } from "@/lib/listening/listening-ielts-exam-page";

export const dynamic = "force-dynamic";

const page = listeningIeltsExamPage();

export const metadata: Metadata = {
  title: `${page.title} | Luyện nghe | ${LANDING.brand}`,
  description: page.description,
};

export default function ListeningIeltsExamLibraryPage() {
  return renderListeningIeltsExamPage();
}
