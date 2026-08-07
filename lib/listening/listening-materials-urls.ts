/** URL + tên file — an toàn cho client (không dùng `fs`). */

const CAM_AUDIO_FILE = /^Test[1-4] Part[1-4]\.mp3$/;
const CAM18_AUDIO_FILE = /^Cam18 Test[1-4] Part[1-4]\.mp3$/i;
const CAM20_AUDIO_FILE = /^Cam20 Test[1-4] Part[1-4]\.mp3$/i;
const CAM21_AUDIO_FILE = /^cam21-test[1-4]-part[1-4]\.mp3$/i;
const CAM17_AUDIO_FILE = /^cam17-test[1-4]-part[1-4]\.mp3$/i;
const CAM16_AUDIO_FILE = /^cam16-test[1-4]-part[1-4]\.mp3$/i;
const CAM15_AUDIO_FILE = /^cam15-test[1-4]-part[1-4]\.mp3$/i;
const CAM14_AUDIO_FILE = /^cam14-test[1-4]-part[1-4]\.mp3$/i;
const TACTICS_BASIC_AUDIO_FILE = /^Unit\d{2}-Listening\d{2}\.mp3$/;
const BASIC_IELTS_AUDIO_FILE = /^bil-\d{2}\.mp3$/i;
const REAL_TEST_AUDIO_FILE = /^real test \d+\.mp3$/i;
const PINBALL_ENTRY_AUDIO_FILE = /^pinball-entry-part[1-4]\.mp3$/i;

export function listeningPartAudioFileName(examSlug: string, test: number, part: number): string {
  if (examSlug === "cam18") {
    return `Cam18 Test${test} Part${part}.mp3`;
  }
  if (examSlug === "cam20") {
    return `Cam20 Test${test} Part${part}.mp3`;
  }
  if (examSlug === "cam21") {
    return `cam21-test${test}-part${part}.mp3`;
  }
  if (examSlug === "cam17") {
    return `cam17-test${test}-part${part}.mp3`;
  }
  if (examSlug === "cam16") {
    return `cam16-test${test}-part${part}.mp3`;
  }
  if (examSlug === "cam15") {
    return `cam15-test${test}-part${part}.mp3`;
  }
  if (examSlug === "cam14") {
    return `cam14-test${test}-part${part}.mp3`;
  }
  return `Test${test} Part${part}.mp3`;
}

export function tacticsBasicListeningAudioFileName(unit: number, listening: number): string {
  return `Unit${String(unit).padStart(2, "0")}-Listening${String(listening).padStart(2, "0")}.mp3`;
}

export function listeningPartAudioApiPath(examSlug: string, test: number, part: number): string {
  const file = listeningPartAudioFileName(examSlug, test, part);
  return `/api/listening/audio?file=${encodeURIComponent(file)}`;
}

export function tacticsBasicListeningAudioApiPath(unit: number, listening: number): string {
  const file = tacticsBasicListeningAudioFileName(unit, listening);
  return `/api/listening/audio?file=${encodeURIComponent(file)}`;
}

export function basicIeltsListeningAudioApiPath(audioFile: string): string {
  return `/api/listening/audio?file=${encodeURIComponent(audioFile)}`;
}

export function realTestListeningAudioFileName(seriesNumber: number): string {
  return `real test ${seriesNumber}.mp3`;
}

export function realTestListeningAudioApiPath(seriesNumber: number): string {
  const file = realTestListeningAudioFileName(seriesNumber);
  return `/api/listening/audio?file=${encodeURIComponent(file)}`;
}

export function pinballEntryListeningAudioFileName(part: number): string {
  return `pinball-entry-part${part}.mp3`;
}

export function pinballEntryListeningAudioApiPath(part: number): string {
  const file = pinballEntryListeningAudioFileName(part);
  return `/api/listening/audio?file=${encodeURIComponent(file)}`;
}

export function isAllowedListeningAudioFile(fileName: string): boolean {
  return (
    CAM_AUDIO_FILE.test(fileName) ||
    CAM18_AUDIO_FILE.test(fileName) ||
    CAM20_AUDIO_FILE.test(fileName) ||
    CAM21_AUDIO_FILE.test(fileName) ||
    CAM17_AUDIO_FILE.test(fileName) ||
    CAM16_AUDIO_FILE.test(fileName) ||
    CAM15_AUDIO_FILE.test(fileName) ||
    CAM14_AUDIO_FILE.test(fileName) ||
    TACTICS_BASIC_AUDIO_FILE.test(fileName) ||
    BASIC_IELTS_AUDIO_FILE.test(fileName) ||
    REAL_TEST_AUDIO_FILE.test(fileName) ||
    PINBALL_ENTRY_AUDIO_FILE.test(fileName)
  );
}

export function listeningMapImageApiPath(fileName: string): string {
  return `/api/listening/image?file=${encodeURIComponent(fileName)}`;
}
