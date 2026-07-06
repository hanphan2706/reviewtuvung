"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { studyHubHeaderTextClass } from "@/components/study-module/study-hub-shell";
import { useVocabularyAuth } from "@/components/vocabulary/vocabulary-auth-context";
import {
  VOCABULARY_GOI_Y_HREF,
  VOCABULARY_LEVEL_NAV,
  type VocabularyLevelNavItem,
} from "@/lib/vocabulary/vocabulary-level-nav";

const VOCAB_ROOT = "/tu-hoc/tu-vung" as const;

const NAV_ITEMS = [
  { href: `${VOCAB_ROOT}/phuong-phap`, label: "Phương pháp", public: true },
  { href: VOCABULARY_GOI_Y_HREF, label: "Bộ từ vựng gợi ý", public: false },
  { href: `${VOCAB_ROOT}/tien-do`, label: "Tiến độ", public: false },
] as const;

/** Khớp `headerNavItemClass` trong StudyHubHeader — cùng line box, không lệch baseline. */
const headerNavItemClass = `inline-flex items-center gap-1 leading-none ${studyHubHeaderTextClass}`;
const linkClass = `${headerNavItemClass} shrink-0 whitespace-nowrap transition-opacity hover:opacity-70`;

function isGoiYPath(pathname: string): boolean {
  return pathname === VOCABULARY_GOI_Y_HREF || pathname.startsWith(`${VOCABULARY_GOI_Y_HREF}/`);
}

function isActive(pathname: string, href: string): boolean {
  if (href === VOCABULARY_GOI_Y_HREF) return isGoiYPath(pathname);
  return pathname === href || pathname.startsWith(`${href}/`);
}

function LevelDropdown({ items }: { items: readonly VocabularyLevelNavItem[] }) {
  const pathname = usePathname();
  const { navigateWithAuth } = useVocabularyAuth();
  const active = items.some((item) => pathname === item.href);

  return (
    <div className="group relative shrink-0">
      <button
        type="button"
        className={`${headerNavItemClass} transition-opacity hover:opacity-70`}
        aria-haspopup="menu"
        aria-current={active ? "page" : undefined}
      >
        <span>Độ khó</span>
        <ChevronDown className="size-4 shrink-0 opacity-80" aria-hidden />
      </button>
      <div
        className="pointer-events-none absolute left-0 top-full z-50 w-56 pt-2 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"
        role="menu"
      >
        <div className="rounded-lg border border-[#E4E4E7] bg-white py-2 shadow-lg">
          {items.map((item) => (
            <button
              key={item.href}
              type="button"
              role="menuitem"
              onClick={() => navigateWithAuth(item.href)}
              className="block w-full px-4 py-2 text-left text-sm text-[#47464b] transition hover:bg-zinc-50"
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Nav ngang trong StudyHubHeader — khớp pattern Luyện đọc / Luyện nghe. */
export function VocabularyHeaderNav() {
  const pathname = usePathname();
  const { navigateWithAuth } = useVocabularyAuth();

  return (
    <nav className="hidden min-w-0 flex-nowrap items-center gap-3 xl:flex 2xl:gap-4" aria-label="Từ vựng">
      {NAV_ITEMS.map(({ href, label, public: isPublic }) => {
        const active = isActive(pathname, href);
        if (isPublic) {
          return (
            <Link
              key={href}
              href={href}
              className={linkClass}
              aria-current={active ? "page" : undefined}
            >
              {label}
            </Link>
          );
        }
        return (
          <button
            key={href}
            type="button"
            onClick={() => navigateWithAuth(href)}
            className={linkClass}
            aria-current={active ? "page" : undefined}
          >
            {label}
          </button>
        );
      })}
      {VOCABULARY_LEVEL_NAV.length > 0 ? <LevelDropdown items={VOCABULARY_LEVEL_NAV} /> : null}
    </nav>
  );
}
