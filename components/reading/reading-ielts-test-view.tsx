"use client";

import { Suspense, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReadingIeltsTestGrid } from "@/components/reading/reading-ielts-test-grid";
import { ReadingLibrarySortSelect } from "@/components/reading/reading-library-sort";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import { StudyHubLibraryPageHeader } from "@/components/study-module/study-hub-library-page-header";
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
  parseReadingLibrarySort,
  sortReadingIeltsTests,
  type ReadingLibrarySort,
} from "@/lib/reading/ielts-test-sort";

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

  const sortedTests = useMemo(
    () => sortReadingIeltsTests(READING_CAMBRIDGE_TESTS, sort),
    [sort],
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
          sort={
            <ReadingLibrarySortSelect scope="ielts" value={sort} onChange={setSort} />
          }
        />
        <ReadingIeltsTestGrid tests={sortedTests} onStartTest={startTest} />
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
