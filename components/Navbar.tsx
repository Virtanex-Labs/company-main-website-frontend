"use client";

import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isSolid = scrolled || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full h-[68px] sm:h-[76px] transition-all duration-300 ${
        isSolid
          ? "bg-background/95 dark:bg-background/95 backdrop-blur-xl border-b border-border/60 shadow-xs text-foreground"
          : "bg-transparent border-b border-transparent hover:bg-black/35 hover:backdrop-blur-md hover:border-white/10 text-white"
      }`}
    >
      <div className="mx-auto flex h-full items-center justify-between px-5 sm:px-8 md:px-12 max-w-7xl">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center group select-none py-1 focus-visible:outline-none"
          aria-label="Virtanex Labs Home"
        >
          <MyCompanyLogoSVG
            className={`h-7 sm:h-8 md:h-8.5 w-auto transition-colors group-hover:opacity-90 ${
              isSolid ? "text-foreground" : "text-white"
            }`}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                isSolid
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <AnimatedThemeToggler
            variant="circle"
            className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors [&_svg]:size-4 cursor-pointer ${
              isSolid
                ? "text-foreground hover:bg-muted/80"
                : "text-white hover:bg-white/15"
            }`}
            aria-label="Toggle theme"
          />

          <Link
            href="/contact"
            className={`text-xs font-semibold uppercase tracking-[0.14em] px-4.5 py-2.5 rounded-xl transition-all shadow-xs ${
              isSolid
                ? "bg-foreground text-background hover:opacity-90"
                : "bg-white/15 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-zinc-950"
            }`}
          >
            Start a project
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-1.5">
          <AnimatedThemeToggler
            variant="circle"
            className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors [&_svg]:size-4 cursor-pointer ${
              isSolid
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/15"
            }`}
            aria-label="Toggle theme"
          />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
              isSolid
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/15"
            }`}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="md:hidden fixed inset-x-0 top-[68px] sm:top-[76px] bottom-0 bg-background/98 backdrop-blur-2xl px-6 py-8 flex flex-col justify-between z-50 shadow-2xl text-foreground overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground px-2 mb-2">
              Menu Navigation
            </span>
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-muted/50 border-b border-border/30"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-border/50 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center text-xs font-semibold uppercase tracking-[0.14em] px-5 py-3.5 rounded-xl bg-foreground text-background hover:opacity-90 transition-all shadow-sm"
            >
              Start a project
            </Link>
            <p className="text-[11px] text-center text-muted-foreground">
              Virtanex Labs · Helsinki, FI
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
