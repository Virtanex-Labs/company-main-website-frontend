"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  ClothingRailHero,
  type ClothingRailHeroSectionProps,
  RAIL_DEMO_ITEMS,
} from "@/components/App Components/ClothingRailHero";
import { MyCompanyLogoSVG } from "@/components/SVGS";

export interface HeroTwoProps extends Partial<ClothingRailHeroSectionProps> {
  showNav?: boolean;
}

export function HeroTwo({
  showNav = false,
  items = RAIL_DEMO_ITEMS,
  hanger = "none",
  eyebrow = "Virtanex Labs · Studio Edition & Interactive Gallery",
  heading = "A digital product rail you can handle, right on the page.",
  caption = "Brush along the rail, slide a hanger, or lift a piece to inspect front and back in 3D space.",
  buttonText = "Start a project",
  buttonHref = "/contact",
  autoplay = true,
  interval = 3000,
  className,
  wrapperClassName,
  ...props
}: HeroTwoProps) {
  return (
    <section className="relative w-full flex flex-col justify-between overflow-hidden bg-background text-foreground min-h-[100dvh] min-h-[100svh] pt-[68px] sm:pt-[76px]">
      {/* Subtle ambient background glow & grid lines */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,198,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,198,0.22),transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-35 dark:opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Optional Standalone Header if used independently */}
      {showNav && (
        <header className="relative z-20 h-[68px] sm:h-[80px] flex items-center justify-between px-5 sm:px-8 md:px-12 border-b border-border/50 backdrop-blur-md bg-background/80">
          <Link
            href="/"
            className="flex items-center group select-none py-1 focus-visible:outline-none"
            aria-label="Virtanex Labs Home"
          >
            <MyCompanyLogoSVG className="h-7 sm:h-8 w-auto text-foreground group-hover:opacity-90 transition-opacity" />
          </Link>

          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main Navigation"
          >
            <Link
              href="/portfolio"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </Link>
            <Link
              href="/services"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors"
            >
              Studio
            </Link>
            <Link
              href="/contact"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          <Link
            href="/contact"
            className="text-xs font-semibold uppercase tracking-[0.14em] px-4.5 py-2.5 rounded-xl bg-foreground text-background hover:opacity-90 transition-all shadow-xs"
          >
            Start a project
          </Link>
        </header>
      )}

      {/* Main Hero Container featuring the Interactive Clothing Rail */}
      <div className="relative z-10 flex-1 flex flex-col justify-center w-full px-3 sm:px-6 md:px-10 py-6 sm:py-10">
        <ClothingRailHero
          items={items}
          hanger={hanger}
          eyebrow={eyebrow}
          heading={heading}
          caption={caption}
          autoplay={autoplay}
          interval={interval}
          buttonText={buttonText}
          buttonHref={buttonHref}
          className={className}
          wrapperClassName="min-h-0 bg-transparent"
          {...props}
        />
      </div>

      {/* Bottom Information & Navigation Strip */}
      <div className="relative z-10 border-t border-border/50 bg-card/60 backdrop-blur-md px-5 sm:px-8 md:px-12 py-3.5 sm:py-4.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Sparkles className="size-3.5 text-primary" />
          <span className="font-medium text-foreground/90">
            Interactive 3D viewport
          </span>
          <span className="hidden sm:inline text-muted-foreground/60">·</span>
          <span className="hidden sm:inline">
            Physics-driven drag & rotation
          </span>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 font-semibold text-foreground hover:text-primary transition-colors"
          >
            <span>Explore Engineering Capabilities</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroTwo;

