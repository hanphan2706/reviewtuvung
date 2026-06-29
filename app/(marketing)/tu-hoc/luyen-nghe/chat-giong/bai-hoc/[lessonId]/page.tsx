import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ListeningAccentComingSoonView } from "@/components/listening/listening-accent-coming-soon-view";
import { ListeningAccentVideoLessonView } from "@/components/listening/listening-accent-video-lesson-view";
import { SrsSyncProvider } from "@/components/srs-sync-provider";
import { studyHubUserProfileFromAuthUser } from "@/lib/auth/user-profile";
import { isListeningAccentExploreLive } from "@/lib/listening/accent-explore-release";
import {
  getAccentVideoLesson,
  isAccentVideoLessonPlayable,
} from "@/lib/listening/accent-video-lesson-content";
import { getServerAuthState } from "@/lib/auth/server-auth-state";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { LANDING } from "@/lib/landing-content";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ lessonId: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lessonId } = await params;
  const lesson = getAccentVideoLesson(lessonId);
  if (!lesson) {
    return { title: `Luyện nghe | ${LANDING.brand}` };
  }
  return {
    title: `${lesson.pageTitle} | Luyện nghe | ${LANDING.brand}`,
    description: lesson.intro,
  };
}

export default async function ListeningAccentVideoLessonPage({ params }: PageProps) {
  const { lessonId } = await params;
  const lesson = getAccentVideoLesson(lessonId);

  if (!lesson || !isAccentVideoLessonPlayable(lesson)) {
    notFound();
  }

  const supabase = await createServerSupabaseClient();
  const { user, loggedIn, devBypass } = await getServerAuthState();

  const view = isListeningAccentExploreLive() ? (
    <ListeningAccentVideoLessonView
      lesson={lesson}
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
