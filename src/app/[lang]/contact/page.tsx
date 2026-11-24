import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail, MapPin, Navigation, Phone, Printer } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ReviewTag } from "@/components/ui/ReviewTag";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { branches, mapsUrl } from "@/content/branches";
import { site } from "@/content/site";
import { href, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/i18n/metadata";

const hq = branches[0];

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = await getDictionary(lang);
  return pageMetadata(lang, t, "/contact", t.meta.pages.contact);
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = await getDictionary(lang);
  const h = t.contact.hero;
  return (
    <>
      <PageHero
        eyebrow={h.eyebrow}
        title={
          <>
            {h.titleA}<span className="text-brand-bright">{h.titleB}</span>{h.titleC}
          </>
        }
        lede={h.lede}
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow">{t.contact.official}</p>
            <h2 className="display display-md mt-5">
              <bdi lang="en" dir="ltr">{site.hq.name}</bdi>
            </h2>

            <address className="mt-8 space-y-4 not-italic">
              <p className="flex gap-4">
                <MapPin aria-hidden className="mt-1 size-5 shrink-0 text-brand" />
                <span>
                  {site.hq.street[lang]}
                  <br />
                  {t.common.poBox} <bdi dir="ltr">{site.hq.poBox}</bdi>
                  <br />
                  {site.hq.cityLine[lang]}
                </span>
              </p>
              <p className="flex gap-4">
                <Phone aria-hidden className="mt-1 size-5 shrink-0 text-brand" />
                <a href={`tel:${site.hq.telHref}`} className="link-underline">
                  {t.common.tel}: <bdi dir="ltr">{site.hq.tel}</bdi>
                </a>
              </p>
              <p className="flex gap-4">
                <Printer aria-hidden className="mt-1 size-5 shrink-0 text-brand" />
                <span>
                  {t.common.fax}: <bdi dir="ltr">{site.hq.fax}</bdi>
                </span>
              </p>
              <p className="flex gap-4">
                <Mail aria-hidden className="mt-1 size-5 shrink-0 text-brand" />
                <span className="min-w-0">
                  <a href={`mailto:${site.hq.email}`} dir="ltr" className="link-underline inline-block max-w-full [overflow-wrap:anywhere]">{site.hq.email}</a>
                  <ReviewTag note={t.contact.emailNote} lang={lang} />
                </span>
              </p>
            </address>

            <a
              href={mapsUrl(hq)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 border-b-2 border-brand pb-1 font-display text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:text-brand"
            >
              <Navigation aria-hidden className="size-4" /> {t.common.openInMaps}
              <span className="sr-only">{t.common.opensNewTab}</span>
            </a>

            <div className="mt-14">
              <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-steel">{t.contact.branchContacts}</h3>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {branches.filter((b) => !b.isHeadOffice).map((b) => (
                  <li key={b.slug} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                    <span className="font-semibold"><bdi lang="en" dir="ltr">{b.shortName}</bdi></span>
                    <a href={`tel:${b.phones[0].href}`} dir="ltr" className="link-underline text-[0.9375rem] text-[#3d3d3d]">
                      {b.phones[0].display}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-steel">
                {t.contact.fullAddresses}
                <Link href={href(lang, "/branches")} className="font-semibold text-brand underline underline-offset-4">{t.contact.branchesPage}</Link>.
              </p>
            </div>
          </div>

          <div id="enquiry" className="scroll-mt-32 lg:col-span-7">
            <p className="eyebrow">{t.contact.send}</p>
            <h2 className="display display-md mt-5">{t.contact.help}</h2>
            <p className="mt-4 max-w-xl text-[#3d3d3d]">{t.contact.helpText}</p>
            <div className="mt-10">
              <Suspense fallback={<div className="h-96 animate-pulse bg-paper" aria-hidden />}>
                <EnquiryForm lang={lang} t={t.form} />
              </Suspense>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
