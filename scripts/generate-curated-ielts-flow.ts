/**
 * Sinh file flow curated (prediction / gist / detail) cho Cam 18–20 từ transcript + QnA + manifest.
 *
 *   npx tsx scripts/generate-curated-ielts-flow.ts --exam cam18 --all-tests
 *   npx tsx scripts/generate-curated-ielts-flow.ts --exam cam20 --test 1
 */
import fs from "node:fs";
import path from "node:path";
import { LISTENING_PARTS_PILOT } from "../lib/listening/content-manifest";
import { listeningPartIdForTest, type ListeningIeltsTestId } from "../lib/listening/ielts-test-catalog";

import { getListeningPartQnaRef } from "../lib/listening/listening-qna-catalog";
import { LISTENING_MATERIALS_ROOT } from "../lib/listening/listening-materials-paths";
import {
  getListeningQnaPart,
  parseListeningQnaText,
} from "../lib/listening/parse-listening-qna";
import { sanitizeListeningTranscript } from "../lib/sanitize-listening-transcript";
import { splitTranscriptByPart } from "../lib/listening/split-transcript-parts";
import type { ListeningFlowLessonContent } from "../lib/listening/tactics-basic-flow-types";

type ExamSlug = "cam18" | "cam20" | "cam21";

const WRONG_GIST = [
  {
    labelEn: "A formal academic lecture with no interaction",
    labelVi: "Bài giảng học thuật trang trọng, không có tương tác",
  },
  {
    labelEn: "A casual chat about weekend sports results",
    labelVi: "Cuộc trò chuyện thường về kết quả thể thao cuối tuần",
  },
  {
    labelEn: "A product advertisement on the radio",
    labelVi: "Quảng cáo sản phẩm trên radio",
  },
];

function parseArgs(argv: string[]): { exam: ExamSlug; tests: number[] } {
  let exam: ExamSlug = "cam18";
  let test = 1;
  let allTests = false;

  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === "--exam" && argv[i + 1]) exam = argv[i + 1] as ExamSlug;
    if (a === "--test" && argv[i + 1]) test = Number.parseInt(argv[i + 1]!, 10);
    if (a === "--all-tests") allTests = true;
  }

  if (!["cam18", "cam20", "cam21"].includes(exam)) {
    throw new Error("--exam must be cam18, cam20 or cam21");
  }

  const tests = allTests ? [1, 2, 3, 4] : [test];
  return { exam, tests };
}

function resolveTranscriptPath(fileName: string): string | null {
  const candidates = [
    path.join(process.cwd(), LISTENING_MATERIALS_ROOT, "transcript", fileName),
    path.join(process.cwd(), "transcript", fileName),
  ];
  return candidates.find((p) => fs.existsSync(p)) ?? null;
}

function loadTranscriptPart(exam: ExamSlug, test: number, part: number): string {
  const candidates = [`${exam}-test${test}.cleaned.txt`, `${exam}-test ${test}.txt`];
  for (const file of candidates) {
    const p = resolveTranscriptPath(file);
    if (!p || !fs.existsSync(p)) continue;
    const full = sanitizeListeningTranscript(fs.readFileSync(p, "utf8"));
    const text = splitTranscriptByPart(full)[part] ?? "";
    if (text.length > 0) return text;
  }
  throw new Error(`Missing transcript for ${exam} test ${test} part ${part}`);
}

function siblingParts(exam: ExamSlug, test: number, part: number) {
  return LISTENING_PARTS_PILOT.filter(
    (p) => p.examSlug === exam && p.test === test && p.part !== part,
  );
}

/** VI labels for Cam 21 hub titles/summaries (generated flow). */
const CAM21_FLOW_VI: Record<string, { titleVi: string; summaryVi: string }> = {
  "cam21-t1-p1": {
    titleVi: "Câu lạc bộ thuyền buồm Oyster Bay",
    summaryVi: "CLB thuyền buồm giới thiệu các khóa học, học phí và yêu cầu thực tế cho người mới.",
  },
  "cam21-t1-p2": {
    titleVi: "Làm thực tập sinh trang điểm",
    summaryVi: "Nghệ sĩ trang điểm nói về công việc thực tập trên phim trường, lương và thử thách nghề nghiệp.",
  },
  "cam21-t1-p3": {
    titleVi: "Bài giảng đa dạng sinh học đại dương",
    summaryVi: "Sinh viên thảo luận bài giảng về đa dạng sinh học biển và nối nhận xét với chủ đề nghiên cứu.",
  },
  "cam21-t1-p4": {
    titleVi: "Nguồn gốc cao su",
    summaryVi: "Bài giảng về nguồn cao su tự nhiên, nhu cầu, tái chế và phản ứng của thực vật với stress.",
  },
  "cam21-t2-p1": {
    titleVi: "Lớp học tại Steynford College",
    summaryVi: "Các khóa học một ngày về làm bánh, lịch học, học phí và những gì cần mang theo.",
  },
  "cam21-t2-p2": {
    titleVi: "Đi bộ ven biển Marsden",
    summaryVi: "Lời khuyên cho chuyến đi bộ ven biển kèm bài gắn nhãn bản đồ các điểm trên đường.",
  },
  "cam21-t2-p3": {
    titleVi: "Dự án khóa an toàn thực phẩm",
    summaryVi: "Sinh viên ôn các buổi an toàn thực phẩm và lập sơ đồ các bước phát triển sản phẩm mới.",
  },
  "cam21-t2-p4": {
    titleVi: "Thách thức ngành du thuyền",
    summaryVi: "Bài giảng về quá tải du lịch, nhận thức công chúng và áp lực bền vững với tàu du lịch.",
  },
  "cam21-t3-p1": {
    titleVi: "Phà tới quần đảo Shetland",
    summaryVi: "Chi tiết đặt phà tới Shetland, gồm tiện nghi và giá vé.",
  },
  "cam21-t3-p2": {
    titleVi: "Sự phổ biến của ẩm thực đường phố",
    summaryVi: "Bài nói về lý do street food phổ biến và cách người bán quản lý địa điểm, vệ sinh.",
  },
  "cam21-t3-p3": {
    titleVi: "Thời trang đạo đức và bền vững",
    summaryVi: "Sinh viên bàn về thuật ngữ thời trang đạo đức và nối quan điểm với các khía cạnh ngành may.",
  },
  "cam21-t3-p4": {
    titleVi: "Loài xâm lấn",
    summaryVi: "Bài giảng về động/thực vật xâm lấn, hại sinh thái và chiến lược kiểm soát.",
  },
  "cam21-t4-p1": {
    titleVi: "Khảo sát mua sắm Broadbeach",
    summaryVi: "Biểu mẫu khảo sát người mua về đi lại, thói quen mua sắm và cửa hàng địa phương.",
  },
  "cam21-t4-p2": {
    titleVi: "Quảng bá tại triển lãm doanh nghiệp",
    summaryVi: "Diễn giả mô tả quảng bá công ty tại triển lãm và nối vai trò nhân viên.",
  },
  "cam21-t4-p3": {
    titleVi: "Nhà ở của tương lai",
    summaryVi: "Sinh viên lên kế hoạch thuyết trình về nhà ở tương lai và đánh giá các đề xuất đô thị.",
  },
  "cam21-t4-p4": {
    titleVi: "Liệu pháp âm nhạc cho bệnh nhân phẫu thuật",
    summaryVi: "Bài giảng về dùng liệu pháp âm nhạc để giảm lo âu và hỗ trợ hồi phục sau phẫu thuật.",
  },
};

function extractMarkedDetails(transcript: string, max = 6): {
  key: string;
  conversationEn: string;
  conversationVi: string;
  questionEn: string;
  questionVi: string;
  answerEn: string;
  answerVi: string;
}[] {
  const lines = transcript.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const out: ReturnType<typeof extractMarkedDetails> = [];
  let pendingQuestion = "";

  for (const line of lines) {
    const speakerMatch = line.match(/^([A-Z][A-Z\s']+):\s*(.+)$/);
    const text = speakerMatch?.[2] ?? line;
    const speaker = speakerMatch?.[1] ?? "NARRATOR";

    if (text.includes("?") && !/\bQ\d+/i.test(text)) {
      pendingQuestion = text.replace(/\s*Q\d+.*$/i, "").trim();
    }

    const marks = [...text.matchAll(/\bQ\s*(\d+)/gi)];
    if (marks.length === 0) continue;

    for (const m of marks) {
      const qNum = m[1]!;
      const before = text.slice(0, m.index).replace(/^[^:]+:\s*/, "").trim();
      const answer = before
        .replace(/[–—-]\s*$/, "")
        .replace(/\s+/g, " ")
        .trim();
      if (!answer || answer.length < 2) continue;

      const question = pendingQuestion || `What is the answer to question ${qNum}?`;
      out.push({
        key: `p-q${qNum}`,
        conversationEn: `${speaker} — Q${qNum}`,
        conversationVi: `${speaker} — câu ${qNum}`,
        questionEn: question.endsWith("?") ? question : `${question}?`,
        questionVi: question.endsWith("?") ? question : `${question}?`,
        answerEn: answer,
        answerVi: answer,
      });
      if (out.length >= max) return out;
    }
  }

  return out;
}

function loadQnaPart(testId: ListeningIeltsTestId, part: number) {
  const ref = getListeningPartQnaRef(listeningPartIdForTest(testId, part));
  if (!ref) return null;
  const filePath = path.join(process.cwd(), LISTENING_MATERIALS_ROOT, ref.fileName);
  if (!fs.existsSync(filePath)) return null;
  const parsed = parseListeningQnaText(fs.readFileSync(filePath, "utf8"));
  return getListeningQnaPart(parsed, part);
}

function detailFromQnaAnswers(
  testId: ListeningIeltsTestId,
  part: number,
  need: number,
): ReturnType<typeof extractMarkedDetails> {
  const qnaPart = loadQnaPart(testId, part);
  if (!qnaPart) return [];

  const entries = Object.entries(qnaPart.answers)
    .filter(([k]) => /^\d+$/.test(k))
    .sort(([a], [b]) => Number(a) - Number(b))
    .slice(0, need);

  return entries.map(([num, ans]) => ({
    key: `exam-${num}`,
    conversationEn: `Exam question ${num}`,
    conversationVi: `Câu hỏi đề ${num}`,
    questionEn: `What is the correct answer for question ${num} in this part?`,
    questionVi: `Đáp án đúng cho câu ${num} trong part này là gì?`,
    answerEn: ans,
    answerVi: ans,
  }));
}

function buildPartContent(
  exam: ExamSlug,
  test: number,
  part: number,
): ListeningFlowLessonContent {
  const testId = `${exam}-test${test}` as ListeningIeltsTestId;
  const partId = listeningPartIdForTest(testId, part);
  const meta = LISTENING_PARTS_PILOT.find((p) => p.id === partId);
  if (!meta) throw new Error(`No manifest for ${partId}`);

  const transcript = loadTranscriptPart(exam, test, part);
  const siblings = siblingParts(exam, test, part);
  const vi = exam === "cam21" ? CAM21_FLOW_VI[partId] : undefined;

  const predictionOptions = [
    {
      key: "pred-main",
      labelEn: meta.title,
      labelVi: vi?.titleVi ?? meta.title,
    },
    ...siblings.slice(0, 3).map((s, i) => {
      const siblingVi = exam === "cam21" ? CAM21_FLOW_VI[s.id] : undefined;
      return {
        key: `pred-${i + 1}`,
        labelEn: s.title,
        labelVi: siblingVi?.titleVi ?? s.title,
      };
    }),
  ].slice(0, 4);

  while (predictionOptions.length < 4) {
    predictionOptions.push({
      key: `pred-filler-${predictionOptions.length}`,
      labelEn: meta.topics[0] ?? "General conversation",
      labelVi: meta.topics[0] ?? "Hội thoại chung",
    });
  }

  const gistOptions = [
    {
      key: "gist-correct",
      labelEn: meta.summary,
      labelVi: vi?.summaryVi ?? meta.summary,
      correct: true as const,
    },
    ...WRONG_GIST.slice(0, 3).map((g, i) => ({
      key: `gist-wrong-${i + 1}`,
      labelEn: g.labelEn,
      labelVi: g.labelVi,
    })),
  ];

  const fromTranscript = extractMarkedDetails(transcript, 6);
  const fromQna = detailFromQnaAnswers(testId, part, 6);
  const detailQuestions = [...fromTranscript, ...fromQna]
    .filter((item, index, arr) => arr.findIndex((x) => x.key === item.key) === index)
    .slice(0, 6);

  while (detailQuestions.length < 4) {
    detailQuestions.push({
      key: `detail-filler-${detailQuestions.length}`,
      conversationEn: meta.title,
      conversationVi: meta.title,
      questionEn: `What is the main topic of ${meta.title}?`,
      questionVi: `Chủ đề chính của ${meta.title} là gì?`,
      answerEn: meta.summary,
      answerVi: meta.summary,
    });
  }

  return {
    predictionOptions,
    gistOptions,
    detailQuestions: detailQuestions.slice(0, 6),
    memoryPlaceholder: `Ghi vài ý về ${meta.title} sau lần nghe đầu…`,
  };
}

function tsString(value: unknown, indent = 0): string {
  const pad = "  ".repeat(indent);
  if (value === null || value === undefined) return "undefined";
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    return `[\n${value.map((v) => `${pad}  ${tsString(v, indent + 1)},`).join("\n")}\n${pad}]`;
  }
  const entries = Object.entries(value as Record<string, unknown>);
  return `{\n${entries
    .map(([k, v]) => `${pad}  ${k}: ${tsString(v, indent + 1)},`)
    .join("\n")}\n${pad}}`;
}

function writeTestFile(exam: ExamSlug, test: number, parts: Record<string, ListeningFlowLessonContent>): void {
  const constNames = [1, 2, 3, 4].map((p) => `${exam.toUpperCase()}_T${test}_P${p}`);
  const blocks = [1, 2, 3, 4]
    .map((p) => {
      const id = listeningPartIdForTest(`${exam}-test${test}` as ListeningIeltsTestId, p);
      return `const ${constNames[p - 1]}: ListeningFlowLessonContent = ${tsString(parts[id], 0)};`;
    })
    .join("\n\n");

  const exportName = `IELTS_${exam.toUpperCase()}_T${test}_FLOW_CONTENT`;
  const mapping = [1, 2, 3, 4]
    .map((p) => `  "${exam}-t${test}-p${p}": ${constNames[p - 1]},`)
    .join("\n");

  const file = `import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";

/** Flow nghe hiểu — ${exam.toUpperCase()} Test ${test} (generated from transcript + QnA). */
${blocks}

export const ${exportName}: Record<string, ListeningFlowLessonContent> = {
${mapping}
};
`;

  const dest = path.join(process.cwd(), "lib/listening", `ielts-${exam}-t${test}-flow-content.ts`);
  fs.writeFileSync(dest, file, "utf8");
  console.log(`Wrote ${dest}`);
}

function main(): void {
  const { exam, tests } = parseArgs(process.argv.slice(2));

  for (const test of tests) {
    const parts: Record<string, ListeningFlowLessonContent> = {};
    for (let part = 1; part <= 4; part += 1) {
      const partId = listeningPartIdForTest(`${exam}-test${test}` as ListeningIeltsTestId, part);
      parts[partId] = buildPartContent(exam, test, part);
      console.log(`Built flow ${partId} (${parts[partId]!.detailQuestions.length} details)`);
    }
    writeTestFile(exam, test, parts);
  }
}

main();
