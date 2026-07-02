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

export const VOCABULARY_LOGIN_TITLE = "Đăng nhập để dùng Từ vựng";
export const VOCABULARY_LOGIN_DESCRIPTION =
  "Bạn có thể xem trang Từ vựng khi chưa đăng nhập. Đăng nhập để mở bộ từ gợi ý, quản lý deck và ôn tập.";

type LoginPromptState = {
  next: string;
  title: string;
  description: string;
};

type VocabularyAuthContextValue = {
  loggedIn: boolean;
  supabaseConfigured: boolean;
  navigateWithAuth: (href: string, prompt?: Pick<LoginPromptState, "title" | "description">) => void;
  runWithAuth: (
    next: string,
    action: () => void,
    prompt?: Pick<LoginPromptState, "title" | "description">,
  ) => void;
};

const VocabularyAuthContext = createContext<VocabularyAuthContextValue | null>(null);

function VocabularyAuthProviderInner({
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
    if (!next || !next.startsWith("/tu-hoc/tu-vung")) return;
    setLoginPrompt({
      next,
      title: VOCABULARY_LOGIN_TITLE,
      description: VOCABULARY_LOGIN_DESCRIPTION,
    });
  }, [loggedIn, searchParams]);

  const openLoginPrompt = useCallback(
    (next: string, prompt?: Pick<LoginPromptState, "title" | "description">) => {
      setLoginPrompt({
        next,
        title: prompt?.title ?? VOCABULARY_LOGIN_TITLE,
        description: prompt?.description ?? VOCABULARY_LOGIN_DESCRIPTION,
      });
    },
    [],
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
      navigateWithAuth,
      runWithAuth,
    }),
    [loggedIn, supabaseConfigured, navigateWithAuth, runWithAuth],
  );

  return (
    <VocabularyAuthContext.Provider value={value}>
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
    </VocabularyAuthContext.Provider>
  );
}

export function VocabularyAuthProvider({
  children,
  isLoggedIn,
  supabaseConfigured,
}: {
  children: ReactNode;
  isLoggedIn: boolean;
  supabaseConfigured: boolean;
}) {
  return (
    <VocabularyAuthProviderInner isLoggedIn={isLoggedIn} supabaseConfigured={supabaseConfigured}>
      {children}
    </VocabularyAuthProviderInner>
  );
}

export function useVocabularyAuth(): VocabularyAuthContextValue {
  const ctx = useContext(VocabularyAuthContext);
  if (!ctx) {
    throw new Error("useVocabularyAuth must be used within VocabularyAuthProvider");
  }
  return ctx;
}
