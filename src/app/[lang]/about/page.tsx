import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { DivisionIcon } from "@/components/ui/DivisionIcon";
import { divisions } from "@/content/divisions";
import { site } from "@/content/site";
import { href, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/i18n/metadata";
import Link from "next/link";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = await getDictionary(lang);
  return pageMetadata(lang, t, "/about", t.meta.pages.about);
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = await getDictionary(lang);
  const a = t.about;
  const presence = [
    { value: site.facts.legacyYears, label: t.common.years },
    { value: site.facts.outlets, label: t.common.outlets },
    { value: site.facts.divisions, label: t.common.divisions },
  ];
  return (
    <>
      <PageHero
        eyebrow={a.hero.eyebrow}
        title={
          <>
            {a.hero.titleA}<span className="text-brand-bright">{a.hero.titleB}</span>
          </>
        }
        lede={a.hero.lede}
      />

      {/* History */}
      <section className="py-24 sm:py-32">
        <Container className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal from="start" className="lg:col-span-5">
            <p className="eyebrow">{a.history.eyebrow}</p>
            <h2 className="display display-lg mt-5">{a.history.title}</h2>
            <div className="cut-both [--cut:3rem] relative mt-10 aspect-[3/2] overflow-hidden bg-burgundy">
              <Image
                src="/images/24-years.jpg"
                alt={t.home.intro.imgAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal from="end" delay={0.1} className="lg:col-span-7 lg:pt-16">
            <p className="lede !text-ink">{a.history.lede}</p>
            <div className="mt-8 space-y-6 text-[#3d3d3d]">
              <p>{a.history.p1}</p>
              <p>{a.history.p2}</p>
            </div>
            <dl className="mt-12 grid grid-cols-3 border-t border-ink">
              {presence.map((f) => (
                <div key={f.label} className="border-s border-line py-6 ps-5 first:border-s-0 first:ps-0 sm:ps-8">
                  <dd className="display text-[clamp(2.25rem,5vw,4rem)] leading-none text-brand"><CountUp value={f.value} /></dd>
                  <dt className="mt-2 text-xs uppercase tracking-[0.14em] text-steel">{f.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="on-dark relative isolate overflow-hidden bg-burgundy text-white">
        <div className="hex-bg absolute inset-0 -z-10 opacity-35" aria-hidden />
        <Container className="grid lg:grid-cols-2">
          <Reveal from="start" className="border-b border-white/20 py-20 sm:py-28 lg:border-b-0 lg:border-e lg:pe-16">
            <p className="eyebrow">{a.vision.eyebrow}</p>
            <h2 className="display display-md mt-5">{a.vision.title}</h2>
            <div className="mt-8 space-y-5 text-white/80">
              <p>{a.vision.p1}</p>
              <p>{a.vision.p2}</p>
              <p>{a.vision.p3}</p>
            </div>
          </Reveal>
          <Reveal from="end" delay={0.1} className="py-20 sm:py-28 lg:ps-16">
            <p className="eyebrow">{a.mission.eyebrow}</p>
            <h2 className="display display-md mt-5">{a.mission.title}</h2>
            <div className="mt-8 space-y-5 text-white/80">
              <p>{a.mission.p1}</p>
              <p>{a.mission.p2}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Market presence */}
      <section className="py-24 sm:py-32">
        <Container className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">{a.presence.eyebrow}</p>
            <h2 className="display display-lg mt-5">{a.presence.title}</h2>
            <p className="lede mt-6">{a.presence.lede}</p>
            <LinkButton href={href(lang, "/branches")} variant="dark" className="mt-10">
              {a.presence.cta}
            </LinkButton>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-steel">{a.presence.competencies}</h3>
            <p className="mt-4 max-w-xl text-[#3d3d3d]">{a.presence.competenciesText}</p>
            <ul className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2">
              {divisions.map((d) => (
                <li key={d.slug} className="bg-white">
                  <Link
                    href={`${href(lang, "/products")}#${d.slug}`}
                    className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-ink hover:text-white focus-visible:outline-offset-[-4px]"
                  >
                    <span className="grid size-12 shrink-0 place-items-center bg-burgundy text-white transition-colors group-hover:bg-brand">
                      <DivisionIcon src={d.icon} className="size-8" />
                    </span>
                    <span className="font-display text-sm font-bold uppercase tracking-[0.05em]">{d.name[lang]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
