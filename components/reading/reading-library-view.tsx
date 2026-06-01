"use client";

import { Suspense, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReadingArticleGrid } from "@/components/reading/reading-article-grid";
import { ReadingLibrarySortSelect } from "@/components/reading/reading-library-sort";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import { studyHubContainerClass, studyHubPageBgClass } from "@/components/study-module/study-hub-shell";
import { StudyLoginPrompt } from "@/components/study-module/study-login-prompt";
import { useStudyHubLoggedIn } from "@/hooks/use-study-hub-logged-in";
import { useReadingArticleNav } from "@/hooks/use-reading-article-nav";
import { useReadingArticleReadCounts } from "@/hooks/use-reading-article-read-counts";
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const sort = parseReadingLibrarySort(searchParams.get("sap-xep"));
  const { readCounts, loading: readCountsLoading } = useReadingArticleReadCounts();
  const { openArticle, loginArticle, closeLoginPrompt, loginOauthNext } = useReadingArticleNav(loggedIn);

  const sortedArticles = useMemo(
    () => sortReadingLibraryArticles(articles, sort, readCounts),
    [articles, sort, readCounts],
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
        <div className={`${studyHubContainerClass} py-10 md:py-12`}>
          <header className="mb-8 flex flex-col gap-6 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h1 className="font-serif text-3xl font-bold leading-tight text-[#000001] md:text-[2rem]">
                {pageTitle}
              </h1>
              {pageDescription ? (
                <p className="mt-3 text-base leading-relaxed text-[#47464b]">{pageDescription}</p>
              ) : null}
            </div>
            <ReadingLibrarySortSelect
              className="self-end"
              value={sort}
              onChange={setSort}
              disabled={sort === "reads-desc" && readCountsLoading}
            />
          </header>
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
