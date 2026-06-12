import type { ReactNode } from "react";
import { studyHubSubpageLibrarySortRowClass } from "@/components/study-module/study-hub-shell";

type StudyHubLibraryToolbarProps = {
  search: ReactNode;
  sort: ReactNode;
};

/** Hàng search (trái) + sort (phải) — cùng kích thước control. */
export function StudyHubLibraryToolbar({ search, sort }: StudyHubLibraryToolbarProps) {
  return (
    <div className={`${studyHubSubpageLibrarySortRowClass} flex-wrap gap-2`}>
      {search}
      {sort}
    </div>
  );
}
