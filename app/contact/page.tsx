"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import {
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "web-development",
    budget: "10k-25k",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="px-6 pt-24 pb-14 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-xs font-semibold text-primary mb-6">
            <Clock className="size-3.5" /> 24-Hour Response Guarantee
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            Let&apos;s Build Something <br />
            <span className="text-primary">Exceptional Together</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tell us about your project, timeline, and goals. We will review your requirements and provide architectural feedback and a fixed-price proposal.
          </p>
        </section>

        {/* Contact Container */}
        <section className="px-6 pb-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Information & Assurances */}
            <div className="lg:col-span-5 space-y-8">
              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Direct Inquiries
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary shrink-0">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Email Us</p>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary shrink-0">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Company Details</p>
                      <p className="text-sm font-semibold text-foreground">
                        {siteConfig.legalName || "Virtanex Labs Oy"}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Business ID: FI3284918-2 · Helsinki, Finland 🇫🇮
                      </p>
                    </div>
                  </div>

                  {/* Direct Meeting Booking */}
                  <div className="p-5 rounded-2xl bg-secondary/50 border border-primary/20 space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="size-4 text-primary" />
                      <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Prefer an Instant Meeting?
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Skip the form and reserve a 30-minute scoping call directly on our senior architects&apos; calendar.
                    </p>
                    <a
                      href="https://cal.com/virtanexlabs/30min"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-all shadow-xs"
                    >
                      <span>Book a 30-Min Scoping Call</span>
                      <ArrowRight className="size-3.5" />
                    </a>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary shrink-0">
                      <ShieldCheck className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Confidentiality & Target Clients</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                        We partner with funded tech ventures, scaleups, and enterprise engineering teams. Standard mutual NDAs signed prior to scoping.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="rounded-3xl border border-border/80 bg-muted/20 p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                  What Happens Next?
                </h3>
                <ol className="space-y-3 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2.5">
                    <span className="font-bold text-primary">1.</span>
                    <span>We review your request within 24 business hours.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-bold text-primary">2.</span>
                    <span>We schedule an initial 30-minute scoping video call.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-bold text-primary">3.</span>
                    <span>You receive an itemized architecture plan and fixed proposal.</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Right: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="inline-flex p-4 rounded-full bg-emerald-500/10 text-emerald-500">
                      <CheckCircle2 className="size-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Message Received!
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out to Virtanex Labs. A senior engineer will review your project details and contact you at{" "}
                      <span className="font-semibold text-foreground">{formData.email}</span> within 24 hours.
                    </p>
                    <div className="pt-4">
                      <Button
                        onClick={() => setSubmitted(false)}
                        variant="outline"
                        size="default"
                      >
                        Send Another Inquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-semibold text-foreground uppercase tracking-wider">
                          Your Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Elias Lindroos"
                          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-semibold text-foreground uppercase tracking-wider">
                          Business Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="elias@company.com"
                          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-xs font-semibold text-foreground uppercase tracking-wider">
                          Primary Service
                        </label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-xs text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                        >
                          <option value="web-development">Web Development (Next.js/React)</option>
                          <option value="mobile-apps">Mobile Apps (iOS & Android)</option>
                          <option value="custom-software">Custom Software & Cloud</option>
                          <option value="ui-ux-design">UI/UX Product Design</option>
                          <option value="ai-automation">AI Automation & RAG</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="budget" className="text-xs font-semibold text-foreground uppercase tracking-wider">
                          Approx. Budget Scope
                        </label>
                        <select
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-xs text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                        >
                          <option value="5k-10k">€7,500 – €10,000</option>
                          <option value="10k-25k">€10,000 – €25,000</option>
                          <option value="25k-50k">€25,000 – €50,000</option>
                          <option value="50k+">€50,000+</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-semibold text-foreground uppercase tracking-wider">
                        Project Overview & Goals *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe what you want to build, any target timelines, and current tech stack..."
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-y"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full justify-center text-sm font-semibold py-3"
                    >
                      <Send className="me-2 size-4" /> Send Project Brief
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

