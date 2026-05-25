/** Metadata cho 20 unit Reading Challenge 1 (Compass Publishing). */
export type ReadingChallenge1UnitMeta = {
  passage: number;
  title: string;
  subheadline: string;
  topic:
    | "Education"
    | "Science"
    | "Wildlife"
    | "Environment"
    | "Technology"
    | "Psychology"
    | "Social"
    | "Health"
    | "Sports"
    | "Culture and Leisure";
  difficulty: "Dễ" | "Trung bình" | "Trung bình – khó" | "Khó";
};

export const READING_CHALLENGE_1_UNITS: ReadingChallenge1UnitMeta[] = [
  {
    passage: 1,
    title: "The Ice Hotel",
    subheadline:
      "A hotel in Quebec built entirely of ice and snow — open only in winter, with rooms, art, and even plates made of ice.",
    topic: "Culture and Leisure",
    difficulty: "Dễ",
  },
  {
    passage: 2,
    title: "Food Firsts",
    subheadline:
      "How much do you know about when people in England started cooking roast beef, or when tea first arrived from China?",
    topic: "Culture and Leisure",
    difficulty: "Dễ",
  },
  {
    passage: 3,
    title: "Hurricane Who?",
    subheadline:
      "Tropical cyclones are called typhoons in Asia and hurricanes in the Americas — and they spin around a calm center called the eye.",
    topic: "Environment",
    difficulty: "Dễ",
  },
  {
    passage: 4,
    title: "How Did Those Get in There?",
    subheadline:
      "A young actress waits nervously backstage — a glimpse at stage fright and how performers cope before going on.",
    topic: "Culture and Leisure",
    difficulty: "Trung bình",
  },
  {
    passage: 5,
    title: "A Bug's Sleep",
    subheadline:
      "Every mammal needs sleep, as do birds and reptiles — but scientists have long wondered whether insects sleep too.",
    topic: "Science",
    difficulty: "Trung bình",
  },
  {
    passage: 6,
    title: "Tiger's Tale",
    subheadline:
      "Tiger Woods started playing golf at age two and grew into one of the most famous professional golfers in the world.",
    topic: "Wildlife",
    difficulty: "Trung bình",
  },
  {
    passage: 7,
    title: "Not the Normal News",
    subheadline:
      "Newspapers and TV often highlight bad news, yet many ordinary people quietly do remarkable good deeds.",
    topic: "Social",
    difficulty: "Trung bình",
  },
  {
    passage: 8,
    title: "The Wright Way to Fly",
    subheadline:
      "The Wright brothers were bicycle makers without college degrees who built and flew the first successful airplane.",
    topic: "Technology",
    difficulty: "Trung bình",
  },
  {
    passage: 9,
    title: "Don't Trust Me!",
    subheadline:
      "Companies spend heavily on firewalls and software, but famed hacker Kevin Mitnick says people are the weakest link.",
    topic: "Psychology",
    difficulty: "Trung bình – khó",
  },
  {
    passage: 10,
    title: "Bugs for Sale",
    subheadline:
      "In Japan, live beetles are sold as pets the way other countries sell dogs or cats — a surprising retail business.",
    topic: "Science",
    difficulty: "Trung bình – khó",
  },
  {
    passage: 11,
    title: "Mona Who?",
    subheadline:
      "A young woman without eyebrows sits before a landscape — clues pointing to one of the world's most famous portraits.",
    topic: "Culture and Leisure",
    difficulty: "Trung bình – khó",
  },
  {
    passage: 12,
    title: "Borrowed Words",
    subheadline:
      "Words like shampoo, ketchup, and sauna entered English from other languages — everyday vocabulary with foreign roots.",
    topic: "Culture and Leisure",
    difficulty: "Trung bình – khó",
  },
  {
    passage: 13,
    title: "Growing Deserts",
    subheadline:
      "Deserts stretch across Africa, Asia, and the Americas — and in many regions desert land is expanding at an alarming rate.",
    topic: "Environment",
    difficulty: "Trung bình – khó",
  },
  {
    passage: 14,
    title: "The Importance of Water",
    subheadline:
      "Some doctors recommend drinking a glass of water first thing in the morning — before breakfast or coffee.",
    topic: "Health",
    difficulty: "Trung bình – khó",
  },
  {
    passage: 15,
    title: "Animal Forecasters",
    subheadline:
      "For centuries people have watched animals closely, hoping their behavior might warn of earthquakes or storms.",
    topic: "Science",
    difficulty: "Khó",
  },
  {
    passage: 16,
    title: "A Fantastic Mind",
    subheadline:
      "Hayao Miyazaki loved cartoons as a boy and became one of Japan's most celebrated animation directors.",
    topic: "Culture and Leisure",
    difficulty: "Khó",
  },
  {
    passage: 17,
    title: "Seeing Red",
    subheadline:
      "Colors influence mood and appetite — red can excite people, while yellow may make them feel hungrier.",
    topic: "Psychology",
    difficulty: "Khó",
  },
  {
    passage: 18,
    title: "Worth Collecting",
    subheadline:
      "If a classmate says he is a philatelist, should you worry — or simply learn he collects postage stamps?",
    topic: "Culture and Leisure",
    difficulty: "Khó",
  },
  {
    passage: 19,
    title: "Can't Beat Them? Join Them!",
    subheadline:
      "Movie studios and record labels battle online piracy as millions copy and share films and music on the Internet.",
    topic: "Social",
    difficulty: "Khó",
  },
  {
    passage: 20,
    title: "Rich Dogs",
    subheadline:
      "When wealthy people die, they sometimes leave fortunes in their wills — not only to family, but to their pet dogs.",
    topic: "Culture and Leisure",
    difficulty: "Khó",
  },
];
