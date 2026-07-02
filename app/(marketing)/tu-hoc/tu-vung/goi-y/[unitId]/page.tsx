import { notFound } from "next/navigation";
import { VocabularyCuratedDeckView } from "@/components/vocabulary/vocabulary-curated-deck-view";
import { VocabularyUnitComingSoonView } from "@/components/vocabulary/vocabulary-unit-coming-soon-view";
import { getVocabularyCatalogEntry, getVocabularyUnit } from "@/lib/vocabulary/vocabulary-unit-registry";

type PageProps = {
  params: Promise<{ unitId: string }>;
};

export default async function VocabularyCuratedDeckPage({ params }: PageProps) {
  const { unitId } = await params;
  const unit = getVocabularyUnit(unitId);
  if (unit) return <VocabularyCuratedDeckView unit={unit} />;

  const catalog = getVocabularyCatalogEntry(unitId);
  if (catalog) return <VocabularyUnitComingSoonView entry={catalog} />;

  notFound();
}
