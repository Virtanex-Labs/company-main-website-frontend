import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/8 via-transparent to-violet-500/5" />
      <div className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(circle, oklch(0.48 0.21 264 / 0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(ellipse 60% 70% at 50% 50%, transparent 20%, var(--background) 90%)",
        }}
      />
      {/* Glow */}
      <div className="pointer-events-none absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-primary opacity-8 blur-3xl" />

      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Currently accepting new projects
        </div>

        <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Ready to Build Something{" "}
          <span className="text-primary">Extraordinary?</span>
        </h2>
        <p className="text-sm text-muted-foreground max-w-lg leading-relaxed">
          Let&apos;s turn your idea into production-ready software. Book a free 30-minute consultation and get a clear plan, timeline, and fixed-price proposal within 48 hours.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <Button
            render={<a href="/contact" />}
            nativeButton={false}
            size="lg"
            className="px-8 py-2.5 text-sm font-semibold"
          >
            Book a Free Consultation
          </Button>
          <Button
            render={<a href="mailto:contact@virtanexlabs.com" />}
            nativeButton={false}
            variant="outline"
            size="lg"
            className="px-6 py-2.5 text-sm font-semibold"
          >
            contact@virtanexlabs.com
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          Helsinki, Finland · Response within 24 hours
        </p>
      </div>
    </section>
  );
}

