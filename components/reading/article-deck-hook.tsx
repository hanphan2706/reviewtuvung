import { ensureSentenceEnd } from "@/lib/reading/format-sentence-end";

type ArticleDeckHookProps = {
  text: string;
  translation?: string;
  showTranslation?: boolean;
};

/** Mọi dòng ngay dưới tiêu đề (hook, deck, subheadline hub) — Helvetica. */
export function ArticleDeckHook({ text, translation, showTranslation = false }: ArticleDeckHookProps) {
  const showVi = Boolean(translation && showTranslation);
  const displayText = ensureSentenceEnd(text);
  const displayTranslation = translation ? ensureSentenceEnd(translation) : undefined;

  return (
    <div className="m-0">
      <p className="font-sans text-base font-normal leading-relaxed text-[#5d5e60] md:text-[1.0625rem]">
        {displayText}
      </p>
      {showVi && displayTranslation ? (
        <p className="mt-2 font-sans text-sm leading-relaxed text-[#47464b]">{displayTranslation}</p>
      ) : null}
    </div>
  );
}
