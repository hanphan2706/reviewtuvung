import type { Metadata } from "next";
import { ProfileProgressView } from "@/components/profile/profile-progress-view";
import { SrsSyncProvider } from "@/components/srs-sync-provider";
import { LANDING } from "@/lib/landing-content";
import { isClassroomMember } from "@/lib/classroom/repository";
import { studyHubUserProfileFromAuthUser } from "@/lib/auth/user-profile";
import { getCurrentUser } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `Hồ sơ & tiến độ | ${LANDING.brand}`,
  description: "Theo dõi chuỗi đọc, từ vựng và bài đọc đã hoàn thành.",
};

export default async function HoSoPage() {
  const user = await getCurrentUser();
  const profile = studyHubUserProfileFromAuthUser(user);
  const classroomEnrolled =
    user?.email ? await isClassroomMember(user.email, user.id).catch(() => false) : false;
  const view = (
    <ProfileProgressView
      userProfile={profile}
      isLoggedIn={Boolean(user)}
      classroomEnrolled={classroomEnrolled}
    />
  );

  if (user) {
    return <SrsSyncProvider userId={user.id}>{view}</SrsSyncProvider>;
  }

  return view;
}
