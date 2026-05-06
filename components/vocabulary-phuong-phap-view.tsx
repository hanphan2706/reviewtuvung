"use client";

import { LandingSectionLink } from "@/components/landing-section-link";
import { SignedInTopBar } from "@/components/signed-in-top-bar";
import { VocabularyMethodIntro } from "@/components/vocabulary-method-intro";

export function VocabularyPhuongPhapView() {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center px-5 pb-6 pt-10">
      <div className="flex w-full max-w-md flex-col gap-4">
        <SignedInTopBar
          left={
            <LandingSectionLink
              sectionId="tu-hoc"
              className="inline-flex w-fit shrink-0 cursor-pointer items-center gap-2 rounded-xl px-2 py-1.5 text-sm font-medium text-ink-muted"
            >
              ← Tự học
            </LandingSectionLink>
          }
        />

        <VocabularyMethodIntro includeAuthSection={false} />
      </div>
    </div>
  );
}
