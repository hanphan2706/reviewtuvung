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
import { useMinMdViewport } from "@/hooks/use-min-md-viewport";
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

const READING_ANCHOR_RATIO = 0.28;

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
          ? "mt-2 border-[#E4E4E7] bg-white px-3 py-1.5 text-[10px] text-[#47464b] hover:bg-[#f3f0f8]"
          : "border-[#E4E4E7] bg-white px-3 py-1 text-[10px] text-[#47464b] hover:bg-[#f3f0f8]"
      } ${open ? "border-[#4b2876]/40 bg-[#4b2876]/10 text-[#4b2876]" : ""}`}
    >
      <Languages className="size-3 opacity-80" aria-hidden />
      {open ? "Ẩn dịch" : "Dịch"}
    </button>
  );
}

function pickActiveParagraphIndex(
  scrollRoot: HTMLElement,
  paragraphEls: (HTMLDivElement | null)[],
): number {
  const anchorY = scrollRoot.getBoundingClientRect().top + scrollRoot.clientHeight * READING_ANCHOR_RATIO;
  let active = 0;
  for (let i = 0; i < paragraphEls.length; i++) {
    const el = paragraphEls[i];
    if (!el) continue;
    if (el.getBoundingClientRect().top <= anchorY) active = i;
    else break;
  }
  return active;
}

export function ArticleBodyContent({
  body,
  deckText = "",
  subheadline = "",
  translationParagraphs = null,
  scrollContainerRef,
  showTranslation: showTranslationProp,
  onToggleTranslation,
  deckInHeader: _deckInHeader = false,
}: ArticleBodyContentProps) {
  void _deckInHeader;  const bodyWrapperRef = useRef<HTMLDivElement>(null);
  const paragraphRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [showAllTranslationsInternal, setShowAllTranslationsInternal] = useState(false);
  const showAllTranslations = showTranslationProp ?? showAllTranslationsInternal;
  const [floatingToggleTop, setFloatingToggleTop] = useState(0);
  const isCoarsePointer = useCoarsePointer();
  const isMinMdViewport = useMinMdViewport();

  const hasTranslation = Boolean(translationParagraphs?.length);
  const useFloatingToggle =
    hasTranslation && Boolean(scrollContainerRef) && !isCoarsePointer && isMinMdViewport;
  const showTouchFab = hasTranslation && !useFloatingToggle;

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

  // alignedVi[0] is always the deck when present; body paras start at 1 even if deck is shown under the title.
  const viSlotOffset = deck ? 1 : 0;
  const slotCount = paragraphs.length;

  const syncReadingAnchor = useCallback(() => {
    const scrollRoot = scrollContainerRef?.current;
    const wrapper = bodyWrapperRef.current;
    if (!scrollRoot || !wrapper) return;

    const nextActive = pickActiveParagraphIndex(scrollRoot, paragraphRefs.current);

    const anchorEl = paragraphRefs.current[nextActive];
    if (!anchorEl) return;
    setFloatingToggleTop(anchorEl.offsetTop);
  }, [scrollContainerRef]);

  useLayoutEffect(() => {
    paragraphRefs.current = paragraphRefs.current.slice(0, slotCount);
    syncReadingAnchor();
  }, [slotCount, body, syncReadingAnchor]);

  useEffect(() => {
    if (!useFloatingToggle) return;
    const scrollRoot = scrollContainerRef?.current;
    if (!scrollRoot) return;

    syncReadingAnchor();
    scrollRoot.addEventListener("scroll", syncReadingAnchor, { passive: true });
    window.addEventListener("resize", syncReadingAnchor);

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(syncReadingAnchor) : null;
    ro?.observe(scrollRoot);
    if (bodyWrapperRef.current) ro?.observe(bodyWrapperRef.current);

    return () => {
      scrollRoot.removeEventListener("scroll", syncReadingAnchor);
      window.removeEventListener("resize", syncReadingAnchor);
      ro?.disconnect();
    };
  }, [useFloatingToggle, scrollContainerRef, syncReadingAnchor]);

  const toggleAllTranslations = useCallback(() => {
    if (onToggleTranslation) onToggleTranslation();
    else setShowAllTranslationsInternal((v) => !v);
  }, [onToggleTranslation]);

  if (slotCount === 0) {
    return <p className="text-[#47464b]">Chưa có nội dung bài đọc.</p>;
  }

  return (
    <div ref={bodyWrapperRef} className="relative md:overflow-visible">
      {useFloatingToggle ? (
        <div
          className="pointer-events-none absolute right-full top-0 z-10 pr-5"
          style={{
            top: floatingToggleTop,
            transition: "top 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div className="pointer-events-auto">
            <ParagraphTranslationToggle open={showAllTranslations} onToggle={toggleAllTranslations} />
          </div>
        </div>
      ) : null}

      {showTouchFab ? (
        <MobileTranslationFab open={showAllTranslations} onToggle={toggleAllTranslations} />
      ) : null}

      <div className="select-text touch-callout-none space-y-6 font-serif text-lg leading-[1.8] text-[#000001]">
        {paragraphs.map((para, index) => {
          const vi = alignedVi[index + viSlotOffset];
          const showVi = Boolean(vi && showAllTranslations);

          return (
            <div
              key={`${index}-${para.slice(0, 32)}`}
              ref={(el) => {
                paragraphRefs.current[index] = el;
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
