"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { MyCompanyLogoSVG } from "@/components/SVGS";

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => { };
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
}

function easeOutCubic(x: number): number {
  return 1 - Math.pow(1 - x, 3);
}

interface TallyProps {
  target: number;
  suffix?: string;
  prefersReducedMotion: boolean;
}

function Tally({ target, suffix = "", prefersReducedMotion }: TallyProps) {
  const [count, setCount] = useState(() => (prefersReducedMotion ? target : 0));

  useEffect(() => {
    if (prefersReducedMotion) return;

    let rafId: number;
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
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [target, prefersReducedMotion]);

  const displayCount = prefersReducedMotion ? target : count;

  return (
    <>
      {displayCount}
      {suffix}
    </>
  );
}

const STATS_DATA = [
  { target: 240, suffix: "+", label: "Brands launched" },
  { target: 14, suffix: "", label: "Industry awards" },
  { target: 92, suffix: "%", label: "Client retention" },
  { target: 11, suffix: "", label: "Countries served" },
];

const NAV_LINKS = ["Work", "Services", "Studio", "Contact"];

const HERO_IMAGES = [
  {
    url: "https://images.pexels.com/photos/8145344/pexels-photo-8145344.jpeg",
    label: "Digital Innovation",
  },
  {
    url: "https://images.pexels.com/photos/7679896/pexels-photo-7679896.jpeg",
    label: "Software Architecture",
  },
];

export interface HeroProps {
  showNav?: boolean;
}

export function Hero({ showNav = false }: HeroProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section className="w-full flex flex-col justify-between overflow-hidden relative select-none font-sans text-white min-h-[100dvh] min-h-[100svh] pt-[68px] sm:pt-[76px]">
      {/* Full Hero Background Image Showcase */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none" aria-hidden="true">
        {HERO_IMAGES.map((img, idx) => (
          <div
            key={img.url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img.url}
              alt=""
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center scale-[1.01] brightness-[1.04] contrast-[1.02]"
            />
          </div>
        ))}

        {/* Adaptive gradient overlay:
            - Mobile: vertical gradient ensuring text remains 100% legible over any portrait image
            - Desktop: horizontal gradient feathering seamlessly from left to right */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85 md:bg-gradient-to-r md:from-black/65 md:via-black/25 md:to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Optional Standalone Header */}
      {showNav && (
        <header className="relative z-10 h-[68px] sm:h-[84px] flex items-center justify-between px-5 sm:px-8 md:px-10 shrink-0 border-b border-white/10 backdrop-blur-xs">
          <Link
            href="/"
            className="flex items-center group select-none py-1 focus-visible:outline-none"
            aria-label="Virtanex Labs Home"
          >
            <MyCompanyLogoSVG className="h-7 sm:h-8 md:h-9 w-auto text-white group-hover:opacity-90 transition-opacity" />
          </Link>

          <nav className="hidden md:flex items-center gap-9" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[13px] font-medium uppercase tracking-[0.16em] text-white/80 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <Link
            href="/contact"
            className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.14em] px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-white text-zinc-950 hover:bg-white/90 transition-all shadow-sm"
          >
            Start a project
          </Link>
        </header>
      )}

      {/* Main Hero Content: Clean, Breathable, Simple Text with Mobile Ergonomics */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-20 max-w-5xl">
        {/* Subtle Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium tracking-wide bg-white/10 backdrop-blur-md text-white/90 border border-white/20 mb-4 sm:mb-6 w-fit shadow-xs">
          <span>Virtanex Labs · Digital Product & Engineering Studio</span>
        </div>

        {/* Simple, Elegant, Modern Headline with subtle shadow for readability over bright images */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.15] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
          From idea to launch, <br />
          <span className="text-white/85 font-normal">without the headaches.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl leading-relaxed font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)]">
          We partner with ambitious founders and enterprise teams to design, engineer, and deploy high-performance software, AI systems, and cloud platforms with Nordic precision.
        </p>

        {/* Dual Actions - Stacks cleanly on mobile, side-by-side on sm+ */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-white text-zinc-950 text-xs sm:text-sm font-semibold text-center hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            Start a project
          </Link>
          <a
            href="#services"
            className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium text-center hover:bg-white/20 transition-all active:scale-[0.99]"
          >
            Explore Capabilities
          </a>
        </div>
      </div>

      {/* Bottom Strip: Image Switcher Dots & Stat Bar */}
      <div className="relative z-10 bg-black/45 backdrop-blur-md border-t border-white/10 px-5 sm:px-8 md:px-12 py-4 sm:py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:gap-6 md:gap-12 md:flex md:items-center">
          {STATS_DATA.map((stat, idx) => (
            <React.Fragment key={stat.label}>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white tabular-nums leading-none tracking-tight">
                  <Tally
                    target={stat.target}
                    suffix={stat.suffix}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.14em] text-white/60 mt-1 sm:mt-1.5">
                  {stat.label}
                </span>
              </div>
              {idx < STATS_DATA.length - 1 && (
                <div className="hidden md:block w-px h-8 bg-white/15" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Image Switcher Pills & "See Our Work" */}
        <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6 pt-3 md:pt-0 border-t border-white/10 md:border-t-0">
          {/* 5-Image Carousel Dots */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {HERO_IMAGES.map((img, i) => (
              <button
                key={img.url}
                onClick={() => setActiveImageIndex(i)}
                className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                  i === activeImageIndex
                    ? "w-6 sm:w-7 bg-white"
                    : "w-2 bg-white/35 hover:bg-white/60"
                }`}
                aria-label={`View visual ${i + 1}: ${img.label}`}
                title={img.label}
              />
            ))}
            <span className="font-mono text-[10px] sm:text-[11px] text-white/60 ml-1.5 sm:ml-2 select-none">
              0{activeImageIndex + 1} / 0{HERO_IMAGES.length}
            </span>
          </div>

          <a
            href="#work"
            className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-white hover:text-white/80 transition-colors shrink-0"
          >
            <span>See Our Work</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
}
