"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

/**
 * Hook detecting prefers-reduced-motion
 */
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return prefersReducedMotion;
}

/**
 * Easing function: easeOutCubic
 */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

interface TallyProps {
  target: number;
  suffix?: string;
  prefersReducedMotion: boolean;
}

/**
 * Tally component: counts from 0 to target over 1200ms once on mount, starting 320ms after load
 */
function Tally({ target, suffix = "", prefersReducedMotion }: TallyProps) {
  const [count, setCount] = useState(() => (prefersReducedMotion ? target : 0));

  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let rafId: number;
    // begins 320ms after load, runs once for 1200ms
    const timerId = setTimeout(() => {
      const startTime = performance.now();
      const duration = 1200;

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const current = Math.round(target * easeOutCubic(progress));
        setCount(current);

        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        }
      };

      rafId = requestAnimationFrame(step);
    }, 320);

    return () => {
      clearTimeout(timerId);
      cancelAnimationFrame(rafId);
    };
  }, [target, prefersReducedMotion]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const STATS_DATA = [
  { target: 240, suffix: "+", label: "Brands launched" },
  { target: 14, suffix: "", label: "Industry awards" },
  { target: 92, suffix: "%", label: "Client retention" },
  { target: 11, suffix: "", label: "Countries served" },
];

const NAV_LINKS = ["Work", "Services", "Studio", "Contact"];

const HEADLINE_LINES = ["WE PRINT", "BOLD IDEAS", "ON SCREENS."];

export interface HeroProps {
  showNav?: boolean;
}

export function Hero({ showNav = false }: HeroProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      className={`w-full flex flex-col bg-[#E0231B] text-[#FFFFFF] overflow-hidden relative select-none font-['Barlow',system-ui,sans-serif] ${
        showNav ? "min-h-[100dvh]" : "min-h-[calc(100dvh-84px)]"
      }`}
    >
      {/* Load Anton & Barlow fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Anton&family=Barlow:wght@400;500;600;700&display=swap"
      />

      {/* Embedded CSS rules for the one-time signature press stamp & fade choreography */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .press-font-display {
              font-family: 'Anton', Impact, sans-serif;
            }
            .press-font-barlow {
              font-family: 'Barlow', system-ui, sans-serif;
            }
            @keyframes press-stamp {
              0% {
                opacity: 0;
                transform: scale(1.35) rotate(-2deg);
                filter: blur(3px);
              }
              55% {
                opacity: 1;
                transform: scale(0.97) rotate(0.4deg);
                filter: blur(0);
              }
              75% {
                transform: scale(1.01) rotate(0);
              }
              100% {
                opacity: 1;
                transform: scale(1) rotate(0);
              }
            }
            .press-stamp {
              opacity: 0;
              transform-origin: 0 60%;
              animation: press-stamp 520ms cubic-bezier(0.2, 0.9, 0.3, 1.2) forwards;
            }
            @keyframes press-fade {
              from {
                opacity: 0;
                transform: translateY(8px);
              }
              to {
                opacity: 1;
                transform: none;
              }
            }
            .press-fade {
              opacity: 0;
              animation: press-fade 500ms ease-out forwards;
            }
            @media (prefers-reduced-motion: reduce) {
              .press-stamp,
              .press-fade {
                animation: none !important;
                opacity: 1 !important;
                transform: none !important;
                filter: none !important;
              }
            }
            .press-link-focus:focus-visible {
              outline: 2px solid #0B0B0B;
              outline-offset: 4px;
            }
          `,
        }}
      />

      {/* Decorative repeating stripe background layer */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(11,11,11,0.03) 0 2px, transparent 2px 14px)",
        }}
        aria-hidden="true"
      />

      {/* Optional Standalone NAVIGATION: h-[84px] */}
      {showNav && (
        <header className="relative z-10 h-[84px] flex items-center justify-between px-6 md:px-10 shrink-0">
          <a
            href="/"
            className="flex items-center gap-3 press-link-focus group"
            aria-label="PRESSROOM Home"
          >
            <span className="w-3.5 h-3.5 bg-[#0B0B0B] shrink-0" aria-hidden="true" />
            <span className="press-font-display text-[22px] tracking-[0.08em] text-[#0B0B0B] leading-none">
              PRESSROOM
            </span>
          </a>

          <nav
            className="hidden md:flex items-center gap-9"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="press-font-barlow font-semibold text-[13px] uppercase tracking-[0.16em] text-[#FFFFFF]/90 hover:text-[#FFFFFF] transition-colors press-link-focus"
              >
                {link}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="press-font-barlow font-semibold text-[13px] uppercase tracking-[0.14em] px-5 py-3 rounded-none bg-[#0B0B0B] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#0B0B0B] transition-colors press-link-focus"
          >
            Start a project
          </a>
        </header>
      )}

      {/* HERO: flex-1 flex flex-col px-6 md:px-10 pt-8 md:pt-10 */}
      <div className="relative z-10 flex-1 flex flex-col px-6 md:px-10 pt-8 md:pt-10">
        {/* Vertical Strapline (desktop only): right-10 top-[120px] */}
        <div
          className="press-fade hidden md:block absolute right-10 top-[60px] md:top-[120px] press-font-barlow font-semibold text-[12px] uppercase tracking-[0.2em] text-[#FFFFFF] select-none"
          style={{
            writingMode: "vertical-rl",
            animationDelay: "900ms",
          }}
          aria-hidden="true"
        >
          Independent studio · Est. 2014
        </div>

        {/* Headline H1: stamps in once on load */}
        <h1 className="press-font-display uppercase text-[#0B0B0B] leading-[0.9] tracking-[-0.01em] text-[clamp(72px,13vw,176px)] m-0 select-none">
          <span className="sr-only">We print bold ideas on screens.</span>
          <span aria-hidden="true" className="flex flex-col">
            {HEADLINE_LINES.map((line, index) => (
              <span
                key={index}
                className={`block cursor-default ${index === 2 ? "pl-10" : ""}`}
              >
                <span
                  className="press-stamp inline-block"
                  style={{ animationDelay: `${index * 110}ms` }}
                >
                  {line}
                </span>
              </span>
            ))}
          </span>
        </h1>

        {/* CTA zone: mt-auto flex justify-end pb-10, fades in once at 1200ms */}
        <div
          className="press-fade mt-auto flex justify-end pb-10 pt-8"
          style={{ animationDelay: "1200ms" }}
        >
          <a
            href="#work"
            className="flex flex-col items-end gap-2 group press-link-focus cursor-pointer"
          >
            <span className="flex items-center gap-2 press-font-barlow font-bold text-[13px] uppercase tracking-[0.22em] text-[#0B0B0B] group-hover:text-[#FFFFFF] transition-colors">
              SEE OUR WORK
              <ArrowRight className="w-4 h-4 stroke-[2.5] text-[#0B0B0B] group-hover:text-[#FFFFFF] transition-colors" />
            </span>
            <span
              className="w-full h-1 bg-[#0B0B0B] block"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      {/* STAT BAR: bg-press-ink px-6 md:px-10 py-8 grid grid-cols-2 md:flex */}
      <div
        className="press-fade relative z-10 bg-[#0B0B0B] px-6 md:px-10 py-8 grid grid-cols-2 md:flex md:items-center md:justify-between gap-y-8 shrink-0"
        style={{ animationDelay: "400ms" }}
      >
        {STATS_DATA.map((stat, idx) => (
          <React.Fragment key={stat.label}>
            <div className="flex flex-col">
              <span className="press-font-display text-[32px] md:text-[40px] leading-none text-[#FFFFFF] tabular-nums">
                <Tally
                  target={stat.target}
                  suffix={stat.suffix}
                  prefersReducedMotion={prefersReducedMotion}
                />
              </span>
              <span className="press-font-barlow font-semibold text-[11px] uppercase tracking-[0.18em] text-[#FFFFFF]/50 mt-2">
                {stat.label}
              </span>
            </div>
            {idx < STATS_DATA.length - 1 && (
              <div
                className="hidden md:block w-px h-14 bg-[#FFFFFF]/10"
                aria-hidden="true"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Hero;
