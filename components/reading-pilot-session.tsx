"use client";

import { Loader2 } from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import { ArticleReader } from "@/components/reading/article-reader";
import { readingArticleHrefById } from "@/lib/reading/article-routes";
import {
  getReadingHubArticle,
  isCompassPublishingPilot,
  readingArticleMetaLabel,
  type ReadingPilotId,
} from "@/lib/reading/hub-articles";
import { subheadlineFromBody } from "@/lib/reading/article-lead";
import { resolveReadingArticleAudio } from "@/lib/reading/passage-audio";
import { resolveReadingArticleImage } from "@/lib/reading/passage-media";
import type { PassageVocabItem } from "@/lib/reading/passage-vocabulary";
import type { ReadingPassageBlock } from "@/lib/reading/split-passages";

type ReadingPilotSessionProps = {
  pilotId: ReadingPilotId;
  initialPassageIndex?: number;
  /** Đã tải trên server — bỏ round-trip /api/reading/raw khi mở bài. */
  initialPassage?: ReadingPassageBlock | null;
  vocabularyItems?: PassageVocabItem[];
  translationParagraphs?: string[] | null;
  isLoggedIn?: boolean;
  supabaseConfigured?: boolean;
  onBack: () => void;
};

export function ReadingPilotSession({
  pilotId,
  initialPassageIndex = 0,
  initialPassage = null,
  vocabularyItems = [],
  translationParagraphs = null,
  isLoggedIn = false,
  supabaseConfigured = true,
  onBack,
}: ReadingPilotSessionProps) {
  const [loading, setLoading] = useState(!initialPassage);
  const [missing, setMissing] = useState(false);
  const [passages, setPassages] = useState<ReadingPassageBlock[]>(
    initialPassage ? [initialPassage] : [],
  );
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (initialPassage) {
      setLoading(false);
      setMissing(false);
      setPassages([initialPassage]);
      setActive(0);
      return;
    }

    let cancelled = false;
    setLoading(true);
    const passageNum = initialPassageIndex + 1;
    void fetch(`/api/reading/raw?id=${encodeURIComponent(pilotId)}&passage=${passageNum}`, {
      credentials: "include",
    })
      .then((r) => r.json())
      .then((data: { passages?: ReadingPassageBlock[]; missing?: boolean }) => {
        if (cancelled) return;
        setLoading(false);
        if (data.missing || !data.passages?.length) {
          setMissing(true);
          setPassages([]);
          return;
        }
        setMissing(false);
        setPassages(data.passages);
        const idx = Math.min(
          Math.max(0, initialPassageIndex),
          Math.max(0, data.passages.length - 1),
        );
        setActive(idx);
      })
      .catch(() => {
        if (cancelled) return;
        setLoading(false);
        setMissing(true);
      });
    return () => {
      cancelled = true;
    };
  }, [pilotId, initialPassageIndex, initialPassage]);

  const current = passages[active];
  const hubMeta = current ? getReadingHubArticle(pilotId, current.passage) : undefined;

  if (loading) {
    return (
      <p className="flex items-center justify-center gap-2 py-20 text-sm text-[#47464b]">
        <Loader2 className="size-5 animate-spin" aria-hidden />
        Đang tải bài đọc…
      </p>
    );
  }

  if (missing || !current) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16">
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
          <p className="font-medium">Chưa đọc được file.</p>
          <p className="mt-2">
            Đặt file trong <code className="rounded bg-white px-1.5 py-0.5">reading raw/</code> (ví dụ{" "}
            <code className="rounded bg-white px-1.5 py-0.5">cam 20 test 1.txt</code>) rồi tải lại trang.
          </p>
          <button type="button" onClick={onBack} className="mt-4 text-sm font-semibold text-[#4b2876] underline">
            Về Luyện đọc
          </button>
        </div>
      </div>
    );
  }

  const articleId = hubMeta?.id ?? `${pilotId}-p${current.passage}`;
  /** Qua /lam-bai để server redirect luôn gắn skipLogin — tránh mất query khi mở bài khác. */
  const useIeltsExam = current.hasExamQuestions && !isCompassPublishingPilot(pilotId);
  const examHref = useIeltsExam ? `${readingArticleHrefById(articleId)}/lam-bai` : null;

  return (
    <Suspense fallback={<p className="py-20 text-center text-sm text-[#47464b]">Đang tải bài đọc…</p>}>
      <ArticleReader
        key={articleId}
        passage={current}
        metaLabel={hubMeta ? readingArticleMetaLabel(hubMeta) : "IELTS Cambridge"}
        subheadline={hubMeta?.subheadline ?? subheadlineFromBody(current.body)}
        imageUrl={resolveReadingArticleImage(articleId, current)}
        audioUrl={resolveReadingArticleAudio(articleId, current)}
        edition={hubMeta?.edition}
        source={hubMeta?.source}
        topic={hubMeta?.topic}
        difficulty={hubMeta?.difficulty}
        articleId={articleId}
        pilotId={pilotId}
        vocabularyItems={vocabularyItems}
        translationParagraphs={translationParagraphs}
        examHref={examHref}
        hasFullExam={useIeltsExam}
        isLoggedIn={isLoggedIn}
        supabaseConfigured={supabaseConfigured}
      />
    </Suspense>
  );
}
