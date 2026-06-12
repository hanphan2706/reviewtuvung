import type { Metadata } from "next";
import { ListeningStudyView } from "@/components/listening/listening-study-view";
import { SrsSyncProvider } from "@/components/srs-sync-provider";
import { LANDING } from "@/lib/landing-content";
import { studyHubUserProfileFromAuthUser } from "@/lib/auth/user-profile";
import { getServerAuthState } from "@/lib/auth/server-auth-state";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `Luyện nghe | ${LANDING.brand}`,
  description: "Nghe chủ động — dự đoán, phản ánh, transcript sau cùng.",
};

export default async function LuyenNghePage() {
  const supabase = await createServerSupabaseClient();
  const { user, loggedIn, devBypass } = await getServerAuthState();
  const view = (
    <ListeningStudyView
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
