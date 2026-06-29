import type { SpeechAccentSample } from "@/lib/listening/speech-accent-catalog";

export const ACCENT_EXPLORE_PAGE_DESCRIPTION =
  "Tìm hiểu sự khác biệt tinh tế giữa các chất giọng Anh phổ biến.";

export const ACCENT_SAMPLE_PARAGRAPH_NOTE =
  "Đây là đoạn văn chuẩn (Stella paragraph) dùng trong Speech Accent Archive để so sánh phát âm giữa các vùng miền.";

export const ACCENT_RECORDING_SECTION = {
  title: "Ghi âm & Phân tích",
  description:
    "Sử dụng công cụ phân tích AI để so sánh tần số và cách phát âm của bạn với người bản xứ. Nhận phản hồi tức thì về cao độ, cường độ và nhịp điệu.",
  ctaLabel: "Bắt đầu ghi âm",
  comingSoonMessage: "Tính năng ghi âm và phân tích đang được phát triển.",
} as const;

export const ACCENT_RECORDING_MIC_IMAGE =
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&q=80&auto=format&fit=crop";

export type IpaPreviewSymbol = {
  symbol: string;
  example: string;
  kind: "vowel" | "consonant";
  /** Slug for PHONEME-{slug}.mp3 on American IPA Chart CDN. */
  audioSlug: string;
};

/**
 * audioSlug → PHONEME-{slug}.mp3 from American IPA Chart.
 * Vowels use color words (vowel_*), consonants use animal words (consonant_*),
 * diphthongs use gemstone/color words (diphthong_*).
 * Do NOT use example-word slugs blindly — e.g. SHEEP = /ʃ/, not /iː/.
 */
export const ACCENT_IPA_PREVIEW_VOWEL_ROWS: readonly (readonly IpaPreviewSymbol[])[] = [
  [
    { symbol: "iː", example: "sheep", kind: "vowel", audioSlug: "GREEN" },
    { symbol: "ɪ", example: "ship", kind: "vowel", audioSlug: "PINK" },
    { symbol: "ʊ", example: "good", kind: "vowel", audioSlug: "WOOD" },
    { symbol: "uː", example: "shoot", kind: "vowel", audioSlug: "BLUE" },
    { symbol: "ɑː", example: "father", kind: "vowel", audioSlug: "COFFEE" },
    { symbol: "ʌ", example: "but", kind: "vowel", audioSlug: "DUST" },
    { symbol: "ə", example: "sofa", kind: "vowel", audioSlug: "DUST" },
    { symbol: "ɔː", example: "port", kind: "vowel", audioSlug: "MAUVE" },
  ],
  [
    { symbol: "æ", example: "cat", kind: "vowel", audioSlug: "SAND" },
    { symbol: "ɛ", example: "bed", kind: "vowel", audioSlug: "RED" },
    { symbol: "ɝ", example: "bird", kind: "vowel", audioSlug: "PURPLE" },
    { symbol: "eɪ", example: "day", kind: "vowel", audioSlug: "JADE" },
    { symbol: "aɪ", example: "my", kind: "vowel", audioSlug: "LIME" },
    { symbol: "aʊ", example: "now", kind: "vowel", audioSlug: "BROWN" },
    { symbol: "oʊ", example: "go", kind: "vowel", audioSlug: "GOLD" },
    { symbol: "ɔɪ", example: "boy", kind: "vowel", audioSlug: "TURQUOISE" },
  ],
] as const;

export const ACCENT_IPA_PREVIEW_CONSONANT_ROWS: readonly (readonly IpaPreviewSymbol[])[] = [
  [
    { symbol: "p", example: "pea", kind: "consonant", audioSlug: "PIG" },
    { symbol: "b", example: "boat", kind: "consonant", audioSlug: "BEAR" },
    { symbol: "t", example: "tea", kind: "consonant", audioSlug: "TURTLE" },
    { symbol: "d", example: "dog", kind: "consonant", audioSlug: "DOG" },
    { symbol: "k", example: "cat", kind: "consonant", audioSlug: "CAT" },
    { symbol: "g", example: "go", kind: "consonant", audioSlug: "GOAT" },
    { symbol: "f", example: "fan", kind: "consonant", audioSlug: "FROG" },
    { symbol: "v", example: "van", kind: "consonant", audioSlug: "BEAVER" },
  ],
  [
    { symbol: "θ", example: "think", kind: "consonant", audioSlug: "PANTHER" },
    { symbol: "ð", example: "this", kind: "consonant", audioSlug: "FEATHER" },
    { symbol: "s", example: "sun", kind: "consonant", audioSlug: "SNAKE" },
    { symbol: "ʃ", example: "ship", kind: "consonant", audioSlug: "SHEEP" },
    { symbol: "tʃ", example: "chair", kind: "consonant", audioSlug: "CHICKEN" },
    { symbol: "z", example: "zoo", kind: "consonant", audioSlug: "ZEBRA" },
    { symbol: "ʒ", example: "vision", kind: "consonant", audioSlug: "TELEVISION" },
    { symbol: "dʒ", example: "jump", kind: "consonant", audioSlug: "GIRAFFE" },
    { symbol: "w", example: "we", kind: "consonant", audioSlug: "WOLF" },
    { symbol: "ɫ", example: "ball", kind: "consonant", audioSlug: "LION" },
    { symbol: "m", example: "man", kind: "consonant", audioSlug: "MOUSE" },
    { symbol: "n", example: "no", kind: "consonant", audioSlug: "DINOSAUR" },
    { symbol: "ŋ", example: "sing", kind: "consonant", audioSlug: "PENGUIN" },
    { symbol: "ɹ", example: "red", kind: "consonant", audioSlug: "RABBIT" },
    { symbol: "j", example: "yes", kind: "consonant", audioSlug: "YAK" },
    { symbol: "h", example: "hat", kind: "consonant", audioSlug: "HORSE" },
  ],
] as const;

export type AccentPlayerOption = {
  id: string;
  title: string;
  subtitle: string;
  sample?: SpeechAccentSample;
  comingSoon?: boolean;
};

export const ACCENT_PLAYER_OPTIONS: readonly Omit<AccentPlayerOption, "sample">[] = [
  { id: "british", title: "British RP", subtitle: "Received Pronunciation" },
  { id: "american", title: "American English", subtitle: "General American" },
  { id: "australian", title: "Australian English", subtitle: "Standard Australian" },
  { id: "cockney", title: "Cockney", subtitle: "East London Working Class", comingSoon: true },
] as const;
