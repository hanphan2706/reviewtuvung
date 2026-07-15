export type GrammarUsagePoint = {
  before?: string;
  strong: string;
  after?: string;
};

export type GrammarTopicExample = {
  english: string;
  vietnamese: string;
};

export type GrammarRelatedUnitLink = {
  unitNumber: number;
  slug: string;
  title: string;
};

/** Companion / contrast units used to link Unit N mentions in the intro. */
export type GrammarRelatedStudy = {
  message: string;
  units: readonly GrammarRelatedUnitLink[];
};

export type GrammarTopicDetail = {
  slug: string;
  title: string;
  /** Eyebrow: level + grammar kind, e.g. "Intermediate - Tense". */
  levelLabel?: string;
  kindLabel?: string;
  sourceBook?: string;
  sourceNote?: string;
  intro: string;
  /** Highlighted “học kèm” note with links to related unit pages. */
  relatedStudy?: GrammarRelatedStudy;
  structure: {
    affirmative: string;
    negative: string;
  };
  usagePoints: readonly GrammarUsagePoint[];
  examples: readonly GrammarTopicExample[];
  practice: {
    questionCount: number;
    studentCount: number;
  };
};
