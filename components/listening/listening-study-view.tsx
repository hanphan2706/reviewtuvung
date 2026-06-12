"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ListeningHub } from "@/components/listening/listening-hub";
import { StudyLoginPrompt } from "@/components/study-module/study-login-prompt";
import { studyHubPageBgClass } from "@/components/study-module/study-hub-shell";
import { useStudyHubLoggedIn } from "@/hooks/use-study-hub-logged-in";
import { useListeningLessonNav } from "@/hooks/use-listening-lesson-nav";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";
import {
  LISTENING_HUB_HREF,
  listeningFeaturedLessonHref,
  listeningLessonHref,
  parseListeningLessonPart,
} from "@/lib/listening/listening-hub-nav";

type ListeningStudyViewProps = {
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

function ListeningStudyViewInner({ isLoggedIn, userProfile = null, supabaseConfigured }: ListeningStudyViewProps) {
  const loggedIn = useStudyHubLoggedIn(isLoggedIn);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { openLesson, pendingSlug, closeLoginPrompt, loginOauthNext } = useListeningLessonNav(loggedIn);

  useEffect(() => {
    const legacyPart = parseListeningLessonPart(searchParams.get("part"));
    if (legacyPart !== null) {
      router.replace(listeningLessonHref(legacyPart), { scroll: false });
      return;
    }
    if (loggedIn && searchParams.get("pilot") === "1") {
      router.replace(listeningFeaturedLessonHref(), { scroll: false });
    }
  }, [loggedIn, router, searchParams]);

  const openLibrary = (href: string) => {
    router.push(href);
  };

  return (
    <>
      <ListeningHub
        isLoggedIn={loggedIn}
        userProfile={userProfile}
        supabaseConfigured={supabaseConfigured}
        onStartFeatured={openLesson}
        onOpenLesson={openLesson}
        onOpenLibrary={openLibrary}
      />
      {pendingSlug ? (
        <StudyLoginPrompt
          title="Đăng nhập để nghe bài này"
          description="Bạn có thể khám phá Luyện nghe khi chưa đăng nhập. Đăng nhập để bắt đầu phiên nghe chủ động và xem transcript."
          oauthNext={loginOauthNext ?? LISTENING_HUB_HREF}
          supabaseConfigured={supabaseConfigured}
          onClose={closeLoginPrompt}
        />
      ) : null}
    </>
  );
}

export function ListeningStudyView(props: ListeningStudyViewProps) {
  return (
    <Suspense fallback={<div className={studyHubPageBgClass} />}>
      <ListeningStudyViewInner {...props} />
    </Suspense>
  );
}
