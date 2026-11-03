import { Globe, Smartphone, Code2, Palette, Bot } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/Magic/bento-grid";

const services = [
  {
    name: "Web Development",
    description:
      "High-performance modern web applications, scalable platforms, and cloud-ready architectures built with Next.js, React, and TypeScript.",
    Icon: Globe,
    href: "/services/web-development",
    cta: "Learn more",
    className: "col-span-3 md:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent">
        <div className="absolute bottom-6 right-6 grid grid-cols-3 gap-1.5 opacity-20">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="h-6 w-6 rounded-sm bg-primary" />
          ))}
        </div>
      </div>
    ),
  },
  {
    name: "Mobile Apps",
    description:
      "Fast, fluid native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
    Icon: Smartphone,
    href: "/services/mobile-apps",
    cta: "Learn more",
    className: "col-span-3 md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent">
        <div className="absolute top-1/2 right-8 -translate-y-1/2 w-10 h-16 rounded-xl border-2 border-primary/20 opacity-30" />
      </div>
    ),
  },
  {
    name: "Custom Software",
    description:
      "Bespoke enterprise systems, microservices, secure APIs, and distributed cloud backends tailored to your exact needs.",
    Icon: Code2,
    href: "/services/custom-software",
    cta: "Learn more",
    className: "col-span-3 md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent">
        <div className="absolute top-4 right-4 font-mono text-[10px] text-primary/20 leading-4 select-none">
          {"const app =\n  build();\nawait deploy();"}
        </div>
      </div>
    ),
  },
  {
    name: "UI/UX Design",
    description:
      "Nordic-inspired user experiences, accessible design systems, and pixel-perfect interactive prototypes that delight users.",
    Icon: Palette,
    href: "/services/ui-ux-design",
    cta: "Learn more",
    className: "col-span-3 md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-transparent">
        <div className="absolute bottom-4 right-4 flex gap-1 opacity-30">
          {["bg-rose-400", "bg-primary", "bg-violet-400", "bg-emerald-400"].map((c, i) => (
            <div key={i} className={`h-4 w-4 rounded-full ${c}`} />
          ))}
        </div>
      </div>
    ),
  },
  {
    name: "AI Automation",
    description:
      "Autonomous agent workflows, Generative AI integrations, Local RAG pipelines, and business process automation that scales.",
    Icon: Bot,
    href: "/services/ai-automation",
    cta: "Learn more",
    className: "col-span-3 md:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent">
        <div className="absolute bottom-6 right-6 flex gap-2 opacity-20">
          {["Voice AI", "RAG", "Agents", "LLM"].map((t) => (
            <span key={t} className="rounded-full border border-primary px-2 py-0.5 text-[9px] text-primary">
              {t}
            </span>
          ))}
        </div>
      </div>
    ),
  },
];

export function Services() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            What We Build
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Services That Drive Results
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
            From idea to production — we cover the full spectrum of modern software development.
          </p>
        </div>

        <BentoGrid>
          {services.map((svc) => (
            <BentoCard key={svc.name} {...svc} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

