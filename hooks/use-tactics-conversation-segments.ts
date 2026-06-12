"use client";

import { useEffect, useState } from "react";
import type { ListeningTranscriptSyncFile } from "@/lib/listening/listening-transcript-sync-types";
import {
  buildTacticsConversationSegments,
  type TacticsConversationSegment,
} from "@/lib/listening/tactics-conversation-segments";
import { isTacticsListeningPartId } from "@/lib/listening/tactics-transcript-filter";

async function fetchTranscriptSync(partId: string): Promise<ListeningTranscriptSyncFile | null> {
  const res = await fetch(`/api/listening/transcript-sync?partId=${encodeURIComponent(partId)}`);
  if (!res.ok) return null;
  const data = (await res.json()) as ListeningTranscriptSyncFile & { missing?: boolean };
  if (data.missing || !data.cues?.length) return null;
  return data;
}

export function useTacticsConversationSegments(lessonId: string) {
  const [segments, setSegments] = useState<Map<number, TacticsConversationSegment>>(new Map());

  useEffect(() => {
    if (!isTacticsListeningPartId(lessonId)) {
      setSegments(new Map());
      return;
    }

    let cancelled = false;
    void fetchTranscriptSync(lessonId).then((sync) => {
      if (cancelled) return;
      setSegments(sync ? buildTacticsConversationSegments(sync.cues) : new Map());
    });

    return () => {
      cancelled = true;
    };
  }, [lessonId]);

  return segments;
}
