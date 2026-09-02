import fs from "node:fs";
import path from "node:path";
import type { RealExamSlug } from "@/lib/exam/real-exam-catalog";
import { sanitizeListeningTranscript } from "@/lib/sanitize-listening-transcript";
import { listeningTranscriptPlainToSafeHtml } from "@/lib/listening/transcript-to-display-html";

const TRANSCRIPT_TRY_FILES: Partial<Record<RealExamSlug, string[]>> = {
  "de-thi-that-1": ["real-test-1.cleaned.txt", "real-test-1.txt"],
  "de-thi-that-2": ["real-test-2.cleaned.txt", "real test 2.txt"],
  "de-thi-that-3": ["real-test-3.cleaned.txt", "real test 3.txt"],
  "de-thi-that-4": ["real-test-4.cleaned.txt", "real test 4.txt"],
};

function readFirstTranscript(slug: RealExamSlug): string | null {
  const tryFiles = TRANSCRIPT_TRY_FILES[slug];
  if (!tryFiles) return null;

  for (const fileName of tryFiles) {
    const filePath = path.join(process.cwd(), "listening materials/transcript", fileName);
    if (!fs.existsSync(filePath)) continue;
    try {
      const raw = fs.readFileSync(filePath, "utf8");
      const text = sanitizeListeningTranscript(raw);
      if (text.trim()) return text;
    } catch {
      continue;
    }
  }
  return null;
}

export function loadRealExamTranscriptText(slug: RealExamSlug): string | null {
  return readFirstTranscript(slug);
}

export function loadRealExamTranscriptHtml(slug: RealExamSlug): string | null {
  const text = loadRealExamTranscriptText(slug);
  if (!text) return null;
  return listeningTranscriptPlainToSafeHtml(text);
}
