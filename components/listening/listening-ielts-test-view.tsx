"use client";

import { Suspense, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ListeningIeltsTestGrid } from "@/components/listening/listening-ielts-test-grid";
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
  LISTENING_CAMBRIDGE_TESTS,
  listeningIeltsTestExamHref,
  type ListeningIeltsTest,
} from "@/lib/listening/ielts-test-catalog";
import {
  filterRealExams,
  LISTENING_REAL_EXAMS,
  listeningRealExamHref,
  type RealExamListing,
} from "@/lib/exam/real-exam-catalog";
import { useStudyHubLibraryGrid } from "@/hooks/use-study-hub-library-grid";
import { filterReadingIeltsTests } from "@/lib/study-hub/library-search";
import {
  parseReadingLibrarySort,
  type ReadingLibrarySort,
} from "@/lib/reading/library-sort";
import { sortReadingIeltsTests } from "@/lib/reading/ielts-test-sort";

type ListeningIeltsTestViewProps = {
  pageTitle: string;
  pageDescription: string;
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

function ListeningIeltsTestViewInner({
  pageTitle,
  pageDescription,
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
}: ListeningIeltsTestViewProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const sort = parseReadingLibrarySort(searchParams.get("sap-xep"));
  const [query, setQuery] = useState("");

  const filteredRealExams = useMemo(
    () => filterRealExams(LISTENING_REAL_EXAMS, query),
    [query],
  );

  const sortedTests = useMemo(() => {
    const asReading = LISTENING_CAMBRIDGE_TESTS.map((test) => ({
      pilotId: test.testId,
      label: test.label,
      bookTitle: test.bookTitle,
      testNumber: test.testNumber,
      coverImageUrl: test.coverImageUrl,
      catalogOrder: test.catalogOrder,
    }));
    return sortReadingIeltsTests(asReading, sort).map(
      (item) => LISTENING_CAMBRIDGE_TESTS.find((test) => test.testId === item.pilotId)!,
    );
  }, [sort]);

  const filteredTests = useMemo(() => {
    const asReading = sortedTests.map((test) => ({
      pilotId: test.testId,
      label: test.label,
      bookTitle: test.bookTitle,
      testNumber: test.testNumber,
      coverImageUrl: test.coverImageUrl,
      catalogOrder: test.catalogOrder,
    }));
    return filterReadingIeltsTests(asReading, query).map(
      (item) => LISTENING_CAMBRIDGE_TESTS.find((test) => test.testId === item.pilotId)!,
    );
  }, [sortedTests, query]);

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
    window.location.assign(listeningRealExamHref(exam.slug));
  };

  const startTest = (test: ListeningIeltsTest) => {
    window.location.assign(listeningIeltsTestExamHref(test.testId));
  };

  return (
    <div className={studyHubPageBgClass}>
      <StudyHubHeader
        title="Luyện nghe"
        showListeningFilters
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
              sort={<ReadingLibrarySortSelect scope="ielts" value={sort} onChange={setSort} />}
            />
          }
        />
        <ListeningIeltsTestGrid
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

export function ListeningIeltsTestView(props: ListeningIeltsTestViewProps) {
  return (
    <Suspense fallback={<div className="min-h-dvh bg-[#f5f5f7]" />}>
      <ListeningIeltsTestViewInner {...props} />
    </Suspense>
  );
}
