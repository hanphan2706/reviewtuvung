export type VocabularyUnitLevel = "A1" | "A2" | "B2";

export type VocabularyUnitCatalogEntry = {
  id: string;
  unitNumber: number;
  topic: string;
  topicVi: string;
  title: string;
  titleVi: string;
  description: string;
  section: string;
  level: VocabularyUnitLevel;
  status: "published" | "coming-soon";
  sourceBook: string;
};
