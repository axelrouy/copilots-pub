export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

import fr from "./dictionaries/fr.json";
import en from "./dictionaries/en.json";

const dictionaries = { fr, en };

export type Dictionary = typeof fr;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Pick the value for the current locale from a bilingual field. */
export function pick<T>(field: { fr: T; en: T }, locale: Locale): T {
  return field[locale];
}
