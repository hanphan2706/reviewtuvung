import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VocabularyUnitFlashcardSession } from "@/components/vocabulary/vocabulary-unit-flashcard-session";
import { LANDING } from "@/lib/landing-content";
import { getVocabularyUnit } from "@/lib/vocabulary/vocabulary-unit-registry";

type PageProps = {
  params: Promise<{ unitId: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { unitId } = await params;
  const unit = getVocabularyUnit(unitId);
  if (!unit) return { title: `Ôn tập | ${LANDING.brand}` };
  return {
    title: `Ôn tập: ${unit.title} | ${LANDING.brand}`,
  };
}

export default async function VocabularyUnitPracticePage({ params }: PageProps) {
  const { unitId } = await params;
  const unit = getVocabularyUnit(unitId);
  if (!unit) notFound();

  return <VocabularyUnitFlashcardSession unit={unit} />;
}
