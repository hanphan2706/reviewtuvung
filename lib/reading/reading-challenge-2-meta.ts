/** Metadata cho 20 unit Reading Challenge 2 (Compass Publishing). */
export type ReadingChallenge2UnitMeta = {
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

export const READING_CHALLENGE_2_UNITS: ReadingChallenge2UnitMeta[] = [
  {
    passage: 1,
    title: "In the Name of Beauty",
    subheadline:
      "From ancient Egypt to the Renaissance, people have used makeup for beauty — and some ingredients were dangerously toxic.",
    topic: "Culture and Leisure",
    difficulty: "Dễ",
  },
  {
    passage: 2,
    title: "Who Took That Tooth?",
    subheadline:
      "When children lose baby teeth, cultures around the world have surprising traditions — from rooftops in Korea to the tooth mouse in Spain.",
    topic: "Culture and Leisure",
    difficulty: "Dễ",
  },
  {
    passage: 3,
    title: "The Ring of Fire",
    subheadline:
      "Most of the world's volcanoes lie along a vast Pacific ring — a dramatic zone where plate tectonics shapes the Earth.",
    topic: "Environment",
    difficulty: "Dễ",
  },
  {
    passage: 4,
    title: "Myths About Pimples",
    subheadline:
      "Acne is common in adolescence, but many popular “cures” — like popping pimples or avoiding chocolate — do more harm than good.",
    topic: "Health",
    difficulty: "Trung bình",
  },
  {
    passage: 5,
    title: "I Cut the Cheese!",
    subheadline:
      "Passing gas is normal and even funny slang — yet myths and embarrassment still surround this everyday body process.",
    topic: "Science",
    difficulty: "Trung bình",
  },
  {
    passage: 6,
    title: "Mr. Nintendo",
    subheadline:
      "Satoru Iwata led Nintendo through a slump and helped launch the DS and Wii — systems that reshaped how millions play games.",
    topic: "Culture and Leisure",
    difficulty: "Trung bình",
  },
  {
    passage: 7,
    title: "Are Sports Bad for Kids?",
    subheadline:
      "Sports can build health and teamwork, but research shows harsh coaching and parental pressure sometimes fuel aggression and low self-esteem.",
    topic: "Sports",
    difficulty: "Trung bình",
  },
  {
    passage: 8,
    title: "May I Have Your Autograph?",
    subheadline:
      "Some fans treasure a hero's signature forever; others collect autographs mainly to sell them for profit.",
    topic: "Culture and Leisure",
    difficulty: "Trung bình",
  },
  {
    passage: 9,
    title: "Where Are Our Jetpacks?",
    subheadline:
      "Comic heroes flew with jetpacks decades ago — inventors still chase that dream, but practical personal flight remains elusive.",
    topic: "Technology",
    difficulty: "Trung bình",
  },
  {
    passage: 10,
    title: "Desert Delivery",
    subheadline:
      "In Kenya's Garissa region, camels once carried library books across the desert so remote villages could read.",
    topic: "Environment",
    difficulty: "Trung bình – khó",
  },
  {
    passage: 11,
    title: "Shakespeare, Where Are You Now?",
    subheadline:
      "Shakespeare's plays are centuries old, yet Romeo and Juliet and other works still fill theaters and movie screens worldwide.",
    topic: "Culture and Leisure",
    difficulty: "Trung bình – khó",
  },
  {
    passage: 12,
    title: "What's in a Name?",
    subheadline:
      "Parents, grandparents, and culture all shape how children are named — from Italian family traditions to meanings hidden in words.",
    topic: "Culture and Leisure",
    difficulty: "Trung bình – khó",
  },
  {
    passage: 13,
    title: "Out of Rainforests",
    subheadline:
      "Rainforests cover only a small fraction of Earth yet hold countless species — and many everyday products trace back to them.",
    topic: "Environment",
    difficulty: "Trung bình – khó",
  },
  {
    passage: 14,
    title: "For a Quick Pickup",
    subheadline:
      "Coffee and cola once woke people up; now energy drinks pack caffeine and sugar for a faster — but debated — boost.",
    topic: "Health",
    difficulty: "Trung bình – khó",
  },
  {
    passage: 15,
    title: "The Misunderstood Tomato",
    subheadline:
      "Tomatoes flavor ketchup and salsa worldwide, but Europeans once feared this South American fruit was poisonous.",
    topic: "Science",
    difficulty: "Trung bình – khó",
  },
  {
    passage: 16,
    title: "The Greatest of the Century",
    subheadline:
      "BBC, Sports Illustrated, and other groups crowned the same athlete Sportsman of the 20th century — with golf legend Jack Nicklaus high on every list.",
    topic: "Sports",
    difficulty: "Khó",
  },
  {
    passage: 17,
    title: "Rights of Lefties",
    subheadline:
      "Left-handed people were once mistrusted and forced to switch hands — yet many famous thinkers and leaders were southpaws.",
    topic: "Psychology",
    difficulty: "Khó",
  },
  {
    passage: 18,
    title: "The Snowy Slopes of Dubai",
    subheadline:
      "Ski Dubai brings indoor snow to the desert — chilled slopes where outdoor temperatures can reach 45°C.",
    topic: "Sports",
    difficulty: "Khó",
  },
  {
    passage: 19,
    title: "Not All Hackers Are the Same",
    subheadline:
      "Hackers range from criminals who steal data to ethical experts hired to find weaknesses before attackers do.",
    topic: "Technology",
    difficulty: "Khó",
  },
  {
    passage: 20,
    title: "Weird Inventions",
    subheadline:
      "British inventor Arthur Pedrick retired into wild ideas — from Antarctic ice pipes to a cat door powered by a dog's wagging tail.",
    topic: "Technology",
    difficulty: "Khó",
  },
];
