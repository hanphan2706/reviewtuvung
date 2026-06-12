/** Một dòng thoại đã gán mốc thời gian (giây). */
export type ListeningTranscriptCue = {
  id: string;
  speaker: string | null;
  text: string;
  start: number;
  end: number;
  /**
   * Dòng có trong transcript nhưng chưa khớp audio (vd. intro IELTS / đọc đề trước khi vào thoại).
   * UI bỏ qua khi highlight theo `currentTime`.
   */
  preAudio?: boolean;
};

export type ListeningTranscriptSyncFile = {
  version: 1;
  partId: string;
  audioFile: string;
  durationSeconds: number;
  /** proportional | whisper-local (build) | whisper-api (legacy build) */
  method: "proportional" | "whisper-local" | "whisper-api";
  cues: ListeningTranscriptCue[];
  /** Mốc neo thủ công sau khi căn intro IELTS. */
  anchor?: { text: string; atSeconds: number; cueId: string };
  /** Thời gian intro + đọc đề trước đoạn thoại đầu tiên trong file audio. */
  preambleSeconds?: number;
};
