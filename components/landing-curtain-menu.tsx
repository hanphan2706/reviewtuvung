"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { X } from "lucide-react";
import { LANDING } from "@/lib/landing-content";
import { FooterCopyrightLine } from "@/components/landing-footer";
import { LandingSectionLink } from "@/components/landing-section-link";
import { ThreadsIcon } from "@/components/threads-icon";

export function LandingCurtainMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [present, setPresent] = useState(false);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    if (open) {
      setPresent(true);
      setVisible(false);
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
      return () => cancelAnimationFrame(id);
    }
    setVisible(false);
  }, [open]);

  /** If closing animation never fires `transitionend`, still unmount the portal (e.g. Safari quirks). */
  useEffect(() => {
    if (open || !present) return;
    const t = window.setTimeout(() => {
      setPresent(false);
    }, 600);
    return () => window.clearTimeout(t);
  }, [open, present]);

  /** Lock scroll only while the menu is *open* — not while `present` (closing animation).
   * Otherwise `overflow: hidden` stays until transition ends; if `transitionend` never fires, scroll stays broken forever. */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open || !present) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, present, onClose]);

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDialogElement>) => {
    if (e.propertyName !== "transform") return;
    if (!visible) setPresent(false);
  };

  const navContact = LANDING.nav.find((item) => item.label === "Giải bày");

  if (!present) return null;

  const panelClass =
    "fixed inset-0 z-[9999] m-0 flex h-[100dvh] max-h-[100dvh] min-h-0 w-screen max-w-none flex-col overflow-hidden border-0 bg-white p-0 text-ink shadow-[0_8px_40px_rgb(0_0_0/0.12)] backdrop:bg-transparent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none supports-[height:100svh]:h-[100svh] supports-[height:100svh]:max-h-[100svh]";

  const dialog = (
    <dialog
      open
      className={`${panelClass} ${visible ? "translate-y-0" : "-translate-y-full"}`}
      onTransitionEnd={handleTransitionEnd}
      aria-label="Menu"
    >
      <div className="flex min-w-0 shrink-0 flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-zinc-200/95 bg-white px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top,0px))] shadow-[0_1px_0_0_rgb(228_228_231/0.95)] [@media(max-height:640px)]:gap-y-1.5 [@media(max-height:640px)]:py-2.5 md:px-10 md:py-5 md:pt-[max(1rem,env(safe-area-inset-top,0px))]">
        <Link
          href="/"
          className="min-w-0 max-w-full wrap-break-word text-sm font-medium tracking-[-0.02em] text-ink [@media(max-height:640px)]:text-[0.8125rem] md:text-lg"
          onClick={onClose}
        >
          {LANDING.brandShort}
        </Link>
        <div className="flex shrink-0 flex-wrap items-center justify-end gap-2 sm:gap-3 md:gap-4">
          {navContact ? (
            <a
              href={navContact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-2.5 py-1 text-xs font-medium text-ink transition hover:bg-zinc-50 sm:px-3 sm:py-1.5 sm:text-sm"
            >
              {navContact.label}
            </a>
          ) : null}
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full p-2 text-ink transition hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
            aria-label="Đóng menu"
          >
            <X className="h-6 w-6" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <div className="min-h-0 min-w-0 flex-1 basis-0 overflow-y-auto overflow-x-hidden overscroll-y-contain bg-white [-webkit-overflow-scrolling:touch]">
        <div className="mx-auto box-border flex min-h-0 w-full min-w-0 max-w-[1600px] flex-col px-4 pb-[max(1rem,calc(env(safe-area-inset-bottom,0px)+0.75rem))] pt-4 md:px-10 md:pb-[max(1.5rem,calc(env(safe-area-inset-bottom,0px)+1rem))] md:pt-8 [@media(max-height:640px)]:px-3 [@media(max-height:640px)]:pb-[max(0.75rem,calc(env(safe-area-inset-bottom,0px)+0.5rem))] [@media(max-height:640px)]:pt-3">
          {/*
            Luôn 2 cột (Tò mò | Khám phá) để giảm chiều cao trên màn hình hẹp/ngắn; nội dung dư cuộn trong khối flex-1 phía trên.
          */}
          <div className="grid min-w-0 grid-cols-2 gap-x-3 gap-y-0 sm:gap-x-6 md:gap-x-10 [@media(max-height:640px)]:gap-x-2.5">
            <section className="min-w-0">
              <p className="text-[0.65rem] font-medium leading-tight text-ink-muted sm:text-xs [@media(max-height:640px)]:text-[0.6rem]">
                {LANDING.footer.columnDiscoverTitle}
              </p>
              <ul className="mt-1.5 space-y-1 sm:mt-2 sm:space-y-1.5 [@media(max-height:640px)]:mt-1 [@media(max-height:640px)]:space-y-0.5">
                {LANDING.nav.filter((item) => item.label !== "Giới thiệu").map((item) => {
                  if ("scrollSection" in item && item.scrollSection) {
                    return (
                      <li key={item.label}>
                        <LandingSectionLink
                          sectionId={item.scrollSection}
                          onNavigate={onClose}
                          className="inline-block max-w-full wrap-break-word text-sm font-semibold leading-snug text-ink transition hover:opacity-90 sm:text-base [@media(max-height:640px)]:text-[0.8125rem]"
                        >
                          {item.label}
                        </LandingSectionLink>
                      </li>
                    );
                  }
                  const isOnTap = item.href.startsWith("/");
                  const isExternal = item.href.startsWith("http");
                  return (
                    <li key={item.href}>
                      {isOnTap ? (
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="inline-block max-w-full wrap-break-word text-sm font-semibold leading-snug text-ink transition hover:opacity-90 sm:text-base [@media(max-height:640px)]:text-[0.8125rem]"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          onClick={onClose}
                          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="inline-block max-w-full wrap-break-word text-sm font-semibold leading-snug text-ink transition hover:opacity-90 sm:text-base [@media(max-height:640px)]:text-[0.8125rem]"
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>

            <section className="min-w-0">
              <p className="text-[0.65rem] font-medium leading-tight text-ink-muted sm:text-xs [@media(max-height:640px)]:text-[0.6rem]">
                {LANDING.footer.columnResourcesTitle}
              </p>
              <ul className="mt-1.5 space-y-1 sm:mt-2 sm:space-y-1.5 [@media(max-height:640px)]:mt-1 [@media(max-height:640px)]:space-y-0.5">
                {LANDING.moreLinks.map((l) => {
                  const internal = l.href.startsWith("/");
                  return (
                    <li key={l.href}>
                      {internal ? (
                        <Link
                          href={l.href}
                          onClick={onClose}
                          className="inline-block max-w-full wrap-break-word text-sm font-semibold leading-snug text-ink transition hover:opacity-90 sm:text-base [@media(max-height:640px)]:text-[0.8125rem]"
                        >
                          {l.label}
                        </Link>
                      ) : (
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={onClose}
                          className="inline-block max-w-full wrap-break-word text-sm font-semibold leading-snug text-ink transition hover:opacity-90 sm:text-base [@media(max-height:640px)]:text-[0.8125rem]"
                        >
                          {l.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>

          <div className="mt-5 flex min-w-0 flex-col gap-4 border-t border-zinc-200 pt-5 sm:mt-7 sm:gap-6 sm:pt-7 md:mt-9 md:pt-9 lg:flex-row lg:items-start lg:justify-between lg:gap-8 [@media(max-height:640px)]:mt-3 [@media(max-height:640px)]:gap-3 [@media(max-height:640px)]:pt-3">
            <div className="w-fit max-w-full self-start rounded-lg border border-zinc-200/90 bg-zinc-50/80 p-3 sm:rounded-xl sm:p-4 md:p-5 lg:-mt-1 [@media(max-height:640px)]:p-2.5">
              {LANDING.footer.ctaLines.map((line) => (
                <p
                  key={line}
                  className="wrap-break-word font-serif text-sm leading-snug text-ink-muted sm:text-base md:text-lg lg:text-xl [@media(max-height:640px)]:text-xs [@media(max-height:640px)]:leading-tight"
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="flex min-w-0 w-full flex-col gap-3 sm:gap-4 lg:w-auto lg:max-w-none lg:shrink-0 lg:items-end lg:gap-3.5 [@media(max-height:640px)]:gap-2">
              <nav
                className="flex w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-semibold leading-none sm:gap-x-4 sm:gap-y-2 sm:text-sm lg:w-auto lg:flex-nowrap lg:justify-end [@media(max-height:640px)]:gap-x-2 [@media(max-height:640px)]:gap-y-1 [@media(max-height:640px)]:text-[0.6875rem]"
                aria-label="Pháp lý"
              >
                {LANDING.footer.legal.map((l) =>
                  l.href.startsWith("/") ? (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={onClose}
                      className="max-w-full wrap-break-word text-ink-muted underline decoration-zinc-300 underline-offset-2 transition hover:text-ink lg:max-w-none lg:shrink-0 lg:whitespace-nowrap"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      key={l.href}
                      href={l.href}
                      className="max-w-full wrap-break-word text-ink-muted underline decoration-zinc-300 underline-offset-2 transition hover:text-ink lg:max-w-none lg:shrink-0 lg:whitespace-nowrap"
                    >
                      {l.label}
                    </a>
                  ),
                )}
                <Link
                  href={LANDING.footer.credits.href}
                  onClick={onClose}
                  className="max-w-full wrap-break-word text-ink-muted underline decoration-zinc-300 underline-offset-2 transition hover:text-ink lg:max-w-none lg:shrink-0 lg:whitespace-nowrap"
                >
                  {LANDING.footer.credits.label}
                </Link>
              </nav>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:justify-end [@media(max-height:640px)]:gap-2">
                <span
                  className="inline-flex h-7 w-7 shrink-0 items-center justify-center text-ink opacity-90 sm:h-8 sm:w-8 [@media(max-height:640px)]:h-6 [@media(max-height:640px)]:w-6"
                  aria-label="Instagram"
                >
                  <svg className="h-6 w-6 sm:h-7 sm:w-7 [@media(max-height:640px)]:h-4.5 [@media(max-height:640px)]:w-4.5" viewBox="0 0 24 24" fill="none" role="img">
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
                    <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
                    <circle cx="16.2" cy="7.5" r="0.7" fill="currentColor" />
                  </svg>
                </span>
                <span
                  className="inline-flex h-7 w-7 shrink-0 items-center justify-center text-ink opacity-90 sm:h-8 sm:w-8 [@media(max-height:640px)]:h-6 [@media(max-height:640px)]:w-6"
                  aria-label="Threads"
                >
                  <ThreadsIcon className="h-[22px] w-[22px] sm:h-[26px] sm:w-[26px] [@media(max-height:640px)]:h-[18px] [@media(max-height:640px)]:w-[18px]" />
                </span>
                <a
                  href={LANDING.contactFacebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-7 min-w-7 items-center justify-center text-base font-black leading-none text-ink transition hover:opacity-70 sm:h-8 sm:min-w-8 sm:text-lg [@media(max-height:640px)]:h-6 [@media(max-height:640px)]:min-w-6 [@media(max-height:640px)]:text-sm"
                  aria-label="Facebook"
                >
                  f
                </a>
              </div>
              <div className="w-full min-w-0 lg:text-right">
                <FooterCopyrightLine align="right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );

  return createPortal(dialog, document.body);
}
