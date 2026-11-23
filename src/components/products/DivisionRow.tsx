import Image from "next/image";
import type { Division } from "@/content/divisions";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DivisionIcon } from "@/components/ui/DivisionIcon";

function Visual({ division, index }: { division: Division; index: number }) {
  if (division.photos?.length) {
    return (
      <div className="cut-br [--cut:2.5rem] grid grid-cols-2 gap-px bg-line">
        {division.photos.map((p) => (
          <div key={p.src} className="relative aspect-square bg-white">
            <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 24vw, 46vw" className="object-contain p-8 sm:p-12" />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="on-dark cut-br [--cut:2.5rem] relative isolate grid aspect-[4/3] place-items-center overflow-hidden bg-burgundy text-white lg:aspect-[5/4]">
      <div className="hex-bg absolute inset-0 -z-10 opacity-50" aria-hidden />
      <DivisionIcon src={division.icon} className="size-32 sm:size-44" />
      <span className="absolute left-6 top-5 font-display text-sm font-bold tracking-[0.2em] text-white/60">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

export function DivisionRow({ division, index }: { division: Division; index: number }) {
  const flip = index % 2 === 1;
  return (
    <section id={division.slug} className={`py-20 sm:py-28 ${index % 2 === 1 ? "bg-paper" : "bg-white"}`}>
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
          <Visual division={division} index={index} />
        </Reveal>
        <Reveal delay={0.1} className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
          <div className="flex items-center gap-4">
            <span className="font-display text-sm font-bold tracking-[0.2em] text-brand">
              {String(index + 1).padStart(2, "0")} / 08
            </span>
            <span className="h-px flex-1 bg-line" aria-hidden />
          </div>
          <h2 className="display display-md mt-6">{division.name}</h2>
          <p className="lede mt-5 max-w-xl">{division.summary}</p>

          {division.items && (
            <div className="mt-8">
              <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-steel">Product range</h3>
              <ul className="mt-4 flex max-w-2xl flex-wrap gap-y-2 text-[0.9375rem] text-[#333]">
                {division.items.map((item) => (
                  <li
                    key={item}
                    className="relative pr-4 after:absolute after:right-1.5 after:top-1/2 after:h-3.5 after:w-px after:-translate-y-1/2 after:bg-brand"
                  >
                    {item}
                  </li>
                ))}
                <li>etc.</li>
              </ul>
            </div>
          )}

          <LinkButton href={`/contact?division=${division.slug}#enquiry`} className="mt-10">
            Product enquiry
          </LinkButton>
        </Reveal>
      </Container>
    </section>
  );
}
