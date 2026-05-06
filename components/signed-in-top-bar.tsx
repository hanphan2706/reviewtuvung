"use client";

import type { ReactNode } from "react";
import { AuthButton } from "@/components/auth-button";

const signOutClassName =
  "shrink-0 cursor-pointer rounded-none px-3 py-1.5 text-sm font-medium text-ink-muted";

export function SignedInTopBar({
  left,
  signOutLabel,
}: {
  /** Thường là link “← …” */
  left: ReactNode;
  signOutLabel?: string;
}) {
  return (
    <div className="flex w-full min-w-0 items-center justify-between gap-3">
      <div className="min-w-0 shrink-0">{left}</div>
      <AuthButton mode="sign-out" signOutLabel={signOutLabel} className={`${signOutClassName} shrink-0`} />
    </div>
  );
}
