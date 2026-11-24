import Image from "next/image";
import Link from "next/link";
import { featuredProducts } from "@/content/divisions";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";

export function FeaturedProducts({ lang, t }: { lang: Locale; t: Dictionary }) {
  const s = t.home.featured;
  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container>
        <Reveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">{s.eyebrow}</p>
            <h2 className="display display-lg mt-5 max-w-3xl">{s.title}</h2>
          </div>
          <LinkButton href={href(lang, "/products")} variant="outline" className="self-start lg:self-auto">
            {s.cta}
          </LinkButton>
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
          {featuredProducts.map((p, i) => (
            <Reveal as="li" from="scale" delay={(i % 4) * 0.08} key={p.label.en} className="bg-white">
              <Link href={`${href(lang, "/products")}#${p.division}`} className="group block h-full focus-visible:outline-offset-[-4px]">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={p.photo.src}
                    alt={p.photo.alt[lang]}
                    fill
                    sizes="(min-width: 1024px) 22vw, 46vw"
                    className="object-contain p-8 transition-transform duration-700 ease-out-expo group-hover:scale-110 sm:p-12"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-1 origin-left rtl:origin-right scale-x-0 bg-brand transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                  />
                </div>
                <p className="border-t border-line px-5 py-5 font-display text-sm font-bold uppercase tracking-[0.08em] sm:px-7 sm:text-[0.9375rem]">
                  {p.label[lang]}
                </p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
