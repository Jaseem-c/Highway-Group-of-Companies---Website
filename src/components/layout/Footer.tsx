import Link from "next/link";
import { navigation, site } from "@/content/site";
import { divisions } from "@/content/divisions";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

const label = "font-display text-xs font-bold uppercase tracking-[0.2em] text-white/50";
const link = "text-white/80 transition-colors hover:text-white";

export function Footer({ lang, t }: { lang: Locale; t: Dictionary }) {
  return (
    <footer className="on-dark relative isolate overflow-hidden bg-ink text-white">
      <div className="hex-bg absolute inset-0 -z-10 opacity-[0.18]" aria-hidden />
      <div className="h-1.5 w-full bg-brand" aria-hidden />
      <Container className="grid gap-14 pb-14 pt-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="cut-br inline-block bg-white p-5 [--cut:1rem]">
            <Logo lang={lang} className="h-11" label={`${t.meta.siteName} — ${t.nav.home}`} />
          </div>
          <p className="mt-8 max-w-sm text-white/70">{t.footer.tagline}</p>
          <p className="mt-6 max-w-sm text-sm text-white/50">
            {lang === "ar" ? (
              <>
                <bdi>{site.legalName}</bdi> — {t.footer.about}
              </>
            ) : (
              <>
                {site.legalName} — a UAE electrical and mechanical solutions group with a 24-year legacy.
              </>
            )}
          </p>
        </div>

        <nav aria-label={t.common.footerNav} className="lg:col-span-2">
          <h2 className={label}>{t.footer.explore}</h2>
          <ul className="mt-6 space-y-3">
            {navigation.map((n) => (
              <li key={n.href}>
                <Link href={href(lang, n.href)} className={link}>
                  {t.nav[n.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className={label}>{t.footer.divisions}</h2>
          <ul className="mt-6 space-y-3">
            {divisions.map((d) => (
              <li key={d.slug}>
                <Link href={`${href(lang, "/products")}#${d.slug}`} className={link}>
                  {d.name[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <address className="not-italic lg:col-span-3">
          <h2 className={label}>{t.footer.contact}</h2>
          <div className="mt-6 space-y-3 text-white/80">
            <p className="font-semibold text-white" dir="ltr" lang="en">
              <span className="block rtl:text-right">{site.hq.name}</span>
            </p>
            <p>
              {site.hq.street[lang]}
              <br />
              {t.common.poBox} <bdi>{site.hq.poBox}</bdi>
              <br />
              {site.hq.cityLine[lang]}
            </p>
            <p>
              <a href={`tel:${site.hq.telHref}`} className={link}>
                {t.common.tel} <bdi dir="ltr">{site.hq.tel}</bdi>
              </a>
              <br />
              <span className="text-white/60">
                {t.common.fax} <bdi dir="ltr">{site.hq.fax}</bdi>
              </span>
            </p>
            <p>
              <a href={`mailto:${site.hq.email}`} dir="ltr" className={`${link} inline-block break-all`}>
                {site.hq.email}
              </a>
            </p>
          </div>
        </address>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-[0.8125rem] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.rights}</p>
          <p>{t.footer.trademarks}</p>
        </Container>
      </div>
    </footer>
  );
}
