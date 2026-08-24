"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { studyHubHeaderTextClass } from "@/components/study-module/study-hub-shell";
import {
  WRITING_HEADER_DROPDOWNS,
  WRITING_HUB_HREF,
  type WritingHeaderNavItem,
} from "@/lib/writing/writing-hub-nav";

const headerNavItemClass = `inline-flex items-center gap-1 leading-none ${studyHubHeaderTextClass}`;

function WritingHubDropdown({
  label,
  items,
}: {
  label: string;
  items: readonly WritingHeaderNavItem[];
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
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              className="block px-4 py-2 text-sm text-[#47464b] transition hover:bg-zinc-50"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WritingHeaderNav() {
  return (
    <nav className="hidden shrink-0 flex-nowrap items-center gap-3 xl:flex 2xl:gap-4" aria-label="Luyện viết">
      {WRITING_HEADER_DROPDOWNS.map((dropdown) => (
        <WritingHubDropdown key={dropdown.id} label={dropdown.label} items={dropdown.items} />
      ))}
    </nav>
  );
}

export function WritingHubTitleLink({ title }: { title: string }) {
  return (
    <Link
      href={WRITING_HUB_HREF}
      className={`${headerNavItemClass} truncate uppercase tracking-[-0.02em] transition-opacity hover:opacity-70`}
    >
      {title}
    </Link>
  );
}
