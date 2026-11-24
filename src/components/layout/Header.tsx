"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { navigation, site } from "@/content/site";
import { href, stripLocale, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";

/** Only plain strings cross the server → client boundary (no functions). */
export type HeaderCopy = {
  siteName: string;
  nav: Dictionary["nav"];
  common: Pick<Dictionary["common"], "primaryNav" | "mobileNav" | "openMenu" | "closeMenu" | "switchLabel" | "switchAria">;
};
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ScrollProgress } from "./ScrollProgress";
import { Container } from "@/components/ui/Container";
import { buttonClasses } from "@/components/ui/Button";
import { Logo } from "./Logo";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export function Header({ lang, t }: { lang: Locale; t: HeaderCopy }) {
  const pathname = stripLocale(usePathname());
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on navigation.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  // Lock scroll, close on Escape, move focus into the panel.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_var(--color-line)]" : ""
      }`}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-8 lg:h-20">
        <Logo lang={lang} priority label={`${t.siteName} — ${t.nav.home}`} />

        <nav aria-label={t.common.primaryNav} className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navigation
              .filter((n) => n.href !== "/contact")
              .map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={href(lang, item.href)}
                      aria-current={active ? "page" : undefined}
                      className={`relative block py-2 font-display text-[0.8125rem] font-bold uppercase tracking-[0.12em] transition-colors [font-variation-settings:'wdth'_100] hover:text-brand ${
                        active ? "text-brand" : "text-ink"
                      }`}
                    >
                      {t.nav[item.key]}
                      <span
                        aria-hidden
                        className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rtl:origin-right bg-brand transition-transform duration-500 ease-out-expo ${
                          active ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher lang={lang} label={t.common.switchLabel} ariaLabel={t.common.switchAria} />
          <Link href={href(lang, "/contact")} className={buttonClasses("primary", "min-h-12 max-lg:hidden")}>
            {t.nav.contact}
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="grid size-12 place-items-center text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.common.closeMenu : t.common.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden className="size-7" /> : <Menu aria-hidden className="size-7" />}
          </button>
        </div>
      </Container>

      <ScrollProgress />
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-0 top-[4.5rem] z-40 overflow-y-auto bg-white lg:hidden"
          >
            <nav aria-label={t.common.mobileNav} className="px-5 pb-10 pt-4 sm:px-8">
              <ul className="divide-y divide-line border-t border-line">
                {navigation.map((item, i) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={href(lang, item.href)}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-baseline gap-4 py-5 font-display text-2xl font-extrabold uppercase [font-variation-settings:'wdth'_110] sm:text-3xl ${
                          active ? "text-brand" : "text-ink"
                        }`}
                      >
                        <span className="w-6 text-xs tracking-widest text-steel">{String(i + 1).padStart(2, "0")}</span>
                        {t.nav[item.key]}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-10 flex flex-col gap-3 text-[0.9375rem] rtl:items-start">
                <a href={`tel:${site.hq.telHref}`} dir="ltr" className="flex items-center gap-3 py-1">
                  <Phone aria-hidden className="size-4 text-brand" /> {site.hq.tel}
                </a>
                <a href={`mailto:${site.hq.email}`} dir="ltr" className="flex items-center gap-3 break-all py-1">
                  <Mail aria-hidden className="size-4 text-brand" /> {site.hq.email}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
