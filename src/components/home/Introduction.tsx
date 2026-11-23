import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Introduction() {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow">About the group</p>
            <h2 className="display display-lg mt-5">
              A premier UAE conglomerate with a <span className="text-brand">24-year</span> legacy of excellence
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 max-w-xl space-y-5 text-[#3d3d3d]">
              <p>
                Highway Electrical Equipment LLC specialises in sourcing and distributing advanced, technology-driven
                electrical products, backed by modern after-sales service.
              </p>
              <p>
                Operating 7 strategic outlets, we serve retail and wholesale markets with a premium portfolio that includes
                high-grade cables, advanced light fittings, building materials, paints and specialised accessories.
              </p>
            </div>
            <LinkButton href="/about" variant="dark" className="mt-10">
              Our story
            </LinkButton>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-6">
          <div className="relative">
            <div className="cut-both [--cut:3.5rem] relative aspect-[3/2] overflow-hidden bg-burgundy">
              <Image
                src="/images/24-years.jpg"
                alt="24 years of excellence"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-0 h-1.5 w-1/3 bg-brand" aria-hidden />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
