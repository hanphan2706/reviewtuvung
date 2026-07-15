"use client";

import { GRAMMAR_HEADER_NAV, scrollToGrammarSection } from "@/lib/grammar/grammar-hub-nav";

export function GrammarHubMenuNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-1" aria-label="Ngữ pháp">
      {GRAMMAR_HEADER_NAV.map(({ sectionId, label }) => (
        <button
          key={sectionId}
          type="button"
          onClick={() => {
            scrollToGrammarSection(sectionId);
            onNavigate?.();
          }}
          className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-[#000001] transition hover:bg-white"
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
