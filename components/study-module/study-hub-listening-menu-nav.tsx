"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  LISTENING_DIFFICULTY_NAV,
  LISTENING_IELTS_EXAM_HREF,
  LISTENING_LIBRARY_ALL_HREF,
  LISTENING_SOURCE_NAV,
  LISTENING_TOPIC_NAV,
  type ListeningLibraryNavItem,
} from "@/lib/listening/library-nav";

const sectionTitleClass = "text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]";

function SourceNavGroup({
  title,
  items,
  onNavigate,
}: {
  title: string;
  items: readonly ListeningLibraryNavItem[];
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `listening-menu-${title.replace(/\s+/g, "-").toLowerCase()}`;

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

function TopLevelNavRow({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
}) {
  return (
    <div>
      <div className="flex min-h-6 items-center justify-between gap-2 px-2">
        <Link
          href={href}
          onClick={onNavigate}
          className={`cursor-pointer transition hover:opacity-80 ${sectionTitleClass}`}
        >
          {label}
        </Link>
        <span className="inline-flex size-6 shrink-0" aria-hidden />
      </div>
    </div>
  );
}

/** Điều hướng Luyện nghe trong menu curtain — khi header chưa hiện menu ngang. */
export function StudyHubListeningMenuNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-5" aria-label="Luyện nghe">
      <SourceNavGroup title="Nguồn bài nghe" items={LISTENING_SOURCE_NAV} onNavigate={onNavigate} />
      <SourceNavGroup title="Độ khó" items={LISTENING_DIFFICULTY_NAV} onNavigate={onNavigate} />
      <SourceNavGroup title="Bài nghe theo chủ đề" items={LISTENING_TOPIC_NAV} onNavigate={onNavigate} />
      <TopLevelNavRow href={LISTENING_IELTS_EXAM_HREF} label="Luyện đề IELTS" onNavigate={onNavigate} />
      <TopLevelNavRow
        href={LISTENING_LIBRARY_ALL_HREF}
        label="Tất cả bài luyện nghe"
        onNavigate={onNavigate}
      />
    </nav>
  );
}
