import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WritingPracticeDetailGate } from "@/components/writing/writing-practice-detail-gate";
import { getWritingPracticeCatalogEntry } from "@/lib/ielts-samples/writing-sample-registry";
import { formatWritingSampleTitle } from "@/lib/ielts-samples/writing-sample-taxonomy";
import { LANDING } from "@/lib/landing-content";

type PageProps = {
  params: Promise<{ promptId: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { promptId } = await params;
  const entry = getWritingPracticeCatalogEntry(promptId, "task2");
  if (!entry) return { title: `Task 2 | ${LANDING.brand}`, robots: { index: false, follow: false } };
  return {
    title: `${formatWritingSampleTitle(entry.title, entry.id)} | Task 2 | ${LANDING.brand}`,
    robots: { index: false, follow: false },
  };
}

export default async function WritingTask2PracticePage({ params }: PageProps) {
  const { promptId } = await params;
  const entry = getWritingPracticeCatalogEntry(promptId, "task2");
  if (!entry) notFound();
  return <WritingPracticeDetailGate promptId={entry.id} title={entry.title} task="task2" />;
}
