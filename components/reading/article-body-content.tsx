"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type RefObject,
} from "react";
import { Languages } from "lucide-react";
import { MobileTranslationFab } from "@/components/reading/mobile-translation-fab";
import { useCoarsePointer } from "@/hooks/use-coarse-pointer";
import {
  alignTranslationToParagraphs,
  prepareArticleBody,
} from "@/lib/reading/article-body-structure";
import { pickPullQuote } from "@/lib/reading/format-paragraphs";

type ArticleBodyContentProps = {
  body: string;
  deckText?: string;
  subheadline?: string;
  translationParagraphs?: string[] | null;
  /** Vùng cuộn bài đọc — dùng để neo nút Dịch theo đoạn đang đọc (desktop). */
  scrollContainerRef?: RefObject<HTMLElement | null>;
  /** Đồng bộ với sidebar (kiểm tra nhanh) khi truyền từ ArticleReader. */
  showTranslation?: boolean;
  onToggleTranslation?: () => void;
  /** Deck/hook hiển thị dưới tiêu đề — không lặp trong thân bài. */
  deckInHeader?: boolean;
};

function ParagraphTranslationToggle({
  open,
  onToggle,
  inline,
}: {
  open: boolean;
  onToggle: () => void;
  inline?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      className={`inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full border font-bold uppercase tracking-wide shadow-sm transition ${
        inline
          ? "mt-2 border-[#E4E4E7] bg-white px-3 py-1.5 text-[10px] text-[#47464b] hover:bg-[#f7f3f2]"
          : "border-[#E4E4E7] bg-white px-3 py-1 text-[10px] text-[#47464b] hover:bg-[#f7f3f2]"
      } ${open ? "border-[#4b2876]/40 bg-[#4b2876]/10 text-[#4b2876]" : ""}`}
    >
      <Languages className="size-3 opacity-80" aria-hidden />
      {open ? "Ẩn dịch" : "Dịch"}
    </button>
  );
}

export function ArticleBodyContent({
  body,
  deckText = "",
  subheadline = "",
  translationParagraphs = null,
  scrollContainerRef,
  showTranslation: showTranslationProp,
  onToggleTranslation,
  deckInHeader = false,
}: ArticleBodyContentProps) {
  const bodyWrapperRef = useRef<HTMLDivElement>(null);
  const paragraphRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [showAllTranslationsInternal, setShowAllTranslationsInternal] = useState(false);
  const showAllTranslations = showTranslationProp ?? showAllTranslationsInternal;
  const isCoarsePointer = useCoarsePointer();

  const hasTranslation = Boolean(translationParagraphs?.length);
  const showTouchFab = hasTranslation && isCoarsePointer;
  const showDesktopToggle = hasTranslation && !isCoarsePointer;

  const { deck, paragraphs, alignedVi, quote, insertAfterIndex } = useMemo(() => {
    const prepared = prepareArticleBody(body, subheadline, deckText);
    const alignedVi = alignTranslationToParagraphs(
      prepared.deck,
      prepared.paragraphs,
      translationParagraphs,
    );
    const { quote, insertAfterIndex } = pickPullQuote(prepared.paragraphs);
    return {
      deck: prepared.deck,
      paragraphs: prepared.paragraphs,
      alignedVi,
      quote,
      insertAfterIndex,
    };
  }, [body, subheadline, deckText, translationParagraphs]);

  const showDeckInBody = Boolean(deck) && !deckInHeader;
  const slotCount = (showDeckInBody ? 1 : 0) + paragraphs.length;

  useLayoutEffect(() => {
    paragraphRefs.current = paragraphRefs.current.slice(0, slotCount);
  }, [slotCount, body]);

  const toggleAllTranslations = useCallback(() => {
    if (onToggleTranslation) onToggleTranslation();
    else setShowAllTranslationsInternal((v) => !v);
  }, [onToggleTranslation]);

  if (slotCount === 0) {
    return <p className="text-[#47464b]">Chưa có nội dung bài đọc.</p>;
  }

  return (
    <div ref={bodyWrapperRef} className="relative">
      {showDesktopToggle ? (
        <div className="mb-6">
          <ParagraphTranslationToggle open={showAllTranslations} onToggle={toggleAllTranslations} />
        </div>
      ) : null}

      {showTouchFab ? (
        <MobileTranslationFab open={showAllTranslations} onToggle={toggleAllTranslations} />
      ) : null}

      <div className="select-text touch-callout-none space-y-6 font-serif text-lg leading-[1.8] text-[#1c1b1c]">
        {paragraphs.map((para, index) => {
          const slotIndex = showDeckInBody ? index + 1 : index;
          const vi = alignedVi[slotIndex];
          const showVi = Boolean(vi && showAllTranslations);

          return (
            <div
              key={`${index}-${para.slice(0, 32)}`}
              ref={(el) => {
                paragraphRefs.current[slotIndex] = el;
              }}
            >
              <p>{para}</p>

              {showVi ? (
                <p className="mt-3 border-l-2 border-[#4b2876]/30 pl-4 font-sans text-base leading-relaxed text-[#47464b]">
                  {vi}
                </p>
              ) : null}

              {quote && index === insertAfterIndex ? (
                <blockquote className="my-8 border-l-4 border-[#4b2876] py-2 pl-6 font-serif text-xl italic leading-relaxed text-[#5d5e60]">
                  &ldquo;{quote}&rdquo;
                </blockquote>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
