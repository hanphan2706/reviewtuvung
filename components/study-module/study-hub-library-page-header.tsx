import type { ReactNode } from "react";
import {
  studyHubSubpageLibraryDescriptionClass,
  studyHubSubpageLibraryHeaderClass,
  studyHubSubpageLibrarySortRowClass,
  studyHubSubpageLibraryTitleBlockClass,
  studyHubSubpageLibraryTitleClass,
} from "@/components/study-module/study-hub-shell";

type StudyHubLibraryPageHeaderProps = {
  title: string;
  description?: string;
  /** Hàng toolbar (search + sort) hoặc chỉ sort. */
  toolbar: ReactNode;
  className?: string;
};

/** Tiêu đề → phụ đề → toolbar — layout chung cho trang thư viện luyện đọc / luyện nghe. */
export function StudyHubLibraryPageHeader({
  title,
  description,
  toolbar,
  className = "",
}: StudyHubLibraryPageHeaderProps) {
  return (
    <header className={`${studyHubSubpageLibraryHeaderClass} ${className}`.trim()}>
      <div className={studyHubSubpageLibraryTitleBlockClass}>
        <h1 className={studyHubSubpageLibraryTitleClass}>{title}</h1>
        {description ? (
          <p className={studyHubSubpageLibraryDescriptionClass}>{description}</p>
        ) : null}
      </div>
      {toolbar}
    </header>
  );
}
