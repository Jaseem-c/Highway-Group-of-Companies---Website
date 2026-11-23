import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { divisions } from "@/content/divisions";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { DivisionIcon } from "@/components/ui/DivisionIcon";

export function DivisionsSection() {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-burgundy py-24 text-white sm:py-32">
      <div className="hex-bg absolute inset-0 -z-10 opacity-35" aria-hidden />
      <Container>
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">Core competencies</p>
            <h2 className="display display-lg mt-5">Eight divisions. One complete solutions provider.</h2>
          </div>
          <p className="lede lg:col-span-5">
            A comprehensive electrical and mechanical solutions provider with proven expertise across the following core
            divisions.
          </p>
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 border-l border-t border-white/20 lg:mt-16 lg:grid-cols-4">
          {divisions.map((d, i) => (
            <li key={d.slug} className="shadow-[inset_-1px_-1px_0_0_rgb(255_255_255/0.2)]">
              <Link
                href={`/products#${d.slug}`}
                className="group relative flex h-full min-h-[14rem] flex-col justify-between gap-8 p-5 transition-colors duration-500 hover:bg-brand focus-visible:bg-brand focus-visible:outline-offset-[-4px] sm:min-h-[18rem] sm:gap-12 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-sm font-bold tracking-[0.2em] text-white/50 transition-colors group-hover:text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="size-6 -translate-x-1 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                  />
                </div>
                <div>
                  <DivisionIcon src={d.icon} className="size-11 text-white/90 sm:size-16" />
                  <h3 className="display mt-5 text-[0.9375rem] leading-[1.1] sm:mt-6 sm:text-2xl">{d.name}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
