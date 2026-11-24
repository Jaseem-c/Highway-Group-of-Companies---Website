import { site } from "@/content/site";
import type { Locale } from "@/i18n/config";

const copy = {
  en: { label: "Verify", title: "Transcribed from brochure image — verify before publishing" },
  ar: { label: "للمراجعة", title: "منقول من صورة الكتيّب — يُرجى التحقق قبل النشر" },
} as const;

/** Marks unverified brochure data. Controlled by `site.showReviewFlags`. */
export function ReviewTag({ note, lang = "en" }: { note?: string; lang?: Locale }) {
  if (!site.showReviewFlags) return null;
  return (
    <span
      title={note ?? copy[lang].title}
      className="ms-2 inline-block bg-brand/10 px-1.5 py-0.5 align-middle font-display text-[0.625rem] font-bold uppercase tracking-[0.14em] text-brand"
    >
      {copy[lang].label}
    </span>
  );
}
