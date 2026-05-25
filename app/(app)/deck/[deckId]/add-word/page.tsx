import { AddWordView } from "@/components/add-word-view";

export default async function AddWordPage({ params }: { params: Promise<{ deckId: string }> }) {
  const { deckId } = await params;
  return <AddWordView deckId={deckId} />;
}
