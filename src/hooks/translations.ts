import { EN } from "@/languages/en";
import { KO } from "@/languages/ko";
import { VI } from "@/languages/vi";

export const translations = {
  vi: {
    ...VI,
  },
  en: {
    ...EN,
  },
  ko: {
    ...KO,
  },
} as const;

type Translations = typeof translations.vi; // giả sử các ngôn ngữ có key giống nhau
export type TranslationKeys = keyof Translations; // "title" | "about" | "greeting"
export type Language = keyof typeof translations; // "vi" | "en"
