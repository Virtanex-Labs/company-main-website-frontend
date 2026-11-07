"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  LifeBuoy,
  Clock,
  AlertCircle,
  CheckCircle2,
  Terminal,
  Cpu,
  Server,
  Cloud,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";

const SLA_TIERS = [
  {
    tier: "P1 · Critical Outage",
    response: "< 15 minutes",
    resolution: "< 2 hours",
    description: "Production system down, core payment gateway offline, or active data breach/loss.",
    escalation: "Immediate pager duty alerts to Senior On-Call Engineer and CTO.",
    color: "text-rose-500 border-rose-500/30 bg-rose-500/5",
  },
  {
    tier: "P2 · Major Degradation",
    response: "< 1 hour",
    resolution: "< 8 hours",
    description: "Core feature degraded (e.g. slow API latency, intermittent background queue failure).",
    escalation: "Assigned directly to dedicated pod engineering lead with hourly client Slack updates.",
    color: "text-amber-500 border-amber-500/30 bg-amber-500/5",
  },
  {
    tier: "P3 · Minor Defect",
    response: "< 4 hours",
    resolution: "< 48 hours",
    description: "Non-critical UI bug, visual misalignment, or isolated edge-case affecting minority of users.",
    escalation: "Scheduled into immediate next sprint backlog with automated PR branch.",
    color: "text-blue-500 border-blue-500/30 bg-blue-500/5",
  },
  {
    tier: "P4 · General Inquiries & Feature Requests",
    response: "< 1 business day",
    resolution: "Next sprint cycle",
    description: "Questions on documentation, new feature proposals, or environment config adjustments.",
    escalation: "Handled through routine Slack Connect channel or Notion workspace.",
    color: "text-muted-foreground border-border bg-muted/20",
  },
];

const COMPANY_SUPPORT_PROMPT = `You are the Lead Support Engineer at Virtanex Labs, a premier Finnish software engineering studio.
Your role is to diagnose, triage, and draft clear, respectful, and highly technical resolutions for client support tickets.

When responding to an incoming support request:
1. TICKET CLASSIFICATION:
   - Identify Severity (P1 Critical, P2 Major, P3 Minor, P4 Inquiry).
   - Identify Affected Systems (Frontend Next.js, API microservice, Database, Cloudflare CDN, Background Workers).
   - Isolate Reproducible Steps: What exact user action or API payload triggered the defect?

2. ROOT CAUSE HYPOTHESIS:
   - Formulate 2-3 specific technical hypotheses based on system architecture.
   - Specify the exact log queries (Datadog, AWS CloudWatch, Sentry) needed to confirm or rule out each hypothesis.

3. IMMEDIATE MITIGATION vs PERMANENT FIX:
   - Immediate Workaround: How can we restore client service within 15 minutes?
   - Permanent Engineering Fix: What code change, database migration, or infrastructure modification is required?
   - Regression Prevention: What Vitest unit test or Playwright E2E test will prevent recurrence?

4. CLIENT COMMUNICATION DRAFT:
   - Tone: Professional, calm, empathetic, and transparent (Nordic engineering culture).
   - Acknowledge the exact impact on their operations.
   - Explain what is happening in plain business terms, followed by clear next steps and an estimated update time.`;

const CLOUD_INCIDENT_PROMPT = `You are the Cloud Infrastructure & SRE Specialist at Virtanex Labs.
Your role is to diagnose production cloud anomalies across AWS, Vercel, Supabase, and Cloudflare, pinpoint root causes, and output exact CLI remediation commands.

SYSTEM CONTEXT:
- Architecture: Next.js 15 frontend on Vercel/ECS, microservices on AWS ECS Fargate, PostgreSQL (Supabase/RDS), ClickHouse, Redis, Cloudflare Edge.
- Observability: OpenTelemetry, Prometheus/Grafana, Sentry error tracking.

INCIDENT TRIAGE PROTOCOL:
1. HEALTH & METRICS ASSESSMENT:
   - CPU / Memory utilization on container tasks (OOM check).
   - Database connection pool exhaustion vs slow locking queries (pg_stat_activity).
   - Cloudflare / Vercel Edge 5xx error rate spikes vs origin server response times.
   - Cache hit ratios and Redis memory saturation.

2. LOG TRIAGE & TRACE ANALYSIS:
   - Extract the highest-frequency 500 error stack traces from Sentry/CloudWatch.
   - Identify if the failure is upstream (third-party payment/AI API timeout) or internal.

3. REMEDIATION RUNBOOK (Provide Exact Shell / CLI Commands):
   - Scale ECS service: aws ecs update-service --cluster <cluster> --service <service> --desired-count <n>
   - Restart container tasks gracefully without dropped requests.
   - Kill blocking PostgreSQL queries: SELECT pg_terminate_backend(pid) FROM pg_stat_activity...
   - Cloudflare cache purge / Under Attack mode toggle if DDoS is suspected.

4. POST-MORTEM & ACTIONABLE PREVENTION:
   - Root Cause Analysis (5 Whys).
   - Preventive Terraform / IaC rule updates to automate self-healing.`;

export default function SupportProcessPage() {
  const [copiedCompany, setCopiedCompany] = useState(false);
  const [copiedCloud, setCopiedCloud] = useState(false);

  const handleCopy = (text: string, isCloud: boolean) => {
    navigator.clipboard.writeText(text);
    if (isCloud) {
      setCopiedCloud(true);
      setTimeout(() => setCopiedCloud(false), 2500);
    } else {
      setCopiedCompany(true);
      setTimeout(() => setCopiedCompany(false), 2500);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="px-6 pt-24 pb-12 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-xs font-semibold text-primary mb-6">
            <Sparkles className="size-3.5" /> Company Readiness Checklist [Item 7]
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            Customer Support Process & <br />
            <span className="text-primary">Cloud Incident Protocol</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transparent SLAs, structured escalation paths, 24/7 cloud monitoring runbooks, and production-ready AI triage prompts for internal company support and cloud infrastructure incidents.
          </p>
        </section>

        {/* SLA Matrix Table */}
        <section className="px-6 pb-16 max-w-5xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground">1. SLA Response & Resolution Matrix</h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">Guaranteed response windows based on business criticality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SLA_TIERS.map((tier) => (
              <div
                key={tier.tier}
                className="rounded-3xl border border-border bg-card p-6 shadow-xs space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${tier.color}`}>
                    {tier.tier}
                  </span>
                  <div className="text-right text-xs">
                    <span className="text-muted-foreground">Response: </span>
                    <strong className="text-foreground">{tier.response}</strong>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed">
                  {tier.description}
                </p>

                <div className="pt-3 border-t border-border/60 text-xs space-y-1.5 text-muted-foreground">
                  <p><strong>Target Resolution:</strong> {tier.resolution}</p>
                  <p><strong>Escalation Path:</strong> {tier.escalation}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support Channels & Escalation Path */}
        <section className="px-6 pb-16 max-w-5xl mx-auto">
          <div className="p-8 rounded-3xl border border-border bg-secondary/30 space-y-6">
            <h2 className="text-xl font-bold text-foreground">2. Communication Channels & Escalation Protocol</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
              <div className="p-5 rounded-2xl bg-card border border-border space-y-2">
                <div className="flex items-center gap-2 font-bold text-foreground">
                  <MessageSquare className="size-4 text-primary" /> Dedicated Slack Connect
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Direct shared Slack channel connecting your engineering leads with our on-call pod engineers.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-card border border-border space-y-2">
                <div className="flex items-center gap-2 font-bold text-foreground">
                  <LifeBuoy className="size-4 text-primary" /> Priority Helpdesk Email
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Automated ticket routing (support@virtanexlabs.com) with guaranteed webhook delivery alerts.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-card border border-border space-y-2">
                <div className="flex items-center gap-2 font-bold text-foreground">
                  <ShieldCheck className="size-4 text-primary" /> PagerDuty Emergency Line
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Direct phone escalation and automated SMS triggers for P1 production outages active 24/7/365.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ready AI Prompts Section: Company & Cloud */}
        <section className="px-6 pb-24 max-w-5xl mx-auto space-y-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-3">
              <Cpu className="size-3.5" /> Prompt Ready for Company and Cloud
            </div>
            <h2 className="text-2xl font-bold text-foreground">3. Production-Ready AI Triage Prompts</h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Standardized AI prompt templates utilized by our engineering team and automated monitoring agents for immediate triage.
            </p>
          </div>

          {/* Prompt 1: Company Support Triage */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <Terminal className="size-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">Company Support Triage Prompt</h3>
                  <p className="text-xs text-muted-foreground">Standardized prompt for ticket classification and client communications.</p>
                </div>
              </div>

              <Button
                onClick={() => handleCopy(COMPANY_SUPPORT_PROMPT, false)}
                variant="outline"
                size="sm"
                className="gap-1.5 cursor-pointer shrink-0"
              >
                {copiedCompany ? <Check className="size-3.5 text-emerald-500" /> : <Copy className="size-3.5" />}
                <span>{copiedCompany ? "Copied!" : "Copy Company Prompt"}</span>
              </Button>
            </div>

            <pre className="p-4 sm:p-5 rounded-2xl bg-muted/50 border border-border/80 font-mono text-[11px] sm:text-xs text-foreground/90 whitespace-pre-wrap overflow-x-auto leading-relaxed">
              {COMPANY_SUPPORT_PROMPT}
            </pre>
          </div>

          {/* Prompt 2: Cloud Incident & SRE Runbook */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <Cloud className="size-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">Cloud Incident & SRE Triage Prompt</h3>
                  <p className="text-xs text-muted-foreground">Automated cloud alert diagnosis and CLI remediation command generator.</p>
                </div>
              </div>

              <Button
                onClick={() => handleCopy(CLOUD_INCIDENT_PROMPT, true)}
                variant="outline"
                size="sm"
                className="gap-1.5 cursor-pointer shrink-0"
              >
                {copiedCloud ? <Check className="size-3.5 text-emerald-500" /> : <Copy className="size-3.5" />}
                <span>{copiedCloud ? "Copied!" : "Copy Cloud Prompt"}</span>
              </Button>
            </div>

            <pre className="p-4 sm:p-5 rounded-2xl bg-muted/50 border border-border/80 font-mono text-[11px] sm:text-xs text-foreground/90 whitespace-pre-wrap overflow-x-auto leading-relaxed">
              {CLOUD_INCIDENT_PROMPT}
            </pre>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

