"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { canAccessStudyFeature } from "@/lib/auth/can-access-study-feature";
import { studyExamLoginCopy } from "@/lib/auth/study-exam-auth-shared";

export function useStudyExamNav(loggedIn: boolean) {
  const searchParams = useSearchParams();
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  useEffect(() => {
    if (loggedIn) return;
    const next = searchParams.get("next");
    if (!next?.startsWith("/") || !next.endsWith("/lam-bai")) return;
    setPendingHref(next);
  }, [loggedIn, searchParams]);

  const openExamHref = useCallback(
    (href: string) => {
      const go = () => {
        window.location.assign(href);
      };

      if (loggedIn) {
        go();
        return;
      }

      void canAccessStudyFeature().then((allowed) => {
        if (allowed) go();
        else setPendingHref(href);
      });
    },
    [loggedIn],
  );

  const closeLoginPrompt = useCallback(() => {
    setPendingHref(null);
  }, []);

  const loginPrompt = pendingHref
    ? {
        oauthNext: pendingHref,
        ...studyExamLoginCopy(pendingHref),
      }
    : null;

  return {
    openExamHref,
    loginPrompt,
    closeLoginPrompt,
  };
}
