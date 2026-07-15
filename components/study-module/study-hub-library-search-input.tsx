"use client";

import { Search } from "lucide-react";
import { studyHubLibraryToolbarControlClass, studyHubLibraryToolbarFieldClass } from "@/components/study-module/study-hub-shell";

type StudyHubLibrarySearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  "aria-label"?: string;
  autoFocus?: boolean;
  fullWidth?: boolean;
};

export function StudyHubLibrarySearchInput({
  value,
  onChange,
  placeholder = "Tìm kiếm bài...",
  "aria-label": ariaLabel = "Tìm kiếm bài",
  autoFocus = false,
  fullWidth = false,
}: StudyHubLibrarySearchInputProps) {
  return (
    <label
      className={`inline-flex ${fullWidth ? "w-full" : `shrink-0 ${studyHubLibraryToolbarControlClass}`}`}
    >
      <span className="relative inline-flex w-full items-center">
        <Search
          className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-[#4a4a4a]"
          aria-hidden
        />
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-label={ariaLabel}
          autoFocus={autoFocus}
          className={`${studyHubLibraryToolbarFieldClass} w-full pl-8 pr-3 outline-none placeholder:font-normal placeholder:text-[#4a4a4a]/70`}
        />
      </span>
    </label>
  );
}
