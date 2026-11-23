import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { BrandTile } from "@/components/brands/BrandTile";
import { brands } from "@/content/brands";

export const metadata: Metadata = {
  title: "Brands",
  description: `The HIGH WAY brand portfolio: ${brands.length} brands across electrical, lighting, cables, tools, plumbing, building materials and paints.`,
  alternates: { canonical: "/brands" },
};

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brand portfolio"
        title={
          <>
            Brands you <span className="text-brand-bright">know</span>
          </>
        }
        lede="A premium portfolio of recognised names across cables, lighting, electrical equipment, tools, plumbing, building materials and paints."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <ul className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
            {brands.map((b) => (
              <li key={b.slug} className="bg-white">
                <BrandTile brand={b} />
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-sm text-steel">
            All trademarks and logos are the property of their respective owners and are shown to illustrate the HIGH WAY
            brand portfolio. Their appearance does not imply endorsement or exclusive distribution rights.
          </p>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <h2 className="display display-md max-w-2xl">Looking for a specific brand or product?</h2>
          <LinkButton href="/contact#enquiry">Ask our team</LinkButton>
        </Container>
      </section>
    </>
  );
}
