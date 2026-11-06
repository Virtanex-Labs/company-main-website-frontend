"use client";

import * as React from "react";
import Link from "next/link";
import {
  Code2,
  Cpu,
  Database,
  Network,
  Workflow,
  Cloud,
  Rocket,
  Palette,
  CheckCircle2,
  Users2,
  Compass,
  ShieldCheck,
  Lock,
  ArrowRight,
  Search,
  Clock,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { SERVICES_LIST, SERVICE_CATEGORIES } from "@/lib/services-data";

const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Cpu,
  Database,
  Network,
  Workflow,
  Cloud,
  Rocket,
  Palette,
  CheckCircle2,
  Users2,
  Compass,
};

const INITIAL_SERVICE_COUNT = 6;

export function Services() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [showAll, setShowAll] = React.useState<boolean>(false);

  const filteredServices = React.useMemo(() => {
    return SERVICES_LIST.filter((svc) => {
      const matchesCategory =
        selectedCategory === "all" || svc.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // When changing category or search, reset showAll to false for clean pagination
  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setShowAll(false);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setShowAll(false);
  };

  const visibleServices = showAll
    ? filteredServices
    : filteredServices.slice(0, INITIAL_SERVICE_COUNT);

  const hasMore = filteredServices.length > INITIAL_SERVICE_COUNT;

  return (
    <section id="services" className="py-20 sm:py-24 px-5 sm:px-8 md:px-12 relative bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary/80 text-foreground/80 border border-border/60 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Capabilities & Engineering Practice
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            Engineering Services Built for Reliability, Scale, and Real ROI
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            We partner with forward-thinking enterprises and fast-moving technology companies to design, build, and scale mission-critical digital systems with 100% IP ownership.
          </p>
        </div>

        {/* Enterprise Trust Grid - Compact & Clean */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm mb-10 shadow-xs">
          <div className="flex items-start gap-2.5">
            <div className="p-1.5 rounded-lg bg-secondary text-foreground shrink-0 border border-border/50">
              <ShieldCheck className="size-4 text-foreground/80" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">100% IP Transfer</h4>
              <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                Full code & git ownership from day one.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="p-1.5 rounded-lg bg-secondary text-foreground shrink-0 border border-border/50">
              <Lock className="size-4 text-foreground/80" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Enterprise Security</h4>
              <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                Strict NDA, GDPR, & SOC2 readiness.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="p-1.5 rounded-lg bg-secondary text-foreground shrink-0 border border-border/50">
              <CheckCircle2 className="size-4 text-foreground/80" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Strict Type-Safety</h4>
              <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                Zero-tolerance for runtime errors.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="p-1.5 rounded-lg bg-secondary text-foreground shrink-0 border border-border/50">
              <Users2 className="size-4 text-foreground/80" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Direct Senior Leads</h4>
              <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                No middle managers or junior handoffs.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Navigation and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 pb-5 border-b border-border/50">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {SERVICE_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors border cursor-pointer ${
                    isActive
                      ? "bg-foreground text-background border-foreground shadow-xs font-semibold"
                      : "bg-secondary/40 text-muted-foreground border-transparent hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="relative min-w-[220px] md:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search services or tech..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-border/70 bg-card text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-foreground transition-colors"
            />
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-border/70 bg-card/40">
            <p className="text-sm font-medium text-foreground">No capabilities found matching &quot;{searchQuery}&quot;</p>
            <p className="text-xs text-muted-foreground mt-1">Try searching for keywords like &quot;SaaS&quot;, &quot;AI&quot;, &quot;DevOps&quot;, or &quot;Testing&quot;.</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
                setShowAll(false);
              }}
              className="mt-4 px-3 py-1.5 text-xs rounded-md bg-secondary text-foreground hover:bg-secondary/80 transition-colors cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {visibleServices.map((svc) => {
              const IconComponent = ICON_MAP[svc.iconName] || Code2;

              return (
                <div
                  key={svc.slug}
                  className="group relative flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-6 shadow-xs hover:border-foreground/30 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    {/* Header line: Category icon & number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-xl bg-secondary text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                          <IconComponent className="size-4" />
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                          {svc.categoryLabel}
                        </span>
                      </div>
                      <span className="font-mono text-xs font-semibold text-muted-foreground/60">
                        {svc.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                      <Link href={`/services/${svc.slug}`} className="focus:outline-none">
                        {svc.title}
                      </Link>
                    </h3>

                    {/* Clean Tagline / Description (concise & readable) */}
                    <p className="text-xs text-muted-foreground mt-2.5 leading-relaxed line-clamp-3">
                      {svc.shortDescription}
                    </p>

                    {/* Technologies Tag Row */}
                    <div className="mt-4 pt-3.5 border-t border-border/40">
                      <div className="flex flex-wrap gap-1.5">
                        {svc.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-secondary text-foreground/80 border border-border/40"
                          >
                            {tech}
                          </span>
                        ))}
                        {svc.technologies.length > 3 && (
                          <span className="px-1.5 py-0.5 text-[10px] text-muted-foreground font-mono">
                            +{svc.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Timeline & Direct Link */}
                  <div className="mt-5 pt-3.5 border-t border-border/50 flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                      <Clock className="size-3 text-muted-foreground/70" />
                      {svc.timeline.split(" ")[0]} delivery
                    </span>

                    <Link
                      href={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:text-primary transition-colors group-hover:translate-x-0.5 duration-200"
                    >
                      Specifications <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* "See More" / "Show Less" Expand Button Controls */}
        {hasMore && (
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background text-xs sm:text-sm font-semibold hover:opacity-90 transition-all shadow-xs cursor-pointer active:scale-[0.99]"
            >
              <span>
                {showAll
                  ? "Show Less Services"
                  : `See More Services (${filteredServices.length - INITIAL_SERVICE_COUNT} more)`}
              </span>
              {showAll ? (
                <ChevronUp className="size-4" />
              ) : (
                <ChevronDown className="size-4" />
              )}
            </button>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border/80 bg-secondary/50 text-foreground text-xs sm:text-sm font-semibold hover:bg-secondary transition-all"
            >
              <span>View Full Services Catalog</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        )}

        {/* Bottom Consultation Box */}
        <div className="mt-14 sm:mt-16 p-6 sm:p-8 md:p-10 rounded-2xl border border-border/80 bg-secondary/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
              <Sparkles className="size-3.5 text-foreground" />
              Not sure which capabilities align with your scope?
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Request a 30-Minute Architecture & Capability Review
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Speak directly with our senior engineering principals. We will review your technical architecture, identify risks and bottlenecks, and provide an actionable proposal within 48 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-foreground text-background text-xs font-semibold hover:bg-foreground/90 transition-colors text-center shadow-xs"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-border/80 bg-card text-foreground text-xs font-semibold hover:bg-secondary transition-colors text-center"
            >
              View Engagement Models
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
