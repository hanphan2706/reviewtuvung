"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { StudyHubBackLink } from "@/components/study-module/study-hub-back-link";
import { StudyHubCurtainMenu } from "@/components/study-module/study-hub-curtain-menu";
import { StudyHubHamburgerButton } from "@/components/study-module/study-hub-hamburger-button";
import { VocabularyHeaderNav } from "@/components/vocabulary/vocabulary-header-nav";
import { GrammarHeaderNav, GrammarHubTitleLink } from "@/components/grammar/grammar-header-nav";
import { WritingHeaderNav, WritingHubTitleLink } from "@/components/writing/writing-header-nav";
import { useStudyHubDesktopNav } from "@/hooks/use-study-hub-desktop-nav";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";
import { LISTENING_HUB_HREF } from "@/lib/listening/listening-hub-nav";
import {
  LISTENING_DIFFICULTY_NAV,
  LISTENING_IELTS_EXAM_HREF,
  LISTENING_LIBRARY_ALL_HREF,
  LISTENING_SOURCE_NAV,
  LISTENING_TOPIC_NAV,
} from "@/lib/listening/library-nav";
import {
  READING_DIFFICULTY_NAV,
  READING_HUB_HREF,
  READING_IELTS_EXAM_HREF,
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

const VOCAB_HUB_HREF = "/tu-hoc/tu-vung" as const;

/** Cùng line box cho tiêu đề, dropdown và link — tránh lệch hàng. */
const headerNavItemClass = `inline-flex items-center gap-1 leading-none ${studyHubHeaderTextClass}`;
const desktopNavClass = "hidden xl:flex min-w-0 flex-nowrap items-center gap-3 2xl:gap-4";

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
        aria-haspopup="menu"
      >
        <span>{label}</span>
        <ChevronDown className="size-4 shrink-0 opacity-80" aria-hidden />
      </button>
      <div
        className="pointer-events-none absolute left-0 top-full z-50 w-56 pt-2 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"
        role="menu"
      >
        <div className="rounded-lg border border-[#E4E4E7] bg-white py-2 shadow-lg">
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
                role="menuitem"
                className="block px-4 py-2 text-sm text-[#47464b] transition hover:bg-zinc-50"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function HamburgerButton({ open, onOpen }: { open: boolean; onOpen: () => void }) {
  return <StudyHubHamburgerButton open={open} onClick={onOpen} />;
}

export function StudyHubHeader({
  title,
  center,
  showListeningFilters = false,
  listeningHubTitleLink = false,
  showReadingFilters = false,
  showVocabularyNav = false,
  showGrammarNav = false,
  showWritingNav = false,
  onTitleClick,
  isLoggedIn,
  userProfile = null,
  supabaseConfigured = true,
  signInNext,
}: {
  title: string;
  center?: ReactNode;
  showListeningFilters?: boolean;
  /** Tiêu đề link về `/tu-hoc/luyen-nghe` (player) — không bật bộ lọc ngang. */
  listeningHubTitleLink?: boolean;
  showReadingFilters?: boolean;
  showVocabularyNav?: boolean;
  showGrammarNav?: boolean;
  showWritingNav?: boolean;
  /** Khi đang session trên cùng URL hub — reset về trang chủ (Luyện đọc / Luyện nghe). */
  onTitleClick?: () => void;
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured?: boolean;
  signInNext?: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const desktopNav = useStudyHubDesktopNav();
  const readingNavInMenu = showReadingFilters && !desktopNav;
  const listeningNavInMenu = (showListeningFilters || listeningHubTitleLink) && !desktopNav;
  const vocabularyNavInMenu = showVocabularyNav && !desktopNav;
  const grammarNavInMenu = showGrammarNav && !desktopNav;
  const writingNavInMenu = showWritingNav && !desktopNav;
  const listeningTitleLink = showListeningFilters || listeningHubTitleLink;

  return (
    <>
      <header className="sticky top-0 z-50 w-full overflow-x-clip bg-white shadow-[0_1px_0_0_rgb(228_228_231_/_0.95)]">
        <div className={`${studyHubHeaderBarClass} ${studyHubContainerClass}`}>
          <div className="flex w-full min-w-0 items-center gap-2 sm:gap-3">
            <StudyHubBackLink />

            <div className="flex min-h-0 min-w-0 flex-1 flex-nowrap items-center gap-2 sm:gap-3 md:gap-4">
              {listeningTitleLink ? (
                <>
                  <h1 className="m-0 flex min-w-0 shrink-0 items-center leading-none">
                    <Link
                      href={LISTENING_HUB_HREF}
                      onClick={onTitleClick}
                      className={`${headerNavItemClass} truncate uppercase tracking-[-0.02em] transition-opacity hover:opacity-70`}
                    >
                      {title}
                    </Link>
                  </h1>
                  {showListeningFilters ? (
                    <nav className={`${desktopNavClass}`} aria-label="Bộ lọc luyện nghe">
                      <HubDropdown label="Nguồn bài nghe" items={LISTENING_SOURCE_NAV} />
                      <HubDropdown label="Độ khó" items={LISTENING_DIFFICULTY_NAV} />
                      <HubDropdown label="Bài nghe theo chủ đề" items={LISTENING_TOPIC_NAV} />
                      <Link
                        href={LISTENING_IELTS_EXAM_HREF}
                        className={`${headerNavItemClass} shrink-0 whitespace-nowrap transition-opacity hover:opacity-70`}
                      >
                        Luyện đề IELTS
                      </Link>
                      <Link
                        href={LISTENING_LIBRARY_ALL_HREF}
                        className={`${headerNavItemClass} shrink-0 whitespace-nowrap transition-opacity hover:opacity-70`}
                      >
                        Tất cả bài luyện nghe
                      </Link>
                    </nav>
                  ) : null}
                </>
              ) : showReadingFilters ? (
                <>
                  <h1 className="m-0 flex min-w-0 shrink-0 items-center leading-none">
                    <Link
                      href={READING_HUB_HREF}
                      onClick={onTitleClick}
                      className={`${headerNavItemClass} truncate uppercase tracking-[-0.02em] transition-opacity hover:opacity-70`}
                    >
                      {title}
                    </Link>
                  </h1>
                  <nav className={`${desktopNavClass}`} aria-label="Luyện đọc">
                    <HubDropdown label="Nguồn bài đọc" items={READING_SOURCE_NAV} />
                    <HubDropdown label="Độ khó" items={READING_DIFFICULTY_NAV} />
                    <HubDropdown label="Bài đọc theo chủ đề" items={READING_TOPIC_NAV} />
                    <Link
                      href={READING_IELTS_EXAM_HREF}
                      className={`${headerNavItemClass} shrink-0 whitespace-nowrap transition-opacity hover:opacity-70`}
                    >
                      Luyện đề IELTS
                    </Link>
                    <Link
                      href={READING_LIBRARY_ALL_HREF}
                      className={`${headerNavItemClass} shrink-0 whitespace-nowrap transition-opacity hover:opacity-70`}
                    >
                      Toàn bộ thư viện bài đọc
                    </Link>
                  </nav>
                </>
              ) : showVocabularyNav ? (
                <>
                  <h1 className="m-0 flex min-w-0 shrink-0 items-center leading-none">
                    <Link
                      href={VOCAB_HUB_HREF}
                      className={`${headerNavItemClass} truncate uppercase tracking-[-0.02em] transition-opacity hover:opacity-70`}
                    >
                      {title}
                    </Link>
                  </h1>
                  <VocabularyHeaderNav />
                </>
              ) : showGrammarNav ? (
                <>
                  <h1 className="m-0 flex min-w-0 shrink-0 items-center leading-none">
                    <GrammarHubTitleLink title={title} />
                  </h1>
                  <GrammarHeaderNav />
                </>
              ) : showWritingNav ? (
                <>
                  <h1 className="m-0 flex min-w-0 shrink-0 items-center leading-none">
                    <WritingHubTitleLink title={title} />
                  </h1>
                  <WritingHeaderNav />
                </>
              ) : (
                <h1
                  className={`m-0 flex min-w-0 shrink-0 items-center truncate uppercase tracking-[-0.02em] leading-none ${studyHubHeaderTextClass}`}
                >
                  {title}
                </h1>
              )}

              {!listeningTitleLink &&
              !showReadingFilters &&
              !showVocabularyNav &&
              !showGrammarNav &&
              !showWritingNav &&
              center ? (
                <nav className={`${desktopNavClass}`} aria-label="Điều hướng luyện đọc">
                  {center}
                </nav>
              ) : null}

              <div className="ml-auto flex shrink-0 items-center pl-1">
                <HamburgerButton open={menuOpen} onOpen={() => setMenuOpen(true)} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <StudyHubCurtainMenu
        open={menuOpen}
        onClose={closeMenu}
        pageTitle={title}
        showReadingNav={readingNavInMenu}
        showListeningNav={listeningNavInMenu}
        showVocabularyNav={vocabularyNavInMenu}
        showGrammarNav={grammarNavInMenu}
        showWritingNav={writingNavInMenu}
        isLoggedIn={isLoggedIn}
        userProfile={userProfile}
        supabaseConfigured={supabaseConfigured}
        signInNext={signInNext}
      />
    </>
  );
}
