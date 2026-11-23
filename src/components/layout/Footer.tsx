import Link from "next/link";
import { navigation, site } from "@/content/site";
import { divisions } from "@/content/divisions";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

const label = "font-display text-xs font-bold uppercase tracking-[0.2em] text-white/50";
const link = "text-white/80 transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="on-dark relative isolate overflow-hidden bg-ink text-white">
      <div className="hex-bg absolute inset-0 -z-10 opacity-[0.18]" aria-hidden />
      <div className="h-1.5 w-full bg-brand" aria-hidden />
      <Container className="grid gap-14 pb-14 pt-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="cut-br inline-block bg-white p-5 [--cut:1rem]">
            <Logo className="h-11" />
          </div>
          <p className="mt-8 max-w-sm text-white/70">{site.officialTagline}</p>
          <p className="mt-6 max-w-sm text-sm text-white/50">
            {site.legalName} — a UAE electrical and mechanical solutions group with a 24-year legacy.
          </p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className={label}>Explore</h2>
          <ul className="mt-6 space-y-3">
            {navigation.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={link}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className={label}>Divisions</h2>
          <ul className="mt-6 space-y-3">
            {divisions.map((d) => (
              <li key={d.slug}>
                <Link href={`/products#${d.slug}`} className={link}>
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <address className="not-italic lg:col-span-3">
          <h2 className={label}>Contact</h2>
          <div className="mt-6 space-y-3 text-white/80">
            <p className="font-semibold text-white">{site.hq.name}</p>
            <p>
              {site.hq.street}
              <br />
              P.O. Box {site.hq.poBox}
              <br />
              {site.hq.city} – UAE
            </p>
            <p>
              <a href={`tel:${site.hq.telHref}`} className={link}>
                Tel {site.hq.tel}
              </a>
              <br />
              <span className="text-white/60">Fax {site.hq.fax}</span>
            </p>
            <p>
              <a href={`mailto:${site.hq.email}`} className={`${link} break-all`}>
                {site.hq.email}
              </a>
            </p>
          </div>
        </address>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-[0.8125rem] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>Third-party brand names and logos belong to their respective owners.</p>
        </Container>
      </div>
    </footer>
  );
}
