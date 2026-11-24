import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { BranchCard } from "@/components/branches/BranchCard";
import { branches, type Region } from "@/content/branches";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/i18n/metadata";

const regions: Region[] = ["abu-dhabi", "al-dhafra"];

export async function generateMetadata({ params }: PageProps<"/[lang]/branches">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = await getDictionary(lang);
  return pageMetadata(lang, t, "/branches", t.meta.pages.branches);
}

export default async function BranchesPage({ params }: PageProps<"/[lang]/branches">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = await getDictionary(lang);
  const h = t.branches.hero;
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
          <nav aria-label={t.branches.regionsNav} className="flex flex-wrap gap-x-10 gap-y-2 border-b border-line pb-6 text-sm">
            {regions.map((r) => (
              <a key={r} href={`#${r}`} className="font-display font-bold uppercase tracking-[0.12em] hover:text-brand">
                {t.branches.regions[r]} <span className="text-steel">({branches.filter((b) => b.region === r).length})</span>
              </a>
            ))}
          </nav>

          {regions.map((region) => {
            const list = branches.filter((b) => b.region === region);
            return (
              <div key={region} id={region} className="pt-16">
                <h2 className="display display-md">{t.branches.regions[region]}</h2>
                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {list.map((b, i) => (
                    <BranchCard key={b.slug} branch={b} index={i} lang={lang} t={t} />
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </section>
    </>
  );
}
