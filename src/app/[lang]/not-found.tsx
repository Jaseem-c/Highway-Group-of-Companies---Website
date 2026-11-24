"use client";

import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { href } from "@/i18n/config";
import { en } from "@/i18n/en";
import { ar } from "@/i18n/ar";
import { useLocale } from "@/i18n/use-locale";

export default function NotFound() {
  const lang = useLocale();
  const t = (lang === "ar" ? ar : en).notFound;
  return (
    <section className="py-28 sm:py-40">
      <Container>
        <p className="eyebrow">{t.eyebrow}</p>
        <h1 className="display display-xl mt-6">{t.title}</h1>
        <p className="lede mt-6 max-w-xl">{t.text}</p>
        <LinkButton href={href(lang, "/")} className="mt-10">{t.cta}</LinkButton>
      </Container>
    </section>
  );
}
