"use client";

import { useRouter } from "next/navigation";
import { ListeningLessonView } from "@/components/listening/listening-lesson-view";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";
import { getListeningPartBySlug } from "@/lib/listening/content-manifest";
import { LISTENING_HUB_HREF, listeningLessonHrefBySlug } from "@/lib/listening/listening-hub-nav";

type ListeningLessonStudyViewProps = {
  lessonSlug: string;
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
  signInNext: string;
};

export function ListeningLessonStudyView({
  lessonSlug,
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
  signInNext,
}: ListeningLessonStudyViewProps) {
  const router = useRouter();
  const meta = getListeningPartBySlug(lessonSlug);
  if (!meta) return null;

  return (
    <ListeningLessonView
      partId={meta.id}
      onSelectLesson={(slug) => router.push(listeningLessonHrefBySlug(slug))}
      onTitleClick={() => router.replace(LISTENING_HUB_HREF, { scroll: false })}
      isLoggedIn={isLoggedIn}
      userProfile={userProfile}
      supabaseConfigured={supabaseConfigured}
      signInNext={signInNext}
    />
  );
}
