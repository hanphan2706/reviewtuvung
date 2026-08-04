/**
 * Whisper → transcript + sync cho Basic IELTS Listening pilot.
 *
 *   npx tsx scripts/sync-basic-ielts-listening.ts --lesson basic-ielts-u01-places
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import {
  buildWhisperSegmentOnlyTranscriptSync,
  whisperSegmentsToPlainTranscript,
} from "../lib/listening/build-transcript-sync";
import {
  BASIC_IELTS_LISTENING_LESSONS,
  type BasicIeltsListeningLessonCatalog,
} from "../lib/listening/basic-ielts-listening-catalog";
import {
  LISTENING_AUDIO_BASIC_IELTS_SUBDIR,
  LISTENING_SYNC_SUBDIR,
  LISTENING_TRANSCRIPT_SUBDIR,
} from "../lib/listening/listening-materials-paths";
import {
  listeningWhisperWordsCachePath,
  whisperLocalTranscribe,
} from "../lib/listening/whisper-transcribe-local";

function probeDurationSeconds(audioPath: string): number {
  const out = execSync(
    `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${audioPath}"`,
    { encoding: "utf8" },
  ).trim();
  const n = Number.parseFloat(out);
  if (!Number.isFinite(n) || n <= 0) {
    throw new Error(`ffprobe failed for ${audioPath}`);
  }
  return n;
}

function parseArgs(argv: string[]): {
  lessons: BasicIeltsListeningLessonCatalog[];
  useCache: boolean;
} {
  let useCache = true;
  let lessonId: string | null = null;
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--no-cache") useCache = false;
    if (arg === "--lesson" && argv[i + 1]) lessonId = argv[i + 1]!;
  }
  if (lessonId) {
    const lesson = BASIC_IELTS_LISTENING_LESSONS.find((item) => item.partId === lessonId);
    if (!lesson) {
      throw new Error(
        `Unknown --lesson ${lessonId}. Available: ${BASIC_IELTS_LISTENING_LESSONS.map((l) => l.partId).join(", ")}`,
      );
    }
    return { lessons: [lesson], useCache };
  }
  return { lessons: [...BASIC_IELTS_LISTENING_LESSONS], useCache };
}

async function syncLesson(
  lesson: BasicIeltsListeningLessonCatalog,
  useCache: boolean,
): Promise<void> {
  const audioPath = path.join(process.cwd(), LISTENING_AUDIO_BASIC_IELTS_SUBDIR, lesson.audioFile);
  if (!fs.existsSync(audioPath)) {
    throw new Error(`Missing audio: ${audioPath} (extract ${lesson.bookAudioFile} → ${lesson.audioFile})`);
  }

  const durationSeconds = probeDurationSeconds(audioPath);
  console.log(`[bil] Whisper ${lesson.partId} ← ${lesson.audioFile} (${durationSeconds.toFixed(1)}s)`);
  const payload = await whisperLocalTranscribe(audioPath, {
    wordsCachePath: useCache ? listeningWhisperWordsCachePath(lesson.partId) : undefined,
  });
  if (payload.segments.length === 0) {
    throw new Error(`Whisper returned no segments for ${lesson.partId}`);
  }

  const plainTranscript = whisperSegmentsToPlainTranscript(payload.segments);
  const sync = buildWhisperSegmentOnlyTranscriptSync({
    partId: lesson.partId,
    audioFile: lesson.audioFile,
    durationSeconds,
    segments: payload.segments,
    method: "whisper-local",
  });

  const transcriptDir = path.join(process.cwd(), LISTENING_TRANSCRIPT_SUBDIR);
  const syncDir = path.join(process.cwd(), LISTENING_SYNC_SUBDIR);
  mkdirSync(transcriptDir, { recursive: true });
  mkdirSync(syncDir, { recursive: true });
  writeFileSync(
    path.join(transcriptDir, lesson.transcriptFile),
    plainTranscript.endsWith("\n") ? plainTranscript : `${plainTranscript}\n`,
  );
  writeFileSync(path.join(syncDir, `${lesson.partId}.sync.json`), `${JSON.stringify(sync, null, 2)}\n`);
  console.log(`  cues ${sync.cues.length} → ${lesson.transcriptFile} + ${lesson.partId}.sync.json`);
}

async function main(): Promise<void> {
  const { lessons, useCache } = parseArgs(process.argv.slice(2));
  for (const lesson of lessons) {
    await syncLesson(lesson, useCache);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
