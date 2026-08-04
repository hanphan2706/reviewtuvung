"use client";

import { Suspense, useMemo } from "react";
import { usePathname } from "next/navigation";
import { ListeningCourseLessonList } from "@/components/listening/listening-course-lesson-list";
import { ListeningCourseLibrarySidebar } from "@/components/listening/listening-course-library-sidebar";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import {
  studyHubCoursePageTitleClass,
  studyHubPageBgClass,
  studyHubSubpageContentClass,
} from "@/components/study-module/study-hub-shell";
import { StudyLoginPrompt } from "@/components/study-module/study-login-prompt";
import { useStudyHubLoggedIn } from "@/hooks/use-study-hub-logged-in";
import { useListeningLessonNav } from "@/hooks/use-listening-lesson-nav";
import type { ListeningPartMeta } from "@/lib/listening/content-manifest";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";
import { sortListeningLessons } from "@/lib/listening/library-nav";

type ListeningCourseLibraryViewProps = {
  pageTitle: string;
  pageDescription: string;
  pageDescriptionExtra?: string;
  courseSourceLabel?: string;
  lessons: readonly ListeningPartMeta[];
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

function ListeningCourseLibraryViewInner({
  pageTitle,
  pageDescription,
  pageDescriptionExtra,
  courseSourceLabel,
  lessons,
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
}: ListeningCourseLibraryViewProps) {
  const loggedIn = useStudyHubLoggedIn(isLoggedIn);
  const pathname = usePathname();
  const { openLesson, pendingSlug, closeLoginPrompt, loginOauthNext } = useListeningLessonNav(loggedIn);

  const sortedLessons = useMemo(() => sortListeningLessons(lessons), [lessons]);

  return (
    <>
      <div className={studyHubPageBgClass}>
        <StudyHubHeader
          title="Luyện nghe"
          showListeningFilters
          isLoggedIn={loggedIn}
          userProfile={userProfile}
          supabaseConfigured={supabaseConfigured}
          signInNext={pathname}
        />
        <div className={studyHubSubpageContentClass}>
          <header className={studyHubCoursePageTitleClass}>
            <h1 className="font-serif text-3xl font-bold leading-tight text-[#000001] md:text-[2.25rem]">
              {pageTitle}
            </h1>
            {pageDescription ? (
              <p className="mt-3 text-base leading-relaxed text-[#47464b]">{pageDescription}</p>
            ) : null}
            {pageDescriptionExtra ? (
              <p className="mt-3 text-base leading-relaxed text-[#47464b]">{pageDescriptionExtra}</p>
            ) : null}
          </header>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_min(100%,20rem)] lg:items-start xl:grid-cols-[minmax(0,1fr)_22rem]">
            <ListeningCourseLessonList
              lessons={sortedLessons}
              onOpenLesson={openLesson}
              sourceLabel={courseSourceLabel}
            />
            <ListeningCourseLibrarySidebar lessons={sortedLessons} isLoggedIn={loggedIn} />
          </div>
        </div>
      </div>
      {pendingSlug ? (
        <StudyLoginPrompt
          title="Đăng nhập để nghe bài này"
          description="Bạn có thể duyệt thư viện Luyện nghe khi chưa đăng nhập. Đăng nhập để bắt đầu phiên nghe chủ động và xem transcript."
          oauthNext={loginOauthNext ?? pathname}
          supabaseConfigured={supabaseConfigured}
          onClose={closeLoginPrompt}
        />
      ) : null}
    </>
  );
}

export function ListeningCourseLibraryView(props: ListeningCourseLibraryViewProps) {
  return (
    <Suspense fallback={<div className="min-h-dvh bg-[#f5f5f7]" />}>
      <ListeningCourseLibraryViewInner {...props} />
    </Suspense>
  );
}
