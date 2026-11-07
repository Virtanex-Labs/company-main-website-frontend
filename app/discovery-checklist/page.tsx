"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Circle,
  HelpCircle,
  AlertTriangle,
  TrendingDown,
  Clock,
  Users2,
  DollarSign,
  Target,
  Sparkles,
  ArrowRight,
  Printer,
  Copy,
  Check,
} from "lucide-react";

interface ChecklistItem {
  id: string;
  category: string;
  icon: React.ElementType;
  title: string;
  objective: string;
  keyQuestions: string[];
  redFlags: string[];
}

const DISCOVERY_SECTIONS: ChecklistItem[] = [
  {
    id: "problem",
    category: "1. Core Problem & Root Cause",
    icon: AlertTriangle,
    title: "Uncovering What is Truly Broken",
    objective: "Differentiate between superficial symptoms and the underlying architectural or operational failure.",
    keyQuestions: [
      "What exact bottleneck or breakdown triggered you to seek outside engineering help now?",
      "How are your team or customers currently working around this problem on a daily basis?",
      "Have you attempted to solve this previously? What technologies or approaches failed and why?",
      "Is this an architectural scaling limit, a lack of senior engineering bandwidth, or missing specialized expertise (AI/DevOps)?",
    ],
    redFlags: [
      "Vague problem definition ('we just need an app') without a defined business workflow.",
      "Blaming previous developers without knowing what the actual codebase defect was.",
    ],
  },
  {
    id: "impact",
    category: "2. Quantified Business Impact",
    icon: TrendingDown,
    title: "Calculating the Cost of Inaction",
    objective: "Quantify the financial, operational, and customer trust cost of letting this problem persist.",
    keyQuestions: [
      "How much revenue, how many deals, or how many customer accounts are lost each month due to this issue?",
      "How many engineering or operational hours are wasted each week manually maintaining this workaround?",
      "What happens to the business if this problem is not solved within the next 90 days?",
      "What is the projected financial return or efficiency gain once this solution is live?",
    ],
    redFlags: [
      "No measurable business metric tied to the initiative ('it would just be nice to have').",
      "Executive leadership has not felt the financial pain of the problem.",
    ],
  },
  {
    id: "urgency",
    category: "3. Urgency & Hard Deadlines",
    icon: Clock,
    title: "Identifying the True Driving Timeline",
    objective: "Establish immovable dates, compliance requirements, or runway constraints driving the schedule.",
    keyQuestions: [
      "What is the hard drop-dead date for having this in production, and what event drives it (Board meeting, trade show, funding round)?",
      "Is the deadline realistic for production-grade engineering, or is a phased MVP milestone approach necessary?",
      "What regulatory, partner, or compliance obligations (GDPR, SOC2, customer SLAs) dictate timing?",
    ],
    redFlags: [
      "'We need it yesterday' but decision-makers take two weeks to reply to emails.",
      "Arbitrary deadlines disconnected from actual business dependencies.",
    ],
  },
  {
    id: "decision-maker",
    category: "4. Decision-Maker & Stakeholder Mapping",
    icon: Users2,
    title: "Ensuring Alignment at the Top",
    objective: "Map who evaluates the technical architecture, who holds budget authority, and who signs the contract.",
    keyQuestions: [
      "Who will be the primary technical stakeholder reviewing weekly staging demos and pull requests?",
      "Who holds final budget sign-off authority (CEO, CFO, Board of Directors)?",
      "Are there other internal teams (Security, Legal, Marketing) that must approve the engagement?",
      "What does your internal procurement and contract review cycle typically look like?",
    ],
    redFlags: [
      "Talking exclusively to non-decision makers who lack executive access to budget.",
      "Unclear consensus internally on whether outside engineering is supported.",
    ],
  },
  {
    id: "budget",
    category: "5. Realistic Budget Range & Unit Economics",
    icon: DollarSign,
    title: "Verifying Financial Feasibility",
    objective: "Confirm that expectations align with realistic senior European engineering rates.",
    keyQuestions: [
      "What budget envelope has been allocated for this initiative (€10k–€25k, €25k–€60k, or €60k+)?",
      "Is funding already secured and allocated, or contingent on an upcoming financing event?",
      "Do you prefer fixed-price milestone delivery or dedicated sprint-based team retainers?",
      "Are there ongoing cloud hosting budget limits we must architect around (AWS/GCP/Supabase)?",
    ],
    redFlags: [
      "Refusal to disclose any budget range while demanding complex enterprise features.",
      "Expecting enterprise-grade custom AI & cloud infrastructure on a €1,500 budget.",
    ],
  },
  {
    id: "result",
    category: "6. Desired Result & Acceptance Criteria",
    icon: Target,
    title: "Defining What 'Success' Looks Like",
    objective: "Pinpoint clear, verifiable acceptance criteria for milestone sign-off and project completion.",
    keyQuestions: [
      "What exact conditions must be met for you to enthusiastically consider this project a complete success?",
      "What specific KPI will you look at 30 days after launch (e.g. latency < 200ms, 99.9% uptime, 40 hrs saved)?",
      "What are the non-negotiables regarding code ownership, documentation, and team handover?",
    ],
    redFlags: [
      "Open-ended, shifting targets where 'done' is subjective and never attainable.",
      "Failure to define who signs off on milestone acceptance.",
    ],
  },
];

export default function DiscoveryChecklistPage() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / DISCOVERY_SECTIONS.length) * 100);

  const handleCopyFramework = () => {
    const text = DISCOVERY_SECTIONS.map((sec) => `## ${sec.category}\nObjective: ${sec.objective}\nKey Questions:\n${sec.keyQuestions.map(q => `- ${q}`).join("\n")}\nRed Flags:\n${sec.redFlags.map(r => `! ${r}`).join("\n")}`).join("\n\n");
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
            <Sparkles className="size-3.5" /> Company Readiness Checklist [Item 4]
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            Discovery-Call <br />
            <span className="text-primary">Alignment Checklist</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every successful project starts with clarity. Use this 6-pillar framework to uncover the true problem, business impact, timeline urgency, decision-makers, budget, and desired outcome.
          </p>

          {/* Action Row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              size="default"
              className="gap-2"
            >
              <span>Schedule Discovery Call</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button
              onClick={handleCopyFramework}
              variant="outline"
              size="default"
              className="gap-2 cursor-pointer"
            >
              {copied ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4" />}
              <span>{copied ? "Copied Checklist!" : "Copy Framework (Markdown)"}</span>
            </Button>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-lg border border-border text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Printer className="size-3.5" />
              <span>Print Checklist</span>
            </button>
          </div>
        </section>

        {/* Live Progress Indicator */}
        <section className="px-6 pb-6 max-w-5xl mx-auto">
          <div className="p-4 sm:p-5 rounded-2xl border border-border bg-card shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary/10 text-primary font-bold text-xs">
                {completedCount} / {DISCOVERY_SECTIONS.length}
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">Discovery Alignment Score</p>
                <p className="text-[11px] text-muted-foreground">Click items to mark dimensions covered during your scoping conversation.</p>
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

        {/* 6 Checklist Sections */}
        <section className="px-6 pb-24 max-w-5xl mx-auto space-y-6">
          {DISCOVERY_SECTIONS.map((section) => {
            const Icon = section.icon;
            const isDone = !!checkedItems[section.id];

            return (
              <div
                key={section.id}
                className={`rounded-3xl border p-6 sm:p-8 transition-all duration-300 bg-card ${
                  isDone
                    ? "border-emerald-500/60 shadow-sm bg-emerald-500/[0.02]"
                    : "border-border shadow-xs hover:border-primary/40"
                }`}
              >
                {/* Header & Toggle Checkbox */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-2xl bg-secondary text-foreground shrink-0 border border-border mt-0.5">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-primary uppercase tracking-wider">
                        {section.category}
                      </span>
                      <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mt-0.5">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleCheck(section.id)}
                    className="p-1 rounded-lg hover:bg-secondary transition-colors cursor-pointer shrink-0"
                    aria-label={isDone ? "Mark incomplete" : "Mark completed"}
                  >
                    {isDone ? (
                      <CheckCircle2 className="size-6 text-emerald-500" />
                    ) : (
                      <Circle className="size-6 text-muted-foreground hover:text-foreground" />
                    )}
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 pl-0 sm:pl-12">
                  <strong>Objective:</strong> {section.objective}
                </p>

                {/* Key Questions List */}
                <div className="space-y-4 pl-0 sm:pl-12 border-t border-border/60 pt-5">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                      Essential Questions to Ask:
                    </h3>
                    <ul className="space-y-2.5">
                      {section.keyQuestions.map((q, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-foreground/90 leading-relaxed">
                          <span className="size-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Red Flags / Warning Signs */}
                  <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/20 mt-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-destructive mb-1.5 flex items-center gap-1.5">
                      <AlertTriangle className="size-3 text-destructive" /> Red Flags & Warning Signs:
                    </p>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      {section.redFlags.map((flag, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-destructive font-bold">×</span>
                          <span>{flag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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

