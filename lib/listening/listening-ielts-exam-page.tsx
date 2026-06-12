import { ListeningIeltsTestView } from "@/components/listening/listening-ielts-test-view";
import { studyHubUserProfileFromAuthUser } from "@/lib/auth/user-profile";
import { getServerAuthState } from "@/lib/auth/server-auth-state";
import { listeningIeltsExamPage } from "@/lib/listening/library-nav";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function renderListeningIeltsExamPage() {
  const config = listeningIeltsExamPage();
  const supabase = await createServerSupabaseClient();
  const { user, loggedIn, devBypass } = await getServerAuthState();

  return (
    <ListeningIeltsTestView
      pageTitle={config.title}
      pageDescription={config.description}
      isLoggedIn={loggedIn}
      userProfile={devBypass ? null : studyHubUserProfileFromAuthUser(user)}
      supabaseConfigured={Boolean(supabase)}
    />
  );
}
