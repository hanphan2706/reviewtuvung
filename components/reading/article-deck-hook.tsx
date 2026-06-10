import { ensureSentenceEnd } from "@/lib/reading/format-sentence-end";

type ArticleDeckHookProps = {
  text: string;
  translation?: string;
  showTranslation?: boolean;
  className?: string;
  /** Mặc định thêm dấu chấm cuối — tắt cho metadata (vd. thời lượng). */
  ensureSentenceEnd?: boolean;
};

/** Mọi dòng ngay dưới tiêu đề (hook, deck, subheadline hub) — Helvetica. */
export function ArticleDeckHook({
  text,
  translation,
  showTranslation = false,
  className,
  ensureSentenceEnd: ensureEnd = true,
}: ArticleDeckHookProps) {
  const showVi = Boolean(translation && showTranslation);
  const displayText = ensureEnd ? ensureSentenceEnd(text) : text.trim();
  const displayTranslation = translation ? ensureSentenceEnd(translation) : undefined;

  return (
    <div className="m-0">
      <p
        className={
          className ??
          "font-sans text-base font-normal leading-relaxed text-[#5d5e60] md:text-[1.0625rem]"
        }
      >
        {displayText}
      </p>
      {showVi && displayTranslation ? (
        <p className="mt-2 font-sans text-sm leading-relaxed text-[#47464b]">{displayTranslation}</p>
      ) : null}
    </div>
  );
}
