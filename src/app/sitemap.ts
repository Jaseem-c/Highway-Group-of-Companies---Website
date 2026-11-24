import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { href, locales } from "@/i18n/config";

const routes = ["/", "/about", "/products", "/brands", "/branches", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((r) =>
    locales.map((l) => ({
      url: `${site.url}${href(l, r)}`,
      changeFrequency: "monthly" as const,
      priority: r === "/" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(locales.map((x) => [x, `${site.url}${href(x, r)}`])),
      },
    })),
  );
}
