import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ListeningLessonStudyView } from "@/components/listening/listening-lesson-study-view";
import { SrsSyncProvider } from "@/components/srs-sync-provider";
import { LANDING } from "@/lib/landing-content";
import { studyHubUserProfileFromAuthUser } from "@/lib/auth/user-profile";
import { getServerAuthState } from "@/lib/auth/server-auth-state";
import {
  getListeningPartBySlug,
  LISTENING_PARTS_PILOT,
} from "@/lib/listening/content-manifest";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ lessonSlug: string }> };

export function generateStaticParams() {
  return LISTENING_PARTS_PILOT.map((p) => ({ lessonSlug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lessonSlug } = await params;
  const meta = getListeningPartBySlug(lessonSlug);
  if (!meta) {
    return { title: `Luyện nghe | ${LANDING.brand}` };
  }
  return {
    title: `${meta.title} | Luyện nghe | ${LANDING.brand}`,
    description: meta.summary,
  };
}

export default async function ListeningLessonPage({ params }: PageProps) {
  const { lessonSlug } = await params;
  const meta = getListeningPartBySlug(lessonSlug);
  if (!meta) notFound();

  const supabase = await createServerSupabaseClient();
  const { user, loggedIn, devBypass } = await getServerAuthState();
  const signInNext = `/tu-hoc/luyen-nghe/${lessonSlug}`;

  const view = (
    <ListeningLessonStudyView
      lessonSlug={lessonSlug}
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
