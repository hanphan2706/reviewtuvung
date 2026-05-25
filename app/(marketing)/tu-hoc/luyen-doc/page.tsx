import type { Metadata } from "next";
import { ReadingStudyView } from "@/components/reading/reading-study-view";
import { buildReadingReadMinutesByArticleId } from "@/lib/reading/build-reading-read-minutes";
import { SrsSyncProvider } from "@/components/srs-sync-provider";
import { LANDING } from "@/lib/landing-content";
import { studyHubUserProfileFromAuthUser } from "@/lib/auth/user-profile";
import { createServerSupabaseClient, getCurrentUser } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `Luyện đọc | ${LANDING.brand}`,
  description: "Đọc chủ động — bôi chọn, tra nghĩa, thêm từ.",
};

export default async function LuyenDocPage() {
  const supabase = await createServerSupabaseClient();
  const user = await getCurrentUser();
  const readMinutesByArticleId = await buildReadingReadMinutesByArticleId();
  const view = (
    <ReadingStudyView
      readMinutesByArticleId={readMinutesByArticleId}
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
