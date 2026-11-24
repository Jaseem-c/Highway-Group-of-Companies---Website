import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";
import type { Dictionary } from "@/i18n/en";
import { Container } from "@/components/ui/Container";

export function TopBar({ t }: { t: Dictionary }) {
  return (
    <div className="hidden bg-ink text-white lg:block">
      <Container className="flex h-10 items-center justify-between text-[0.8125rem] text-white/75">
        <p className="flex items-center gap-2">
          <MapPin aria-hidden className="size-3.5 text-brand" />
          {t.topbar.location}
        </p>
        <div className="flex items-center gap-8">
          <a href={`tel:${site.hq.telHref}`} dir="ltr" className="flex items-center gap-2 transition-colors hover:text-white">
            <Phone aria-hidden className="size-3.5 text-brand" />
            {site.hq.tel}
          </a>
          <a href={`mailto:${site.hq.email}`} dir="ltr" className="flex items-center gap-2 transition-colors hover:text-white">
            <Mail aria-hidden className="size-3.5 text-brand" />
            {site.hq.email}
          </a>
        </div>
      </Container>
    </div>
  );
}
