import type { L } from "@/i18n/config";

/**
 * Arabic text is an AI-drafted translation of the brochure wording and is
 * listed in CONTENT-REVIEW.md for native-speaker review.
 */
export type Division = {
  slug: string;
  name: L;
  /** White line icon taken from the brochure (public/icons). */
  icon: string;
  summary: L;
  /** Product lists exactly as printed in the brochure. Only present where the brochure provides one. */
  items?: { en: string[]; ar: string[] };
  /** Product photographs from the brochure (public/images/products). */
  photos?: { src: string; alt: L }[];
};

const p = (file: string, alt: L) => ({ src: `/images/products/${file}.png`, alt });

const alt = {
  downlight: { en: "Recessed LED downlight", ar: "إضاءة LED غاطسة" },
  highbay: { en: "Industrial LED high bay light", ar: "إضاءة LED صناعية عالية السقف" },
  cable: { en: "Multicore power cable", ar: "كابل كهرباء متعدد الأسلاك" },
  fan: { en: "Electrical exhaust fan", ar: "مروحة شفط كهربائية" },
  contactor: { en: "Contactor", ar: "كونتاكتور" },
  mcb: { en: "Circuit breaker with residual current protection", ar: "قاطع كهربائي مع حماية من التيار المتبقي" },
  relay: { en: "Thermal overload relay", ar: "مرحّل حماية حرارية من الحمل الزائد" },
  enclosure: { en: "Distribution enclosure", ar: "علبة توزيع كهربائية" },
  mixer: { en: "Chrome basin mixer", ar: "خلّاط مغسلة كروم" },
  shower: { en: "Shower set", ar: "طقم دش" },
  valve: { en: "Stainless steel ball valves", ar: "محابس كروية من الفولاذ المقاوم للصدأ" },
  ppr: { en: "PPR pipes", ar: "أنابيب PPR" },
} satisfies Record<string, L>;

export const divisions: Division[] = [
  {
    slug: "electrical-lighting-control",
    name: { en: "Electrical Lighting & Control", ar: "الإضاءة والتحكم الكهربائي" },
    icon: "/icons/electrical-lighting-control.png",
    summary: {
      en: "Advanced, technology-driven electrical products — light fittings, switches, fans, high-grade cables and the fittings that connect them.",
      ar: "منتجات كهربائية متطورة قائمة على التكنولوجيا — تجهيزات الإضاءة والمفاتيح والمراوح والكابلات عالية الجودة والتجهيزات الموصِّلة لها.",
    },
    items: {
      en: [
        "Electrical Switches", "Socket", "Switch gears", "Industrial Plug & Socket", "LED Lamps", "Plug Top",
        "Electrical Fittings", "Cables & Fittings", "Battery", "Battery Terminals", "Adaptors", "Electrical Fans",
        "Isolator", "Earth Rod & Clamp", "Enclosure", "Water Heater", "Insulation Tape", "Telephone Cable",
        "Wire Connectors", "Wire Terminals", "Auto Wire", "Trunking", "TV Cable", "Wire Pulling Spring",
        "Wire Clips", "Starter", "Conduits & Fittings",
      ],
      ar: [
        "مفاتيح كهربائية", "مقابس", "لوحات مفاتيح التوزيع", "قوابس ومقابس صناعية", "مصابيح LED", "قوابس",
        "تجهيزات كهربائية", "كابلات وتجهيزاتها", "بطاريات", "أطراف البطاريات", "محوّلات", "مراوح كهربائية",
        "فاصل عزل", "قضيب التأريض ومشبكه", "علب كهربائية", "سخان مياه", "شريط عازل", "كابل هاتف",
        "موصّلات أسلاك", "أطراف أسلاك", "أسلاك سيارات", "مجاري الكابلات", "كابل تلفاز", "زنبرك سحب الأسلاك",
        "مشابك أسلاك", "بادئ تشغيل", "أنابيب حماية الكابلات وتجهيزاتها",
      ],
    },
    photos: [
      p("el-downlight", alt.downlight),
      p("el-highbay", alt.highbay),
      p("el-power-cable", alt.cable),
      p("el-exhaust-fan", alt.fan),
    ],
  },
  {
    slug: "control-automation-panels",
    name: { en: "Control & Automation Panels", ar: "لوحات التحكم والأتمتة" },
    icon: "/icons/control-automation-panels.png",
    summary: {
      en: "Control gear and distribution components for electrical and mechanical systems — contactors, relays, protection devices and enclosures.",
      ar: "معدات تحكم ومكوّنات توزيع للأنظمة الكهربائية والميكانيكية — كونتاكتورات ومرحّلات وأجهزة حماية وعلب كهربائية.",
    },
    photos: [
      p("el-contactor", alt.contactor),
      p("el-mcb-rccb", alt.mcb),
      p("el-overload-relay", alt.relay),
      p("el-enclosure", alt.enclosure),
    ],
  },
  {
    slug: "hardware",
    name: { en: "Hardware", ar: "الأدوات والعدد" },
    icon: "/icons/hardware.png",
    summary: {
      en: "Hardware supplied as part of our complete electrical and mechanical offering, for retail and wholesale customers.",
      ar: "أدوات وعدد تُورَّد ضمن عرضنا المتكامل للكهرباء والميكانيكا، لعملاء التجزئة والجملة.",
    },
  },
  {
    slug: "plumbing-sanitary",
    name: { en: "Plumbing & Sanitary", ar: "السباكة والأدوات الصحية" },
    icon: "/icons/plumbing-sanitary.png",
    summary: {
      en: "Mixers, showers, taps, valves, pipes and fittings, together with sanitary ware for complete plumbing requirements.",
      ar: "خلّاطات ودشّات وحنفيات ومحابس وأنابيب وتجهيزات، إلى جانب الأدوات الصحية لتلبية كامل احتياجات السباكة.",
    },
    items: {
      en: [
        "WC Fittings", "Shattafs & Showers", "Hose & Hose Connectors", "GI Pipe & Fittings", "Pipes",
        "Copper Pipe & Fittings", "PVC Pipe & Fittings", "Shower Mixer", "Sink Mixer", "Basin Mixer",
        "Kitchen Sink", "Water Tap", "Floor Trap",
      ],
      ar: [
        "تجهيزات المراحيض", "الشطّافات والدشّات", "خراطيم وموصّلاتها", "أنابيب مجلفنة وتجهيزاتها", "أنابيب",
        "أنابيب نحاسية وتجهيزاتها", "أنابيب PVC وتجهيزاتها", "خلّاط دش", "خلّاط حوض المطبخ", "خلّاط مغسلة",
        "حوض مطبخ", "حنفية مياه", "مصفاة أرضية",
      ],
    },
    photos: [
      p("pl-basin-mixer", alt.mixer),
      p("pl-shower-set", alt.shower),
      p("pl-ball-valve", alt.valve),
      p("pl-ppr-pipes", alt.ppr),
    ],
  },
  {
    slug: "building-materials",
    name: { en: "Building Materials", ar: "مواد البناء" },
    icon: "/icons/building-materials.png",
    summary: {
      en: "Building materials supplied across our outlets to retail and wholesale markets.",
      ar: "مواد بناء تُورَّد عبر منافذنا لأسواق التجزئة والجملة.",
    },
  },
  {
    slug: "paint-coating",
    name: { en: "Paint & Coating Solutions", ar: "حلول الدهانات والطلاء" },
    icon: "/icons/paint-coating.png",
    summary: {
      en: "Paints and coating solutions, supplied alongside our building-materials range.",
      ar: "دهانات وحلول طلاء تُورَّد إلى جانب مجموعة مواد البناء لدينا.",
    },
  },
  {
    slug: "power-tools",
    name: { en: "Power Tools", ar: "العدد الكهربائية" },
    icon: "/icons/power-tools.png",
    summary: {
      en: "Power tools supplied alongside our hardware and electrical ranges.",
      ar: "عدد كهربائية تُورَّد إلى جانب مجموعات الأدوات والمنتجات الكهربائية لدينا.",
    },
  },
  {
    slug: "safety-products",
    name: { en: "Safety Products", ar: "منتجات السلامة" },
    icon: "/icons/safety-products.png",
    summary: {
      en: "Safety products to complement our electrical, hardware and building-materials supply.",
      ar: "منتجات سلامة تُكمّل توريداتنا من المنتجات الكهربائية والأدوات ومواد البناء.",
    },
  },
];

/** Featured product categories for the homepage. Labels follow the brochure product lists. */
export const featuredProducts = [
  { label: { en: "LED & Light Fittings", ar: "مصابيح LED وتجهيزات الإضاءة" }, photo: p("el-downlight", alt.downlight), division: "electrical-lighting-control" },
  { label: { en: "Cables & Wires", ar: "الكابلات والأسلاك" }, photo: p("el-power-cable", alt.cable), division: "electrical-lighting-control" },
  { label: { en: "Switch Gears", ar: "لوحات مفاتيح التوزيع" }, photo: p("el-mcb-rccb", alt.mcb), division: "control-automation-panels" },
  { label: { en: "Contactors & Starters", ar: "الكونتاكتورات وبادئات التشغيل" }, photo: p("el-contactor", alt.contactor), division: "control-automation-panels" },
  { label: { en: "Enclosures", ar: "العلب الكهربائية" }, photo: p("el-enclosure", alt.enclosure), division: "control-automation-panels" },
  { label: { en: "Electrical Fans", ar: "المراوح الكهربائية" }, photo: p("el-exhaust-fan", alt.fan), division: "electrical-lighting-control" },
  { label: { en: "Mixers & Taps", ar: "الخلّاطات والحنفيات" }, photo: p("pl-basin-mixer", alt.mixer), division: "plumbing-sanitary" },
  { label: { en: "Pipes & Fittings", ar: "الأنابيب وتجهيزاتها" }, photo: p("pl-ppr-pipes", alt.ppr), division: "plumbing-sanitary" },
] as const;
