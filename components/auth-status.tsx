"use client";

import Link from "next/link";
import { AuthButton } from "@/components/auth-button";

export function AuthStatus({
  email,
  supabaseConfigured,
}: {
  email: string | null;
  supabaseConfigured: boolean;
}) {
  if (!supabaseConfigured || !email) {
    return null;
  }

  return (
    <div className="flex w-full justify-center px-5 pt-4">
      <div className="flex w-full max-w-lg items-center justify-between gap-3 rounded-lg border border-zinc-200/80 bg-white px-4 py-3 text-sm shadow-sm ring-1 ring-zinc-950/5">
        <Link href="/#tu-hoc" className="shrink-0 cursor-pointer font-medium text-[#4b2876]">
          ← Tự học
        </Link>
        <div className="flex min-w-0 items-center gap-3">
          <span className="min-w-0 truncate text-ink-muted">{email}</span>
          <AuthButton
            mode="sign-out"
            className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-ink"
          />
        </div>
      </div>
    </div>
  );
}
