import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  Zap,
  Building2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing & Engagement Models — Virtanex Labs",
  description:
    "Predictable, transparent fixed-price milestones and engineering retainers. Zero surprise bills. 100% intellectual property ownership.",
};

const TIERS = [
  {
    name: "Startup MVP",
    tagline: "For early-stage founders looking to validate and launch fast.",
    startingAt: "€7,500",
    timeline: "4–8 weeks",
    popular: false,
    features: [
      "Complete Next.js web app or React Native mobile app",
      "Interactive Figma UI/UX prototype & design system",
      "Authentication & database schema (PostgreSQL)",
      "Stripe payment integration & core business logic",
      "Production cloud deployment (Vercel / Supabase)",
      "Weekly live staging demos & direct Slack access",
      "30 days post-launch warranty & bug fixes",
      "100% full IP and Git repository transfer",
    ],
    ctaText: "Launch Your MVP",
  },
  {
    name: "Growth Product Pod",
    tagline: "For scaling companies needing rapid feature velocity and senior engineers.",
    startingAt: "€14,500",
    timeline: "8–14 weeks",
    popular: true,
    features: [
      "Everything in Startup MVP",
      "Multi-platform deployment (Web + iOS + Android)",
      "AI Automation pipeline or Local RAG integration",
      "High-throughput microservices & background queues",
      "Automated CI/CD test suites (Vitest + Playwright)",
      "Advanced role-based permissions & audit logging",
      "60 days post-launch priority SLA & maintenance",
      "Architecture observability (Datadog / Sentry)",
    ],
    ctaText: "Scale Your Product",
  },
  {
    name: "Enterprise Bespoke",
    tagline: "For established businesses needing custom cloud backends and compliance.",
    startingAt: "Custom",
    timeline: "Flexible sprints",
    popular: false,
    features: [
      "Dedicated multi-disciplinary Finnish engineering squad",
      "Private on-premise LLM deployment (zero external API leakage)",
      "Custom ERP/CRM legacy data connectors and ETL bridges",
      "GDPR, ISO 27001, and SOC2 compliance architecture",
      "Multi-region high availability & Disaster Recovery (DR)",
      "24/7 dedicated engineering SLA & uptime guarantee",
      "Quarterly architecture & security audits",
      "Executive technical steering & board reporting",
    ],
    ctaText: "Consult Enterprise Team",
  },
];

const PRICING_FAQS = [
  {
    q: "How does fixed-price milestone billing work?",
    a: "We agree on a detailed scope, timeline, and total cost before kicking off. Payments are divided into 3 or 4 milestones tied to working demo approvals. You only pay when deliverables are verified.",
  },
  {
    q: "Are there any hidden costs or surprise change orders?",
    a: "None. If scope requirements change mid-project, we discuss trade-offs openly and provide a written addendum before doing any additional work.",
  },
  {
    q: "Who owns the intellectual property and code?",
    a: "You own 100% of all code, designs, and intellectual property. Complete transfer happens automatically upon milestone completion.",
  },
  {
    q: "What payment methods and currencies do you support?",
    a: "We bill in EUR via SEPA bank transfer or international wire. We can also accommodate USD or GBP for international clients.",
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="px-6 pt-24 pb-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-xs font-semibold text-primary mb-6">
            <ShieldCheck className="size-3.5" /> 100% Fixed-Price Guarantee
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            Transparent Pricing. <br />
            <span className="text-primary">Predictable Milestones.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            No runaway agency hourly clocks. Lock your scope, confirm your budget, and receive production-ready software on schedule.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="px-6 pb-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col justify-between rounded-3xl border p-8 shadow-sm transition-all duration-300 ${
                  tier.popular
                    ? "border-primary bg-card shadow-xl ring-2 ring-primary/20"
                    : "border-border bg-card/60"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground shadow-sm">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    {tier.tagline}
                  </p>

                  <div className="mb-6 border-b border-border pb-6">
                    <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-semibold mb-1">
                      Starting Investment
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-foreground">{tier.startingAt}</span>
                      <span className="text-xs text-muted-foreground">/ milestone scope</span>
                    </div>
                    <p className="text-xs text-primary font-medium mt-2">
                      Est. Timeline: {tier.timeline}
                    </p>
                  </div>

                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">
                    What&apos;s Included
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  render={<a href="/contact" />}
                  nativeButton={false}
                  variant={tier.popular ? "default" : "outline"}
                  size="lg"
                  className="w-full justify-center font-semibold"
                >
                  {tier.ctaText} <ArrowRight className="ms-2 size-4" />
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing FAQs */}
        <section className="py-20 px-6 bg-muted/20 border-t border-border/40">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Billing & Engagement Questions
            </h2>
            <div className="space-y-6">
              {PRICING_FAQS.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="text-sm font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Quote CTA */}
        <section className="py-20 px-6 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need a Custom Architecture or Team Pod?
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            Send us your brief. We will schedule a scoping call and provide a transparent itemized estimate.
          </p>
          <Button
            render={<a href="/contact" />}
            nativeButton={false}
            size="lg"
            className="px-8 py-3 text-sm font-semibold"
          >
            Request Custom Scope
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

