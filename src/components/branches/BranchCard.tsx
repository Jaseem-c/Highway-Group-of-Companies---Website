import Image from "next/image";
import { Mail, MapPin, Navigation, Phone, Printer } from "lucide-react";
import { mapsUrl, type Branch } from "@/content/branches";
import { ReviewTag } from "@/components/ui/ReviewTag";

const row = "flex gap-3 text-[0.9375rem]";
const icon = "mt-1 size-4 shrink-0 text-brand";

export function BranchCard({ branch, index }: { branch: Branch; index: number }) {
  const dark = branch.isHeadOffice;
  return (
    <article
      id={branch.slug}
      className={`cut-br [--cut:2rem] flex h-full flex-col p-7 sm:p-9 ${
        dark ? "on-dark bg-burgundy text-white" : "border border-line bg-white"
      }`}
    >
      <header className="flex items-start justify-between gap-6">
        <div className={`flex h-20 w-32 items-center justify-start ${dark ? "" : ""}`}>
          {branch.logo && (
            <Image
              src={branch.logo}
              alt={`${branch.name} logo`}
              width={200}
              height={120}
              className={`max-h-20 w-auto object-contain object-left ${dark ? "rounded-none bg-white p-2" : ""}`}
            />
          )}
        </div>
        <span className={`font-display text-sm font-bold tracking-[0.2em] ${dark ? "text-white/60" : "text-brand"}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
      </header>

      <h3 className="display mt-6 text-xl leading-[1.08] sm:text-2xl">
        {branch.name}
        <ReviewTag note={branch.review} />
      </h3>
      <p className={`mt-2 text-sm ${dark ? "text-white/65" : "text-steel"}`}>
        {branch.legalForm}
        {branch.isHeadOffice && " · Official contact office"}
      </p>

      <ul className="mt-8 space-y-3">
        <li className={row}>
          <MapPin aria-hidden className={icon} />
          <address className="not-italic">
            {branch.address.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
            {branch.poBox && <span className="block">P.O. Box {branch.poBox}</span>}
          </address>
        </li>
        {branch.phones.map((p) => (
          <li key={p.href} className={row}>
            <Phone aria-hidden className={icon} />
            <a href={`tel:${p.href}`} className="link-underline">
              {p.label}: {p.display}
            </a>
          </li>
        ))}
        {branch.fax && (
          <li className={row}>
            <Printer aria-hidden className={icon} />
            <span>Fax: {branch.fax}</span>
          </li>
        )}
        <li className={row}>
          <Mail aria-hidden className={icon} />
          <a href={`mailto:${branch.email}`} className="link-underline break-all">
            {branch.email}
          </a>
        </li>
      </ul>

      <div className="mt-auto pt-8">
        <a
          href={mapsUrl(branch)}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 border-b-2 border-brand pb-1 font-display text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
            dark ? "hover:text-white/70" : "hover:text-brand"
          }`}
        >
          <Navigation aria-hidden className="size-4" />
          Open in Google Maps
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </article>
  );
}
