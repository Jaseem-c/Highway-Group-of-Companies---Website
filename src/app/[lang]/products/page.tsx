import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { DivisionRow } from "@/components/products/DivisionRow";
import { divisions } from "@/content/divisions";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/i18n/metadata";

export async function generateMetadata({ params }: PageProps<"/[lang]/products">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = await getDictionary(lang);
  return pageMetadata(lang, t, "/products", t.meta.pages.products);
}

export default async function ProductsPage({ params }: PageProps<"/[lang]/products">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = await getDictionary(lang);
  const h = t.products.hero;
  return (
    <>
      <PageHero
        eyebrow={h.eyebrow}
        title={
          <>
            {h.titleA}<span className="text-brand-bright">{h.titleB}</span>{h.titleC}
          </>
        }
        lede={h.lede}
      />

      <div className="sticky top-[4.5rem] z-30 border-b border-line bg-white/95 backdrop-blur-sm lg:top-20">
        <Container>
          <nav aria-label={t.products.jumpNav} className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <ul className="flex min-w-max gap-8">
              {divisions.map((d, i) => (
                <li key={d.slug}>
                  <Link
                    href={`#${d.slug}`}
                    className="flex items-center gap-2 whitespace-nowrap py-4 font-display text-xs font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:text-brand"
                  >
                    <span className="text-brand-bright">{String(i + 1).padStart(2, "0")}</span>
                    {d.name[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>

      {divisions.map((d, i) => (
        <DivisionRow key={d.slug} division={d} index={i} lang={lang} t={t} />
      ))}
    </>
  );
}
