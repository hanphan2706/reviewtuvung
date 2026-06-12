import { ListeningIpaChartView } from "@/components/listening/listening-ipa-chart-view";
import { SrsSyncProvider } from "@/components/srs-sync-provider";
import { studyHubUserProfileFromAuthUser } from "@/lib/auth/user-profile";
import { getServerAuthState } from "@/lib/auth/server-auth-state";
import type { ListeningIpaChartPageConfig } from "@/lib/listening/ipa-chart-nav";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function renderListeningIpaChartPage(config: ListeningIpaChartPageConfig) {
  const supabase = await createServerSupabaseClient();
  const { user, loggedIn, devBypass } = await getServerAuthState();
  const signInNext = "/tu-hoc/luyen-nghe/bang-ipa";

  const view = (
    <ListeningIpaChartView
      config={config}
      isLoggedIn={loggedIn}
      userProfile={devBypass ? null : studyHubUserProfileFromAuthUser(user)}
      supabaseConfigured={Boolean(supabase)}
      signInNext={signInNext}
    />
  );

  if (user && !devBypass) {
    return <SrsSyncProvider userId={user.id}>{view}</SrsSyncProvider>;
  }

  return view;
}
