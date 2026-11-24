import { brands } from "@/content/brands";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BrandTile } from "@/components/brands/BrandTile";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";

const featured = [
  "schneider-electric", "abb", "philips", "hager", "ducab", "nexans", "makita",
  "dewalt", "grohe", "jotun", "ledvance", "osram", "weber", "yale",
];

export function BrandsPreview({ lang, t }: { lang: Locale; t: Dictionary }) {
  const s = t.home.brands;
  const list = featured.map((s) => brands.find((b) => b.slug === s)!).filter(Boolean);
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">{s.eyebrow}</p>
            <h2 className="display display-lg mt-5 max-w-3xl">{s.title}</h2>
          </div>
          <LinkButton href={href(lang, "/brands")} variant="dark" className="self-start lg:self-auto">
            {s.cta(brands.length)}
          </LinkButton>
        </Reveal>
        <ul className="mt-14 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {list.map((b) => (
            <li key={b.slug} className="bg-white">
              <BrandTile brand={b} t={t} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
