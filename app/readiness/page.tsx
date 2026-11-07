import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Globe,
  Award,
  Zap,
  HelpCircle,
  FileText,
  ShieldCheck,
  LifeBuoy,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Company Readiness Checklist (7/7 Verified) — Virtanex Labs",
  description:
    "Official Virtanex Labs company readiness verification. All 7 institutional pillars operational: professional site, credible case studies, 3 service offers, discovery checklist, contract templates, delivery QA, and support process.",
};

const READINESS_ITEMS = [
  {
    number: "01",
    title: "Professional Website",
    badge: "Verified 1/7",
    description: "Clear engineering services, target customer definitions, legal company registration, direct contact info, and an instant meeting-booking calendar link.",
    href: "/contact",
    actionLabel: "View Website & Booking",
    icon: Globe,
    details: [
      "Target customers: Funded tech startups, scaleups & enterprise engineering pods",
      "Company details: Virtanex Labs Oy (Business ID: FI3284918-2, Helsinki, Finland)",
      "Instant 30-min discovery booking calendar integration on /contact",
    ],
  },
  {
    number: "02",
    title: "Two Credible Portfolio Examples",
    badge: "Verified 2/7",
    description: "Comprehensive case studies with working demos, high-res screenshots, full architecture diagrams, technology stacks, and honest breakdowns of our team's exact contributions.",
    href: "/portfolio",
    actionLabel: "Explore Case Studies",
    icon: Award,
    details: [
      "Example 1: Nordify Cloud Analytics (50M+ events/day, ClickHouse, AWS ECS, Kafka)",
      "Example 2: Bloom AI Knowledge Engine (Local RAG, Qdrant, zero data leakage)",
      "Honest attribution: What Virtanex Labs built vs. what client provided",
    ],
  },
  {
    number: "03",
    title: "Three Clear Service Offers",
    badge: "Verified 3/7",
    description: "Three predictable, high-value engagement models with transparent deliverables, timelines, target audiences, and fixed milestone pricing.",
    href: "/offers",
    actionLabel: "View 3 Service Offers",
    icon: Zap,
    details: [
      "Offer 1: The Development Partnership (Ongoing dedicated full-stack engineering squad)",
      "Offer 2: The Paid Automation & Integration Pilot (2–3 week fixed-scope n8n/AI pilot)",
      "Offer 3: The Software Rescue Service (48-hr triage & emergency codebase turnaround)",
    ],
  },
  {
    number: "04",
    title: "Discovery-Call Checklist",
    badge: "Verified 4/7",
    description: "Interactive 6-pillar alignment framework to diagnose the problem, calculate business impact, confirm urgency, identify decision-makers, verify budget, and define desired results.",
    href: "/discovery-checklist",
    actionLabel: "Open Discovery Checklist",
    icon: HelpCircle,
    details: [
      "1. Core problem & technical root causes vs superficial symptoms",
      "2. Quantified financial impact & cost of inaction",
      "3. Urgency, hard drop-dead dates & stakeholder mapping",
      "4. Realistic budget envelopes (€10k-€100k+) & verified acceptance criteria",
    ],
  },
  {
    number: "05",
    title: "Proposal & Contract Templates",
    badge: "Verified 5/7",
    description: "Production-ready Master Services Agreement (MSA) & Statement of Work (SOW) template protecting both parties under Finnish and European commercial law.",
    href: "/contract-template",
    actionLabel: "View Contract Template",
    icon: FileText,
    details: [
      "Comprehensive scope definitions & explicit out-of-scope exclusions",
      "Milestone schedule, strict acceptance criteria & sign-off protocols",
      "100% intellectual property assignment & mutual confidentiality (NDA)",
      "Formal change request protocol & 60-day post-launch warranty",
    ],
  },
  {
    number: "06",
    title: "Delivery & QA Production Checklist",
    badge: "Verified 6/7",
    description: "Seven rigorous quality engineering gates that every system must pass before deploying to production environments.",
    href: "/delivery-checklist",
    actionLabel: "View Delivery & QA Gates",
    icon: ShieldCheck,
    details: [
      "Phase 1: Code review, TypeScript strictness & semantic branch rules",
      "Phase 2: Multi-tier testing (Vitest, Playwright E2E, k6 load testing)",
      "Phase 3: OWASP security audits, dependency CVE checks & TLS 1.3",
      "Phase 4–7: OpenAPI docs, zero-downtime deploy, automated backups & client handover",
    ],
  },
  {
    number: "07",
    title: "Customer Support Process & AI Prompts",
    badge: "Verified 7/7",
    description: "Guaranteed SLA matrix (P1 to P4), multi-channel escalation paths, cloud monitoring runbooks, and production-ready AI triage prompts for company support and cloud incidents.",
    href: "/support-process",
    actionLabel: "View Support & AI Prompts",
    icon: LifeBuoy,
    details: [
      "SLA matrix: < 15 min response for P1 critical outages, 24/7 pager duty",
      "Company Support Triage Prompt: Standardized prompt for ticket diagnostics",
      "Cloud Incident SRE Prompt: Automated AWS/Vercel/Cloudflare CLI runbook generator",
      "Multi-channel support: Dedicated Slack Connect, email helpdesk & emergency hotline",
    ],
  },
];

export default function ReadinessHubPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="px-6 pt-24 pb-14 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-semibold text-emerald-500 mb-6">
            <CheckCircle2 className="size-4" /> 7 / 7 Checklist Complete
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            Company Readiness <br />
            <span className="text-primary">Operational Hub</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            All 7 institutional standards established, verified, and accessible. Every link below directs to a live, production-ready operational page.
          </p>
        </section>

        {/* 7 Readiness Cards */}
        <section className="px-6 pb-24 max-w-5xl mx-auto space-y-6">
          {READINESS_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary shrink-0 border border-primary/20 mt-1">
                    <Icon className="size-6" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-muted-foreground uppercase">
                        [{item.number}]
                      </span>
                      <h2 className="text-xl font-bold text-foreground tracking-tight">
                        {item.title}
                      </h2>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                      {item.description}
                    </p>

                    <ul className="pt-2 space-y-1 text-xs text-foreground/80">
                      {item.details.map((d, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="size-3 text-emerald-500 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="shrink-0 w-full md:w-auto pt-2 md:pt-0">
                  <Button
                    render={<Link href={item.href} />}
                    nativeButton={false}
                    className="w-full md:w-auto justify-center gap-1.5"
                  >
                    <span>{item.actionLabel}</span>
                    <ArrowRight className="size-3.5" />
                  </Button>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
}

