"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  READING_DIFFICULTY_NAV,
  READING_LIBRARY_ALL_HREF,
  READING_SOURCE_NAV,
  READING_TOPIC_NAV,
  type ReadingLibraryNavItem,
} from "@/lib/reading/library-nav";

const sectionTitleClass = "text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]";

function NavGroup({
  title,
  items,
  onNavigate,
}: {
  title: string;
  items: readonly ReadingLibraryNavItem[];
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `reading-menu-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div>
      <button
        type="button"
        className="flex min-h-6 w-full cursor-pointer items-center justify-between gap-2 rounded-lg px-2 text-left transition hover:bg-white/80"
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
                className="block cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-ink transition hover:bg-white"
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

function LibraryNavRow({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div>
      <div className="flex min-h-6 items-center justify-between gap-2 px-2">
        <Link
          href={READING_LIBRARY_ALL_HREF}
          onClick={onNavigate}
          className={`cursor-pointer transition hover:opacity-80 ${sectionTitleClass}`}
        >
          Toàn bộ thư viện bài đọc
        </Link>
        {/* Cùng chỗ với nút mũi tên — giữ chiều cao hàng và khoảng cách đồng đều */}
        <span className="inline-flex size-6 shrink-0" aria-hidden />
      </div>
    </div>
  );
}

/** Điều hướng Luyện đọc trong menu curtain — chỉ khi header chưa hiện menu ngang. */
export function StudyHubReadingMenuNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-5" aria-label="Luyện đọc">
      <NavGroup title="Nguồn bài đọc" items={READING_SOURCE_NAV} onNavigate={onNavigate} />
      <NavGroup title="Độ khó" items={READING_DIFFICULTY_NAV} onNavigate={onNavigate} />
      <NavGroup title="Bài đọc theo chủ đề" items={READING_TOPIC_NAV} onNavigate={onNavigate} />
      <LibraryNavRow onNavigate={onNavigate} />
    </nav>
  );
}
