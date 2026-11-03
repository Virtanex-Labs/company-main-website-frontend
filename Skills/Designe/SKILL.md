---
name: company-website-builder
description: Build a modern, polished company website for Virtanex Labs (landing page plus About, Services, Portfolio, Pricing, Blog, Contact, and feature showcases) using Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, and existing components in components/ui, components/App Components, and components. Use this skill whenever the user wants to design, build, customize, or improve Virtanex Labs' company website, landing page sections, service pages, or interactive components.
---

# Virtanex Labs — Website & Component Builder

Build and scale the official website and digital experience for **Virtanex Labs** (Finland-based software company specializing in Web Development, Mobile Apps, Custom Software, UI/UX Design, and AI Automation).

The project is **already set up** with Next.js App Router, React 19, TypeScript, Tailwind CSS v4, and theme tokens. **Do not run setup commands or re-scaffold.** Build by composing the existing component library.

---

## Component Architecture

Components are organized into three dedicated directories:

| Directory | Purpose | Import Path |
|---|---|---|
| **`components/ui/`** | Core UI primitives, shadcn components, and animated blocks (`button`, `card`, `dialog`, `accordion`, `product-rail-gallery`, `Magic/*`, etc.). | `@/components/ui/<component>` |
| **`components/App Components/`** | Custom feature showcases and rich interactive hero/service components (`GenAIShowcase`, `ClothingRailHero`, etc.). | `@/components/App Components` |
| **`components/`** | Composed page sections, grid blocks, and site-wide components. | `@/components/<component>` |

---

## Workflow

### 1. Brand Brief & Configuration
- Company data, services, navigation, and contact info live in **`lib/site-config.ts`** and **`references/brand-brief.md`**.
- Keep copy aligned with Virtanex Labs: Nordic precision, engineering excellence, modern velocity, and high utility.

### 2. Leverage Existing Components
- Inspect **`components/ui/`**, **`components/App Components/`**, and **`components/`** before building new primitives.
- Existing components are production-ready—reuse and compose them rather than duplicating code.

### 3. Maintain Design System Consistency
- Read **`references/design-system.md`**.
- Use design tokens from `app/globals.css` (`bg-background`, `text-foreground`, `border-border`, `text-muted-foreground`, etc.).
- Ensure dark mode and light mode are seamless across all components.

### 4. Build & Compose Page Sections
- Read **`references/landing-page.md`** for section recipes:
  - Hero & Value Proposition
  - Interactive Feature Showcases (`GenAIShowcase`, `ClothingRailHero`)
  - Core Services Grid (Web Dev, Mobile Apps, Custom Software, UI/UX, AI Automation)
  - Process, Metrics & Case Studies
  - FAQ, Final Consultation CTA, and Footer
- Compose sections by combining `components/App Components` with `components/ui` elements.

### 5. Build Supporting Pages
- Read **`references/pages.md`** for multi-page routing (`/services`, `/about`, `/portfolio`, `/pricing`, `/contact`).
- Reuse landing-page section primitives to ensure visual consistency.

### 6. Polish & Verification
- Check against **`references/quality-checklist.md`**:
  - Fully responsive from mobile (375px) to ultra-wide displays.
  - Motion accessibility: respect `prefers-reduced-motion`.
  - Accessible keyboard navigation (`Enter`, `Space`, `Tab`, ARIA attributes).
  - Verify type safety (`npx tsc --noEmit`) and ensure zero runtime errors.

---

## Core Rules

1. **Setup Is Already Complete**: Never run `create-next-app` or `shadcn init`. Build directly in the existing structure.
2. **Data-Driven Content**: Store company copy, services, testimonials, and links in `lib/site-config.ts` instead of hardcoding strings across multiple JSX files.
3. **Clean Component Composition**:
   - Primitives go to `components/ui/`.
   - Feature showcases and hero blocks belong in `components/App Components/`.
   - Page-level compositions live in `components/` or `app/`.
4. **Server Components by Default**: Only add `"use client"` when component state, effects, or browser interactions are strictly necessary.
5. **Real, High-Quality Copy**: Use specific, benefit-driven copy tailored to Virtanex Labs' Finnish engineering and AI/software services—no generic lorem ipsum.
6. **Performance & Optimization**: Use `next/image` (with remote patterns configured in `next.config.ts`) and modern CSS transitions.
