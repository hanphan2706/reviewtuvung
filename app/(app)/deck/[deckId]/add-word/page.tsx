import { AddWordView } from "@/components/add-word-view";

type Search = { term?: string; definition?: string };

export default async function AddWordPage({
  params,
  searchParams,
}: {
  params: Promise<{ deckId: string }>;
  searchParams: Promise<Search>;
}) {
  const { deckId } = await params;
  const sp = await searchParams;
  return <AddWordView deckId={deckId} initialTerm={sp.term} initialDefinition={sp.definition} />;
}
