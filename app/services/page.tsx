import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BentoGrid, BentoCard } from "@/components/ui/Magic/bento-grid";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/Magic/scroll-based-velocity";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import {
  Globe,
  Smartphone,
  Code2,
  Palette,
  Bot,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Users,
  Repeat,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Services — Virtanex Labs",
  description:
    "End-to-end software development services from Helsinki, Finland. Web apps, mobile engineering, custom software, UI/UX, and AI automation.",
};

const serviceCards = [
  {
    name: "Web Development",
    description:
      "Full-stack Next.js and React web applications built with TypeScript, Tailwind CSS, high Lighthouse scores, and server-side performance.",
    Icon: Globe,
    href: "/services/web-development",
    cta: "Explore Web Engineering",
    className: "col-span-3 md:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
    ),
  },
  {
    name: "Mobile Apps",
    description:
      "Cross-platform iOS and Android applications developed with React Native and Flutter with native performance and 60fps animations.",
    Icon: Smartphone,
    href: "/services/mobile-apps",
    cta: "Explore Mobile Apps",
    className: "col-span-3 md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent pointer-events-none" />
    ),
  },
  {
    name: "Custom Software",
    description:
      "Mission-critical enterprise backends, microservices, PostgreSQL architectures, distributed caching, and zero-downtime APIs.",
    Icon: Code2,
    href: "/services/custom-software",
    cta: "Explore Custom Software",
    className: "col-span-3 md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
    ),
  },
  {
    name: "UI/UX Design",
    description:
      "Clean Nordic interfaces, scalable Figma design systems, WCAG 2.1 AA accessibility, and click-through interactive prototypes.",
    Icon: Palette,
    href: "/services/ui-ux-design",
    cta: "Explore Product Design",
    className: "col-span-3 md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-transparent pointer-events-none" />
    ),
  },
  {
    name: "AI Automation",
    description:
      "Production LLM pipelines, autonomous agent workflows, on-device AI inference, local RAG knowledge bases, and intelligent bots.",
    Icon: Bot,
    href: "/services/ai-automation",
    cta: "Explore AI Solutions",
    className: "col-span-3 md:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent pointer-events-none" />
    ),
  },
];

const ENGAGEMENT_MODELS = [
  {
    icon: ShieldCheck,
    title: "Fixed-Price Milestones",
    description:
      "Ideal for well-scoped MVPs and new product launches. We lock scope, price, and deadline upfront. No billing surprises.",
    perks: ["Guaranteed delivery date", "100% IP handover on launch", "Staged payments upon demo approval"],
  },
  {
    icon: Users,
    title: "Dedicated Engineering Pod",
    description:
      "Senior Finnish and European engineers integrated seamlessly into your workflow for ongoing feature velocity and tech leadership.",
    perks: ["Senior full-stack talent", "Direct daily Slack & Git access", "Flexible monthly scaling"],
  },
  {
    icon: Repeat,
    title: "Product Retainer & SLA",
    description:
      "Continuous optimization, regular security patching, 24/7 uptime monitoring, and priority sprint allocation for live products.",
    perks: ["Guaranteed response SLA", "Proactive infrastructure monitoring", "Monthly allocation for new features"],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative px-6 pt-24 pb-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-xs font-semibold text-primary mb-6">
            Engineering Capabilities
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
            World-Class Software <br />
            <span className="text-primary">Built with Nordic Precision</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From architecture to production rollout, we partner with founders and enterprise teams to engineer dependable digital products.
          </p>
        </section>

        {/* Bento Grid Services Overview */}
        <section className="px-6 pb-20 max-w-7xl mx-auto w-full">
          <BentoGrid>
            {serviceCards.map((svc) => (
              <BentoCard key={svc.name} {...svc} />
            ))}
          </BentoGrid>
        </section>

        {/* Scroll Velocity Ticker from Magic UI */}
        <section className="py-12 border-y border-border/40 bg-muted/20 overflow-hidden">
          <ScrollVelocityContainer>
            <ScrollVelocityRow
              baseVelocity={2}
              direction={1}
              className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-foreground/20 dark:text-foreground/15 py-1"
            >
              CLEAN CODE • ZERO TECH DEBT • TYPE-SAFE SYSTEMS • REACT 19 • CLOUD NATIVE •&nbsp;
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </section>

        {/* Engagement Models */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Flexible Collaboration
            </p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              How We Can Work Together
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Choose the model that fits your company stage and timeline best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ENGAGEMENT_MODELS.map((model) => (
              <div
                key={model.title}
                className="flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-8 shadow-sm hover:border-primary/40 hover:shadow-md transition-all"
              >
                <div>
                  <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-6">
                    <model.icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{model.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {model.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {model.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2.5 text-xs text-foreground/80">
                        <CheckCircle2 className="size-4 text-primary shrink-0" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  render={<a href="/contact" />}
                  nativeButton={false}
                  variant="outline"
                  className="w-full justify-center"
                >
                  Discuss This Model
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 border-t border-border/40 text-center bg-primary/5">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              Book a 30-minute scoping session. We will review your architecture and send a fixed proposal within 48 hours.
            </p>
            <Button
              render={<a href="/contact" />}
              nativeButton={false}
              size="lg"
              className="px-8 py-3 text-sm font-semibold"
            >
              Schedule Consultation <ArrowRight className="ms-2 size-4" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

