import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/Magic/scroll-based-velocity";
import { Button } from "@/components/ui/button";
import {
  Compass,
  CheckCircle2,
  Shield,
  Zap,
  Target,
  Users2,
  ArrowRight,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Virtanex Labs — Nordic Software Engineering",
  description:
    "Virtanex Labs Oy is an independent software and AI engineering studio based in Helsinki, Finland. We engineer dependable digital systems with Nordic craft.",
};

const VALUES = [
  {
    icon: Shield,
    title: "Nordic Engineering Craft",
    description:
      "We believe software should be built to last. No shortcuts, no fragile hacks. We write clean, testable TypeScript and Python architectures with strict type systems and clean domain boundaries.",
  },
  {
    icon: Compass,
    title: "Radical Transparency",
    description:
      "No corporate jargon or smoke-and-mirrors. You get direct access to your lead engineers on Slack, weekly live production demos, and real-time Git visibility from day one.",
  },
  {
    icon: Zap,
    title: "AI-First Pragmatism",
    description:
      "We don't chase AI hype for the sake of marketing. We integrate LLMs, autonomous agents, and local models only where they deliver verifiable business leverage and measurable ROI.",
  },
  {
    icon: Target,
    title: "Fixed Milestones, Guaranteed Output",
    description:
      "We take pride in delivering on time and on budget. Staged milestone contracts mean our financial incentives are 100% aligned with shipping working software into your hands.",
  },
];

const LEADERSHIP = [
  {
    name: "Matias Virtanen",
    role: "Founder & Chief Technology Officer",
    location: "Helsinki, Finland",
    bio: "Former principal engineer with 12+ years designing distributed systems, cloud backends, and AI pipelines across Nordic tech scaleups.",
  },
  {
    name: "Eevi Lindberg",
    role: "Head of Product Design & UX",
    location: "Helsinki, Finland",
    bio: "Passionate about minimalist Nordic design systems, WCAG accessibility, and high-conversion enterprise product ergonomics.",
  },
  {
    name: "Dr. Arto Korhonen",
    role: "Lead AI & Machine Learning Scientist",
    location: "Espoo, Finland",
    bio: "PhD in Applied Computer Science. Specialist in edge LLM quantization, local RAG architectures, and autonomous agent systems.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="px-6 pt-24 pb-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-xs font-semibold text-primary mb-6">
            <MapPin className="size-3.5" /> Founded in Helsinki, Finland
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            Engineering Software <br />
            <span className="text-primary">That Simply Works</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Virtanex Labs was founded on a simple Nordic philosophy: build dependable digital products without bureaucracy, hidden fees, or tech debt.
          </p>
        </section>

        {/* Scroll Velocity Ticker from Magic UI */}
        <section className="py-12 border-y border-border/40 bg-muted/20 overflow-hidden">
          <ScrollVelocityContainer>
            <ScrollVelocityRow
              baseVelocity={2}
              direction={1}
              className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-foreground/20 dark:text-foreground/15 py-1"
            >
              HELSINKI CRAFT • ZERO SURPRISES • SENIOR ENGINEERS • TRANSPARENT PRICING •&nbsp;
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </section>

        {/* Our Story */}
        <section className="py-24 px-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                Our Story
              </p>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl leading-snug">
                Born in Finland. Trusted Worldwide.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                In 2022, we grew frustrated watching companies burn millions of euros on slow agencies that delivered bloated slide decks instead of working code.
              </p>
              <p>
                We established Virtanex Labs Oy in Helsinki to offer an antidote: an agile, senior-led software studio combining world-class Finnish software craftsmanship with modern AI automation capabilities.
              </p>
              <p>
                Today, founders and enterprise leaders across Europe, the Nordics, the Middle East, and North America rely on us to design, architect, and ship their most critical digital applications.
              </p>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-24 px-6 bg-muted/20 border-t border-border/40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                Our Principles
              </p>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                What Guides Every Line of Code
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {VALUES.map((val) => (
                <div
                  key={val.title}
                  className="rounded-3xl border border-border bg-card p-8 shadow-sm hover:border-primary/40 transition-all"
                >
                  <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-6">
                    <val.icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Leadership
            </p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Meet the Builders Behind Virtanex Labs
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Senior practitioners who actively write code and architect your systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP.map((member) => (
              <div
                key={member.name}
                className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-sm"
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-xl font-bold text-primary mb-6">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-xs font-semibold text-primary mb-2">{member.role}</p>
                  <p className="text-[11px] text-muted-foreground mb-4 flex items-center gap-1.5">
                    <MapPin className="size-3 text-primary" /> {member.location}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 border-t border-border/40 text-center bg-primary/5">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              Let&apos;s Build Together
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              Whether you need a dedicated engineering pod or an end-to-end milestone delivery, we are ready.
            </p>
            <Button
              render={<a href="/contact" />}
              nativeButton={false}
              size="lg"
              className="px-8 py-3 text-sm font-semibold"
            >
              Get in Touch <ArrowRight className="ms-2 size-4" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

