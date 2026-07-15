"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { StudyLoginPrompt } from "@/components/study-module/study-login-prompt";
import { useStudyHubLoggedIn } from "@/hooks/use-study-hub-logged-in";
import { canAccessStudyFeature } from "@/lib/auth/can-access-study-feature";
import { GRAMMAR_HUB_HREF } from "@/lib/grammar/grammar-hub-nav";

export const GRAMMAR_LOGIN_TITLE = "Đăng nhập để học Ngữ pháp";
export const GRAMMAR_LOGIN_DESCRIPTION =
  "Bạn có thể xem trang chủ Ngữ pháp khi chưa đăng nhập. Đăng nhập để mở lý thuyết, luyện tập và lưu tiến độ theo tài khoản.";

type LoginPromptState = {
  next: string;
  title: string;
  description: string;
};

type GrammarAuthContextValue = {
  loggedIn: boolean;
  supabaseConfigured: boolean;
  promptLogin: (next?: string) => void;
  navigateWithAuth: (href: string, prompt?: Pick<LoginPromptState, "title" | "description">) => void;
  runWithAuth: (
    next: string,
    action: () => void,
    prompt?: Pick<LoginPromptState, "title" | "description">,
  ) => void;
};

const GrammarAuthContext = createContext<GrammarAuthContextValue | null>(null);

export function GrammarAuthProvider({
  children,
  isLoggedIn,
  supabaseConfigured,
}: {
  children: ReactNode;
  isLoggedIn: boolean;
  supabaseConfigured: boolean;
}) {
  const loggedIn = useStudyHubLoggedIn(isLoggedIn);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loginPrompt, setLoginPrompt] = useState<LoginPromptState | null>(null);

  useEffect(() => {
    if (loggedIn) return;
    const next = searchParams.get("next");
    if (!next || !next.startsWith(GRAMMAR_HUB_HREF)) return;
    setLoginPrompt({
      next,
      title: GRAMMAR_LOGIN_TITLE,
      description: GRAMMAR_LOGIN_DESCRIPTION,
    });
  }, [loggedIn, searchParams]);

  const openLoginPrompt = useCallback(
    (next: string, prompt?: Pick<LoginPromptState, "title" | "description">) => {
      setLoginPrompt({
        next,
        title: prompt?.title ?? GRAMMAR_LOGIN_TITLE,
        description: prompt?.description ?? GRAMMAR_LOGIN_DESCRIPTION,
      });
    },
    [],
  );

  const promptLogin = useCallback(
    (next?: string) => {
      openLoginPrompt(next ?? GRAMMAR_HUB_HREF);
    },
    [openLoginPrompt],
  );

  const navigateWithAuth = useCallback(
    (href: string, prompt?: Pick<LoginPromptState, "title" | "description">) => {
      const go = () => router.push(href);
      if (loggedIn) {
        go();
        return;
      }
      void canAccessStudyFeature().then((allowed) => {
        if (allowed) go();
        else openLoginPrompt(href, prompt);
      });
    },
    [loggedIn, openLoginPrompt, router],
  );

  const runWithAuth = useCallback(
    (next: string, action: () => void, prompt?: Pick<LoginPromptState, "title" | "description">) => {
      if (loggedIn) {
        action();
        return;
      }
      void canAccessStudyFeature().then((allowed) => {
        if (allowed) action();
        else openLoginPrompt(next, prompt);
      });
    },
    [loggedIn, openLoginPrompt],
  );

  const value = useMemo(
    () => ({
      loggedIn,
      supabaseConfigured,
      promptLogin,
      navigateWithAuth,
      runWithAuth,
    }),
    [loggedIn, supabaseConfigured, promptLogin, navigateWithAuth, runWithAuth],
  );

  return (
    <GrammarAuthContext.Provider value={value}>
      {children}
      {loginPrompt ? (
        <StudyLoginPrompt
          title={loginPrompt.title}
          description={loginPrompt.description}
          oauthNext={loginPrompt.next}
          supabaseConfigured={supabaseConfigured}
          onClose={() => setLoginPrompt(null)}
        />
      ) : null}
    </GrammarAuthContext.Provider>
  );
}

export function useGrammarAuth(): GrammarAuthContextValue {
  const ctx = useContext(GrammarAuthContext);
  if (!ctx) {
    throw new Error("useGrammarAuth must be used within GrammarAuthProvider");
  }
  return ctx;
}
