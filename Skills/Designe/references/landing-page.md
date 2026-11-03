# Landing Page Recipes

Compose `app/page.tsx` from section components in `components/sections/`. Typical order for a software company is below; drop or reorder to fit the brief. Each section has one job and one CTA.

Budget: use Magic UI effects in roughly 3-5 places total (hero, one showcase, one proof element). Everything else is clean shadcn.

## Contents
1. Navbar
2. Hero
3. Trust / logos
4. Services
5. Why us / differentiators
6. Process
7. Case studies / portfolio teaser
8. Metrics
9. Testimonials
10. Pricing teaser
11. FAQ
12. Final CTA
13. Footer

## 1. Navbar
- Sticky, translucent: `sticky top-0 z-50 border-b bg-background/70 backdrop-blur`.
- Desktop: logo, links, theme toggle, primary CTA button. Mobile: shadcn `sheet` with the same links.
- Components: shadcn `navigation-menu` (if mega menu), `button`, `sheet`. Optional Magic UI `scroll-progress` for a thin progress bar.

## 2. Hero
Goal: say what you do, for whom, and give one clear action within 5 seconds.
- Layout: eyebrow badge (`badge`, e.g. "Now booking projects for Q1"), H1 with one gradient/animated phrase, one-sentence subhead, two CTAs (primary + secondary), then a product visual.
- Background (pick ONE): `grid-pattern` or `dot-pattern` with a radial mask, `retro-grid`, or `particles`. Add a soft blurred accent glow.
- Headline accent (pick ONE): `word-rotate` for rotating services, `animated-gradient-text` or `aurora-text` for one key phrase.
- Primary CTA: `shimmer-button` or `interactive-hover-button`. Secondary: shadcn `button variant="outline"`.
- Visual: `safari` or `iphone-15-pro` mockup of a real project, or `hero-video-dialog` for a demo reel. Wrap in `blur-fade`.
- Optional: `avatar-circles` + "Trusted by 50+ teams" social proof line under the CTAs.

## 3. Trust / logos
- `marquee` of client or technology logos (grayscale, `opacity-70`, color on hover). Pause on hover.
- If no clients yet, show the tech stack (Next.js, React, Node, Python, AWS...) instead of fake client names.

## 4. Services
- `bento-grid` with 4-6 cards. Each card: icon, title, one-line benefit, link to the service page.
- Make the first card larger (span 2) for rhythm. Add a subtle `magic-card` hover spotlight or `border-beam` on ONE highlighted card only.
- Alternative for fewer services: three shadcn `card`s in a row.

## 5. Why us / differentiators
- 3-4 short claims with proof (e.g. "Senior engineers only", "Fixed-price milestones", "Weekly demos").
- Optional visual: `animated-beam` connecting a "Your idea" node to a "Shipped product" node, or `orbiting-circles` showing the tech stack.

## 6. Process
- 4 numbered steps (Discover, Design, Build, Launch & support) in a horizontal stepper on desktop, vertical on mobile.
- `blur-fade` stagger. Keep copy to one line per step.

## 7. Case studies / portfolio teaser
- 3 project cards: image/mockup, client + outcome metric, tech badges, "View case study" link.
- Use `card` with `next/image`; hover scale 1.02. Link to `/portfolio/[slug]`.

## 8. Metrics
- 3-4 stats using `number-ticker` (projects delivered, years, countries, satisfaction). Only use true numbers; label estimates honestly or omit.

## 9. Testimonials
- shadcn `carousel` or a two-row `marquee` of testimonial cards (avatar, name, role, quote). Real quotes only; mark placeholders clearly during development.

## 10. Pricing teaser
- 3 tiers or "starting at" project ranges in `card`s; highlight the recommended one with `border-beam` or `shine-border`. Link to `/pricing`.

## 11. FAQ
- shadcn `accordion` with 5-7 real objections (timeline, cost, ownership of code, support, communication, working across time zones). Add FAQ structured data (JSON-LD) for SEO.

## 12. Final CTA
- Full-width block with strong contrast: heading, one sentence, primary CTA, and the direct email/booking link. Backdrop: `ripple`, `meteors`, or a gradient. This is the page's second focal point.

## 13. Footer
- Logo + tagline, link columns (Services, Company, Resources, Legal), contact details, socials, newsletter input (optional), copyright.

## Example: hero skeleton

```tsx
// components/sections/hero.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/magicui/blur-fade";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <GridPattern className="absolute inset-0 -z-10 [mask-image:radial-gradient(60%_60%_at_50%_30%,white,transparent)]" />
      <div className="mx-auto max-w-4xl px-4 text-center">
        <BlurFade delay={0.05}>
          <Badge variant="secondary">Now booking projects</Badge>
        </BlurFade>
        <BlurFade delay={0.1}>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            Software that moves your business <span className="text-primary">forward</span>
          </h1>
        </BlurFade>
        <BlurFade delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {siteConfig.description}
          </p>
        </BlurFade>
        <BlurFade delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={siteConfig.ctaPrimary.href}>
              <ShimmerButton>{siteConfig.ctaPrimary.label}</ShimmerButton>
            </Link>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">See our work</Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
```

Adjust import names and props to what the CLI actually installed; open the generated file to confirm exports before using it.