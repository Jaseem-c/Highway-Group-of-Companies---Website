import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { DivisionsSection } from "@/components/home/DivisionsSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BrandsPreview } from "@/components/home/BrandsPreview";
import { Strengths } from "@/components/home/Strengths";
import { BranchesPreview } from "@/components/home/BranchesPreview";
import { ContactCTA } from "@/components/home/ContactCTA";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/i18n/metadata";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return pageMetadata(lang, await getDictionary(lang), "/");
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = await getDictionary(lang);
  return (
    <>
      <Hero lang={lang} t={t} />
      <Introduction lang={lang} t={t} />
      <DivisionsSection lang={lang} t={t} />
      <FeaturedProducts lang={lang} t={t} />
      <BrandsPreview lang={lang} t={t} />
      <Strengths t={t} />
      <BranchesPreview lang={lang} t={t} />
      <ContactCTA lang={lang} t={t} />
    </>
  );
}
