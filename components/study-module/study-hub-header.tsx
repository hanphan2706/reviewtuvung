"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { LandingSectionLink } from "@/components/landing-section-link";
import { StudyHubCurtainMenu } from "@/components/study-module/study-hub-curtain-menu";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";
import {
  READING_DIFFICULTY_NAV,
  READING_HUB_HREF,
  READING_LIBRARY_ALL_HREF,
  READING_SOURCE_NAV,
  READING_TOPIC_NAV,
  type ReadingLibraryNavItem,
} from "@/lib/reading/library-nav";
import {
  studyHubContainerClass,
  studyHubHeaderBarClass,
  studyHubHeaderTextClass,
} from "@/components/study-module/study-hub-shell";

const headerBackClass = `${studyHubHeaderTextClass} text-ink-muted transition hover:text-ink`;

/** Cùng line box cho tiêu đề, dropdown và link — tránh lệch hàng. */
const headerNavItemClass = `inline-flex items-center gap-1 leading-none ${studyHubHeaderTextClass}`;

type HubDropdownItem = string | ReadingLibraryNavItem;

function HubDropdown({
  label,
  items,
}: {
  label: string;
  items: readonly HubDropdownItem[];
}) {
  return (
    <div className="group relative shrink-0">
      <button
        type="button"
        className={`${headerNavItemClass} transition-opacity hover:opacity-70`}
      >
        <span>{label}</span>
        <ChevronDown className="size-4 shrink-0 opacity-80" aria-hidden />
      </button>
      <div className="pointer-events-none absolute left-0 top-full z-50 mt-2 w-56 translate-y-[-8px] rounded-lg border border-[#E4E4E7] bg-white py-2 opacity-0 shadow-lg transition-all group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
        {items.map((item) => {
          if (typeof item === "string") {
            return (
              <span
                key={item}
                className="block cursor-default px-4 py-2 text-sm text-[#47464b] hover:bg-zinc-50"
              >
                {item}
              </span>
            );
          }
          return (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-[#47464b] transition hover:bg-zinc-50"
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function HamburgerButton({ open, onOpen }: { open: boolean; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="inline-flex shrink-0 items-center justify-center p-1.5 text-ink transition hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
      aria-expanded={open}
      aria-haspopup="dialog"
      aria-label="Mở menu"
    >
      <span className="flex w-[22px] flex-col justify-center gap-[5px]" aria-hidden>
        <span className="h-0.5 w-full rounded-full bg-zinc-900" />
        <span className="h-0.5 w-full rounded-full bg-zinc-900" />
      </span>
    </button>
  );
}

export function StudyHubHeader({
  title,
  center,
  showListeningFilters = false,
  showReadingFilters = false,
  onTitleClick,
  isLoggedIn,
  userProfile = null,
  supabaseConfigured = true,
  signInNext,
}: {
  title: string;
  center?: ReactNode;
  showListeningFilters?: boolean;
  showReadingFilters?: boolean;
  /** Khi đang session trên cùng URL hub — reset về trang chủ Luyện đọc. */
  onTitleClick?: () => void;
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured?: boolean;
  signInNext?: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow-[0_1px_0_0_rgb(228_228_231_/_0.95)]">
        <div className={`relative ${studyHubHeaderBarClass} ${studyHubContainerClass}`}>
          <LandingSectionLink
            sectionId="tu-hoc"
            className={`absolute top-1/2 right-full flex -translate-y-1/2 items-center gap-1 whitespace-nowrap pr-2 sm:pr-3 md:pr-4 ${headerBackClass}`}
          >
            <ArrowLeft className="size-4 shrink-0" strokeWidth={2} aria-hidden />
            <span>Tự học</span>
          </LandingSectionLink>

          <div className="flex min-h-0 min-w-0 flex-1 flex-nowrap items-center gap-3 md:gap-4">
            {showListeningFilters ? (
              <>
                <h1
                  className={`m-0 flex shrink-0 items-center uppercase tracking-[-0.02em] leading-none ${studyHubHeaderTextClass}`}
                >
                  {title}
                </h1>
                <nav className="flex shrink-0 flex-nowrap items-center gap-3 md:gap-4" aria-label="Bộ lọc luyện nghe">
                  <HubDropdown label="Tất cả chất giọng" items={["Anh - Anh", "Anh - Mỹ", "Anh - Úc"]} />
                  <HubDropdown label="Độ khó" items={["Cơ bản", "Trung bình", "Nâng cao"]} />
                </nav>
              </>
            ) : showReadingFilters ? (
              <nav
                className="flex min-w-0 flex-1 flex-nowrap items-center gap-3 md:gap-4"
                aria-label="Luyện đọc"
              >
                <h1 className="m-0 flex shrink-0 items-center leading-none">
                  <Link
                    href={READING_HUB_HREF}
                    onClick={onTitleClick}
                    className={`${headerNavItemClass} uppercase tracking-[-0.02em] transition-opacity hover:opacity-70`}
                  >
                    {title}
                  </Link>
                </h1>
                <HubDropdown label="Nguồn bài đọc" items={READING_SOURCE_NAV} />
                <HubDropdown label="Độ khó" items={READING_DIFFICULTY_NAV} />
                <HubDropdown label="Bài đọc theo chủ đề" items={READING_TOPIC_NAV} />
                <Link
                  href={READING_LIBRARY_ALL_HREF}
                  className={`${headerNavItemClass} shrink-0 whitespace-nowrap transition-opacity hover:opacity-70`}
                >
                  Toàn bộ thư viện bài đọc
                </Link>
              </nav>
            ) : (
              <h1
                className={`m-0 flex shrink-0 items-center uppercase tracking-[-0.02em] leading-none ${studyHubHeaderTextClass}`}
              >
                {title}
              </h1>
            )}

            {!showListeningFilters && !showReadingFilters && center ? (
              <nav className="flex shrink-0 flex-nowrap items-center gap-3 md:gap-4" aria-label="Điều hướng luyện đọc">
                {center}
              </nav>
            ) : null}

            <div className="ml-auto flex shrink-0 items-center">
              <HamburgerButton open={menuOpen} onOpen={() => setMenuOpen(true)} />
            </div>
          </div>
        </div>
      </header>

      <StudyHubCurtainMenu
        open={menuOpen}
        onClose={closeMenu}
        pageTitle={title}
        isLoggedIn={isLoggedIn}
        userProfile={userProfile}
        supabaseConfigured={supabaseConfigured}
        signInNext={signInNext}
      />
    </>
  );
}
