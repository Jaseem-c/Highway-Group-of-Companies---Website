import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, LOCALE_COOKIE, locales, type Locale } from "@/i18n/config";

/** Redirects any path without a language prefix to /en or /ar. */
function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  if (saved && isLocale(saved)) return saved;
  const accept = request.headers.get("accept-language") ?? "";
  const first = accept.split(",")[0]?.trim().slice(0, 2).toLowerCase();
  return first && isLocale(first) ? first : defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, API routes and any file with an extension (images, fonts, icons, robots, sitemap).
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
