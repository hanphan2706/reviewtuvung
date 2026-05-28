"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import type { ReadingHubArticle } from "@/lib/reading/hub-articles";
import { readingArticleHref } from "@/lib/reading/article-routes";

async function canOpenReadingArticle(): Promise<boolean> {
  try {
    const res = await fetch("/api/auth/me", { credentials: "include", cache: "no-store" });
    if (!res.ok) return false;
    const data = (await res.json()) as { loggedIn?: boolean };
    return Boolean(data.loggedIn);
  } catch {
    return false;
  }
}

export function useReadingArticleNav(loggedIn: boolean) {
  const router = useRouter();
  const [loginArticle, setLoginArticle] = useState<ReadingHubArticle | null>(null);

  const openArticle = useCallback(
    (article: ReadingHubArticle) => {
      const href = readingArticleHref(article);
      const go = () => router.push(href);

      if (loggedIn) {
        go();
        return;
      }

      void canOpenReadingArticle().then((allowed) => {
        if (allowed) go();
        else setLoginArticle(article);
      });
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
