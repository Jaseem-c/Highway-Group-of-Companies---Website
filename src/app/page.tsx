import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { DivisionsSection } from "@/components/home/DivisionsSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BrandsPreview } from "@/components/home/BrandsPreview";
import { Strengths } from "@/components/home/Strengths";
import { BranchesPreview } from "@/components/home/BranchesPreview";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <DivisionsSection />
      <FeaturedProducts />
      <BrandsPreview />
      <Strengths />
      <BranchesPreview />
      <ContactCTA />
    </>
  );
}
