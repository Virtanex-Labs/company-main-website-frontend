import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { GitHubSVG, LinkedInSVG, XSvg } from "@/components/SVGS";

const footerLinks = {
  Services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Mobile Apps", href: "/services/mobile-apps" },
    { label: "Custom Software", href: "/services/custom-software" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "AI Automation", href: "/services/ai-automation" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20 px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 w-fit group mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
                V
              </span>
              <span className="text-sm font-semibold text-foreground">Virtanex Labs</span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[220px] mb-5">
              {siteConfig.tagline} Finland-based. Globally trusted.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
              >
                <GitHubSVG className="size-3.5" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
              >
                <LinkedInSVG className="size-3.5" />
              </a>
              <a
                href={siteConfig.socials.x}
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter"
                className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
              >
                <XSvg className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <p className="text-xs font-semibold text-foreground mb-4 uppercase tracking-widest">
                {col}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            © 2025 {siteConfig.legalName} · All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made with ♥ in Helsinki, Finland 🇫🇮
          </p>
        </div>
      </div>
    </footer>
  );
}
