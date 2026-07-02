import type { ReactNode } from "react";
import {
  studyHubSubpageLibraryDescriptionClass,
  studyHubSubpageLibraryHeaderClass,
  studyHubSubpageLibraryTitleBlockClass,
  studyHubSubpageLibraryTitleClass,
} from "@/components/study-module/study-hub-shell";

type VocabularySubpageHeaderProps = {
  title: string;
  description?: ReactNode;
  trailing?: ReactNode;
};

export function VocabularySubpageHeader({ title, description, trailing }: VocabularySubpageHeaderProps) {
  return (
    <header className={studyHubSubpageLibraryHeaderClass}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className={studyHubSubpageLibraryTitleBlockClass}>
          <h1 className={studyHubSubpageLibraryTitleClass}>{title}</h1>
          {description ? (
            <p className={studyHubSubpageLibraryDescriptionClass}>{description}</p>
          ) : null}
        </div>
        {trailing ? <div className="shrink-0">{trailing}</div> : null}
      </div>
    </header>
  );
}
