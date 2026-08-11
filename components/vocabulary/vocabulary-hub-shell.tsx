"use client";

import { Suspense, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import { studyHubPageBgClass } from "@/components/study-module/study-hub-shell";
import { VocabularyAuthProvider } from "@/components/vocabulary/vocabulary-auth-context";
import { useStudyHubLoggedIn } from "@/hooks/use-study-hub-logged-in";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";

type VocabularyHubShellProps = {
  children: ReactNode;
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

/** Shell chung cho toàn bộ mục Từ vựng — header giống Luyện đọc / Luyện nghe. */
export function VocabularyHubShell({
  children,
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
}: VocabularyHubShellProps) {
  const loggedIn = useStudyHubLoggedIn(isLoggedIn);
  const pathname = usePathname();
  /** Phiên flashcard unit — fullscreen, không thanh hub (tránh double header / layout vỡ). */
  const practiceSession = pathname.includes("/on-tap");

  return (
    <div className={practiceSession ? "h-dvh overflow-hidden bg-[#f5f5f7]" : studyHubPageBgClass}>
      <Suspense fallback={<div className="min-h-dvh" />}>
        <VocabularyAuthProvider isLoggedIn={isLoggedIn} supabaseConfigured={supabaseConfigured}>
          {practiceSession ? null : (
            <StudyHubHeader
              title="Từ vựng"
              showVocabularyNav
              isLoggedIn={loggedIn}
              userProfile={userProfile}
              supabaseConfigured={supabaseConfigured}
              signInNext={pathname}
            />
          )}
          {children}
        </VocabularyAuthProvider>
      </Suspense>
    </div>
  );
}
