"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { studyHubHeaderTextClass } from "@/components/study-module/study-hub-shell";
import { useVocabularyAuth } from "@/components/vocabulary/vocabulary-auth-context";

const VOCAB_ROOT = "/tu-hoc/tu-vung" as const;
const VOCAB_GOI_Y = `${VOCAB_ROOT}/goi-y` as const;

const NAV_ITEMS = [
  { href: `${VOCAB_ROOT}/phuong-phap`, label: "Phương pháp", public: true },
  { href: VOCAB_GOI_Y, label: "Bộ từ vựng gợi ý", public: false },
  { href: `${VOCAB_ROOT}/tien-do`, label: "Tiến độ", public: false },
] as const;

const linkClass = `${studyHubHeaderTextClass} shrink-0 whitespace-nowrap transition-opacity hover:opacity-70`;

function isActive(pathname: string, href: string): boolean {
  if (href === VOCAB_GOI_Y) return pathname === VOCAB_GOI_Y || pathname.startsWith(`${VOCAB_GOI_Y}/`);
  return pathname === href || pathname.startsWith(`${href}/`);
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
    </nav>
  );
}
