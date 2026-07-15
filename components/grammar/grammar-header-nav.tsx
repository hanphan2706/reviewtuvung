"use client";

import Link from "next/link";
import { studyHubHeaderTextClass } from "@/components/study-module/study-hub-shell";
import {
  GRAMMAR_HEADER_NAV,
  GRAMMAR_HUB_HREF,
  scrollToGrammarSection,
} from "@/lib/grammar/grammar-hub-nav";

const headerNavItemClass = `inline-flex items-center gap-1 leading-none ${studyHubHeaderTextClass}`;
const navButtonClass = `${headerNavItemClass} m-0 shrink-0 cursor-pointer appearance-none border-0 bg-transparent p-0 font-inherit whitespace-nowrap text-inherit transition-opacity hover:opacity-70`;

export function GrammarHeaderNav() {
  return (
    <nav className="hidden shrink-0 flex-nowrap items-center gap-3 xl:flex 2xl:gap-4" aria-label="Ngữ pháp">
      {GRAMMAR_HEADER_NAV.map(({ sectionId, label }) => (
        <button
          key={sectionId}
          type="button"
          onClick={() => scrollToGrammarSection(sectionId)}
          className={navButtonClass}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}

export function GrammarHubTitleLink({ title }: { title: string }) {
  return (
    <Link
      href={GRAMMAR_HUB_HREF}
      className={`${headerNavItemClass} truncate uppercase tracking-[-0.02em] transition-opacity hover:opacity-70`}
    >
      {title}
    </Link>
  );
}
