import { Shield, Zap, Lock, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const reasons = [
  {
    icon: Shield,
    title: "Nordic Engineering Quality",
    description:
      "Finnish software culture values precision, reliability, and long-term thinking. Every line we ship is built to last.",
    color: "text-primary",
    bg: "bg-primary/8",
  },
  {
    icon: Zap,
    title: "AI-First Approach",
    description:
      "We integrate intelligence into products from day one — not as an afterthought. Automation, LLMs, and agents are in our DNA.",
    color: "text-amber-500",
    bg: "bg-amber-500/8",
  },
  {
    icon: Lock,
    title: "Fixed-Price Milestones",
    description:
      "No surprise invoices. Agree on scope, lock the price, and we deliver. Your budget stays predictable from kick-off to launch.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/8",
  },
  {
    icon: Eye,
    title: "Weekly Demos & Transparency",
    description:
      "See real progress every week. We demo working software, not slideshows. You always know exactly where your project stands.",
    color: "text-violet-500",
    bg: "bg-violet-500/8",
  },
];

export function WhyUs() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            Why Virtanex Labs
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Built Different, Delivered Better
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
            We don&apos;t just write code — we take ownership of your product&apos;s success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group relative flex flex-col gap-3.5 sm:gap-4 rounded-2xl border border-border bg-card p-5 sm:p-7 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className={cn("inline-flex w-fit rounded-xl p-2.5", reason.bg)}>
                <reason.icon className={cn("size-5", reason.color)} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">
                  {reason.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

