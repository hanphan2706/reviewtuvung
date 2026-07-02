"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useVocabularyAuth } from "@/components/vocabulary/vocabulary-auth-context";

const VOCAB_ROOT = "/tu-hoc/tu-vung" as const;
const VOCAB_GOI_Y = `${VOCAB_ROOT}/goi-y` as const;

const NAV_ITEMS = [
  { href: `${VOCAB_ROOT}/phuong-phap`, label: "Phương pháp", public: true },
  { href: VOCAB_GOI_Y, label: "Bộ từ vựng gợi ý", public: false },
  { href: `${VOCAB_ROOT}/tien-do`, label: "Tiến độ", public: false },
] as const;

const linkClass =
  "block cursor-pointer px-2 py-2 text-sm font-medium text-ink transition hover:opacity-80";

function isActive(pathname: string, href: string): boolean {
  if (href === VOCAB_GOI_Y) return pathname === VOCAB_GOI_Y || pathname.startsWith(`${VOCAB_GOI_Y}/`);
  return pathname === href || pathname.startsWith(`${href}/`);
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
    </nav>
  );
}
