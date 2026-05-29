declare module "wink-lemmatizer" {
  export type LemmatizeFn = (word: string) => string;

  export const verb: LemmatizeFn;
  export const noun: LemmatizeFn;
  export const adjective: LemmatizeFn;
}
