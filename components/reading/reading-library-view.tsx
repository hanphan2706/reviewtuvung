"use client";

import { Suspense, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReadingArticleGrid } from "@/components/reading/reading-article-grid";
import { ReadingLibrarySortSelect } from "@/components/reading/reading-library-sort";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import { StudyHubLibraryPageHeader } from "@/components/study-module/study-hub-library-page-header";
import {
  studyHubPageBgClass,
  studyHubSubpageContentClass,
} from "@/components/study-module/study-hub-shell";
import { StudyLoginPrompt } from "@/components/study-module/study-login-prompt";
import { useStudyHubLoggedIn } from "@/hooks/use-study-hub-logged-in";
import { useReadingArticleNav } from "@/hooks/use-reading-article-nav";
import type { ReadingHubArticle } from "@/lib/reading/hub-articles";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";
import {
  parseReadingLibrarySort,
  sortReadingLibraryArticles,
  type ReadingLibrarySort,
} from "@/lib/reading/library-sort";

type ReadingLibraryViewProps = {
  pageTitle: string;
  pageDescription: string;
  articles: ReadingHubArticle[];
  readMinutesByArticleId?: Record<string, number>;
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

function ReadingLibraryViewInner({
  pageTitle,
  pageDescription,
  articles,
  readMinutesByArticleId = {},
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
}: ReadingLibraryViewProps) {
  const loggedIn = useStudyHubLoggedIn(isLoggedIn);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const sort = parseReadingLibrarySort(searchParams.get("sap-xep"));
  const { openArticle, loginArticle, closeLoginPrompt, loginOauthNext } = useReadingArticleNav(loggedIn);

  const sortedArticles = useMemo(
    () => sortReadingLibraryArticles(articles, sort, readMinutesByArticleId),
    [articles, sort, readMinutesByArticleId],
  );

  const setSort = (next: ReadingLibrarySort) => {
    const params = new URLSearchParams(searchParams.toString());
    if (next === "newest") {
      params.delete("sap-xep");
    } else {
      params.set("sap-xep", next);
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

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
        <div className={studyHubSubpageContentClass}>
          <StudyHubLibraryPageHeader
            title={pageTitle}
            description={pageDescription || undefined}
            sort={
              <ReadingLibrarySortSelect scope="articles" value={sort} onChange={setSort} />
            }
          />
          <ReadingArticleGrid articles={sortedArticles} onStartArticle={openArticle} />
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
