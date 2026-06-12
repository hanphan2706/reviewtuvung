"use client";

import { ChevronDown } from "lucide-react";
import { studyHubLibraryToolbarControlClass } from "@/components/study-module/study-hub-shell";
import {
  LISTENING_LIBRARY_SORT_OPTIONS,
  type ListeningLibrarySort,
} from "@/lib/listening/library-sort";

type ListeningLibrarySortSelectProps = {
  value: ListeningLibrarySort;
  onChange: (value: ListeningLibrarySort) => void;
  disabled?: boolean;
  className?: string;
};

function SortLinesIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      focusable="false"
    >
      <title>Sắp xếp</title>
      <path d="M2 4.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 8H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 11.5H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ListeningLibrarySortSelect({
  value,
  onChange,
  disabled,
  className = studyHubLibraryToolbarControlClass,
}: ListeningLibrarySortSelectProps) {
  const current = LISTENING_LIBRARY_SORT_OPTIONS.find((o) => o.value === value);

  return (
    <label className={`inline-flex shrink-0 ${className}`.trim()}>
      <span className="relative inline-flex w-full items-center">
        <SortLinesIcon className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-[#4a4a4a]" />
        <select
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value as ListeningLibrarySort)}
          className="w-full cursor-pointer appearance-none rounded-lg border border-[#4a4a4a] bg-white py-1.5 pr-7 pl-8 text-xs font-bold text-[#4a4a4a] transition hover:bg-[#fafafa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a4a4a] disabled:cursor-not-allowed disabled:opacity-60"
          aria-label="Sắp xếp bài nghe"
        >
          {LISTENING_LIBRARY_SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute top-1/2 right-2.5 size-3.5 -translate-y-1/2 text-[#4a4a4a]"
          strokeWidth={2}
          aria-hidden
        />
      </span>
      {current ? (
        <span className="sr-only">Đang chọn: {current.label}</span>
      ) : null}
    </label>
  );
}
