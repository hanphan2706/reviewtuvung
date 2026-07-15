"use client";

import { ChevronDown } from "lucide-react";
import { studyHubLibraryToolbarControlClass, studyHubLibraryToolbarFieldClass } from "@/components/study-module/study-hub-shell";
import {
  GRAMMAR_CATEGORY_FILTER_OPTIONS,
  GRAMMAR_DIFFICULTY_FILTER_OPTIONS,
  type GrammarCategoryFilter,
  type GrammarDifficultyFilter,
} from "@/lib/grammar/grammar-hub-data";

function FilterSelect<T extends string>({
  value,
  onChange,
  options,
  ariaLabel,
}: {
  value: T;
  onChange: (value: T) => void;
  options: readonly { value: T; label: string }[];
  ariaLabel: string;
}) {
  return (
    <label className={`inline-flex shrink-0 ${studyHubLibraryToolbarControlClass}`}>
      <span className="relative inline-flex w-full items-center">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as T)}
          aria-label={ariaLabel}
          className={`${studyHubLibraryToolbarFieldClass} w-full appearance-none pr-7 pl-3`}
        >
          {options.map((option) => (
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
    </label>
  );
}

export function GrammarDifficultyFilterSelect({
  value,
  onChange,
}: {
  value: GrammarDifficultyFilter;
  onChange: (value: GrammarDifficultyFilter) => void;
}) {
  return (
    <FilterSelect
      value={value}
      onChange={onChange}
      options={GRAMMAR_DIFFICULTY_FILTER_OPTIONS}
      ariaLabel="Lọc theo độ khó"
    />
  );
}

export function GrammarCategoryFilterSelect({
  value,
  onChange,
}: {
  value: GrammarCategoryFilter;
  onChange: (value: GrammarCategoryFilter) => void;
}) {
  return (
    <FilterSelect
      value={value}
      onChange={onChange}
      options={GRAMMAR_CATEGORY_FILTER_OPTIONS}
      ariaLabel="Lọc theo loại ngữ pháp"
    />
  );
}
