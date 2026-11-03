"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/Magic/animated-theme-toggler";
import { MyCompanyLogoSVG } from "@/components/SVGS";

const NAV_LINKS = [
  { label: "Work", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full h-[84px] bg-[#FBF9F5]/95 dark:bg-[#0D0E12]/95 backdrop-blur-md border-b border-[#111318]/10 dark:border-border/40 transition-colors relative overflow-hidden">
      {/* Decorative repeating subtle stripe background layer */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-70 dark:opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(17,19,24,0.03) 0 2px, transparent 2px 14px)",
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
              outline: 2px solid #111318;
              outline-offset: 4px;
            }
          `,
        }}
      />

      <div className="relative z-10 mx-auto flex h-full items-center justify-between px-6 md:px-10">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center press-link-focus group select-none py-1"
          aria-label="Virtanex Labs Home"
        >
          <MyCompanyLogoSVG className="h-8 md:h-9 w-auto text-[#111318] dark:text-[#FFFFFF] group-hover:opacity-90 transition-opacity" />
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
              className="press-font-barlow font-semibold text-[13px] uppercase tracking-[0.16em] text-[#111318]/75 hover:text-[#111318] dark:text-[#FFFFFF]/75 dark:hover:text-[#FFFFFF] transition-colors press-link-focus"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions: Theme toggler & CTA "Start a project" */}
        <div className="hidden md:flex items-center gap-4">
          <AnimatedThemeToggler
            variant="circle"
            className="flex h-8 w-8 items-center justify-center text-[#111318] dark:text-[#FFFFFF] hover:bg-[#111318]/5 dark:hover:bg-white/10 transition-colors [&_svg]:size-4 press-link-focus cursor-pointer"
            aria-label="Toggle theme"
          />

          <Link
            href="/contact"
            className="press-font-barlow font-semibold text-[13px] uppercase tracking-[0.14em] px-5 py-3 rounded-none bg-[#111318] text-[#FBF9F5] hover:bg-primary hover:text-white dark:bg-white dark:text-[#0D0E12] dark:hover:bg-primary dark:hover:text-white transition-colors press-link-focus shadow-xs"
          >
            Start a project
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <AnimatedThemeToggler
            variant="circle"
            className="flex h-8 w-8 items-center justify-center text-[#111318] dark:text-[#FFFFFF] hover:bg-[#111318]/5 dark:hover:bg-white/10 transition-colors [&_svg]:size-4 press-link-focus cursor-pointer"
            aria-label="Toggle theme"
          />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center text-[#111318] dark:text-[#FFFFFF] hover:bg-[#111318]/5 dark:hover:bg-white/10 transition-colors press-link-focus"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-[#111318]/10 dark:border-border/40 bg-[#FBF9F5] dark:bg-[#0D0E12] px-6 py-6 flex flex-col gap-4 relative z-50 shadow-xl">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="press-font-barlow font-semibold text-[14px] uppercase tracking-[0.16em] text-[#111318] dark:text-[#FFFFFF] hover:text-primary transition-colors py-2 border-b border-[#111318]/10 dark:border-border/30"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center press-font-barlow font-semibold text-[13px] uppercase tracking-[0.14em] px-5 py-3.5 bg-[#111318] text-[#FBF9F5] hover:bg-primary hover:text-white dark:bg-white dark:text-[#0D0E12] transition-colors shadow-xs"
            >
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
