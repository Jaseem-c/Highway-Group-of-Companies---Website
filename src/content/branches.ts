/**
 * Branch details transcribed from page 7 of the 2026 company profile.
 * The brochure prints these as images, so every entry must be verified
 * against the source before publishing (see CONTENT-REVIEW.md).
 * Nothing here has been invented: missing fields are simply left out.
 * All 7 branches belong to Highway Electrical Equipment, so they are shown by
 * location and contact details only (no separate trade names or logos).
 */

import type { L } from "@/i18n/config";

export type Region = "abu-dhabi" | "al-dhafra";

export type Branch = {
  slug: string;
  isHeadOffice?: boolean;
  region: Region;
  /** Address lines as printed. */
  address: { en: string[]; ar: string[] };
  /** Location label used as the branch title (branches are shown by location, not by trade name). */
  area: L;
  phones: { kind: "tel" | "mob"; display: string; href: string }[];
  fax?: string;
  poBox?: string;
  email: string;
  /** Free-text flags shown in the review tag tooltip. */
  review?: string;
};

export const branches: Branch[] = [
  {
    slug: "hamdan-street-ziyani",
    isHeadOffice: true,
    region: "abu-dhabi",
    address: { en: ["Hamdan Street – Ziyani", "Abu Dhabi – UAE"], ar: ["شارع حمدان – الزياني", "أبوظبي – الإمارات"] },
    area: { en: "Hamdan Street, Ziyani", ar: "شارع حمدان، الزياني" },
    phones: [{ kind: "tel", display: "02-671 6128", href: "+97126716128" }],
    fax: "02-671 5129",
    poBox: "51935",
    email: "highwayelectricaleqp@gmail.com",
    review: "Brochure lists this as the 'Contact Us' office; confirm it is the 7th branch.",
  },
  {
    slug: "hazza-bin-zayed-street",
    region: "abu-dhabi",
    address: { en: ["Opp. Bus Stand, near Speed Mobile Shop", "Hazza Bin Zayed Street", "Abu Dhabi – U.A.E."], ar: ["مقابل موقف الحافلات، بالقرب من Speed Mobile Shop", "شارع هزاع بن زايد", "أبوظبي – الإمارات"] },
    area: { en: "Hazza Bin Zayed Street", ar: "شارع هزاع بن زايد" },
    phones: [{ kind: "tel", display: "02-6500677", href: "+97126500677" }],
    email: "highwayelectricaleqp@gmail.com",
  },
  {
    slug: "al-marfa",
    region: "al-dhafra",
    address: { en: ["MR 1 Sector, Al Marfa", "Al Dhafra Region", "Abu Dhabi, U.A.E"], ar: ["قطاع MR 1، المرفأ", "منطقة الظفرة", "أبوظبي، الإمارات"] },
    area: { en: "Al Marfa, Al Dhafra", ar: "المرفأ، الظفرة" },
    phones: [{ kind: "tel", display: "02 621 5507", href: "+97126215507" }],
    poBox: "51935",
    email: "highwayelectricaleqp@gmail.com",
  },
  {
    slug: "muroor-road",
    region: "abu-dhabi",
    address: { en: ["Muroor Road, Opp Zayed University", "Abu Dhabi – UAE"], ar: ["شارع المرور، مقابل جامعة زايد", "أبوظبي – الإمارات"] },
    area: { en: "Muroor Road", ar: "شارع المرور" },
    phones: [{ kind: "tel", display: "+971 2 445 8566", href: "+97124458566" }],
    email: "highwayelectricaleqp@gmail.com",
  },
  {
    slug: "mohammed-bin-zayed-city",
    region: "abu-dhabi",
    address: { en: ["Sector ME 10, Wadi Al Mikhaylfah St. 14", "Mohammed Bin Zayed City", "Abu Dhabi – U.A.E."], ar: ["قطاع ME 10، Wadi Al Mikhaylfah St. 14", "مدينة محمد بن زايد", "أبوظبي – الإمارات"] },
    area: { en: "Mohammed Bin Zayed City", ar: "مدينة محمد بن زايد" },
    phones: [{ kind: "mob", display: "+971 50 226 2411", href: "+971502262411" }],
    email: "fusiontechelectrical@gmail.com",
    review: "Street name is spelled 'Mikhaylfah' and 'Mikhayifah' in different places in the brochure.",
  },
  {
    slug: "khalidiya",
    region: "abu-dhabi",
    address: { en: ["Near Hatta Smokers Accessories", "Khalidiya, Abu Dhabi – U.A.E."], ar: ["بالقرب من Hatta Smokers Accessories", "الخالدية، أبوظبي – الإمارات"] },
    area: { en: "Khalidiya", ar: "الخالدية" },
    phones: [{ kind: "tel", display: "02-6279330", href: "+97126279330" }],
    poBox: "51935",
    email: "highwayelectricaleqp@gmail.com",
  },
  {
    slug: "madinat-zayed",
    region: "al-dhafra",
    address: { en: ["Madinat Zayed, Al Dhafra Region", "Abu Dhabi – United Arab Emirates"], ar: ["مدينة زايد، منطقة الظفرة", "أبوظبي – الإمارات العربية المتحدة"] },
    area: { en: "Madinat Zayed, Al Dhafra", ar: "مدينة زايد، الظفرة" },
    phones: [{ kind: "mob", display: "+971 56 127 2886", href: "+971561272886" }],
    email: "highwayelectricaleqp@gmail.com",
  },
];

export const mapsUrl = (b: Branch) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    ["Highway Electrical Equipment", ...b.address.en].join(", "),
  )}`;
