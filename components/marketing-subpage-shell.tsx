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
    <div className="min-h-dvh bg-[#f8f8fa] text-[#000001]">
      <div className="mx-auto w-full max-w-3xl px-5 py-5 sm:px-7 sm:py-6 md:px-10 md:py-8">
        <nav className="mb-6" aria-label="Breadcrumb">
          <Link
            href="/"
            className="text-sm font-medium text-[#4b2876] underline decoration-[#4b2876]/30 underline-offset-2 transition hover:decoration-[#4b2876]/60"
          >
            ← Về trang chủ
          </Link>
        </nav>
        <article>
          <h1 className="mb-6 text-balance font-serif text-2xl font-bold leading-tight tracking-[-0.03em] text-[#000001] md:text-3xl">
            {title}
          </h1>
          <div
            className={[
              "space-y-4 text-[15px] leading-relaxed text-[#47464b]",
              "[&_h2]:mt-8 [&_h2]:scroll-mt-28 [&_h2]:font-serif [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-[#000001]",
              "[&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5",
              "[&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-5",
              "[&_strong]:font-semibold [&_strong]:text-[#000001]",
              "[&_a]:font-semibold [&_a]:text-[#4b2876] [&_a]:underline [&_a]:decoration-[#4b2876]/35 [&_a]:underline-offset-[0.15em]",
              "[&_blockquote]:my-2 [&_blockquote]:border-l-[3px] [&_blockquote]:border-[#4b2876]/40 [&_blockquote]:bg-[#fafafa] [&_blockquote]:px-4 [&_blockquote]:py-3 [&_blockquote]:text-[0.9375rem] [&_blockquote]:leading-relaxed [&_blockquote]:text-[#000001]",
              "[&_aside]:my-2 [&_aside]:border-l-[3px] [&_aside]:border-[#4b2876]/40 [&_aside]:bg-[#fafafa] [&_aside]:px-4 [&_aside]:py-3 [&_aside]:text-[0.9375rem] [&_aside]:leading-relaxed [&_aside]:text-[#000001]",
            ].join(" ")}
          >
            {children}
          </div>
        </article>
      </div>
    </div>
  );
}
