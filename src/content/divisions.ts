export type Division = {
  slug: string;
  name: string;
  /** White line icon taken from the brochure (public/icons). */
  icon: string;
  summary: string;
  /** Product lists exactly as printed in the brochure. Only present where the brochure provides one. */
  items?: string[];
  /** Product photographs from the brochure (public/images/products). */
  photos?: { src: string; alt: string }[];
};

const p = (file: string, alt: string) => ({ src: `/images/products/${file}.png`, alt });

export const divisions: Division[] = [
  {
    slug: "electrical-lighting-control",
    name: "Electrical Lighting & Control",
    icon: "/icons/electrical-lighting-control.png",
    summary:
      "Advanced, technology-driven electrical products — light fittings, switches, fans, high-grade cables and the fittings that connect them.",
    items: [
      "Electrical Switches",
      "Socket",
      "Switch gears",
      "Industrial Plug & Socket",
      "LED Lamps",
      "Plug Top",
      "Electrical Fittings",
      "Cables & Fittings",
      "Battery",
      "Battery Terminals",
      "Adaptors",
      "Electrical Fans",
      "Isolator",
      "Earth Rod & Clamp",
      "Enclosure",
      "Water Heater",
      "Insulation Tape",
      "Telephone Cable",
      "Wire Connectors",
      "Wire Terminals",
      "Auto Wire",
      "Trunking",
      "TV Cable",
      "Wire Pulling Spring",
      "Wire Clips",
      "Starter",
      "Conduits & Fittings",
    ],
    photos: [
      p("el-downlight", "Recessed LED downlight"),
      p("el-highbay", "Industrial LED high bay light"),
      p("el-power-cable", "Multicore power cable"),
      p("el-exhaust-fan", "Electrical exhaust fan"),
    ],
  },
  {
    slug: "control-automation-panels",
    name: "Control & Automation Panels",
    icon: "/icons/control-automation-panels.png",
    summary:
      "Control gear and distribution components for electrical and mechanical systems — contactors, relays, protection devices and enclosures.",
    photos: [
      p("el-contactor", "Contactor"),
      p("el-mcb-rccb", "Circuit breaker with residual current protection"),
      p("el-overload-relay", "Thermal overload relay"),
      p("el-enclosure", "Distribution enclosure"),
    ],
  },
  {
    slug: "hardware",
    name: "Hardware",
    icon: "/icons/hardware.png",
    summary:
      "Hardware supplied as part of our complete electrical and mechanical offering, for retail and wholesale customers.",
  },
  {
    slug: "plumbing-sanitary",
    name: "Plumbing & Sanitary",
    icon: "/icons/plumbing-sanitary.png",
    summary:
      "Mixers, showers, taps, valves, pipes and fittings, together with sanitary ware for complete plumbing requirements.",
    items: [
      "WC Fittings",
      "Shattafs & Showers",
      "Hose & Hose Connectors",
      "GI Pipe & Fittings",
      "Pipes",
      "Copper Pipe & Fittings",
      "PVC Pipe & Fittings",
      "Shower Mixer",
      "Sink Mixer",
      "Basin Mixer",
      "Kitchen Sink",
      "Water Tap",
      "Floor Trap",
    ],
    photos: [
      p("pl-basin-mixer", "Chrome basin mixer"),
      p("pl-shower-set", "Shower set"),
      p("pl-ball-valve", "Stainless steel ball valves"),
      p("pl-ppr-pipes", "PPR pipes"),
    ],
  },
  {
    slug: "building-materials",
    name: "Building Materials",
    icon: "/icons/building-materials.png",
    summary:
      "Building materials supplied across our outlets to retail and wholesale markets.",
  },
  {
    slug: "paint-coating",
    name: "Paint & Coating Solutions",
    icon: "/icons/paint-coating.png",
    summary:
      "Paints and coating solutions, supplied alongside our building-materials range.",
  },
  {
    slug: "power-tools",
    name: "Power Tools",
    icon: "/icons/power-tools.png",
    summary:
      "Power tools supplied alongside our hardware and electrical ranges.",
  },
  {
    slug: "safety-products",
    name: "Safety Products",
    icon: "/icons/safety-products.png",
    summary:
      "Safety products to complement our electrical, hardware and building-materials supply.",
  },
];

/** Featured product categories for the homepage. Labels follow the brochure product lists. */
export const featuredProducts = [
  { label: "LED & Light Fittings", photo: p("el-downlight", "Recessed LED downlight"), division: "electrical-lighting-control" },
  { label: "Cables & Wires", photo: p("el-power-cable", "Multicore power cable"), division: "electrical-lighting-control" },
  { label: "Switch Gears", photo: p("el-mcb-rccb", "Circuit breaker with residual current protection"), division: "control-automation-panels" },
  { label: "Contactors & Starters", photo: p("el-contactor", "Contactor"), division: "control-automation-panels" },
  { label: "Enclosures", photo: p("el-enclosure", "Distribution enclosure"), division: "control-automation-panels" },
  { label: "Electrical Fans", photo: p("el-exhaust-fan", "Electrical exhaust fan"), division: "electrical-lighting-control" },
  { label: "Mixers & Taps", photo: p("pl-basin-mixer", "Chrome basin mixer"), division: "plumbing-sanitary" },
  { label: "Pipes & Fittings", photo: p("pl-ppr-pipes", "PPR pipes"), division: "plumbing-sanitary" },
] as const;
