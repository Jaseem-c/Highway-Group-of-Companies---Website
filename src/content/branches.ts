/**
 * Branch details transcribed from page 7 of the 2026 company profile.
 * The brochure prints these as images, so every entry must be verified
 * against the source before publishing (see CONTENT-REVIEW.md).
 * Nothing here has been invented: missing fields are simply left out.
 */

export type Region = "Abu Dhabi" | "Al Dhafra Region";

export type Branch = {
  slug: string;
  name: string;
  /** Compact name for lists. */
  shortName: string;
  /** Legal form exactly as printed. */
  legalForm?: string;
  logo?: string;
  isHeadOffice?: boolean;
  region: Region;
  /** Address lines as printed. */
  address: string[];
  /** Short area label for compact lists. */
  area: string;
  phones: { label: string; display: string; href: string }[];
  fax?: string;
  poBox?: string;
  email: string;
  /** Free-text flags shown in the review tag tooltip. */
  review?: string;
};

export const branches: Branch[] = [
  {
    slug: "highway-electrical-equipment",
    shortName: "Highway Electrical Equipment",
    name: "Highway Electrical Equipment L.L.C.",
    legalForm: "Head office",
    logo: "/brand/highway-icon.png",
    isHeadOffice: true,
    region: "Abu Dhabi",
    address: ["Hamdan Street – Ziyani", "Abu Dhabi – UAE"],
    area: "Hamdan Street, Ziyani",
    phones: [{ label: "Tel", display: "02-671 6128", href: "+97126716128" }],
    fax: "02-671 5129",
    poBox: "51935",
    email: "highwayelectricaleqp@gmail.com",
    review: "Brochure lists this as the 'Contact Us' office; confirm it is the 7th outlet.",
  },
  {
    slug: "spot-light",
    shortName: "Spot Light",
    name: "Spot Light Electrical And Building Materials",
    legalForm: "Sole Proprietorship L.L.C.",
    logo: "/images/branches/spot-light.png",
    region: "Abu Dhabi",
    address: ["Opp. Bus Stand, near Speed Mobile Shop", "Hazza Bin Zayed Street", "Abu Dhabi – U.A.E."],
    area: "Hazza Bin Zayed Street",
    phones: [{ label: "Tel", display: "02-6500677", href: "+97126500677" }],
    email: "highwayelectricaleqp@gmail.com",
  },
  {
    slug: "high-volt",
    shortName: "High Volt",
    name: "High Volt Electrical & Building Materials",
    legalForm: "L.L.C. – O.P.C",
    logo: "/images/branches/high-volt.png",
    region: "Al Dhafra Region",
    address: ["MR 1 Sector, Al Marfa", "Al Dhafra Region", "Abu Dhabi, U.A.E"],
    area: "Al Marfa, Al Dhafra",
    phones: [{ label: "Tel", display: "02 621 5507", href: "+97126215507" }],
    poBox: "51935",
    email: "highwayelectricaleqp@gmail.com",
    review: "Legal form is printed as 'O.P.C' in the heading but 'S.P.C' inside the logo.",
  },
  {
    slug: "future-corner",
    shortName: "Future Corner",
    name: "Future Corner Electrical & Building Materials",
    legalForm: "L.L.C. – O.P.C",
    logo: "/images/branches/future-corner.png",
    region: "Abu Dhabi",
    address: ["Muroor Road, Opp Zayed University", "Abu Dhabi – UAE"],
    area: "Muroor Road",
    phones: [{ label: "Tel", display: "+971 2 445 8566", href: "+97124458566" }],
    email: "highwayelectricaleqp@gmail.com",
  },
  {
    slug: "fusion-tech",
    shortName: "Fusion Tech",
    name: "Fusion Tech Electrical and Building Materials",
    legalForm: "L.L.C. – S.P.C",
    logo: "/images/branches/fusion-tech.png",
    region: "Abu Dhabi",
    address: ["Sector ME 10, Wadi Al Mikhaylfah St. 14", "Mohammed Bin Zayed City", "Abu Dhabi – U.A.E."],
    area: "Mohammed Bin Zayed City",
    phones: [{ label: "Mob", display: "+971 50 226 2411", href: "+971502262411" }],
    email: "fusiontechelectrical@gmail.com",
    review: "Street name is spelled 'Mikhaylfah' and 'Mikhayifah' in different places in the brochure.",
  },
  {
    slug: "best-highway",
    shortName: "Best Highway",
    name: "Best Highway Electrical and Building Materials",
    legalForm: "Sole Proprietorship L.L.C.",
    logo: "/images/branches/best-highway.png",
    region: "Abu Dhabi",
    address: ["Near Hatta Smokers Accessories", "Khalidiya, Abu Dhabi – U.A.E."],
    area: "Khalidiya",
    phones: [{ label: "Tel", display: "02-6279330", href: "+97126279330" }],
    poBox: "51935",
    email: "highwayelectricaleqp@gmail.com",
  },
  {
    slug: "power-gate",
    shortName: "Power Gate",
    name: "Power Gate Electrical Equipment & Building Materials",
    legalForm: "L.L.C. – S.P.C",
    logo: "/images/branches/power-gate.png",
    region: "Al Dhafra Region",
    address: ["Madinat Zayed, Al Dhafra Region", "Abu Dhabi – United Arab Emirates"],
    area: "Madinat Zayed, Al Dhafra",
    phones: [{ label: "Mob", display: "+971 56 127 2886", href: "+971561272886" }],
    email: "highwayelectricaleqp@gmail.com",
  },
];

export const mapsUrl = (b: Branch) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    [b.name, ...b.address].join(", "),
  )}`;
