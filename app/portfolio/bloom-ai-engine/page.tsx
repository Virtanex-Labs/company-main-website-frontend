import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Database,
  Lock,
  Server,
  Zap,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Bloom AI Knowledge Engine Case Study — Virtanex Labs",
  description:
    "How Virtanex Labs engineered an autonomous enterprise RAG pipeline connecting Notion, Jira, and Drive with zero hallucination and 100% on-premise data privacy.",
};

export default function BloomAiCaseStudyPage() {
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
            <Award className="size-3.5" /> Credible Portfolio Case Study 02
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            Bloom AI: Enterprise Knowledge Engine with Local RAG & Zero Data Leakage
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Bloom Technologies needed an internal AI assistant capable of searching proprietary research, engineering specs, and Notion wikis without exposing sensitive IP to public model training.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 p-5 rounded-2xl border border-border bg-card shadow-xs">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">40+ hrs</p>
              <p className="text-xs text-muted-foreground mt-0.5">Saved Weekly per Pod</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">98.4%</p>
              <p className="text-xs text-muted-foreground mt-0.5">Citation Accuracy</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">0%</p>
              <p className="text-xs text-muted-foreground mt-0.5">External Model Leakage</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">6 Wks</p>
              <p className="text-xs text-muted-foreground mt-0.5">From PoC to Production</p>
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
                <span className="ml-2 font-mono text-muted-foreground">internal.bloom.se/ai-assistant</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-500">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" /> Self-Hosted Vector Store
              </span>
            </div>

            <div className="relative h-64 sm:h-96 w-full">
              <Image
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
                alt="Bloom AI Knowledge Engine Interface"
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
              Bloom Technologies employs over 140 engineers and researchers across Scandinavia. Critical architectural decisions, API contracts, and customer agreements were scattered across Notion, Google Drive, and GitHub Discussions. Employees spent hours hunting down answers or re-asking solved technical questions. Commercial SaaS AI tools were strictly blocked by their legal team due to data privacy policies and IP leakage risks.
            </p>
          </div>

          {/* 2. Architecture Blueprint */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. System Architecture Blueprint</h2>
            <div className="p-6 rounded-2xl border border-border bg-secondary/30 space-y-4 font-mono text-xs text-foreground">
              <div className="flex items-center gap-2 text-primary font-bold">
                <Cpu className="size-4" /> RETRIEVAL-AUGMENTED GENERATION (RAG) PIPELINE
              </div>
              <div className="p-4 rounded-xl bg-card border border-border space-y-2">
                <p><strong>[1. Document Connectors]:</strong> Async webhook ingestion for Notion, Jira, and Google Drive</p>
                <p><strong>[2. Chunking & Embeddings]:</strong> Semantic text splitter with BGE-large-en embeddings</p>
                <p><strong>[3. Vector Database]:</strong> Self-hosted Qdrant cluster with hybrid sparse/dense search & reranking</p>
                <p><strong>[4. LLM Guardrails]:</strong> Strict source-only prompting ensuring 100% verifiable citations</p>
                <p><strong>[5. Client Access]:</strong> Slack App bot & internal web dashboard with role-based document scoping</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {["Python", "FastAPI", "Qdrant", "LangChain", "BGE Embeddings", "Slack Bolt API", "Next.js 15", "Docker"].map((tech) => (
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
                    <span>Engineered the Python/FastAPI microservice handling document chunking, indexing, and reranking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Deployed and benchmarked the self-hosted Qdrant vector database with hybrid search algorithms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Built the interactive Slack application enabling staff to query the engine naturally via Slack channels.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Configured strict zero-retention API policies and RBAC filters so junior staff cannot query executive HR docs.</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl border border-border bg-card space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">What Client Team Provided</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="size-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>API keys and workspace permissions for Notion, Jira, and Google Drive.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="size-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>Test question sets and benchmark query answers curated by their engineering leads.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="size-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>Dedicated internal testing group providing weekly feedback during the 6-week sprint.</span>
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
                &ldquo;The custom AI agent and automation workflows they designed save our operations team 40+ hours every week. Genuinely transformative for our business.&rdquo;
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                — Sara Lindström, Founder & CEO at Bloom Technologies (Stockholm, Sweden)
              </p>
            </div>

            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              className="shrink-0"
            >
              Build Your Private AI Solution
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

