import { ReviewView } from "@/components/review-view";

export default async function ReviewPage({ params }: { params: Promise<{ deckId: string }> }) {
  const { deckId } = await params;
  return <ReviewView deckId={deckId} />;
}
