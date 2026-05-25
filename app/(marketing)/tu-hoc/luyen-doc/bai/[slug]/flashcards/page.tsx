import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReadingVocabFlashcardPage } from "@/components/reading/reading-vocab-flashcard-page";
import { LANDING } from "@/lib/landing-content";
import { readingArticleHref, resolveReadingArticleRoute } from "@/lib/reading/article-routes";
import { loadReadingPassage } from "@/lib/reading/load-reading-raw";
import { getPassageVocabulary } from "@/lib/reading/passage-vocabulary";
import { createServerSupabaseClient, getCurrentUser } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = resolveReadingArticleRoute(slug);
  if (!article) return { title: `Flashcards | ${LANDING.brand}` };
  return {
    title: `Luyện từ: ${article.title} | ${LANDING.brand}`,
  };
}

export default async function ReadingVocabFlashcardsRoute({ params }: PageProps) {
  const { slug } = await params;
  const article = resolveReadingArticleRoute(slug);
  if (!article) notFound();

  const user = await getCurrentUser();
  await createServerSupabaseClient();

  const passage = await loadReadingPassage(article.pilotId, article.passage);
  const vocabItems = getPassageVocabulary(article.id, {
    pilotId: article.pilotId,
    idiomsText: passage?.idiomsText,
  });

  return (
    <ReadingVocabFlashcardPage
      articleId={article.id}
      articleTitle={article.title}
      backHref={readingArticleHref(article)}
      vocabItems={vocabItems}
      isLoggedIn={Boolean(user)}
    />
  );
}
