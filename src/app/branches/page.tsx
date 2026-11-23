import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { BranchCard } from "@/components/branches/BranchCard";
import { branches, type Region } from "@/content/branches";

export const metadata: Metadata = {
  title: "Branches",
  description: "Find a HIGH WAY outlet in Abu Dhabi and the Al Dhafra Region — addresses, phone numbers and directions.",
  alternates: { canonical: "/branches" },
};

const regions: Region[] = ["Abu Dhabi", "Al Dhafra Region"];

export default function BranchesPage() {
  return (
    <>
      <PageHero
        eyebrow="Branches & locations"
        title={
          <>
            Find your nearest <span className="text-brand-bright">outlet</span>
          </>
        }
        lede="Seven strategic outlets serving retail and wholesale customers across Abu Dhabi and the Al Dhafra Region."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <nav aria-label="Regions" className="flex flex-wrap gap-x-10 gap-y-2 border-b border-line pb-6 text-sm">
            {regions.map((r) => (
              <a key={r} href={`#${r.toLowerCase().replace(/\s+/g, "-")}`} className="font-display font-bold uppercase tracking-[0.12em] hover:text-brand">
                {r} <span className="text-steel">({branches.filter((b) => b.region === r).length})</span>
              </a>
            ))}
          </nav>

          {regions.map((region) => {
            const list = branches.filter((b) => b.region === region);
            return (
              <div key={region} id={region.toLowerCase().replace(/\s+/g, "-")} className="pt-16">
                <h2 className="display display-md">{region}</h2>
                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {list.map((b, i) => (
                    <BranchCard key={b.slug} branch={b} index={i} />
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
