import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { GitHubSVG, LinkedInSVG, XSvg, MyCompanyLogoSVG } from "@/components/SVGS";

const footerLinks = {
  Services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Custom Software", href: "/services/custom-software-development" },
    { label: "AI & Machine Learning", href: "/services/ai-machine-learning" },
    { label: "Data Engineering", href: "/services/data-engineering-analytics" },
    { label: "Process Automation", href: "/services/business-process-automation" },
    { label: "Cloud & DevOps", href: "/services/cloud-devops-engineering" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/portfolio" },
    { label: "3 Service Offers", href: "/offers" },
    { label: "Pricing Models", href: "/pricing" },
    { label: "Contact & Booking", href: "/contact" },
  ],
  Readiness: [
    { label: "Readiness Hub (7/7)", href: "/readiness" },
    { label: "Discovery Checklist", href: "/discovery-checklist" },
    { label: "Contract Template", href: "/contract-template" },
    { label: "Delivery & QA Gates", href: "/delivery-checklist" },
    { label: "Support & AI Prompts", href: "/support-process" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20 px-5 sm:px-6 pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-block group mb-3 sm:mb-4 select-none" aria-label="Virtanex Labs Home">
              <MyCompanyLogoSVG className="h-7 sm:h-8 md:h-9 w-auto text-foreground group-hover:opacity-90 transition-opacity" />
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[220px] mb-4 sm:mb-5">
              {siteConfig.tagline} Finland-based. Globally trusted.
            </p>
            {/* Socials */}
            <div className="flex gap-2.5 sm:gap-3">
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
