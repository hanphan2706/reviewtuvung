"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  WRITING_HEADER_DROPDOWNS,
  type WritingHeaderNavItem,
} from "@/lib/writing/writing-hub-nav";

const sectionTitleClass = "text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]";

function WritingMenuGroup({
  title,
  items,
  onNavigate,
}: {
  title: string;
  items: readonly WritingHeaderNavItem[];
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `writing-menu-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div>
      <button
        type="button"
        className="flex min-h-6 w-full cursor-pointer items-center justify-between gap-2 px-2 text-left transition hover:opacity-80"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${open ? "Thu gọn" : "Mở"} ${title}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={sectionTitleClass}>{title}</span>
        <ChevronDown
          className={`size-4 shrink-0 text-[#47464b] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open ? (
        <ul id={panelId} className="mt-1 space-y-0.5">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className="block cursor-pointer px-2 py-2 text-sm font-medium text-ink transition hover:opacity-80"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

/** Điều hướng Luyện viết trong menu curtain — khi header chưa hiện menu ngang. */
export function WritingHubMenuNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-5" aria-label="Luyện viết">
      {WRITING_HEADER_DROPDOWNS.map((dropdown) => (
        <WritingMenuGroup
          key={dropdown.id}
          title={dropdown.label}
          items={dropdown.items}
          onNavigate={onNavigate}
        />
      ))}
    </nav>
  );
}
