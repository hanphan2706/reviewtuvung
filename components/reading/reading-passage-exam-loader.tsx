"use client";

import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ReadingPassageExam } from "@/components/reading/reading-passage-exam";
import type { ReadingPilotId } from "@/lib/reading/hub-articles";
import type { ReadingPassageBlock } from "@/lib/reading/split-passages";

type ReadingPassageExamLoaderProps = {
  pilotId: ReadingPilotId;
  passageNumber: number;
  title: string;
  backHref: string;
};

export function ReadingPassageExamLoader({
  pilotId,
  passageNumber,
  title,
  backHref,
}: ReadingPassageExamLoaderProps) {
  const [loading, setLoading] = useState(true);
  const [passage, setPassage] = useState<ReadingPassageBlock | null>(null);

  useEffect(() => {
    let cancelled = false;
    void fetch(
      `/api/reading/raw?id=${encodeURIComponent(pilotId)}&passage=${passageNumber}`,
      { credentials: "include" },
    )
      .then((r) => r.json())
      .then((data: { passages?: ReadingPassageBlock[]; missing?: boolean }) => {
        if (cancelled) return;
        setLoading(false);
        const hit = data.passages?.find((p) => p.passage === passageNumber) ?? data.passages?.[0] ?? null;
        setPassage(hit ?? null);
      })
      .catch(() => {
        if (!cancelled) {
          setLoading(false);
          setPassage(null);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [pilotId, passageNumber]);

  if (loading) {
    return (
      <p className="flex items-center justify-center gap-2 py-24 text-sm text-[#47464b]">
        <Loader2 className="size-5 animate-spin" aria-hidden />
        Đang tải đề bài…
      </p>
    );
  }

  if (!passage?.hasExamQuestions) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <p className="text-sm text-[#47464b]">Không tìm thấy câu hỏi cho passage này trong file .txt.</p>
        <Link href={backHref} className="mt-4 inline-block text-sm font-semibold text-[#4b2876] underline">
          Quay lại bài đọc
        </Link>
      </div>
    );
  }

  return <ReadingPassageExam passage={passage} title={title} backHref={backHref} />;
}
