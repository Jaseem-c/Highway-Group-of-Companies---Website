# Content review checklist — HIGH WAY website

Source of truth: *HIGH WAY group of company Profile* (2026, 8 pages).
Nothing below has been invented; these are items that need the client's confirmation before launch.
While `showReviewFlags` is `true` in `src/content/site.ts`, unverified data shows a small **Verify** tag on the site. Set it to `false` once everything is confirmed.

## Branch details (brochure page 7 prints these as an image)
- [ ] The brochure says **7 outlets** but shows **6 branch cards + the "Contact Us" office**. The site treats Highway Electrical Equipment L.L.C. (Hamdan Street – Ziyani) as outlet 1 of 7. Confirm.
- [ ] Re-check every phone number, P.O. Box and address against originals (transcribed from an image).
- [ ] **High Volt** legal form: heading says "L.L.C – O.P.C", logo says "L.L.C – S.P.C".
- [ ] **Fusion Tech** street: "Wadi Al Mikhaylfah" vs "Wadi Al Mikhayifah" in different places.
- [ ] High Volt, Best Highway share P.O. Box 51935 with the head office. Confirm intentional.
- [ ] UAE landline numbers were converted to `tel:` format (02 → +971 2). Confirm.
- [ ] Google Maps links are *search links built from the printed address*, not verified pins. Provide exact locations or share links if available.
- [ ] Opening hours are not in the brochure — not shown. Supply if wanted.

## Contact
- [ ] All emails are Gmail addresses (`highwayelectricaleqp@gmail.com`, `fusiontechelectrical@gmail.com`). A company-domain address would look more credible.
- [ ] No website URL, WhatsApp, or social links in the brochure — none shown.
- [ ] **Enquiry form is not live** until email is configured (see README). Until then it tells the visitor honestly that nothing was sent and offers a pre-filled email.

## Wording changes (grammar only — claims unchanged)
- [ ] Positioning line printed as "Company powering project building the future...." — headlines use "Powering projects. Building the future."; the original is kept in the footer.
- [ ] **Vision** text ends "…building materials, paints and in GCC" (a word is missing). Presented as "…building materials and paints in the GCC". Confirm intended wording.
- [ ] "Shattaffs" → "Shattafs" in the plumbing product list.
- [ ] Company is called both *HIGH WAY Group of Company* and *Highway Electrical Equipment L.L.C.* Confirm how they relate (group vs. trading entity) and the correct legal footer text.

## Numbers shown
- 24 years, 7 outlets — from the brochure.
- 8 divisions — count of the brochure's core divisions.
- 41 brands — count of logos on brochure page 6 (derived, not printed). Confirm, and confirm "Brand portfolio" wording does not imply authorised-distributor status.

## Not in the brochure — deliberately omitted
- Company values, timeline/milestones, certifications, awards, project references, testimonials, product specifications, and any per-division brand mapping.
- Descriptions for **Hardware, Building Materials, Paint & Coating, Power Tools, Safety Products** are one-line and generic because the brochure gives only their names. Product lists exist in the brochure only for Electrical and Plumbing.

## Imagery
- Hero and page headers use the glass-tower photo from the brochure cover; "24 Years of Excellence" artwork is from brochure page 2 (appears AI-generated — confirm licensing/preference).
- Product photos are cropped from the brochure's hexagon grids (≈240 px). Higher-resolution originals will look sharper on large screens.
- No photography exists for Hardware, Building Materials, Paint, Power Tools or Safety — they use the brochure's own line icons. Supply photos to upgrade these.
- Brand logos are small raster images from the brochure (shown on white at modest size). Vector/high-res logos from brand owners are recommended.
- The logo lockup is a cleaned crop of the brochure cover (≈1744 px wide). **Supply the original SVG/PNG logo** to replace `public/brand/highway-lockup.png`.
