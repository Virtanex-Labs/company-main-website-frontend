export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface SiteConfig {
  name: string;
  legalName?: string;
  tagline: string;
  description: string;
  url: string;
  location: {
    country: string;
    city: string;
    region: string;
    timezone: string;
  };
  services: ServiceItem[];
  ctaPrimary: {
    label: string;
    href: string;
  };
  nav: Array<{
    label: string;
    href: string;
  }>;
  contact: {
    email: string;
    location: string;
  };
  socials: {
    github: string;
    linkedin: string;
    x: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Virtanex Labs",
  legalName: "Virtanex Labs Oy",
  tagline: "From idea to launch, without the headaches.",
  description:
    "Finland-based software company specializing in web development, mobile apps, custom software, UI/UX design, and AI automation.",
  url: "https://virtanexlabs.com",
  location: {
    country: "Finland",
    city: "Helsinki",
    region: "Nordics / Europe",
    timezone: "Europe/Helsinki",
  },
  services: [
    {
      id: "web-development",
      title: "Web Development",
      description:
        "High-performance modern web applications, scalable platforms, and cloud-ready architectures.",
    },
    {
      id: "mobile-apps",
      title: "Mobile Apps",
      description:
        "Fast, fluid native and cross-platform mobile apps for iOS and Android.",
    },
    {
      id: "custom-software",
      title: "Custom Software",
      description:
        "Bespoke enterprise systems, microservices, secure APIs, and distributed cloud backends.",
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description:
        "Nordic-inspired user experiences, accessible design systems, and pixel-perfect interactive prototypes.",
    },
    {
      id: "ai-automation",
      title: "AI Automation",
      description:
        "Autonomous agent workflows, Generative AI integrations, Local RAG, and business process automation.",
    },
  ],
  ctaPrimary: {
    label: "Book a Consultation",
    href: "/contact",
  },
  nav: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  contact: {
    email: "contact@virtanexlabs.com",
    location: "Helsinki, Finland",
  },
  socials: {
    github: "https://github.com/virtanex-labs",
    linkedin: "https://linkedin.com/company/virtanex-labs",
    x: "https://x.com/virtanexlabs",
  },
};

export default siteConfig;

