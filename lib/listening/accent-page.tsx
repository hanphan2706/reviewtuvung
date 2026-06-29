import { ListeningAccentComingSoonView } from "@/components/listening/listening-accent-coming-soon-view";
import { ListeningAccentDiscoverView } from "@/components/listening/listening-accent-discover-view";
import { ListeningAccentExploreView } from "@/components/listening/listening-accent-explore-view";
import { SrsSyncProvider } from "@/components/srs-sync-provider";
import { studyHubUserProfileFromAuthUser } from "@/lib/auth/user-profile";
import type { ListeningAccentExplorePageConfig } from "@/lib/listening/accent-nav";
import { isListeningAccentExploreLive } from "@/lib/listening/accent-explore-release";
import { getServerAuthState } from "@/lib/auth/server-auth-state";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function renderListeningAccentExplorePage(config: ListeningAccentExplorePageConfig) {
  const supabase = await createServerSupabaseClient();
  const { user, loggedIn, devBypass } = await getServerAuthState();
  const view = isListeningAccentExploreLive() ? (
    <ListeningAccentExploreView
      config={config}
      isLoggedIn={loggedIn}
      userProfile={devBypass ? null : studyHubUserProfileFromAuthUser(user)}
      supabaseConfigured={Boolean(supabase)}
    />
  ) : (
    <ListeningAccentComingSoonView
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

export async function renderListeningAccentDiscoverPage(config: ListeningAccentExplorePageConfig) {
  const supabase = await createServerSupabaseClient();
  const { user, loggedIn, devBypass } = await getServerAuthState();
  const view = isListeningAccentExploreLive() ? (
    <ListeningAccentDiscoverView
      config={config}
      isLoggedIn={loggedIn}
      userProfile={devBypass ? null : studyHubUserProfileFromAuthUser(user)}
      supabaseConfigured={Boolean(supabase)}
    />
  ) : (
    <ListeningAccentComingSoonView
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
