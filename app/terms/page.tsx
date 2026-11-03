import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Virtanex Labs",
  description: "Terms of service and engineering engagement conditions for Virtanex Labs Oy.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 py-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
          Terms of Service
        </h1>
        <p className="text-xs text-muted-foreground mb-10">
          Last updated: January 2025 · Virtanex Labs Oy (Helsinki, Finland)
        </p>

        <div className="space-y-8 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-foreground">
              1. Engagement & Scope
            </h2>
            <p>
              All software development, UI/UX design, and AI automation services provided by Virtanex Labs Oy are governed by individualized Statements of Work (SOW) outlining agreed milestones, deliverables, timelines, and fixed compensation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-foreground">
              2. 100% Intellectual Property Ownership
            </h2>
            <p>
              Upon final milestone payment approval, all rights, title, source code, designs, and intellectual property developed exclusively for the client transfer in full to the client. Virtanex Labs retains zero proprietary claims over custom client work.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-foreground">
              3. Milestone Acceptance & Warranty
            </h2>
            <p>
              Each deliverable is demonstrated live on a staging environment. Clients have a standard review period to verify functionality against the agreed specifications. All delivered code includes a 30-day post-launch warranty covering defect remediation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-foreground">
              4. Governing Law
            </h2>
            <p>
              These terms and all related agreements are governed by and construed in accordance with the laws of Finland, without regard to conflict of law principles.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

