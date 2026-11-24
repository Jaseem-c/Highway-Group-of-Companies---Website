"use client";

import { Container } from "@/components/ui/Container";
import { buttonClasses } from "@/components/ui/Button";
import { en } from "@/i18n/en";
import { ar } from "@/i18n/ar";
import { useLocale } from "@/i18n/use-locale";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const t = (useLocale() === "ar" ? ar : en).error;
  return (
    <section className="py-28 sm:py-40">
      <Container>
        <p className="eyebrow">{t.eyebrow}</p>
        <h1 className="display display-xl mt-6">{t.title}</h1>
        <p className="lede mt-6 max-w-xl">{t.text}</p>
        <button type="button" onClick={reset} className={buttonClasses("primary", "mt-10")}>{t.cta}</button>
      </Container>
    </section>
  );
}
