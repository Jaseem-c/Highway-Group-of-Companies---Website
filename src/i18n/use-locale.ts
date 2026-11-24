"use client";

import { usePathname } from "next/navigation";
import { defaultLocale, isLocale, type Locale } from "./config";

/** Locale from the current URL — for client-only boundaries (error / not-found) that get no params. */
export function useLocale(): Locale {
  const seg = usePathname().split("/")[1] ?? "";
  return isLocale(seg) ? seg : defaultLocale;
}
