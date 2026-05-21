"use client";

import Link from "next/link";
import { LANDING } from "@/lib/landing-content";
import { LandingSectionLink } from "@/components/landing-section-link";
import { ThreadsIcon } from "@/components/threads-icon";

export function FooterCopyrightLine({ align }: { align: "left" | "right" }) {
  const { lead, brand } = LANDING.footer.copyright;
  return (
    <span
      className={`inline-flex max-w-full flex-wrap items-baseline gap-x-1 gap-y-0.5 text-sm font-bold leading-snug text-ink ${
        align === "right" ? "justify-end text-right" : "justify-start text-left"
      }`}
    >
      <span>{lead}</span>
      <span className="inline-block font-bold">
        {brand}
        <sup
          className="ml-[0.06em] align-super text-[0.58em] font-medium leading-none tracking-tight text-ink"
          aria-hidden
        >
          ©
        </sup>
      </span>
    </span>
  );
}

function FacebookHighlightLabel() {
  const label = LANDING.footer.contactHighlight.label;
  const slash = label.indexOf("/");
  const host = slash >= 0 ? label.slice(0, slash + 1) : label;
  const path = slash >= 0 ? label.slice(slash + 1) : "";

  return (
    <span className="inline-flex flex-col items-start gap-0 leading-tight whitespace-nowrap text-left underline decoration-1 underline-offset-[0.12em] [text-decoration-skip-ink:none] md:items-end md:text-right">
      <span className="underline decoration-1 underline-offset-[0.12em] [text-decoration-skip-ink:none]">{host}</span>
      {path ? (
        <span className="underline decoration-1 underline-offset-[0.12em] [text-decoration-skip-ink:none]">{path}</span>
      ) : null}
    </span>
  );
}

export function LandingFooter() {
  return (
    <footer
      className="flex min-h-[90svh] flex-col scroll-mt-20 bg-zinc-200/40"
      id="lien-he"
    >
      <div className="mx-auto flex w-full min-h-0 max-w-[1600px] flex-1 flex-col px-5 pb-5 pt-4 sm:px-7 sm:pb-6 sm:pt-5 md:px-10 md:pb-7">
        <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col rounded-lg border border-zinc-200/90 bg-white px-6 py-5 shadow-sm ring-1 ring-zinc-950/5 sm:px-8 sm:py-6 md:px-10 md:py-7">
          <div className="shrink-0">
            {/* max-lg: tiêu đề + link cùng một dòng chảy, khe nhỏ như xuống dòng. lg+: 2 cột. */}
            <div className="grid w-full min-w-0 grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 md:items-start md:gap-x-8 md:gap-y-0 xl:gap-x-12">
              <div className="min-w-0 space-y-1 text-pretty text-left text-[clamp(1.2rem,3.2vw,2.35rem)] font-normal leading-[1.15] tracking-[-0.025em] sm:space-y-1.5 md:max-w-[min(100%,40rem)]">
                {LANDING.footer.ctaLines.map((line) => (
                  <p key={line} className="text-ink-muted">
                    {line}
                  </p>
                ))}
              </div>
              <a
                href={LANDING.footer.contactHighlight.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-w-0 shrink-0 text-[clamp(1.1rem,3.8vw,2.6rem)] font-extrabold leading-snug text-ink underline decoration-1 underline-offset-[0.1em] transition hover:opacity-80 max-sm:text-left sm:max-w-none md:max-w-[min(100%,20rem)] md:justify-self-end md:pt-1 md:text-right md:text-[clamp(1.35rem,2.4vw,2.75rem)]"
              >
                <FacebookHighlightLabel />
              </a>
            </div>
          </div>

          {/*
            max-lg: gap-6 thống nhất giữa: Khám phá | social | block (line + legal + copyright).
            lg: giữ bố cục hàng ngang cũ.
          */}
          <div className="mt-auto flex min-h-0 w-full min-w-0 flex-col max-lg:gap-6">
            <div className="grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8 md:gap-12">
              <div>
                <p className="text-xs font-medium leading-tight text-ink-muted sm:text-sm">
                  {LANDING.footer.columnDiscoverTitle}
                </p>
                <ul className="mt-2.5 space-y-1.5 sm:mt-3 sm:space-y-2">
                  {LANDING.nav
                    .filter((item) => item.href !== "/gioi-thieu")
                    .map((item) => {
                      if ("scrollSection" in item && item.scrollSection) {
                        return (
                          <li key={item.label}>
                            <LandingSectionLink
                              sectionId={item.scrollSection}
                              className="text-sm font-bold text-ink transition hover:opacity-80"
                            >
                              {item.label}
                            </LandingSectionLink>
                          </li>
                        );
                      }
                      const isOnTap = item.href.startsWith("/");
                      const isExternal = item.href.startsWith("http");
                      if (isOnTap) {
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="text-sm font-bold text-ink transition hover:opacity-80"
                            >
                              {item.label}
                            </Link>
                          </li>
                        );
                      }
                      return (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="text-sm font-bold text-ink transition hover:opacity-80"
                          >
                            {item.label}
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div>
                <p className="text-xs font-medium leading-tight text-ink-muted sm:text-sm">
                  {LANDING.footer.columnResourcesTitle}
                </p>
                <ul className="mt-2.5 space-y-1.5 sm:mt-3 sm:space-y-2">
                  {LANDING.moreLinks.map((l) => {
                    const internal = l.href.startsWith("/");
                    return (
                      <li key={l.href}>
                        {internal ? (
                          <Link
                            href={l.href}
                            className="text-sm font-bold text-ink transition hover:opacity-80"
                          >
                            {l.label}
                          </Link>
                        ) : (
                          <a
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-ink transition hover:opacity-80"
                          >
                            {l.label}
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Dưới max-lg: social; line; một block: privacy, cookie, copyright + credits. */}
            <div className="hidden w-full min-w-0 flex-col text-sm text-ink max-lg:flex max-lg:gap-6">
              <div className="flex min-w-0 items-center gap-x-2.5 pl-0.5 sm:pl-0">
                <span
                  className="inline-flex h-6 w-6 shrink-0 items-center justify-center self-center text-ink opacity-80"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <svg
                    className="h-full w-full"
                    viewBox="0 0 24 24"
                    fill="none"
                    role="img"
                  >
                    <title>Instagram</title>
                    <rect
                      x="2.5"
                      y="2.5"
                      width="19"
                      height="19"
                      rx="4.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3.2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                    <circle cx="16.2" cy="7.5" r="0.7" fill="currentColor" />
                  </svg>
                </span>
                <span
                  className="inline-flex h-6 w-6 shrink-0 items-center justify-center self-center text-ink opacity-80"
                  aria-label="Threads"
                  title="Threads"
                >
                  <ThreadsIcon className="h-[22px] w-[22px]" />
                </span>
                <a
                  href={LANDING.contactFacebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-6 min-w-2 shrink-0 items-center self-center text-ink transition hover:opacity-70"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <span className="text-base font-black leading-none">f</span>
                </a>
              </div>
              <div className="min-w-0 border-t border-zinc-200/90 pt-3 pl-0.5 sm:pl-0">
                <nav
                  className="flex min-w-0 flex-col gap-y-1.5"
                  aria-label="Pháp lý & quyền riêng tư"
                >
                  {LANDING.footer.legal.map((l) =>
                    l.href.startsWith("/") ? (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="w-fit min-w-0 text-sm font-bold text-ink transition hover:opacity-80"
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        key={l.href}
                        href={l.href}
                        className="w-fit min-w-0 text-sm font-bold text-ink transition hover:opacity-80"
                      >
                        {l.label}
                      </a>
                    ),
                  )}
                </nav>
                <div className="mt-3 flex w-full min-w-0 items-center justify-between gap-3">
                  <div className="min-w-0 flex-1 pr-2">
                    <FooterCopyrightLine align="left" />
                  </div>
                  <Link
                    href={LANDING.footer.credits.href}
                    className="shrink-0 self-center pl-1 text-right text-sm font-bold leading-snug text-ink transition hover:opacity-80"
                  >
                    {LANDING.footer.credits.label}
                  </Link>
                </div>
              </div>
            </div>

            {/* Desktop: social | legal, cột phải copyright + credits */}
            <div className="mt-6 flex w-full min-w-0 flex-col gap-3 sm:mt-7 max-lg:hidden lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <div className="grid min-w-0 w-full max-w-2xl flex-1 grid-cols-1 content-start items-start gap-y-3 pl-0.5 sm:pl-0 lg:grid-cols-2 lg:items-center lg:gap-y-0 lg:gap-x-8 xl:gap-x-12">
                <div className="flex min-w-0 items-center gap-x-2.5">
                  <span
                    className="inline-flex h-6 w-6 shrink-0 items-center justify-center self-center text-ink opacity-80"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <svg
                      className="h-full w-full"
                      viewBox="0 0 24 24"
                      fill="none"
                      role="img"
                    >
                      <title>Instagram</title>
                      <rect
                        x="2.5"
                        y="2.5"
                        width="19"
                        height="19"
                        rx="4.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="3.2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                      <circle cx="16.2" cy="7.5" r="0.7" fill="currentColor" />
                    </svg>
                  </span>
                  <span
                    className="inline-flex h-6 w-6 shrink-0 items-center justify-center self-center text-ink opacity-80"
                    aria-label="Threads"
                    title="Threads"
                  >
                    <ThreadsIcon className="h-[22px] w-[22px]" />
                  </span>
                  <a
                    href={LANDING.contactFacebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-6 min-w-2 shrink-0 items-center self-center text-ink transition hover:opacity-70"
                    aria-label="Facebook"
                    title="Facebook"
                  >
                    <span className="text-base font-black leading-none">f</span>
                  </a>
                </div>
                <nav
                  className="flex min-w-0 flex-col gap-y-1.5 lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-3 lg:gap-y-1"
                  aria-label="Pháp lý & quyền riêng tư"
                >
                  {LANDING.footer.legal.map((l) =>
                    l.href.startsWith("/") ? (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="w-fit min-w-0 text-sm font-bold text-ink transition hover:opacity-80"
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        key={l.href}
                        href={l.href}
                        className="w-fit min-w-0 text-sm font-bold text-ink transition hover:opacity-80"
                      >
                        {l.label}
                      </a>
                    ),
                  )}
                </nav>
              </div>
              <div className="flex w-full max-w-full shrink-0 flex-wrap items-center justify-end gap-x-2 gap-y-1 pl-0.5 text-right sm:ml-0 sm:w-auto sm:max-w-[min(100%,28rem)] sm:shrink-0 sm:pl-0 md:max-w-[28rem]">
                <FooterCopyrightLine align="right" />
                <span className="select-none text-zinc-300" aria-hidden>
                  |
                </span>
                <Link
                  href={LANDING.footer.credits.href}
                  className="text-sm font-bold leading-snug text-ink transition hover:opacity-80"
                >
                  {LANDING.footer.credits.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
