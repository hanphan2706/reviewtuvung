import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 125 — In/At/On (Position) 3.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 * Nên học kèm Units 123–124; to/at/in/into (Unit 126); by car (Unit 128B).
 */
export const U125_IN_AT_ON_POSITION_3_TOPIC: GrammarTopicDetail = {
  slug: "u125-in-at-on-position-3",
  title: "In/At/On (Position) 3",
  levelLabel: "Intermediate",
  kindLabel: "Preposition",
  sourceBook: "English Grammar in Use · Intermediate · Unit 125",
  sourceNote:
    "in bed/hospital/prison; at home/work/school; at a party; in/at buildings; in towns vs at Oxford (ga); on a bus / in a car. Nên học kèm Units 123–124, 126.",
  intro:
    "Bài này giúp bạn nắm các cụm vị trí cố định với in, at và on: in bed/hospital/prison, at home/work/school, at a party/conference, in/at buildings, in Paris versus at Oxford (ga), và on a bus versus in a car. Nên học kèm Units 123–124, 126.",
  structure: {
    affirmative:
      "in bed/hospital… | at home/work/party… | in/at + building | in + town | on a bus / in a car",
    negative:
      "KHÔNG nói at Paris khi sống/làm việc → in Paris | KHÔNG nói arrive to → arrive in/at (xem Unit 126)",
  },
  usagePoints: [
    {
      before: "in bed / hospital / prison; ",
      strong: "at home / work / school",
      after: "; be home hoặc at home; eat at home.",
    },
    {
      before: "at + ",
      strong: "sự kiện",
      after: ": at the party, at a conference, at the wedding.",
    },
    {
      before: "Sự kiện tại tòa nhà → ",
      strong: "at",
      after: ": We went to a concert at the National Concert Hall.",
    },
    {
      before: "Nghĩ về bên trong tòa nhà → ",
      strong: "in",
      after: ": dinner at the hotel / rooms in the hotel.",
    },
    {
      before: "at the station / ",
      strong: "at the airport",
      after: "; at Helen's (house).",
    },
    {
      before: "Sống/làm việc ở thành phố → ",
      strong: "in Paris",
      after: ": The Louvre is in Paris.",
    },
    {
      before: "Tàu dừng tại điểm → ",
      strong: "at Oxford",
      after: ": Does this train stop at Oxford?",
    },
    {
      before: "on a bus / train / plane; ",
      strong: "in a car / taxi",
      after: "; on a bike / motorbike / horse.",
    },
  ],
  examples: [
    {
      english: "Anna's mother is in hospital. I'll be at work until 5.30.",
      vietnamese: "in hospital = nằm viện; at work = ở chỗ làm (cụm cố định).",
    },
    {
      english: "Were there many people at the party?",
      vietnamese: "at the party = tham dự buổi tiệc (sự kiện, không phải 'trong').",
    },
    {
      english: "We went to a concert at the National Concert Hall.",
      vietnamese: "at + tòa nhà khi nói sự kiện diễn ra tại đó.",
    },
    {
      english: "I was at Helen's last night. It's always cold in Helen's house.",
      vietnamese: "at Helen's = ở nhà Helen; in Helen's house = bên trong ngôi nhà.",
    },
    {
      english: "The Louvre is a famous art museum in Paris.",
      vietnamese: "in Paris = sống/làm việc/đặt tại thành phố — KHÔNG dùng at Paris.",
    },
    {
      english: "Does this train stop at Oxford?",
      vietnamese: "at Oxford = dừng tại ga Oxford, không phải 'trong thành phố'.",
    },
    {
      english: "There were too many people on the bus. Laura arrived in a taxi.",
      vietnamese: "on a bus = trên xe buýt; in a taxi = bên trong taxi.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 462,
  },
};
