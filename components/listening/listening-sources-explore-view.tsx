"use client";

import { Suspense, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ListeningLibrarySortSelect } from "@/components/listening/listening-library-sort";
import { ListeningSourceCategoryCard } from "@/components/listening/listening-source-category-card";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import { StudyHubLibraryPagination } from "@/components/study-module/study-hub-library-pagination";
import { StudyHubLibrarySearchInput } from "@/components/study-module/study-hub-library-search-input";
import { StudyHubLibraryToolbar } from "@/components/study-module/study-hub-library-toolbar";
import {
  studyHubPageBgClass,
  studyHubSubpageContentClass,
  studyHubSubpageTitleWideClass,
} from "@/components/study-module/study-hub-shell";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";
import { parseListeningLibrarySort } from "@/lib/listening/library-sort";
import {
  LISTENING_SOURCE_CATEGORIES,
  LISTENING_SOURCES_EXPLORE_SUBTITLE,
} from "@/lib/listening/listening-source-catalog";
import {
  filterListeningSourceCategories,
  sortListeningSourceCategories,
} from "@/lib/listening/listening-source-explore-utils";
import { useStudyHubLibraryGrid } from "@/hooks/use-study-hub-library-grid";

type ListeningSourcesExploreViewProps = {
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

function ListeningSourcesExploreViewInner({
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
}: ListeningSourcesExploreViewProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const sort = parseListeningLibrarySort(searchParams.get("sap-xep"));
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    const filtered = filterListeningSourceCategories(LISTENING_SOURCE_CATEGORIES, query);
    return sortListeningSourceCategories(filtered, sort);
  }, [query, sort]);

  const { pageItems, totalPages } = useStudyHubLibraryGrid(filteredCategories);

  const setSort = (next: typeof sort) => {
    const params = new URLSearchParams(searchParams.toString());
    if (next === "newest") {
      params.delete("sap-xep");
    } else {
      params.set("sap-xep", next);
    }
    params.delete("trang");
    const q = params.toString();
    router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false });
  };

  const handleSearchChange = (next: string) => {
    setQuery(next);
    if (searchParams.get("trang")) {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("trang");
      const q = params.toString();
      router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false });
    }
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
        <header className={studyHubSubpageTitleWideClass}>
          <h1 className="font-serif text-3xl font-bold leading-tight text-[#000001] md:text-[2.25rem]">
            Khám phá các nguồn nghe đa dạng
          </h1>
          <p className="mt-3 text-base leading-relaxed text-[#47464b]">
            {LISTENING_SOURCES_EXPLORE_SUBTITLE}
          </p>
        </header>

        <div className="mb-6">
          <StudyHubLibraryToolbar
            search={
              <StudyHubLibrarySearchInput
                value={query}
                onChange={handleSearchChange}
                placeholder="Tìm kiếm nguồn nghe..."
                aria-label="Tìm kiếm nguồn nghe"
              />
            }
            sort={<ListeningLibrarySortSelect value={sort} onChange={setSort} />}
          />
        </div>

        {pageItems.length === 0 ? (
          <p className="rounded-lg border border-dashed border-[#E4E4E7] bg-white px-6 py-12 text-center text-sm text-[#47464b]">
            Không tìm thấy nguồn nghe phù hợp.
          </p>
        ) : (
          <div className="grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {pageItems.map((category) => (
              <ListeningSourceCategoryCard key={category.id} category={category} />
            ))}
          </div>
        )}

        <StudyHubLibraryPagination totalPages={totalPages} ariaLabel="Phân trang nguồn nghe" />
      </div>
    </div>
  );
}

export function ListeningSourcesExploreView(props: ListeningSourcesExploreViewProps) {
  return (
    <Suspense fallback={<div className={studyHubPageBgClass} />}>
      <ListeningSourcesExploreViewInner {...props} />
    </Suspense>
  );
}
