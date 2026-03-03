import { Language, translations } from "./translations";

export function useTranslate(defaultLang?: Language) {
  // fallback nếu undefined
  const safeLang: Language = translations[defaultLang as Language]
    ? (defaultLang as Language)
    : "vi";

  const t = (key: string) => {
    return translations?.[safeLang]?.[key as keyof typeof translations[typeof safeLang]] ?? key;
  };

  return { t };
}