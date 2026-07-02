import type { ReactNode } from "react";
import { VocabularyHubShell } from "@/components/vocabulary/vocabulary-hub-shell";
import { SrsSyncProvider } from "@/components/srs-sync-provider";
import { studyHubUserProfileFromAuthUser } from "@/lib/auth/user-profile";
import { getServerAuthState } from "@/lib/auth/server-auth-state";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function VocabularyLayout({ children }: { children: ReactNode }) {
  const supabase = await createServerSupabaseClient();
  const { user, loggedIn, devBypass } = await getServerAuthState();

  const shell = (
    <VocabularyHubShell
      isLoggedIn={loggedIn}
      userProfile={devBypass ? null : studyHubUserProfileFromAuthUser(user)}
      supabaseConfigured={Boolean(supabase)}
    >
      {children}
    </VocabularyHubShell>
  );

  if (user && !devBypass) {
    return <SrsSyncProvider userId={user.id}>{shell}</SrsSyncProvider>;
  }

  return shell;
}
