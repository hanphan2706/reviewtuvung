const SPEAKER_WITH_COLON = /^([A-Z][A-Z'\s]{1,22}):\s*(.*)$/;

const INLINE_SPEAKER_KNOWN = /^(MAN|WOMAN|LECTURER)\s+(.*)$/i;

/** Tên in hoa + ≥2 khoảng trắng (tránh match nhầm trong câu). */
const INLINE_SPEAKER_NAME = /^([A-Z][A-Z'\s]{2,18})\s{2,}(.*)$/;

export type SplitTranscriptSpeaker = {
  speaker: string | null;
  body: string;
};

/** Tách nhãn người nói khỏi nội dung một dòng transcript. */
export function splitTranscriptSpeakerLine(text: string): SplitTranscriptSpeaker {
  const trimmed = text.trim();
  if (!trimmed) return { speaker: null, body: "" };

  const colonMatch = trimmed.match(SPEAKER_WITH_COLON);
  if (colonMatch?.[1]) {
    return { speaker: colonMatch[1].trim(), body: (colonMatch[2] ?? "").trim() };
  }

  const knownMatch = trimmed.match(INLINE_SPEAKER_KNOWN);
  if (knownMatch?.[1] && knownMatch[2] != null) {
    return { speaker: knownMatch[1].toUpperCase(), body: knownMatch[2].trim() };
  }

  const nameMatch = trimmed.match(INLINE_SPEAKER_NAME);
  if (nameMatch?.[1] && nameMatch[2] != null) {
    const speaker = nameMatch[1].trim();
    if (!/^(PART|BEFORE|NOW)$/i.test(speaker)) {
      return { speaker, body: nameMatch[2].trim() };
    }
  }

  return { speaker: null, body: trimmed };
}

/** Lấy speaker hiển thị từ cue (field hoặc nhúng trong text). */
export function resolveCueSpeakerAndBody(
  speaker: string | null | undefined,
  text: string,
): SplitTranscriptSpeaker {
  const embedded = splitTranscriptSpeakerLine(text);
  if (embedded.speaker) return embedded;
  if (speaker?.trim()) {
    return { speaker: speaker.trim(), body: text.trim() };
  }
  return { speaker: null, body: text.trim() };
}
