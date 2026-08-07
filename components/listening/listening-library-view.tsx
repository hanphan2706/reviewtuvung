"use client";

import { Suspense, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ListeningLessonGrid } from "@/components/listening/listening-lesson-grid";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import { StudyHubLibraryIconToolbar } from "@/components/study-module/study-hub-library-icon-toolbar";
import { StudyHubLibraryPageHeader } from "@/components/study-module/study-hub-library-page-header";
import { StudyHubLibraryPagination } from "@/components/study-module/study-hub-library-pagination";
import {
  studyHubPageBgClass,
  studyHubSubpageContentClass,
} from "@/components/study-module/study-hub-shell";
import { StudyLoginPrompt } from "@/components/study-module/study-login-prompt";
import { useStudyHubLoggedIn } from "@/hooks/use-study-hub-logged-in";
import { useListeningLessonNav } from "@/hooks/use-listening-lesson-nav";
import { useListeningLessonListenCounts } from "@/hooks/use-listening-lesson-listen-counts";
import { useStudyHubLibraryGrid } from "@/hooks/use-study-hub-library-grid";
import type { ListeningPartMeta } from "@/lib/listening/content-manifest";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";
import {
  LISTENING_LIBRARY_SORT_DEFAULT,
  LISTENING_LIBRARY_SORT_OPTIONS,
  parseListeningLibrarySort,
  sortListeningLibraryLessons,
  type ListeningLibrarySort,
} from "@/lib/listening/library-sort";
import { filterListeningLibraryLessons } from "@/lib/study-hub/library-search";

type ListeningLibraryViewProps = {
  pageTitle: string;
  pageDescription: string;
  lessons: readonly ListeningPartMeta[];
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

function ListeningLibraryViewInner({
  pageTitle,
  pageDescription,
  lessons,
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
}: ListeningLibraryViewProps) {
  const loggedIn = useStudyHubLoggedIn(isLoggedIn);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const sort = parseListeningLibrarySort(searchParams.get("sap-xep"));
  const [query, setQuery] = useState("");
  const { listenCounts, loading: listenCountsLoading } = useListeningLessonListenCounts();
  const { openLesson, pendingSlug, closeLoginPrompt, loginOauthNext } = useListeningLessonNav(loggedIn);

  const sortedLessons = useMemo(
    () => sortListeningLibraryLessons(lessons, sort, listenCounts),
    [lessons, sort, listenCounts],
  );

  const filteredLessons = useMemo(
    () => filterListeningLibraryLessons(sortedLessons, query),
    [sortedLessons, query],
  );

  const { pageItems, totalPages } = useStudyHubLibraryGrid(filteredLessons);

  const setSort = (next: ListeningLibrarySort) => {
    const params = new URLSearchParams(searchParams.toString());
    if (next === "newest") {
      params.delete("sap-xep");
    } else {
      params.set("sap-xep", next);
    }
    params.delete("trang");
    const queryString = params.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
  };

  const handleSearchChange = (next: string) => {
    setQuery(next);
    if (searchParams.get("trang")) {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("trang");
      const queryString = params.toString();
      router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
    }
  };

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
          <StudyHubLibraryPageHeader
            title={pageTitle}
            description={pageDescription || undefined}
            toolbar={
              <StudyHubLibraryIconToolbar
                searchValue={query}
                onSearchChange={handleSearchChange}
                searchPlaceholder="Tìm kiếm bài nghe..."
                searchAriaLabel="Tìm kiếm bài nghe"
                filterOptions={LISTENING_LIBRARY_SORT_OPTIONS}
                filterValue={sort}
                onFilterChange={(value) => setSort(value as ListeningLibrarySort)}
                filterAriaLabel="Sắp xếp bài nghe"
                filterDisabled={sort === "listens-desc" && listenCountsLoading}
                filterDefaultValue={LISTENING_LIBRARY_SORT_DEFAULT}
              />
            }
          />
          <ListeningLessonGrid
            lessons={pageItems}
            onOpenLesson={openLesson}
            emptyMessage={
              query.trim()
                ? "Không tìm thấy bài nghe phù hợp."
                : "Chưa có bài nghe trong mục này."
            }
          />
          <StudyHubLibraryPagination totalPages={totalPages} ariaLabel="Phân trang thư viện bài nghe" />
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

export function ListeningLibraryView(props: ListeningLibraryViewProps) {
  return (
    <Suspense fallback={<div className="min-h-dvh bg-[#f5f5f7]" />}>
      <ListeningLibraryViewInner {...props} />
    </Suspense>
  );
}
