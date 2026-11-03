"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/Magic/animated-theme-toggler";

const NAV_LINKS = [
  { label: "Work", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full h-[84px] bg-[#E0231B] border-b border-[#0B0B0B]/10 transition-colors relative overflow-hidden">
      {/* Decorative repeating stripe background layer (matches Hero) */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(11,11,11,0.03) 0 2px, transparent 2px 14px)",
        }}
        aria-hidden="true"
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .press-font-display {
              font-family: 'Anton', Impact, sans-serif;
            }
            .press-font-barlow {
              font-family: 'Barlow', system-ui, sans-serif;
            }
            .press-link-focus:focus-visible {
              outline: 2px solid #0B0B0B;
              outline-offset: 4px;
            }
          `,
        }}
      />

      <div className="relative z-10 mx-auto flex h-full items-center justify-between px-6 md:px-10">
        {/* Logo group: 14px square (w-3.5 h-3.5 bg-press-ink) then "PRESSROOM" in Anton 22px */}
        <Link
          href="/"
          className="flex items-center gap-3 press-link-focus group select-none"
          aria-label="PRESSROOM Home"
        >
          <span className="w-3.5 h-3.5 bg-[#0B0B0B] shrink-0" aria-hidden="true" />
          <span className="press-font-display text-[22px] tracking-[0.08em] text-[#0B0B0B] leading-none">
            PRESSROOM
          </span>
        </Link>

        {/* Links (hidden md:flex gap-9): Barlow 600 13px uppercase tracking-[0.16em] */}
        <nav
          className="hidden md:flex items-center gap-9"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="press-font-barlow font-semibold text-[13px] uppercase tracking-[0.16em] text-[#FFFFFF]/90 hover:text-[#FFFFFF] transition-colors press-link-focus"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions: Theme toggler & CTA "Start a project" */}
        <div className="hidden md:flex items-center gap-4">
          <AnimatedThemeToggler
            variant="circle"
            className="flex h-8 w-8 items-center justify-center text-[#0B0B0B] hover:text-[#FFFFFF] hover:bg-[#0B0B0B]/10 transition-colors [&_svg]:size-4 press-link-focus cursor-pointer"
            aria-label="Toggle theme"
          />

          <Link
            href="/contact"
            className="press-font-barlow font-semibold text-[13px] uppercase tracking-[0.14em] px-5 py-3 rounded-none bg-[#0B0B0B] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#0B0B0B] transition-colors press-link-focus"
          >
            Start a project
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <AnimatedThemeToggler
            variant="circle"
            className="flex h-8 w-8 items-center justify-center text-[#0B0B0B] hover:text-[#FFFFFF] hover:bg-[#0B0B0B]/10 transition-colors [&_svg]:size-4 press-link-focus cursor-pointer"
            aria-label="Toggle theme"
          />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center text-[#0B0B0B] hover:text-[#FFFFFF] hover:bg-[#0B0B0B]/10 transition-colors press-link-focus"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-[#0B0B0B]/15 bg-[#E0231B] px-6 py-6 flex flex-col gap-4 relative z-50 shadow-xl">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="press-font-barlow font-semibold text-[14px] uppercase tracking-[0.16em] text-[#FFFFFF] hover:text-[#0B0B0B] transition-colors py-2 border-b border-[#0B0B0B]/10"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center press-font-barlow font-semibold text-[13px] uppercase tracking-[0.14em] px-5 py-3.5 bg-[#0B0B0B] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#0B0B0B] transition-colors"
            >
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
