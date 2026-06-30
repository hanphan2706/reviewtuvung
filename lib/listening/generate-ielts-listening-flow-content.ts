import fs from "node:fs";
import type { ListeningPartMeta } from "@/lib/listening/content-manifest";
import {
  getListeningPartQnaRef,
  getListeningTestQnaRef,
  type ListeningPartQnaRef,
} from "@/lib/listening/listening-qna-catalog";
import { listeningQnaFilePath } from "@/lib/listening/listening-materials-fs";
import { buildFlowDetailQuestionsFromQnaPart } from "@/lib/listening/build-flow-detail-from-qna";
import {
  getListeningQnaPart,
  parseListeningQnaText,
  type ListeningQnaPart,
  type ParsedListeningQnaFile,
} from "@/lib/listening/parse-listening-qna";
import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import { getIeltsFlowLessonContent } from "@/lib/listening/ielts-flow-content-registry";

export function loadListeningQnaFile(ref: { fileName: string }): ParsedListeningQnaFile | null {
  const filePath = listeningQnaFilePath(ref.fileName);
  if (!fs.existsSync(filePath)) return null;
  return parseListeningQnaText(fs.readFileSync(filePath, "utf8"));
}

export function loadListeningQnaPart(ref: ListeningPartQnaRef): ListeningQnaPart | null {
  const parsed = loadListeningQnaFile(ref);
  if (!parsed) return null;
  return getListeningQnaPart(parsed, ref.part);
}

export function loadListeningQnaTest(testId: string): ParsedListeningQnaFile | null {
  const ref = getListeningTestQnaRef(testId);
  if (!ref) return null;
  return loadListeningQnaFile(ref);
}

function topicKeywords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s'-]/g, " ")
    .split(/\s+/)
    .filter(
      (w) =>
        w.length > 4 &&
        !/^(about|their|there|which|would|could|should|where|when|with|from|this|that|these|those|have|been|were|they|will)$/.test(
          w,
        ),
    )
    .slice(0, 12);
}

function uniqueLabels(
  words: string[],
  count: number,
  prefix: string,
): { key: string; labelEn: string; labelVi: string }[] {
  const picked = [...new Set(words)].slice(0, count);
  while (picked.length < count) {
    picked.push(`${prefix}-${picked.length + 1}`);
  }
  return picked.map((word, index) => ({
    key: `${prefix}-${index + 1}`,
    labelEn: word.charAt(0).toUpperCase() + word.slice(1),
    labelVi: word.charAt(0).toUpperCase() + word.slice(1),
  }));
}

/** Sinh nội dung flow 6 bước từ transcript + câu hỏi thật trong file QnA. */
export function generateIeltsListeningFlowContent(
  meta: ListeningPartMeta,
  transcriptText: string,
): ListeningFlowLessonContent | null {
  const curated = getIeltsFlowLessonContent(meta.id);
  if (curated) return curated;

  const ref = getListeningPartQnaRef(meta.id);
  if (!ref) return null;
  const qnaPart = loadListeningQnaPart(ref);
  if (!qnaPart) return null;

  const keywords = topicKeywords(`${meta.title} ${meta.summary} ${transcriptText}`);
  const predictionOptions = uniqueLabels(keywords, 4, "pred").map((item, index) => ({
    ...item,
    labelVi:
      index === 0
        ? (meta.topics[0] ?? item.labelVi)
        : index === 1
          ? "Trao đổi / hội thoại"
          : index === 2
            ? "Thông tin thực tế / chi tiết"
            : "Kế hoạch / sắp xếp",
  }));

  const gistOptions = [
    {
      key: "gist-summary",
      labelEn: meta.summary,
      labelVi: meta.summary,
      correct: true,
    },
    {
      key: "gist-title-only",
      labelEn: `Main focus: ${meta.title}`,
      labelVi: `Trọng tâm: ${meta.title}`,
    },
    {
      key: "gist-wrong-lecture",
      labelEn: "A formal academic lecture about ancient history only",
      labelVi: "Một bài giảng học thuật chỉ về lịch sử cổ đại",
    },
    {
      key: "gist-wrong-sports",
      labelEn: "A casual chat about sports results",
      labelVi: "Cuộc trò chuyện thường về kết quả thể thao",
    },
  ];

  const detailFromExam = buildFlowDetailQuestionsFromQnaPart(qnaPart, 6);

  return {
    predictionOptions,
    gistOptions,
    detailQuestions: detailFromExam,
    memoryPlaceholder: `Ghi vài ý về ${meta.title} sau lần nghe đầu…`,
  };
}
