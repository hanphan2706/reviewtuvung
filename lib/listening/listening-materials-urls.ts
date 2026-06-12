/** URL + tên file — an toàn cho client (không dùng `fs`). */

const CAM19_AUDIO_FILE = /^Test[1-4] Part[1-4]\.mp3$/;
const TACTICS_BASIC_AUDIO_FILE = /^Unit\d{2}-Listening\d{2}\.mp3$/;

export function listeningPartAudioFileName(test: number, part: number): string {
  return `Test${test} Part${part}.mp3`;
}

export function tacticsBasicListeningAudioFileName(unit: number, listening: number): string {
  return `Unit${String(unit).padStart(2, "0")}-Listening${String(listening).padStart(2, "0")}.mp3`;
}

export function listeningPartAudioApiPath(test: number, part: number): string {
  const file = listeningPartAudioFileName(test, part);
  return `/api/listening/audio?file=${encodeURIComponent(file)}`;
}

export function tacticsBasicListeningAudioApiPath(unit: number, listening: number): string {
  const file = tacticsBasicListeningAudioFileName(unit, listening);
  return `/api/listening/audio?file=${encodeURIComponent(file)}`;
}

export function isAllowedListeningAudioFile(fileName: string): boolean {
  return CAM19_AUDIO_FILE.test(fileName) || TACTICS_BASIC_AUDIO_FILE.test(fileName);
}
