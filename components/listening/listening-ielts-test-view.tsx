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
import { StudyLoginPrompt } from "@/components/study-module/study-login-prompt";
import { useStudyHubLoggedIn } from "@/hooks/use-study-hub-logged-in";
import { useStudyExamNav } from "@/hooks/use-study-exam-nav";
import {
  filterRealExams,
  LISTENING_REAL_EXAMS,
  listeningRealExamHref,
  type RealExamListing,
} from "@/lib/exam/real-exam-catalog";
import {
  LISTENING_CAMBRIDGE_TESTS,
  listeningIeltsTestExamHref,
  type ListeningIeltsTest,
} from "@/lib/listening/ielts-test-catalog";
import {
  parseReadingIeltsLibrarySort,
  type ReadingIeltsLibrarySort,
} from "@/lib/reading/library-sort";
import { useStudyHubLibraryGrid } from "@/hooks/use-study-hub-library-grid";
import { buildListeningIeltsExamGridItems } from "@/lib/study-hub/ielts-exam-grid";
import { filterReadingIeltsTests } from "@/lib/study-hub/library-search";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";

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
  const loggedIn = useStudyHubLoggedIn(isLoggedIn);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const sort = parseReadingIeltsLibrarySort(searchParams.get("sap-xep"));
  const [query, setQuery] = useState("");
  const { openExamHref, loginPrompt, closeLoginPrompt } = useStudyExamNav(loggedIn);

  const gridItems = useMemo(() => {
    const filteredRealExams = filterRealExams(LISTENING_REAL_EXAMS, query);
    const filteredTests = filterReadingIeltsTests(
      LISTENING_CAMBRIDGE_TESTS.map((test) => ({
        pilotId: test.testId,
        label: test.label,
        bookTitle: test.bookTitle,
        testNumber: test.testNumber,
        coverImageUrl: test.coverImageUrl,
        catalogOrder: test.catalogOrder,
      })),
      query,
    ).map((item) => LISTENING_CAMBRIDGE_TESTS.find((test) => test.testId === item.pilotId)!);
    return buildListeningIeltsExamGridItems(filteredRealExams, filteredTests, sort);
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
    openExamHref(listeningRealExamHref(exam.slug));
  };

  const startTest = (test: ListeningIeltsTest) => {
    openExamHref(listeningIeltsTestExamHref(test.testId));
  };

  return (
    <>
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

export function ListeningIeltsTestView(props: ListeningIeltsTestViewProps) {
  return (
    <Suspense fallback={<div className="min-h-dvh bg-[#f5f5f7]" />}>
      <ListeningIeltsTestViewInner {...props} />
    </Suspense>
  );
}
