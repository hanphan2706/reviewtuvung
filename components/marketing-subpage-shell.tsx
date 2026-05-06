import type { ReactNode } from "react";
import Link from "next/link";

export function MarketingSubpageShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-dvh text-ink">
      <div className="mx-auto w-full max-w-3xl px-5 py-5 sm:px-7 sm:py-6 md:px-10 md:py-8">
        <nav className="mb-6" aria-label="Breadcrumb">
          <Link
            href="/"
            className="text-sm font-medium text-[#4b2876] underline decoration-[#4b2876]/30 underline-offset-2 transition hover:decoration-[#4b2876]/60"
          >
            ← Về trang chủ
          </Link>
        </nav>
        <article className="rounded-lg border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/5 sm:p-6 md:p-8">
          <h1 className="mb-6 text-balance text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink md:text-3xl">
            {title}
          </h1>
          <div className="space-y-4 text-[15px] leading-relaxed text-ink-muted [&_h2]:mt-8 [&_h2]:scroll-mt-28 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-5 [&_strong]:font-semibold [&_strong]:text-ink">
            {children}
          </div>
        </article>
      </div>
    </div>
  );
}
