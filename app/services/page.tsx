import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Services } from "@/components/sections/Services";
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  Users,
  Repeat,
  FileCheck,
  Terminal,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Services & Capabilities — Virtanex Labs",
  description:
    "Explore Virtanex Labs' master list of enterprise engineering capabilities: Custom Software Development, AI & Machine Learning, Data Engineering, System Integration, Automation, DevOps, Product Engineering, QA, and Technical Consulting.",
};

const ENGAGEMENT_MODELS = [
  {
    icon: ShieldCheck,
    title: "Fixed-Price Milestones",
    badge: "Most Popular for New Products",
    description:
      "Ideal for well-scoped MVPs, custom enterprise applications, and distinct integration projects. Scope, price, and deliverables are locked upfront.",
    perks: [
      "100% guaranteed delivery date with zero budget creep",
      "Staged payments tied directly to verified milestone demos",
      "Complete IP transfer and git repository handover on launch",
      "Comprehensive post-launch 30-day warranty & bug-fix window",
    ],
    ctaText: "Discuss Fixed-Price Project",
  },
  {
    icon: Users,
    title: "Dedicated Engineering Pod",
    badge: "Continuous Feature Velocity",
    description:
      "Senior full-stack developers, AI specialists, and QA engineers who integrate directly into your sprint rituals, Slack channels, and code repositories.",
    perks: [
      "Senior-only European engineers (minimum 5+ years experience)",
      "Direct daily Slack standups, PR reviews, and sprint planning",
      "Flexible monthly team scaling up or down with 30-day notice",
      "Zero recruitment overhead, benefits, or hardware management",
    ],
    ctaText: "Request Pod Availability",
  },
  {
    icon: Repeat,
    title: "Technical Advisory & Retainer",
    badge: "For CTOs & Scaling Teams",
    description:
      "Strategic architecture reviews, cloud cost optimization, continuous security audits, and guaranteed SLA response times for live systems.",
    perks: [
      "Objective, vendor-neutral technology and stack recommendations",
      "Scheduled monthly security patching and infrastructure audits",
      "Guaranteed priority incident response SLA for critical outages",
      "Targeted codebase reviews before major investor or M&A diligence",
    ],
    ctaText: "Book Architecture Review",
  },
];

const TRUST_PILLARS = [
  {
    icon: FileCheck,
    title: "100% IP & Source Handover",
    description:
      "From day one, all code, git history, database schemas, and architectural blueprints belong completely to your company. Zero vendor lock-in.",
  },
  {
    icon: Lock,
    title: "Enterprise Security & NDA",
    description:
      "We sign mutual NDAs before reviewing proprietary specs. All solutions are architected to comply with GDPR, ISO 27001, and SOC2 requirements.",
  },
  {
    icon: Terminal,
    title: "Zero-Debt Engineering",
    description:
      "Strict TypeScript end-to-end, modular domain-driven architectures, automated testing pipelines, and thorough documentation runbooks.",
  },
  {
    icon: Zap,
    title: "Predictable Delivery",
    description:
      "Weekly working software demos. You inspect actual progress inside staging environments—not endless slide decks or abstract status reports.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="relative px-6 pt-24 pb-16 border-b border-border/40 bg-secondary/15">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-card text-foreground/80 border border-border/70 mb-6 shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Virtanex Labs Capability Profile
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.12]">
              Master Engineering Services & <br />
              <span className="text-muted-foreground font-normal">Technical Capabilities</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We provide senior software engineering, enterprise AI systems, resilient data pipelines, and mission-critical cloud integrations. Engineered with Nordic precision, strict type safety, and transparent execution.
            </p>

            {/* Quick Stats / Signals */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
              <div className="p-3.5 rounded-xl border border-border/60 bg-card">
                <span className="text-xs text-muted-foreground uppercase font-semibold">Focus Areas</span>
                <p className="text-sm font-bold text-foreground mt-0.5">Software, AI & Data</p>
              </div>
              <div className="p-3.5 rounded-xl border border-border/60 bg-card">
                <span className="text-xs text-muted-foreground uppercase font-semibold">IP Ownership</span>
                <p className="text-sm font-bold text-foreground mt-0.5">100% Client-Owned</p>
              </div>
              <div className="p-3.5 rounded-xl border border-border/60 bg-card">
                <span className="text-xs text-muted-foreground uppercase font-semibold">Code Standard</span>
                <p className="text-sm font-bold text-foreground mt-0.5">Strict TypeScript</p>
              </div>
              <div className="p-3.5 rounded-xl border border-border/60 bg-card">
                <span className="text-xs text-muted-foreground uppercase font-semibold">Engagement</span>
                <p className="text-sm font-bold text-foreground mt-0.5">Fixed or Sprints</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Master Services List & Capabilities Section */}
        <Services />

        {/* Why Clients Trust Virtanex Labs */}
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-border/40">
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              The Virtanex Standard
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Why Forward-Thinking Leaders Trust Our Engineering
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              We eliminate the common pitfalls of traditional IT consultancies—opaque billing, junior developer handoffs, and brittle codebases that create vendor lock-in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl border border-border/70 bg-card shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-secondary w-fit text-foreground mb-5 border border-border/40">
                    <pillar.icon className="size-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{pillar.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Flexible Engagement Models */}
        <section className="py-20 px-6 max-w-7xl mx-auto border-t border-border/40">
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Predictable Collaboration
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              How We Partner With Your Team
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Select the collaboration model that matches your product maturity, internal team bandwidth, and delivery schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ENGAGEMENT_MODELS.map((model) => (
              <div
                key={model.title}
                className="flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-7 sm:p-8 shadow-xs hover:border-foreground/30 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-xl bg-secondary text-foreground border border-border/50">
                      <model.icon className="size-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-muted-foreground bg-secondary/80 px-2.5 py-1 rounded-md border border-border/40">
                      {model.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2.5">{model.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {model.description}
                  </p>

                  <div className="pt-4 border-t border-border/50 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-3">
                      Included Commitments
                    </p>
                    <ul className="space-y-2.5">
                      {model.perks.map((perk, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                          <CheckCircle2 className="size-3.5 text-foreground shrink-0 mt-0.5" />
                          <span className="leading-snug text-foreground/90">{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-2.5 px-4 rounded-xl border border-border/80 bg-secondary/40 text-foreground text-xs font-semibold hover:bg-foreground hover:text-background transition-colors text-center shadow-xs"
                >
                  {model.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Final Scoping CTA */}
        <section className="py-20 px-6 border-t border-border/40 bg-secondary/20 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Ready to Discuss Your Architecture?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mb-8 leading-relaxed">
              Book a direct 30-minute scoping session with our technical leads. We will review your requirements under mutual NDA and deliver an actionable technical proposal within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-foreground text-background text-xs font-semibold hover:bg-foreground/90 transition-colors shadow-xs"
              >
                Schedule Architecture Scoping
              </Link>
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-border/80 bg-card text-foreground text-xs font-semibold hover:bg-secondary transition-colors"
              >
                Explore Pricing & Packages
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
