import { ReadingLibraryView } from "@/components/reading/reading-library-view";
import { SrsSyncProvider } from "@/components/srs-sync-provider";
import { studyHubUserProfileFromAuthUser } from "@/lib/auth/user-profile";
import type { ReadingLibraryPageConfig } from "@/lib/reading/library-nav";
import { createServerSupabaseClient, getCurrentUser } from "@/lib/supabase/server";

export async function renderReadingLibraryPage(config: ReadingLibraryPageConfig) {
  const supabase = await createServerSupabaseClient();
  const user = await getCurrentUser();
  const view = (
    <ReadingLibraryView
      pageTitle={config.title}
      pageDescription={config.description}
      articles={config.articles}
      isLoggedIn={Boolean(user)}
      userProfile={studyHubUserProfileFromAuthUser(user)}
      supabaseConfigured={Boolean(supabase)}
    />
  );

  if (user) {
    return <SrsSyncProvider userId={user.id}>{view}</SrsSyncProvider>;
  }

  return view;
}
