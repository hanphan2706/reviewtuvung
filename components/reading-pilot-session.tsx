"use client";

import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { ArticleReader } from "@/components/reading/article-reader";
import {
  getReadingHubArticle,
  readingArticleDifficultyLabel,
  readingArticleMetaLabel,
  type ReadingPilotId,
} from "@/lib/reading/hub-articles";
import { subheadlineFromBody } from "@/lib/reading/article-lead";
import { readingArticleImage } from "@/lib/reading/passage-media";
import type { ReadingPassageBlock } from "@/lib/reading/split-passages";

type ReadingPilotSessionProps = {
  pilotId: ReadingPilotId;
  initialPassageIndex?: number;
  onBack: () => void;
};

export function ReadingPilotSession({
  pilotId,
  initialPassageIndex = 0,
  onBack,
}: ReadingPilotSessionProps) {
  const [loading, setLoading] = useState(true);
  const [missing, setMissing] = useState(false);
  const [passages, setPassages] = useState<ReadingPassageBlock[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    void fetch(`/api/reading/raw?id=${encodeURIComponent(pilotId)}`, { credentials: "include" })
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
  }, [pilotId, initialPassageIndex]);

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

  return (
    <ArticleReader
      passage={current}
      metaLabel={hubMeta ? readingArticleMetaLabel(hubMeta) : "IELTS Cambridge"}
      subheadline={hubMeta?.subheadline ?? subheadlineFromBody(current.body)}
      imageUrl={hubMeta?.imageUrl ?? readingArticleImage(`${pilotId}-p${current.passage}`, current.passage)}
      edition={hubMeta ? readingArticleDifficultyLabel(hubMeta) : undefined}
      onBack={onBack}
    />
  );
}
