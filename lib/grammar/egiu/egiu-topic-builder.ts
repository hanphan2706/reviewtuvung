import type { EgiuUnitRecord } from "@/lib/grammar/egiu/egiu-catalog";
import type { GrammarTopicDetail, GrammarUsagePoint } from "@/lib/grammar/grammar-topic-types";

function structureFromUnit(unit: EgiuUnitRecord): GrammarTopicDetail["structure"] {
  const hint = unit.subtitle.trim() || unit.title;
  return {
    affirmative: hint,
    negative: `not + ${hint}`,
  };
}

function usagePointsFromUnit(unit: EgiuUnitRecord): GrammarUsagePoint[] {
  const points: GrammarUsagePoint[] = [
    {
      before: "Theo khung ",
      strong: `English Grammar in Use · Unit ${unit.unitNumber}`,
      after: ` — mục ${unit.section}.`,
    },
    {
      before: "Trọng tâm: ",
      strong: unit.title,
      after: unit.subtitle ? ` (${unit.subtitle}).` : ".",
    },
  ];

  if (unit.mapFlags.includes("contrast-pair")) {
    points.push({
      before: "Unit này nên học ",
      strong: "đi kèm unit đối chiếu",
      after: " trong cùng nhóm để tránh nhầm cấu trúc gần nghĩa.",
    });
  }
  if (unit.mapFlags.includes("picture-exercises")) {
    points.push({
      before: "Bài tập sách có ",
      strong: "phần dựa vào tranh",
      after: " — phiên bản web sẽ dùng mô tả tình huống thay tranh.",
    });
  }
  if (unit.mapFlags.includes("phrasal-vocab-heavy") || unit.mapFlags.includes("collocation-list")) {
    points.push({
      before: "Nội dung thiên về ",
      strong: "danh sách cụm / collocation",
      after: " hơn là một quy tắc ngữ pháp đơn lẻ — gần với học từ vựng.",
    });
  }
  if (unit.mapFlags.includes("nuance-like-as") || unit.mapFlags.includes("nuance-multiple-adverbs")) {
    points.push({
      before: "Unit nhấn mạnh ",
      strong: "sắc thái dùng từ",
      after: " — cần nhiều cặp ví dụ đối chiếu.",
    });
  }

  points.push({
    before: "Lý thuyết chi tiết + bài tập đang được biên soạn; hiện có ",
    strong: "khung unit và mô tả trọng tâm",
    after: " để bạn định hướng học.",
  });

  return points;
}

/** Thin book-faithful shell for units not yet fully curated. */
export function buildEgiuTopicDetail(unit: EgiuUnitRecord): GrammarTopicDetail {
  return {
    slug: unit.id,
    title: unit.title,
    levelLabel: "Intermediate",
    kindLabel: unit.kindLabel,
    sourceBook: `English Grammar in Use · Intermediate · Unit ${unit.unitNumber}`,
    sourceNote: `${unit.title}${unit.subtitle ? ` (${unit.subtitle})` : ""}. Section: ${unit.section}.`,
    intro: unit.subtitle
      ? `${unit.title} — ${unit.subtitle}. Unit ${unit.unitNumber} trong English Grammar in Use (Intermediate).`
      : `${unit.title}. Unit ${unit.unitNumber} trong English Grammar in Use (Intermediate).`,
    structure: structureFromUnit(unit),
    usagePoints: usagePointsFromUnit(unit),
    examples: [
      {
        english: "Examples from this unit are being prepared.",
        vietnamese: "Ví dụ minh họa lấy từ trang lý thuyết Unit này sẽ được bổ sung trong bản cập nhật tiếp theo.",
      },
    ],
    practice: {
      questionCount: 0,
      studentCount: 0,
    },
  };
}
