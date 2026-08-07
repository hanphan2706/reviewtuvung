"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Check, ListFilter, Search } from "lucide-react";

const iconToolButtonClass =
  "inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-[#E4E4E7] bg-white text-[#000001] transition hover:border-[#000001]/30 hover:bg-[#fafafa]";

export type StudyHubLibraryIconToolbarOption = {
  value: string;
  label: string;
};

type StudyHubLibraryIconToolbarProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder?: string;
  searchAriaLabel?: string;
  filterOptions: readonly StudyHubLibraryIconToolbarOption[];
  filterValue: string;
  onFilterChange: (value: string) => void;
  filterAriaLabel?: string;
  /** When true, filter control is disabled (e.g. loading listen counts). */
  filterDisabled?: boolean;
  /** Default filter value — used to highlight the icon when non-default. */
  filterDefaultValue?: string;
  className?: string;
};

/**
 * Search + filter/sort toolbar — cùng pattern icon compact với hub Ngữ pháp:
 * nút ListFilter + Search mở rộng, không pill input luôn hiện.
 */
export function StudyHubLibraryIconToolbar({
  searchValue,
  onSearchChange,
  searchPlaceholder = "Tìm kiếm...",
  searchAriaLabel = "Tìm kiếm",
  filterOptions,
  filterValue,
  onFilterChange,
  filterAriaLabel = "Sắp xếp",
  filterDisabled = false,
  filterDefaultValue,
  className = "",
}: StudyHubLibraryIconToolbarProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const defaultFilter = filterDefaultValue ?? filterOptions[0]?.value;
  const filterActive = filterValue !== defaultFilter;

  useEffect(() => {
    if (!filterOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [filterOpen]);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  return (
    <div className={`flex w-full items-center justify-end gap-2 ${className}`.trim()}>
      <div ref={filterRef} className="relative shrink-0">
        <button
          type="button"
          aria-label={filterAriaLabel}
          aria-expanded={filterOpen}
          aria-haspopup="true"
          disabled={filterDisabled}
          onClick={() => {
            setFilterOpen((open) => !open);
            if (!filterOpen) setSearchOpen(false);
          }}
          className={`${iconToolButtonClass}${
            filterOpen || filterActive ? " border-[#000001]/40 bg-[#fafafa]" : ""
          } disabled:cursor-not-allowed disabled:opacity-60`}
        >
          <ListFilter className="size-4" strokeWidth={2} aria-hidden />
        </button>
        {filterOpen ? (
          <div
            aria-label={filterAriaLabel}
            className="absolute right-0 top-full z-30 mt-2 max-h-72 w-56 overflow-auto rounded-lg border border-[#E4E4E7] bg-white py-1 shadow-lg"
          >
            {filterOptions.map((option) => {
              const selected = filterValue === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onFilterChange(option.value);
                    setFilterOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm transition hover:bg-[#fafafa] ${
                    selected ? "font-semibold text-[#000001]" : "text-[#47464b]"
                  }`}
                >
                  <span>{option.label}</span>
                  {selected ? (
                    <Check className="size-3.5 shrink-0 text-[#4b2876]" strokeWidth={2.5} />
                  ) : null}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      <div
        className={`flex h-9 min-w-0 flex-row-reverse items-center overflow-hidden rounded-lg border bg-white transition-[width,border-color] duration-300 ease-out ${
          searchOpen || searchValue.trim() ? "border-[#000001]/35" : "border-[#E4E4E7]"
        } ${
          searchOpen
            ? "w-full max-w-none flex-1 sm:w-[min(100%,18rem)] sm:flex-none"
            : "w-9 shrink-0"
        }`}
      >
        <button
          type="button"
          aria-label={searchOpen ? "Đóng tìm kiếm" : searchAriaLabel}
          aria-expanded={searchOpen}
          onClick={() => {
            if (searchOpen) {
              setSearchOpen(false);
              if (!searchValue.trim()) onSearchChange("");
              return;
            }
            setSearchOpen(true);
            setFilterOpen(false);
          }}
          className="inline-flex size-9 shrink-0 items-center justify-center text-[#000001] transition hover:bg-[#fafafa]"
        >
          <Search className="size-4" strokeWidth={2} aria-hidden />
        </button>
        <input
          ref={searchInputRef}
          type="search"
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setSearchOpen(false);
              if (!searchValue.trim()) onSearchChange("");
            }
          }}
          placeholder={searchPlaceholder}
          aria-label={searchAriaLabel}
          tabIndex={searchOpen ? 0 : -1}
          className={`h-full min-w-0 flex-1 border-0 bg-transparent text-base font-medium text-[#000001] outline-none placeholder:text-[#47464b]/70 ${
            searchOpen ? "px-3 opacity-100" : "pointer-events-none w-0 px-0 opacity-0"
          }`}
        />
      </div>
    </div>
  );
}

/** Optional right-side slot when a page needs extra controls beside the icon toolbar. */
export function StudyHubLibraryIconToolbarRow({ children }: { children: ReactNode }) {
  return <div className="flex w-full items-center justify-end gap-2">{children}</div>;
}
