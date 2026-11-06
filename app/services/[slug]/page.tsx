import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Code2,
  Cpu,
  Database,
  Network,
  Workflow,
  Cloud,
  Rocket,
  Palette,
  CheckCircle2,
  Users2,
  Compass,
  ArrowLeft,
  Clock,
  Layers,
  Sparkles,
  FileCheck,
  Check,
} from "lucide-react";
import { SERVICES_LIST, getServiceBySlug } from "@/lib/services-data";

const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Cpu,
  Database,
  Network,
  Workflow,
  Cloud,
  Rocket,
  Palette,
  CheckCircle2,
  Users2,
  Compass,
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allSlugs = SERVICES_LIST.map((s) => ({ slug: s.slug }));
  // Legacy alias redirects/routes
  const legacySlugs = [
    { slug: "web-development" },
    { slug: "mobile-apps" },
    { slug: "custom-software" },
    { slug: "ui-ux-design" },
    { slug: "ai-automation" },
  ];
  return [...allSlugs, ...legacySlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found — Virtanex Labs",
    };
  }

  return {
    title: `${service.title} — Virtanex Labs Engineering`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const IconComponent = ICON_MAP[service.iconName] || Code2;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb & Navigation */}
        <div className="border-b border-border/40 bg-secondary/10 px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="size-3.5" /> Back to All Capabilities
            </Link>

            <span className="font-mono text-xs text-muted-foreground/60">
              Capability #{service.number}
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="px-6 pt-16 pb-16 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary text-foreground/80 border border-border/60 mb-5">
                <IconComponent className="size-3.5" />
                {service.categoryLabel}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
                {service.title}
              </h1>

              <p className="mt-4 text-base sm:text-lg font-medium text-muted-foreground leading-relaxed">
                {service.tagline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-foreground text-background text-xs font-semibold hover:bg-foreground/90 transition-colors shadow-xs"
                >
                  Schedule Scoping Consultation
                </Link>
                <Link
                  href="/pricing"
                  className="px-5 py-3 rounded-xl border border-border/80 bg-card text-foreground text-xs font-semibold hover:bg-secondary transition-colors"
                >
                  Engagement Models & Pricing
                </Link>
              </div>
            </div>

            {/* Quick Metadata Box */}
            <div className="lg:w-80 shrink-0 p-6 rounded-2xl border border-border/80 bg-card shadow-xs space-y-5">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Typical Timeline
                </span>
                <p className="text-sm font-bold text-foreground mt-0.5 flex items-center gap-1.5">
                  <Clock className="size-4 text-foreground/70" />
                  {service.timeline}
                </p>
              </div>

              <div className="pt-4 border-t border-border/50">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Engagement Model
                </span>
                <p className="text-xs font-medium text-foreground/90 mt-0.5 leading-snug">
                  {service.engagementPricing}
                </p>
              </div>

              <div className="pt-4 border-t border-border/50">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Trust & Governance
                </span>
                <p className="text-xs text-muted-foreground mt-1 leading-snug">
                  {service.clientTrustNote}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Description */}
        <section className="py-12 px-6 border-y border-border/40 bg-secondary/15">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Practice Overview
            </h2>
            <p className="text-sm sm:text-base text-foreground/90 leading-relaxed max-w-4xl font-normal">
              {service.longDescription}
            </p>
          </div>
        </section>

        {/* Capabilities & Deliverables Breakdown */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* What it includes */}
            <div className="p-7 sm:p-8 rounded-2xl border border-border/80 bg-card shadow-xs">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-lg bg-secondary text-foreground">
                  <Layers className="size-4" />
                </div>
                <h3 className="text-base font-bold text-foreground">
                  What This Practice Includes
                </h3>
              </div>

              <ul className="space-y-3">
                {service.whatItIncludes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground">
                    <Check className="size-4 text-foreground shrink-0 mt-0.5" />
                    <span className="leading-relaxed text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Production Deliverables */}
            <div className="p-7 sm:p-8 rounded-2xl border border-border/80 bg-card shadow-xs">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-lg bg-secondary text-foreground">
                  <FileCheck className="size-4" />
                </div>
                <h3 className="text-base font-bold text-foreground">
                  Production Deliverables Handed Over
                </h3>
              </div>

              <ul className="space-y-3">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tech Stack & Business Outcomes */}
        <section className="py-16 px-6 border-t border-border/40 bg-secondary/10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
                Core Technologies & Tooling
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-card text-foreground border border-border/70 shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Business Outcomes */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
                Target Business Outcomes
              </h3>
              <ul className="space-y-2.5">
                {service.businessOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                    <Sparkles className="size-3.5 text-foreground shrink-0 mt-0.5" />
                    <span className="leading-relaxed text-foreground/90 font-medium">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQs */}
        {service.faqs.length > 0 && (
          <section className="py-16 px-6 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-border/70 bg-card">
                  <h4 className="text-sm font-bold text-foreground mb-2">{faq.q}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="py-20 px-6 border-t border-border/40 text-center bg-card">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Ready to Scope This Requirement?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mb-8 leading-relaxed">
              Book a 30-minute scoping call. We will review your architecture under mutual NDA and deliver an actionable technical proposal within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-foreground text-background text-xs font-semibold hover:bg-foreground/90 transition-colors shadow-xs"
              >
                Schedule Technical Scoping
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-border/80 bg-secondary/50 text-foreground text-xs font-semibold hover:bg-secondary transition-colors"
              >
                View All 11 Capabilities
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
