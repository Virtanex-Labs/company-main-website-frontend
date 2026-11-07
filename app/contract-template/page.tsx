"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Printer,
  Sparkles,
  ArrowRight,
  Lock,
  DollarSign,
  Scale,
  RefreshCw,
} from "lucide-react";

export default function ContractTemplatePage() {
  const [copied, setCopied] = useState(false);

  const handleCopyContract = () => {
    const text = document.getElementById("contract-document")?.innerText || "";
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
            <Sparkles className="size-3.5" /> Company Readiness Checklist [Item 5]
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            Standard Engineering <br />
            <span className="text-primary">Proposal & Contract Template</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our transparent master services agreement (MSA) and statement of work (SOW) template. Covers scope, exclusions, milestones, acceptance criteria, pricing, 100% IP transfer, NDA, and change requests.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              onClick={handleCopyContract}
              size="default"
              className="gap-2 cursor-pointer"
            >
              {copied ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4" />}
              <span>{copied ? "Copied Full Contract!" : "Copy Contract Template"}</span>
            </Button>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-lg border border-border text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Printer className="size-3.5" />
              <span>Print Agreement</span>
            </button>
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              variant="outline"
              size="default"
              className="gap-1.5"
            >
              <span>Request Custom Proposal</span>
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </section>

        {/* Contract Viewer Document */}
        <section className="px-6 pb-24 max-w-5xl mx-auto">
          <div
            id="contract-document"
            className="rounded-3xl border border-border bg-card p-8 sm:p-14 shadow-lg space-y-10 text-foreground"
          >
            {/* Agreement Header */}
            <div className="border-b border-border pb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Virtanex Labs Oy · Standard SOW</p>
                <h2 className="text-2xl font-bold text-foreground mt-1">Master Services Agreement & Statement of Work</h2>
                <p className="text-xs text-muted-foreground mt-1">Governing Law: Republic of Finland · Nordic Engineering Standards</p>
              </div>
              <div className="text-left sm:text-right font-mono text-xs text-muted-foreground">
                <p>Template ID: VL-SOW-2025-V2</p>
                <p>Status: Standard Binding Template</p>
              </div>
            </div>

            {/* Section 1: Scope of Work */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="font-mono text-xs p-1 rounded-md bg-secondary text-primary">01</span>
                Project Scope & Deliverables
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Virtanex Labs (&quot;Developer&quot;) agrees to design, engineer, and deploy the digital systems defined in the agreed Project Specification Document for the Client (&quot;Client&quot;). Deliverables comprise:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs text-muted-foreground">
                <li>Complete type-safe production application codebase adhering to modern TypeScript & Next.js/React standards.</li>
                <li>Production database schemas, migrations, and automated backups (PostgreSQL / ClickHouse).</li>
                <li>Configured CI/CD deployment pipelines on agreed infrastructure (AWS, Vercel, Hetzner, or Cloudflare).</li>
                <li>Interactive API documentation (OpenAPI / Swagger) and architectural runbooks for internal maintenance.</li>
              </ul>
            </div>

            {/* Section 2: Explicit Exclusions */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="font-mono text-xs p-1 rounded-md bg-secondary text-primary">02</span>
                Explicit Exclusions (Scope Boundary)
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                To prevent scope ambiguity and cost overruns, the following items are expressly excluded unless added via written Change Request Addendum:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs text-muted-foreground">
                <li>Direct recurring fees for third-party SaaS, cloud hosting (AWS/Vercel), domain purchases, or paid APIs.</li>
                <li>Creation of novel written marketing copywriting or professional photography (unless explicitly scoped in design sprints).</li>
                <li>Retroactive support for legacy web browsers that have been declared end-of-life (e.g. Internet Explorer).</li>
                <li>Feature enhancements requested after sign-off of the corresponding milestone.</li>
              </ul>
            </div>

            {/* Section 3: Milestones & Schedule */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="font-mono text-xs p-1 rounded-md bg-secondary text-primary">03</span>
                Milestone Schedule & Timelines
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Work proceeds in sequential, fixed-date milestones. Weekly live demos are conducted every Friday on staging environments:
              </p>
              <div className="p-4 rounded-2xl bg-secondary/30 border border-border/80 space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-border/50">
                  <span className="font-semibold text-foreground">Milestone 1: Architectural Blueprint & Figma UI Prototype</span>
                  <span className="font-mono text-muted-foreground">Weeks 1–3</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/50">
                  <span className="font-semibold text-foreground">Milestone 2: Core Full-Stack Engineering & API Integrations</span>
                  <span className="font-mono text-muted-foreground">Weeks 4–7</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/50">
                  <span className="font-semibold text-foreground">Milestone 3: QA Testing, E2E Verification & Security Audits</span>
                  <span className="font-mono text-muted-foreground">Weeks 8–9</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold text-foreground">Milestone 4: Zero-Downtime Deployment & Handover</span>
                  <span className="font-mono text-muted-foreground">Week 10</span>
                </div>
              </div>
            </div>

            {/* Section 4: Acceptance Criteria */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="font-mono text-xs p-1 rounded-md bg-secondary text-primary">04</span>
                Strict Acceptance Criteria
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Milestones are formally accepted when all predefined criteria are satisfied:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs text-muted-foreground">
                <li>Automated test suites pass with zero critical or blocking defects in staging environments.</li>
                <li>Lighthouse Core Web Vitals score passes agreed thresholds (Performance &gt; 90, Accessibility &gt; 95).</li>
                <li>Client has five (5) business days to review deliverables; written rejection must detail specific reproducible defects.</li>
              </ul>
            </div>

            {/* Section 5: Price & Payment Terms */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="font-mono text-xs p-1 rounded-md bg-secondary text-primary">05</span>
                Pricing & Payment Terms
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Engagements utilize a fixed-price milestone structure or monthly retainer. Payment terms are net 14 days via SEPA bank transfer, wire, or corporate card:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs text-muted-foreground">
                <li>Deposit: 30% upon mutual signing prior to project kickoff.</li>
                <li>Intermediate Progress: 40% upon successful demonstration of Milestone 2.</li>
                <li>Final Delivery: 30% upon final production deployment and code transfer.</li>
                <li>Late payments accrue interest under the Finnish Interest Act (Korkolaki).</li>
              </ul>
            </div>

            {/* Section 6: 100% Intellectual Property Assignment */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="font-mono text-xs p-1 rounded-md bg-secondary text-primary">06</span>
                100% Intellectual Property Assignment
              </h3>
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-foreground/90 leading-relaxed">
                <strong>Sole & Exclusive Ownership:</strong> Upon receipt of final payment for each milestone, Developer irrevocably assigns, transfers, and conveys to the Client all worldwide rights, title, and interest in and to all code, designs, documentation, and work product created specifically for the Client. Developer retains no licensing claim or proprietary lock-in.
              </div>
            </div>

            {/* Section 7: Confidentiality & NDA */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="font-mono text-xs p-1 rounded-md bg-secondary text-primary">07</span>
                Confidentiality & Non-Disclosure
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Both parties agree to treat all business information, customer databases, technical architectures, and financial terms as strictly confidential. This obligation survives termination of this agreement for a period of five (5) years. All data handling complies fully with European Union General Data Protection Regulation (GDPR) standards.
              </p>
            </div>

            {/* Section 8: Change Requests */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="font-mono text-xs p-1 rounded-md bg-secondary text-primary">08</span>
                Change Request Protocol
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Either party may propose modifications to project scope. If changes affect timeline or budget, Developer will submit a formal written Change Order specifying cost and schedule adjustments. No change work will commence until both parties sign the addendum.
              </p>
            </div>

            {/* Section 9: 60-Day Warranty */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="font-mono text-xs p-1 rounded-md bg-secondary text-primary">09</span>
                Post-Launch Warranty & Bug Fixes
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Developer warrants all custom software against defects and regressions for sixty (60) calendar days following final production deployment. Any deviations from approved specifications reported within this window will be remediated without additional charges.
              </p>
            </div>

            {/* Signatures Block */}
            <div className="border-t border-border pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs">
              <div className="space-y-3">
                <p className="font-bold text-foreground uppercase tracking-wider">Executed for Virtanex Labs Oy:</p>
                <div className="h-16 border-b border-dashed border-border" />
                <p className="text-muted-foreground">Authorized Officer · Helsinki, Finland</p>
              </div>

              <div className="space-y-3">
                <p className="font-bold text-foreground uppercase tracking-wider">Executed for Client:</p>
                <div className="h-16 border-b border-dashed border-border" />
                <p className="text-muted-foreground">Authorized Representative</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

