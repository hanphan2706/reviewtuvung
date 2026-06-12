"use client";

import { useState } from "react";
import { Languages } from "lucide-react";
import { ListeningTranscriptPanel, type ListeningTranscriptPanelProps } from "@/components/listening/listening-transcript-panel";

export function ListeningTranscriptCard(props: ListeningTranscriptPanelProps) {
  const [hasSync, setHasSync] = useState(false);

  return (
    <section className="overflow-hidden rounded-xl border border-[#E4E4E7] bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-[#E4E4E7] px-5 py-4 md:px-6">
        <div className="flex items-center gap-2">
          <Languages className="h-4 w-4 text-[#616365]" aria-hidden />
          <h2 className="font-serif text-base font-semibold text-[#000001] md:text-lg">
            Bản dịch trực tiếp
          </h2>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#616365]">
          <span
            className={`size-1.5 rounded-full ${hasSync ? "bg-[#4b2876] animate-pulse" : "bg-zinc-300"}`}
            aria-hidden
          />
          {hasSync ? "Đồng bộ" : "Chưa có mốc thời gian"}
        </span>
      </div>

      <div className="px-5 py-4 md:px-6">
        <ListeningTranscriptPanel {...props} variant="card" onSyncStatusChange={setHasSync} />
      </div>
    </section>
  );
}
