export type ProjectVisual = {
  url: string;
  src?: string;
  label: string;
  position?: string;
};

export type Project = {
  slug: string;
  name: string;
  role: string;
  period: string;
  url: string;
  tech: string;
  scope: string;
  intro: string;
  contribution: string[];
  visuals: ProjectVisual[];
  mobileSrc?: string;
};

export const projects: Project[] = [
  {
    slug: "spicelab-ai",
    name: "Spicelab.ai",
    role: "Full-Stack Web Developer · AI Product",
    period: "AI Platform",
    url: "https://www.spicelab.ai",
    tech: "Web Platform · AI Integrations · Product Systems",
    scope: "AI-powered content, agent, and workflow experiences across customer-facing product surfaces and internal operations.",
    intro: "An AI operations platform designed for Indonesian businesses, connecting customer conversations, content production, and CRM workflows in one product surface.",
    contribution: ["Customer-facing product experience", "AI feature and workflow integration", "Responsive interface and production delivery"],
    mobileSrc: "/projects/spicelab/overview.webp",
    visuals: [
      { url: "https://www.spicelab.ai", src: "/projects/spicelab/overview.webp", label: "Product overview", position: "center" },
      { url: "https://www.spicelab.ai", src: "/projects/spicelab/capabilities.webp", label: "AI capabilities", position: "center" },
      { url: "https://www.spicelab.ai", src: "/projects/spicelab/platform.webp", label: "Industry workflows", position: "center" },
    ],
  },
  {
    slug: "meatguy-ecosystem",
    name: "Meatguy Ecosystem",
    role: "Full-Stack Web Developer",
    period: "Dec 2024 — Present",
    url: "https://meatguysteakhouse.com",
    tech: "Nuxt 3 · Express · PostgreSQL",
    scope: "Public website, internal CMS, CRM capabilities, campaigns, integrations, and operational tooling.",
    intro: "A connected digital ecosystem for a premium steakhouse: brand storytelling, editorial content, menus, reservations, careers, campaigns, and internal operations.",
    contribution: ["Public site and content architecture", "CMS, CRM, and operational workflows", "Campaign and reservation integrations"],
    visuals: [
      { url: "https://meatguysteakhouse.com", label: "Brand homepage" },
      { url: "https://meatguysteakhouse.com/story", label: "Brand story" },
      { url: "https://meatguysteakhouse.com/collection/meat", label: "Signature collection" },
      { url: "https://meatguysteakhouse.com/careers", label: "Careers platform" },
    ],
  },
  {
    slug: "grillz-by-meatguy",
    name: "Grillz by Meatguy",
    role: "Full-Stack Web Developer",
    period: "PT Daging Grup Indonesia",
    url: "https://grillz.id",
    tech: "Nuxt 3 · GSAP · Nginx",
    scope: "Standalone brand website for private steak experiences, including scroll-led storytelling, enquiry paths, and production deployment.",
    intro: "A cinematic, scroll-led site for private steak parties delivered at the customer’s location, balancing atmosphere with a direct enquiry path.",
    contribution: ["Scroll-led frontend experience", "Responsive enquiry journey", "Standalone production deployment"],
    visuals: [
      { url: "https://grillz.id", src: "/projects/grillz/opening.webp", label: "Opening experience", position: "center" },
      { url: "https://grillz.id", src: "/projects/grillz/experience.webp", label: "Social proof & testimonials", position: "center" },
      { url: "https://grillz.id", src: "/projects/grillz/service.webp", label: "Events & service detail", position: "center" },
      { url: "https://grillz.id", src: "/projects/grillz/contact.webp", label: "Contact & reservation", position: "center" },
    ],
  },
  {
    slug: "golden-sugar",
    name: "Golden Sugar",
    role: "Full-Stack Web Developer",
    period: "2025 — Present",
    url: "https://www.goldensugar.id",
    tech: "Nuxt 3 · CMS · APIs",
    scope: "Customer-facing brand platform connected to an internal content and operational CMS.",
    intro: "A warm editorial commerce presence for an artisan bakery, connecting product discovery, seasonal storytelling, galleries, and journal content.",
    contribution: ["Public brand and menu experience", "Content and gallery surfaces", "CMS-backed publishing workflow"],
    visuals: [
      { url: "https://www.goldensugar.id", label: "Brand homepage", position: "top" },
      { url: "https://www.goldensugar.id", label: "Menu collection", position: "28%" },
      { url: "https://www.goldensugar.id", label: "Visual gallery", position: "58%" },
      { url: "https://www.goldensugar.id", label: "Sweet journal", position: "82%" },
    ],
  },
  {
    slug: "marbl",
    name: "Marbl",
    role: "Full-Stack Web Developer",
    period: "2025 — Present",
    url: "https://marbl.id",
    tech: "Modern Web Stack",
    scope: "Digital product delivery across interface, application logic, and production deployment.",
    intro: "A modern brand platform developed across interface, application logic, and production delivery.",
    contribution: ["Responsive frontend implementation", "Application integration", "Production deployment"],
    visuals: [
      { url: "https://marbl.id", label: "Homepage", position: "top" },
      { url: "https://marbl.id", label: "Brand narrative", position: "36%" },
      { url: "https://marbl.id", label: "Product surface", position: "68%" },
    ],
  },
  {
    slug: "meatgainz",
    name: "Meatgainz",
    role: "Full-Stack Web Developer",
    period: "2025 — Present",
    url: "https://meatgainz.id",
    tech: "Modern Web Stack",
    scope: "Product website and supporting digital experience within the PT Daging Grup Indonesia ecosystem.",
    intro: "A focused product and brand experience within the PT Daging Grup Indonesia ecosystem.",
    contribution: ["Brand-facing product interface", "Responsive web implementation", "Production handoff and deployment"],
    visuals: [
      { url: "https://meatgainz.id", label: "Opening frame", position: "top" },
      { url: "https://meatgainz.id", label: "Product story", position: "38%" },
      { url: "https://meatgainz.id", label: "Conversion surface", position: "bottom" },
    ],
  },
  {
    slug: "gstc",
    name: "GSTC",
    role: "Full-Stack Developer · Freelance",
    period: "Pre–Dec 2024",
    url: "https://www.gstca.org",
    tech: "Next.js",
    scope: "Content-heavy company profile work with multilingual delivery and close UI/UX collaboration.",
    intro: "A content-heavy multilingual platform for the Global Sustainable Tourism Council, delivered in close collaboration with design and infrastructure teams.",
    contribution: ["Next.js frontend delivery", "Multilingual content surfaces", "UI/UX and DevOps collaboration"],
    visuals: [
      { url: "https://www.gstca.org", label: "Organization homepage" },
      { url: "https://www.gstca.org/about", label: "Organization profile" },
      { url: "https://www.gstca.org/certification", label: "Certification content" },
    ],
  },
  {
    slug: "sirlo-steak",
    name: "Sirlo Steak",
    role: "Full-Stack Developer · Freelance",
    period: "Pre–Dec 2024",
    url: "https://sirlosteak.com",
    tech: "Next.js · NestJS",
    scope: "Website, content management system, and reservation workflow delivered end to end.",
    intro: "An end-to-end restaurant platform combining the public brand site, content management, and a reservation workflow.",
    contribution: ["Website and interface delivery", "NestJS application layer", "CMS and reservation workflow"],
    visuals: [
      { url: "https://sirlosteak.com", label: "Brand homepage", position: "top" },
      { url: "https://sirlosteak.com", label: "Dining experience", position: "42%" },
      { url: "https://sirlosteak.com", label: "Reservation journey", position: "bottom" },
    ],
  },
];

export const projectCapture = (visual: ProjectVisual) =>
  visual.src ?? `https://image.thum.io/get/fullpage/width/1800/noanimate/${visual.url}`;
