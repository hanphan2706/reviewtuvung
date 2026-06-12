import "server-only";

import fs from "node:fs";
import path from "node:path";
import { LISTENING_PARTS_PILOT } from "@/lib/listening/content-manifest";
import { LISTENING_SYNC_SUBDIR } from "@/lib/listening/listening-materials-paths";
import type { ListeningTranscriptSyncFile } from "@/lib/listening/listening-transcript-sync-types";
import {
  filterTacticsTranscriptSync,
  isTacticsListeningPartId,
} from "@/lib/listening/tactics-transcript-filter";

export { LISTENING_SYNC_SUBDIR };

const ALLOWED_PART_IDS = new Set(LISTENING_PARTS_PILOT.map((p) => p.id));

export function isAllowedListeningSyncPartId(partId: string): boolean {
  return ALLOWED_PART_IDS.has(partId);
}

export function resolveListeningSyncPath(partId: string): string | null {
  if (!isAllowedListeningSyncPartId(partId)) return null;
  const p = path.join(process.cwd(), LISTENING_SYNC_SUBDIR, `${partId}.sync.json`);
  return fs.existsSync(p) ? p : null;
}

export function readListeningSyncFile(partId: string): ListeningTranscriptSyncFile | null {
  const filePath = resolveListeningSyncPath(partId);
  if (!filePath) return null;
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const sync = JSON.parse(raw) as ListeningTranscriptSyncFile;
    return isTacticsListeningPartId(partId) ? filterTacticsTranscriptSync(sync) : sync;
  } catch {
    return null;
  }
}
