import {
  LISTENING_FLOW_COPY,
  LISTENING_GIST_OPTION_KEYS,
  LISTENING_PREDICTION_OPTION_KEYS,
  type ListeningFlowLocale,
} from "@/lib/listening/listening-seven-step-copy";
import { parseConversationNumberFromLabel } from "@/lib/listening/tactics-conversation-segments";
import { TACTICS_BASIC_FLOW_UNITS_2_3 } from "@/lib/listening/tactics-basic-flow-units-2-3";
import { TACTICS_BASIC_FLOW_UNITS_4_5 } from "@/lib/listening/tactics-basic-flow-units-4-5";
import { TACTICS_BASIC_FLOW_UNITS_6_8 } from "@/lib/listening/tactics-basic-flow-units-6-8";
import {
  DEFAULT_GIST_CORRECT_KEYS,
  TACTICS_GIST_CORRECT_KEYS,
} from "@/lib/listening/tactics-gist-correct-config";
import { BASIC_IELTS_FLOW_CONTENT } from "@/lib/listening/basic-ielts-flow-content";
import type {
  ListeningFlowDetailQuestion,
  ListeningFlowLessonContent,
  ListeningFlowLocalizedOption,
  ResolvedFlowExerciseContent,
} from "@/lib/listening/tactics-basic-flow-types";

export type {
  ListeningFlowDetailQuestion,
  ListeningFlowLessonContent,
  ListeningFlowLocalizedOption,
  ResolvedFlowExerciseContent,
} from "@/lib/listening/tactics-basic-flow-types";

/** Student Book Unit 1 — Listening 1 (Introductions and Names). */
const INTRODUCTIONS_AND_NAMES_CONTENT: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "names",
      labelEn: "People's names",
      labelVi: "Tên của mọi người",
    },
    {
      key: "spelling",
      labelEn: "Spelling names",
      labelVi: "Đánh vần tên",
    },
    {
      key: "contact",
      labelEn: "Email addresses and phone numbers",
      labelVi: "Email và số điện thoại",
    },
    {
      key: "weather",
      labelEn: "Weather and weekend plans",
      labelVi: "Thời tiết và kế hoạch cuối tuần",
    },
  ],
  gistOptions: [
    {
      key: "contact-details",
      labelEn: "Exchanging names, spellings, and contact details",
      labelVi: "Trao đổi tên, cách đánh vần và thông tin liên lạc",
      correct: true,
    },
    {
      key: "intro-names",
      labelEn: "Meeting people and saying or spelling names",
      labelVi: "Làm quen và nói hoặc đánh vần tên",
      correct: true,
    },
    {
      key: "fix-contact-mistakes",
      labelEn: "Correcting mistakes in emails or phone numbers",
      labelVi: "Sửa lại email hoặc số điện thoại bị nghe nhầm",
    },
    {
      key: "social-plans",
      labelEn: "Making plans to call or meet later",
      labelVi: "Hẹn gọi điện hoặc gặp nhau sau",
    },
  ],
  detailQuestions: [
    {
      key: "q1",
      conversationEn: "Conversation 1",
      conversationVi: "Hội thoại 1",
      questionEn: "What is her name? How do you spell it?",
      questionVi: "Tên cô ấy là gì? Đánh vần thế nào?",
      answerEn: "Alina — A-L-I-N-A.",
      answerVi: "Alina — A-L-I-N-A.",
    },
    {
      key: "q2",
      conversationEn: "Conversation 2",
      conversationVi: "Hội thoại 2",
      questionEn: "How do you spell Rosenblum?",
      questionVi: "Đánh vần Rosenblum thế nào?",
      answerEn: "R-O-S-E-N-B-L-U-M.",
      answerVi: "R-O-S-E-N-B-L-U-M.",
    },
    {
      key: "q3",
      conversationEn: "Conversation 3",
      conversationVi: "Hội thoại 3",
      questionEn: "What is the correct email address?",
      questionVi: "Địa chỉ email đúng là gì?",
      answerEn: "Nat Wilson at T-Mail.com (N-A-T-W-I-L-S-O-N).",
      answerVi: "Nat Wilson tại T-Mail.com (N-A-T-W-I-L-S-O-N).",
    },
    {
      key: "q4",
      conversationEn: "Conversation 4",
      conversationVi: "Hội thoại 4",
      questionEn: "What is the correct email address?",
      questionVi: "Địa chỉ email đúng là gì?",
      answerEn: "CoolGal at R-O-L.com (G-A-L, not “Cool PAL”).",
      answerVi: "CoolGal tại R-O-L.com (G-A-L, không phải “Cool PAL”).",
    },
    {
      key: "q5",
      conversationEn: "Conversation 5",
      conversationVi: "Hội thoại 5",
      questionEn: "What is the correct phone number?",
      questionVi: "Số điện thoại đúng là gì?",
      answerEn: "555-2398.",
      answerVi: "555-2398.",
    },
    {
      key: "q6",
      conversationEn: "Conversation 6",
      conversationVi: "Hội thoại 6",
      questionEn: "What is his cell phone number?",
      questionVi: "Số di động của anh ấy là gì?",
      answerEn: "555-7216.",
      answerVi: "555-7216.",
    },
  ],
  memoryPlaceholder: "…",
};

/** Student Book Unit 1 — Listening 2 (Meeting People at a Party). */
const MEETING_PEOPLE_CONTENT: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "party",
      labelEn: "Meeting people at a party",
      labelVi: "Làm quen tại tiệc",
    },
    {
      key: "register",
      labelEn: "Registering for a class",
      labelVi: "Đăng ký lớp học",
    },
    {
      key: "reservations",
      labelEn: "Reservations and check-in",
      labelVi: "Đặt chỗ và nhận phòng",
    },
    {
      key: "shopping",
      labelEn: "Shopping for clothes",
      labelVi: "Mua quần áo",
    },
  ],
  gistOptions: [
    {
      key: "everyday-situations",
      labelEn: "Short everyday conversations when people meet or give personal details",
      labelVi: "Các hội thoại ngắn khi gặp gỡ hoặc cung cấp thông tin cá nhân",
      correct: true,
    },
    {
      key: "arrangements",
      labelEn: "Registering for classes, reservations, and hotel check-in",
      labelVi: "Đăng ký lớp, đặt chỗ và nhận phòng khách sạn",
      correct: true,
    },
    {
      key: "party-catch-up",
      labelEn: "People at a party catching up with friends",
      labelVi: "Mọi người tại tiệc trò chuyện với bạn bè",
    },
    {
      key: "homework-help",
      labelEn: "A student asking a classmate about homework",
      labelVi: "Học sinh hỏi bạn cùng lớp về bài tập",
    },
  ],
  detailQuestions: [
    {
      key: "q1",
      conversationEn: "Conversation 1",
      conversationVi: "Hội thoại 1",
      questionEn: "How does the man say he knows Lena?",
      questionVi: "Người đàn ông nói anh ấy quen Lena như thế nào?",
      answerEn: "He says he's her brother.",
      answerVi: "Anh ấy nói mình là anh trai của Lena.",
    },
    {
      key: "q2",
      conversationEn: "Conversation 2",
      conversationVi: "Hội thoại 2",
      questionEn: "Which English level? What is her name?",
      questionVi: "Trình độ tiếng Anh nào? Tên cô ấy là gì?",
      answerEn: "Level 6. Sylvia Gomez.",
      answerVi: "Level 6. Sylvia Gomez.",
    },
    {
      key: "q3",
      conversationEn: "Conversation 3",
      conversationVi: "Hội thoại 3",
      questionEn: "What time is the dinner reservation? For how many people?",
      questionVi: "Đặt bàn lúc mấy giờ? Cho bao nhiêu người?",
      answerEn: "7 o'clock, for 4 people.",
      answerVi: "7 giờ, cho 4 người.",
    },
    {
      key: "q4",
      conversationEn: "Conversation 4",
      conversationVi: "Hội thoại 4",
      questionEn: "What do Dana and Liza plan to do?",
      questionVi: "Dana và Liza định làm gì?",
      answerEn: "Get together and have coffee.",
      answerVi: "Gặp nhau và uống cà phê.",
    },
    {
      key: "q5",
      conversationEn: "Conversation 5",
      conversationVi: "Hội thoại 5",
      questionEn: "What is the guest's name?",
      questionVi: "Tên khách là gì?",
      answerEn: "Chuck Bellington.",
      answerVi: "Chuck Bellington.",
    },
    {
      key: "q6",
      conversationEn: "Conversation 6",
      conversationVi: "Hội thoại 6",
      questionEn: "Why does Marta call Alina?",
      questionVi: "Marta gọi Alina vì sao?",
      answerEn: "She missed class on Friday and wants the homework assignment (Alina will email it).",
      answerVi: "Cô ấy nghỉ thứ Sáu và cần bài tập về nhà (Alina sẽ gửi qua email).",
    },
  ],
  memoryPlaceholder: "…",
};

/** Student Book Unit 1 — Listening 3 (Getting Names Right). */
const GETTING_NAMES_RIGHT_CONTENT: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "wrong-name",
      labelEn: "Someone using the wrong name",
      labelVi: "Gọi nhầm tên",
    },
    {
      key: "spelling",
      labelEn: "Spelling a name to clarify",
      labelVi: "Đánh vần tên để làm rõ",
    },
    {
      key: "corrections",
      labelEn: "Polite corrections",
      labelVi: "Sửa lại một cách lịch sự",
    },
    {
      key: "directions",
      labelEn: "Asking for directions on the street",
      labelVi: "Hỏi đường trên phố",
    },
  ],
  gistOptions: [
    {
      key: "fix-wrong-name",
      labelEn: "Someone politely fixes a name that was said wrong",
      labelVi: "Ai đó lịch sự sửa lại tên bị gọi nhầm",
      correct: true,
    },
    {
      key: "spell-clarify",
      labelEn: "Someone spells a name letter by letter to clarify",
      labelVi: "Ai đó đánh vần tên từng chữ cái để làm rõ",
      correct: true,
    },
    {
      key: "greet-friends",
      labelEn: "Friends greeting each other and chatting briefly",
      labelVi: "Bạn bè chào hỏi và trò chuyện ngắn",
    },
    {
      key: "recognize-stranger",
      labelEn: "People realizing they have seen each other before",
      labelVi: "Mọi người nhận ra đã từng gặp nhau",
    },
  ],
  detailQuestions: [
    {
      key: "q1",
      conversationEn: "Conversation 1",
      conversationVi: "Hội thoại 1",
      questionEn: "What wrong name does Jack use?",
      questionVi: "Jack gọi nhầm tên gì?",
      answerEn: "Denise (her name is Elise).",
      answerVi: "Denise (tên đúng là Elise).",
    },
    {
      key: "q2",
      conversationEn: "Conversation 2",
      conversationVi: "Hội thoại 2",
      questionEn: "What do they talk about after the name is corrected?",
      questionVi: "Sau khi sửa tên, họ nói về việc gì?",
      answerEn: "Whether Mick is going to the gym this weekend.",
      answerVi: "Mick có đi gym cuối tuần này không.",
    },
    {
      key: "q3",
      conversationEn: "Conversation 3",
      conversationVi: "Hội thoại 3",
      questionEn: "How does Hannah correct the wrong name?",
      questionVi: "Hannah sửa tên nhầm như thế nào?",
      answerEn: "She says “Actually, my name's Hannah, not Anna” and spells H-A-N-N-A-H.",
      answerVi: "Cô ấy nói “Actually, my name's Hannah, not Anna” và đánh vần H-A-N-N-A-H.",
    },
    {
      key: "q4",
      conversationEn: "Conversation 4",
      conversationVi: "Hội thoại 4",
      questionEn: "What does the man say to start the conversation?",
      questionVi: "Người đàn ông nói gì để bắt đầu trò chuyện?",
      answerEn: "Excuse me. Don't I know you from somewhere?",
      answerVi: "“Excuse me. Don't I know you from somewhere?” (Xin lỗi, có phải mình quen bạn ở đâu rồi không?)",
    },
    {
      key: "q5",
      conversationEn: "Conversation 5",
      conversationVi: "Hội thoại 5",
      questionEn: "How does the man say his name is really spelled?",
      questionVi: "Anh ấy nói tên mình đánh vần đúng thế nào?",
      answerEn: "I-K-E (not Mike with an M).",
      answerVi: "I-K-E (không phải Mike với chữ M).",
    },
    {
      key: "q6",
      conversationEn: "Conversation 6",
      conversationVi: "Hội thoại 6",
      questionEn: "How does Tandy correct the wrong name?",
      questionVi: "Tandy sửa tên nhầm như thế nào?",
      answerEn: "She says “Actually, it's Tandy” (not Mandy) and spells T-A-N-D-Y.",
      answerVi: "Cô ấy nói “Actually, it's Tandy” (không phải Mandy) và đánh vần T-A-N-D-Y.",
    },
  ],
  memoryPlaceholder: "…",
};

/** Student Book Unit 2 — Listening 1 (Describing People), Let's Listen p.6. */
const DESCRIBING_PEOPLE_CONTENT: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "age",
      labelEn: "How old someone is",
      labelVi: "Tuổi của một người",
    },
    {
      key: "hair",
      labelEn: "Hair color and style",
      labelVi: "Màu tóc và kiểu tóc",
    },
    {
      key: "height",
      labelEn: "How tall someone is",
      labelVi: "Chiều cao của một người",
    },
    {
      key: "jobs",
      labelEn: "People's jobs and salaries",
      labelVi: "Nghề nghiệp và lương bổng",
    },
  ],
  gistOptions: [
    {
      key: "mixed-appearance",
      labelEn: "Different physical features people notice about others",
      labelVi: "Nhiều đặc điểm ngoại hình khác nhau mà người ta mô tả",
      correct: true,
    },
    {
      key: "appearance-topics",
      labelEn: "Talking about people's age, hair, and height",
      labelVi: "Nói về tuổi, tóc và chiều cao của mọi người",
      correct: true,
    },
    {
      key: "age-only",
      labelEn: "Conversations about how old people are",
      labelVi: "Cuộc hội thoại về tuổi của mọi người",
    },
    {
      key: "hair-only",
      labelEn: "Conversations about hair color and style",
      labelVi: "Cuộc hội thoại về màu tóc và kiểu tóc",
    },
    {
      key: "height-only",
      labelEn: "Conversations about how tall or short people are",
      labelVi: "Cuộc hội thoại về cao/thấp của mọi người",
    },
  ],
  detailQuestions: [
    {
      key: "q1",
      conversationEn: "Conversation 1",
      conversationVi: "Hội thoại 1",
      questionEn: "How old is the boss?",
      questionVi: "Sếp bao nhiêu tuổi?",
      answerEn: "About 35 (in his 30s).",
      answerVi: "Khoảng 35 tuổi (trong độ tuổi 30).",
    },
    {
      key: "q2",
      conversationEn: "Conversation 2",
      conversationVi: "Hội thoại 2",
      questionEn: "How long is the hair? What color is it?",
      questionVi: "Tóc dài hay ngắn? Màu gì?",
      answerEn: "Pretty long, light brown, and a little curly.",
      answerVi: "Khá dài, màu nâu nhạt, hơi xoăn.",
    },
    {
      key: "q3",
      conversationEn: "Conversation 4",
      conversationVi: "Hội thoại 4",
      questionEn: "How old does he look? How old is he really?",
      questionVi: "Trông bao nhiêu tuổi? Thực ra bao nhiêu tuổi?",
      answerEn: "He looks about 17, but he is almost 25.",
      answerVi: "Trông khoảng 17, nhưng thực ra gần 25 tuổi.",
    },
    {
      key: "q4",
      conversationEn: "Conversation 6",
      conversationVi: "Hội thoại 6",
      questionEn: "Is the woman short or tall?",
      questionVi: "Người phụ nữ thấp hay cao?",
      answerEn: "She is really tall (about 6 feet).",
      answerVi: "Cô ấy rất cao (khoảng 6 feet).",
    },
    {
      key: "q5",
      conversationEn: "Conversation 5",
      conversationVi: "Hội thoại 5",
      questionEn: "How does she wear her hair? Is it straight or curly?",
      questionVi: "Cô ấy để tóc thế nào? Thẳng hay xoăn?",
      answerEn: "She wears it really short, and it is curly.",
      answerVi: "Cô ấy để tóc rất ngắn và tóc xoăn.",
    },
    {
      key: "q6",
      conversationEn: "Conversation 7",
      conversationVi: "Hội thoại 7",
      questionEn: "Is she in her teens or her twenties?",
      questionVi: "Cô ấy tuổi teen hay tuổi 20?",
      answerEn: "She is in her 20s.",
      answerVi: "Cô ấy trong độ tuổi 20.",
    },
  ],
  memoryPlaceholder: "…",
};

const TACTICS_BASIC_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "tactics-basic-u01-l01": INTRODUCTIONS_AND_NAMES_CONTENT,
  "tactics-basic-u01-l02": MEETING_PEOPLE_CONTENT,
  "tactics-basic-u01-l03": GETTING_NAMES_RIGHT_CONTENT,
  "tactics-basic-u02-l01": DESCRIBING_PEOPLE_CONTENT,
  ...TACTICS_BASIC_FLOW_UNITS_2_3,
  ...TACTICS_BASIC_FLOW_UNITS_4_5,
  ...TACTICS_BASIC_FLOW_UNITS_6_8,
};

function localizeOption(option: ListeningFlowLocalizedOption, locale: ListeningFlowLocale): { key: string; label: string } {
  return {
    key: option.key,
    label: locale === "vi" ? option.labelVi : option.labelEn,
  };
}

function defaultLessonContent(locale: ListeningFlowLocale): ListeningFlowLessonContent {
  const copy = LISTENING_FLOW_COPY[locale];
  return {
    predictionOptions: LISTENING_PREDICTION_OPTION_KEYS.map((key, index) => ({
      key,
      labelEn: LISTENING_FLOW_COPY.en.step1Options[index] ?? key,
      labelVi: LISTENING_FLOW_COPY.vi.step1Options[index] ?? key,
    })),
    gistOptions: LISTENING_GIST_OPTION_KEYS.map((key, index) => ({
      key,
      labelEn: LISTENING_FLOW_COPY.en.step2Options[index] ?? key,
      labelVi: LISTENING_FLOW_COPY.vi.step2Options[index] ?? key,
      correct: DEFAULT_GIST_CORRECT_KEYS.includes(key as (typeof DEFAULT_GIST_CORRECT_KEYS)[number]),
    })),
    detailQuestions: [
      {
        key: "q1",
        questionEn: LISTENING_FLOW_COPY.en.step4Q1,
        questionVi: LISTENING_FLOW_COPY.vi.step4Q1,
        conversationEn: "Conversation 1",
        conversationVi: "Hội thoại 1",
        answerEn: "Listen for who is speaking or the main person's name.",
        answerVi: "Nghe để xác định ai đang nói hoặc tên người chính.",
      },
      {
        key: "q2",
        questionEn: LISTENING_FLOW_COPY.en.step4Q2,
        questionVi: LISTENING_FLOW_COPY.vi.step4Q2,
        conversationEn: "Conversation 2",
        conversationVi: "Hội thoại 2",
        answerEn: "Note one clear detail you remember from the listening.",
        answerVi: "Ghi một chi tiết bạn nhớ rõ từ bài nghe.",
      },
    ],
    memoryPlaceholder: copy.step3Placeholder,
  };
}

function applyGistCorrectKeys(
  lesson: ListeningFlowLessonContent,
  correctKeys: readonly string[],
): ListeningFlowLessonContent {
  const correctSet = new Set(correctKeys);
  return {
    ...lesson,
    gistOptions: lesson.gistOptions.map((option) => {
      const { correct: _ignored, ...rest } = option;
      return {
        ...rest,
        ...(correctSet.has(option.key) ? { correct: true as const } : {}),
      };
    }),
  };
}

export function getListeningFlowLessonContent(partId: string): ListeningFlowLessonContent | undefined {
  const lesson = TACTICS_BASIC_FLOW_CONTENT[partId] ?? BASIC_IELTS_FLOW_CONTENT[partId];
  if (!lesson) return undefined;
  const correctKeys = TACTICS_GIST_CORRECT_KEYS[partId];
  if (!correctKeys?.length) return lesson;
  return applyGistCorrectKeys(lesson, correctKeys);
}

function hashShuffleSeed(seed: string): number {
  let hash = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededRandom(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = Math.imul(state ^ (state >>> 15), state | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Xáo thứ tự ổn định theo seed — không đổi giữa các lần render. */
function shuffleFlowOptions<T>(items: readonly T[], seed: string): T[] {
  const out = [...items];
  const random = seededRandom(hashShuffleSeed(seed));
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    const tmp = out[i]!;
    out[i] = out[j]!;
    out[j] = tmp;
  }
  return out;
}

export function resolveFlowExerciseFromLesson(
  lesson: ListeningFlowLessonContent,
  locale: ListeningFlowLocale,
  shuffleSeed: string,
): ResolvedFlowExerciseContent {
  const copy = LISTENING_FLOW_COPY[locale];
  const gistCorrectKeys = lesson.gistOptions.filter((option) => option.correct).map((option) => option.key);
  const shuffledGist = shuffleFlowOptions(lesson.gistOptions, `${shuffleSeed}:gist`);
  return {
    predictionOptions: lesson.predictionOptions.map((option) => localizeOption(option, locale)),
    gistOptions: shuffledGist.map((option) => localizeOption(option, locale)),
    gistCorrectKeys,
    detailQuestions: lesson.detailQuestions.map((question) => ({
      key: question.key,
      conversation: locale === "vi" ? question.conversationVi : question.conversationEn,
      conversationNumber: parseConversationNumberFromLabel(
        locale === "vi" ? question.conversationVi : question.conversationEn,
      ),
      question: locale === "vi" ? question.questionVi : question.questionEn,
      answer: locale === "vi" ? question.answerVi : question.answerEn,
    })),
    memoryPlaceholder: lesson.memoryPlaceholder ?? copy.step3Placeholder,
    detailPrompt:
      locale === "vi"
        ? (lesson.detailPromptVi ?? null)
        : (lesson.detailPromptEn ?? null),
  };
}

export function resolveFlowExerciseContent(
  partId: string,
  locale: ListeningFlowLocale,
): ResolvedFlowExerciseContent {
  const lesson = getListeningFlowLessonContent(partId) ?? defaultLessonContent(locale);
  return resolveFlowExerciseFromLesson(lesson, locale, partId);
}
