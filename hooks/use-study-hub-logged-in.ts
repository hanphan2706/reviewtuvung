"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

async function fetchServerLoggedIn(): Promise<boolean> {
  try {
    const res = await fetch("/api/auth/me", { credentials: "include", cache: "no-store" });
    if (!res.ok) return false;
    const data = (await res.json()) as { loggedIn?: boolean };
    return Boolean(data.loggedIn);
  } catch {
    return false;
  }
}

/** Menu hub: RSC + session server (sau OAuth cookie httpOnly chưa kịp vào RSC lần 1). */
export function useStudyHubLoggedIn(serverLoggedIn: boolean): boolean {
  const [loggedIn, setLoggedIn] = useState(serverLoggedIn);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoggedIn(serverLoggedIn);
  }, [serverLoggedIn]);

  useEffect(() => {
    const supabase = createBrowserSupabaseClient();
    let cancelled = false;

    const syncFromServer = async () => {
      const ok = await fetchServerLoggedIn();
      if (cancelled) return;
      if (ok) {
        setLoggedIn(true);
        router.refresh();
      }
    };

    if (searchParams.get("auth_sync") === "1") {
      const next = new URLSearchParams(searchParams.toString());
      next.delete("auth_sync");
      const qs = next.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
      void syncFromServer();
    }

    if (!supabase) return () => {
      cancelled = true;
    };

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      const hasSession = Boolean(session);
      setLoggedIn(hasSession);
      if (hasSession && (event === "SIGNED_IN" || event === "INITIAL_SESSION")) {
        void syncFromServer();
      }
    });

    void supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setLoggedIn(true);
        if (!serverLoggedIn) {
          void syncFromServer();
        }
      } else if (searchParams.get("auth_sync") === "1") {
        void syncFromServer();
      }
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, [pathname, router, searchParams, serverLoggedIn]);

  return loggedIn;
}
