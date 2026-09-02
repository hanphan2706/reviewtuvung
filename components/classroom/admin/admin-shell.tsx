"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { studyTokens } from "@/components/study-module/study-tokens";

export function AdminShell({
  title,
  subtitle,
  backHref,
  children,
}: {
  title: string;
  subtitle?: string;
  backHref?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-[#f5f5f7] px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {backHref ? (
          <Link
            href={backHref}
            className="mb-4 inline-flex text-sm font-medium text-[#4b2876] hover:underline"
          >
            ← Quay lại
          </Link>
        ) : null}
        <header className="mb-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink-muted">Admin LMS</p>
          <h1 className="mt-1 font-serif text-3xl font-bold text-ink">{title}</h1>
          {subtitle ? <p className="mt-2 max-w-2xl text-sm text-ink-muted">{subtitle}</p> : null}
        </header>
        {children}
      </div>
    </div>
  );
}

export function AdminPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="overflow-hidden rounded-xl border border-zinc-200/90 bg-white shadow-sm ring-1 ring-zinc-950/5">
      <div className="border-b border-zinc-200/90 px-5 py-3">
        <h2 className="font-serif text-lg font-bold text-ink">{title}</h2>
      </div>
      <div className="px-5 py-4">{children}</div>
    </section>
  );
}

export function adminPrimaryButtonClass(disabled = false): string {
  return [
    "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition",
    disabled ? "cursor-not-allowed bg-zinc-400" : "cursor-pointer bg-[#4b2876] hover:bg-[#3d2061]",
  ].join(" ");
}

export function adminInputClassName(): string {
  return "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-sm text-ink outline-none ring-[#4b2876]/20 focus:border-[#4b2876] focus:ring-2";
}

export function adminMutedText(): string {
  return "text-sm text-ink-muted";
}

export const adminAccent = studyTokens.accent;
