import { Phone } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { LinkButton, buttonClasses } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-brand py-24 text-white sm:py-32 [&_.eyebrow::before]:bg-white">
      <div className="absolute inset-y-0 right-0 -z-10 w-2/3 bg-burgundy [clip-path:polygon(28%_0,100%_0,100%_100%,0_100%)]" aria-hidden />
      <div className="hex-bg absolute inset-y-0 right-0 -z-10 w-2/3 opacity-40 [clip-path:polygon(28%_0,100%_0,100%_100%,0_100%)]" aria-hidden />
      <Container>
        <p className="eyebrow">Start a conversation</p>
        <h2 className="display display-xl mt-6 max-w-5xl">Let’s power your next project</h2>
        <p className="lede mt-8 max-w-xl">
          Tell us what you need — our team will point you to the right division and the nearest outlet.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <LinkButton href="/contact#enquiry" variant="white">
            Send an enquiry
          </LinkButton>
          <a href={`tel:${site.hq.telHref}`} className={buttonClasses("outline-light")}>
            <Phone aria-hidden className="size-4" />
            <span>{site.hq.tel}</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
