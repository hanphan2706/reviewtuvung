import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VocabularyCuratedListView } from "@/components/vocabulary/vocabulary-curated-list-view";
import { LANDING } from "@/lib/landing-content";
import { vocabularyLevelBySlug, vocabularyLevelPageTitle } from "@/lib/vocabulary/vocabulary-level-nav";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const level = vocabularyLevelBySlug(slug);
  if (!level) return { title: `Từ vựng | ${LANDING.brand}` };
  return {
    title: `${vocabularyLevelPageTitle(level)} | ${LANDING.brand}`,
  };
}

export default async function VocabularyGoiYByLevelPage({ params }: PageProps) {
  const { slug } = await params;
  const level = vocabularyLevelBySlug(slug);
  if (!level) notFound();
  return <VocabularyCuratedListView level={level} />;
}
