import { notFound } from "next/navigation";
import { ReadingArticleSessionView } from "@/components/reading/reading-article-session-view";
import { SrsSyncProvider } from "@/components/srs-sync-provider";
import { studyHubUserProfileFromAuthUser } from "@/lib/auth/user-profile";
import { resolveReadingArticleRoute } from "@/lib/reading/article-routes";
import { loadReadingPassage } from "@/lib/reading/load-reading-raw";
import { loadReadingPassageTranslation } from "@/lib/reading/load-reading-translation";
import { getPassageVocabulary } from "@/lib/reading/passage-vocabulary";
import { translationMatchesPassage } from "@/lib/reading/reading-translation";
import { createServerSupabaseClient, getCurrentUser } from "@/lib/supabase/server";

export async function renderReadingArticlePage(routeSegment: string) {
  const article = resolveReadingArticleRoute(routeSegment);
  if (!article) notFound();

  const initialPassage = await loadReadingPassage(article.pilotId, article.passage);
  const translationRaw = await loadReadingPassageTranslation(article.id);
  const translationParagraphs =
    initialPassage &&
    translationRaw &&
    translationMatchesPassage(initialPassage.body, translationRaw, initialPassage.deckText)
      ? translationRaw.paragraphs
      : null;
  const vocabularyItems = getPassageVocabulary(article.id, {
    pilotId: article.pilotId,
    idiomsText: initialPassage?.idiomsText,
  });
  const supabase = await createServerSupabaseClient();
  const user = await getCurrentUser();

  const view = (
    <ReadingArticleSessionView
      article={article}
      initialPassage={initialPassage}
      vocabularyItems={vocabularyItems}
      translationParagraphs={translationParagraphs}
      isLoggedIn={Boolean(user)}
      userProfile={studyHubUserProfileFromAuthUser(user)}
      supabaseConfigured={Boolean(supabase)}
    />
  );

  if (user) {
    return <SrsSyncProvider userId={user.id}>{view}</SrsSyncProvider>;
  }

  return view;
}
