"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { listeningLessonHrefBySlug } from "@/lib/listening/listening-hub-nav";

async function canOpenListeningLesson(): Promise<boolean> {
  try {
    const res = await fetch("/api/auth/me", { credentials: "include", cache: "no-store" });
    if (!res.ok) return false;
    const data = (await res.json()) as { loggedIn?: boolean };
    return Boolean(data.loggedIn);
  } catch {
    return false;
  }
}

export function useListeningLessonNav(loggedIn: boolean) {
  const router = useRouter();
  const [pendingSlug, setPendingSlug] = useState<string | null>(null);

  const openLesson = useCallback(
    (slug: string) => {
      const href = listeningLessonHrefBySlug(slug);
      const go = () => router.push(href);

      if (loggedIn) {
        go();
        return;
      }

      void canOpenListeningLesson().then((allowed) => {
        if (allowed) go();
        else setPendingSlug(slug);
      });
    },
    [loggedIn, router],
  );

  const closeLoginPrompt = useCallback(() => {
    setPendingSlug(null);
  }, []);

  const loginOauthNext = pendingSlug ? listeningLessonHrefBySlug(pendingSlug) : undefined;

  return {
    openLesson,
    pendingSlug,
    closeLoginPrompt,
    loginOauthNext,
  };
}
