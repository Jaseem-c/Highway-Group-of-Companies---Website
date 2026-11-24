"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { href, otherLocale, stripLocale, LOCALE_COOKIE, type Locale } from "@/i18n/config";

/**
 * Switches between English and Arabic while staying on the same page.
 * Remembers the choice in a cookie so `/` redirects to the preferred language.
 * The label is written in the *target* language ("العربية" / "English").
 */
export function LanguageSwitcher({
  lang,
  label,
  ariaLabel,
  className = "",
}: {
  lang: Locale;
  label: string;
  ariaLabel: string;
  className?: string;
}) {
  const pathname = usePathname();
  const next = otherLocale(lang);
  const target = href(next, stripLocale(pathname));

  return (
    <Link
      href={target}
      prefetch={false}
      hrefLang={next}
      lang={next}
      aria-label={ariaLabel}
      onClick={() => {
        document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
      }}
      className={`inline-flex min-h-12 items-center gap-2 px-3 font-display text-[0.8125rem] font-bold text-ink transition-colors hover:text-brand ${className}`}
    >
      <Globe aria-hidden className="size-4 text-brand" />
      <span>{label}</span>
    </Link>
  );
}
