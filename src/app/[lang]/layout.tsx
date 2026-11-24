import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { site } from "@/content/site";
import { dirOf, isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/ui/Reveal";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = await getDictionary(lang);
  return {
    metadataBase: new URL(site.url),
    title: { default: t.meta.defaultTitle, template: `%s | ${t.meta.siteName}` },
    description: t.meta.description,
    applicationName: t.meta.siteName,
    twitter: { card: "summary_large_image" },
  };
}

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = await getDictionary(lang);

  return (
    <html lang={lang} dir={dirOf(lang)}>
      <head>
        <link rel="preload" href="/fonts/archivo-latin-wdth-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/hanken-grotesk-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {lang === "ar" && (
          <>
            <link rel="preload" href="/fonts/noto-kufi-arabic-arabic-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
            <link rel="preload" href="/fonts/noto-sans-arabic-arabic-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          </>
        )}
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-3 focus:text-white"
        >
          {t.common.skipToContent}
        </a>
        <MotionProvider>
          <TopBar t={t} />
          <Header
            lang={lang}
            t={{
              siteName: t.meta.siteName,
              nav: t.nav,
              common: {
                primaryNav: t.common.primaryNav,
                mobileNav: t.common.mobileNav,
                openMenu: t.common.openMenu,
                closeMenu: t.common.closeMenu,
                switchLabel: t.common.switchLabel,
                switchAria: t.common.switchAria,
              },
            }}
          />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer lang={lang} t={t} />
        </MotionProvider>
      </body>
    </html>
  );
}
