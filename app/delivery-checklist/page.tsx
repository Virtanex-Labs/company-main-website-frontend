"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Circle,
  ShieldCheck,
  Code2,
  FileCheck,
  Server,
  Database,
  Lock,
  Sparkles,
  Printer,
  Copy,
  Check,
  ArrowRight,
  Terminal,
} from "lucide-react";

interface DeliveryPhase {
  id: string;
  number: string;
  title: string;
  icon: React.ElementType;
  description: string;
  checks: string[];
}

const DELIVERY_PHASES: DeliveryPhase[] = [
  {
    id: "code-review",
    number: "01",
    title: "Code Review & Quality Gates",
    icon: Code2,
    description: "Strict peer code review and static analysis enforcement before any code hits staging or main branches.",
    checks: [
      "Zero TypeScript compilation warnings with 'strict: true' enabled in tsconfig.",
      "ESLint and Prettier passing in automated GitHub Actions CI with zero errors.",
      "Clean git history with conventional semantic commits (feat, fix, refactor, chore).",
      "Two senior engineer approvals required on all Pull Requests with branch protection rules.",
      "Elimination of deprecated packages, unused dependencies, and console logging statements.",
    ],
  },
  {
    id: "testing",
    number: "02",
    title: "Automated Testing Suite",
    icon: FileCheck,
    description: "Comprehensive multi-tier automated test suites validating business logic, UI interactions, and API contracts.",
    checks: [
      "Unit & integration tests passing with Vitest / Jest across all business logic and utils.",
      "End-to-End (E2E) automated browser test suite with Playwright covering critical conversion funnels.",
      "REST & GraphQL API test harnesses validating HTTP response codes, error schemas, and pagination.",
      "Cross-browser matrix testing verified across Chrome, Safari, Firefox, iOS Mobile Safari, and Android.",
      "k6 performance load testing verifying sub-200ms latency under peak concurrent user loads.",
    ],
  },
  {
    id: "security",
    number: "03",
    title: "Security Checks & Vulnerability Hardening",
    icon: Lock,
    description: "Rigorous adherence to OWASP Top 10 security standards and zero-trust cloud architectural patterns.",
    checks: [
      "Automated dependency vulnerability audits (pnpm audit / Snyk) with zero high or critical CVEs.",
      "Strict Content Security Policy (CSP), HSTS, X-Frame-Options, and CORS headers configured.",
      "Zero API keys, database secrets, or credentials committed in git (verified via Gitleaks pre-commit).",
      "Role-Based Access Control (RBAC) and row-level database security (RLS) policies tested.",
      "All network communications enforced over TLS 1.3 with automated SSL certificate renewal.",
    ],
  },
  {
    id: "documentation",
    number: "04",
    title: "Technical Documentation & Runbooks",
    icon: Terminal,
    description: "Complete architectural blueprints and operational runbooks ensuring zero vendor dependency.",
    checks: [
      "Comprehensive README.md with one-command local developer environment setup instructions.",
      "Documented environment variable catalog (.env.example) describing every required secret.",
      "Interactive OpenAPI / Swagger specifications for all public and internal RESTful endpoints.",
      "System architecture diagram illustrating service boundaries, data flows, and third-party APIs.",
      "Standard Operating Procedure (SOP) runbooks for database migrations and routine maintenance.",
    ],
  },
  {
    id: "deployment",
    number: "05",
    title: "Zero-Downtime Deployment & Observability",
    icon: Server,
    description: "Production infrastructure automated through Infrastructure as Code with multi-region edge caching.",
    checks: [
      "Infrastructure fully codified in Terraform / Pulumi for 100% reproducible environments.",
      "Automated CI/CD deployment pipelines on Vercel / AWS ECS with zero-downtime rolling deploys.",
      "Global Edge CDN configured for static asset caching, image optimization, and DDoS mitigation.",
      "Automated health-check endpoints (/api/health) monitoring database, cache, and queue connections.",
      "Real-time error tracking and alerting configured (Sentry, Datadog, or OpenTelemetry).",
    ],
  },
  {
    id: "backups",
    number: "06",
    title: "Automated Backups & Disaster Recovery",
    icon: Database,
    description: "Resilient automated snapshotting and verified point-in-time recovery protocols.",
    checks: [
      "Automated daily snapshot backups configured with minimum 30-day retention policies.",
      "Point-in-Time Recovery (PITR) enabled for production relational databases.",
      "Off-site encrypted backup replication stored in geographically isolated secondary cloud storage.",
      "Disaster recovery test completed: verified successful database restore drill in staging under 15 minutes.",
      "RPO (Recovery Point Objective) < 1 hour and RTO (Recovery Time Objective) < 2 hours guaranteed.",
    ],
  },
  {
    id: "handover",
    number: "07",
    title: "Client Handover & Post-Launch Warranty",
    icon: ShieldCheck,
    description: "Transparent knowledge transfer, root credential handoff, and ongoing warranty coverage.",
    checks: [
      "100% root ownership of Git repositories, cloud accounts, and domain DNS transferred to Client.",
      "Recorded video code walkthrough session conducted with Client technical leadership.",
      "Formal user acceptance sign-off document executed by both parties.",
      "60-day post-launch warranty period initiated covering zero-cost regression and bug fixes.",
      "Transition runbook provided for ongoing tier-1 support or optional monthly retainer support.",
    ],
  },
];

export default function DeliveryChecklistPage() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  const toggleCheck = (checkId: string) => {
    setCheckedItems((prev) => ({ ...prev, [checkId]: !prev[checkId] }));
  };

  const totalChecks = DELIVERY_PHASES.reduce((acc, p) => acc + p.checks.length, 0);
  const completedChecks = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedChecks / totalChecks) * 100);

  const handleCopyChecklist = () => {
    const text = DELIVERY_PHASES.map((p) => `### Phase ${p.number}: ${p.title}\n${p.description}\n${p.checks.map(c => `[ ] ${c}`).join("\n")}`).join("\n\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="px-6 pt-24 pb-12 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-xs font-semibold text-primary mb-6">
            <Sparkles className="size-3.5" /> Company Readiness Checklist [Item 6]
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            Engineering Delivery & <br />
            <span className="text-primary">QA Production Checklist</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nordic engineering rigor in practice. Every system built by Virtanex Labs must satisfy all 7 quality gates before deploying to production.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              onClick={handleCopyChecklist}
              size="default"
              className="gap-2 cursor-pointer"
            >
              {copied ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4" />}
              <span>{copied ? "Copied Checklist!" : "Copy QA Checklist (Markdown)"}</span>
            </Button>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-lg border border-border text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Printer className="size-3.5" />
              <span>Print QA Document</span>
            </button>
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              variant="outline"
              size="default"
              className="gap-1.5"
            >
              <span>Schedule Engineering Review</span>
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </section>

        {/* Progress Tracker */}
        <section className="px-6 pb-6 max-w-5xl mx-auto">
          <div className="p-4 sm:p-5 rounded-2xl border border-border bg-card shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary/10 text-primary font-bold text-xs">
                {completedChecks} / {totalChecks}
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">Production Verification Score</p>
                <p className="text-[11px] text-muted-foreground">Interactive verification for production releases and client handover sign-off.</p>
              </div>
            </div>
            <div className="w-full sm:w-48 bg-secondary rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-primary h-full transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </section>

        {/* 7 Phases */}
        <section className="px-6 pb-24 max-w-5xl mx-auto space-y-8">
          {DELIVERY_PHASES.map((phase) => {
            const Icon = phase.icon;
            const phaseChecksCompleted = phase.checks.filter((c, idx) => checkedItems[`${phase.id}-${idx}`]).length;
            const isPhaseDone = phaseChecksCompleted === phase.checks.length;

            return (
              <div
                key={phase.id}
                className={`rounded-3xl border p-6 sm:p-8 transition-all duration-300 bg-card ${
                  isPhaseDone
                    ? "border-emerald-500/60 shadow-sm bg-emerald-500/[0.02]"
                    : "border-border shadow-xs hover:border-primary/40"
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-2xl bg-secondary text-foreground shrink-0 border border-border mt-0.5">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-primary uppercase tracking-wider">
                        Phase {phase.number} · {phaseChecksCompleted}/{phase.checks.length} Verified
                      </span>
                      <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mt-0.5">
                        {phase.title}
                      </h2>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 pl-0 sm:pl-12">
                  {phase.description}
                </p>

                {/* Checks List */}
                <div className="space-y-3 pl-0 sm:pl-12 border-t border-border/60 pt-5">
                  {phase.checks.map((check, idx) => {
                    const checkKey = `${phase.id}-${idx}`;
                    const isChecked = !!checkedItems[checkKey];

                    return (
                      <div
                        key={idx}
                        onClick={() => toggleCheck(checkKey)}
                        className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                          isChecked
                            ? "border-emerald-500/40 bg-emerald-500/5 text-foreground"
                            : "border-border/60 bg-muted/20 hover:bg-muted/40 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <button
                          type="button"
                          className="mt-0.5 shrink-0 text-muted-foreground hover:text-foreground"
                          aria-label={isChecked ? "Uncheck" : "Check"}
                        >
                          {isChecked ? (
                            <CheckCircle2 className="size-4 text-emerald-500" />
                          ) : (
                            <Circle className="size-4" />
                          )}
                        </button>
                        <span className="text-xs font-medium leading-relaxed">
                          {check}
                        </span>
                      </div>
                    );
                  })}
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

