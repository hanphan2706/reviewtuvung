/** Layout mới — Khám phá chất giọng (`/chat-giong`). Layout cũ: `/chat-giong/classic`. */

export type AccentDiscoverVideoLesson = {
  id: string;
  title: string;
  /** Nhãn ngắn, không gói hẹp một chủ đề IPA — dùng ở sidebar & thẻ video. */
  scopeLabel: string;
  /** Ghi chú phụ trên thẻ ngoài trang chat-giong (tùy chọn). */
  cardNote?: string;
  durationLabel: string;
  /** YouTube video ID — null = placeholder card until links are provided. */
  youtubeVideoId: string | null;
};

export type AccentWordPair = {
  id: string;
  word: string;
  ukIpa: string;
  usIpa: string;
};

export const ACCENT_DISCOVER_VIDEO_LESSONS: readonly AccentDiscoverVideoLesson[] = [
  {
    id: "vowels",
    title: "Bài 1",
    scopeLabel: "Làm quen hai chất giọng Anh Anh & Mỹ",
    cardNote: "Video tổng hợp — nghe nhiều khác biệt, không chỉ một nhóm âm.",
    durationLabel: "05:20",
    youtubeVideoId: "vj7o0AAfM1U",
  },
  {
    id: "consonants",
    title: "Bài 2",
    scopeLabel: "15 khác biệt phát âm dễ bỏ qua",
    cardNote: "Nguyên âm, phụ âm và cách nói lẫn trong cùng một bài.",
    durationLabel: "04:45",
    youtubeVideoId: "r0RfrCkcwM0",
  },
  {
    id: "word-stress",
    title: "Bài 3",
    scopeLabel: "Giải thích khác biệt Anh – Mỹ qua ví dụ",
    cardNote: "So sánh tổng thể khi nghe — phù hợp sau hai bài trước.",
    durationLabel: "06:10",
    youtubeVideoId: "71HZyrjx_jI",
  },
] as const;

export const ACCENT_DISCOVER_WORD_PAIRS: readonly AccentWordPair[] = [
  { id: "tomato", word: "Tomato", ukIpa: "/təˈmɑː.təʊ/", usIpa: "/təˈmeɪ.t̬oʊ/" },
  { id: "schedule", word: "Schedule", ukIpa: "/ˈʃedj.uːl/", usIpa: "/ˈskedʒ.uːl/" },
  { id: "privacy", word: "Privacy", ukIpa: "/ˈprɪv.ə.si/", usIpa: "/ˈpraɪ.və.si/" },
  { id: "leisure", word: "Leisure", ukIpa: "/ˈleʒ.ə/", usIpa: "/ˈliː.ʒə/" },
  { id: "herb", word: "Herb", ukIpa: "/hɜːb/", usIpa: "/ɝːb/" },
  { id: "garage", word: "Garage", ukIpa: "/ˈɡær.ɑːʒ/", usIpa: "/ɡəˈrɑːʒ/" },
  { id: "either", word: "Either", ukIpa: "/ˈaɪð.ə/", usIpa: "/ˈiːð.ɚ/" },
  { id: "advertisement", word: "Advertisement", ukIpa: "/ədˈvɜː.tɪs.mənt/", usIpa: "/ˌæd.vɚˈtaɪz.mənt/" },
  { id: "vase", word: "Vase", ukIpa: "/vɑːz/", usIpa: "/veɪs/" },
  { id: "route", word: "Route", ukIpa: "/ruːt/", usIpa: "/raʊt/" },
  { id: "laboratory", word: "Laboratory", ukIpa: "/ləˈbɒr.ə.tri/", usIpa: "/ˈlæb.rə.tɔːr.i/" },
  { id: "data", word: "Data", ukIpa: "/ˈdeɪ.tə/", usIpa: "/ˈdeɪ.t̬ə/" },
  { id: "water", word: "Water", ukIpa: "/ˈwɔː.tə/", usIpa: "/ˈwɔː.t̬ɚ/" },
  { id: "student", word: "Student", ukIpa: "/ˈstjuː.dənt/", usIpa: "/ˈstuː.dənt/" },
  { id: "vitamin", word: "Vitamin", ukIpa: "/ˈvɪt.ə.mɪn/", usIpa: "/ˈvaɪ.t̬ə.mɪn/" },
  { id: "clerk", word: "Clerk", ukIpa: "/klɑːk/", usIpa: "/klɝːk/" },
  { id: "dance", word: "Dance", ukIpa: "/dɑːns/", usIpa: "/dæns/" },
  { id: "banana", word: "Banana", ukIpa: "/bəˈnɑː.nə/", usIpa: "/bəˈnæn.ə/" },
] as const;

/** Số thẻ mỗi trang trong carousel cặp từ. */
export const ACCENT_DISCOVER_WORD_PAIRS_PAGE_SIZE = 6;

export const ACCENT_PASSAGE_COMPARE_OPTIONS = [
  { id: "british" as const, title: "British RP", subtitle: "Received Pronunciation" },
  { id: "american" as const, title: "American English", subtitle: "General American" },
  { id: "australian" as const, title: "Australian English", subtitle: "Standard Australian" },
] as const;
