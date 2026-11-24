import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";

export function Introduction({ lang, t }: { lang: Locale; t: Dictionary }) {
  const i = t.home.intro;
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow">{i.eyebrow}</p>
            <h2 className="display display-lg mt-5">
              {i.titleA}<span className="text-brand">{i.titleB}</span>{i.titleC}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 max-w-xl space-y-5 text-[#3d3d3d]">
              <p>
                {i.p1}
              </p>
              <p>
                {i.p2}
              </p>
            </div>
            <LinkButton href={href(lang, "/about")} variant="dark" className="mt-10">
              {i.cta}
            </LinkButton>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-6">
          <div className="relative">
            <div className="cut-both [--cut:3.5rem] relative aspect-[3/2] overflow-hidden bg-burgundy">
              <Image
                src="/images/24-years.jpg"
                alt={i.imgAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 start-0 h-1.5 w-1/3 bg-brand" aria-hidden />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
