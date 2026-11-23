import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, Navigation, Phone, Printer } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ReviewTag } from "@/components/ui/ReviewTag";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { branches, mapsUrl } from "@/content/branches";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact HIGH WAY Group of Company — head office details, branch contacts and an enquiry form for general and business enquiries.",
  alternates: { canonical: "/contact" },
};

const hq = branches[0];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            Let’s <span className="text-brand-bright">talk</span> business
          </>
        }
        lede="Whether it is a quick question or a full project requirement, our team is ready to help."
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow">Official contact</p>
            <h2 className="display display-md mt-5">{site.hq.name}</h2>

            <address className="mt-8 space-y-4 not-italic">
              <p className="flex gap-4">
                <MapPin aria-hidden className="mt-1 size-5 shrink-0 text-brand" />
                <span>
                  {site.hq.street}
                  <br />
                  P.O. Box {site.hq.poBox}
                  <br />
                  {site.hq.city} – UAE
                </span>
              </p>
              <p className="flex gap-4">
                <Phone aria-hidden className="mt-1 size-5 shrink-0 text-brand" />
                <a href={`tel:${site.hq.telHref}`} className="link-underline">Tel: {site.hq.tel}</a>
              </p>
              <p className="flex gap-4">
                <Printer aria-hidden className="mt-1 size-5 shrink-0 text-brand" />
                <span>Fax: {site.hq.fax}</span>
              </p>
              <p className="flex gap-4">
                <Mail aria-hidden className="mt-1 size-5 shrink-0 text-brand" />
                <a href={`mailto:${site.hq.email}`} className="link-underline break-all">{site.hq.email}</a>
                <ReviewTag note="Brochure lists a Gmail address — replace with a company-domain address if available." />
              </p>
            </address>

            <a
              href={mapsUrl(hq)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 border-b-2 border-brand pb-1 font-display text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:text-brand"
            >
              <Navigation aria-hidden className="size-4" /> Open in Google Maps
              <span className="sr-only"> (opens in a new tab)</span>
            </a>

            <div className="mt-14">
              <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-steel">Branch contacts</h3>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {branches.filter((b) => !b.isHeadOffice).map((b) => (
                  <li key={b.slug} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                    <span className="font-semibold">{b.shortName}</span>
                    <a href={`tel:${b.phones[0].href}`} className="link-underline text-[0.9375rem] text-[#3d3d3d]">
                      {b.phones[0].display}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-steel">
                Full addresses are on the <a href="/branches" className="font-semibold text-brand underline underline-offset-4">branches page</a>.
              </p>
            </div>
          </div>

          <div id="enquiry" className="scroll-mt-32 lg:col-span-7">
            <p className="eyebrow">Send an enquiry</p>
            <h2 className="display display-md mt-5">How can we help?</h2>
            <p className="mt-4 max-w-xl text-[#3d3d3d]">
              Choose general enquiry for questions, or business enquiry for product requirements and quotations.
            </p>
            <div className="mt-10">
              <Suspense fallback={<div className="h-96 animate-pulse bg-paper" aria-hidden />}>
                <EnquiryForm />
              </Suspense>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
