"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Marquee } from "@/components/ui/Magic/marquee";

const FEATURED_TESTIMONIALS = [
  {
    quote:
      "Virtanex Labs delivered our entire cloud analytics platform in 10 weeks — ahead of schedule and under budget. Nordic precision at its finest.",
    name: "Aleksi Mäkinen",
    designation: "CTO at Nordify (Helsinki, Finland)",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
  },
  {
    quote:
      "The custom AI agent and automation workflows they designed save our operations team 40+ hours every week. Genuinely transformative for our business.",
    name: "Sara Lindström",
    designation: "Founder & CEO at Bloom AI (Stockholm, Sweden)",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
  },
  {
    quote:
      "Weekly live demos kept our leadership team completely aligned. We always knew what was built, what was next, and had zero unexpected surprises.",
    name: "Tariq Al-Mansoor",
    designation: "VP of Product at Nexora (Dubai, UAE)",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    quote:
      "The UI/UX design is world-class. Our user retention doubled within the first month after the redesign, and customer satisfaction hit an all-time high.",
    name: "Elena Kowalski",
    designation: "Product Lead at Solvra (Warsaw, Poland)",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
  },
];

const TICKER_REVIEWS = [
  {
    name: "James Okonkwo",
    role: "Engineering Manager, Talify (UK)",
    quote: "Clean architecture, thorough TypeScript typing, and rock-solid AWS infrastructure. A dream to maintain.",
  },
  {
    name: "Milla Rantanen",
    role: "Head of Digital, Valo Health (Finland)",
    quote: "Their fixed-price milestone model gave our board total predictability. Highly recommended.",
  },
  {
    name: "Kenji Sato",
    role: "Co-Founder, Metis Japan",
    quote: "Async communication was seamless despite the timezone difference. Truly a premier global dev partner.",
  },
  {
    name: "Claire Dupont",
    role: "COO, Lumière SaaS (France)",
    quote: "From discovery to App Store launch in 12 weeks. Flawless execution across web and mobile.",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 overflow-hidden border-t border-border/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 mb-6 sm:mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
          Client Stories
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
          Trusted by High-Growth Teams Worldwide
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto">
          See how companies partner with Virtanex Labs to launch faster and scale confidently.
        </p>
      </div>

      {/* 3D Stacked Animated Testimonials */}
      <div className="relative">
        <AnimatedTestimonials testimonials={FEATURED_TESTIMONIALS} autoplay />
      </div>

      {/* Marquee ticker of additional client quotes */}
      <div className="relative mt-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <Marquee pauseOnHover className="[--duration:45s] [--gap:1rem]">
          {TICKER_REVIEWS.map((review) => (
            <div
              key={review.name}
              className="flex w-[320px] shrink-0 flex-col justify-between gap-3 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm p-5 shadow-sm"
            >
              <p className="text-xs text-muted-foreground leading-relaxed italic">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div>
                <p className="text-xs font-semibold text-foreground">{review.name}</p>
                <p className="text-[11px] text-muted-foreground">{review.role}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
