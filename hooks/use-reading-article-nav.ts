"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import type { ReadingHubArticle } from "@/lib/reading/hub-articles";
import { readingArticleHref } from "@/lib/reading/article-routes";

export function useReadingArticleNav(loggedIn: boolean) {
  const router = useRouter();
  const [loginArticle, setLoginArticle] = useState<ReadingHubArticle | null>(null);

  const openArticle = useCallback(
    (article: ReadingHubArticle) => {
      const href = readingArticleHref(article);
      if (loggedIn) {
        router.push(href);
        return;
      }
      setLoginArticle(article);
    },
    [loggedIn, router],
  );

  const closeLoginPrompt = useCallback(() => {
    setLoginArticle(null);
  }, []);

  const loginOauthNext = loginArticle ? readingArticleHref(loginArticle) : undefined;

  return {
    openArticle,
    loginArticle,
    closeLoginPrompt,
    loginOauthNext,
  };
}
