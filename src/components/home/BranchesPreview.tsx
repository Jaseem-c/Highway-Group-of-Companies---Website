import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { branches } from "@/content/branches";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";

export function BranchesPreview({ lang, t }: { lang: Locale; t: Dictionary }) {
  const s = t.home.branches;
  return (
    <section className="on-dark bg-ink py-24 text-white sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-12">
        <Reveal from="start" className="lg:col-span-4">
          <p className="eyebrow">{s.eyebrow}</p>
          <h2 className="display display-lg mt-5">{s.title}</h2>
          <p className="lede mt-6">
            {s.lede}
          </p>
          <LinkButton href={href(lang, "/branches")} className="mt-10">
            {s.cta}
          </LinkButton>
        </Reveal>

        <ol className="border-t border-white/15 lg:col-span-8">
          {branches.map((b, i) => (
            <Reveal as="li" from="end" delay={i * 0.07} key={b.slug} className="border-b border-white/15">
              <Link
                href={`${href(lang, "/branches")}#${b.slug}`}
                className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 px-1 py-5 transition-colors hover:bg-white/5 sm:grid-cols-[3.5rem_1fr_14rem_auto] sm:py-6"
              >
                <span className="font-display text-sm font-bold tracking-[0.2em] text-brand">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-lg font-bold uppercase leading-tight [font-variation-settings:'wdth'_105] sm:text-xl">
                  {b.area[lang]}
                </span>
                <span dir="ltr" className="col-start-2 text-sm text-white/60 rtl:text-right sm:col-start-auto">{b.phones[0].display}</span>
                <ArrowUpRight aria-hidden className="rtl:-scale-x-100 row-start-1 col-start-3 size-5 text-white/40 transition-colors group-hover:text-brand sm:col-start-4 sm:row-start-auto" />
              </Link>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
