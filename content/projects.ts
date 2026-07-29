export type FeaturedProject = {
  slug: string;
  title: string;
  industry: string;
  description: string;
  technologies: string[];
  outcome: string;
};

export const featuredWorkSection = {
  eyebrow: "Featured Work",
  title: "Proof through outcomes, not buzzwords",
  description:
    "Selected projects that show how automation translates into real business results.",
  viewAllCta: { label: "View All Case Studies", href: "/case-studies" },
  viewCaseStudyCta: "View Case Study",
  sectionId: "case-studies",
  projectTagsAriaLabel: "Technologies used",
} as const;

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "closekit-saas-operations",
    title: "CloseKit SaaS Operations",
    industry: "Real Estate SaaS",
    description:
      "Streamlined demos, tech onboarding, and client support so CloseKit could scale delivery without slowing growth.",
    technologies: ["GoHighLevel", "API", "Freshdesk"],
    outcome: "Helped grow MRR from 4-digit to 5-digit while resolving 2,000+ support tickets.",
  },
  {
    slug: "johnsenlaw-automation-platform",
    title: "JohnsenLaw Automation Platform",
    industry: "Legal",
    description:
      "Automated client intake, LeanLaw profile creation, agreement generation, and team notifications after every close.",
    technologies: ["Zapier", "LeanLaw", "Google Forms", "Gmail", "Google Drive"],
    outcome: "Removed the manual intake loop and improved client tracking to about 90%.",
  },
  {
    slug: "tepl-client-lifecycle-system",
    title: "TEPL Client Lifecycle System",
    industry: "Legal · Estate & Probate",
    description:
      "Rebuilt CRM pipelines and workflows across sales, onboarding, fulfillment, and client updates.",
    technologies: ["GoHighLevel"],
    outcome:
      "Attorneys stay focused on legal work while onboarding supports matters from $300–$4,000+.",
  },
];
