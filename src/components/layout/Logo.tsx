import Image from "next/image";
import Link from "next/link";
import { href, type Locale } from "@/i18n/config";

/**
 * The official HIGH WAY lockup, extracted unmodified from the 2026 brochure.
 * Aspect ratio 1744 × 493 is preserved; it always sits on a white field.
 * The logo is never mirrored in RTL.
 */
export function Logo({
  lang,
  className = "h-10 sm:h-11",
  priority = false,
  label,
}: {
  lang: Locale;
  className?: string;
  priority?: boolean;
  label: string;
}) {
  return (
    <Link href={href(lang, "/")} aria-label={label} className="inline-block shrink-0">
      <Image
        src="/brand/highway-lockup.png"
        alt="HIGH WAY Group of Company"
        width={1744}
        height={493}
        priority={priority}
        sizes="200px"
        className={`w-auto ${className}`}
      />
    </Link>
  );
}
