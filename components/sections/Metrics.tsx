const metrics = [
  { value: "50+", label: "Projects Delivered", sublabel: "across 12+ countries" },
  { value: "98%", label: "Client Satisfaction", sublabel: "measured post-launch" },
  { value: "4×", label: "Faster Time-to-Market", sublabel: "vs. in-house avg." },
  { value: "2022", label: "Founded in Finland", sublabel: "Helsinki, Nordic Europe" },
];

export function Metrics() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 bg-foreground dark:bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-background/60 dark:text-muted-foreground mb-2">
            By The Numbers
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-background dark:text-foreground">
            Results That Speak
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-background/10 dark:bg-border rounded-2xl overflow-hidden border border-background/10 dark:border-border">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex flex-col items-center justify-center gap-1 bg-foreground dark:bg-card px-3 sm:px-6 py-6 sm:py-10 text-center"
            >
              <span className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-primary dark:text-primary">
                {m.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-background dark:text-foreground mt-1">
                {m.label}
              </span>
              <span className="text-[11px] sm:text-xs text-background/50 dark:text-muted-foreground">
                {m.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

