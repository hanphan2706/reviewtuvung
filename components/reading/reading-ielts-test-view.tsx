"use client";

import { Suspense, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReadingIeltsTestGrid } from "@/components/reading/reading-ielts-test-grid";
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
import { useStudyExamNav } from "@/hooks/use-study-exam-nav";
import {
  filterRealExams,
  READING_REAL_EXAMS,
  readingRealExamHref,
  type RealExamListing,
} from "@/lib/exam/real-exam-catalog";
import {
  READING_CAMBRIDGE_TESTS,
  readingIeltsTestExamHref,
  type ReadingIeltsTest,
} from "@/lib/reading/ielts-test-catalog";
import {
  READING_IELTS_LIBRARY_SORT_OPTIONS,
  READING_LIBRARY_SORT_DEFAULT,
  parseReadingIeltsLibrarySort,
  type ReadingIeltsLibrarySort,
} from "@/lib/reading/library-sort";
import { useStudyHubLibraryGrid } from "@/hooks/use-study-hub-library-grid";
import { buildReadingIeltsExamGridItems } from "@/lib/study-hub/ielts-exam-grid";
import { filterReadingIeltsTests } from "@/lib/study-hub/library-search";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";

type ReadingIeltsTestViewProps = {
  pageTitle: string;
  pageDescription: string;
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

function ReadingIeltsTestViewInner({
  pageTitle,
  pageDescription,
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
}: ReadingIeltsTestViewProps) {
  const loggedIn = useStudyHubLoggedIn(isLoggedIn);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const sort = parseReadingIeltsLibrarySort(searchParams.get("sap-xep"));
  const [query, setQuery] = useState("");
  const { openExamHref, loginPrompt, closeLoginPrompt } = useStudyExamNav(loggedIn);

  const gridItems = useMemo(() => {
    const filteredRealExams = filterRealExams(READING_REAL_EXAMS, query);
    const filteredTests = filterReadingIeltsTests(READING_CAMBRIDGE_TESTS, query);
    return buildReadingIeltsExamGridItems(filteredRealExams, filteredTests, sort);
  }, [query, sort]);

  const { pageItems, totalPages } = useStudyHubLibraryGrid(gridItems);

  const setSort = (next: ReadingIeltsLibrarySort) => {
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

  const startRealExam = (exam: RealExamListing) => {
    openExamHref(readingRealExamHref(exam.slug));
  };

  const startTest = (test: ReadingIeltsTest) => {
    openExamHref(readingIeltsTestExamHref(test.pilotId));
  };

  return (
    <>
    <div className={studyHubPageBgClass}>
      <StudyHubHeader
        title="Luyện đọc"
        showReadingFilters
        isLoggedIn={isLoggedIn}
        userProfile={userProfile}
        supabaseConfigured={supabaseConfigured}
        signInNext={pathname}
      />
      <div className={studyHubSubpageContentClass}>
        <StudyHubLibraryPageHeader
          className="mb-8 md:mb-10"
          title={pageTitle}
          description={pageDescription || undefined}
          toolbar={
            <StudyHubLibraryIconToolbar
              searchValue={query}
              onSearchChange={handleSearchChange}
              searchPlaceholder="Tìm kiếm đề IELTS..."
              searchAriaLabel="Tìm kiếm đề IELTS"
              filterOptions={READING_IELTS_LIBRARY_SORT_OPTIONS}
              filterValue={sort}
              onFilterChange={(value) => setSort(value as ReadingIeltsLibrarySort)}
              filterAriaLabel="Sắp xếp đề IELTS"
              filterDefaultValue={READING_LIBRARY_SORT_DEFAULT}
            />
          }
        />
        <ReadingIeltsTestGrid
          items={pageItems}
          onStartRealExam={startRealExam}
          onStartTest={startTest}
          emptyMessage={query.trim() ? "Không tìm thấy đề IELTS phù hợp." : "Chưa có đề IELTS trong mục này."}
        />
        <StudyHubLibraryPagination totalPages={totalPages} ariaLabel="Phân trang luyện đề IELTS" />
      </div>
    </div>
    {loginPrompt ? (
      <StudyLoginPrompt
        title={loginPrompt.title}
        description={loginPrompt.description}
        oauthNext={loginPrompt.oauthNext}
        supabaseConfigured={supabaseConfigured}
        onClose={closeLoginPrompt}
      />
    ) : null}
    </>
  );
}

export function ReadingIeltsTestView(props: ReadingIeltsTestViewProps) {
  return (
    <Suspense fallback={<div className="min-h-dvh bg-[#f5f5f7]" />}>
      <ReadingIeltsTestViewInner {...props} />
    </Suspense>
  );
}
