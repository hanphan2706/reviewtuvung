import type { Metadata } from "next";
import { LANDING } from "@/lib/landing-content";
import { readingLibraryAllPage } from "@/lib/reading/library-nav";
import { renderReadingLibraryPage } from "@/lib/reading/library-page";

export const dynamic = "force-dynamic";

const page = readingLibraryAllPage();

export const metadata: Metadata = {
  title: `${page.title} | ${LANDING.brand}`,
  description: "Đọc chủ động — bôi chọn, tra nghĩa, thêm từ.",
};

export default function ReadingLibraryAllPage() {
  return renderReadingLibraryPage(page);
}
