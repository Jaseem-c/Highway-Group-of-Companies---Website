import { Phone } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { LinkButton, buttonClasses } from "@/components/ui/Button";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";

export function ContactCTA({ lang, t }: { lang: Locale; t: Dictionary }) {
  const s = t.home.cta;
  return (
    <section className="on-dark relative isolate overflow-hidden bg-brand py-24 text-white sm:py-32 [&_.eyebrow::before]:bg-white">
      <div className="absolute inset-y-0 end-0 -z-10 w-2/3 rtl:-scale-x-100 bg-burgundy [clip-path:polygon(28%_0,100%_0,100%_100%,0_100%)]" aria-hidden />
      <div className="hex-bg absolute inset-y-0 end-0 -z-10 w-2/3 rtl:-scale-x-100 opacity-40 [clip-path:polygon(28%_0,100%_0,100%_100%,0_100%)]" aria-hidden />
      <Container>
        <p className="eyebrow">{s.eyebrow}</p>
        <h2 className="display display-xl mt-6 max-w-5xl">{s.title}</h2>
        <p className="lede mt-8 max-w-xl">
          {s.lede}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <LinkButton href={`${href(lang, "/contact")}#enquiry`} variant="white">
            {s.primary}
          </LinkButton>
          <a href={`tel:${site.hq.telHref}`} dir="ltr" className={buttonClasses("outline-light")}>
            <Phone aria-hidden className="size-4" />
            <span>{site.hq.tel}</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
