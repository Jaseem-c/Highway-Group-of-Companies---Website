import { brands } from "@/content/brands";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BrandTile } from "@/components/brands/BrandTile";

const featured = [
  "schneider-electric", "abb", "philips", "hager", "ducab", "nexans", "makita",
  "dewalt", "grohe", "jotun", "ledvance", "osram", "weber", "yale",
];

export function BrandsPreview() {
  const list = featured.map((s) => brands.find((b) => b.slug === s)!).filter(Boolean);
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">Brand portfolio</p>
            <h2 className="display display-lg mt-5 max-w-3xl">Recognised names across every division</h2>
          </div>
          <LinkButton href="/brands" variant="dark" className="self-start lg:self-auto">
            View all {brands.length} brands
          </LinkButton>
        </Reveal>
        <ul className="mt-14 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {list.map((b) => (
            <li key={b.slug} className="bg-white">
              <BrandTile brand={b} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
