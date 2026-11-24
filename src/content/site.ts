/**
 * Single source of truth for company-wide facts.
 * Everything here comes from the 2026 HIGH WAY company profile brochure.
 * Anything marked `review` is listed in CONTENT-REVIEW.md.
 */

export const site = {
  name: "HIGH WAY Group of Company",
  shortName: "HIGH WAY",
  legalName: "Highway Electrical Equipment L.L.C.",
  /** Official positioning line, exactly as printed in the brochure. */
  officialTagline: "Company powering project building the future....",
  /** Set NEXT_PUBLIC_SITE_URL in production. Falls back to localhost for builds. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /**
   * While true, unverified data (branch details, emails) shows a small
   * "Verify" tag so it cannot be published unnoticed. Set to false once the
   * client has confirmed every item in CONTENT-REVIEW.md.
   */
  showReviewFlags: true,
  facts: {
    legacyYears: 24,
    outlets: 7,
    divisions: 8,
  },
  hq: {
    name: "Highway Electrical Equipment L.L.C.",
    street: { en: "Hamdan Street – Ziyani", ar: "شارع حمدان – الزياني" },
    city: { en: "Abu Dhabi", ar: "أبوظبي" },
    cityLine: { en: "Abu Dhabi – UAE", ar: "أبوظبي – الإمارات" },
    country: "United Arab Emirates",
    poBox: "51935",
    tel: "02-671 6128",
    telHref: "+97126716128",
    fax: "02-671 5129",
    email: "highwayelectricaleqp@gmail.com",
  },
} as const;

export const navigation = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/products", key: "products" },
  { href: "/brands", key: "brands" },
  { href: "/branches", key: "branches" },
  { href: "/contact", key: "contact" },
] as const;

