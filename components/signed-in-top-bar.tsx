"use client";

import type { ReactNode } from "react";
import { StudyHubPopoverMenu } from "@/components/study-module/study-hub-popover-menu";

export function SignedInTopBar({
  left,
  signInNext,
}: {
  /** Thường là link “← …” */
  left: ReactNode;
  signInNext?: string;
}) {
  return (
    <div className="flex w-full min-w-0 items-center justify-between gap-3">
      <div className="flex min-h-8 min-w-0 shrink-0 items-center">{left}</div>
      <div className="flex min-h-8 shrink-0 items-center">
        <StudyHubPopoverMenu signInNext={signInNext} />
      </div>
    </div>
  );
}
