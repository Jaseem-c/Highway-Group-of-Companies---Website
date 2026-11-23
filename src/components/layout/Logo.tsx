import Image from "next/image";
import Link from "next/link";

/**
 * The official HIGH WAY lockup, extracted unmodified from the 2026 brochure.
 * Aspect ratio 1744 × 493 is preserved; it always sits on a white field.
 */
export function Logo({ className = "h-10 sm:h-11", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Link href="/" aria-label="HIGH WAY Group of Company — home" className="inline-block shrink-0">
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
