import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Marquee } from "@/components/ui/Magic/marquee";
import { GenAIShowcase } from "@/components/App Components/GenAIShowcase";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies & Work — Virtanex Labs",
  description:
    "Explore digital products, mobile apps, and autonomous AI automation pipelines engineered by Virtanex Labs in Helsinki, Finland.",
};

const CASE_STUDIES = [
  {
    title: "Nordify Cloud Analytics",
    client: "Nordify Oy (Helsinki)",
    category: "Web & Cloud Platform",
    description:
      "Engineered an enterprise real-time observability dashboard processing 50M+ events daily with sub-second queries, custom alerting, and role-based permissions.",
    metrics: [
      { label: "Query Speed", value: "3.2× faster" },
      { label: "Deployment", value: "10 weeks" },
      { label: "Infrastructure Cost", value: "-38%" },
    ],
    tags: ["Next.js 16", "PostgreSQL", "AWS ECS", "ClickHouse", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Bloom AI Knowledge Engine",
    client: "Bloom Technologies (Stockholm)",
    category: "AI Automation & Local RAG",
    description:
      "Designed an autonomous enterprise RAG pipeline connecting internal Notion, Jira, and Google Drive files with strictly grounded citations and zero hallucination risk.",
    metrics: [
      { label: "Hours Saved / Wk", value: "40+ hrs" },
      { label: "Retrieval Accuracy", value: "98.4%" },
      { label: "Privacy", value: "100% On-Premise" },
    ],
    tags: ["Python", "FastAPI", "LangChain", "Qdrant", "Claude 3.5 Sonnet"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Nexora Field Service App",
    client: "Nexora Logistics (Dubai)",
    category: "Mobile App (iOS & Android)",
    description:
      "Built an offline-first cross-platform mobile app enabling 1,200+ field technicians to log work orders, capture GPS-stamped photo inspections, and synchronize data instantly.",
    metrics: [
      { label: "Active Technicians", value: "1,200+" },
      { label: "Offline Sync Delay", value: "< 250ms" },
      { label: "Crash-Free Rate", value: "99.98%" },
    ],
    tags: ["React Native", "Expo", "SQLite", "Node.js", "GraphQL"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Solvra Health & Wellness",
    client: "Solvra Digital (Warsaw)",
    category: "UI/UX & Product Design",
    description:
      "Complete brand identity, design system, and multi-device interaction prototyping for a patient wellness platform resulting in 3x conversion from trial to paid member.",
    metrics: [
      { label: "Conversion Lift", value: "305%" },
      { label: "User Retention", value: "+44%" },
      { label: "Accessibility", value: "WCAG AA" },
    ],
    tags: ["Figma", "Design Tokens", "Prototyping", "Design System"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="px-6 pt-24 pb-14 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-xs font-semibold text-primary mb-6">
            <Sparkles className="size-3.5" /> Proven Track Record
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            Work That Delivers <br />
            <span className="text-primary">Measurable ROI</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A selection of platforms, apps, and autonomous intelligence systems we have engineered for clients across Europe, the Middle East, and beyond.
          </p>
        </section>

        {/* Case Studies Grid */}
        <section className="px-6 pb-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {CASE_STUDIES.map((project) => (
              <div
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300"
              >
                {/* Image Preview */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-background/90 backdrop-blur-md border border-border px-3 py-1 text-xs font-semibold text-foreground">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-8">
                  <div>
                    <p className="text-xs font-medium text-primary mb-1 uppercase tracking-wider">
                      {project.client}
                    </p>
                    <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center justify-between">
                      {project.title}
                      <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Metrics Row */}
                    <div className="grid grid-cols-3 gap-3 border-y border-border py-4 mb-6">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <p className="text-sm sm:text-base font-extrabold text-foreground">{m.value}</p>
                          <p className="text-[10px] sm:text-xs text-muted-foreground">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-border/80 bg-muted/40 px-2.5 py-1 text-[11px] font-medium text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Live Interactive Component Feature: GenAIShowcase */}
        <section className="py-20 border-t border-border/40 bg-muted/20">
          <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Interactive AI Prototype
            </p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Next-Gen Autonomous Experiences
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
              Test out the responsive expandable accordion interface we built for on-device and cloud AI automation workflows.
            </p>
          </div>

          <GenAIShowcase
            buttonHref="/contact"
            buttonText="Launch Your AI App"
          />
        </section>

        {/* Client Logos Marquee */}
        <section className="py-16 border-t border-border/40 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Teams We Have Built For
            </p>
          </div>
          <Marquee pauseOnHover className="[--duration:30s] [--gap:3rem]">
            {[
              "Nordify Group",
              "Bloom AI",
              "Nexora Logistics",
              "Solvra Health",
              "Talify UK",
              "Valo Digital",
              "Lumière SaaS",
              "Metis Japan",
            ].map((brand) => (
              <span
                key={brand}
                className="text-lg sm:text-xl font-bold tracking-tight text-foreground/40 hover:text-foreground/80 transition-colors cursor-default whitespace-nowrap"
              >
                {brand}
              </span>
            ))}
          </Marquee>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 px-6 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Want Similar Results for Your Business?
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            Tell us about your product goals. We will provide architecture recommendations and a milestone schedule.
          </p>
          <Button
            render={<a href="/contact" />}
            nativeButton={false}
            size="lg"
            className="px-8 py-3 text-sm font-semibold"
          >
            Start Your Project <ArrowRight className="ms-2 size-4" />
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

