import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { DivisionIcon } from "@/components/ui/DivisionIcon";
import { divisions } from "@/content/divisions";
import { branches } from "@/content/branches";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A premier UAE conglomerate with a 24-year legacy of excellence, serving retail and wholesale markets through 7 strategic outlets.",
  alternates: { canonical: "/about" },
};

const presence = [
  { value: String(site.facts.legacyYears), label: "Years of legacy" },
  { value: String(site.facts.outlets), label: "Strategic outlets" },
  { value: String(site.facts.divisions), label: "Core divisions" },
];

export default function AboutPage() {
  const regions = [...new Set(branches.map((b) => b.region))];
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            A legacy of <span className="text-brand-bright">excellence</span>
          </>
        }
        lede="Highway Electrical Equipment LLC is a premier UAE conglomerate with a 24-year legacy, specialising in advanced, technology-driven electrical products."
      />

      {/* History */}
      <section className="py-24 sm:py-32">
        <Container className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Our history</p>
            <h2 className="display display-lg mt-5">24 years of excellence</h2>
            <div className="cut-both [--cut:3rem] relative mt-10 aspect-[3/2] overflow-hidden bg-burgundy">
              <Image
                src="/images/24-years.jpg"
                alt="24 years of excellence"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 lg:pt-16">
            <p className="lede !text-ink">
              Highway Electrical Equipment LLC is a premier UAE conglomerate with a 24-year legacy of excellence.
            </p>
            <div className="mt-8 space-y-6 text-[#3d3d3d]">
              <p>
                We specialise in sourcing and distributing advanced, technology-driven electrical products, backed by
                modern after-sales service.
              </p>
              <p>
                Operating 7 strategic outlets, we serve retail and wholesale markets with a premium portfolio that
                includes high-grade cables, advanced light fittings, building materials, paints and specialised accessories.
              </p>
            </div>
            <dl className="mt-12 grid grid-cols-3 border-t border-ink">
              {presence.map((f) => (
                <div key={f.label} className="border-l border-line py-6 pl-5 first:border-l-0 first:pl-0 sm:pl-8">
                  <dd className="display text-[clamp(2.25rem,5vw,4rem)] leading-none text-brand">{f.value}</dd>
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
          <Reveal className="border-b border-white/20 py-20 sm:py-28 lg:border-b-0 lg:border-r lg:pr-16">
            <p className="eyebrow">Our vision</p>
            <h2 className="display display-md mt-5">To be the premium supplier in the GCC</h2>
            <div className="mt-8 space-y-5 text-white/80">
              <p>
                To be the premium supplier of hardware, high-grade cables, advanced light fittings, building materials and
                paints in the GCC.
              </p>
              <p>
                To supply the best range of customer-oriented products, ensuring complete customer satisfaction each time. We
                strive towards excellence in productivity and course of action to be an exemplary market leader.
              </p>
              <p>
                Further, we aim to provide best-quality products which are also affordable, to fulfil the requirements of all
                our customers.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="py-20 sm:py-28 lg:pl-16">
            <p className="eyebrow">Our mission</p>
            <h2 className="display display-md mt-5">The first choice, whenever there is a requirement</h2>
            <div className="mt-8 space-y-5 text-white/80">
              <p>We shall embrace the changing paradigms of the industry in our day-to-day decisions.</p>
              <p>
                We focus on being the first choice for all our clients whenever there is a requirement, and we make sure to
                leave a mark of ourselves on every service that we provide to our valuable customers.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Market presence */}
      <section className="py-24 sm:py-32">
        <Container className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Market presence</p>
            <h2 className="display display-lg mt-5">Retail and wholesale, across the UAE</h2>
            <p className="lede mt-6">
              Seven strategic outlets serve retail and wholesale customers across {regions.join(" and the ")}.
            </p>
            <LinkButton href="/branches" variant="dark" className="mt-10">
              View our branches
            </LinkButton>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-steel">Core competencies</h3>
            <p className="mt-4 max-w-xl text-[#3d3d3d]">
              We are a comprehensive electrical and mechanical solutions provider with proven expertise across eight core
              divisions.
            </p>
            <ul className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2">
              {divisions.map((d) => (
                <li key={d.slug} className="bg-white">
                  <a
                    href={`/products#${d.slug}`}
                    className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-ink hover:text-white focus-visible:outline-offset-[-4px]"
                  >
                    <span className="grid size-12 shrink-0 place-items-center bg-burgundy text-white transition-colors group-hover:bg-brand">
                      <DivisionIcon src={d.icon} className="size-8" />
                    </span>
                    <span className="font-display text-sm font-bold uppercase tracking-[0.05em]">{d.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
