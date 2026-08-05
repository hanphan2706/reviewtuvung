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
import { buildFlowDetailQuestionsFromQnaPart } from "../lib/listening/build-flow-detail-from-qna";
import {
  getListeningQnaPart,
  parseListeningQnaText,
  type ListeningQnaPart,
} from "../lib/listening/parse-listening-qna";
import { sanitizeListeningTranscript } from "../lib/sanitize-listening-transcript";
import { splitTranscriptByPart } from "../lib/listening/split-transcript-parts";
import type { ListeningFlowLessonContent } from "../lib/listening/tactics-basic-flow-types";

type ExamSlug = "cam18" | "cam20" | "cam21" | "cam17" | "cam16";

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

  if (!["cam18", "cam20", "cam21", "cam17", "cam16"].includes(exam)) {
    throw new Error("--exam must be cam18, cam20, cam21, cam17 or cam16");
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

/** VI labels for Cam 17 hub titles/summaries (generated flow). */
const CAM17_FLOW_VI: Record<string, { titleVi: string; summaryVi: string }> = {
  "cam17-t1-p1": {
    titleVi: "Nhóm bảo tồn Buckworth",
    summaryVi: "Nhóm bảo tồn giới thiệu công việc bãi biển, khu bảo tồn và các sự kiện sắp tới.",
  },
  "cam17-t1-p2": {
    titleVi: "Tour thuyền quanh Tasmania",
    summaryVi: "Hướng dẫn viên mô tả tour thuyền Tasmania: sức chứa, hộp cơm, động vật và hang động.",
  },
  "cam17-t1-p3": {
    titleVi: "Thực tập thú y",
    summaryVi: "Sinh viên so sánh các kỳ thực tập thú y trên trang trại, từ động vật đến thức ăn bổ sung.",
  },
  "cam17-t1-p4": {
    titleVi: "Mê cung labyrinth",
    summaryVi: "Bài giảng phân biệt labyrinth với maze và khám phá lịch sử, biểu tượng, ứng dụng sức khỏe.",
  },
  "cam17-t2-p1": {
    titleVi: "Tình nguyện làng Southoe",
    summaryVi: "Cần tình nguyện viên cho thư viện làng, câu lạc bộ ăn trưa, việc vặt và sự kiện xã hội.",
  },
  "cam17-t2-p2": {
    titleVi: "Dinh thự Oniton Hall",
    summaryVi: "Tour dinh thự lịch sử: chủ nhân cũ, đời sống người hầu và hoạt động nông trại cho khách.",
  },
  "cam17-t2-p3": {
    titleVi: "Đánh giá Romeo and Juliet",
    summaryVi: "Sinh viên lên kế hoạch review kịch và so sánh ý kiến về sân khấu, diễn viên, lựa chọn sản xuất.",
  },
  "cam17-t2-p4": {
    titleVi: "Tiếng Iceland và công nghệ số",
    summaryVi: "Bài giảng về ảnh hưởng của truyền thông số và tiếng Anh tới người trẻ nói tiếng Iceland.",
  },
  "cam17-t3-p1": {
    titleVi: "Lời khuyên nghỉ lướt sóng",
    summaryVi: "Bạn bè gợi ý điểm lướt sóng ở Ireland, thời tiết, chi phí và đồ thuê.",
  },
  "cam17-t3-p2": {
    titleVi: "Giữ trẻ ngoài giờ học",
    summaryVi: "Quản lý giải thích chăm sóc trước/sau giờ học, học phí, quy tắc ăn và kỳ nghỉ.",
  },
  "cam17-t3-p3": {
    titleVi: "Tutorial thực tập của Holly",
    summaryVi: "Holly và tutor bàn về thực tập sân vận động: an toàn, khán giả và kỹ năng sự kiện.",
  },
  "cam17-t3-p4": {
    titleVi: "Lý thuyết di cư chim",
    summaryVi: "Bài giảng về các lý thuyết di cư cũ, bằng chứng đóng vòng và bản đồ di cư sớm.",
  },
  "cam17-t4-p1": {
    titleVi: "Dịch vụ dọn nhà Easy Life",
    summaryVi: "Công ty dọn nhà xác nhận gói dịch vụ, phụ phí, dị ứng và cách kiểm tra nhân viên.",
  },
  "cam17-t4-p2": {
    titleVi: "Giữ chân nhân viên khách sạn",
    summaryVi: "Bài nói về lý do nhân viên khách sạn nghỉ việc và cách các khách sạn giảm nghỉ việc.",
  },
  "cam17-t4-p3": {
    titleVi: "Phát triển dụng cụ thể thao",
    summaryVi: "Sinh viên bàn trải nghiệm thể thao ở Kenya và sự phát triển của dụng cụ thể thao.",
  },
  "cam17-t4-p4": {
    titleVi: "Siro cây phong",
    summaryVi: "Bài giảng về sản xuất siro phong từ phương pháp sớm đến ngành công nghiệp Canada hiện đại.",
  },
};

const CAM16_FLOW_VI: Record<string, { titleVi: string; summaryVi: string }> = {
  "cam16-t1-p1": {
    titleVi: "Workshop kỹ thuật cho trẻ",
    summaryVi: "Trung tâm mô tả lớp Tiny/Junior Engineers, học phí, lịch học và địa điểm.",
  },
  "cam16-t1-p2": {
    titleVi: "Thực tập tại Stevenson’s",
    summaryVi: "Bài nói về lịch sử công ty Stevenson’s và sơ đồ khuôn viên cho nhóm thực tập.",
  },
  "cam16-t1-p3": {
    titleVi: "Dự án nghệ thuật của Jess và Tom",
    summaryVi: "Sinh viên ôn giai đoạn mở đầu dự án nghệ thuật và gán ý nghĩa cá nhân cho các bức tranh.",
  },
  "cam16-t1-p4": {
    titleVi: "Chủ nghĩa Khắc kỷ",
    summaryVi: "Bài giảng về nguyên tắc Stoic và ảnh hưởng tới lãnh đạo, CBT và đời sống hiện đại.",
  },
  "cam16-t2-p1": {
    titleVi: "Số hoá ảnh sang định dạng số",
    summaryVi: "Picturerep giải thích giới hạn kích thước ảnh, giá, dịch vụ phục hồi và cách gửi đơn.",
  },
  "cam16-t2-p2": {
    titleVi: "Trường Dartfield House",
    summaryVi: "Cập nhật nhà trường về mặt bằng, điểm phục vụ Food Hall và lớp ngoại khoá.",
  },
  "cam16-t2-p3": {
    titleVi: "Bài tập về ngủ và mơ",
    summaryVi: "Luke và Susie lập kế hoạch nghiên cứu giấc ngủ, từ mẫu sinh viên đến phân tích kết quả.",
  },
  "cam16-t2-p4": {
    titleVi: "Lợi ích sức khoẻ của khiêu vũ",
    summaryVi: "Bài giảng về khiêu vũ hỗ trợ tâm trạng, người lớn tuổi và nghiên cứu Zumba.",
  },
  "cam16-t3-p1": {
    titleVi: "Trại đạp xe thiếu nhi",
    summaryVi: "Phụ huynh đặt trại kỹ năng và an toàn xe đạp: giảng viên, đồ mang theo và ngày đầu.",
  },
  "cam16-t3-p2": {
    titleVi: "Nghề nông nghiệp và làm vườn",
    summaryVi: "Megan nêu ưu nhược điểm làm việc ngoài trời và nối các tin tuyển dụng.",
  },
  "cam16-t3-p3": {
    titleVi: "Thuyết trình thực phẩm và béo phì",
    summaryVi: "Adam và Rosie so sánh thí nghiệm thực phẩm và sắp xếp bài thuyết trình về béo phì.",
  },
  "cam16-t3-p4": {
    titleVi: "Đan len thủ công",
    summaryVi: "Bài giảng về sự trở lại của đan len, lợi ích và dụng cụ, sợi, kiểu dáng thời kỳ đầu.",
  },
  "cam16-t4-p1": {
    titleVi: "Thuê nhà nghỉ dưỡng",
    summaryVi: "Cuộc gọi hỏi Granary và Chervil Cottage: ngày, giá, tiện nghi và hạn thanh toán.",
  },
  "cam16-t4-p2": {
    titleVi: "Báo cáo giao thông và đường sá",
    summaryVi: "Báo cáo hội đồng về lo ngại giao thông, đường xe đạp và sơ đồ khu vui chơi.",
  },
  "cam16-t4-p3": {
    titleVi: "Chia sẻ xe đạp đô thị",
    summaryVi: "Sinh viên cân nhắc lợi ích bike-share và so sánh các thành phố từ Amsterdam đến Sydney.",
  },
  "cam16-t4-p4": {
    titleVi: "Sự tuyệt chủng của chim dodo",
    summaryVi: "Bài giảng về lịch sử dodo ở Mauritius, đặc điểm cơ thể và nguyên nhân tuyệt chủng.",
  },
};

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

function cleanTranscriptAnswer(text: string): string {
  return text
    .replace(/\(\s*Q\s*\d+\s*\)/gi, "")
    .replace(/\bQ\s*\d+\b/gi, "")
    .replace(/\(\s*$/g, "")
    .replace(/[–—-]\s*$/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractMarkedDetails(
  transcript: string,
  max = 6,
  qnaPart: ListeningQnaPart | null = null,
): {
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

    if (text.includes("?") && !/\bQ\s*\d+/i.test(text)) {
      pendingQuestion = text.replace(/\s*Q\s*\d+.*$/i, "").trim();
    }

    const marks = [...text.matchAll(/\bQ\s*(\d+)/gi)];
    if (marks.length === 0) continue;

    for (const match of marks) {
      const qNum = match[1];
      if (!qNum) continue;
      const qnaAnswer = qnaPart?.answers[qNum];
      const before = text.slice(0, match.index ?? 0).replace(/^[^:]+:\s*/, "").trim();
      const wordBefore = cleanTranscriptAnswer(before).split(/\s+/).filter(Boolean).at(-1) ?? "";
      const answer = (qnaAnswer ?? wordBefore).trim();
      if (!answer || answer.length < 2) continue;

      let question = pendingQuestion;
      pendingQuestion = "";
      if (!question) {
        const cloze = text
          .replace(/\(\s*Q\s*\d+\s*\)/gi, "___")
          .replace(/\bQ\s*\d+\b/gi, "___")
          .replace(/\s+/g, " ")
          .trim();
        question = cloze.includes("___") ? `Complete: ${cloze}` : `What is the answer to question ${qNum}?`;
      }

      out.push({
        key: `p-q${qNum}`,
        conversationEn: `${speaker} — Q${qNum}`,
        conversationVi: `${speaker} — câu ${qNum}`,
        questionEn: question.endsWith("?") || question.startsWith("Complete:") ? question : `${question}?`,
        questionVi: question.endsWith("?") || question.startsWith("Complete:") ? question : `${question}?`,
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

function mergeDetailQuestions(
  fromQna: ReturnType<typeof extractMarkedDetails>,
  fromTranscript: ReturnType<typeof extractMarkedDetails>,
): ReturnType<typeof extractMarkedDetails> {
  const out = [...fromQna];
  const seenQuestions = new Set(out.map((item) => item.questionEn.trim().toLowerCase()));
  const seenKeys = new Set(out.map((item) => item.key));

  for (const item of fromTranscript) {
    if (out.length >= 6) break;
    const questionKey = item.questionEn.trim().toLowerCase();
    if (seenKeys.has(item.key) || seenQuestions.has(questionKey)) continue;
    seenKeys.add(item.key);
    seenQuestions.add(questionKey);
    out.push(item);
  }

  return out;
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
  const flowVi =
    exam === "cam21"
      ? CAM21_FLOW_VI
      : exam === "cam17"
        ? CAM17_FLOW_VI
        : exam === "cam16"
          ? CAM16_FLOW_VI
          : undefined;
  const vi = flowVi?.[partId];

  const predictionOptions = [
    {
      key: "pred-main",
      labelEn: meta.title,
      labelVi: vi?.titleVi ?? meta.title,
    },
    ...siblings.slice(0, 3).map((s, i) => {
      const siblingVi = flowVi?.[s.id];
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

  const qnaPart = loadQnaPart(testId, part);
  const fromQna = qnaPart ? buildFlowDetailQuestionsFromQnaPart(qnaPart, 6) : [];
  const fromTranscript = fromQna.length >= 4 ? [] : extractMarkedDetails(transcript, 6, qnaPart);
  const detailQuestions = mergeDetailQuestions(fromQna, fromTranscript);

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
