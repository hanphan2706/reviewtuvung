import { execSync } from "node:child_process";
import fs from "node:fs";
import type { WhisperSegment } from "@/lib/listening/build-transcript-sync";
import type { ListeningTranscriptSyncFile } from "@/lib/listening/listening-transcript-sync-types";
import {
  filterTacticsTranscriptSync,
  filterTacticsWhisperSegments,
} from "@/lib/listening/tactics-transcript-filter";

const MIN_TRIM_SECONDS = 0.25;

export function tacticsFullAudioFileName(trimmedFileName: string): string {
  return trimmedFileName.replace(/\.mp3$/i, ".full.mp3");
}

/** Mốc cắt = thời điểm bắt đầu segment đầu tiên sau metadata Unit/Page. */
export function tacticsIntroTrimStartSeconds(segments: readonly WhisperSegment[]): number {
  const firstContent = filterTacticsWhisperSegments(segments)[0];
  if (!firstContent) return 0;
  return firstContent.start >= MIN_TRIM_SECONDS ? firstContent.start : 0;
}

export function shiftWhisperSegments(
  segments: readonly WhisperSegment[],
  offsetSeconds: number,
): WhisperSegment[] {
  if (offsetSeconds <= 0) return [...segments];
  return segments.map((segment) => ({
    ...segment,
    start: Math.max(0, segment.start - offsetSeconds),
    end: Math.max(0, segment.end - offsetSeconds),
  }));
}

export function probeAudioDurationSeconds(audioPath: string): number {
  const out = execSync(
    `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${audioPath}"`,
    { encoding: "utf8" },
  ).trim();
  const duration = Number.parseFloat(out);
  if (!Number.isFinite(duration) || duration <= 0) {
    throw new Error(`ffprobe không đọc được duration: ${audioPath}`);
  }
  return duration;
}

/** Cắt bỏ intro sách ở đầu file — ghi đè `outputPath`. */
export function trimTacticsAudioFile(
  inputPath: string,
  outputPath: string,
  startSeconds: number,
): number {
  if (startSeconds < MIN_TRIM_SECONDS) {
    if (inputPath !== outputPath) {
      fs.copyFileSync(inputPath, outputPath);
    }
    return probeAudioDurationSeconds(outputPath);
  }

  const tempPath = `${outputPath}.trim.tmp.mp3`;
  execSync(
    `ffmpeg -y -ss ${startSeconds.toFixed(3)} -i "${inputPath}" -acodec libmp3lame -q:a 2 "${tempPath}"`,
    { stdio: "pipe" },
  );
  fs.renameSync(tempPath, outputPath);
  return probeAudioDurationSeconds(outputPath);
}

export function applyTacticsAudioTrimToSync(
  sync: ListeningTranscriptSyncFile,
  trimSeconds: number,
): ListeningTranscriptSyncFile {
  if (trimSeconds < MIN_TRIM_SECONDS) {
    return filterTacticsTranscriptSync(sync);
  }

  const trimmedDuration = Math.max(0, sync.durationSeconds - trimSeconds);
  const cues = sync.cues
    .filter((cue) => cue.start >= trimSeconds - 0.05)
    .map((cue) => ({
      ...cue,
      start: Math.max(0, cue.start - trimSeconds),
      end: Math.max(0, cue.end - trimSeconds),
    }));

  return filterTacticsTranscriptSync({
    ...sync,
    durationSeconds: trimmedDuration,
    cues,
  });
}
