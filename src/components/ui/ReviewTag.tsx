import { site } from "@/content/site";

/** Marks unverified brochure data. Controlled by `site.showReviewFlags`. */
export function ReviewTag({ note }: { note?: string }) {
  if (!site.showReviewFlags) return null;
  return (
    <span
      title={note ?? "Transcribed from brochure image — verify before publishing"}
      className="ml-2 inline-block bg-brand/10 px-1.5 py-0.5 align-middle font-display text-[0.625rem] font-bold uppercase tracking-[0.14em] text-brand"
    >
      Verify
    </span>
  );
}
