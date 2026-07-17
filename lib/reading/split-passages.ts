import {
  extractAnswerKeyFromSegment,
  extractGlobalAnswerKeyFromRaw,
  pickAnswerKeyForQuestionNums,
} from "@/lib/reading/parse-passage-answers";
import { extractLeadDeckFromRawBody } from "@/lib/reading/article-body-structure";
import { parsePassageAudioUrl } from "@/lib/reading/parse-passage-audio";
import { parsePassageDeckText } from "@/lib/reading/parse-passage-deck";
import { parsePassageImageUrl } from "@/lib/reading/parse-passage-image";
import { parsePassageExamSections } from "@/lib/reading/parse-passage-questions";
import { stripReadingWebAdNoise } from "@/lib/reading/strip-reading-web-ad-noise";

function questionNumsForPassage(questionsText: string): number[] {
  const sections = parsePassageExamSections(questionsText);
  const nums: number[] = [];
  for (const section of sections) {
    nums.push(...section.questionNums);
    for (const st of section.statements) nums.push(st.num);
  }
  return [...new Set(nums)].sort((a, b) => a - b);
}

export type ReadingPassageBlock = {
  passage: number;
  title: string;
  body: string;
  /** URL ảnh từ khối IMAGE. */
  imageUrl: string;
  /** URL audio từ khối AUDIO. */
  audioUrl: string;
  /** Hook / deck — tách khỏi `body` khi parse. */
  deckText: string;
  /** Khối IDIOMS (Reading Challenge) — trước Questions trong file .txt. */
  idiomsText: string;
  /** Khối QUICK CHECK — câu kiểm tra nhanh (ý chính, tiếng Việt). */
  quickCheckText: string;
  /** Phần Questions… trong file .txt (không gồm khối ANSWERS). */
  questionsText: string;
  hasExamQuestions: boolean;
  /** Đáp án từ khối ANSWERS trong file (nếu có). */
  answerKey: Record<number, string>;
};

/**
 * Tách file raw Cambridge-style: mỗi khối bắt đầu `READING PASSAGE n`.
 * Phần hiển thị: bỏ dòng hướng dẫn "You should spend...", lấy dòng tiêu đề bài (Manatees, …),
 * cắt trước dòng bắt đầu bằng `Questions` (giữ phần đọc, ẩn đề).
 */
export function splitReadingPassages(raw: string): ReadingPassageBlock[] {
  const normalized = stripReadingWebAdNoise(raw);
  const globalAnswerKey = extractGlobalAnswerKeyFromRaw(normalized);
  const segments = normalized.split(/(?=^READING PASSAGE \d+\s*$)/im).filter((s) => /^READING PASSAGE \d+/im.test(s.trim()));

  const out: ReadingPassageBlock[] = [];

  for (const seg of segments) {
    const lines = seg.split("\n");
    const head = lines[0]?.match(/READING PASSAGE (\d+)/i);
    if (!head?.[1]) continue;
    const passage = Number.parseInt(head[1], 10);
    let i = 1;
    while (i < lines.length) {
      const t = (lines[i] ?? "").trim();
      if (/^you should spend about/i.test(t) || t === "") {
        i += 1;
        continue;
      }
      break;
    }
    const title = (lines[i] ?? "").trim() || `Passage ${passage}`;
    i += 1;
    const bodyLines: string[] = [];
    const imageLines: string[] = [];
    const audioLines: string[] = [];
    const deckLines: string[] = [];
    const idiomLines: string[] = [];
    const quickCheckLines: string[] = [];
    let questionsStart = lines.length;
    let phase: "body" | "image" | "audio" | "deck" | "idioms" | "quickcheck" = "body";
    for (; i < lines.length; i += 1) {
      const line = lines[i] ?? "";
      const trimmed = line.trim();
      /** Chỉ header đề IELTS (`Questions 1–5`), không khớp `question |` trong QUICK CHECK. */
      if (/^Questions\b/.test(trimmed)) {
        questionsStart = i;
        break;
      }
      if (/^image\b/i.test(trimmed)) {
        phase = "image";
        continue;
      }
      if (/^audio\b/i.test(trimmed)) {
        phase = "audio";
        continue;
      }
      if (/^deck\b/i.test(trimmed)) {
        phase = "deck";
        continue;
      }
      if (/^idioms?\b/i.test(trimmed)) {
        phase = "idioms";
        continue;
      }
      if (/^quick\s*check\b/i.test(trimmed)) {
        phase = "quickcheck";
        continue;
      }
      if (phase === "image") {
        imageLines.push(line);
      } else if (phase === "audio") {
        audioLines.push(line);
      } else if (phase === "deck") {
        deckLines.push(line);
      } else if (phase === "idioms") {
        idiomLines.push(line);
      } else if (phase === "quickcheck") {
        quickCheckLines.push(line);
      } else {
        bodyLines.push(line);
      }
    }

    let questionsEnd = lines.length;
    for (let j = questionsStart + 1; j < lines.length; j += 1) {
      if (/^answers?(?:\s+key)?\s*:?\s*$/i.test((lines[j] ?? "").trim())) {
        questionsEnd = j;
        break;
      }
    }

    const questionsText = lines.slice(questionsStart, questionsEnd).join("\n").trim();
    const qNums = questionNumsForPassage(questionsText);
    const fromSegment = extractAnswerKeyFromSegment(seg);
    const mergedAnswers = { ...globalAnswerKey, ...fromSegment };
    const answerKey = pickAnswerKeyForQuestionNums(mergedAnswers, qNums);

    const rawBody = bodyLines.join("\n").trim().replace(/\u00a0/g, " ");
    const explicitDeck = parsePassageDeckText(deckLines.join("\n"));
    const cambridge = explicitDeck
      ? { deck: explicitDeck, body: rawBody }
      : extractLeadDeckFromRawBody(rawBody);

    out.push({
      passage,
      title,
      body: cambridge.body,
      deckText: cambridge.deck,
      imageUrl: parsePassageImageUrl(imageLines.join("\n")),
      audioUrl: parsePassageAudioUrl(audioLines.join("\n")),
      idiomsText: idiomLines.join("\n").trim(),
      quickCheckText: quickCheckLines.join("\n").trim(),
      questionsText,
      hasExamQuestions: questionsText.length > 40,
      answerKey,
    });
  }

  return out.sort((a, b) => a.passage - b.passage);
}
