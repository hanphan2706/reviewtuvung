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
    "Trong unit này bạn sẽ nắm: in bed/hospital/prison; at home/work/school; at a party; in/at buildings; in towns vs at Oxford (ga); on a bus / in a car. Nên học kèm Units 123–124, 126.",
  structure: {
    affirmative:
      "in bed/hospital… | at home/work/party… | in/at + building | in + town | on a bus / in a car",
    negative:
      "không: at Paris (sống) | arrive to → xem Unit 126",
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
      after: "; nghĩ về bên trong tòa nhà → in: dinner at the hotel / rooms in the hotel.",
    },
    {
      before: "at the station / ",
      strong: "at the airport",
      after: "; at Helen's (house).",
    },
    {
      before: "Thành phố/làng: ",
      strong: "in Paris",
      after: "; điểm dừng: Does this train stop at Oxford?",
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
      vietnamese: "Mẹ Anna đang nằm viện. Tôi sẽ ở chỗ làm đến 5h30.",
    },
    {
      english: "Were there many people at the party?",
      vietnamese: "Có nhiều người ở buổi tiệc không?",
    },
    {
      english: "We went to a concert at the National Concert Hall.",
      vietnamese: "Chúng tôi đi xem hòa nhạc tại National Concert Hall.",
    },
    {
      english: "I was at Helen's last night. It's always cold in Helen's house.",
      vietnamese: "Tối qua tôi ở nhà Helen. Trong nhà Helen lúc nào cũng lạnh.",
    },
    {
      english: "The Louvre is a famous art museum in Paris.",
      vietnamese: "Louvre là bảo tàng nổi tiếng ở Paris. (không: at Paris)",
    },
    {
      english: "Does this train stop at Oxford?",
      vietnamese: "Tàu này có dừng ở Oxford không? (= ga Oxford)",
    },
    {
      english: "There were too many people on the bus. Laura arrived in a taxi.",
      vietnamese: "Xe buýt quá đông. Laura đến bằng taxi.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 462,
  },
};
