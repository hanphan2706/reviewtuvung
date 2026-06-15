import path from "node:path";

export const LISTENING_MATERIALS_ROOT = "listening materials";

export const LISTENING_AUDIO_CAM_SUBDIR = path.join(LISTENING_MATERIALS_ROOT, "Audio cam");

/** @deprecated Use `LISTENING_AUDIO_CAM_SUBDIR`. */
export const LISTENING_AUDIO_CAM19_SUBDIR = LISTENING_AUDIO_CAM_SUBDIR;

export const LISTENING_AUDIO_REAL_TEST_SUBDIR = path.join(LISTENING_MATERIALS_ROOT, "Audio real test");

/** @deprecated Prefer `LISTENING_AUDIO_CAM_SUBDIR` or `listeningAudioCandidates`. */
export const LISTENING_AUDIO_SUBDIR = LISTENING_AUDIO_CAM_SUBDIR;

export const LISTENING_AUDIO_TACTICS_BASIC_SUBDIR = path.join(
  LISTENING_MATERIALS_ROOT,
  "Audio tactics-basic",
);

const TACTICS_BASIC_AUDIO_FILE = /^Unit\d{2}-Listening\d{2}\.mp3$/;
const CAM_AUDIO_FILE = /^Test[1-4] Part[1-4]\.mp3$/;
const REAL_TEST_AUDIO_FILE = /^real test \d+\.mp3$/i;

function listeningAudioSubdirsForFile(fileName: string): string[] {
  if (TACTICS_BASIC_AUDIO_FILE.test(fileName)) {
    return [LISTENING_AUDIO_TACTICS_BASIC_SUBDIR, LISTENING_AUDIO_CAM_SUBDIR];
  }
  if (REAL_TEST_AUDIO_FILE.test(fileName)) {
    return [LISTENING_AUDIO_REAL_TEST_SUBDIR];
  }
  if (CAM_AUDIO_FILE.test(fileName)) {
    return [LISTENING_AUDIO_CAM_SUBDIR, LISTENING_AUDIO_TACTICS_BASIC_SUBDIR];
  }
  return [
    LISTENING_AUDIO_CAM_SUBDIR,
    LISTENING_AUDIO_REAL_TEST_SUBDIR,
    LISTENING_AUDIO_TACTICS_BASIC_SUBDIR,
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
