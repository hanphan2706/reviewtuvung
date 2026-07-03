/** Giọng thực tế phát trong audio (TTS). */
import { mediaAudioApiPath } from "@/lib/media/media-audio-storage";

export type AccentChallengePlayedAccentId =
  | "british"
  | "american"
  | "singapore"
  | "india";

export type AccentChallengeVoiceGender = "male" | "female";

export type AccentChallengeRoundVoice = {
  accent: AccentChallengePlayedAccentId;
  gender: AccentChallengeVoiceGender;
};

/** Ba lựa chọn trên UI. */
export type AccentChallengeAnswerId = "british" | "american" | "other_asian";

export type AccentChallengeWord = {
  id: string;
  word: string;
  speakText: string;
};

export type AccentChallengeSentence = {
  id: string;
  text: string;
};

export type AccentChallengeRound =
  | { kind: "word"; item: AccentChallengeWord }
  | { kind: "sentence"; item: AccentChallengeSentence };

export const ACCENT_CHALLENGE_ASIAN_ACCENTS: readonly AccentChallengePlayedAccentId[] = [
  "singapore",
  "india",
] as const;

export const ACCENT_CHALLENGE_PLAYED_ACCENTS: readonly AccentChallengePlayedAccentId[] = [
  "british",
  "american",
  ...ACCENT_CHALLENGE_ASIAN_ACCENTS,
] as const;

/** Pool từ (carousel + từ bổ sung) — xen kẽ với câu trong thử thách. */
export const ACCENT_CHALLENGE_WORDS: readonly AccentChallengeWord[] = [
  { id: "tomato", word: "Tomato", speakText: "tomato" },
  { id: "schedule", word: "Schedule", speakText: "schedule" },
  { id: "privacy", word: "Privacy", speakText: "privacy" },
  { id: "leisure", word: "Leisure", speakText: "leisure" },
  { id: "herb", word: "Herb", speakText: "herb" },
  { id: "garage", word: "Garage", speakText: "garage" },
  { id: "either", word: "Either", speakText: "either" },
  { id: "advertisement", word: "Advertisement", speakText: "advertisement" },
  { id: "vase", word: "Vase", speakText: "vase" },
  { id: "route", word: "Route", speakText: "route" },
  { id: "laboratory", word: "Laboratory", speakText: "laboratory" },
  { id: "data", word: "Data", speakText: "data" },
  { id: "water", word: "Water", speakText: "water" },
  { id: "student", word: "Student", speakText: "student" },
  { id: "vitamin", word: "Vitamin", speakText: "vitamin" },
  { id: "clerk", word: "Clerk", speakText: "clerk" },
  { id: "dance", word: "Dance", speakText: "dance" },
  { id: "banana", word: "Banana", speakText: "banana" },
  { id: "oregano", word: "Oregano", speakText: "oregano" },
  { id: "controversy", word: "Controversy", speakText: "controversy" },
  { id: "neither", word: "Neither", speakText: "neither" },
  { id: "figure", word: "Figure", speakText: "figure" },
  { id: "literature", word: "Literature", speakText: "literature" },
  { id: "coupon", word: "Coupon", speakText: "coupon" },
  { id: "mobile", word: "Mobile", speakText: "mobile" },
  { id: "tuesday", word: "Tuesday", speakText: "tuesday" },
  { id: "ballet", word: "Ballet", speakText: "ballet" },
  { id: "lieutenant", word: "Lieutenant", speakText: "lieutenant" },
  { id: "dynasty", word: "Dynasty", speakText: "dynasty" },
  { id: "harass", word: "Harass", speakText: "harass" },
  { id: "cache", word: "Cache", speakText: "cache" },
  { id: "inquiry", word: "Inquiry", speakText: "inquiry" },
  { id: "zucchini", word: "Zucchini", speakText: "zucchini" },
  { id: "address", word: "Address", speakText: "address" },
  { id: "brochure", word: "Brochure", speakText: "brochure" },
  { id: "glacier", word: "Glacier", speakText: "glacier" },
  { id: "been", word: "Been", speakText: "been" },
  { id: "often", word: "Often", speakText: "often" },
  { id: "envelope", word: "Envelope", speakText: "envelope" },
  { id: "process", word: "Process", speakText: "process" },
  { id: "quarantine", word: "Quarantine", speakText: "quarantine" },
  { id: "hostile", word: "Hostile", speakText: "hostile" },
  { id: "migratory", word: "Migratory", speakText: "migratory" },
  { id: "mandatory", word: "Mandatory", speakText: "mandatory" },
  { id: "qualitative", word: "Qualitative", speakText: "qualitative" },
  { id: "adult", word: "Adult", speakText: "adult" },
  { id: "research", word: "Research", speakText: "research" },
  { id: "detail", word: "Detail", speakText: "detail" },
  { id: "news", word: "News", speakText: "news" },
  { id: "due", word: "Due", speakText: "due" },
  { id: "progress", word: "Progress", speakText: "progress" },
  { id: "semi", word: "Semi", speakText: "semi" },
  { id: "anti", word: "Anti", speakText: "anti" },
  { id: "multi", word: "Multi", speakText: "multi" },
] as const;

export const ACCENT_CHALLENGE_SENTENCES: readonly AccentChallengeSentence[] = [
  {
    id: "morning-coffee",
    text: "I usually grab a coffee on my way to work every morning.",
  },
  {
    id: "mrt-station",
    text: "Could you help me find the nearest MRT station?",
  },
  {
    id: "humid-weather",
    text: "The weather has been really humid lately, hasn't it?",
  },
  {
    id: "takeaway-dinner",
    text: "I'm thinking of ordering takeaway for dinner tonight.",
  },
  {
    id: "walk-to-office",
    text: "My flat is just a ten-minute walk from the office.",
  },
  {
    id: "speak-slower",
    text: "Sorry, could you speak a little slower please?",
  },
  {
    id: "transport-card",
    text: "I need to top up my transport card before the commute.",
  },
  {
    id: "food-court",
    text: "Let's meet at the food court around half past twelve.",
  },
  {
    id: "less-sugar",
    text: "I've been trying to cut down on sugar in my tea.",
  },
  {
    id: "bus-delay",
    text: "The bus was delayed again because of the morning traffic.",
  },
  {
    id: "card-or-cash",
    text: "Do you prefer paying by card or in cash?",
  },
  {
    id: "phone-charge",
    text: "I forgot to charge my phone before leaving home.",
  },
  {
    id: "spicy-curry",
    text: "This curry is a bit spicy for me, but it's delicious.",
  },
  {
    id: "quiet-cafe",
    text: "I'm looking for a quiet café to work from this afternoon.",
  },
  {
    id: "grocery-hours",
    text: "The grocery store closes at nine on weekdays.",
  },
  {
    id: "park-walk",
    text: "Would you like to join us for a walk in the park later?",
  },
  {
    id: "two-alarms",
    text: "I always set two alarms so I don't oversleep.",
  },
  {
    id: "air-conditioner",
    text: "The air conditioner isn't working properly in my room.",
  },
  {
    id: "weekend-plans",
    text: "We might visit the night market if the rain stops this weekend.",
  },
  {
    id: "laundry-day",
    text: "I'll do the laundry after I finish this episode.",
  },
  {
    id: "parcel-thursday",
    text: "The parcel should arrive by Thursday, unless the courier runs into delays.",
  },
  {
    id: "dentist-call",
    text: "I've been meaning to call my dentist about that sensitive tooth.",
  },
  {
    id: "keep-voice-down",
    text: "Would you mind keeping your voice down? The baby's finally asleep.",
  },
  {
    id: "draft-standup",
    text: "Our team lead asked us to submit the draft before the weekly stand-up.",
  },
  {
    id: "radiator-click",
    text: "I couldn't figure out why the radiator was making that clicking sound.",
  },
  {
    id: "driving-slot",
    text: "She booked a slot at the driving centre for next month.",
  },
  {
    id: "dough-rest",
    text: "The recipe says to let the dough rest for at least forty minutes.",
  },
  {
    id: "overthink-sleep",
    text: "He tends to overthink things when he hasn't had enough sleep.",
  },
  {
    id: "laundry-supplies",
    text: "We're running low on laundry detergent and bin bags.",
  },
  {
    id: "lecture-packed",
    text: "The lecture hall was packed, so we had to sit in the back row.",
  },
  {
    id: "misplaced-umbrella",
    text: "I misplaced my umbrella somewhere between the café and the station.",
  },
  {
    id: "postpone-inspection",
    text: "They've decided to postpone the inspection until the pipes are fixed.",
  },
  {
    id: "discount-sale",
    text: "I'm not convinced that discount applies to items already on sale.",
  },
  {
    id: "forward-itinerary",
    text: "Could you forward me the itinerary once you've confirmed the dates?",
  },
  {
    id: "muddy-trail",
    text: "The trail gets muddy after rain, so wear something sensible.",
  },
  {
    id: "three-languages",
    text: "She's fluent in three languages, but English is the one she uses at work.",
  },
  {
    id: "missed-train",
    text: "We missed the last train and ended up sharing a taxi home.",
  },
  {
    id: "volunteering",
    text: "He's been volunteering at the community centre every other Saturday.",
  },
  {
    id: "thermostat-reset",
    text: "The thermostat keeps resetting itself overnight for some reason.",
  },
  {
    id: "passport-renew",
    text: "I'll need to renew my passport before the summer trip.",
  },
  {
    id: "fare-increase",
    text: "They announced a fare increase starting from the first of January.",
  },
  {
    id: "podcasts-tasks",
    text: "I find podcasts helpful when I'm doing repetitive tasks.",
  },
  {
    id: "neighbour-dog",
    text: "The neighbour's dog barks whenever someone walks past the gate.",
  },
  {
    id: "three-managers",
    text: "We've had three different managers in the past two years.",
  },
  {
    id: "check-attachment",
    text: "Please double-check the attachment before you hit send.",
  },
  {
    id: "borrow-charger",
    text: "Do you have a spare charger I could borrow for a couple of hours?",
  },
  {
    id: "shelf-instructions",
    text: "The instructions for assembling the shelf were harder to follow than I expected.",
  },
  {
    id: "cancel-subscription",
    text: "I finally cancelled that subscription I'd forgotten about months ago.",
  },
  {
    id: "window-seat",
    text: "She insisted on the window seat because she gets motion sickness on coaches.",
  },
] as const;

export const ACCENT_CHALLENGE_OPTIONS: readonly {
  id: AccentChallengeAnswerId;
  label: string;
}[] = [
  { id: "british", label: "British Received Pronunciation" },
  { id: "american", label: "General American English" },
  { id: "other_asian", label: "Giọng khác (Châu Á)" },
] as const;

export const ACCENT_CHALLENGE_ACCENT_LABELS: Record<AccentChallengePlayedAccentId, string> = {
  british: "British Received Pronunciation",
  american: "General American English",
  singapore: "Singapore English",
  india: "Indian English",
};

export const ACCENT_CHALLENGE_ACCENT_TIPS: Record<AccentChallengePlayedAccentId, readonly string[]> = {
  british: [
    "Giọng Anh Anh (RP) thường có nguyên âm dài rõ và âm /r/ nhẹ ở vị trí không đứng đầu âm tiết.",
    "Trọng âm từ thường đặt sớm; nhịp câu khá phẳng ở cuối.",
  ],
  american: [
    "Giọng Mỹ hay phát rõ chữ /r/ và rút ngắn một số nguyên âm so với RP.",
    "Nhịp câu thường đều; giọng cuối câu có thể hơi lên nhẹ.",
  ],
  singapore: [
    "Người Singapore khi nói tiếng Anh thì trọng âm khác với tiếng Anh chuẩn.",
    "Nhịp nói thường nhanh hơn; phụ âm cuối có thể rõ hoặc lược tùy thói quen địa phương.",
  ],
  india: [
    "Giọng Ấn Độ thường nhấn trọng âm mạnh và có melody lên xuống rõ hơn.",
    "Nguyên âm /ə/ và /ɪ/ hay nghe rõ; /t/, /d/ đôi khi 'dứt' hơn giọng Anh–Mỹ.",
  ],
};

export const ACCENT_CHALLENGE_PROMO = {
  title: "Thử thách khả năng nghe",
  description:
    "Bạn muốn biết khả năng bất âm và phân biệt các chất giọng của mình tốt thế nào, hay nói chính xác hơn là khả năng nghe bạn tốt ra sao?",
  ctaLabel: "Bắt đầu nghe",
} as const;

/** Nhóm người đa dạng — Unsplash (Chris Liverani). */
export const ACCENT_CHALLENGE_PROMO_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop";

export const ACCENT_CHALLENGE_PAGE = {
  title: "Thử thách nghe và phân biệt các chất giọng",
  description: "Lắng nghe các biến thể ngữ âm. Xác định chất giọng của người nói.",
  choiceHeading: "Lựa chọn của bạn",
  feedbackCorrect: "Chính xác",
  feedbackWrong: "Chưa đúng",
  correctAnswerPrefix: "Đáp án đúng:",
  nextLabel: "Tiếp theo",
} as const;

export function playedAccentToAnswer(accent: AccentChallengePlayedAccentId): AccentChallengeAnswerId {
  if (accent === "british") return "british";
  if (accent === "american") return "american";
  return "other_asian";
}

export function accentChallengeWordAudioUrl(
  wordId: string,
  accentId: AccentChallengePlayedAccentId,
  gender: AccentChallengeVoiceGender,
): string {
  return mediaAudioApiPath(`accent-challenge/words/${wordId}/${accentId}-${gender}.mp3`);
}

export function accentChallengeSentenceAudioUrl(
  sentenceId: string,
  accentId: AccentChallengePlayedAccentId,
  gender: AccentChallengeVoiceGender,
): string {
  return mediaAudioApiPath(`accent-challenge/sentences/${sentenceId}/${accentId}-${gender}.mp3`);
}

export function accentChallengeRoundAudioUrl(
  round: AccentChallengeRound,
  accentId: AccentChallengePlayedAccentId,
  gender: AccentChallengeVoiceGender,
): string {
  if (round.kind === "word") {
    return accentChallengeWordAudioUrl(round.item.id, accentId, gender);
  }
  return accentChallengeSentenceAudioUrl(round.item.id, accentId, gender);
}

export function shuffleChallengeRounds(
  words: readonly AccentChallengeWord[] = ACCENT_CHALLENGE_WORDS,
  sentences: readonly AccentChallengeSentence[] = ACCENT_CHALLENGE_SENTENCES,
): AccentChallengeRound[] {
  const rounds: AccentChallengeRound[] = [
    ...words.map((item) => ({ kind: "word" as const, item })),
    ...sentences.map((item) => ({ kind: "sentence" as const, item })),
  ];
  for (let i = rounds.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [rounds[i], rounds[j]] = [rounds[j], rounds[i]];
  }
  return rounds;
}

export function shuffleAccentChallengeSentences(
  sentences: readonly AccentChallengeSentence[] = ACCENT_CHALLENGE_SENTENCES,
): AccentChallengeSentence[] {
  const copy = [...sentences];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function shufflePlayedAccents(): AccentChallengePlayedAccentId[] {
  const copy = [...ACCENT_CHALLENGE_PLAYED_ACCENTS];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function randomVoiceGender(): AccentChallengeVoiceGender {
  return Math.random() < 0.5 ? "male" : "female";
}

/** Lượt đầu + mỗi lần hết vòng: xáo toàn bộ giọng rồi lần lượt — không bị lệch ngẫu nhiên. */
export function createInitialChallengeRound(): {
  accentRotation: AccentChallengePlayedAccentId[];
  accentRotationIndex: number;
  roundVoice: AccentChallengeRoundVoice;
} {
  const accentRotation = shufflePlayedAccents();
  return {
    accentRotation,
    accentRotationIndex: 1,
    roundVoice: {
      accent: accentRotation[0] ?? "british",
      gender: randomVoiceGender(),
    },
  };
}

export function nextChallengeRoundVoice(
  accentRotation: AccentChallengePlayedAccentId[],
  accentRotationIndex: number,
): {
  accentRotation: AccentChallengePlayedAccentId[];
  accentRotationIndex: number;
  roundVoice: AccentChallengeRoundVoice;
} {
  let rotation = accentRotation;
  let index = accentRotationIndex;

  if (index >= rotation.length || rotation.length === 0) {
    rotation = shufflePlayedAccents();
    index = 0;
  }

  const accent = rotation[index] ?? "british";
  return {
    accentRotation: rotation,
    accentRotationIndex: index + 1,
    roundVoice: { accent, gender: randomVoiceGender() },
  };
}

/** @deprecated Use createInitialChallengeRound / nextChallengeRoundVoice */
export function randomChallengePlayedAccent(): AccentChallengePlayedAccentId {
  const index = Math.floor(Math.random() * ACCENT_CHALLENGE_PLAYED_ACCENTS.length);
  return ACCENT_CHALLENGE_PLAYED_ACCENTS[index] ?? "british";
}

export function accentChallengeTips(accentId: AccentChallengePlayedAccentId): readonly string[] {
  return ACCENT_CHALLENGE_ACCENT_TIPS[accentId];
}
