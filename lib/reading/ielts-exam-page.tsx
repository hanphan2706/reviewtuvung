import { ReadingIeltsTestView } from "@/components/reading/reading-ielts-test-view";
import { SrsSyncProvider } from "@/components/srs-sync-provider";
import { studyHubUserProfileFromAuthUser } from "@/lib/auth/user-profile";
import { getServerAuthState } from "@/lib/auth/server-auth-state";
import { readingIeltsExamPage } from "@/lib/reading/library-nav";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function renderReadingIeltsExamPage() {
  const config = readingIeltsExamPage();
  const supabase = await createServerSupabaseClient();
  const { user, loggedIn, devBypass } = await getServerAuthState();
  const view = (
    <ReadingIeltsTestView
      pageTitle={config.title}
      pageDescription={config.description}
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
