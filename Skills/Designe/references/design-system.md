# Design System

Set this up before building any section. Consistency across pages is what makes a site feel designed.

## Principles

1. **Neutral base + one accent.** Backgrounds and text are neutral; the brand accent is used for CTAs, links, highlights and small glows.
2. **Strong hierarchy.** One clear focal point per section. Big confident headings, calm body text.
3. **Generous whitespace.** Sections get `py-20 md:py-28`. Crowded layouts look cheap.
4. **Consistent radius and shadow.** Pick one radius scale and one subtle shadow style.
5. **Motion with purpose.** Entrance fades and a few hero effects. Nothing loops aggressively near body text.

## Tokens (globals.css)

shadcn uses CSS variables. Customize the accent by editing `--primary` (and `--ring`) in both `:root` and `.dark`. Keep contrast at WCAG AA (4.5:1 for body text).

```css
:root {
  --radius: 0.75rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.55 0.22 265);          /* brand accent: change per company */
  --primary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.45 0 0);
  --border: oklch(0.922 0 0);
  --ring: oklch(0.55 0.22 265);
}
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.65 0.2 265);
  --muted: oklch(0.2 0 0);
  --muted-foreground: oklch(0.7 0 0);
  --border: oklch(1 0 0 / 10%);
}
```

Match the format your generated `globals.css` already uses (oklch in current shadcn, hsl in older versions). Don't mix formats.

## Typography scale

| Use | Classes |
|---|---|
| Hero H1 | `text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight` |
| Section H2 | `text-3xl md:text-5xl font-semibold tracking-tight` |
| Card title | `text-lg md:text-xl font-semibold` |
| Lead paragraph | `text-lg md:text-xl text-muted-foreground` |
| Body | `text-base leading-relaxed` |
| Eyebrow / label | `text-sm font-medium uppercase tracking-wider text-primary` |

Limit line length: `max-w-2xl` for paragraphs, `max-w-4xl` for hero headings.

## Layout

- Container: `mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8`. Make a `<Container>` component.
- Section wrapper: `<Section>` component with consistent vertical padding and optional `id` for anchor links.
- Section header pattern: eyebrow, H2, lead paragraph, centered or left aligned consistently site-wide.
- Alternate section backgrounds subtly (`bg-background` / `bg-muted/40`) to create rhythm.

## Surfaces and effects

- Cards: `rounded-2xl border bg-card p-6 shadow-sm`, hover `hover:shadow-md hover:-translate-y-0.5 transition`.
- Glow: a blurred accent blob behind the hero (`absolute -z-10 blur-3xl bg-primary/20 rounded-full`).
- Gradient text: only for one phrase in the hero headline.
- Borders over shadows in dark mode.

## Motion rules

- Entrance: `BlurFade` with staggered `delay` (0.05-0.1s steps), once per element.
- Respect reduced motion: wrap custom animations with `motion-safe:` utilities or check `useReducedMotion()` from `motion/react`.
- Durations 150-300ms for UI, up to 600ms for entrances. No parallax that makes text hard to read.

## Iconography and imagery

- Icons: `lucide-react`, one stroke width site-wide.
- Brand logos: `react-icons` or simple-icons for tech stacks.
- Images: `next/image` with explicit sizes, `priority` only on the hero. Use real screenshots in device mockups (`safari`, `iphone-15-pro`) rather than stock photos where possible.