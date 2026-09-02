import fs from "node:fs";
import path from "node:path";
import type { ListeningTranscriptSyncFile } from "@/lib/listening/listening-transcript-sync-types";
import { LISTENING_SYNC_SUBDIR } from "@/lib/listening/listening-materials-paths";
import type { RealExamSlug } from "@/lib/exam/real-exam-catalog";

const SYNC_FILES: Partial<Record<RealExamSlug, string>> = {
  "de-thi-that-1": "real-test-1.sync.json",
  "de-thi-that-2": "real-test-2.sync.json",
  "de-thi-that-3": "real-test-3.sync.json",
  "de-thi-that-4": "real-test-4.sync.json",
};

export function loadRealExamTranscriptSync(slug: RealExamSlug): ListeningTranscriptSyncFile | null {
  const fileName = SYNC_FILES[slug];
  if (!fileName) return null;

  const filePath = path.join(process.cwd(), LISTENING_SYNC_SUBDIR, fileName);
  if (!fs.existsSync(filePath)) return null;

  try {
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw) as ListeningTranscriptSyncFile;
  } catch {
    return null;
  }
}
