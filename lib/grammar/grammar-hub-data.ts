import { EGIU_GRAMMAR_TOPICS, EGIU_UNIT_COUNT } from "@/lib/grammar/egiu/egiu-catalog";

export type GrammarPathLevelId = "foundation" | "intermediate" | "advanced";

export type GrammarCategoryId =
  | "tenses"
  | "clauses"
  | "structures"
  | "verbs"
  | "modals"
  | "nouns";

export type GrammarTopicStatus = "published" | "coming-soon";

export type GrammarPathLevel = {
  id: GrammarPathLevelId;
  titleEn: string;
  titleVi: string;
  cefrLabel: string;
  description: string;
  progressPercent: number | null;
  locked: boolean;
  topicCount: number;
  statusLabel?: string;
  completed?: boolean;
};

export type GrammarPathModule = {
  id: string;
  title: string;
  progressPercent: number;
};

export type GrammarLearningProgress = {
  id: string;
  label: string;
  progressPercent: number;
};

export type GrammarTopic = {
  id: string;
  title: string;
  titleVi?: string;
  description: string;
  category: GrammarCategoryId;
  categoryLabel: string;
  difficulty: "Easy" | "Medium" | "Hard";
  difficultyVi: "Dễ" | "Trung bình" | "Khó";
  progressPercent: number;
  status: GrammarTopicStatus;
  unitNumber: number;
};

export type GrammarDifficultyFilter = "all" | GrammarTopic["difficulty"];
export type GrammarCategoryFilter = "all" | GrammarCategoryId;

export const GRAMMAR_DIFFICULTY_FILTER_OPTIONS: readonly { value: GrammarDifficultyFilter; label: string }[] = [
  { value: "all", label: "Tất cả độ khó" },
  { value: "Easy", label: "Dễ" },
  { value: "Medium", label: "Trung bình" },
  { value: "Hard", label: "Khó" },
];

export const GRAMMAR_CATEGORY_FILTER_OPTIONS: readonly { value: GrammarCategoryFilter; label: string }[] = [
  { value: "all", label: "Tất cả loại" },
  { value: "tenses", label: "Thì" },
  { value: "clauses", label: "Mệnh đề" },
  { value: "structures", label: "Cấu trúc câu" },
  { value: "verbs", label: "Động từ / cụm động từ" },
  { value: "modals", label: "Modal verbs" },
  { value: "nouns", label: "Danh từ & mạo từ" },
];

export const GRAMMAR_BRAND = "#4b2876";

export function filterGrammarTopics(
  topics: readonly GrammarTopic[],
  query: string,
  difficulty: GrammarDifficultyFilter,
  category: GrammarCategoryFilter,
): GrammarTopic[] {
  const normalized = query.trim().toLowerCase();
  return topics.filter((topic) => {
    if (difficulty !== "all" && topic.difficulty !== difficulty) return false;
    if (category !== "all" && topic.category !== category) return false;
    if (!normalized) return true;
    const haystack =
      `${topic.title} ${topic.description} ${topic.categoryLabel} ${topic.difficultyVi} unit ${topic.unitNumber}`.toLowerCase();
    return haystack.includes(normalized);
  });
}

export const GRAMMAR_HUB_INTRO = {
  title: "Ngữ pháp",
  subtitle:
    'Biến ngữ pháp trở thành một công cụ giúp bạn sử dụng tiếng Anh tốt hơn, chứ không còn là "nỗi ám ảnh vô cớ" nữa',
};

export const GRAMMAR_OVERALL_PROGRESS = {
  levelTitle: "English Grammar in Use",
  summary:
    "Tiến độ tính theo bài luyện tập trên tài khoản đăng nhập — làm tới đâu, hiển thị tới đó.",
};

export const GRAMMAR_TOTAL_TOPIC_COUNT = EGIU_UNIT_COUNT;

export const GRAMMAR_TOPICS_SECTION_SUBTITLE =
  "Toàn bộ chủ điểm ngữ pháp tiếng Anh — chưa vững ở đâu thì học ở đó: vừa hiệu quả, vừa cá nhân hoá.";

/** Labels for hub progress bars (values filled at runtime from account progress). */
export const GRAMMAR_LEARNING_PROGRESS_LABELS: readonly { id: GrammarCategoryId; label: string }[] = [
  { id: "tenses", label: "Tenses" },
  { id: "clauses", label: "Clauses" },
  { id: "modals", label: "Modals" },
];

function countTopicsByDifficulty(difficulty: GrammarTopic["difficulty"]): number {
  return EGIU_GRAMMAR_TOPICS.filter((topic) => topic.difficulty === difficulty).length;
}

function pathStatusLabel(progressPercent: number): {
  statusLabel: string;
  completed: boolean;
} {
  if (progressPercent >= 100) {
    return { statusLabel: "Học xong", completed: true };
  }
  if (progressPercent > 0) {
    return { statusLabel: "Đang học", completed: false };
  }
  return { statusLabel: "Mở", completed: false };
}

export function buildGrammarPathLevels(
  progressByDifficulty: Record<GrammarTopic["difficulty"], number>,
): readonly GrammarPathLevel[] {
  const easyCount = countTopicsByDifficulty("Easy");
  const mediumCount = countTopicsByDifficulty("Medium");
  const hardCount = countTopicsByDifficulty("Hard");

  const easyStatus = pathStatusLabel(progressByDifficulty.Easy);
  const mediumStatus = pathStatusLabel(progressByDifficulty.Medium);
  const hardStatus = pathStatusLabel(progressByDifficulty.Hard);

  return [
    {
      id: "foundation",
      titleEn: "Foundation",
      titleVi: "Nền tảng",
      cefrLabel: "CẤP ĐỘ A2–B1",
      description: "Các thì cơ bản, mạo từ/danh từ mở đầu, các chủ điểm dễ tiếp cận.",
      progressPercent: progressByDifficulty.Easy,
      locked: false,
      topicCount: easyCount,
      statusLabel: easyStatus.statusLabel,
      completed: easyStatus.completed,
    },
    {
      id: "intermediate",
      titleEn: "Intermediate",
      titleVi: "Trung cấp",
      cefrLabel: "CẤP ĐỘ B1–B2",
      description: "Thì phức, modal, điều kiện, bị động, relative, giới từ…",
      progressPercent: progressByDifficulty.Medium,
      locked: false,
      topicCount: mediumCount,
      statusLabel: mediumStatus.statusLabel,
      completed: mediumStatus.completed,
    },
    {
      id: "advanced",
      titleEn: "Advanced",
      titleVi: "Nâng cao",
      cefrLabel: "CẤP ĐỘ B2+",
      description:
        "Nuance (sắc thái) khó hơn (passive nâng cao, relative đặc biệt, điều kiện quá khứ…).",
      progressPercent: progressByDifficulty.Hard,
      locked: false,
      topicCount: hardCount,
      statusLabel: hardStatus.statusLabel,
      completed: hardStatus.completed,
    },
  ];
}

export const GRAMMAR_PATH_MODULES: readonly GrammarPathModule[] = [
  { id: "passive", title: "Passive Voice", progressPercent: 0 },
  { id: "conditionals", title: "Conditionals", progressPercent: 0 },
  { id: "reported-speech", title: "Reported Speech", progressPercent: 0 },
  { id: "relative-clauses", title: "Relative Clauses", progressPercent: 0 },
];

/** All Intermediate explore topics = full EGIU catalog. */
export const GRAMMAR_EXPLORE_TOPICS: readonly GrammarTopic[] = EGIU_GRAMMAR_TOPICS;

export function grammarDifficultyColor(difficulty: GrammarTopic["difficulty"]): string {
  if (difficulty === "Hard") return "text-[#c0392b]";
  if (difficulty === "Easy") return "text-[#000001]";
  return "text-[#000001]";
}

export function grammarProgressBarColor(difficulty: GrammarTopic["difficulty"]): string {
  if (difficulty === "Hard") return "bg-[#c0392b]";
  return "bg-[#000001]";
}

/** Card subtitle: keep cue like "I do", strip "khung Unit N" / book filler. */
export function grammarTopicCardSubtitle(description: string): string | null {
  const cleaned = description
    .replace(/\s*[—–-]\s*khung\s+Unit\s+\d+\.?\s*$/i, "")
    .replace(/\s*khung\s+Unit\s+\d+\.?\s*$/i, "")
    .trim();
  if (!cleaned) return null;
  if (/^Unit\s+\d+\s+trong\s+English Grammar in Use/i.test(cleaned)) return null;
  return cleaned;
}

export const GRAMMAR_PATH_LEVEL_DIFFICULTY: Record<
  GrammarPathLevelId,
  GrammarTopic["difficulty"]
> = {
  foundation: "Easy",
  intermediate: "Medium",
  advanced: "Hard",
};

export const GRAMMAR_PATH_LEVEL_IDS: readonly GrammarPathLevelId[] = [
  "foundation",
  "intermediate",
  "advanced",
] as const;

export function isGrammarPathLevelId(value: string): value is GrammarPathLevelId {
  return (GRAMMAR_PATH_LEVEL_IDS as readonly string[]).includes(value);
}

export function grammarPathLevelHref(levelId: GrammarPathLevelId): string {
  return `/tu-hoc/ngu-phap/lo-trinh/${levelId}`;
}

export function getGrammarPathLevelDefinition(
  levelId: GrammarPathLevelId,
): Omit<GrammarPathLevel, "progressPercent" | "statusLabel" | "completed"> {
  const level = buildGrammarPathLevels({ Easy: 0, Medium: 0, Hard: 0 }).find(
    (item) => item.id === levelId,
  );
  if (!level) {
    throw new Error(`Unknown grammar path level: ${levelId}`);
  }
  return {
    id: level.id,
    titleEn: level.titleEn,
    titleVi: level.titleVi,
    cefrLabel: level.cefrLabel,
    description: level.description,
    locked: level.locked,
    topicCount: level.topicCount,
  };
}

export function listTopicsForPathLevel(levelId: GrammarPathLevelId): readonly GrammarTopic[] {
  const difficulty = GRAMMAR_PATH_LEVEL_DIFFICULTY[levelId];
  return EGIU_GRAMMAR_TOPICS.filter((topic) => topic.difficulty === difficulty);
}
