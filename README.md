# HIGH WAY Group of Company — website

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Lucide · Motion

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Structure
- `src/content/` — all company data (site facts, divisions, branches, brands). Edit here, not in components.
- `src/components/{layout,home,products,brands,branches,contact,ui}` — reusable pieces.
- `src/app/*` — routes: `/`, `/about`, `/products`, `/brands`, `/branches`, `/contact`, plus `/api/enquiry`.
- `public/` — logo, brand logos, product photos, brochure icons (`/icons` are white-on-transparent masks tinted in CSS).

## Languages (English / Arabic)
The site is bilingual: `/en/…` (LTR) and `/ar/…` (RTL). Visiting `/` redirects to the visitor's saved choice (`NEXT_LOCALE` cookie), then their browser language, then English (`src/proxy.ts`).

- UI copy: `src/i18n/en.ts` (typed source of truth) and `src/i18n/ar.ts` (must satisfy the same type — a missing key fails `tsc`).
- Content with translations (`{ en, ar }`): `src/content/divisions.ts`, `src/content/branches.ts`, `src/content/site.ts`.
- The language button is `src/components/layout/LanguageSwitcher.tsx` (header, desktop and mobile).
- RTL: layouts use logical Tailwind utilities (`ms-/me-/ps-/pe-/start-/end-`), `rtl:` variants for arrows, gradients and clip-paths, and `[dir="rtl"]` rules in `globals.css`. Phone numbers, e-mails and Latin legal names are isolated with `dir="ltr"`/`<bdi>`.
- Arabic fonts: Noto Kufi Arabic (headings) and Noto Sans Arabic (body), self-hosted, loaded only when Arabic text is rendered.
- **All Arabic text is an AI-drafted translation — see "Arabic" in `CONTENT-REVIEW.md`.**
- To add a language: add it to `locales` in `src/i18n/config.ts`, add a dictionary file, and extend the `L` type plus every `{ en, ar }` value in `src/content/*`.

## Environment variables
| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (sitemap, Open Graph). Required in production. |
| `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, `ENQUIRY_FROM_EMAIL` | Enable the enquiry form via [Resend](https://resend.com). **All three are required.** Without them the form reports honestly that nothing was sent. |

## Before launch
Work through `CONTENT-REVIEW.md`, then set `showReviewFlags: false` in `src/content/site.ts`.

Note: this project uses the Next.js version bundled in `node_modules/next/dist/docs` (Cache Components enabled).
