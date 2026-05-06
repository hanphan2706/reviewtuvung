"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { X } from "lucide-react";
import { LANDING } from "@/lib/landing-content";
import { FooterCopyrightLine } from "@/components/landing-footer";
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
    "fixed inset-0 z-[9999] m-0 flex h-[100dvh] max-h-[100dvh] min-h-0 w-screen max-w-none flex-col overflow-hidden border-0 bg-white p-0 text-ink shadow-[0_8px_40px_rgb(0_0_0/0.12)] backdrop:bg-transparent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

  const dialog = (
    <dialog
      open
      className={`${panelClass} ${visible ? "translate-y-0" : "-translate-y-full"}`}
      onTransitionEnd={handleTransitionEnd}
      aria-label="Menu"
    >
      <div className="flex min-w-0 shrink-0 flex-wrap items-center justify-between gap-x-4 gap-y-3 border-b border-zinc-200/95 bg-white px-6 py-4 pt-[max(1rem,env(safe-area-inset-top,0px))] shadow-[0_1px_0_0_rgb(228_228_231/0.95)] md:px-10 md:py-5">
        <Link
          href="/"
          className="min-w-0 max-w-full wrap-break-word text-base font-medium tracking-[-0.02em] text-ink md:text-lg"
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
              className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-sm font-medium text-ink transition hover:bg-zinc-50"
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

      <div className="min-h-0 min-w-0 flex-1 basis-0 overflow-y-auto overflow-x-hidden overscroll-y-contain bg-white scroll-pb-8 [-webkit-overflow-scrolling:touch]">
        <div className="mx-auto box-border w-full min-w-0 max-w-[1600px] px-6 pt-8 pb-[max(3.5rem,calc(env(safe-area-inset-bottom,0px)+2rem))] md:px-10 md:pt-10 md:pb-[max(3.5rem,calc(env(safe-area-inset-bottom,0px)+2rem))]">
          <div className="grid min-w-0 gap-10 md:gap-12 lg:grid-cols-2 lg:gap-14">
            <section className="min-w-0">
              <p className="text-xs font-medium leading-tight text-ink-muted sm:text-sm">
                {LANDING.footer.columnDiscoverTitle}
              </p>
              <ul className="mt-2.5 space-y-1.5 sm:mt-3 sm:space-y-2">
                {LANDING.nav.map((item) => {
                  const isOnTap = item.href.startsWith("/");
                  const isExternal = item.href.startsWith("http");
                  return (
                    <li key={item.href}>
                      {isOnTap ? (
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="inline-block max-w-full wrap-break-word text-base font-semibold text-ink transition hover:opacity-90"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          onClick={onClose}
                          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="inline-block max-w-full wrap-break-word text-base font-semibold text-ink transition hover:opacity-90"
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
                          onClick={onClose}
                          className="inline-block max-w-full wrap-break-word text-base font-semibold text-ink transition hover:opacity-90"
                        >
                          {l.label}
                        </Link>
                      ) : (
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={onClose}
                          className="inline-block max-w-full wrap-break-word text-base font-semibold text-ink transition hover:opacity-90"
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

          <div className="mt-10 flex min-w-0 flex-col gap-8 border-t border-zinc-200 pt-10 md:mt-12 md:pt-12 lg:flex-row lg:items-start lg:justify-between lg:gap-10 xl:gap-12">
            <div className="w-fit max-w-full rounded-xl border border-zinc-200/90 bg-zinc-50/80 p-4 md:p-5">
              {LANDING.footer.ctaLines.map((line) => (
                <p key={line} className="wrap-break-word font-serif text-lg leading-snug text-ink-muted md:text-xl">
                  {line}
                </p>
              ))}
            </div>

            <div className="flex min-w-0 w-full flex-col gap-6 sm:max-w-full lg:w-auto lg:min-w-0 lg:max-w-[min(100%,22rem)] lg:shrink-0 lg:items-end">
              <nav
                className="flex w-full min-w-0 flex-wrap gap-x-4 gap-y-2 text-sm font-semibold lg:justify-end"
                aria-label="Pháp lý"
              >
                {LANDING.footer.legal.map((l) =>
                  l.href.startsWith("/") ? (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={onClose}
                      className="max-w-full wrap-break-word text-ink-muted underline decoration-zinc-300 underline-offset-2 transition hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      key={l.href}
                      href={l.href}
                      className="max-w-full wrap-break-word text-ink-muted underline decoration-zinc-300 underline-offset-2 transition hover:text-ink"
                    >
                      {l.label}
                    </a>
                  ),
                )}
                <Link
                  href={LANDING.footer.credits.href}
                  onClick={onClose}
                  className="max-w-full wrap-break-word text-ink-muted underline decoration-zinc-300 underline-offset-2 transition hover:text-ink"
                >
                  {LANDING.footer.credits.label}
                </Link>
              </nav>
              <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                <a
                  href={LANDING.footer.social.instagram}
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-ink transition hover:opacity-70"
                  aria-label="Instagram"
                >
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" role="img">
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
                </a>
                <span
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-ink opacity-90"
                  aria-label="Threads"
                >
                  <ThreadsIcon className="h-[26px] w-[26px]" />
                </span>
                <a
                  href={LANDING.contactFacebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 min-w-8 items-center justify-center text-lg font-black leading-none text-ink transition hover:opacity-70"
                  aria-label="Facebook"
                >
                  f
                </a>
              </div>
              <div className="mt-5 w-full min-w-0 lg:text-right">
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
