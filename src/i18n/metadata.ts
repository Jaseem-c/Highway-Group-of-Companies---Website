import type { Metadata } from "next";
import { site } from "@/content/site";
import { href, locales, type Locale } from "./config";
import type { Dictionary } from "./en";

/** Per-page metadata with canonical + hreflang alternates for both languages. */
export function pageMetadata(
  lang: Locale,
  t: Dictionary,
  path: string,
  page?: { title: string; description: string },
): Metadata {
  return {
    ...(page ? { title: page.title, description: page.description } : {}),
    alternates: {
      canonical: href(lang, path),
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, href(l, path)])),
        "x-default": href("en", path),
      },
    },
    openGraph: {
      type: "website",
      siteName: t.meta.siteName,
      locale: t.meta.ogLocale,
      title: page ? `${page.title} | ${t.meta.siteName}` : t.meta.siteName,
      description: page?.description ?? t.meta.description,
      url: `${site.url}${href(lang, path)}`,
      images: [{ url: "/images/hero-tower.jpg", width: 2400, height: 1600, alt: t.meta.siteName }],
    },
  };
}
