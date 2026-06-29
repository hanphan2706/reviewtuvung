import type { Metadata } from "next";
import { ListeningAccentChallengeView } from "@/components/listening/listening-accent-challenge-view";
import { ListeningAccentComingSoonView } from "@/components/listening/listening-accent-coming-soon-view";
import { SrsSyncProvider } from "@/components/srs-sync-provider";
import { studyHubUserProfileFromAuthUser } from "@/lib/auth/user-profile";
import { isListeningAccentExploreLive } from "@/lib/listening/accent-explore-release";
import { getServerAuthState } from "@/lib/auth/server-auth-state";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { LANDING } from "@/lib/landing-content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: isListeningAccentExploreLive()
    ? `Thử thách phân biệt chất giọng | Luyện nghe | ${LANDING.brand}`
    : `Đang cập nhật | Luyện nghe | ${LANDING.brand}`,
  description: "Nghe và nhận diện giọng Anh Anh hay Anh Mỹ qua các từ phổ biến.",
};

export default async function ListeningAccentChallengePage() {
  const supabase = await createServerSupabaseClient();
  const { user, loggedIn, devBypass } = await getServerAuthState();

  const view = isListeningAccentExploreLive() ? (
    <ListeningAccentChallengeView
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
