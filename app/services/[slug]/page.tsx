import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Marquee } from "@/components/ui/Magic/marquee";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Smartphone,
  Code2,
  Palette,
  Bot,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Clock,
  Coins,
  Shield,
} from "lucide-react";

interface ServiceData {
  title: string;
  tagline: string;
  description: string;
  icon: typeof Globe;
  timeline: string;
  pricingHint: string;
  techStack: string[];
  deliverables: string[];
  benefits: Array<{ title: string; desc: string }>;
  faqs: Array<{ q: string; a: string }>;
}

const SERVICES_CONTENT: Record<string, ServiceData> = {
  "web-development": {
    title: "Modern Web Development",
    tagline: "Scalable, high-performance web platforms built for speed and conversions.",
    description:
      "We design and engineer enterprise-grade web applications using Next.js 16, React 19, TypeScript, and modern edge runtimes. Every web product is crafted with 100/100 Lighthouse performance, full accessibility, and bulletproof security.",
    icon: Globe,
    timeline: "6–12 weeks typical delivery",
    pricingHint: "Fixed-price milestone contracts from €7,500",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "PostgreSQL",
      "Prisma ORM",
      "Vercel Edge",
      "Cloudflare Workers",
      "TanStack Query",
      "Zod Validation",
    ],
    deliverables: [
      "Full responsive web application across desktop, tablet, and mobile",
      "Server-side rendering (SSR) & Partial Prerendering (PPR) for lightning speeds",
      "Type-safe API routes & microservices integration",
      "Authentication & Role-Based Access Control (RBAC)",
      "Database schema design and migration management",
      "Automated CI/CD deployment pipelines on Vercel or AWS",
    ],
    benefits: [
      {
        title: "Sub-Second Load Times",
        desc: "We leverage edge computing and zero-bundle server components to maximize conversion rates.",
      },
      {
        title: "100% Type Safety",
        desc: "Strict TypeScript end-to-end catches bugs before production and prevents runtime outages.",
      },
      {
        title: "Complete Code Ownership",
        desc: "All IP, Git repositories, and documentation transfer completely to your company upon launch.",
      },
    ],
    faqs: [
      {
        q: "Do you migrate legacy codebases?",
        a: "Yes. We frequently modernize legacy React, Vue, or monolithic Node.js apps into modern Next.js systems with zero user downtime.",
      },
      {
        q: "What testing strategies do you employ?",
        a: "We integrate Vitest for unit tests, Playwright for end-to-end integration tests, and automated GitHub Actions verification.",
      },
    ],
  },
  "mobile-apps": {
    title: "Mobile App Engineering",
    tagline: "Fluid, native-grade iOS & Android applications with 60fps animations.",
    description:
      "We engineer cross-platform mobile apps using React Native and Flutter, sharing up to 90% of business logic while maintaining distinct iOS and Android native feel and hardware integration.",
    icon: Smartphone,
    timeline: "8–14 weeks typical delivery",
    pricingHint: "Fixed-price milestone contracts from €9,500",
    techStack: [
      "React Native",
      "Flutter",
      "Expo SDK",
      "Swift",
      "Kotlin",
      "Firebase",
      "Supabase",
      "Fastlane",
      "App Store Connect",
      "Google Play Console",
    ],
    deliverables: [
      "Universal codebase deployed to both Apple App Store and Google Play",
      "Offline-first sync engine with local SQLite/WatermelonDB storage",
      "Push notification systems (APNs, FCM) and deep linking",
      "Native device hardware integration (Camera, Biometrics, Bluetooth, GPS)",
      "In-App Purchases (RevenueCat / Stripe Mobile) configuration",
      "Comprehensive App Store approval support and compliance guarantee",
    ],
    benefits: [
      {
        title: "Single Codebase, Native Feel",
        desc: "Cut mobile development and ongoing maintenance costs in half without compromising user experience.",
      },
      {
        title: "Instant OTA Updates",
        desc: "Push bug fixes directly to active users using EAS Update without waiting days for app store re-review.",
      },
      {
        title: "Offline Resilience",
        desc: "Your app stays completely functional in low-connectivity environments with graceful background sync.",
      },
    ],
    faqs: [
      {
        q: "Do you handle App Store submission?",
        a: "Yes, we handle the entire App Store and Google Play submission, testflight beta distribution, and privacy compliance.",
      },
      {
        q: "Can you integrate biometric logins?",
        a: "Yes, Face ID, Touch ID, and Android Biometrics are built standard into all authentication flows.",
      },
    ],
  },
  "custom-software": {
    title: "Custom Software & Cloud Systems",
    tagline: "High-reliability distributed backends, microservices, and secure APIs.",
    description:
      "For proprietary workflows and enterprise platforms that off-the-shelf software cannot solve. We architect bespoke distributed cloud backends with high concurrency, enterprise observability, and ironclad security.",
    icon: Code2,
    timeline: "8–16 weeks typical delivery",
    pricingHint: "Milestone-based delivery from €12,000",
    techStack: [
      "Node.js",
      "Python / FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS ECS & Lambda",
      "Terraform",
      "Kafka / RabbitMQ",
      "OpenTelemetry",
    ],
    deliverables: [
      "Tailored microservice architecture designed for horizontal scalability",
      "RESTful & GraphQL APIs with interactive OpenAPI/Swagger documentation",
      "High-throughput asynchronous event queues and background jobs",
      "Infrastructure-as-Code (Terraform) for multi-region cloud deployment",
      "Role-based security auditing, rate limiting, and DDoS protection",
      "Centralized logging, error tracing, and performance dashboards",
    ],
    benefits: [
      {
        title: "Tailored to Your Operations",
        desc: "No bloated software licenses or workflow compromises — built around your exact business rules.",
      },
      {
        title: "Enterprise Resiliency",
        desc: "Self-healing container orchestrations with automated failovers and zero-data-loss database backups.",
      },
      {
        title: "Security by Default",
        desc: "Encrypted data in-transit and at-rest, strict secret segregation, and OWASP top-10 compliance.",
      },
    ],
    faqs: [
      {
        q: "Can you integrate with our legacy enterprise databases?",
        a: "Yes, we build secure bridge adapters and ETL pipelines for SAP, Oracle, Salesforce, and custom SQL databases.",
      },
      {
        q: "Where is our infrastructure hosted?",
        a: "We deploy directly inside your own AWS, GCP, or Azure cloud account so you retain total governance.",
      },
    ],
  },
  "ui-ux-design": {
    title: "UI/UX Product Design",
    tagline: "Nordic minimalism, intuitive ergonomics, and design systems that scale.",
    description:
      "We design digital interfaces that are clean, focused, and effortless to navigate. Rooted in Finnish design principles, we eliminate cognitive clutter to let your product's core value shine.",
    icon: Palette,
    timeline: "3–6 weeks typical delivery",
    pricingHint: "Fixed packages from €4,500",
    techStack: [
      "Figma",
      "Design Tokens",
      "Radix UI",
      "Base UI",
      "Lucide Icons",
      "Tailwind Typography",
      "Lottie Animations",
      "Storybook",
      "Protopie",
    ],
    deliverables: [
      "Full interactive clickable Figma prototype with responsive layouts",
      "Scalable component design system with color palettes, typography, and tokens",
      "User journey maps, information architecture, and wireframes",
      "Dark mode and light mode native palette pairing",
      "Micro-interaction and transition specifications for engineering teams",
      "Developer handoff documentation with ready-to-use CSS tokens",
    ],
    benefits: [
      {
        title: "Clarity over Clutter",
        desc: "Nordic design aesthetics emphasize visual hierarchy, generous spacing, and crystal-clear user paths.",
      },
      {
        title: "Accelerated Dev Handoff",
        desc: "Design tokens match our React component library 1:1, cutting frontend implementation time in half.",
      },
      {
        title: "Accessibility Guaranteed",
        desc: "High color contrast ratios and keyboard navigation readiness ensuring WCAG 2.1 compliance.",
      },
    ],
    faqs: [
      {
        q: "Do you deliver interactive prototypes?",
        a: "Yes, all design deliverables include clickable prototypes so stakeholders can test realistic flows.",
      },
      {
        q: "Can you work with our existing brand guidelines?",
        a: "Absolutely. We can adhere strictly to your existing brand book or help modernize and expand it.",
      },
    ],
  },
  "ai-automation": {
    title: "AI Automation & Autonomous Agents",
    tagline: "Intelligent workflows, Local RAG, and custom LLM integrations that deliver ROI.",
    description:
      "Move beyond ChatGPT wrappers. We design production AI automation pipelines, autonomous multi-step agents, and private Retrieval-Augmented Generation (RAG) knowledge systems that automate complex business processes.",
    icon: Bot,
    timeline: "4–10 weeks typical delivery",
    pricingHint: "Fixed-scope milestone contracts from €6,000",
    techStack: [
      "OpenAI GPT-4o",
      "Claude 3.5 Sonnet",
      "LangChain",
      "LlamaIndex",
      "Qdrant / Pinecone",
      "Local Ollama / vLLM",
      "Python",
      "FastAPI",
      "Docker",
      "Whisper Voice AI",
    ],
    deliverables: [
      "Custom autonomous agent workflows connected to your internal tools and APIs",
      "Private RAG system indexing your internal PDFs, Notion, Confluence, and databases",
      "Multi-modal capabilities (Document parsing, Computer Vision, Voice Assistants)",
      "Strict hallucination guardrails, confidence scoring, and human-in-the-loop triggers",
      "Local / On-Premise LLM deployment for strict data privacy and GDPR compliance",
      "Analytics telemetry tracking token usage, latency, and agent decision accuracy",
    ],
    benefits: [
      {
        title: "Drastic Cost Reductions",
        desc: "Automate repetitive customer support, document classification, and research tasks at 10x lower cost.",
      },
      {
        title: "Ironclad Data Privacy",
        desc: "Zero customer data training. Option to run 100% on-premise without third-party API dependencies.",
      },
      {
        title: "Measurable Business ROI",
        desc: "We focus exclusively on automation workflows that yield immediate operational time savings.",
      },
    ],
    faqs: [
      {
        q: "Will our proprietary business data be used to train AI models?",
        a: "Never. We enforce enterprise zero-data-retention agreements and provide fully local on-premise LLM options.",
      },
      {
        q: "How do you prevent AI hallucinations?",
        a: "We implement grounded RAG retrieval, strict structured schema validation, and confidence fallbacks.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(SERVICES_CONTENT).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_CONTENT[slug];
  if (!service) return { title: "Service — Virtanex Labs" };

  return {
    title: `${service.title} — Virtanex Labs`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_CONTENT[slug];

  if (!service) {
    notFound();
  }

  const IconComponent = service.icon;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb & Navigation Back */}
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-3.5" /> Back to all services
          </Link>
        </div>

        {/* Hero Section */}
        <section className="px-6 py-12 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary">
              <IconComponent className="size-8" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Specialized Service
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            {service.title}
          </h1>

          <p className="mt-4 text-xl font-medium text-foreground/80 leading-snug">
            {service.tagline}
          </p>

          <p className="mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
            {service.description}
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
              <Clock className="size-5 text-primary shrink-0" />
              <div>
                <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Estimated Timeline</p>
                <p className="text-xs font-semibold text-foreground">{service.timeline}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
              <Coins className="size-5 text-primary shrink-0" />
              <div>
                <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Investment Framework</p>
                <p className="text-xs font-semibold text-foreground">{service.pricingHint}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              render={<a href="/contact" />}
              nativeButton={false}
              size="lg"
              className="px-6 py-3 font-semibold"
            >
              Get a Proposal for This Service <ArrowRight className="ms-2 size-4" />
            </Button>
            <Button
              render={<a href="/portfolio" />}
              nativeButton={false}
              variant="outline"
              size="lg"
            >
              View Related Work
            </Button>
          </div>
        </section>

        {/* Tech Stack Marquee from Magic UI */}
        <section className="py-12 border-y border-border/40 bg-muted/20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Core Tech Stack & Tooling
            </p>
          </div>
          <Marquee pauseOnHover className="[--duration:30s] [--gap:0.75rem]">
            {service.techStack.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-2 rounded-xl border border-border bg-card/80 px-4 py-2 text-xs font-medium text-foreground whitespace-nowrap shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {tech}
              </div>
            ))}
          </Marquee>
        </section>

        {/* Deliverables & Benefits Grid */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: What We Deliver */}
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                Scope & Artifacts
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                What You Receive
              </h2>
              <ul className="space-y-4">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4">
                    <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Architectural Advantages */}
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                Why Virtanex Labs
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Key Advantages
              </h2>
              <div className="space-y-5">
                {service.benefits.map((b, idx) => (
                  <div key={idx} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <h3 className="text-base font-bold text-foreground mb-1.5">{b.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service FAQ */}
        <section className="py-16 px-6 bg-muted/20 border-t border-border/40">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-sm font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-6 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Ready to Build {service.title}?
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            Tell us about your requirements. We will analyze the scope and deliver a clear milestone blueprint within 48 hours.
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

