export type ListeningFlowLocale = "vi" | "en";

export type ListeningFlowCopy = {
  localeToggleShowEn: string;
  localeToggleShowVi: string;
  stepShortLabels: readonly string[];
  stepTitles: readonly string[];
  step1Prompt: string;
  step1Start: string;
  step1Options: readonly string[];
  step2Prompt: string;
  step2Options: readonly string[];
  step3Prompt: string;
  step3Placeholder: string;
  step4Prompt: string;
  step4Q1: string;
  step4Q2: string;
  step4ListenAgain: string;
  stepClozePrompt: string;
  stepKeywordPrompt: string;
  stepKeywordQuestionCol: string;
  stepKeywordParaphraseCol: string;
  stepKeywordNearMatch: string;
  step5Prompt: string;
  step5SyncedLabel: string;
  step5NotSyncedLabel: string;
  step6Prompt: string;
  step6ReflectionOptions: readonly { id: string; label: string }[];
  step6Restart: string;
  back: string;
  next: string;
  checkAnswer: string;
  gistCorrect: string;
  gistIncorrect: string;
  modelAnswerLabel: string;
  selectAnswerFirst: string;
  replayConversation: string;
};

const STEP1_OPTIONS_VI = ["Đi mua sắm", "Xem phim", "Thăm người thân", "Chơi thể thao"] as const;
const STEP1_OPTIONS_EN = ["Go shopping", "Watch a movie", "Visit relatives", "Play sports"] as const;
const STEP2_OPTIONS_VI = [
  "Kế hoạch đi chơi cuối tuần",
  "Giới thiệu bản thân",
  "Cuộc sống ở trường",
  "Sức khỏe",
] as const;
const STEP2_OPTIONS_EN = [
  "Weekend plans",
  "Introducing yourself",
  "School life",
  "Health",
] as const;

export const LISTENING_FLOW_COPY: Record<ListeningFlowLocale, ListeningFlowCopy> = {
  vi: {
    localeToggleShowEn: "English",
    localeToggleShowVi: "Tiếng Việt",
    stepShortLabels: [
      "DỰ ĐOÁN",
      "Ý CHÍNH",
      "GHI NHỚ",
      "NGHE LẠI",
      "ĐỤC LỖ",
      "KEYWORD",
      "SHADOWING",
      "PHẢN ÁNH",
    ],
    stepTitles: [
      "Dự đoán",
      "Nghe ý chính",
      "Ghi nhớ từ",
      "Nghe lần 2",
      "Đục lỗ transcript",
      "Keyword và paraphrase",
      "Shadowing",
      "Phản ánh",
    ],
    step1Prompt: "Dựa vào tiêu đề và phần giới thiệu, bạn đoán mình sẽ nghe những nội dung nào?",
    step1Start: "Bắt đầu nghe",
    step1Options: STEP1_OPTIONS_VI,
    step2Prompt: "Bài nghe chủ yếu nói về những ý nào? Chọn tất cả đáp án đúng.",
    step2Options: STEP2_OPTIONS_VI,
    step3Prompt:
      "Bạn nhớ được từ hay cụm từ nào trong bài nghe? Ghi tự do, không cần sợ sai chính tả.",
    step3Placeholder: "…",
    step4Prompt: "Nghe lần hai và trả lời các câu hỏi bên dưới.",
    step4Q1: "Ai đang nói / tên người chính là gì?",
    step4Q2: "Chi tiết nào bạn nhớ rõ nhất?",
    step4ListenAgain: "Nghe lại & tiếp",
    stepClozePrompt:
      "Nghe lại và điền chỗ trống — những chỗ dễ miss: nối âm, nuốt âm, collocation, signpost, weak form.",
    stepKeywordPrompt:
      "Điền cách audio paraphrase keyword trong câu hỏi. Kiểm tra để xem đáp án mẫu và giải thích.",
    stepKeywordQuestionCol: "Câu hỏi",
    stepKeywordParaphraseCol: "Paraphrase trên audio",
    stepKeywordNearMatch: "Gần đúng — đối chiếu đáp án mẫu bên dưới.",
    step5Prompt:
      "Đọc theo audio và shadowing từng dòng. Chạm vào câu để nhảy tới đoạn đó. Bôi đen text để tra từ.",
    step5SyncedLabel: "Đồng bộ",
    step5NotSyncedLabel: "Chưa có mốc thời gian",
    step6Prompt: "Bạn nghe sai/thiếu hoặc chưa được 80% là vì các lý do nào?",
    step6ReflectionOptions: [
      { id: "vocabulary", label: "Từ vựng chưa biết" },
      { id: "speed", label: "Nói quá nhanh" },
      { id: "linking", label: "Nối âm" },
      { id: "accent", label: "Giọng" },
      { id: "memory", label: "Ghi nhớ" },
      { id: "concentration", label: "Mất tập trung" },
    ],
    step6Restart: "Làm lại bài",
    back: "Quay lại",
    next: "Tiếp theo",
    checkAnswer: "Kiểm tra đáp án",
    gistCorrect: "Chính xác!",
    gistIncorrect: "Chưa đúng — nghe lại và thử chọn ý chính khác.",
    modelAnswerLabel: "Đáp án",
    selectAnswerFirst: "Chọn ít nhất một đáp án trước.",
    replayConversation: "Nghe lại đoạn này",
  },
  en: {
    localeToggleShowEn: "English",
    localeToggleShowVi: "Tiếng Việt",
    stepShortLabels: [
      "PREDICT",
      "GIST",
      "RECALL",
      "LISTEN",
      "CLOZE",
      "KEYWORD",
      "SHADOWING",
      "REFLECT",
    ],
    stepTitles: [
      "Prediction",
      "Main idea",
      "Word recall",
      "Listen again",
      "Transcript gap-fill",
      "Keywords & paraphrases",
      "Shadowing",
      "Reflection",
    ],
    step1Prompt: "Based on the title and introduction, what content do you think you'll hear?",
    step1Start: "Start listening",
    step1Options: STEP1_OPTIONS_EN,
    step2Prompt: "What main ideas do you hear? Select all that apply.",
    step2Options: STEP2_OPTIONS_EN,
    step3Prompt:
      "What words or phrases do you remember from the listening? Write freely — spelling doesn't need to be perfect.",
    step3Placeholder: "…",
    step4Prompt: "Listen a second time and answer the questions below.",
    step4Q1: "Who is speaking / what is the main person's name?",
    step4Q2: "What detail do you remember clearly?",
    step4ListenAgain: "Listen again & continue",
    stepClozePrompt:
      "Listen again and fill the gaps — typical misses: linking, weak forms, collocations, and signposts.",
    stepKeywordPrompt:
      "Write how the audio paraphrases each question keyword. Check to see the model answer and explanation.",
    stepKeywordQuestionCol: "Question",
    stepKeywordParaphraseCol: "Paraphrase in the audio",
    stepKeywordNearMatch: "Close — compare with the model answer below.",
    step5Prompt:
      "Read along with the audio and shadow each line. Tap a sentence to jump to that moment. Highlight text to look up words.",
    step5SyncedLabel: "Synced",
    step5NotSyncedLabel: "No timestamps yet",
    step6Prompt: "Why did you miss words, hear incorrectly, or get less than 80% correct?",
    step6ReflectionOptions: [
      { id: "vocabulary", label: "Unknown vocabulary" },
      { id: "speed", label: "Speech too fast" },
      { id: "linking", label: "Linking" },
      { id: "accent", label: "Accent" },
      { id: "memory", label: "Memory" },
      { id: "concentration", label: "Lost focus" },
    ],
    step6Restart: "Restart lesson",
    back: "Back",
    next: "Next",
    checkAnswer: "Check answer",
    gistCorrect: "Correct!",
    gistIncorrect: "Not quite — listen again and try another main idea.",
    modelAnswerLabel: "Answer",
    selectAnswerFirst: "Select at least one answer first.",
    replayConversation: "Replay this clip",
  },
};

/** Stable keys for option selection across locale switches. */
export const LISTENING_PREDICTION_OPTION_KEYS = ["shopping", "movie", "relatives", "sports"] as const;
export const LISTENING_GIST_OPTION_KEYS = ["weekend", "intro", "school", "health"] as const;

export function predictionOptionLabel(locale: ListeningFlowLocale, key: string): string {
  const index = LISTENING_PREDICTION_OPTION_KEYS.indexOf(key as (typeof LISTENING_PREDICTION_OPTION_KEYS)[number]);
  if (index < 0) return key;
  return LISTENING_FLOW_COPY[locale].step1Options[index] ?? key;
}

export function gistOptionLabel(locale: ListeningFlowLocale, key: string): string {
  const index = LISTENING_GIST_OPTION_KEYS.indexOf(key as (typeof LISTENING_GIST_OPTION_KEYS)[number]);
  if (index < 0) return key;
  return LISTENING_FLOW_COPY[locale].step2Options[index] ?? key;
}
