"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BookOpen, CircleHelp } from "lucide-react";
import { ArticleAudioHeroCard } from "@/components/reading/article-audio-hero-card";
import { ArticleBodyContent } from "@/components/reading/article-body-content";
import { ArticleDeckHook } from "@/components/reading/article-deck-hook";
import { ArticleQuickCheckPanel } from "@/components/reading/article-quick-check-panel";
import { ArticleStreakPanel } from "@/components/reading/article-streak-panel";
import { ArticleVocabularyPanel } from "@/components/reading/article-vocabulary-panel";
import { DictionaryPopover } from "@/components/reading/dictionary-popover";
import { useArticleTextSelection,
  type SelectionAnchor,
} from "@/components/reading/use-article-text-selection";
import { useReadingCopyFriction } from "@/hooks/use-reading-copy-friction";
import { studyHubContainerClass } from "@/components/study-module/study-hub-shell";
import { StudyLoginPrompt } from "@/components/study-module/study-login-prompt";
import { useStudyExamNav } from "@/hooks/use-study-exam-nav";
import {
  fetchDictionaryEnrich,
  fetchDictionaryEntry,
  parseReadingSelection,
} from "@/lib/reading/fetch-dictionary";
import type { ReadingLookupResult } from "@/lib/reading/lookup-types";
import { estimateReadMinutes } from "@/lib/reading/estimate-read-minutes";
import {
  alignTranslationToParagraphs,
  prepareArticleBody,
} from "@/lib/reading/article-body-structure";
import { subheadlineFromBody } from "@/lib/reading/article-lead";
import { readingArticleHrefById } from "@/lib/reading/article-routes";
import {
  isCompassPublishingPilot,
  type ReadingDifficulty,
  type ReadingPilotId,
  type ReadingTopic,
} from "@/lib/reading/hub-articles";
import {
  getPassageVocabulary,
  type PassageVocabItem,
} from "@/lib/reading/passage-vocabulary";
import type { ReadingPassageBlock } from "@/lib/reading/split-passages";
import { studySourcePillClassName } from "@/components/study-module/study-tokens";
import { readingArticleImageObjectPosition } from "@/lib/reading/passage-media";
import { useSrsStore } from "@/store/srs-store";

function LabelCaps({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#47464b]">{children}</span>
  );
}

function ArticleCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`rounded-lg border border-[#E4E4E7] bg-white shadow-sm ${className}`}>
      {children}
    </section>
  );
}

type ArticleReaderProps = {
  passage: ReadingPassageBlock;
  metaLabel: string;
  subheadline: string;
  imageUrl: string;
  audioUrl?: string;
  edition?: string;
  source?: string;
  topic?: ReadingTopic;
  difficulty?: ReadingDifficulty;
  articleId: string;
  pilotId?: ReadingPilotId;
  vocabularyItems?: PassageVocabItem[];
  translationParagraphs?: string[] | null;
  examHref: string | null;
  hasFullExam: boolean;
  isLoggedIn: boolean;
  supabaseConfigured?: boolean;
};

export function ArticleReader({
  passage,
  metaLabel,
  subheadline,
  imageUrl,
  audioUrl = "",
  edition,
  source,
  topic,
  difficulty,
  articleId,
  pilotId,
  vocabularyItems: vocabularyItemsProp,
  translationParagraphs = null,
  examHref,
  hasFullExam,
  isLoggedIn,
  supabaseConfigured = true,
}: ArticleReaderProps) {
  const { openExamHref, loginPrompt, closeLoginPrompt } = useStudyExamNav(isLoggedIn);
  const articleRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const progressSentRef = useRef(false);
  const decks = useSrsStore((s) => s.decks);
  const imageObjectPosition = readingArticleImageObjectPosition(articleId);

  const hasTranslation = Boolean(translationParagraphs?.length);
  const [showTranslation, setShowTranslation] = useState(
    () =>
      Boolean(
        translationParagraphs?.length && pilotId && isCompassPublishingPilot(pilotId),
      ),
  );
  const [readProgress, setReadProgress] = useState(0);
  const [dictLoading, setDictLoading] = useState(false);
  const [dictLookup, setDictLookup] = useState<ReadingLookupResult | null>(null);
  const popoverAnchorRef = useRef<SelectionAnchor | null>(null);
  const pickedRef = useRef<ReturnType<typeof parseReadingSelection>>(null);

  const { selection, clearSelection } = useArticleTextSelection(articleRef);
  useReadingCopyFriction(articleRef);
  const selectionText = selection?.text ?? null;
  const picked = useMemo(
    () => (selectionText ? parseReadingSelection(selectionText) : null),
    [selectionText],
  );
  if (picked) pickedRef.current = picked;

  const popoverAnchor = selection ?? popoverAnchorRef.current;
  const showDictionaryPopover = Boolean(popoverAnchor && dictLookup);
  const pickedForLookup =
    picked ?? (showDictionaryPopover ? pickedRef.current : null);
  const lookupKey = pickedForLookup
    ? `${pickedForLookup.mode}\0${pickedForLookup.query}`
    : null;

  const readMin = useMemo(
    () => estimateReadMinutes(passage.body, pilotId),
    [passage.body, pilotId],
  );
  const preparedBody = useMemo(
    () => prepareArticleBody(passage.body, subheadline, passage.deckText),
    [passage.body, subheadline, passage.deckText],
  );
  const deckHook = preparedBody.deck;
  const deckTranslation = useMemo(
    () =>
      alignTranslationToParagraphs(
        preparedBody.deck,
        preparedBody.paragraphs,
        translationParagraphs,
      )[0],
    [preparedBody.deck, preparedBody.paragraphs, translationParagraphs],
  );
  const lead = useMemo(
    () => subheadline || subheadlineFromBody(passage.body),
    [subheadline, passage.body],
  );
  const underTitleText = deckHook || lead || "";
  const underTitleTranslation = deckHook ? deckTranslation : undefined;
  const flashcardsHref = `${readingArticleHrefById(articleId)}/flashcards`;
  const vocabularyItems = useMemo(() => {
    if (vocabularyItemsProp?.length) return vocabularyItemsProp;
    return getPassageVocabulary(articleId, {
      pilotId,
      idiomsText: passage.idiomsText,
    });
  }, [vocabularyItemsProp, articleId, pilotId, passage.idiomsText]);

  const canAddWord = Boolean(isLoggedIn && pickedForLookup);

  useEffect(() => {
    if (selection) popoverAnchorRef.current = selection;
  }, [selection]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight;
      const p = max > 0 ? Math.min(1, el.scrollTop / max) : 0;
      setReadProgress(p);
      if (isLoggedIn && p >= 0.88 && !progressSentRef.current) {
        progressSentRef.current = true;
        void fetch("/api/reading/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ articleKey: articleId, progress: p }),
        });
      }
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [articleId, isLoggedIn, passage.body]);

  useEffect(() => {
    if (!lookupKey) return;
    const sep = lookupKey.indexOf("\0");
    const mode = lookupKey.slice(0, sep) as "word" | "phrase" | "translate-only";
    const query = lookupKey.slice(sep + 1);
    let cancelled = false;
    setDictLoading(true);
    setDictLookup({
      query,
      kind: mode === "word" ? "word" : "phrase",
      senses: [],
      paraphrases: [],
      source: "",
    });
    void fetchDictionaryEntry(query)
      .then((result) => {
        if (cancelled) return;
        setDictLookup(result);
        if (result.kind === "word" && !result.error) {
          void fetchDictionaryEnrich(query).then((paraphrases) => {
            if (cancelled || !paraphrases.length) return;
            setDictLookup((prev) =>
              prev && prev.query === query ? { ...prev, paraphrases } : prev,
            );
          });
        }
      })
      .catch(() => {
        if (!cancelled) {
          setDictLookup({
            query,
            kind: mode === "word" ? "word" : "phrase",
            error: "Lỗi mạng hoặc máy chủ tra từ. Thử chọn lại cụm.",
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
  }, [lookupKey]);

  const closePopover = useCallback(() => {
    clearSelection();
    setDictLookup(null);
    popoverAnchorRef.current = null;
    pickedRef.current = null;
  }, [clearSelection]);

  return (
    <div ref={scrollRef} className="relative max-h-[calc(100dvh-3.5rem)] overflow-y-auto md:max-h-[calc(100dvh-4rem)]">
      <div className="sticky top-0 z-40 h-0.5 bg-[#E4E4E7]" aria-hidden>
        <div
          className="h-full bg-[#4b2876] transition-[width] duration-150"
          style={{ width: `${readProgress * 100}%` }}
        />
      </div>

      <main className={`${studyHubContainerClass} grid grid-cols-1 gap-8 py-8 md:grid-cols-12 md:py-12`}>
        <div className="relative min-w-0 md:col-span-8 md:overflow-visible">
          <article ref={articleRef} className="flex flex-col gap-8 md:overflow-visible">
            {audioUrl ? (
              <>
                <ArticleAudioHeroCard
                  title={passage.title}
                  imageUrl={imageUrl}
                  imageObjectPosition={imageObjectPosition}
                  audioUrl={audioUrl}
                  metaPill={source ?? metaLabel}
                  readMin={readMin}
                  topic={topic}
                  difficulty={difficulty}
                  deck={underTitleText || null}
                  deckTranslation={underTitleTranslation}
                  showDeckTranslation={showTranslation}
                />
                <ArticleCard className="overflow-hidden p-0">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={imageUrl}
                      alt=""
                      fill
                      className={`object-cover ${imageObjectPosition}`}
                      sizes="(max-width:768px) 100vw, 700px"
                    />
                  </div>
                </ArticleCard>
              </>
            ) : (
              <>
                <header className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-3 py-1 ${studySourcePillClassName}`}>
                      {metaLabel}
                    </span>
                    <LabelCaps>· {readMin} PHÚT ĐỌC</LabelCaps>
                  </div>
                  <h1 className="font-serif text-3xl font-bold leading-tight tracking-tight text-[#000001] md:text-[2.5rem]">
                    {passage.title}
                  </h1>
                  {underTitleText ? (
                    <ArticleDeckHook
                      text={underTitleText}
                      translation={underTitleTranslation}
                      showTranslation={showTranslation}
                    />
                  ) : null}
                </header>

                <ArticleCard className="overflow-hidden p-0">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={imageUrl}
                      alt=""
                      fill
                      className={`object-cover ${imageObjectPosition}`}
                      sizes="(max-width:768px) 100vw, 700px"
                      priority
                    />
                  </div>
                </ArticleCard>
              </>
            )}

            <ArticleBodyContent
              body={passage.body}
              deckText={passage.deckText}
              subheadline={subheadline}
              translationParagraphs={translationParagraphs}
              scrollContainerRef={scrollRef}
              showTranslation={showTranslation}
              onToggleTranslation={() => setShowTranslation((v) => !v)}
              deckInHeader={Boolean(deckHook)}
            />
          </article>
        </div>

        <aside className="flex flex-col gap-3 md:col-span-4">
          <ArticleCard className="p-6">
            <div className="flex items-center justify-between border-b border-[#E4E4E7] pb-3">
              <h3 className="flex items-center gap-2 font-serif text-lg font-semibold text-[#000001]">
                <BookOpen className="size-5 text-[#4b2876]" aria-hidden />
                Từ vựng quan trọng
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4b2876]">
                {vocabularyItems.length > 0 ? `${vocabularyItems.length} TỪ` : "—"}
              </span>
            </div>
            <ArticleVocabularyPanel
              words={vocabularyItems}
              flashcardsHref={flashcardsHref}
            />
          </ArticleCard>

          <ArticleCard className="bg-[#f3f0f8] p-6">
            <div className="flex items-center gap-2 border-b border-[#E4E4E7] pb-3">
              <CircleHelp className="size-5 text-[#4b2876]" aria-hidden />
              <h3 className="font-serif text-lg font-semibold text-[#000001]">Kiểm tra nhanh</h3>
            </div>
            <ArticleQuickCheckPanel
              articleId={articleId}
              pilotId={pilotId}
              quickCheckText={passage.quickCheckText}
              showTranslation={hasTranslation && showTranslation}
              examHref={examHref}
              onOpenExam={examHref ? openExamHref : undefined}
              questionsText={passage.questionsText}
              hasFullExam={hasFullExam}
            />
          </ArticleCard>

          <ArticleStreakPanel articleKey={articleId} isLoggedIn={isLoggedIn} />
        </aside>
      </main>

      {showDictionaryPopover && popoverAnchor && dictLookup ? (
        <DictionaryPopover
          anchor={popoverAnchor}
          lookup={dictLookup}
          loading={dictLoading}
          canAddWord={canAddWord}
          allowAddAnySelection
          decks={decks}
          onClose={closePopover}
        />
      ) : null}
      {loginPrompt ? (
        <StudyLoginPrompt
          title={loginPrompt.title}
          description={loginPrompt.description}
          oauthNext={loginPrompt.oauthNext}
          supabaseConfigured={supabaseConfigured}
          onClose={closeLoginPrompt}
        />
      ) : null}
    </div>
  );
}
