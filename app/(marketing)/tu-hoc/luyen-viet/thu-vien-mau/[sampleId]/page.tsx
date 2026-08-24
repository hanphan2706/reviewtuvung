import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WritingSampleDetailGate } from "@/components/writing/writing-sample-detail-gate";
import { LANDING } from "@/lib/landing-content";
import { getWritingCatalogEntry } from "@/lib/ielts-samples/writing-sample-registry";
import { formatWritingSampleTitle } from "@/lib/ielts-samples/writing-sample-taxonomy";

type PageProps = {
  params: Promise<{ sampleId: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { sampleId } = await params;
  const entry = getWritingCatalogEntry(sampleId);
  if (!entry) return { title: `Sample | ${LANDING.brand}`, robots: { index: false, follow: false } };
  return {
    title: `${formatWritingSampleTitle(entry.title, entry.id)} | ${LANDING.brand}`,
    robots: { index: false, follow: false },
  };
}

export default async function WritingSampleDetailPage({ params }: PageProps) {
  const { sampleId } = await params;
  const entry = getWritingCatalogEntry(sampleId);
  if (!entry) notFound();
  return <WritingSampleDetailGate sampleId={entry.id} title={entry.title} />;
}
