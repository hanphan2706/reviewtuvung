import {
  applyCopyFriction,
  shouldApplyCopyFriction,
} from "@/lib/content/copy-friction";

const TIMESTAMP_PREFIX = /^\d{1,2}:\d{2}\s*/;
const SPEAKER_PREFIX = /^[A-Z][A-Z'\s]{0,22}:\s*/;

/** Bỏ mốc thời gian / nhãn người nói trước khi làm bẩn clipboard. */
export function preprocessListeningCopySelection(raw: string): string {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  const cleaned = lines
    .map((line) => {
      let t = line.trim();
      t = t.replace(TIMESTAMP_PREFIX, "");
      t = t.replace(SPEAKER_PREFIX, "");
      return t.trim();
    })
    .filter(Boolean);

  return cleaned.join("\n");
}

export function shouldApplyListeningCopyFriction(raw: string): boolean {
  return shouldApplyCopyFriction(preprocessListeningCopySelection(raw));
}

export function applyListeningCopyFriction(raw: string): string {
  return applyCopyFriction(preprocessListeningCopySelection(raw));
}
