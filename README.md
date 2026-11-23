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

## Environment variables
| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (sitemap, Open Graph). Required in production. |
| `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, `ENQUIRY_FROM_EMAIL` | Enable the enquiry form via [Resend](https://resend.com). **All three are required.** Without them the form reports honestly that nothing was sent. |

## Before launch
Work through `CONTENT-REVIEW.md`, then set `showReviewFlags: false` in `src/content/site.ts`.

Note: this project uses the Next.js version bundled in `node_modules/next/dist/docs` (Cache Components enabled).
