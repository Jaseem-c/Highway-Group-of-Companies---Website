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
  /** Grammar-corrected presentation of the same line, used for headlines. */
  headline: ["Powering projects.", "Building the future."],
  description:
    "HIGH WAY Group of Company is a UAE electrical and mechanical solutions group — 24 years of legacy, 7 strategic outlets and a complete range of electrical, lighting, hardware, plumbing, building materials, paints, power tools and safety products.",
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
    street: "Hamdan Street – Ziyani",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    poBox: "51935",
    tel: "02-671 6128",
    telHref: "+97126716128",
    fax: "02-671 5129",
    email: "highwayelectricaleqp@gmail.com",
  },
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products & Solutions" },
  { href: "/brands", label: "Brands" },
  { href: "/branches", label: "Branches" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const strengths = [
  {
    title: "A 24-year legacy",
    body: "A premier UAE conglomerate built on 24 years of excellence in sourcing and distributing electrical products.",
  },
  {
    title: "7 strategic outlets",
    body: "Retail and wholesale customers are served through seven strategically located outlets.",
  },
  {
    title: "One complete portfolio",
    body: "High-grade cables, advanced light fittings, building materials, paints and specialised accessories under one group.",
  },
  {
    title: "Technology-driven products",
    body: "Advanced, technology-driven electrical products, backed by modern after-sales service.",
  },
  {
    title: "Customer-oriented range",
    body: "The best range of customer-oriented products — quality that is also affordable for every customer.",
  },
  {
    title: "Electrical & mechanical expertise",
    body: "A comprehensive electrical and mechanical solutions provider across eight core divisions.",
  },
] as const;
