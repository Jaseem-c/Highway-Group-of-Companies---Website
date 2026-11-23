import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes = ["", "/about", "/products", "/brands", "/branches", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `${site.url}${r}`, changeFrequency: "monthly", priority: r === "" ? 1 : 0.7 }));
}
