import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { HeroMedia } from "./HeroMedia";

const figures = [
  { value: String(site.facts.legacyYears), label: "Years of legacy" },
  { value: String(site.facts.outlets), label: "Strategic outlets" },
  { value: String(site.facts.divisions), label: "Core divisions" },
];

export function Hero() {
  return (
    <section className="on-dark relative isolate flex min-h-[calc(100svh-7.5rem)] flex-col overflow-hidden bg-ink text-white">
      <HeroMedia />
      {/* Brand tint: black → burgundy, keeps text legible over the photograph */}
      <div
        className="absolute inset-0 -z-0 bg-[linear-gradient(95deg,rgb(17_17_17/0.96)_0%,rgb(17_17_17/0.84)_34%,rgb(74_13_18/0.62)_64%,rgb(74_13_18/0.28)_100%)]"
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-0 z-0 hidden h-[46%] w-[26%] bg-brand/90 mix-blend-multiply [clip-path:polygon(100%_0,100%_100%,0_100%)] md:block"
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-0 z-0 hidden h-[30%] w-[17%] bg-brand [clip-path:polygon(100%_0,100%_100%,0_100%)] md:block"
        aria-hidden
      />

      <Container className="relative z-10 flex flex-1 items-center py-20 lg:py-28">
        <div className="max-w-none">
          <p className="eyebrow rise">Highway Electrical Equipment L.L.C. · Abu Dhabi, UAE</p>
          <h1 className="display display-xl mt-7">
            <span className="rise block" style={{ "--d": "0.1s" } as React.CSSProperties}>
              {site.headline[0]}
            </span>
            <span className="rise block text-white" style={{ "--d": "0.22s" } as React.CSSProperties}>
              {site.headline[1]}
            </span>
          </h1>
          <p className="lede rise mt-8 max-w-xl" style={{ "--d": "0.4s" } as React.CSSProperties}>
            A premier UAE conglomerate supplying advanced electrical, lighting, hardware, plumbing and building-materials
            solutions to retail and wholesale markets.
          </p>
          <div className="rise mt-10 flex flex-col gap-4 sm:flex-row" style={{ "--d": "0.55s" } as React.CSSProperties}>
            <LinkButton href="/products">Explore our divisions</LinkButton>
            <LinkButton href="/contact" variant="outline-light">
              Enquire now
            </LinkButton>
          </div>
        </div>
      </Container>

      <div className="relative z-10 border-t border-white/15 bg-ink/70">
        <Container>
          <dl className="grid grid-cols-3 divide-x divide-white/15">
            {figures.map((f) => (
              <div key={f.label} className="px-3 py-5 first:pl-0 sm:px-8 sm:py-7 sm:first:pl-0">
                <dd className="display text-[clamp(1.75rem,4vw,3.25rem)] leading-none text-white">{f.value}</dd>
                <dt className="mt-2 text-[0.6875rem] uppercase tracking-[0.16em] text-white/60 sm:text-xs">{f.label}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}
