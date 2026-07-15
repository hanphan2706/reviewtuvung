import type { ReactNode } from "react";
import { GrammarHubShell } from "@/components/grammar/grammar-hub-shell";
import { studyHubUserProfileFromAuthUser } from "@/lib/auth/user-profile";
import { getServerAuthState } from "@/lib/auth/server-auth-state";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function GrammarLayout({ children }: { children: ReactNode }) {
  const supabase = await createServerSupabaseClient();
  const { user, loggedIn, devBypass } = await getServerAuthState();

  return (
    <GrammarHubShell
      isLoggedIn={loggedIn}
      userProfile={devBypass ? null : studyHubUserProfileFromAuthUser(user)}
      supabaseConfigured={Boolean(supabase)}
    >
      {children}
    </GrammarHubShell>
  );
}
