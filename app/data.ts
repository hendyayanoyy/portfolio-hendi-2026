export type Project = {
  title: string;
  area: string;
  year: string;
  tech: string;
  summary: string;
  details: string[];
  link?: string;
};

export const capabilities = [
  { title: "AI Product Development", copy: "Turning practical AI use cases into product workflows people can actually use." },
  { title: "Web Platforms", copy: "Building customer-facing sites and internal tools across the full delivery path." },
  { title: "Business Automation", copy: "Connecting data, schedules, and operational steps so repetitive work runs quietly." },
  { title: "System Integration", copy: "Making APIs, third-party services, and internal systems work as one product." },
  { title: "Full-Stack Delivery", copy: "Moving from interface and API design through database, deployment, and iteration." },
];

export const projects: Project[] = [
  { title: "CSR → SSR Migration", area: "Meatguy · Architecture", year: "Team project", tech: "Nuxt 3", summary: "Re-architected the Meatguy website from client-side to server-side rendering to improve SEO, crawlability, and first-load delivery.", details: ["Audited route-level rendering and hydration cost.", "Moved data fetching into Nuxt server routes.", "Preserved the editorial experience through the migration."] },
  { title: "Bilingual Blogs", area: "Meatguy · Content", year: "Team project", tech: "Nuxt 3 / Express / PostgreSQL", summary: "Built a bilingual publishing layer so one CMS could serve the same editorial catalog across two locales.", details: ["Locale-routed pages backed by shared content IDs.", "Translation storage with editorial fallback.", "Locale-aware metadata, hreflang, and sitemap output."] },
  { title: "Author Pages", area: "Meatguy · Trust", year: "Team project", tech: "Nuxt 3 / Express", summary: "Added author bylines and per-author archives to make editorial ownership visible and improve content trust signals.", details: ["Author records with role, biography, and avatar.", "Dynamic author archives aggregating published posts.", "Structured Person and Article metadata."] },
  { title: "Customer Birthday System", area: "Meatguy · CRM", year: "Team project", tech: "Nuxt 3 / Express / PostgreSQL", summary: "A CRM workflow for capturing customer and family birthdays, then scheduling operational reminders.", details: ["Nested family-member records on customer profiles.", "Scheduled reminder events with repeat protection.", "Fast capture and editing through the internal CMS."] },
  { title: "Customer Tiering", area: "Meatguy · CRM", year: "Team project", tech: "Nuxt 3 / Express / Scheduler", summary: "Introduced customer tiers and aligned existing CRM features with the new segmentation rules.", details: ["Tier rules, thresholds, and customer mapping.", "Backfill process for existing customer data.", "Updated gated screens to respect tier eligibility."] },
  { title: "Meatguy × Chope Reservations", area: "Meatguy · Integration", year: "Team project", tech: "Nuxt 3 / Express / Gmail API", summary: "Connected public reservation entry points with internal booking reconciliation and operational visibility.", details: ["Reservation widget on restaurant location pages.", "Booking-confirmation ingestion through Gmail API.", "Reconciliation against internal reservation records."] },
  { title: "Grillz Website", area: "Meatguy · Sub-brand", year: "Team project", tech: "Nuxt 3 / GSAP / Nginx", summary: "A standalone site for Grillz by Meatguy, designed to turn private-event interest into qualified enquiries.", details: ["Scroll-led storytelling with controlled motion.", "Standalone Ubuntu and Nginx deployment.", "Enquiry flow connected directly to operations."], link: "https://grillz.id" },
  { title: "Hampers Campaign", area: "Meatguy · Campaign", year: "Team project", tech: "Nuxt 3", summary: "A time-boxed campaign experience for seasonal hamper packages, built for a mobile-first audience and a fixed launch window.", details: ["Campaign route with controlled active period.", "Reusable content blocks for marketing updates.", "Lean mobile delivery for campaign traffic."] },
  { title: "Miyazaki Wagyu Campaign", area: "Meatguy · Campaign", year: "Team project", tech: "Nuxt 3", summary: "A product-education landing page connecting campaign traffic with clear information about A5 Miyazaki Wagyu cuts.", details: ["Traffic-aware campaign entry points.", "Structured product-grade education.", "Direct paths from content to purchase intent."] },
  { title: "Careers Platform", area: "Meatguy · Hiring", year: "Team project", tech: "Nuxt 3 / CMS", summary: "A public hiring surface for location-based openings, role details, and application paths managed through the existing CMS.", details: ["Location-filtered job listings.", "Structured JobPosting metadata.", "Editorial control for the internal team."] },
];

export const collaborations = [
  { name: "GSTC", type: "Company profile & multilingual content", stack: "Next.js" },
  { name: "Niche Indonesia", type: "Website development & maintenance", stack: "Nuxt 3" },
  { name: "PT Sinar Matahari Nasional", type: "Corporate website development", stack: "WordPress" },
  { name: "Sirlo Steak", type: "Website, CMS & reservation system", stack: "Next.js / NestJS" },
];

export const stack = ["Next.js", "Nuxt 3", "React", "Vue", "TypeScript", "Node.js", "NestJS", "Express", "PostgreSQL", "Tailwind CSS", "REST APIs", "AI Integrations"];
