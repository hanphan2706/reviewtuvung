"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import {
  libraryTotalPages,
  paginateLibraryItems,
  parseLibraryPage,
  STUDY_HUB_LIBRARY_GRID_PAGE_SIZE,
} from "@/lib/study-hub/library-grid";

export function useStudyHubLibraryGrid<T>(
  items: readonly T[],
  pageSize = STUDY_HUB_LIBRARY_GRID_PAGE_SIZE,
) {
  const searchParams = useSearchParams();
  const totalPages = libraryTotalPages(items.length, pageSize);
  const currentPage = parseLibraryPage(searchParams.get("trang"), totalPages);

  const pageItems = useMemo(
    () => paginateLibraryItems(items, currentPage, pageSize),
    [items, currentPage, pageSize],
  );

  return { pageItems, totalPages, currentPage };
}
