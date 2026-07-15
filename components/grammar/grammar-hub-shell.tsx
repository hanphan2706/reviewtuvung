"use client";

import { Suspense, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { GrammarAuthProvider } from "@/components/grammar/grammar-auth-context";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import { studyHubPageBgClass } from "@/components/study-module/study-hub-shell";
import { useStudyHubLoggedIn } from "@/hooks/use-study-hub-logged-in";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";

type GrammarHubShellProps = {
  children: ReactNode;
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

export function GrammarHubShell({
  children,
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
}: GrammarHubShellProps) {
  const loggedIn = useStudyHubLoggedIn(isLoggedIn);
  const pathname = usePathname();

  return (
    <div className={studyHubPageBgClass}>
      <Suspense fallback={<div className="min-h-dvh" />}>
        <GrammarAuthProvider isLoggedIn={loggedIn} supabaseConfigured={supabaseConfigured}>
          <StudyHubHeader
            title="Ngữ pháp"
            showGrammarNav
            isLoggedIn={loggedIn}
            userProfile={userProfile}
            supabaseConfigured={supabaseConfigured}
            signInNext={pathname}
          />
          {children}
        </GrammarAuthProvider>
      </Suspense>
    </div>
  );
}
