"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import { ReadingArticleGrid } from "@/components/reading/reading-article-grid";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import { studyHubContainerClass, studyHubPageBgClass } from "@/components/study-module/study-hub-shell";
import { StudyLoginPrompt } from "@/components/study-module/study-login-prompt";
import { useStudyHubLoggedIn } from "@/hooks/use-study-hub-logged-in";
import { useReadingArticleNav } from "@/hooks/use-reading-article-nav";
import type { ReadingHubArticle } from "@/lib/reading/hub-articles";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";

type ReadingLibraryViewProps = {
  pageTitle: string;
  pageDescription: string;
  articles: ReadingHubArticle[];
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

function ReadingLibraryViewInner({
  pageTitle,
  pageDescription,
  articles,
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
}: ReadingLibraryViewProps) {
  const loggedIn = useStudyHubLoggedIn(isLoggedIn);
  const pathname = usePathname();
  const { openArticle, loginArticle, closeLoginPrompt, loginOauthNext } = useReadingArticleNav(loggedIn);

  return (
    <>
      <div className={studyHubPageBgClass}>
        <StudyHubHeader
          title="Luyện đọc"
          showReadingFilters
          isLoggedIn={loggedIn}
          userProfile={userProfile}
          supabaseConfigured={supabaseConfigured}
          signInNext={pathname}
        />
        <div className={`${studyHubContainerClass} py-10 md:py-12`}>
          <header className="mb-10 max-w-4xl xl:max-w-none">
            <h1 className="font-serif text-3xl font-bold leading-tight text-[#1c1b1c] md:text-[2rem]">{pageTitle}</h1>
            {pageDescription ? (
              <p className="mt-3 text-base leading-relaxed text-[#47464b]">{pageDescription}</p>
            ) : null}
          </header>
          <ReadingArticleGrid articles={articles} onStartArticle={openArticle} />
        </div>
      </div>
      {loginArticle ? (
        <StudyLoginPrompt
          title="Đăng nhập để đọc bài này"
          description="Bạn có thể duyệt thư viện Luyện đọc khi chưa đăng nhập. Đăng nhập để mở bài đọc, tra từ và thêm vào deck."
          oauthNext={loginOauthNext ?? pathname}
          supabaseConfigured={supabaseConfigured}
          onClose={closeLoginPrompt}
        />
      ) : null}
    </>
  );
}

export function ReadingLibraryView(props: ReadingLibraryViewProps) {
  return (
    <Suspense fallback={<div className="min-h-dvh bg-[#f5f5f7]" />}>
      <ReadingLibraryViewInner {...props} />
    </Suspense>
  );
}
