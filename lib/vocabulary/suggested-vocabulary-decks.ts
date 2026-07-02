export type SuggestedVocabularyDeck = {
  id: string;
  title: string;
  description: string;
  meta?: string;
  badge?: string;
  variant: "featured" | "wide" | "compact-purple" | "compact";
  icon?: "medical" | "book" | "compass";
  imageUrl?: string;
};

/** Bộ gợi ý tĩnh — chưa có nội dung import; UI placeholder theo mockup. */
export const SUGGESTED_VOCABULARY_DECKS: SuggestedVocabularyDeck[] = [
  {
    id: "academic-core-500",
    title: "Academic Core 500",
    description:
      "500 từ cốt lõi thường gặp trong các kỳ thi học thuật quốc tế. Tập trung vào ngữ cảnh và collocation.",
    badge: "POPULAR CHOICE",
    variant: "featured",
    imageUrl:
      "https://images.unsplash.com/photo-1456513080920-022dd7741c70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "medical-english",
    title: "Terminology for Professionals",
    description: "250 Từ vựng chuyên ngành",
    badge: "MEDICAL ENGLISH",
    variant: "wide",
    icon: "medical",
  },
  {
    id: "toefl-essentials",
    title: "TOEFL Essentials",
    description: "Focus on Listening & Speaking",
    variant: "compact-purple",
    icon: "book",
  },
  {
    id: "business-english",
    title: "Business English",
    description: "Negotiation & Proposals",
    variant: "compact",
    icon: "compass",
  },
];
