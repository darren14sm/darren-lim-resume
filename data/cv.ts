/**
 * ALL RESUME CONTENT LIVES HERE.
 * Edit roles, dates, bullets, links and labels in this file only.
 * Components read from it; you should not need to touch them to update the site.
 */

export type Bullet = { lead?: string; text: string };

export type Role = {
  title: string;
  dates: string;
  summary?: string;
  bullets: Bullet[];
  flow?: { label: string; steps: string[] };
};

export type Organisation = {
  name: string;
  dates: string;
  description: string;
  note?: string;
  status?: string;
  roles: Role[];
};

export type EarlierEntry = {
  dates: string;
  org: string;
  place?: string;
  role: string;
  concurrent?: boolean;
  description: string;
};

export const site = {
  /** Canonical production URL. Used for the canonical tag and absolute social URLs. */
  url: "https://darren-lim-resume.vercel.app",
  /** Browser tab and search result title. */
  title: "Darren Lim | Digital Resume: commercial operator, Bali",
  description:
    "Digital resume for Darren Lim. Commercially focused operator: revenue, partnerships, commercial systems and problem solving across hospitality, media and lifestyle businesses in Bali.",
  /** Link preview on Facebook, WhatsApp and X. Replace public/og-image.png to change the picture; keep it 1200 x 630. */
  social: {
    title: "DARREN LIM - DIGITAL RESUME | BALI",
    description: "DARREN LIM - DIGITAL RESUME | BALI",
    image: { src: "/og-image.png", width: 1200, height: 630, alt: "Darren Lim digital resume" },
  },
};

export const person = {
  name: "Darren Lim",
  kicker: ["Digital Resume", "2026", "Bali, Indonesia"],
  disciplines: [
    ["Commercial Operations", "Business Development", "Partnerships"],
    ["Revenue", "Systems", "Problem Solving"],
  ],
  statement:
    "Commercially focused operator with over six years of experience driving revenue, building partnerships, and fixing operational bottlenecks across hospitality, media, and lifestyle businesses. Progressed from sales and account management into General Management, specializing in rapid commercial diagnosis and executable solutions.",
  principle: "I don't prescribe before I diagnose.",
  portrait: {
    src: "/portrait.jpg", // replace public/portrait.jpg to change the photo
    alt: "Portrait of Darren Lim",
    width: 1000,
    height: 1348,
  },
};

export const contact = {
  location: "Seminyak, Bali, Indonesia",
  phone: { label: "+62 878 6201 3258", href: "tel:+6287862013258" },
  email: { label: "darren14sm@gmail.com", href: "mailto:darren14sm@gmail.com" },
  linkedin: {
    label: "linkedin.com/in/darren-lim-a16a67a2",
    href: "https://linkedin.com/in/darren-lim-a16a67a2",
  },
  /**
   * Downloadable ATS-friendly resume.
   * `href` is the Google Drive copy. The same file also ships with the site at
   * /Darren-Lim-Resume-2026.pdf, so you can point `href` there instead if you
   * would rather serve it yourself.
   */
  resume: {
    label: "Download resume",
    note: "ATS-friendly PDF",
    href: "https://drive.google.com/file/d/1WzCYWp6AQxkeoA6TonznC0TtV37M92VF/view?usp=sharing",
    local: "/Darren-Lim-Resume-2026.pdf",
  },
};

export const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Competencies", href: "#competencies" },
  { label: "Systems", href: "#systems" },
  { label: "Frameworks", href: "#approach" },
  { label: "Case studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

/* Evidence markers */
export const metrics = [
  {
    value: "6+",
    label: "Years regional experience",
    note: "Hospitality, lifestyle media, F&B and brand partnerships across Bali.",
  },
  {
    value: "4",
    label: "Commercial documents automated",
    note: "Proposal, quotation, contract and invoice generation engines, built in house.",
  },
  {
    value: "3×",
    label: "Monthly revenue benchmark",
    note: "Moved to three times its original baseline and held as the standing monthly target rather than a peak month.",
  },
  {
    value: "85,546",
    label: "Catalant expert profile",
    note: "Qualified and eligible for opportunities.",
  },
];

/* Career progression, read in one line above the detail */
export const progression = {
  caption: "The through-line. Concurrent roles are marked as such below.",
  steps: [
    "Sales & account management",
    "Business development & commercial work",
    "General management",
    "Independent commercial & communications practice",
  ],
};

export const experience: Organisation[] = [
  {
    name: "360 Bali / Bali Food & Travel",
    dates: "2020 – Sept 2026",
    description:
      "PT. 360 Bali Multimedia. Hospitality and lifestyle media platform in Bali. Six years with the business, from media sales into general management.",
    roles: [
      {
        title: "General Manager",
        dates: "June 2024 – Sept 2026",
        summary:
          "Commercial strategy, partnerships, pricing, sales operations, editorial, systems and the team.",
        bullets: [
          {
            text: "Moved the monthly revenue benchmark to three times its original baseline, a 200% increase, establishing the higher figure as the standing monthly target rather than a peak month.",
          },
          {
            lead: "Engineered an end-to-end sales operations system from scratch:",
            text: "proposal, quotation, contract and invoice generation, automated pricing logic, discount tiering and sales-tracker integration, replacing a manual workflow for the entire team.",
          },
          {
            text: "Owned end-to-end hospitality partnerships with luxury hotels, groups and lifestyle brands across Bali, managing proposition, pricing, execution, delivery and performance reporting.",
          },
          {
            text: "Directed SEO and AEO-led editorial strategies, and led cross-functional creative and operational teams.",
          },
          {
            text: "Resolved a critical platform security breach, and onboarded two executive successors with the operating documentation and handover structures they run on.",
          },
        ],
        flow: { label: "Commercial cycle held", steps: ["Proposition", "Pricing", "Sales", "Delivery", "Reporting"] },
      },
      {
        title: "Account & Sales Executive",
        dates: "2020 – 2023",
        bullets: [
          {
            text: "Led media sales and hospitality advertising partnerships across the Bali market, selling within the manual quoting process I later replaced as General Manager.",
          },
        ],
      },
    ],
  },
  {
    name: "FREK",
    dates: "Aug 2026 – present",
    status: "Current",
    description:
      "Independent practice in Bali: PR, editorial and artist communications for dance music and electronic culture. Concurrent.",
    note: "Artist-facing. Not a social media agency, venue PR, booking, artist management or production.",
    roles: [
      {
        title: "Independent Practice, Project Lead, PR & Communications",
        dates: "",
        summary:
          "A market gap turned into a structured commercial proposition, and the place where the method gets tested on my own business.",
        bullets: [
          {
            text: "Established practice infrastructure from zero: service architecture, published rate card, campaign methodology, researched media database and artist-management outreach workflows.",
          },
          {
            text: "Set the commercial boundary between professional fee and third-party media cost, and declined to sell guaranteed coverage or a fixed placement count.",
          },
          {
            text: "Executed targeted outreach to international artist management firms and record labels in the UK, Europe and North America. One paid assignment delivered.",
          },
          {
            lead: "Still an emerging practice.",
            text: "The work evidences method and commercial judgement; the model is not yet validated.",
          },
        ],
        flow: { label: "Campaign method", steps: ["Understand", "Define", "Position", "Match", "Build", "Measure", "Report"] },
      },
    ],
  },
];

export const earlier: EarlierEntry[] = [
  {
    dates: "2022 – 2024",
    org: "222 Bottle Bali",
    role: "Business Development Manager",
    concurrent: true,
    description:
      "Led business development, acquisition marketing and e-commerce platform building for a Bali-based beverage business. The business has since closed.",
  },
  {
    dates: "2025 – 2026",
    org: "Club Corazon",
    place: "Uluwatu, Bali",
    role: "Club Promoter & PR Support",
    concurrent: true,
    description:
      "Guest relations, hospitality and PR within nightlife and electronic music, across six weekend months.",
  },
  {
    dates: "2020 – 2023",
    org: "360 Digital Agency",
    role: "Account Manager",
    concurrent: true,
    description:
      "Same group. Managed end-to-end digital campaigns and KPI performance reporting for luxury hospitality accounts, including Jumeirah Bali, COMO Uma Canggu and COMO Uma Ubud.",
  },
  {
    dates: "2018 – 2019",
    org: "IFBB",
    role: "Event Marketing",
    description: "Managed media relations and event logistics.",
  },
];

/* Career chronology. `concurrent` marks a role held alongside another. */
export const career = [
  { years: "2018 – 2019", stage: "Event marketing", org: "IFBB", theme: "Communication" },
  { years: "2020 – 2023", stage: "Media sales & partnerships", org: "360 Bali", theme: "Sales" },
  { years: "2020 – 2023", stage: "Account management", org: "360 Digital Agency", theme: "Client management", concurrent: true },
  { years: "2022 – 2024", stage: "Business development", org: "222 Bottle Bali", theme: "Commercial work", concurrent: true },
  { years: "2024 – 2026", stage: "General management", org: "360 Bali / Bali Food & Travel", theme: "Commercial operations and leadership" },
  { years: "2026 – present", stage: "Independent practice", org: "FREK", theme: "Commercial strategy and communications" },
];

/* Core competencies */
export const competencies = [
  { group: "Commercial Strategy & Operations", items: ["General Management", "Commercial Operations", "Revenue Architecture", "Pricing Strategy"] },
  { group: "Business Development", items: ["Revenue Growth", "Partnerships", "Team Leadership", "Market Research & Intelligence"] },
  { group: "Systems & Automation", items: ["Commercial Systems Design", "Google Apps Script", "Process Automation", "SaaS Management"] },
  { group: "Strategic Communications", items: ["Editorial Direction", "Public Relations & Communications"] },
  { group: "Industry Sectors", items: ["Digital Media & Publishing", "Advertising", "Lifestyle", "Entertainment", "Hospitality", "F&B"] },
];

export const systems = {
  title: "Sales operations system, built in house.",
  flow: ["Rate card", "Proposal", "Package calculator", "Quotation", "Contract", "Invoice", "Sales tracker"],
  story: [
    { step: "Business problem", text: "A manual sales-to-invoice workflow: documents retyped at every stage, pricing carried in people's memory, discounts decided case by case." },
    { step: "System design", text: "One rate card as the source of truth, with every document carrying the one before it forward." },
    { step: "Automation", text: "Document generation, automated pricing logic, duration-based discount tiering, document numbering and tracker integration." },
    { step: "Operational result", text: "The manual workflow was replaced for the entire team." },
  ],
  note: "The capability is commercial systems design and operational governance. Apps Script is the implementation tool.",
};

export const platforms = {
  items: ["Google Workspace", "Google Sheets", "Google Apps Script", "WordPress", "SEO", "AEO"],
};

/* Operating frameworks */
export const frameworks = [
  {
    id: "methodology",
    name: "The Commercial Methodology",
    caption: "How I solve problems.",
    steps: ["Diagnose", "Prioritize", "Intervention Design", "Stakeholder Alignment", "Execute", "Iterate"],
    loops: false,
  },
  {
    id: "system",
    name: "The Commercial System",
    caption: "How I build revenue.",
    steps: ["Proposition", "Pricing", "Sales", "Delivery", "Reporting", "Retention"],
    loops: true,
  },
];

export const education = {
  school: "Binus University",
  degree: "Bachelor's Degree in Creative Digital English",
  detail: "GPA 3.9 / 4.0",
};

export const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Professional working, near-native" },
];

export const credentials = [
  {
    name: "Catalant Expert Profile",
    detail: "Profile score 85,546. Qualified and eligible for opportunities.",
    href: "https://app.gocatalant.com/app/next/expert/profile/1zdrdg",
  },
];

/* Case studies: diagnosis, intervention, outcome */
export const caseStudies = [
  {
    kicker: "Fixing & scaling an existing operation",
    title: "The Next Life of 360 Bali",
    href: "https://360-bali-case-study.vercel.app/",
    sections: [
      {
        label: "Approach",
        text: "I walked into an existing business where commercial functions were fragmented, pricing relied heavily on memory, and sales workflows were largely manual.",
      },
      {
        label: "Execution",
        text: "I engineered an automated end-to-end commercial toolchain. The purpose was a consistent commercial operating cycle, not document automation for its own sake.",
        flow: ["Rate Card", "Proposal", "Calculator", "Quotation", "Contract", "Invoice", "Sales Tracker"],
      },
      {
        label: "Outcome",
        text: "The standing monthly revenue benchmark was moved to 3× its original baseline.",
      },
    ],
  },
  {
    kicker: "Rapid commercial diagnosis & structuring",
    title: "From Communication to Commercial Thinking",
    href: "https://frek-case-study-darren-lim.vercel.app/",
    sections: [
      {
        label: "Approach",
        text: "I identified a structural market gap around artist communications: venues often controlled the narrative while artists and their management lacked a dedicated communications layer. I built a commercial proposition around that gap in nine days.",
      },
      {
        label: "Execution",
        text: "Held the creative environment and the commercial one apart, then built the service architecture on top, including the separation between professional fees and third-party costs. I refused to sell guaranteed outcomes.",
        split: [
          { label: "Sandbox", text: "Creative and exploratory environment." },
          { label: "Business", text: "Commercial and revenue environment." },
        ],
      },
      {
        label: "Commercial proof",
        text: "A client challenged the proposed budget. I reduced the media spend by 80%, removing lower-attribution items, while retaining 75% of the actual placements. I did not discount my professional fee.",
      },
    ],
  },
];

export const workWithMe = {
  heading: "Open to commercial roles and fixed-price project work.",
  text: "For project work I prefer a defined scope and a fixed price, agreed once the problem is understood.",
  areas: ["Commercial strategy", "Business development", "Partnerships", "Commercial operations", "Systems design"],
};
