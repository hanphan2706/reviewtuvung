/**
 * Whisper → transcript + sync cho Tactics for Listening Basic (chỉ audio, không PDF).
 * Tự cắt intro sách (Unit/Page) khỏi file phát — giữ bản `.full.mp3` để build lại.
 *
 *   npm run listening:sync-tactics
 *   npm run listening:sync-tactics -- --lesson tactics-basic-u01-l02
 *
 * Cài Whisper local (một lần):
 *   python3 -m venv .venv-listening && source .venv-listening/bin/activate
 *   pip install -r scripts/requirements-listening-whisper.txt
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import path from "node:path";
import {
  buildWhisperSegmentOnlyTranscriptSync,
  whisperSegmentsToPlainTranscript,
} from "../lib/listening/build-transcript-sync";
import {
  probeAudioDurationSeconds,
  shiftWhisperSegments,
  tacticsFullAudioFileName,
  tacticsIntroTrimStartSeconds,
  trimTacticsAudioFile,
} from "../lib/listening/tactics-audio-trim";
import {
  LISTENING_MATERIALS_ROOT,
  LISTENING_AUDIO_TACTICS_BASIC_SUBDIR,
  LISTENING_SYNC_SUBDIR,
  LISTENING_TRANSCRIPT_SUBDIR,
} from "../lib/listening/listening-materials-paths";
import { tacticsBasicListeningAudioFileName } from "../lib/listening/listening-materials-urls";
import {
  TACTICS_BASIC_LESSONS,
  type TacticsBasicLessonCatalog,
  tacticsBasicZipEntryForLesson,
} from "../lib/listening/tactics-basic-catalog";
import { filterTacticsWhisperSegments } from "../lib/listening/tactics-transcript-filter";
import {
  listeningWhisperWordsCachePath,
  whisperLocalTranscribe,
} from "../lib/listening/whisper-transcribe-local";

const TACTICS_ZIP_PATH = path.join(
  process.cwd(),
  LISTENING_MATERIALS_ROOT,
  "Tactics For Listening 3rd-Basic-SB-Audio.zip",
);

function extractTacticsTrackFromZip(lesson: TacticsBasicLessonCatalog, targetPath: string): void {
  if (!fs.existsSync(TACTICS_ZIP_PATH)) {
    throw new Error(`Không tìm thấy zip: ${TACTICS_ZIP_PATH}`);
  }

  const outDir = path.dirname(targetPath);
  mkdirSync(outDir, { recursive: true });

  const zipEntry = tacticsBasicZipEntryForLesson(lesson);
  execSync(`unzip -j -o "${TACTICS_ZIP_PATH}" "${zipEntry}" -d "${outDir}"`, {
    stdio: "pipe",
  });

  const trackPrefix = `${String(lesson.zipTrack).padStart(2, "0")})`;
  const extractedName = fs
    .readdirSync(outDir)
    .find((name) => name.startsWith(trackPrefix) && name.endsWith(".mp3") && !name.endsWith(".full.mp3"));
  if (!extractedName) {
    throw new Error(`Giải nén thất bại: ${zipEntry}`);
  }

  const extractedPath = path.join(outDir, extractedName);
  if (extractedPath !== targetPath) {
    if (fs.existsSync(targetPath)) fs.unlinkSync(targetPath);
    renameSync(extractedPath, targetPath);
  }
}

function ensureTacticsFullAudio(lesson: TacticsBasicLessonCatalog): {
  fullPath: string;
  trimmedPath: string;
  audioFile: string;
} {
  const audioFile = tacticsBasicListeningAudioFileName(lesson.unit, lesson.listening);
  const outDir = path.join(process.cwd(), LISTENING_AUDIO_TACTICS_BASIC_SUBDIR);
  const trimmedPath = path.join(outDir, audioFile);
  const fullPath = path.join(outDir, tacticsFullAudioFileName(audioFile));

  if (!fs.existsSync(fullPath)) {
    if (fs.existsSync(trimmedPath)) {
      fs.copyFileSync(trimmedPath, fullPath);
      console.log(`  archived   → ${fullPath} (từ bản phát hiện có)`);
    } else {
      extractTacticsTrackFromZip(lesson, fullPath);
      console.log(`  extracted  → ${fullPath}`);
    }
  }

  return { fullPath, trimmedPath, audioFile };
}

function parseArgs(argv: string[]): { lessons: TacticsBasicLessonCatalog[]; useCache: boolean } {
  let useCache = true;
  let lessonId: string | null = null;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--no-cache") useCache = false;
    if (arg === "--lesson" && argv[i + 1]) lessonId = argv[i + 1]!;
  }

  if (lessonId) {
    const lesson = TACTICS_BASIC_LESSONS.find((item) => item.partId === lessonId);
    if (!lesson) {
      throw new Error(
        `Unknown --lesson ${lessonId}. Available: ${TACTICS_BASIC_LESSONS.map((l) => l.partId).join(", ")}`,
      );
    }
    return { lessons: [lesson], useCache };
  }

  return { lessons: [...TACTICS_BASIC_LESSONS], useCache };
}

async function syncTacticsLesson(lesson: TacticsBasicLessonCatalog, useCache: boolean): Promise<void> {
  const { fullPath, trimmedPath, audioFile } = ensureTacticsFullAudio(lesson);
  const cachePath = useCache ? listeningWhisperWordsCachePath(lesson.partId) : undefined;

  console.log(`[tactics] Whisper ${lesson.partId} ← ${path.basename(fullPath)}`);
  const { segments } = await whisperLocalTranscribe(fullPath, { wordsCachePath: cachePath });
  if (segments.length === 0) {
    throw new Error(`Whisper không trả segment nào cho ${lesson.partId}`);
  }

  const trimStart = tacticsIntroTrimStartSeconds(segments);
  const filteredSegments = filterTacticsWhisperSegments(segments);
  if (filteredSegments.length === 0) {
    throw new Error(`Sau khi lọc metadata sách, không còn segment nào cho ${lesson.partId}`);
  }

  const shiftedSegments = shiftWhisperSegments(filteredSegments, trimStart);
  const durationSeconds = trimTacticsAudioFile(fullPath, trimmedPath, trimStart);
  if (trimStart >= 0.25) {
    console.log(`  trimmed    → ${trimmedPath} (bỏ ${trimStart.toFixed(2)}s intro, còn ${durationSeconds.toFixed(1)}s)`);
  }

  const plainTranscript = whisperSegmentsToPlainTranscript(shiftedSegments);
  const sync = buildWhisperSegmentOnlyTranscriptSync({
    partId: lesson.partId,
    audioFile,
    durationSeconds,
    segments: shiftedSegments,
    method: "whisper-local",
  });

  const transcriptDir = path.join(process.cwd(), LISTENING_TRANSCRIPT_SUBDIR);
  const syncDir = path.join(process.cwd(), LISTENING_SYNC_SUBDIR);
  mkdirSync(transcriptDir, { recursive: true });
  mkdirSync(syncDir, { recursive: true });

  const transcriptPath = path.join(transcriptDir, lesson.transcriptFile);
  const syncPath = path.join(syncDir, `${lesson.partId}.sync.json`);

  writeFileSync(transcriptPath, `${plainTranscript.trim()}\n`, "utf8");
  writeFileSync(syncPath, `${JSON.stringify(sync, null, 2)}\n`, "utf8");

  console.log(`  transcript → ${transcriptPath} (${plainTranscript.split("\n").length} lines)`);
  console.log(`  sync       → ${syncPath} (${sync.cues.length} cues, ${durationSeconds.toFixed(1)}s)`);
}

async function main(): Promise<void> {
  const { lessons, useCache } = parseArgs(process.argv.slice(2));
  for (const lesson of lessons) {
    await syncTacticsLesson(lesson, useCache);
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
