export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);

export const dirOf = (l: Locale) => (l === "ar" ? "rtl" : "ltr");
export const otherLocale = (l: Locale): Locale => (l === "ar" ? "en" : "ar");

/** A string that exists in both languages. */
export type L = { en: string; ar: string };
export const loc = (v: L, l: Locale) => v[l];

/** Prefix an internal path with the locale. Hashes and queries are preserved. */
export const href = (l: Locale, path: string) => {
  if (path === "/") return `/${l}`;
  return `/${l}${path.startsWith("/") ? path : `/${path}`}`;
};

/** Remove the locale segment from a pathname ("/ar/about" → "/about"). */
export const stripLocale = (pathname: string) => {
  const m = pathname.match(/^\/(en|ar)(\/.*)?$/);
  return m ? m[2] || "/" : pathname;
};
