import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { BrandTile } from "@/components/brands/BrandTile";
import { brands } from "@/content/brands";
import { href, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/i18n/metadata";

export async function generateMetadata({ params }: PageProps<"/[lang]/brands">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = await getDictionary(lang);
  const p = t.meta.pages.brands;
  return pageMetadata(lang, t, "/brands", { title: p.title, description: p.description(brands.length) });
}

export default async function BrandsPage({ params }: PageProps<"/[lang]/brands">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = await getDictionary(lang);
  const h = t.brands.hero;
  return (
    <>
      <PageHero
        eyebrow={h.eyebrow}
        title={
          <>
            {h.titleA}<span className="text-brand-bright">{h.titleB}</span>
          </>
        }
        lede={h.lede}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <ul className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
            {brands.map((b) => (
              <li key={b.slug} className="bg-white">
                <BrandTile brand={b} t={t} />
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-sm text-steel">{t.brands.disclaimer}</p>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <h2 className="display display-md max-w-2xl">{t.brands.ctaTitle}</h2>
          <LinkButton href={`${href(lang, "/contact")}#enquiry`}>{t.brands.ctaButton}</LinkButton>
        </Container>
      </section>
    </>
  );
}
