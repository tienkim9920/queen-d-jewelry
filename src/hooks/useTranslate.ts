import { Language, translations } from "./translations";

export function useTranslate<TLang extends Language = 'vi'>(defaultLang: TLang) {
  const t = <TKey extends keyof typeof translations[TLang]>(key: TKey) => {
    return translations[defaultLang][key];
  };

  return { t };
}
