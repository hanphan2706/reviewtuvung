"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { isWritingSampleLibraryUnlockedClient } from "@/lib/writing/writing-sample-access";

function isLockedWritingSampleHref(href: string): boolean {
  return href.includes("/thu-vien-mau") || href.includes("/mau-bai/");
}

async function canOpenWritingSample(): Promise<boolean> {
  try {
    const res = await fetch("/api/auth/me", { credentials: "include", cache: "no-store" });
    if (!res.ok) return false;
    const data = (await res.json()) as { loggedIn?: boolean };
    return Boolean(data.loggedIn);
  } catch {
    return false;
  }
}

export function useWritingSampleNav(loggedIn: boolean) {
  const router = useRouter();
  const [loginHref, setLoginHref] = useState<string | null>(null);
  const [studentOnlyOpen, setStudentOnlyOpen] = useState(false);

  const openSample = useCallback(
    (href: string) => {
      if (isLockedWritingSampleHref(href) && !isWritingSampleLibraryUnlockedClient()) {
        setStudentOnlyOpen(true);
        return;
      }

      const go = () => router.push(href);
      if (loggedIn) {
        go();
        return;
      }
      void canOpenWritingSample().then((allowed) => {
        if (allowed) go();
        else setLoginHref(href);
      });
    },
    [loggedIn, router],
  );

  const closeLoginPrompt = useCallback(() => {
    setLoginHref(null);
  }, []);

  const closeStudentOnlyPrompt = useCallback(() => {
    setStudentOnlyOpen(false);
  }, []);

  return {
    openSample,
    loginHref,
    closeLoginPrompt,
    loginOauthNext: loginHref ?? undefined,
    studentOnlyOpen,
    closeStudentOnlyPrompt,
  };
}
