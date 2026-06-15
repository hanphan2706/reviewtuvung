"use client";

import { Suspense, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReadingIeltsTestGrid } from "@/components/reading/reading-ielts-test-grid";
import { ReadingLibrarySortSelect } from "@/components/reading/reading-library-sort";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import { StudyHubLibraryPageHeader } from "@/components/study-module/study-hub-library-page-header";
import { StudyHubLibraryPagination } from "@/components/study-module/study-hub-library-pagination";
import { StudyHubLibrarySearchInput } from "@/components/study-module/study-hub-library-search-input";
import { StudyHubLibraryToolbar } from "@/components/study-module/study-hub-library-toolbar";
import {
  studyHubPageBgClass,
  studyHubSubpageContentClass,
} from "@/components/study-module/study-hub-shell";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";
import {
  READING_CAMBRIDGE_TESTS,
  readingIeltsTestExamHref,
  type ReadingIeltsTest,
} from "@/lib/reading/ielts-test-catalog";
import {
  filterRealExams,
  READING_REAL_EXAMS,
  readingRealExamHref,
  type RealExamListing,
} from "@/lib/exam/real-exam-catalog";
import {
  parseReadingLibrarySort,
  sortReadingIeltsTests,
  type ReadingLibrarySort,
} from "@/lib/reading/ielts-test-sort";
import { useStudyHubLibraryGrid } from "@/hooks/use-study-hub-library-grid";
import { filterReadingIeltsTests } from "@/lib/study-hub/library-search";

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
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const sort = parseReadingLibrarySort(searchParams.get("sap-xep"));
  const [query, setQuery] = useState("");

  const filteredRealExams = useMemo(
    () => filterRealExams(READING_REAL_EXAMS, query),
    [query],
  );

  const sortedTests = useMemo(
    () => sortReadingIeltsTests(READING_CAMBRIDGE_TESTS, sort),
    [sort],
  );

  const filteredTests = useMemo(
    () => filterReadingIeltsTests(sortedTests, query),
    [sortedTests, query],
  );

  const { pageItems, totalPages } = useStudyHubLibraryGrid(filteredTests);

  const setSort = (next: ReadingLibrarySort) => {
    const params = new URLSearchParams(searchParams.toString());
    if (next === "newest") {
      params.delete("sap-xep");
    } else {
      params.set("sap-xep", next);
    }
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
    window.location.assign(readingRealExamHref(exam.slug));
  };

  const startTest = (test: ReadingIeltsTest) => {
    window.location.assign(readingIeltsTestExamHref(test.pilotId));
  };

  return (
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
            <StudyHubLibraryToolbar
              search={
                <StudyHubLibrarySearchInput
                  value={query}
                  onChange={handleSearchChange}
                  placeholder="Tìm kiếm đề IELTS..."
                  aria-label="Tìm kiếm đề IELTS"
                />
              }
              sort={
                <ReadingLibrarySortSelect scope="ielts" value={sort} onChange={setSort} />
              }
            />
          }
        />
        <ReadingIeltsTestGrid
          realExams={filteredRealExams}
          tests={pageItems}
          onStartRealExam={startRealExam}
          onStartTest={startTest}
          emptyMessage={query.trim() ? "Không tìm thấy đề IELTS phù hợp." : "Chưa có đề IELTS trong mục này."}
        />
        <StudyHubLibraryPagination totalPages={totalPages} ariaLabel="Phân trang luyện đề IELTS" />
      </div>
    </div>
  );
}

export function ReadingIeltsTestView(props: ReadingIeltsTestViewProps) {
  return (
    <Suspense fallback={<div className="min-h-dvh bg-[#f5f5f7]" />}>
      <ReadingIeltsTestViewInner {...props} />
    </Suspense>
  );
}
