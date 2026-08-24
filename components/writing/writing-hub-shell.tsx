"use client";

import { Suspense, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import { studyHubPageBgClass } from "@/components/study-module/study-hub-shell";
import { WritingHubAuthProvider, useWritingHubAuth } from "@/components/writing/writing-hub-auth";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";

type WritingHubShellProps = {
  children: ReactNode;
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

export function WritingHubShell({
  children,
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
}: WritingHubShellProps) {
  return (
    <Suspense fallback={<div className={`${studyHubPageBgClass} min-h-dvh`} />}>
      <WritingHubAuthProvider isLoggedIn={isLoggedIn} supabaseConfigured={supabaseConfigured}>
        <WritingHubShellInner userProfile={userProfile} supabaseConfigured={supabaseConfigured}>
          {children}
        </WritingHubShellInner>
      </WritingHubAuthProvider>
    </Suspense>
  );
}

function WritingHubShellInner({
  children,
  userProfile,
  supabaseConfigured,
}: {
  children: ReactNode;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
}) {
  const pathname = usePathname();
  const { loggedIn } = useWritingHubAuth();

  return (
    <div className={studyHubPageBgClass}>
      <StudyHubHeader
        title="Luyện viết"
        showWritingNav
        isLoggedIn={loggedIn}
        userProfile={userProfile}
        supabaseConfigured={supabaseConfigured}
        signInNext={pathname}
      />
      {children}
    </div>
  );
}
