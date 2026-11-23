import { brands } from "@/content/brands";
import { site, strengths } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const figures = [
  { value: site.facts.legacyYears, suffix: "", label: "Years of legacy" },
  { value: site.facts.outlets, suffix: "", label: "Strategic outlets" },
  { value: site.facts.divisions, suffix: "", label: "Core divisions" },
  { value: brands.length, suffix: "", label: "Brands in our portfolio" },
];

export function Strengths() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container>
        <Reveal>
          <p className="eyebrow">Experience & strengths</p>
          <h2 className="display display-lg mt-5 max-w-4xl">Built on legacy. Driven by service.</h2>
        </Reveal>

        <dl className="mt-16 grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {figures.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.07} className="border-l-2 border-brand pl-6">
              <dd className="display text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.9] text-ink">{f.value}</dd>
              <dt className="mt-3 text-sm uppercase tracking-[0.14em] text-steel">{f.label}</dt>
            </Reveal>
          ))}
        </dl>

        <ul className="mt-20 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((s) => (
            <li key={s.title} className="border-t border-ink pt-6">
              <h3 className="font-display text-lg font-bold uppercase tracking-[0.04em] [font-variation-settings:'wdth'_108]">
                {s.title}
              </h3>
              <p className="mt-3 text-[#4a4a4a]">{s.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
