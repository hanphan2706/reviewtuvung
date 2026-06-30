/**
 * Sửa timeline cue trong sync JSON đã có (không chạy lại Whisper).
 *
 *   npx tsx scripts/repair-listening-sync-timelines.ts
 *   npx tsx scripts/repair-listening-sync-timelines.ts --exam cam20
 */
import fs from "node:fs";
import path from "node:path";
import { normalizeCueTimeline } from "../lib/listening/build-transcript-sync";
import { LISTENING_SYNC_SUBDIR } from "../lib/listening/listening-materials-paths";
import type { ListeningTranscriptSyncFile } from "../lib/listening/listening-transcript-sync-types";

function parseExam(argv: string[]): RegExp {
  const idx = argv.indexOf("--exam");
  if (idx >= 0 && argv[idx + 1]) {
    const slug = argv[idx + 1]!;
    return new RegExp(`^${slug}-`);
  }
  return /^cam(18|20)-/;
}

function isBadCue(cue: { start: number; end: number; text: string; preAudio?: boolean }): boolean {
  if (cue.preAudio) return false;
  const dur = cue.end - cue.start;
  const words = cue.text.trim().split(/\s+/).filter(Boolean).length;
  return dur < 0.3 && words > 8;
}

function main(): void {
  const pattern = parseExam(process.argv.slice(2));
  const dir = path.join(process.cwd(), LISTENING_SYNC_SUBDIR);
  const files = fs.readdirSync(dir).filter((f) => pattern.test(f) && f.endsWith(".sync.json"));

  let repaired = 0;
  let badBefore = 0;
  let badAfter = 0;

  for (const file of files.sort()) {
    const fullPath = path.join(dir, file);
    const sync = JSON.parse(fs.readFileSync(fullPath, "utf8")) as ListeningTranscriptSyncFile;
    badBefore += sync.cues.filter(isBadCue).length;

    sync.cues = normalizeCueTimeline(sync.cues, sync.durationSeconds);
    badAfter += sync.cues.filter(isBadCue).length;

    fs.writeFileSync(fullPath, `${JSON.stringify(sync, null, 2)}\n`, "utf8");
    repaired += 1;
    console.log(`Repaired ${file} (${sync.cues.length} cues)`);
  }

  console.log(`Done: ${repaired} files, bad cues ${badBefore} → ${badAfter}`);
}

main();
