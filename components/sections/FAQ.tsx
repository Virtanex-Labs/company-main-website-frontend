import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Timelines vary by scope, but most projects land in the 6–16 week range. After our discovery call we provide a detailed milestone plan with fixed dates — so you always know when to expect delivery.",
  },
  {
    q: "How do you handle pricing and budget?",
    a: "We work with fixed-price milestones. You agree to the scope and price upfront; there are no surprise invoices mid-project. Larger ongoing engagements use a retainer model with a clearly defined monthly scope.",
  },
  {
    q: "Who owns the code and IP after the project?",
    a: "You do — 100%. All source code, design files, and intellectual property transfer to you on final payment. We don't retain any licensing rights.",
  },
  {
    q: "You're in Finland — how do you work with clients globally?",
    a: "We work async-first with structured weekly demos and Slack/Notion collaboration. Helsinki (EET/EEST) overlaps well with European and Middle-Eastern business hours, and we accommodate US time zones for critical check-ins.",
  },
  {
    q: "Can you integrate AI into an existing product?",
    a: "Absolutely. AI augmentation is one of our strengths — whether that's adding an LLM-powered feature, building a RAG pipeline over your data, or fully automating a business workflow with an autonomous agent.",
  },
  {
    q: "Do you offer post-launch support and maintenance?",
    a: "Yes. We offer monthly retainer packages covering bug fixes, performance monitoring, dependency updates, and feature iterations. Most clients stay on for at least 6 months post-launch.",
  },
];

export function FAQ() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 sm:mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            FAQ
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Questions We Hear Often
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
            Can&apos;t find your answer here? Reach out at{" "}
            <a href="mailto:contact@virtanexlabs.com" className="text-primary underline underline-offset-2">
              contact@virtanexlabs.com
            </a>
          </p>
        </div>

        <Accordion multiple>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="py-4 text-sm font-medium text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-xs text-muted-foreground leading-relaxed pb-2">{faq.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

