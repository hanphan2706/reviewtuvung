/** Metadata cho 20 unit Reading Challenge 3 (Compass Publishing). */
export type ReadingChallenge3UnitMeta = {
  passage: number;
  title: string;
  subheadline: string;
  topic: "Education" | "Science" | "Wildlife" | "Environment" | "Technology" | "Psychology" | "Social" | "Health" | "Sports" | "Culture and Leisure";
  difficulty: "Dễ" | "Trung bình" | "Trung bình – khó" | "Khó";
};

export const READING_CHALLENGE_3_UNITS: ReadingChallenge3UnitMeta[] = [
  {
    passage: 1,
    title: "Read It or See It?",
    subheadline:
      "Since the early days of making movies, writers and directors have attempted to bring popular and classic novels to the big screen.",
    topic: "Culture and Leisure",
    difficulty: "Dễ",
  },
  {
    passage: 2,
    title: "Superstitions About Birds",
    subheadline:
      "Certain birds are, more often than not, considered bad luck, or even a sign of impending death.",
    topic: "Culture and Leisure",
    difficulty: "Dễ",
  },
  {
    passage: 3,
    title: "Alaska Is Melting!",
    subheadline:
      "Alaska is disappearing slowly, but surely.",
    topic: "Environment",
    difficulty: "Dễ",
  },
  {
    passage: 4,
    title: "Working on Your Workout",
    subheadline:
      "However, most people do not know how to exercise properly.",
    topic: "Health",
    difficulty: "Trung bình",
  },
  {
    passage: 5,
    title: "Smart Exercise",
    subheadline:
      "Physical activity can sharpen memory and help you perform better on tests — even a few hours a week makes a difference.",
    topic: "Health",
    difficulty: "Trung bình",
  },
  {
    passage: 6,
    title: "Rescuing Relics",
    subheadline:
      "When old buildings in Beijing are torn down, one collector rescues decorative folk art before it is lost.",
    topic: "Culture and Leisure",
    difficulty: "Trung bình",
  },
  {
    passage: 7,
    title: "Tweenbots",
    subheadline:
      "Every day, the streets are congested with people going about their daily lives.",
    topic: "Technology",
    difficulty: "Trung bình",
  },
  {
    passage: 8,
    title: "Back to the Future",
    subheadline:
      "The road to the future leads through the past — two hockey-loving brothers launched the inline skating craze from an antique pair of skates.",
    topic: "Science",
    difficulty: "Trung bình",
  },
  {
    passage: 9,
    title: "A Better Robot",
    subheadline:
      "Snake-shaped robots may explore Mars and repair spacecraft more effectively than traditional wheeled machines.",
    topic: "Technology",
    difficulty: "Trung bình",
  },
  {
    passage: 10,
    title: "Flower Power",
    subheadline:
      "Visitors to Japan probably would not put Suginami very high on their list of places to see.",
    topic: "Environment",
    difficulty: "Trung bình – khó",
  },
  {
    passage: 11,
    title: "A Controversial Restoration",
    subheadline:
      "Certain masterpieces are recognized worldwide as outstanding achievements in human creativity and ingenuity.",
    topic: "Culture and Leisure",
    difficulty: "Trung bình – khó",
  },
  {
    passage: 12,
    title: "The Flood",
    subheadline:
      "In this legend of the great flood, water covered all the land, killing most of the people and animals on Earth.",
    topic: "Environment",
    difficulty: "Trung bình – khó",
  },
  {
    passage: 13,
    title: "Naturally Better Homes",
    subheadline:
      "In the 1970s, architect Michael Reynolds designed cheap, energy-efficient homes built from recycled materials — earthships.",
    topic: "Environment",
    difficulty: "Trung bình – khó",
  },
  {
    passage: 14,
    title: "Eat Better, Look Better",
    subheadline:
      "Free radicals have the capability to attach to and damage parts of our cells, including our DNA.",
    topic: "Health",
    difficulty: "Trung bình – khó",
  },
  {
    passage: 15,
    title: "Imagine That!",
    subheadline:
      "People who daydream are often thought of in negative terms, such as being lazy or not doing what they should be doing.",
    topic: "Psychology",
    difficulty: "Trung bình – khó",
  },
  {
    passage: 16,
    title: "Madonna's Downloads",
    subheadline:
      "Madonna rose from a tough start to become a pop icon — and now fights online piracy with characteristically bold tactics.",
    topic: "Culture and Leisure",
    difficulty: "Khó",
  },
  {
    passage: 17,
    title: "Remembering Memories",
    subheadline:
      "Most people wish they had better memories.",
    topic: "Psychology",
    difficulty: "Khó",
  },
  {
    passage: 18,
    title: "Taking Home the World Cup",
    subheadline:
      "The FIFA World Cup trophy is only thirty-six centimeters tall, yet champions never take the real prize home.",
    topic: "Sports",
    difficulty: "Khó",
  },
  {
    passage: 19,
    title: "No Phishing Allowed",
    subheadline:
      "Phishers send more than three billion scam messages each year — even tricking a small fraction of victims can be hugely profitable.",
    topic: "Technology",
    difficulty: "Khó",
  },
  {
    passage: 20,
    title: "Take a Ghost Tour",
    subheadline:
      "At Chillingham Castle, a strange noise and a cold rush of air may mean you have met one of England's most famous ghosts.",
    topic: "Culture and Leisure",
    difficulty: "Khó",
  },
];
