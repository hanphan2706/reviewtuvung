import type { Metadata } from "next";
import { WritingHistoryDetailView } from "@/components/writing/writing-history-detail-view";
import { LANDING } from "@/lib/landing-content";

type PageProps = {
  params: Promise<{ submissionId: string }>;
};

export const metadata: Metadata = {
  title: `Bài đã nộp | ${LANDING.brand}`,
  robots: { index: false, follow: false },
};

export default async function WritingHistoryDetailPage({ params }: PageProps) {
  const { submissionId } = await params;
  return <WritingHistoryDetailView submissionId={submissionId} />;
}
