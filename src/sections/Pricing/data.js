// data.js
// Enterprise-grade pricing content for the Pakistani real estate / housing
// society market. Deliberately avoids fixed monthly consumer-SaaS pricing —
// framed instead as implementation milestones + custom annual licensing,
// matching how large developers actually procure enterprise software.

export const hostingOptions = [
  {
    id: "cloud",
    label: "Cloud-Hosted (SaaS)",
    icon: "cloud",
    note:
      "Deploy on AWS-grade infrastructure within days. End-to-end encryption, daily automated backups, and full activity logs included at every tier.",
  },
  {
    id: "onprem",
    label: "On-Premises Local Server",
    icon: "server",
    note:
      "For developers who require data residency inside Pakistan. Your ledger, your servers, your compliance file — RealEstateX runs entirely on infrastructure you control.",
  },
];

export const pricingTiers = [
  {
    id: "emerging",
    name: "Emerging Society",
    audience:
      "For single-phase private housing schemes and first-time developers digitizing their society's records.",
    highlighted: false,
    metrics: [
      { icon: "files", label: "Active Files / Plots", value: "Up to 500" },
      { icon: "seats", label: "User Seats", value: "5" },
      { icon: "building", label: "Project Phases", value: "1" },
    ],
    price: {
      eyebrow: "Starting Onboarding Milestone",
      amount: "PKR 3.5 Lac onward",
      note: "One-time implementation + custom annual license",
    },
    features: [
      "Digital ledger & installment tracking — retires the manual registry book",
      "Automated monthly recovery reminders for overdue installments",
      "Single-project tamper-proof balloting & plot allocation",
      "Standard LDA / RDA / CDA-compliant agreement templates",
      "Quarterly account review with email support",
    ],
    cta: "Request Launch Proposal",
  },
  {
    id: "established",
    name: "Established Enterprise",
    audience:
      "For multi-phase developers and established broker networks running several active societies at once.",
    highlighted: true,
    ribbon: "Most Chosen by Growing Developers",
    metrics: [
      { icon: "files", label: "Active Files / Plots", value: "Up to 5,000" },
      { icon: "seats", label: "User Seats", value: "25" },
      { icon: "building", label: "Project Phases", value: "Unlimited" },
    ],
    price: {
      eyebrow: "Starting Onboarding Milestone",
      amount: "PKR 12 Lac onward",
      note: "Phased implementation + custom annual license",
    },
    features: [
      "Everything in Emerging Society, plus:",
      "AI Installment Recovery Agent — predictive default flagging before month-end",
      "Automated Dealer Commission Engine with dispute-proof settlement records",
      "Multi-society, multi-phase balloting & allocation management",
      "Dedicated account manager with on-site onboarding",
    ],
    cta: "Schedule Discovery Call",
  },
  {
    id: "mega",
    name: "Mega-Project Elite",
    audience:
      "For DHA and Bahria Town-scale developers and large broker networks running multiple flagship projects.",
    highlighted: false,
    metrics: [
      { icon: "files", label: "Active Files / Plots", value: "Unlimited" },
      { icon: "seats", label: "User Seats", value: "Unlimited" },
      { icon: "building", label: "Project Phases", value: "Unlimited" },
    ],
    price: {
      eyebrow: "Enterprise Proposal",
      amount: "Custom Quote",
      note: "Scoped to portfolio size and infrastructure model",
    },
    features: [
      "Everything in Established Enterprise, plus:",
      "Full Agentic AI Workforce — recovery, commission, balloting & reporting agents",
      "Custom module development for your society's specific by-laws",
      "Dedicated on-premise or private-cloud infrastructure",
      "Legacy registry migration team + white-glove 24/7 support with SLA",
    ],
    cta: "Book Executive Briefing",
  },
];

export const pricingDisclaimer =
  "Figures shown reflect standard onboarding milestones for each tier, not a fixed monthly subscription. " +
  "Final project-based quotes account for legacy data migration from physical registry ledger books, " +
  "custom module add-ons, and your organization's specific regional compliance requirements. " +
  "Speak with our enterprise team for a proposal scoped to your project.";