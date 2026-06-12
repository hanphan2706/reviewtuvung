import { ListeningSourcesExploreView } from "@/components/listening/listening-sources-explore-view";
import { SrsSyncProvider } from "@/components/srs-sync-provider";
import { studyHubUserProfileFromAuthUser } from "@/lib/auth/user-profile";
import { getServerAuthState } from "@/lib/auth/server-auth-state";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function renderListeningSourcesExplorePage() {
  const supabase = await createServerSupabaseClient();
  const { user, loggedIn, devBypass } = await getServerAuthState();
  const view = (
    <ListeningSourcesExploreView
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
