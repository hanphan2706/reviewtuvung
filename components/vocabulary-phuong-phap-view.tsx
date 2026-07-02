"use client";

import { VocabularyMethodIntro } from "@/components/vocabulary-method-intro";
import { studyHubSubpageContentClass } from "@/components/study-module/study-hub-shell";
import { VocabularySubpageHeader } from "@/components/vocabulary/vocabulary-subpage-header";

export function VocabularyPhuongPhapView() {
  return (
    <div className={studyHubSubpageContentClass}>
      <VocabularySubpageHeader
        title="Phương pháp học"
        description={
          <>
            Tại sao lại là phương pháp
            <br className="sm:hidden" /> Spaced-repetition và Active learning?
          </>
        }
      />
      <VocabularyMethodIntro includeAuthSection={false} embedded />
    </div>
  );
}
