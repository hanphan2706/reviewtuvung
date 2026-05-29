"use client";

import { ReadingVocabFlashcardSession } from "@/components/reading/reading-vocab-flashcard-session";
import { useStudyHubLoggedIn } from "@/hooks/use-study-hub-logged-in";
import type { PassageVocabItem } from "@/lib/reading/passage-vocabulary";

type ReadingVocabFlashcardPageProps = {
  articleId: string;
  articleTitle: string;
  backHref: string;
  vocabItems: PassageVocabItem[];
  isLoggedIn?: boolean;
};

export function ReadingVocabFlashcardPage({
  articleId,
  articleTitle,
  backHref,
  vocabItems,
  isLoggedIn: isLoggedInProp = false,
}: ReadingVocabFlashcardPageProps) {
  const loggedIn = useStudyHubLoggedIn(isLoggedInProp);

  return (
    <ReadingVocabFlashcardSession
      articleId={articleId}
      articleTitle={articleTitle}
      backHref={backHref}
      vocabItems={vocabItems}
      isLoggedIn={loggedIn}
    />
  );
}
