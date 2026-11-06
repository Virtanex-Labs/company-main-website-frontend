export interface ServiceDetail {
  slug: string;
  number: string;
  title: string;
  category: "core" | "ai-data" | "systems" | "quality";
  categoryLabel: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  whatItIncludes: string[];
  deliverables: string[];
  technologies: string[];
  businessOutcomes: string[];
  clientTrustNote: string;
  timeline: string;
  engagementPricing: string;
  faqs: Array<{ q: string; a: string }>;
}

export const SERVICE_CATEGORIES = [
  { id: "all", label: "All Capabilities (11)" },
  { id: "core", label: "Software & SaaS Engineering" },
  { id: "ai-data", label: "AI, Data & Automation" },
  { id: "systems", label: "Enterprise Systems & Cloud" },
  { id: "quality", label: "Design, QA & Consulting" },
] as const;

export const SERVICES_LIST: ServiceDetail[] = [
  {
    slug: "custom-software-development",
    number: "01",
    title: "Custom Software Development",
    category: "core",
    categoryLabel: "Core Engineering",
    tagline: "Tailored enterprise applications, scalable SaaS, and resilient internal platforms built for high-stakes business operations.",
    shortDescription:
      "We design and build bespoke software platforms from the ground up, tailored precisely to your operational workflows and business logic—eliminating the limitations of off-the-shelf software.",
    longDescription:
      "When commercial off-the-shelf software falls short or forces rigid compromises, custom software becomes your strategic moat. At Virtanex Labs, we architect enterprise-grade software systems designed for high concurrency, rock-solid stability, and zero unnecessary bloat. Whether you need a multi-tenant B2B SaaS platform, an internal operating system for complex logistical operations, or a customer-facing web portal handling millions of transactions, our engineering teams build with strict type-safety, clean modular architecture, and audited security protocols.",
    iconName: "Code2",
    whatItIncludes: [
      "Enterprise applications with role-based access control (RBAC)",
      "Multi-tenant SaaS platforms with automated billing and tenant isolation",
      "Mission-critical web applications with sub-second response times",
      "Internal business systems, back-office dashboards, and operational portals",
    ],
    deliverables: [
      "Production-ready, type-safe full-stack application with 100% IP ownership",
      "Scalable relational/document database schemas with automated migrations",
      "Comprehensive RESTful and GraphQL API layer with interactive OpenAPI specs",
      "Integrated identity management, SSO (SAML/OAuth), and audit logs",
      "Containerized deployment scripts and infrastructure-as-code configurations",
      "Thorough technical documentation, architectural blueprints, and handover runbooks",
    ],
    technologies: [
      "Next.js / React 19",
      "TypeScript",
      "Node.js / NestJS",
      "Python / FastAPI",
      "PostgreSQL",
      "Redis",
      "Prisma ORM",
      "Docker",
    ],
    businessOutcomes: [
      "100% proprietary intellectual property with zero ongoing licensing fees",
      "Scalable architecture prepared to handle 10x traffic growth without rewrites",
      "Elimination of manual operational bottlenecks across distributed teams",
    ],
    clientTrustNote: "Delivered under NDA with full source code transfer and zero vendor lock-in.",
    timeline: "8–16 weeks typical delivery",
    engagementPricing: "Fixed-price milestone contracts or dedicated sprint cycles",
    faqs: [
      {
        q: "Who owns the code and intellectual property?",
        a: "You retain 100% exclusive ownership of all source code, architecture documents, patents, and git repositories from the moment of payment.",
      },
      {
        q: "Can this system integrate with our existing databases?",
        a: "Yes. We regularly build bridge services and secure sync adapters for legacy SQL databases, ERP systems, and external third-party APIs.",
      },
      {
        q: "How do you ensure long-term maintainability?",
        a: "We adhere strictly to clean code conventions, domain-driven design, comprehensive automated tests, and complete documentation so any qualified engineer can maintain it.",
      },
    ],
  },
  {
    slug: "ai-machine-learning",
    number: "02",
    title: "AI & Machine Learning",
    category: "ai-data",
    categoryLabel: "AI & Intelligence",
    tagline: "Autonomous AI assistants, predictive analytics, intelligent document parsing, and production-grade LLM integrations.",
    shortDescription:
      "Transform proprietary business data into competitive intelligence. We deploy production-ready AI models, Retrieval-Augmented Generation (RAG) knowledge systems, and predictive engines that solve real operational problems.",
    longDescription:
      "Moving beyond generative AI novelties, Virtanex Labs builds reliable, measurable machine learning systems engineered for enterprise ROI. We implement private Retrieval-Augmented Generation (RAG) architectures that allow employees and customers to query your confidential internal documentation safely without data leakage. Our engineers train and fine-tune predictive models that forecast demand, detect anomalies, parse unstructured PDF documents, and automate repetitive human judgment tasks with verifiable precision.",
    iconName: "Cpu",
    whatItIncludes: [
      "Enterprise AI assistants and autonomous agent workflows",
      "Predictive analytics, forecasting engines, and churn/anomaly detection",
      "Intelligent data processing and computer vision OCR pipelines",
      "Machine-learning model integration, fine-tuning, and on-premise inference",
    ],
    deliverables: [
      "Private vector search and semantic retrieval pipelines (pgvector, Pinecone, Qdrant)",
      "Custom autonomous agent systems utilizing LangChain, LlamaIndex, and function calling",
      "Document ingestion engines parsing PDF/DOCX invoices, contracts, and receipts into structured JSON",
      "Model evaluation benchmarks and guardrail safeguards against hallucinations",
      "Enterprise security architecture ensuring zero training on customer proprietary data",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "OpenAI API",
      "Anthropic Claude",
      "LangChain",
      "LlamaIndex",
      "pgvector",
      "Hugging Face",
      "FastAPI",
    ],
    businessOutcomes: [
      "Up to 80% reduction in document processing time and manual manual entry",
      "Guaranteed data privacy with zero model retraining on your confidential assets",
      "Real-time actionable predictive insights driving revenue and inventory planning",
    ],
    clientTrustNote: "Enterprise data privacy guarantee: strict zero-retention API policies and optional private self-hosted models.",
    timeline: "6–12 weeks typical delivery",
    engagementPricing: "Phase 1 PoC evaluation followed by production hardening",
    faqs: [
      {
        q: "Will our company data be used to train public AI models?",
        a: "Never. We enforce zero-data-retention enterprise agreements with foundation model providers or deploy fully air-gapped, open-source models inside your private VPC.",
      },
      {
        q: "How do you prevent hallucinations in business-critical workflows?",
        a: "We implement multi-stage verification, strict source citations, semantic guardrails, and human-in-the-loop escalation paths for sensitive decisions.",
      },
    ],
  },
  {
    slug: "data-engineering-analytics",
    number: "03",
    title: "Data Engineering & Analytics",
    category: "ai-data",
    categoryLabel: "Data Infrastructure",
    tagline: "High-throughput data pipelines, robust ETL/ELT workflows, automated data cleaning, and executive BI dashboards.",
    shortDescription:
      "Turn siloed company databases into unified, audit-ready data warehouses. We build resilient pipelines and executive analytics that provide a single source of truth.",
    longDescription:
      "Modern organizations drown in disconnected data across CRMs, ERPs, payment gateways, and operational logs. Virtanex Labs builds the bedrock data infrastructure required for dependable decision-making. We design clean ETL/ELT pipelines, automate data hygiene and deduplication, and organize your assets into high-performance warehouses. With unified data in place, we deliver interactive, real-time executive dashboards that give stakeholders instant visibility into KPIs, unit economics, and operational efficiency.",
    iconName: "Database",
    whatItIncludes: [
      "Automated data pipelines and batch/real-time streaming architectures",
      "ETL / ELT workflows transforming raw extracts into structured models",
      "Data cleaning, validation schemas, and deduplication routines",
      "Cross-platform API integrations and centralized data warehouses",
      "Executive BI dashboards and automated automated reporting triggers",
    ],
    deliverables: [
      "Automated pipeline orchestrations (Airflow, Dagster, dbt) with failure alerting",
      "Modern cloud data warehouse configuration (BigQuery, Snowflake, PostgreSQL)",
      "Interactive data visualizations and role-specific executive dashboards",
      "Comprehensive data dictionary, lineage tracking, and schema documentation",
      "Automated scheduled reports delivered via email, Slack, or webhook triggers",
    ],
    technologies: [
      "dbt",
      "Apache Airflow",
      "PostgreSQL",
      "Snowflake",
      "Google BigQuery",
      "Python / Pandas",
      "ClickHouse",
      "Apache Kafka",
    ],
    businessOutcomes: [
      "Single source of truth eliminating discrepancy across departmental reports",
      "Elimination of hours spent manually assembling spreadsheets every week",
      "Real-time operational alerts for revenue, churn, and inventory anomalies",
    ],
    clientTrustNote: "Strict access control, end-to-end encryption at rest and in transit, and GDPR compliance.",
    timeline: "6–10 weeks typical delivery",
    engagementPricing: "Architecture setup & pipeline deployment with optional ongoing data ops",
    faqs: [
      {
        q: "Can you connect with our existing tools like Salesforce and Stripe?",
        a: "Yes. We build native API connectors or configure enterprise sync pipelines for over 100+ standard SaaS, payment, and ERP systems.",
      },
      {
        q: "What happens if a pipeline encounters malformed third-party data?",
        a: "Our pipelines use defensive dead-letter queues and automated alerting: malformed records are quarantined without crashing the pipeline, alerting engineers immediately.",
      },
    ],
  },
  {
    slug: "enterprise-system-integration",
    number: "04",
    title: "Enterprise System Integration",
    category: "systems",
    categoryLabel: "System Integration",
    tagline: "Seamless bridges connecting ERPs, CRMs, procurement systems, third-party APIs, and legacy architectures.",
    shortDescription:
      "Break down organizational silos. We construct high-reliability middleware, secure webhook bridges, and bi-directional API synchronizations that keep your core enterprise systems in lockstep.",
    longDescription:
      "Enterprise efficiency collapses when mission-critical software systems cannot communicate. Virtanex Labs specializes in integrating disparate enterprise stacks—connecting legacy on-premises databases with modern cloud SaaS, synchronizing SAP/Oracle ERPs with Salesforce or HubSpot, and unifying procurement and billing platforms. We build resilient middleware featuring automated retry policies, idempotency keys, and transaction logs that ensure zero lost orders, zero duplicated records, and complete audit visibility.",
    iconName: "Network",
    whatItIncludes: [
      "ERP and CRM integrations (SAP, Oracle, NetSuite, Salesforce, HubSpot)",
      "Procurement, supply chain, and billing systems connectivity",
      "Secure third-party API adapters and webhook routing engines",
      "Legacy system modernization and non-disruptive cloud bridge services",
    ],
    deliverables: [
      "Fault-tolerant middleware service with idempotency and replay capabilities",
      "Bi-directional data synchronization with real-time conflict resolution",
      "Enterprise audit logging tracking every transaction and state change",
      "Circuit-breaker architecture protecting core databases from external API downtime",
      "Complete integration mapping specification and failover documentation",
    ],
    technologies: [
      "Node.js / TypeScript",
      "Python",
      "Apache Kafka",
      "RabbitMQ",
      "Redis",
      "GraphQL / REST APIs",
      "OpenAPI",
      "Docker",
    ],
    businessOutcomes: [
      "Zero manual re-keying of customer, sales, or inventory information",
      "Near-instant data synchronization across sales, finance, and operations",
      "Extended lifespan of existing legacy investments without costly rip-and-replace",
    ],
    clientTrustNote: "SOC2-aligned communication protocols, TLS 1.3 encryption, and complete transaction auditability.",
    timeline: "6–12 weeks typical delivery",
    engagementPricing: "Fixed-milestone scoping with comprehensive integration testing",
    faqs: [
      {
        q: "How do you handle downtime in third-party vendor APIs?",
        a: "We implement asynchronous message queuing with exponential backoff and persistent retries, ensuring no customer data or orders are lost during vendor outages.",
      },
      {
        q: "Can you work without disrupting our live production operations?",
        a: "Yes. All integrations are developed in isolated staging environments with shadow-run testing before zero-downtime cutover.",
      },
    ],
  },
  {
    slug: "business-process-automation",
    number: "05",
    title: "Business Process Automation",
    category: "ai-data",
    categoryLabel: "Workflow Automation",
    tagline: "Streamline operations with automated workflows, n8n orchestrations, smart approval systems, and automated document processing.",
    shortDescription:
      "Eliminate repetitive manual busywork. We design autonomous, multi-step workflow automations that connect people, software, and documents into smooth digital pipelines.",
    longDescription:
      "Every hour your skilled team spends copying data between systems, chasing manual approval emails, or formatting PDF invoices is lost revenue. Virtanex Labs builds enterprise business process automations using open-source engines like n8n alongside custom serverless microservices. We automate everything from employee onboarding and contract approvals to inventory alerts, customer billing reconciliation, and scheduled regulatory reporting—delivering immediate operational leverage.",
    iconName: "Workflow",
    whatItIncludes: [
      "End-to-end workflow automation and business logic orchestrations",
      "n8n self-hosted enterprise automations (no per-task licensing fees)",
      "Multi-stage approval systems integrated with Slack, Teams, and email",
      "Automated document processing, PDF generation, and signature routing",
      "Automated operational and financial reporting cycles",
    ],
    deliverables: [
      "Self-hosted, secure n8n / workflow automation instance inside your infrastructure",
      "Automated multi-step workflows with comprehensive error catching and alerts",
      "Interactive approval bots for Slack and Microsoft Teams",
      "Document ingestion and transformation pipelines (Invoices, Receipts, Contracts)",
      "Operational health dashboards and automated execution logs",
    ],
    technologies: [
      "n8n (Self-Hosted)",
      "Node.js",
      "Python",
      "Slack / Teams APIs",
      "Webhooks",
      "DocuSign / PandaDoc APIs",
      "PostgreSQL",
    ],
    businessOutcomes: [
      "Hundreds of hours saved every month across operations, HR, and accounting",
      "Near-zero human data entry errors and 10x faster turnaround times",
      "Zero escalating SaaS subscription costs via self-hosted automation infrastructure",
    ],
    clientTrustNote: "Self-hosted workflows ensure your sensitive internal files never leave your corporate firewall.",
    timeline: "3–8 weeks typical delivery",
    engagementPricing: "Workflow sprint packages with documented SOPs and team training",
    faqs: [
      {
        q: "Why do you recommend self-hosted n8n over Zapier or Make?",
        a: "n8n gives you complete data privacy (runs inside your own cloud), zero arbitrary task-volume fees, and total flexibility to write custom code nodes when needed.",
      },
      {
        q: "What happens if an automated step fails?",
        a: "Every automation includes dead-letter error handling that notifies your team via Slack/email with the exact error details and one-click retry capabilities.",
      },
    ],
  },
  {
    slug: "cloud-devops-engineering",
    number: "06",
    title: "Cloud & DevOps Engineering",
    category: "systems",
    categoryLabel: "Cloud & Infrastructure",
    tagline: "Rock-solid cloud infrastructure, automated CI/CD pipelines, container orchestration, 24/7 observability, and server management.",
    shortDescription:
      "Deploy with confidence. We architect scalable, automated cloud environments on AWS, GCP, and Azure that reduce hosting expenses and eliminate downtime.",
    longDescription:
      "Reliability is not an afterthought; it is an architectural requirement. Virtanex Labs builds secure, repeatable cloud foundations using Infrastructure as Code (IaC) with Terraform. We containerize applications with Docker, orchestrate deployments with Kubernetes or lightweight serverless platforms, and configure automated GitHub Actions CI/CD pipelines that test, lint, and deploy code in minutes. We integrate deep observability so your team identifies and resolves performance anomalies before users ever notice.",
    iconName: "Cloud",
    whatItIncludes: [
      "Docker containerization and Kubernetes orchestration",
      "Cloud infrastructure architecture (AWS, Google Cloud, Microsoft Azure, Hetzner)",
      "Automated CI/CD pipelines (GitHub Actions, GitLab CI) with zero-downtime rollouts",
      "Comprehensive monitoring, alerting, and distributed tracing (OpenTelemetry, Prometheus)",
      "Cloud cost optimization, server hardening, and routine security patching",
    ],
    deliverables: [
      "100% Infrastructure-as-Code (Terraform / Pulumi) scripts for reproducible environments",
      "Automated multi-stage CI/CD pipelines running unit, integration, and security checks",
      "Centralized logging, error monitoring, and Grafana / Datadog dashboards",
      "Automated database backup, point-in-time recovery, and failover configurations",
      "Cloud architecture documentation, security posture review, and cost audit",
    ],
    technologies: [
      "AWS (ECS, EKS, Lambda, S3)",
      "Google Cloud Platform",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Prometheus & Grafana",
      "Cloudflare",
    ],
    businessOutcomes: [
      "99.95%+ platform uptime with automated self-healing container policies",
      "Deployment cycle times reduced from days to minutes with zero manual intervention",
      "Typical 20% to 40% reduction in unnecessary monthly cloud hosting bills",
    ],
    clientTrustNote: "Deployed directly into your own cloud accounts—you retain 100% root ownership and billing governance.",
    timeline: "4–10 weeks typical delivery",
    engagementPricing: "Infrastructure audit & setup, or ongoing DevOps retainer",
    faqs: [
      {
        q: "Do you have access to our live production data?",
        a: "We practice least-privilege access management. We configure role-based IAM credentials and do not require permanent access to sensitive databases.",
      },
      {
        q: "Can you help optimize our runaway AWS or GCP bill?",
        a: "Yes. Our cloud audits typically identify immediate savings of 20–40% through right-sizing instances, storage tiering, and optimizing architectural bottlenecks.",
      },
    ],
  },
  {
    slug: "product-engineering",
    number: "07",
    title: "Product Engineering",
    category: "core",
    categoryLabel: "Product & MVP",
    tagline: "Rapid MVP development, scalable product architecture, SaaS engineering, and continuous feature expansion.",
    shortDescription:
      "Transform ambitious concepts into market-ready digital products. We take tech ventures from back-of-the-napkin ideas to tested, validated, high-traction platforms.",
    longDescription:
      "Product engineering requires a delicate balance: moving fast enough to capture market opportunities without creating unmaintainable technical debt. At Virtanex Labs, we act as the technical co-founder and product development team for funded startups and innovation divisions. We engineer high-velocity MVPs built on robust, production-ready foundations so that when your product reaches product-market fit, your codebase is already prepared to scale to tens of thousands of paying users.",
    iconName: "Rocket",
    whatItIncludes: [
      "Rapid MVP development engineered for fast investor and customer validation",
      "Scalable SaaS product architecture and modular domain-driven design",
      "Full-lifecycle web and mobile feature development and maintenance",
      "Product analytics, onboarding funnels, and retention instrumentation",
    ],
    deliverables: [
      "Production launch-ready web and/or mobile application built on modern stacks",
      "Customer onboarding, authentication, and multi-tier subscription billing (Stripe)",
      "Analytics and event tracking integration (PostHog, Mixpanel) to measure user engagement",
      "Structured product backlog, sprint boards, and prioritized engineering roadmaps",
      "Complete documentation, staging environments, and technical knowledge transfer",
    ],
    technologies: [
      "Next.js",
      "React Native",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Stripe Billing",
      "PostHog",
      "Vercel",
    ],
    businessOutcomes: [
      "Go from concept to production-ready MVP in 6 to 10 weeks",
      "Built on scalable architecture that will not require a complete rewrite after launch",
      "Full visibility into engineering velocity with weekly clickable demos",
    ],
    clientTrustNote: "Fixed-scope milestone contracts protect your runway—no hidden developer fees or scope creep.",
    timeline: "6–12 weeks typical delivery",
    engagementPricing: "Fixed MVP packages with phased sprint milestones",
    faqs: [
      {
        q: "How fast can you build and launch an MVP?",
        a: "Our typical MVP delivery window is 6 to 10 weeks, depending on complexity. We focus on core high-value features first to get you in front of real customers rapidly.",
      },
      {
        q: "Can you help our team take over the codebase after launch?",
        a: "Absolutely. We provide comprehensive documentation, recorded code walkthroughs, and transition pairing sessions to onboard your internal hires.",
      },
    ],
  },
  {
    slug: "ui-ux-digital-product-design",
    number: "08",
    title: "UI/UX & Digital Product Design",
    category: "quality",
    categoryLabel: "Product Design",
    tagline: "Nordic-inspired user experiences, complex dashboard ergonomics, scalable design systems, and conversion-optimized interfaces.",
    shortDescription:
      "Design that makes sophisticated systems feel effortless. We create intuitive, accessible user interfaces backed by reusable Figma design systems and UX research.",
    longDescription:
      "Great enterprise software should feel as refined, fast, and pleasant to use as the best consumer products. Rooted in clean Nordic design aesthetics, Virtanex Labs crafts digital products that eliminate cognitive load and guide users naturally to their goals. From dense data analytics dashboards to complex multi-step checkout funnels, we translate intricate business rules into crisp, beautiful, and accessible interfaces that users genuinely love using every day.",
    iconName: "Palette",
    whatItIncludes: [
      "Web application and mobile product interface design",
      "Data-dense dashboards, visualization consoles, and admin tools",
      "Comprehensive Figma design systems and component token libraries",
      "UX research, user journey mapping, and conversion rate optimization",
    ],
    deliverables: [
      "Clickable, interactive high-fidelity Figma prototypes with realistic user flows",
      "Scalable component library with typography, color tokens, and layout guidelines",
      "WCAG 2.1 AA accessibility compliant color palettes and keyboard navigation specs",
      "Production-ready design tokens matching Tailwind CSS and React component libraries",
      "Developer handoff files with precise spacing, micro-interactions, and state variants",
    ],
    technologies: [
      "Figma",
      "Design Tokens",
      "Radix / Base UI Primitives",
      "Tailwind CSS",
      "Lucide Icons",
      "Protopie",
    ],
    businessOutcomes: [
      "Higher conversion rates and reduced customer churn through intuitive UX",
      "50% faster frontend engineering delivery via aligned design token systems",
      "A modern, premium brand presence that establishes instant enterprise credibility",
    ],
    clientTrustNote: "Every screen tested against WCAG 2.1 AA accessibility standards for enterprise inclusivity.",
    timeline: "3–6 weeks typical delivery",
    engagementPricing: "Design sprint engagements with clickable interactive prototypes",
    faqs: [
      {
        q: "Do you provide clickable prototypes for user testing?",
        a: "Yes. Every design engagement includes fully interactive Figma prototypes that simulate the exact feel of a real application before writing a line of code.",
      },
      {
        q: "Can you modernize our existing clunky application without a complete rebuild?",
        a: "Yes. We frequently conduct UX audits and redesign existing applications modularly, allowing engineering teams to upgrade views incrementally.",
      },
    ],
  },
  {
    slug: "software-testing-qa",
    number: "09",
    title: "Software Testing & QA",
    category: "quality",
    categoryLabel: "Quality Assurance",
    tagline: "Automated end-to-end testing, API contract verification, performance load testing, and regression protection.",
    shortDescription:
      "Ship with total peace of mind. We implement automated test suites and QA practices that catch regressions before your customers ever encounter them.",
    longDescription:
      "Buggy software damages customer trust and burns engineering hours on fire drills. Virtanex Labs embeds rigorous Quality Assurance into your software development lifecycle. We build automated end-to-end test suites with Playwright, write unit and integration tests with Vitest, verify API contracts, and perform stress testing to find breaking points under heavy concurrent user loads. The result: fearless deployments and stable software that operates flawlessly under pressure.",
    iconName: "CheckCircle2",
    whatItIncludes: [
      "Automated End-to-End (E2E) testing with Playwright and Cypress",
      "API testing, contract verification, and schema validation",
      "Integration testing, database state assertions, and mock service layers",
      "Performance, concurrency, and load stress testing (k6, Locust)",
    ],
    deliverables: [
      "Full automated E2E test suite running in your CI/CD pipeline on every Pull Request",
      "API test harness verifying status codes, response payloads, and edge cases",
      "Performance load testing report identifying database and memory bottlenecks",
      "Comprehensive test coverage reports and defect tracking dashboard",
      "Documented QA protocols and reproducible regression test cases",
    ],
    technologies: [
      "Playwright",
      "Vitest / Jest",
      "k6 Load Testing",
      "GitHub Actions",
      "Postman / Newman",
      "Supertest",
      "Docker",
    ],
    businessOutcomes: [
      "Zero high-severity bugs reaching production users",
      "Developers deploy code multiple times daily with total confidence",
      "Drastic reduction in emergency weekend hotfixes and customer support tickets",
    ],
    clientTrustNote: "Continuous regression gates prevent broken releases from ever hitting production.",
    timeline: "3–8 weeks typical engagement",
    engagementPricing: "QA automation audit & test suite implementation, or ongoing QA support",
    faqs: [
      {
        q: "Can automated tests be added to our existing codebase?",
        a: "Yes. We regularly introduce Playwright E2E suites to existing production apps from the outside in, testing critical user paths without requiring invasive code changes.",
      },
      {
        q: "Do you run performance and stress tests?",
        a: "Yes. Using tools like k6, we simulate thousands of concurrent users to identify database query bottlenecks and server memory limits before your major launch.",
      },
    ],
  },
  {
    slug: "dedicated-development-teams",
    number: "10",
    title: "Dedicated Development Teams",
    category: "core",
    categoryLabel: "Staff Augmentation",
    tagline: "Senior remote engineers, full-stack pods, QA specialists, and ongoing technical leadership integrated into your team.",
    shortDescription:
      "Scale your engineering velocity without recruitment delays. We provide senior full-stack developers, frontend/backend specialists, and QA engineers who work as a natural extension of your team.",
    longDescription:
      "Hiring top-tier engineering talent is slow, expensive, and high-risk. Virtanex Labs provides vetted, senior software engineers who integrate directly into your sprint rituals, Slack channels, and Git repositories. Whether you need a dedicated pod to own an entire product initiative or specialist senior engineers to augment your internal team, we offer flexible month-to-month contracts with guaranteed seniority, clear English communication, and European engineering culture.",
    iconName: "Users2",
    whatItIncludes: [
      "Senior remote developers (Frontend, Backend, Full-Stack, DevOps, QA)",
      "Autonomous dedicated engineering pods managed by technical leads",
      "Direct participation in your daily standups, sprint planning, and code reviews",
      "Ongoing product maintenance, feature development, and infrastructure support",
    ],
    deliverables: [
      "Seamless integration within 5 business days into your Slack, Jira/Linear, and GitHub",
      "Daily asynchronous check-ins, transparent git commits, and sprint delivery reports",
      "Zero recruitment, benefits, or hardware overhead on your balance sheet",
      "Flexible monthly team scaling up or down with 30-day notice",
      "Continuous code review and quality oversight from a Virtanex Labs technical principal",
    ],
    technologies: [
      "TypeScript",
      "React / Next.js",
      "Node.js",
      "Python / FastAPI",
      "PostgreSQL",
      "AWS / Cloud",
      "Docker",
      "Linear / Jira",
    ],
    businessOutcomes: [
      "Immediate engineering bandwidth without 6-month recruiting cycles",
      "Consistent sprint velocity with senior engineers who require zero hand-holding",
      "Cost-effective scaling with transparent monthly billing and no long-term lock-ins",
    ],
    clientTrustNote: "Strict NDA protection, 100% intellectual property assignment, and guaranteed seniority.",
    timeline: "Onboarding within 5–7 business days",
    engagementPricing: "Transparent monthly developer retainers with 30-day flexibility",
    faqs: [
      {
        q: "How do our internal teams communicate with the engineers?",
        a: "Directly. Engineers join your company's Slack, attend your daily standups, work in your timezone, and commit directly to your repositories.",
      },
      {
        q: "What is the minimum engagement commitment?",
        a: "Our dedicated team engagements are structured month-to-month with a simple 30-day notice period, giving you complete flexibility over headcount.",
      },
    ],
  },
  {
    slug: "technical-consulting",
    number: "11",
    title: "Technical Consulting",
    category: "systems",
    categoryLabel: "Advisory & Strategy",
    tagline: "Architecture reviews, technology selection, legacy modernization roadmaps, and technical due diligence assessments.",
    shortDescription:
      "Make high-stakes technology decisions with certainty. We provide senior architectural guidance, codebase audits, and modernization strategies that prevent costly missteps.",
    longDescription:
      "Choosing the wrong software architecture, database engine, or cloud strategy can burden a business with millions in technical debt. Virtanex Labs acts as an objective, senior technical advisory partner for founders, CTOs, and investment funds. We evaluate existing codebases for security vulnerabilities and scaling bottlenecks, recommend modern technology stacks tailored to your unit economics, and formulate realistic migration roadmaps that modernize legacy infrastructure without halting business operations.",
    iconName: "Compass",
    whatItIncludes: [
      "Comprehensive software architecture reviews and scalability audits",
      "Objective technology selection and tech stack feasibility analysis",
      "Legacy system modernization roadmaps with phased zero-downtime migrations",
      "Technical due diligence assessments for investors and M&A acquisitions",
    ],
    deliverables: [
      "Executive Technical Audit Report identifying critical risks, debt, and bottlenecks",
      "Target Architecture Blueprint with component diagrams and data flow specifications",
      "Technology Selection Matrix scoring candidate frameworks against your constraints",
      "Step-by-step phased modernization roadmap with time and budget estimates",
      "Executive presentation and Q&A session with your leadership team and board",
    ],
    technologies: [
      "System Architecture",
      "Cloud Cost Modeling",
      "Security Audits",
      "Database Optimization",
      "Microservices vs Monolith Analysis",
    ],
    businessOutcomes: [
      "Avoid six-figure technology investment blunders before writing code",
      "Unbiased, vendor-neutral recommendations focused solely on business ROI",
      "Actionable, prioritized blueprint that internal engineering teams can execute immediately",
    ],
    clientTrustNote: "Independent, vendor-neutral advisory with strictly confidential audit findings.",
    timeline: "2–4 weeks typical advisory engagement",
    engagementPricing: "Fixed-fee architectural audit and strategic advisory packages",
    faqs: [
      {
        q: "When is a technical architecture review needed?",
        a: "Common triggers include scaling challenges, preparing for a major funding round or acquisition, planning a legacy rewrite, or recurring cloud outages.",
      },
      {
        q: "Do you only advise, or can you also help execute the recommendations?",
        a: "Both. We can provide purely objective advisory, or our engineering pods can step in to execute the modernization roadmap alongside your team.",
      },
    ],
  },
];

// Helper to look up service by slug, including backwards compatibility for older links
export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  if (slug === "web-development") {
    return SERVICES_LIST.find((s) => s.slug === "custom-software-development");
  }
  if (slug === "mobile-apps") {
    return SERVICES_LIST.find((s) => s.slug === "product-engineering");
  }
  if (slug === "custom-software") {
    return SERVICES_LIST.find((s) => s.slug === "custom-software-development");
  }
  if (slug === "ui-ux-design") {
    return SERVICES_LIST.find((s) => s.slug === "ui-ux-digital-product-design");
  }
  if (slug === "ai-automation") {
    return SERVICES_LIST.find((s) => s.slug === "ai-machine-learning");
  }
  return SERVICES_LIST.find((s) => s.slug === slug);
}
