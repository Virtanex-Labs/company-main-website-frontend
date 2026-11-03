const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We dig deep into your goals, users, and constraints. A thorough discovery session produces a clear scope, timeline, and success criteria.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Nordic-inspired UX flows, interactive prototypes, and a design system aligned with your brand — before a single line of production code.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Weekly sprints, live staging environments, and real demos every Friday. You stay in the loop from first commit to final feature.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "Smooth deployments with zero-downtime strategies, post-launch monitoring, and ongoing support packages to keep you running fast.",
  },
];

export function Process() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            How We Work
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Our Process, Simplified
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
            Four clear phases — no black boxes, no surprises.
          </p>
        </div>

        {/* Desktop: horizontal connector */}
        <div className="hidden lg:flex items-start gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-1 flex-col items-center relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-5 left-1/2 w-full h-px border-t border-dashed border-border" />
              )}
              {/* Circle */}
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background">
                <span className="text-xs font-bold text-primary">{step.number}</span>
              </div>
              {/* Content */}
              <div className="mt-6 px-4 text-center max-w-[200px]">
                <h3 className="text-sm font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="flex lg:hidden flex-col gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-5">
              {/* Left column: circle + line */}
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <span className="text-xs font-bold text-primary">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-2 mb-2" />
                )}
              </div>
              {/* Content */}
              <div className="pb-8 pt-1.5">
                <h3 className="text-sm font-semibold text-foreground mb-1.5">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

