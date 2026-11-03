"use client";

import React from "react";
import { Marquee } from "@/components/ui/Magic/marquee";
import * as SVGs from "@/components/SVGS";

interface TechItem {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const TECH_ROW_1: TechItem[] = [
  { name: "Next.js", icon: SVGs.NextJsSVG },
  { name: "React", icon: SVGs.ReactSVG },
  { name: "TypeScript", icon: SVGs.TypeScriptSVG },
  { name: "Node.js", icon: SVGs.NodeJsSVG },
  { name: "Python", icon: SVGs.PythonSVG },
  { name: "PostgreSQL", icon: SVGs.PostgreSqlSVG },
  { name: "AWS Cloud", icon: SVGs.AwsSVG },
  { name: "Docker", icon: SVGs.DockerSVG },
  { name: "Kubernetes", icon: SVGs.KubernetesSVG },
  { name: "Figma", icon: SVGs.FigmaSVG },
  { name: "OpenAI", icon: SVGs.OpenAiSVG },
  { name: "LangChain", icon: SVGs.LangChainSVG },
];

const TECH_ROW_2: TechItem[] = [
  { name: "Supabase", icon: SVGs.SupabaseSVG },
  { name: "Prisma ORM", icon: SVGs.PrismaSVG },
  { name: "GraphQL", icon: SVGs.GraphQlSVG },
  { name: "Redis", icon: SVGs.RedisSVG },
  { name: "Terraform", icon: SVGs.TerraformSVG },
  { name: "GitHub Actions", icon: SVGs.GitHubSVG },
  { name: "Tailwind CSS", icon: SVGs.TailwindSVG },
  { name: "Flutter", icon: SVGs.FlutterSVG },
  { name: "FastAPI", icon: SVGs.FastApiSVG },
  { name: "Vercel", icon: SVGs.VercelSVG },
  { name: "Cloudflare", icon: SVGs.CloudflareSVG },
];

function TechCard({ item }: { item: TechItem }) {
  const Icon = item.icon;
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      aria-label={item.name}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group/card relative flex items-center justify-center size-20 sm:size-24 md:size-28 rounded-2xl md:rounded-3xl border border-border/70 bg-card/75 dark:bg-card/40 backdrop-blur-md shadow-xs hover:shadow-xl hover:border-primary/50 hover:bg-card hover:scale-105 active:scale-95 transition-all duration-300 ease-out cursor-pointer"
    >
      <Icon className="size-10 sm:size-12 md:size-14 shrink-0 transition-transform duration-300 group-hover/card:scale-110" />

      {/* Floating Name Tooltip ONLY for this specific card */}
      <div
        className={`pointer-events-none absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 transition-all duration-200 ease-out z-40 ${
          isHovered
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-1 scale-95"
        }`}
      >
        <div className="relative px-2.5 py-1 rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 border border-neutral-800 dark:border-neutral-200 text-[11px] sm:text-xs font-semibold tracking-wide whitespace-nowrap shadow-xl">
          {item.name}
          {/* Arrow */}
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 rotate-45 bg-neutral-900 dark:bg-neutral-100 border-r border-b border-neutral-800 dark:border-neutral-200" />
        </div>
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden border-y border-border/40 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
          Technologies & Infrastructure
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Engineered with modern, battle-tested tools
        </h2>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          High-performance frameworks, resilient databases, and scalable cloud systems powering every product we launch.
        </p>
      </div>

      {/* Marquee Rows with Big Icon-Only Cards & Hover Tooltips */}
      <div className="relative flex flex-col gap-2 md:gap-4">
        {/* Soft edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 md:w-52 z-20 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 md:w-52 z-20 bg-gradient-to-l from-background via-background/80 to-transparent" />

        <Marquee pauseOnHover className="py-9 md:py-10 [--duration:36s] [--gap:1.25rem] sm:[--gap:1.75rem] md:[--gap:2.25rem]">
          {TECH_ROW_1.map((item) => (
            <TechCard key={item.name} item={item} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="py-9 md:py-10 [--duration:40s] [--gap:1.25rem] sm:[--gap:1.75rem] md:[--gap:2.25rem]">
          {TECH_ROW_2.map((item) => (
            <TechCard key={item.name} item={item} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default TechStack;
