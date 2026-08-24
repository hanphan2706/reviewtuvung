/** Phân loại filter Sample Writing Library (UI). */

export type WritingTaskKind = "task1" | "task2";

export type WritingTask1Subtype = "dynamic-chart" | "static-chart" | "map-process";
export type WritingTask2Subtype =
  | "opinion"
  | "discussion"
  | "cause-effect-solution"
  | "advantage-disadvantage"
  | "two-part";

export type WritingSubtype = WritingTask1Subtype | WritingTask2Subtype;

export const WRITING_TASK1_SUBTYPES: readonly {
  id: WritingTask1Subtype;
  label: string;
}[] = [
  { id: "dynamic-chart", label: "Dynamic chart" },
  { id: "static-chart", label: "Static chart" },
  { id: "map-process", label: "Map & Process" },
] as const;

export const WRITING_TASK2_SUBTYPES: readonly {
  id: WritingTask2Subtype;
  label: string;
}[] = [
  { id: "opinion", label: "Opinion" },
  { id: "discussion", label: "Discussion" },
  { id: "cause-effect-solution", label: "Cause – Effect – Solution" },
  { id: "advantage-disadvantage", label: "Advantage & Disadvantage" },
  { id: "two-part", label: "Two-part question" },
] as const;

const TASK1_TYPE_MAP: Record<string, WritingTask1Subtype> = {
  line: "dynamic-chart",
  bar: "dynamic-chart",
  "bar-chart": "dynamic-chart",
  graph: "dynamic-chart",
  "line-graph": "dynamic-chart",
  "2-graphs": "dynamic-chart",
  "2-graph": "dynamic-chart",
  "two-graphs": "dynamic-chart",
  mixed: "dynamic-chart",
  table: "static-chart",
  pie: "static-chart",
  "pie-chart": "static-chart",
  chart: "static-chart",
  map: "map-process",
  process: "map-process",
  diagram: "map-process",
  flowchart: "map-process",
  cycle: "map-process",
};

const TASK2_TYPE_MAP: Record<string, WritingTask2Subtype> = {
  opinion: "opinion",
  agree: "opinion",
  "agree-disagree": "opinion",
  discussion: "discussion",
  discuss: "discussion",
  "both-views": "discussion",
  "cause-effect": "cause-effect-solution",
  "cause-solution": "cause-effect-solution",
  "cause-effect-solution": "cause-effect-solution",
  "problem-solution": "cause-effect-solution",
  solution: "cause-effect-solution",
  advantage: "advantage-disadvantage",
  disadvantage: "advantage-disadvantage",
  disadvantages: "advantage-disadvantage",
  "advantage-disadvantage": "advantage-disadvantage",
  "advantages-disadvantages": "advantage-disadvantage",
  "two-part": "two-part",
  "two-question": "two-part",
  "direct-question": "two-part",
};

export function mapWritingSourceType(
  task: WritingTaskKind,
  sourceType: string,
): WritingSubtype | null {
  const key = sourceType
    .trim()
    .toLowerCase()
    .replace(/[&–—]/g, " ")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  if (!key) return null;
  if (task === "task1") return TASK1_TYPE_MAP[key] ?? null;
  return TASK2_TYPE_MAP[key] ?? null;
}

export function writingSubtypeLabel(subtype: WritingSubtype | null | undefined): string {
  if (!subtype) return "Sample";
  const hit =
    WRITING_TASK1_SUBTYPES.find((s) => s.id === subtype) ??
    WRITING_TASK2_SUBTYPES.find((s) => s.id === subtype);
  return hit?.label ?? subtype;
}

/** Label dạng chart/question thô từ HTML (line, bar, table, opinion…). */
export function formatWritingSourceTypeLabel(sourceType: string): string {
  const key = sourceType.trim().toLowerCase().replace(/\s+/g, " ");
  const known: Record<string, string> = {
    line: "Line",
    bar: "Bar",
    "bar chart": "Bar",
    pie: "Pie",
    "pie chart": "Pie",
    table: "Table",
    map: "Map",
    process: "Process",
    diagram: "Diagram",
    flowchart: "Flowchart",
    graph: "Graph",
    "line graph": "Line",
    "2 graphs": "2 Graphs",
    "2 graph": "2 Graphs",
    "two graphs": "2 Graphs",
    mixed: "Mixed",
    opinion: "Opinion",
    discussion: "Discussion",
    "two-part": "Two-part",
    "two part": "Two-part",
  };
  if (known[key]) return known[key];
  return formatWritingTopicLabel(sourceType);
}

/** Chuẩn hóa topic từ library (slug → Title Case). */
export function formatWritingTopicLabel(topic: string): string {
  const t = topic.trim();
  if (!t) return "General";
  return t
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

/** Sửa title HTML khi map: prefix Cambridge, cắt chữ, typo, hậu tố Ad. */
const WRITING_TITLE_OVERRIDES_BY_ID: Record<string, string> = {
  "w-task2-c-34-help-people-in-other-countri": "Help People in Other Countries",
  "w-task2-c-13-traditional-cultures-and": "Traditional Cultures and Technology",
  "w-task2-c-43-energetic-engineering": "Genetic Engineering",
};

const WRITING_TITLE_OVERRIDES_BY_NORMALIZED: Record<string, string> = {
  "help people in other countri": "Help People in Other Countries",
  "traditional cultures and": "Traditional Cultures and Technology",
  "energetic engineering": "Genetic Engineering",
};

function applyWritingTitleAcronyms(title: string): string {
  return title
    .replace(/\bCctv\b/g, "CCTV")
    .replace(/\bTv\b/g, "TV")
    .replace(/\bIt\b/g, "IT")
    .replace(/\bUae\b/g, "UAE")
    .replace(/\bUk\b/g, "UK")
    .replace(/\bUsa\b/g, "USA");
}

/** Chuẩn hóa title sample: bỏ (type), C nn, hậu tố Ad, và override lỗi nguồn. */
export function formatWritingSampleTitle(title: string, sampleId?: string): string {
  if (sampleId && WRITING_TITLE_OVERRIDES_BY_ID[sampleId]) {
    return WRITING_TITLE_OVERRIDES_BY_ID[sampleId]!;
  }

  let next = title.trim();
  next = next.replace(/\s*\([^)]*\)\s*$/u, "").trim();
  next = next.replace(/^C\s*\d+\s+/iu, "").trim();
  next = next.replace(/\s+Ad$/iu, "").trim();

  const override = WRITING_TITLE_OVERRIDES_BY_NORMALIZED[next.toLowerCase()];
  if (override) return override;

  next = applyWritingTitleAcronyms(next);
  return next || title.trim();
}
