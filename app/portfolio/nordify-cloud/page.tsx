import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  ShieldCheck,
  Zap,
  Server,
  Database,
  Cpu,
  Clock,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nordify Cloud Analytics Case Study — Virtanex Labs",
  description:
    "How Virtanex Labs engineered an enterprise real-time observability platform processing 50M+ events daily with sub-second queries on AWS and ClickHouse.",
};

export default function NordifyCaseStudyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Back Link & Breadcrumb */}
        <div className="max-w-5xl mx-auto px-6 pt-24 pb-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-3.5" /> Back to Portfolio
          </Link>
        </div>

        {/* Hero Section */}
        <section className="px-6 py-8 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-4">
            <Award className="size-3.5" /> Credible Portfolio Case Study 01
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            Nordify Cloud: Real-Time Observability at 50M+ Events / Day
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Nordify needed to replace an expensive, slow third-party analytics pipeline with a dedicated, sub-second telemetry platform. Virtanex Labs architected and delivered the complete solution in 10 weeks.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 p-5 rounded-2xl border border-border bg-card shadow-xs">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">3.2×</p>
              <p className="text-xs text-muted-foreground mt-0.5">Faster Query Response</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">50M+</p>
              <p className="text-xs text-muted-foreground mt-0.5">Events Daily Volume</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">-38%</p>
              <p className="text-xs text-muted-foreground mt-0.5">Cloud Hosting Costs</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">10 Wks</p>
              <p className="text-xs text-muted-foreground mt-0.5">Kickoff to Production</p>
            </div>
          </div>
        </section>

        {/* Working Demo Preview & Screenshot */}
        <section className="px-6 py-6 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-border overflow-hidden bg-card shadow-lg">
            <div className="border-b border-border/80 px-6 py-3 bg-muted/40 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-red-500/80" />
                <span className="size-3 rounded-full bg-amber-500/80" />
                <span className="size-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-muted-foreground">app.nordify.fi/telemetry</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-500">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" /> Live Telemetry Feed
              </span>
            </div>

            <div className="relative h-64 sm:h-96 w-full">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                alt="Nordify Cloud Telemetry Dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Deep-Dive Case Study Content */}
        <section className="px-6 py-12 max-w-5xl mx-auto space-y-12">
          {/* 1. The Challenge */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. The Challenge & Context</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Nordify provides mission-critical API gateway services to European financial institutions. As customer traffic surged past 50 million transactions daily, their existing Datadog and Elasticsearch analytics setup began costing over €18,000/month, while queries over 30-day historical windows frequently timed out. They required a high-concurrency, self-hosted columnar engine with sub-second P99 query latency, multi-tenant RBAC, and predictable hosting costs.
            </p>
          </div>

          {/* 2. Architecture & Technology Blueprint */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. System Architecture Blueprint</h2>
            <div className="p-6 rounded-2xl border border-border bg-secondary/30 space-y-4 font-mono text-xs text-foreground">
              <div className="flex items-center gap-2 text-primary font-bold">
                <Server className="size-4" /> INGESTION PIPELINE & STORAGE ARCHITECTURE
              </div>
              <div className="p-4 rounded-xl bg-card border border-border space-y-2">
                <p><strong>[1. Edge Ingestion]:</strong> Cloudflare Workers → AWS Network Load Balancer (NLB)</p>
                <p><strong>[2. Stream Buffering]:</strong> Apache Kafka cluster with snappy compression & partition keying</p>
                <p><strong>[3. Columnar Storage]:</strong> ClickHouse cluster on NVMe EBS volumes for sub-100ms aggregation</p>
                <p><strong>[4. Relational Metadata]:</strong> PostgreSQL for user identity, RBAC, alert rules, and audit logs</p>
                <p><strong>[5. Presentation Layer]:</strong> Next.js 15, React 19 Server Components, Tailwind CSS, TanStack Virtual</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {["Next.js 15", "ClickHouse", "Apache Kafka", "PostgreSQL", "AWS ECS", "Docker", "Terraform", "Tailwind CSS"].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-md text-xs font-semibold bg-secondary text-foreground border border-border">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 3. Honest Team Contribution */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. Honest Description of Team Contribution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl border border-border bg-card space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-500">What Virtanex Labs Built</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Designed the end-to-end ClickHouse schema with partitioned collapsing merge trees.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Engineered the Next.js telemetry frontend with canvas-rendered real-time streaming graphs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Wrote automated Terraform IaC modules for multi-AZ AWS ECS and Kafka provisioning.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Implemented automated Playwright E2E and k6 load testing under 100k events/sec.</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl border border-border bg-card space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">What Client Team Provided</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="size-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>Existing API gateway payloads and schema definitions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="size-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>Dedicated AWS account root access and SSO credentials.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="size-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>Participation in Friday staging demos and user acceptance testing (UAT).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. Client Verification & Handover */}
          <div className="p-6 sm:p-8 rounded-3xl border border-border bg-secondary/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase font-bold tracking-widest text-primary mb-1">Client Verification</p>
              <p className="text-base sm:text-lg font-semibold text-foreground italic">
                &ldquo;Virtanex Labs delivered our entire cloud analytics platform in 10 weeks — ahead of schedule and under budget. Nordic precision at its finest.&rdquo;
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                — Aleksi Mäkinen, Chief Technology Officer at Nordify Oy (Helsinki, Finland)
              </p>
            </div>

            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              className="shrink-0"
            >
              Discuss Your Platform Scope
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

