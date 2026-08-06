import path from "node:path";

export const LISTENING_MATERIALS_ROOT = "listening materials";

export const LISTENING_AUDIO_CAM_SUBDIR = path.join(LISTENING_MATERIALS_ROOT, "Audio cam");

export const LISTENING_AUDIO_CAM18_SUBDIR = path.join(LISTENING_MATERIALS_ROOT, "Audio cam 18");

export const LISTENING_AUDIO_CAM20_SUBDIR = path.join(LISTENING_MATERIALS_ROOT, "Audio cam 20");

export const LISTENING_AUDIO_CAM16_SUBDIR = path.join(LISTENING_MATERIALS_ROOT, "Audio cam 16");

export const LISTENING_AUDIO_CAM15_SUBDIR = path.join(LISTENING_MATERIALS_ROOT, "Audio cam 15");

/** @deprecated Use `LISTENING_AUDIO_CAM_SUBDIR`. */
export const LISTENING_AUDIO_CAM19_SUBDIR = LISTENING_AUDIO_CAM_SUBDIR;

export const LISTENING_AUDIO_REAL_TEST_SUBDIR = path.join(LISTENING_MATERIALS_ROOT, "Audio real test");

/** @deprecated Prefer `LISTENING_AUDIO_CAM_SUBDIR` or `listeningAudioCandidates`. */
export const LISTENING_AUDIO_SUBDIR = LISTENING_AUDIO_CAM_SUBDIR;

export const LISTENING_AUDIO_TACTICS_BASIC_SUBDIR = path.join(
  LISTENING_MATERIALS_ROOT,
  "Audio tactics-basic",
);

export const LISTENING_AUDIO_BASIC_IELTS_SUBDIR = path.join(
  LISTENING_MATERIALS_ROOT,
  "Audio basic-ielts-listening",
);

/** Thư mục quét khi upload / nén MP3 lên Supabase (khớp thứ tự ưu tiên resolve local). */
export const LISTENING_AUDIO_UPLOAD_SOURCE_SUBDIRS = [
  LISTENING_AUDIO_CAM18_SUBDIR,
  LISTENING_AUDIO_CAM20_SUBDIR,
  LISTENING_AUDIO_CAM16_SUBDIR,
  LISTENING_AUDIO_CAM15_SUBDIR,
  LISTENING_AUDIO_CAM_SUBDIR,
  LISTENING_AUDIO_REAL_TEST_SUBDIR,
  LISTENING_AUDIO_TACTICS_BASIC_SUBDIR,
  LISTENING_AUDIO_BASIC_IELTS_SUBDIR,
] as const;

export function listeningAudioUploadSourceDirs(cwd: string = process.cwd()): string[] {
  return LISTENING_AUDIO_UPLOAD_SOURCE_SUBDIRS.map((subdir) => path.join(cwd, subdir));
}

const TACTICS_BASIC_AUDIO_FILE = /^Unit\d{2}-Listening\d{2}\.mp3$/;
const BASIC_IELTS_AUDIO_FILE = /^bil-\d{2}\.mp3$/i;
const CAM_AUDIO_FILE = /^Test[1-4] Part[1-4]\.mp3$/;
const CAM18_AUDIO_FILE = /^Cam18 Test[1-4] Part[1-4]\.mp3$/i;
const CAM20_AUDIO_FILE = /^Cam20 Test[1-4] Part[1-4]\.mp3$/i;
const CAM21_AUDIO_FILE = /^cam21-test[1-4]-part[1-4]\.mp3$/i;
const CAM17_AUDIO_FILE = /^cam17-test[1-4]-part[1-4]\.mp3$/i;
const CAM16_AUDIO_FILE = /^cam16-test[1-4]-part[1-4]\.mp3$/i;
const CAM15_AUDIO_FILE = /^cam15-test[1-4]-part[1-4]\.mp3$/i;
const REAL_TEST_AUDIO_FILE = /^real test \d+\.mp3$/i;
const PINBALL_ENTRY_AUDIO_FILE = /^pinball-entry-part[1-4]\.mp3$/i;

function listeningAudioSubdirsForFile(fileName: string): string[] {
  if (PINBALL_ENTRY_AUDIO_FILE.test(fileName)) {
    return [LISTENING_AUDIO_CAM_SUBDIR];
  }
  if (TACTICS_BASIC_AUDIO_FILE.test(fileName)) {
    return [LISTENING_AUDIO_TACTICS_BASIC_SUBDIR, LISTENING_AUDIO_CAM_SUBDIR];
  }
  if (BASIC_IELTS_AUDIO_FILE.test(fileName)) {
    return [LISTENING_AUDIO_BASIC_IELTS_SUBDIR];
  }
  if (REAL_TEST_AUDIO_FILE.test(fileName)) {
    return [LISTENING_AUDIO_REAL_TEST_SUBDIR];
  }
  if (CAM18_AUDIO_FILE.test(fileName)) {
    return [LISTENING_AUDIO_CAM18_SUBDIR, LISTENING_AUDIO_CAM_SUBDIR];
  }
  if (CAM20_AUDIO_FILE.test(fileName)) {
    return [LISTENING_AUDIO_CAM20_SUBDIR, LISTENING_AUDIO_CAM_SUBDIR];
  }
  if (CAM16_AUDIO_FILE.test(fileName)) {
    return [LISTENING_AUDIO_CAM16_SUBDIR, LISTENING_AUDIO_CAM_SUBDIR];
  }
  if (CAM15_AUDIO_FILE.test(fileName)) {
    return [LISTENING_AUDIO_CAM15_SUBDIR, LISTENING_AUDIO_CAM_SUBDIR];
  }
  if (CAM21_AUDIO_FILE.test(fileName) || CAM17_AUDIO_FILE.test(fileName)) {
    return [LISTENING_AUDIO_CAM_SUBDIR];
  }
  if (CAM_AUDIO_FILE.test(fileName)) {
    return [LISTENING_AUDIO_CAM_SUBDIR, LISTENING_AUDIO_TACTICS_BASIC_SUBDIR];
  }
  return [
    LISTENING_AUDIO_CAM_SUBDIR,
    LISTENING_AUDIO_REAL_TEST_SUBDIR,
    LISTENING_AUDIO_TACTICS_BASIC_SUBDIR,
    LISTENING_AUDIO_BASIC_IELTS_SUBDIR,
  ];
}

export const LISTENING_TRANSCRIPT_SUBDIR = path.join(LISTENING_MATERIALS_ROOT, "transcript");

export const LISTENING_SYNC_SUBDIR = path.join(LISTENING_MATERIALS_ROOT, "sync");

export function listeningAudioCandidates(fileName: string): string[] {
  return [
    ...listeningAudioSubdirsForFile(fileName).map((subdir) =>
      path.join(process.cwd(), subdir, fileName),
    ),
    path.join(process.cwd(), "public", "listening-assets", "cam19", fileName),
  ];
}

export function listeningTranscriptCandidates(fileName: string): string[] {
  return [
    path.join(process.cwd(), LISTENING_TRANSCRIPT_SUBDIR, fileName),
    path.join(process.cwd(), "transcript", fileName),
  ];
}
