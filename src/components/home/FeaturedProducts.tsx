import Image from "next/image";
import Link from "next/link";
import { featuredProducts } from "@/content/divisions";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedProducts() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container>
        <Reveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">Featured categories</p>
            <h2 className="display display-lg mt-5 max-w-3xl">From cables to controls to plumbing</h2>
          </div>
          <LinkButton href="/products" variant="outline" className="self-start lg:self-auto">
            All products & solutions
          </LinkButton>
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
          {featuredProducts.map((p) => (
            <li key={p.label} className="bg-white">
              <Link href={`/products#${p.division}`} className="group block h-full focus-visible:outline-offset-[-4px]">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={p.photo.src}
                    alt={p.photo.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, 46vw"
                    className="object-contain p-8 transition-transform duration-700 ease-out-expo group-hover:scale-110 sm:p-12"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                  />
                </div>
                <p className="border-t border-line px-5 py-5 font-display text-sm font-bold uppercase tracking-[0.08em] sm:px-7 sm:text-[0.9375rem]">
                  {p.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
