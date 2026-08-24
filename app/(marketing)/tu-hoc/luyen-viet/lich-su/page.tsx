import type { Metadata } from "next";
import { WritingHistoryView } from "@/components/writing/writing-history-view";
import { LANDING } from "@/lib/landing-content";

export const metadata: Metadata = {
  title: `Lịch sử bài viết | ${LANDING.brand}`,
  robots: { index: false, follow: false },
};

export default function WritingHistoryPage() {
  return <WritingHistoryView />;
}
