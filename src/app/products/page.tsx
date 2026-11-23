import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { DivisionRow } from "@/components/products/DivisionRow";
import { divisions } from "@/content/divisions";

export const metadata: Metadata = {
  title: "Products & Solutions",
  description:
    "Eight core divisions: electrical lighting & control, control & automation panels, hardware, plumbing & sanitary, building materials, paint & coating solutions, power tools and safety products.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products & solutions"
        title={
          <>
            Eight divisions, <span className="text-brand-bright">one</span> partner
          </>
        }
        lede="A comprehensive electrical and mechanical solutions provider with proven expertise across the following core divisions."
      />

      <div className="sticky top-[4.5rem] z-30 border-b border-line bg-white/95 backdrop-blur-sm lg:top-20">
        <Container>
          <nav aria-label="Divisions" className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <ul className="flex min-w-max gap-8">
              {divisions.map((d, i) => (
                <li key={d.slug}>
                  <Link
                    href={`#${d.slug}`}
                    className="flex items-center gap-2 whitespace-nowrap py-4 font-display text-xs font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:text-brand"
                  >
                    <span className="text-brand-bright">{String(i + 1).padStart(2, "0")}</span>
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>

      {divisions.map((d, i) => (
        <DivisionRow key={d.slug} division={d} index={i} />
      ))}
    </>
  );
}
