import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { branches } from "@/content/branches";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function BranchesPreview() {
  return (
    <section className="on-dark bg-ink py-24 text-white sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">Branches & locations</p>
          <h2 className="display display-lg mt-5">Seven outlets across Abu Dhabi</h2>
          <p className="lede mt-6">
            Serving retail and wholesale customers from Abu Dhabi city to the Al Dhafra Region.
          </p>
          <LinkButton href="/branches" className="mt-10">
            Find a branch
          </LinkButton>
        </Reveal>

        <ol className="border-t border-white/15 lg:col-span-8">
          {branches.map((b, i) => (
            <li key={b.slug} className="border-b border-white/15">
              <Link
                href={`/branches#${b.slug}`}
                className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 px-1 py-5 transition-colors hover:bg-white/5 sm:grid-cols-[3.5rem_1fr_14rem_auto] sm:py-6"
              >
                <span className="font-display text-sm font-bold tracking-[0.2em] text-brand">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-lg font-bold uppercase leading-tight [font-variation-settings:'wdth'_105] sm:text-xl">
                  {b.shortName}
                </span>
                <span className="col-start-2 text-sm text-white/60 sm:col-start-auto">{b.area}</span>
                <ArrowUpRight aria-hidden className="row-start-1 col-start-3 size-5 text-white/40 transition-colors group-hover:text-brand sm:col-start-4 sm:row-start-auto" />
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
