export type DictPhonetic = { text?: string; audio?: string };
export type DictDefinition = { definition?: string; example?: string };
export type DictMeaning = { partOfSpeech?: string; definitions?: DictDefinition[] };
export type DictEntry = { word?: string; phonetics?: DictPhonetic[]; meanings?: DictMeaning[] };
