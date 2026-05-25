"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  Bookmark,
  BookOpen,
  CircleHelp,
  Share2,
  Languages,
} from "lucide-react";
import { DictionaryPopover } from "@/components/reading/dictionary-popover";
import { useArticleTextSelection } from "@/components/reading/use-article-text-selection";
import { studyHubContainerClass } from "@/components/study-module/study-hub-shell";
import { fetchDictionaryEntry, singleWordOrPhrase } from "@/lib/reading/fetch-dictionary";
import { formatLookupForDeck, type ReadingLookupResult } from "@/lib/reading/lookup-types";
import { subheadlineFromBody } from "@/lib/reading/article-lead";
import type { ReadingPassageBlock } from "@/lib/reading/split-passages";
import { useSrsStore } from "@/store/srs-store";

function LabelCaps({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#47464b]">{children}</span>
  );
}

function ArticleCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section
      className={`rounded-lg border border-[#E4E4E7] bg-white shadow-sm ${className}`}
    >
      {children}
    </section>
  );
}

function splitBodyParagraphs(body: string): string[] {
  return body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

function estimateReadMinutes(body: string): number {
  const words = body.split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.round(words / 200));
}

type ArticleReaderProps = {
  passage: ReadingPassageBlock;
  metaLabel: string;
  subheadline: string;
  imageUrl: string;
  edition?: string;
  onBack: () => void;
};

export function ArticleReader({ passage, metaLabel, subheadline, imageUrl, edition, onBack }: ArticleReaderProps) {
  const articleRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const decks = useSrsStore((s) => s.decks);
  const firstDeckId = decks[0]?.id ?? null;

  const [readProgress, setReadProgress] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [dictLoading, setDictLoading] = useState(false);
  const [dictLookup, setDictLookup] = useState<ReadingLookupResult | null>(null);

  const { selection, clearSelection } = useArticleTextSelection(articleRef);
  const picked = useMemo(
    () => (selection ? singleWordOrPhrase(selection.text) : null),
    [selection],
  );

  const paragraphs = useMemo(() => splitBodyParagraphs(passage.body), [passage.body]);
  const readMin = useMemo(() => estimateReadMinutes(passage.body), [passage.body]);
  const lead = useMemo(
    () => subheadline || subheadlineFromBody(passage.body),
    [subheadline, passage.body],
  );

  const addWordHref = useMemo(() => {
    if (!firstDeckId || !picked) return null;
    const q = new URLSearchParams();
    q.set("term", picked);
    if (dictLookup) {
      const def = formatLookupForDeck(dictLookup);
      q.set("definition", def.length > 1200 ? `${def.slice(0, 1200)}…` : def);
    }
    return `/deck/${firstDeckId}/add-word?${q.toString()}`;
  }, [firstDeckId, picked, dictLookup]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight;
      setReadProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [passage.body]);

  useEffect(() => {
    if (!picked) {
      setDictLookup(null);
      return;
    }
    let cancelled = false;
    setDictLoading(true);
    setDictLookup({ query: picked, kind: /\s/.test(picked) ? "phrase" : "word", senses: [], paraphrases: [], source: "" });
    void fetchDictionaryEntry(picked)
      .then((result) => {
        if (!cancelled) setDictLookup(result);
      })
      .catch(() => {
        if (!cancelled) {
          setDictLookup({
            query: picked,
            kind: /\s/.test(picked) ? "phrase" : "word",
            error: "Lỗi mạng hoặc máy chủ tra từ.",
            senses: [],
            paraphrases: [],
            source: "",
          });
        }
      })
      .finally(() => {
        if (!cancelled) setDictLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [picked]);

  const closePopover = useCallback(() => {
    clearSelection();
    setDictLookup(null);
  }, [clearSelection]);

  return (
    <div ref={scrollRef} className="relative max-h-[calc(100dvh-3.5rem)] overflow-y-auto md:max-h-[calc(100dvh-4rem)]">
      <div
        className="sticky top-0 z-40 h-0.5 bg-[#E4E4E7]"
        aria-hidden
      >
        <div
          className="h-full bg-[#4b2876] transition-[width] duration-150"
          style={{ width: `${readProgress * 100}%` }}
        />
      </div>

      <main className={`${studyHubContainerClass} grid grid-cols-1 gap-8 py-8 md:grid-cols-12 md:py-12`}>
        <aside className="hidden md:col-span-1 md:block">
          <div className="sticky top-24 flex flex-col gap-3">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex size-10 items-center justify-center rounded-lg border border-[#E4E4E7] bg-white text-[#1c1b1c] transition hover:bg-[#f7f3f2]"
              title="Quay lại"
            >
              <ArrowLeft className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-[#E4E4E7] bg-white text-[#1c1b1c] transition hover:bg-[#f7f3f2]"
              title="Đánh dấu (sắp có)"
            >
              <Bookmark className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-[#E4E4E7] bg-white text-[#1c1b1c] transition hover:bg-[#f7f3f2]"
              title="Chia sẻ (sắp có)"
            >
              <Share2 className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => setShowTranslation((v) => !v)}
              className={`inline-flex size-10 items-center justify-center rounded-lg border transition ${
                showTranslation
                  ? "border-[#4b2876] bg-[#4b2876]/10 text-[#4b2876]"
                  : "border-[#E4E4E7] bg-white text-[#1c1b1c] hover:bg-[#f7f3f2]"
              }`}
              title="Bản dịch (sắp có)"
            >
              <Languages className="size-5" aria-hidden />
            </button>
          </div>
        </aside>

        <div className="md:col-span-7">
          <button
            type="button"
            onClick={onBack}
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#47464b] hover:text-[#1c1b1c] md:hidden"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Quay lại
          </button>

          <article ref={articleRef} className="flex flex-col gap-8">
            <header className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#dfdfe1] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#616365]">
                  {metaLabel}
                </span>
                <LabelCaps>· {readMin} PHÚT ĐỌC</LabelCaps>
              </div>
              <h1 className="font-serif text-3xl font-bold leading-tight tracking-tight text-[#1c1b1c] md:text-[2.5rem]">
                {passage.title}
              </h1>
              <p className="font-serif text-lg leading-relaxed text-[#5d5e60]">{lead}</p>
              {edition ? (
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#47464b]">{edition}</p>
              ) : null}
            </header>

            <ArticleCard className="overflow-hidden p-0">
              <div className="relative aspect-[16/10] w-full">
                <Image src={imageUrl} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 700px" priority />
              </div>
            </ArticleCard>

            {showTranslation ? (
              <p className="rounded-lg border border-[#E4E4E7] bg-[#f7f3f2] px-4 py-3 text-sm text-[#47464b]">
                Bản dịch tiếng Việt sẽ hiển thị ở đây khi bạn thêm file dịch kèm passage.
              </p>
            ) : null}

            <div className="select-text space-y-6 font-serif text-lg leading-[1.8] text-[#1c1b1c]">
              {paragraphs.map((para) => (
                <p key={para.slice(0, 48)}>{para}</p>
              ))}
            </div>
          </article>
        </div>

        <aside className="flex flex-col gap-3 md:col-span-4">
          <ArticleCard className="p-6">
            <div className="flex items-center justify-between border-b border-[#E4E4E7] pb-3">
              <h3 className="flex items-center gap-2 font-serif text-lg font-semibold text-[#1c1b1c]">
                <BookOpen className="size-5 text-[#4b2876]" aria-hidden />
                Từ vựng quan trọng
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4b2876]">SẮP CÓ</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#47464b]">
              Bôi đen từ trong bài để tra nghĩa và thêm vào deck. Danh sách từ gợi ý theo passage sẽ bổ sung sau.
            </p>
            <button
              type="button"
              disabled
              className="mt-4 w-full rounded-lg border border-[#1c1b1c] py-3 text-[10px] font-bold uppercase tracking-wider text-[#1c1b1c] opacity-45"
            >
              Luyện tập flashcards
            </button>
          </ArticleCard>

          <ArticleCard className="bg-[#f7f3f2] p-6">
            <div className="flex items-center gap-2 border-b border-[#E4E4E7] pb-3">
              <CircleHelp className="size-5 text-[#4b2876]" aria-hidden />
              <h3 className="font-serif text-lg font-semibold text-[#1c1b1c]">Kiểm tra nhanh</h3>
            </div>
            <p className="mt-4 text-[15px] text-[#47464b]">
              Câu hỏi theo passage sẽ map từ file Cambridge hoặc ngân hàng JSON khi bạn gửi nội dung.
            </p>
          </ArticleCard>

          <ArticleCard className="border-none bg-[#1c1b1c] p-6 text-white">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">CHUỖI NGÀY HIỆN TẠI</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-serif text-5xl font-bold leading-none">—</span>
            </div>
            <p className="mt-4 text-[13px] opacity-80">Theo dõi streak đọc sẽ kết nối sau khi có tài khoản &amp; lịch sử.</p>
          </ArticleCard>
        </aside>
      </main>

      <DictionaryPopover
        anchor={selection}
        lookup={dictLookup}
        loading={dictLoading}
        addWordHref={addWordHref}
        onClose={closePopover}
      />
    </div>
  );
}
