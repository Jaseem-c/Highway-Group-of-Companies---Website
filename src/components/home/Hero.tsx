import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";
import { CountUp } from "@/components/ui/CountUp";
import { HeroMedia } from "./HeroMedia";

export function Hero({ lang, t }: { lang: Locale; t: Dictionary }) {
  const figures = [
    { value: site.facts.legacyYears, label: t.common.years },
    { value: site.facts.outlets, label: t.common.outlets },
    { value: site.facts.divisions, label: t.common.divisions },
  ];
  return (
    <section className="on-dark relative isolate flex min-h-[calc(100svh-7.5rem)] flex-col overflow-hidden bg-ink text-white">
      <HeroMedia />
      {/* Brand tint: black → burgundy, keeps text legible over the photograph */}
      <div
        className="absolute inset-0 -z-0 rtl:-scale-x-100 bg-[linear-gradient(95deg,rgb(17_17_17/0.96)_0%,rgb(17_17_17/0.84)_34%,rgb(74_13_18/0.62)_64%,rgb(74_13_18/0.28)_100%)]"
        aria-hidden
      />
      <div
        className="absolute bottom-0 end-0 z-0 hidden rtl:-scale-x-100 h-[46%] w-[26%] bg-brand/90 mix-blend-multiply [clip-path:polygon(100%_0,100%_100%,0_100%)] md:block"
        aria-hidden
      />
      <div
        className="absolute bottom-0 end-0 z-0 hidden rtl:-scale-x-100 h-[30%] w-[17%] bg-brand [clip-path:polygon(100%_0,100%_100%,0_100%)] md:block"
        aria-hidden
      />

      <Container className="relative z-10 flex flex-1 items-center py-20 lg:py-28">
        <div className="max-w-none">
          <p className="eyebrow rise">{t.home.hero.eyebrow}</p>
          <h1 className="display display-xl mt-7">
            <span className="rise block" style={{ "--d": "0.1s" } as React.CSSProperties}>
              {t.home.hero.line1}
            </span>
            <span className="rise block text-white" style={{ "--d": "0.22s" } as React.CSSProperties}>
              {t.home.hero.line2}
            </span>
          </h1>
          <p className="lede rise mt-8 max-w-xl" style={{ "--d": "0.4s" } as React.CSSProperties}>
            {t.home.hero.lede}
          </p>
          <div className="rise mt-10 flex flex-col gap-4 sm:flex-row" style={{ "--d": "0.55s" } as React.CSSProperties}>
            <LinkButton href={href(lang, "/products")}>{t.home.hero.ctaPrimary}</LinkButton>
            <LinkButton href={href(lang, "/contact")} variant="outline-light">
              {t.home.hero.ctaSecondary}
            </LinkButton>
          </div>
        </div>
      </Container>

      <div className="relative z-10 border-t border-white/15 bg-ink/70">
        <Container>
          <dl className="grid grid-cols-3 divide-x divide-white/15">
            {figures.map((f) => (
              <div key={f.label} className="px-3 py-5 first:ps-0 sm:px-8 sm:py-7 sm:first:ps-0">
                <dd className="display text-[clamp(1.75rem,4vw,3.25rem)] leading-none text-white"><CountUp value={f.value} /></dd>
                <dt className="mt-2 text-[0.6875rem] uppercase tracking-[0.16em] text-white/60 sm:text-xs">{f.label}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}
