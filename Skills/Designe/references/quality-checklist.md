# Quality Checklist

Run through this before telling the user the site is done.

## Build health
- [ ] `npm run build` succeeds with no type or lint errors
- [ ] No unused imports, no `any` shortcuts in shared components
- [ ] Client components are limited to interactive/animated leaves (`"use client"` only where needed)
- [ ] Env vars documented in `.env.example`; no secrets committed

## Responsive
- [ ] Looks right at 375px, 768px, 1280px, 1536px
- [ ] No horizontal scroll; tables and code blocks scroll inside their own container
- [ ] Tap targets at least 44px; mobile nav works with keyboard and touch
- [ ] Headings scale down gracefully (no overflow on long words)

## Accessibility
- [ ] One H1 per page, logical heading order
- [ ] Text contrast meets WCAG AA in light and dark mode (check muted text and text over gradients)
- [ ] All images have meaningful `alt`; decorative effects are `aria-hidden`
- [ ] Visible focus styles; full keyboard navigation (nav, accordion, dialog, form)
- [ ] Animations respect `prefers-reduced-motion`; nothing auto-plays sound; no flashing content
- [ ] Form fields have labels and error messages announced

## Performance
- [ ] Hero image/video optimized; only the LCP image uses `priority`
- [ ] Fonts via `next/font` (no layout shift)
- [ ] Heavy effects (`particles`, `globe`, `meteors`) appear once per page, are lazy loaded with `next/dynamic` if below the fold
- [ ] No unnecessary client-side libraries; check bundle with `@next/bundle-analyzer` if slow
- [ ] Target Lighthouse: Performance 90+, Accessibility 95+, SEO 95+, Best Practices 95+

## Design polish
- [ ] One accent color, consistent radius, consistent spacing rhythm between sections
- [ ] Magic UI effects limited to a few focal points; none competing in the same viewport
- [ ] Real, specific copy; no lorem ipsum or "Your Company" left over unless flagged
- [ ] Same primary CTA wording and destination across the site
- [ ] Hover, focus, active, loading, and empty states styled
- [ ] Favicon, app icons, Open Graph image set

## SEO
- [ ] Unique title and meta description per page
- [ ] `sitemap.xml`, `robots.txt`, canonical URLs
- [ ] JSON-LD for Organization (and FAQ/Article where relevant)
- [ ] Clean URLs, internal links between related pages, 404 page

## Final handoff message
Summarize in a few lines: pages built, key components used (shadcn vs Magic UI), where to edit content (`lib/site-config.ts`, `lib/content.ts`), how to run (`npm run dev`), and any placeholders the user must replace (logo, client names, testimonials, legal text, API keys).