import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Zap,
  LifeBuoy,
  Users2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Service Offers & Engagement Models — Virtanex Labs",
  description:
    "Explore our 3 core service offers: Development Partnership, Paid Automation Pilot, and Software Rescue Service. Fixed prices, clear deliverables, zero surprises.",
};

const OFFERS = [
  {
    id: "partnership",
    number: "Offer 01",
    name: "The Development Partnership",
    badge: "Long-Term Velocity",
    tagline: "Your dedicated senior engineering pod acting as your technical co-founder or high-velocity scaling squad.",
    targetAudience: "Funded tech startups, venture studios, and scaling SMBs that need consistent engineering throughput without 6-month hiring cycles.",
    timeline: "Monthly dedicated sprints (minimum 2 months)",
    pricing: "Fixed monthly retainer from €8,500 / month",
    icon: Users2,
    accent: "border-primary/40 bg-primary/5 text-primary",
    whatYouGet: [
      "Dedicated senior full-stack developers, cloud architects, and QA engineers",
      "Full ownership of your roadmap: Next.js web apps, mobile apps, and scalable backends",
      "Weekly live demos on staging environments with continuous zero-downtime deployments",
      "Direct integration into your Slack, Jira/Linear, and GitHub repositories",
      "Complete 100% IP and git commit transfer from day one",
      "Flexible headcount scaling up or down with simple 30-day notice",
    ],
    idealFor: "Companies needing to launch a product, scale features rapidly, or replace slow agency contractors.",
    cta: "Apply for Partnership",
    href: "/contact?offer=partnership",
  },
  {
    id: "pilot",
    number: "Offer 02",
    name: "Paid Automation & Integration Pilot",
    badge: "Fastest ROI",
    tagline: "A fixed 2–3 week pilot that automates your highest-friction operational bottleneck with verifiable ROI.",
    targetAudience: "Operations leaders, COOs, and business teams drowning in manual copy-pasting, disconnected SaaS tools, or invoice formatting.",
    timeline: "2–3 weeks fixed delivery",
    pricing: "Fixed pilot fee: €3,800 – €6,500 (one-time)",
    icon: Zap,
    accent: "border-amber-500/40 bg-amber-500/5 text-amber-500",
    whatYouGet: [
      "In-depth 90-minute operational process audit and architecture mapping",
      "Self-hosted enterprise automation pipeline (n8n, Python, or serverless microservices)",
      "Native bidirectional integration between your ERP, CRM (Salesforce/HubSpot), and databases",
      "Interactive Slack / Microsoft Teams approval bots with instant status alerts",
      "Zero per-task recurring SaaS tax (runs inside your own cloud infrastructure)",
      "Recorded team training session and comprehensive Standard Operating Procedure (SOP)",
    ],
    idealFor: "Teams wanting to test Virtanex Labs on a contained, high-ROI initiative before committing to larger projects.",
    cta: "Book Pilot Scoping",
    href: "/contact?offer=pilot",
  },
  {
    id: "rescue",
    number: "Offer 03",
    name: "Software Rescue & Codebase Turnaround",
    badge: "Emergency Triage",
    tagline: "Rapid diagnostic audit and engineering salvage for broken, slow, or abandoned codebases.",
    targetAudience: "Founders and CTOs dealing with ghosting contractors, chronic downtime, catastrophic regressions, or unmaintainable spaghetti code.",
    timeline: "48-hr initial diagnostic + 2–4 week turnaround sprint",
    pricing: "Fixed diagnostic audit (€2,400) + scoped remediation sprint",
    icon: LifeBuoy,
    accent: "border-rose-500/40 bg-rose-500/5 text-rose-500",
    whatYouGet: [
      "48-hour emergency codebase & cloud infrastructure audit report",
      "Rapid triage and hotfixes for critical security vulnerabilities, crashes, and memory leaks",
      "Database query optimization, connection pooling, and latency reductions",
      "Dependency modernizations, TypeScript strictification, and automated test coverage setup",
      "Clean CI/CD deployment pipelines replacing brittle manual server setups",
      "Clear technical roadmap detailing what to keep, what to refactor, and what to deprecate",
    ],
    idealFor: "Investors or companies holding software that is crashing, failing security audits, or blocked from shipping features.",
    cta: "Request Codebase Rescue",
    href: "/contact?offer=rescue",
  },
];

export default function OffersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="px-6 pt-24 pb-14 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-xs font-semibold text-primary mb-6">
            <Sparkles className="size-3.5" /> Company Readiness · 3 Core Service Offers
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            Three Predictable Ways <br />
            <span className="text-primary">To Work With Us</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you need a dedicated development partner, a focused automation pilot, or emergency rescue for a troubled codebase — every engagement has fixed milestones, zero hidden fees, and 100% IP ownership.
          </p>
        </section>

        {/* 3 Core Offers */}
        <section className="px-6 pb-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {OFFERS.map((offer) => {
              const Icon = offer.icon;
              return (
                <div
                  key={offer.id}
                  className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {offer.number}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${offer.accent}`}>
                        {offer.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-2xl bg-secondary text-foreground shrink-0 border border-border">
                        <Icon className="size-5" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground tracking-tight">
                        {offer.name}
                      </h2>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                      {offer.tagline}
                    </p>

                    {/* Pricing & Timeline Pill */}
                    <div className="p-4 rounded-2xl bg-secondary/40 border border-border/80 mb-6 space-y-1.5 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground font-medium">Pricing:</span>
                        <span className="font-bold text-foreground">{offer.pricing}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground font-medium">Timeline:</span>
                        <span className="font-semibold text-foreground">{offer.timeline}</span>
                      </div>
                    </div>

                    {/* Target Audience */}
                    <div className="mb-6">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                        Target Clients:
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {offer.targetAudience}
                      </p>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2.5 border-t border-border pt-6 mb-8">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                        What&apos;s Included:
                      </h3>
                      {offer.whatYouGet.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-snug text-foreground/90">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-border/60">
                    <Button
                      render={<Link href={offer.href} />}
                      nativeButton={false}
                      className="w-full justify-center"
                    >
                      <span>{offer.cta}</span>
                      <ArrowRight className="size-4 ml-1.5" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Trust Note */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl border border-border bg-secondary/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-base font-bold text-foreground">Need a custom scope or blended engagement?</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                We frequently tailor hybrid scopes for complex enterprise migrations and regulated industries.
              </p>
            </div>
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              variant="outline"
              className="shrink-0"
            >
              Book an Architecture Scoping Call
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

