import { ReadingLibraryView } from "@/components/reading/reading-library-view";
import { SrsSyncProvider } from "@/components/srs-sync-provider";
import { studyHubUserProfileFromAuthUser } from "@/lib/auth/user-profile";
import type { ReadingLibraryPageConfig } from "@/lib/reading/library-nav";
import { getServerAuthState } from "@/lib/auth/server-auth-state";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function renderReadingLibraryPage(config: ReadingLibraryPageConfig) {
  const supabase = await createServerSupabaseClient();
  const { user, loggedIn, devBypass } = await getServerAuthState();
  const view = (
    <ReadingLibraryView
      pageTitle={config.title}
      pageDescription={config.description}
      articles={config.articles}
      isLoggedIn={loggedIn}
      userProfile={devBypass ? null : studyHubUserProfileFromAuthUser(user)}
      supabaseConfigured={Boolean(supabase)}
    />
  );

  if (user && !devBypass) {
    return <SrsSyncProvider userId={user.id}>{view}</SrsSyncProvider>;
  }

  return view;
}
