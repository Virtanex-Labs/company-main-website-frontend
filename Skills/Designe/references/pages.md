# Supporting Pages

Reuse landing-page sections and the same `<Section>` / `<Container>` wrappers so every page matches. Each page needs: unique `metadata` (title, description, Open Graph), one H1, a clear CTA, and a breadcrumb or back link on detail pages.

## Page header pattern
Compact hero for inner pages: eyebrow, H1, one-sentence lead, subtle `dot-pattern` or plain background. Don't repeat the full landing hero.

## About (`/about`)
- Story: why the company exists, in 2-3 short paragraphs.
- Values: 3-4 cards.
- Team: grid of `avatar` + name + role (real people only). Founder section if small team.
- Numbers: `number-ticker` row. Optional `globe` or `dotted-map` if serving clients worldwide.
- CTA: "Work with us".

## Services (`/services`)
- Overview `bento-grid` or card grid, each linking to `/services/[slug]`.
- Engagement models (project, dedicated team, retainer) as 3 cards.
- FAQ accordion and final CTA.

## Service detail (`/services/[slug]`)
- Generate from `lib/content.ts` with `generateStaticParams`.
- Structure: hero (outcome-focused), what's included (checklist), process, tech stack (`marquee` or badge grid), related case study, pricing hint, FAQ, CTA.
- Each service gets unique copy; avoid duplicate text across slugs (hurts SEO).

## Portfolio (`/portfolio`) and case study (`/portfolio/[slug]`)
- Filterable grid with shadcn `tabs` (All, Web, Mobile, SaaS...).
- Case study layout: client + industry, challenge, solution, results (metrics), tech stack, screenshots in `safari`/`iphone-15-pro` mockups, testimonial, next project link.
- If there are no real projects yet, build the template with clearly labeled sample entries and tell the user to replace them.

## Pricing (`/pricing`)
- 3 tier `card`s with the recommended one highlighted (`border-beam` or `shine-border`).
- Feature comparison table (shadcn `table`) and "Custom project" card.
- Billing note (fixed price vs hourly) and FAQ about payments, revisions, and support.
- Show prices in the right currency for the audience; if pricing is custom, show "Starting at" ranges and a quote CTA.

## Blog (`/blog`, `/blog/[slug]`)
- MDX content in `content/blog/*.mdx` (use `next-mdx-remote` or `contentlayer`/`velite`) or a headless CMS.
- Index: featured post + grid with tags. Post: readable width `max-w-3xl`, table of contents, author, date, reading time, share links, related posts.
- Add `sitemap.ts`, RSS feed, and Article JSON-LD.

## Contact (`/contact`)
- Two columns: form (name, email, company, project type `select`, budget `select`, message) and contact details/booking embed.
- Validate with `zod`; submit to `app/api/contact/route.ts`; toast success with `sonner`; include a honeypot and rate limiting.
- Set expectations: "We reply within 1 business day."

## Careers (`/careers`) (optional)
- Culture blurb, perks cards, open roles list (or "no openings, send your CV" form).

## Legal (`/privacy`, `/terms`)
- Simple prose layout (`prose dark:prose-invert` via `@tailwindcss/typography`). Flag to the user that legal text should be reviewed by a professional.

## 404 and error pages
- `app/not-found.tsx` with a friendly message, search or links back to Home and Contact. `app/error.tsx` for runtime errors.

## SEO and metadata for every page
- `export const metadata` (or `generateMetadata` for dynamic routes) with title template from `layout.tsx`.
- `app/sitemap.ts`, `app/robots.ts`, canonical URLs, Open Graph image (`opengraph-image.tsx`).
- JSON-LD: `Organization` on home, `Service`, `Article`, `FAQPage` where relevant.