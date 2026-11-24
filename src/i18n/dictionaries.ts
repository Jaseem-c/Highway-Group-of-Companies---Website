import type { Locale } from "./config";
import type { Dictionary } from "./en";

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./en").then((m) => m.en),
  ar: () => import("./ar").then((m) => m.ar),
};

export const getDictionary = (lang: Locale): Promise<Dictionary> => loaders[lang]();
