"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
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
] as const;

const TIEN_DO_ITEM = {
  href: `${VOCAB_ROOT}/tien-do`,
  label: "Tiến độ",
  public: false,
} as const;

const linkClass =
  "block cursor-pointer px-2 py-2 text-sm font-medium text-ink transition hover:opacity-80";

const sectionTitleClass = "text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]";

function isGoiYPath(pathname: string): boolean {
  return pathname === VOCABULARY_GOI_Y_HREF || pathname.startsWith(`${VOCABULARY_GOI_Y_HREF}/`);
}

function isActive(pathname: string, href: string): boolean {
  if (href === VOCABULARY_GOI_Y_HREF) return isGoiYPath(pathname);
  return pathname === href || pathname.startsWith(`${href}/`);
}

function LevelNavGroup({
  items,
  onNavigate,
}: {
  items: readonly VocabularyLevelNavItem[];
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const { navigateWithAuth } = useVocabularyAuth();
  const [open, setOpen] = useState(false);
  const panelId = "vocabulary-menu-do-kho";

  return (
    <div>
      <button
        type="button"
        className="flex min-h-6 w-full cursor-pointer items-center justify-between gap-2 px-2 text-left transition hover:opacity-80"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${open ? "Thu gọn" : "Mở"} Độ khó`}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={sectionTitleClass}>Độ khó</span>
        <ChevronDown
          className={`size-4 shrink-0 text-[#47464b] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open ? (
        <ul id={panelId} className="mt-1 space-y-0.5">
          {items.map((item) => (
            <li key={item.href}>
              <button
                type="button"
                onClick={() => {
                  onNavigate?.();
                  navigateWithAuth(item.href);
                }}
                className={`${linkClass} w-full text-left`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

/** Điều hướng Từ vựng trong menu curtain — mobile / tablet. */
export function StudyHubVocabularyMenuNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { navigateWithAuth } = useVocabularyAuth();

  return (
    <nav className="flex flex-col gap-1" aria-label="Từ vựng">
      <p className="px-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]">Từ vựng</p>
      <ul className="space-y-0.5">
        {NAV_ITEMS.map(({ href, label, public: isPublic }) => {
          const active = isActive(pathname, href);
          if (isPublic) {
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onNavigate}
                  className={linkClass}
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          }
          return (
            <li key={href}>
              <button
                type="button"
                onClick={() => {
                  onNavigate?.();
                  navigateWithAuth(href);
                }}
                className={`${linkClass} w-full text-left`}
                aria-current={active ? "page" : undefined}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
      {VOCABULARY_LEVEL_NAV.length > 0 ? (
        <div className="mt-2">
          <LevelNavGroup items={VOCABULARY_LEVEL_NAV} onNavigate={onNavigate} />
        </div>
      ) : null}
      <ul className="mt-0.5 space-y-0.5">
        <li>
          <button
            type="button"
            onClick={() => {
              onNavigate?.();
              navigateWithAuth(TIEN_DO_ITEM.href);
            }}
            className={`${linkClass} w-full text-left`}
            aria-current={isActive(pathname, TIEN_DO_ITEM.href) ? "page" : undefined}
          >
            {TIEN_DO_ITEM.label}
          </button>
        </li>
      </ul>
    </nav>
  );
}
