// Pricing tiers — 3-card structure per brief
export const hostingOptions = [
  {
    id: 'cloud',
    label: 'Cloud-Hosted (SaaS)',
    icon: 'cloud',
    note: 'Deploy on AWS-grade infrastructure within days. End-to-end encryption, daily automated backups, and full activity logs included at every tier.',
  },
  {
    id: 'onprem',
    label: 'On-Premises Local Server',
    icon: 'server',
    note: 'For developers who require data residency inside Pakistan. Your ledger, your servers, your compliance file — RealEstateX runs entirely on infrastructure you control.',
  },
];

export const pricingTiers = [
  {
    id: 'agency',
    name: 'Professional Agent',
    badge: 'Agency Suite',
    audience:
      'Ideal for growing real estate brokerages focusing heavily on sales, leasing, and listing management.',
    highlighted: true,
    ribbon: 'Agency Suite',
    metrics: [
      { icon: 'files', label: 'Property Listings', value: 'Unlimited' },
      { icon: 'seats', label: 'Agent Seats', value: '10' },
      { icon: 'building', label: 'Branch Offices', value: '1' },
    ],
    price: {
      eyebrow: 'Starting Onboarding Milestone',
      amount: 'PKR 3.5 Lac onward',
      note: 'One-time implementation + custom annual license',
    },
    features: [
      'Property Listings',
      'Client CRM',
      'Basic Rental/Sale Tracking',
      'Agent Performance Dashboard',
      'External Property Portal',
    ],
    cta: 'Start Scaling Your Agency',
  },
  {
    id: 'developer',
    name: 'Enterprise Developer',
    badge: 'Developer & Management Plus',
    audience:
      'Engineered for real estate companies, property owners, and asset managers tracking long-term payments.',
    highlighted: true,
    ribbon: 'Developer & Management Plus — Recommended',
    metrics: [
      { icon: 'files', label: 'Active Files / Plots', value: 'Up to 5,000' },
      { icon: 'seats', label: 'User Seats', value: '25' },
      { icon: 'building', label: 'Project Phases', value: 'Unlimited' },
    ],
    price: {
      eyebrow: 'Starting Onboarding Milestone',
      amount: 'PKR 12 Lac onward',
      note: 'Phased implementation + custom annual license',
    },
    features: [
      'Everything in Agency Suite, plus:',
      'Advanced Custom Installment Plans',
      'Automated Invoicing',
      'Realtor Commission Splits',
      'Tenant Maintenance Requests',
      'Native Customer Portal',
    ],
    cta: 'Run Your Development Portfolio',
  },
  {
    id: 'society',
    name: 'Society Ecosystem',
    badge: 'Mega Project / Real Estate Society',
    audience:
      'Custom multi-branch system deployed for massive mega-developments, housing societies, and regional land networks.',
    highlighted: true,
    ribbon: 'Mega Project / Real Estate Society',
    metrics: [
      { icon: 'files', label: 'Properties & Plot Registry', value: 'Unlimited' },
      { icon: 'seats', label: 'User Seats', value: 'Unlimited' },
      { icon: 'building', label: 'Project Phases', value: 'Unlimited' },
    ],
    price: {
      eyebrow: 'Enterprise Proposal',
      amount: 'Custom Quote',
      note: 'Scoped to portfolio size and infrastructure model',
    },
    features: [
      'Unlimited Properties & Plot Ledger Registry',
      'Dedicated Cloud Infrastructure',
      'Custom Local Bank API Integrations',
      'Full AI Automation Suite',
      '24/7 Dedicated Support SLA',
    ],
    cta: 'Speak to Our Solutions Architect',
  },
];

export const pricingDisclaimer =
  'Figures shown reflect standard onboarding milestones for each tier, not a fixed monthly subscription. ' +
  'Final project-based quotes account for legacy data migration, custom module add-ons, and your ' +
  'organization\'s specific regional compliance requirements. Speak with our enterprise team for a proposal scoped to your project.';