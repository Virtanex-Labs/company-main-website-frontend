import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Virtanex Labs",
  description: "Privacy policy and GDPR compliance principles for Virtanex Labs Oy.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 py-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs text-muted-foreground mb-10">
          Last updated: January 2025 · Virtanex Labs Oy (Helsinki, Finland)
        </p>

        <div className="space-y-8 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-foreground">
              1. General Information & GDPR Compliance
            </h2>
            <p>
              Virtanex Labs Oy (&ldquo;Virtanex Labs&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is registered in Helsinki, Finland. We operate in strict compliance with the European Union General Data Protection Regulation (EU GDPR) and Finnish privacy legislation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-foreground">
              2. Data We Collect
            </h2>
            <p>
              When you submit a contact inquiry, request a scoping proposal, or communicate with our engineering team, we collect your name, business email address, company details, and project notes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-foreground">
              3. AI & Proprietary Code Confidentiality
            </h2>
            <p>
              We enforce strict confidentiality. We never use client source code, internal proprietary data, or confidential business logic to train public or commercial AI models. All internal RAG and LLM systems built for clients are configured with zero-retention enterprise agreements or deployed 100% on-premise.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-foreground">
              4. Your Rights Under GDPR
            </h2>
            <p>
              Under GDPR, you retain the right to access, rectify, or request deletion of your personal data at any time. For privacy inquiries, contact us directly at{" "}
              <a href="mailto:contact@virtanexlabs.com" className="text-primary underline">
                contact@virtanexlabs.com
              </a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

