// =============================================================================
// commonData.js — Single source of truth for ALL static content & data
// Covers: every section's data.js + inline text extracted from JSX files
// =============================================================================

import { images } from '../assets/images.js';
import {
    ChartPie,
    FileText,
    Sparkles,
    UsersRound,
    Building2,
    Receipt,
    Handshake,
    LayoutDashboard,
    Users,
    Cloud,
    Server,
} from 'lucide-react';

// =============================================================================
// SITE / BRAND GLOBALS
// =============================================================================
export const brand = {
    name: 'PropertyVerx',
    logoText: 'PropertyVer',
    logoAccent: 'X',
    footerLogoText: 'RealEstate',
    footerLogoAccent: 'X',
    tagline: 'The Next-Gen Real Estate OS',
    copyright: '© 2026',
    copyrightLink: 'https://hashverx.com/',
    copyrightLinkText: 'Hashverx',
    copyrightSuffix: '. All Rights Reserved.',
    appUrl: 'app.propertyverx.io',
};

// =============================================================================
// CONTACT / SALES INFO  (from ContactForm/data.js)
// =============================================================================
export const SALES_EMAIL = 'sales@propertyverx.com';
export const SALES_PHONE = '+92 300 1234567';
export const SALES_PHONE_HREF = 'tel:+923001234567';
export const SALES_CALL_HREF = 'tel:+923344071716';

export const PROJECT_TYPES = [
    'Agency',
    'Property Developer',
    'Real Estate Society',
    'Land Owner',
];

export const initialForm = {
    fullName: '',
    companyName: '',
    workEmail: '',
    projectType: '',
    message: '',
};

// =============================================================================
// NAVBAR  (inline text from Navbar/index.jsx & MobileMenu/index.jsx)
// =============================================================================
export const navbarContent = {
    callBtnText: 'Call Now',
    demoBtnText: 'Book Live Demo',
    mobileDemoBtnText: 'Book Demo',
    callHref: SALES_CALL_HREF,
    links: [
        { label: 'AI Agents', href: '#agents' },
        { label: 'Core Features', href: '#features' },
        { label: 'Security', href: '#security' },
        { label: 'Pricing', href: '#pricing' },
    ],
    mobileFooterNote: 'HashVerx © 2026',
};

// =============================================================================
// ANNOUNCEMENT BAR  (inline text from App.jsx / AnnouncementBar usage)
// =============================================================================
export const announcementContent = {
    id: 'text-only',
    text: 'We now support on-premise deployment for CDA-regulated projects.',
};

// =============================================================================
// HERO SECTION  (Hero/data.js + inline text from Hero/index.jsx)
// =============================================================================
export const heroContent = {
    sectionTag: 'The Next-Gen Real Estate OS',
    title:
        'The Enterprise Real Estate OS: Automate Listings, Installments, and Agent Commissions',
    description:
        'A unified management platform built for modern developers, realtors, and property societies. Streamline buying, selling, and leasing with automated invoicing, localized flexible installment plans, and an instant client portal.',
    primaryBtn: 'Book a Live Demo',
    secondaryBtn: '📞 Call Sales Team',
    mockupAlt: 'PropertyVerx Dashboard',
};

// Pain-points ticker (was Hero/data.js → painPoints)
export const painPoints = [
    'Losing revenue due to manual installment tracking?',
    'Dealing with agent commission disputes?',
    'Struggling with messy Excel file records?',
    'Customers constantly calling for ledger updates?',
];

// =============================================================================
// BANNER (Interstitial)  (inline text from Banner/index.jsx)
// =============================================================================
export const bannerContent = {
    title: 'This Is Not Just Software. This Is an AI-Powered Operating System.',
    description: 'Replace slow manual processes with the speed of intelligent automation.',
    btnText: 'See AI in Action',
};

// =============================================================================
// AI AGENTS SECTION  (Agents/data.js + inline text from Agents/index.jsx)
// =============================================================================
export const agentsContent = {
    sectionTag: 'Operational AI',
    sectionTitle: 'Intelligent Property Tech:',
    sectionTitleAccent: 'AI-Driven Real Estate Operations',
    sectionDesc:
        'PropertyVerx replaces manual effort with intelligent AI agents that understand your society data like a human expert.',
};

export const agentsData = [
    {
        title: 'Predictive Smart Lead and Tenant Matching',
        desc: 'Match verified buyers and prospective tenants with available properties, plots, or commercial spaces using predictive budget and behavioral analysis.',
        cmd: '"Match verified buyers with suitable properties based on budget and behavior."',
        icon: UsersRound,
    },
    {
        title: 'Automated Smart Contract & Rental Generation',
        desc: 'Feed property parameters directly into our localized AI engine to draft, audit, and instantly generate air-tight rental agreements and purchase deeds.',
        cmd: '"Generate a rental agreement for a commercial property."',
        icon: FileText,
    },
    {
        title: 'Intelligent Real-Time Revenue Forecasting Engine',
        desc: 'Run predictive cash flow models on your entire development portfolio. Let AI calculate project timelines against future monthly installment collections.',
        cmd: '"Forecast monthly cash flow for all active development projects."',
        icon: ChartPie,
    },
    {
        title: 'AI-Generated SEO Optimization for Listings',
        desc: 'Instantly generate high-converting, professional property descriptions tailored for regional listing portals with a single click inside your dashboard.',
        cmd: '"Generate an SEO-optimized listing description for a 10 Marla plot."',
        icon: Sparkles,
    },
];

// =============================================================================
// CTA MID SECTION  (inline text from CTA_Mid/index.jsx)
// =============================================================================
export const ctaMidContent = {
    eyebrow: 'See It In Action',
    heading: 'Want to see how easy it is to set up a',
    headingAccent: '36-months',
    headingSuffix: 'custom property installment plan?',
    btnText: 'Book a Live Demo',
    contactHref: '#contact',
};

// =============================================================================
// FEATURES SECTION  (Feature/data.js + inline text from Feature/index.jsx)
// =============================================================================
export const featuresContent = {
    sectionTitle: 'Everything Needed to Scale Your',
    sectionTitleAccent: 'Real Estate Operations',
    sectionDesc: 'A full-lifecycle ERP designed for the high-stakes property market.',
    urlBar: 'app.propertyverx.io',
};

export const featureData = {
    property: {
        title: 'Multi-Mode Property, Plot & Land Management',
        icon: Building2,
        image: images.feature.propertyManagement,
        text: 'Efficiently manage vast development portfolios, commercial spaces, or multi-family properties under rental, purchase, or off-plan booking modes.',
    },
    accounting: {
        title: 'Advanced Installment Plans & Dynamic Accounting',
        icon: Receipt,
        image: images.feature.installments,
        text: 'Create custom down-payment, balloon-payment, and monthly installment matrices with automated ledger calculation, rebates, and instant digital receipts.',
    },
    realtor: {
        title: 'Realtor, Broker & Commission Management',
        icon: Handshake,
        image: images.feature.agentComission,
        text: 'Keep your sales pipelines healthy. Track external broker networks and internal agents with automated multi-tier commission splits and automated rebate structures.',
    },
    listings: {
        title: 'Secure Public Property Listings Portal',
        icon: LayoutDashboard,
        image: images.feature.listingOfProperty,
        text: 'Push properties live directly from your internal inventory onto an external, lightning-fast public listing site complete with high-res galleries and interactive booking forms.',
    },
    customer: {
        title: 'Transparent End-User Customer Portal',
        icon: Users,
        image: images.feature.tucep,
        text: 'Give buyers and tenants complete control. Let them log in to track their remaining balance, download active invoices, view payment histories, and request maintenance.',
    },
};

// =============================================================================
// CRM FEATURE TABS DATA  (was MockData.js → featureData, renamed to avoid conflict)
// =============================================================================
export const crmTabsData = {
    crm: {
        title: 'CRM & Lead Management',
        bullets: ['Track walk-in, digital & dealer leads', 'Convert leads to members in 1 click', 'Automated follow-up reminders'],
        text: 'PropertyVerx provides a powerful real estate CRM built for Asian property markets. Track every inquiry and convert prospects into file holders with ease.',
        keywords: 'real estate management system',
    },
    member: {
        title: 'Member & File Creation',
        bullets: ['Biometric verification', 'Digital archive of CNIC/Passport', 'Automatic file numbering'],
        text: 'Digitize every file registration. Ensure your records are tamper-proof and accessible 24/7 with our central repository.',
        keywords: 'File management system',
    },
    install: {
        title: 'Installment Plans & Auto Invoicing',
        bullets: ['Auto-generating payment schedules', 'SMS/WhatsApp invoice alerts', 'Late fee fine engine'],
        text: 'Stop manual installment tracking. Our engine calculates dues, sends alerts, and updates ledgers instantly when a payment is confirmed.',
        keywords: 'installment tracking software',
    },
    inventory: {
        title: 'Units & Inventory Management',
        bullets: ['Interactive map integration', 'Real-time availability status', 'Plot blocking & reservation'],
        text: "Know exactly what is sold, what is available, and what is on hold with a bird's-eye map view of your inventory.",
        keywords: 'inventory management system',
    },
    ballot: {
        title: 'Balloting & Allotment Engine',
        bullets: ['Provable digital balloting', 'Randomized allocation logic', 'Allotment letter generation'],
        text: 'Run massive balloting events with total transparency. Our engine handles the logic for thousands of plots in minutes.',
        keywords: 'balloting system software',
    },
    noc: {
        title: 'File Transfer & NOC System',
        bullets: ['Workflow-based transfers', 'NDC/NOC issuance portal', 'Buyer verification'],
        text: 'Streamline transfers safely. PropertyVerx ensures all dues are clear before a file ownership is transferred.',
        keywords: 'Property management system',
    },
    dealer: {
        title: 'Dealer Management',
        bullets: ['Dealer hierarchy tracking', 'Automatic commission rebates', 'Dealer performance portals'],
        text: 'Automating payouts for your sales network. Dealers can track their own commissions and sales performance in real-time.',
        keywords: 'dealer commission management',
    },
    accounting: {
        title: 'Accounting & Partial Payments',
        bullets: ['Double-entry bookkeeping', 'Token payment support', 'Expense tracking'],
        text: 'Full-scale accounting built for real estate. Track cashflow and generate profit/loss reports for your society projects.',
        keywords: 'real estate ERP Asia',
    },
};

// =============================================================================
// OPERATIONS SECTION  (Operations/data.js)
// =============================================================================
export const operations = [
    {
        label: 'Asset & Landlord Operations',
        image: images.operations.assetsLandlordOps,
        alt: 'Landlord property configuration screen showing asset details and inspection alerts',
        desc: 'Configure every property — type, interior, exterior, amenities — and track inspections, work orders, and asset status in one place.',
    },
    {
        label: 'Agent Operations',
        image: images.operations.agentOps,
        alt: 'Agent assignment and commission invoice screen',
        desc: "Agents see only the properties they're assigned to, with automatic commission lines generated the moment a tenancy agreement is confirmed.",
    },
    {
        label: 'Tenant Operations',
        image: images.operations.tenantOps,
        alt: 'Tenant maintenance request and booking confirmation screen',
        desc: 'Tenants browse available properties, reserve or buy directly, and submit maintenance requests without ever calling the office.',
    },
    {
        label: 'Finance Operations',
        image: images.operations.financeOps,
        alt: 'Billing dashboard showing synced vendor and tenant invoices',
        desc: 'Installments, partial payments, and vendor invoices are generated automatically from confirmed agreements — no manual entry required.',
    },
];

// =============================================================================
// COUNTER / FOOTPRINT SECTION  (Counter/data.js + inline from Counter/index.jsx)
// =============================================================================
export const counterContent = {
    tag: 'Our Operating Footprint',
};

export const footprintData = [
    {
        value: 35,
        suffix: '%',
        prefix: '',
        display: '35%',
        label: 'Decrease in Installment and Collection Delays',
    },
    {
        value: null,
        suffix: '',
        prefix: '',
        display: '24/7',
        label: 'Real-Time Cash Flow, Escrow, and Sales Visibility',
    },
    {
        value: null,
        suffix: '',
        prefix: '',
        display: 'Zero',
        label: 'Manual Errors on Complex Agent Commission Splits',
    },
    {
        value: 100,
        suffix: '%',
        prefix: '',
        display: '100%',
        label: 'Automated Invoicing and Rental Agreement Reminders',
    },
];

// =============================================================================
// ACCREDITATION / COMPLIANCE SECTION  (Accredatation/data.js + inline from index.jsx)
// =============================================================================
export const accreditationContent = {
    label: 'Built for Compliance, Regulated for Security',
    description:
        'Our real estate ecosystem integrates natively with regional housing authorities, land departments, and financial frameworks to protect legal data and transaction integrity.',
};

export const accreditations = [
    { id: 'fbr', logo: images.compliance.fbr, alt: 'Federal Board of Revenue (FBR)' },
    { id: 'rera', logo: images.compliance.rera, alt: 'Real Estate Regulatory Authority (RERA)' },
    { id: 'lda', logo: images.compliance.lda, alt: 'Lahore Development Authority (LDA)' },
    { id: 'pseb', logo: images.compliance.pseb, alt: 'Pakistan Software Export Board (PSEB)' },
    { id: 'ruda', logo: images.compliance.ruda, alt: 'Ravi Urban Development Authority (RUDA)' },
    { id: 'rda', logo: images.compliance.rda, alt: 'Rawalpindi Development Authority (RDA)' },
    { id: 'iso', logo: images.compliance.iso, alt: 'International Organization for Standardization (ISO)' },
];

// =============================================================================
// TRUSTED BY SECTION  (TrustedBy/data.js)
// =============================================================================
export const trustedClients = [
    { id: 1, name: 'Askari', logo: images.trustedClients.askari },
    { id: 2, name: 'Blue World City', logo: images.trustedClients.blueWorld },
    { id: 3, name: 'DHA', logo: images.trustedClients.dha },
    { id: 4, name: 'Lake City', logo: images.trustedClients.lakeCity },
    { id: 5, name: 'Park View City', logo: images.trustedClients.parkViewCity },
    { id: 6, name: 'Etihad Group', logo: images.trustedClients.etihadGroup },
];

// =============================================================================
// TESTIMONIALS SECTION  (Testimonials/data.js + inline from Testimonials/index.jsx)
// =============================================================================
export const testimonialsContent = {
    heading: 'Our Customers Love',
    headingAccent: 'PropertyVerx',
};

export const testimonials = [
    {
        id: 1,
        before:
            'Managing thousands of plots and tracking individual monthly installment collections across our real estate society used to be an administrative nightmare.  This platform',
        bold: ' automated the entire workflow.',
        after: '',
        name: 'Property Developer',
        role: 'CEO',
        company: 'Real Estate Society',
        avatarType: 'initials',
        initials: 'PD',
    },
    {
        id: 2,
        before:
            "The commission splits engine alone saved our backend operations hours of work. Our realtors log in to see exactly what they've closed,",
        bold: 'boosting transparency and team morale.',
        after: '',
        name: 'Agency Owner',
        role: 'Managing Realtor',
        company: 'Real Estate Agency',
        avatarType: 'initials',
        initials: 'AO',
    },
];

// =============================================================================
// SECURITY SECTION  (Security/data.js + inline from Security/index.jsx)
// =============================================================================
export const securityContent = {
    sectionTag: 'Cybersecurity & Deployment',
    heading: 'Enterprise Grade Security & Deployment Flexibility',
    bodyText:
        'Run PropertyVerx on Tier-1 AWS cloud infrastructure, or keep every record on a server you control the same security guarantees apply either way.',
    specsTitle: 'Security Guarantees',
};

export const securityHostingOptions = [
    {
        icon: Cloud,
        title: 'AWS Cloud Hosting',
        caption: 'Rapid deployment on Tier-1 AWS infrastructure.',
    },
    {
        icon: Server,
        title: 'On-Premises Server',
        caption: 'Full data residency on infrastructure you control.',
    },
];

export const securitySpecs = [
    {
        title: 'End-to-End Data Encryption',
        caption: 'Every record and transaction is protected, at rest and in transit.',
    },
    {
        title: 'Daily Automated Backups',
        caption: 'Nightly cloud backups so no ledger entry or agreement is ever lost.',
    },
    {
        title: 'Immutable Activity Logs',
        caption: 'Every user action is timestamped and permanently recorded for auditability.',
    },
];

// =============================================================================
// PRICING SECTION  (Pricing/data.js + inline from Pricing/index.jsx)
// =============================================================================
export const pricingContent = {
    eyebrow: 'Enterprise Investment',
    heading: 'Pricing Built for Scale, Not Subscriptions',
    subhead:
        'PropertyVerx is procured the way enterprise infrastructure is procured — scoped to your portfolio, not billed like a phone app.',
};

export const pricingHostingOptions = [
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
        note: 'For developers who require data residency inside Pakistan. Your ledger, your servers, your compliance file — PropertyVerx runs entirely on infrastructure you control.',
    },
];

export const pricingTiers = [
    {
        id: 'agency',
        name: 'Professional Agent',
        badge: 'Agency Suite',
        audience:
            'Ideal for growing real estate brokerages focusing heavily on sales, leasing, and listing management.',
        highlighted: false,
        ribbon: '',
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
            'Property Listings.',
            'Client CRM.',
            'Basic Rental/Sale Tracking.',
            'Agent Performance Dashboard.',
            'External Property Portal.',
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
        ribbon: 'Recommended',
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
            'Everything in Agency Suite plus.',
            'Advanced Custom Installment Plans.',
            'Automated Invoicing.',
            'Realtor Commission Splits.',
            'Tenant Maintenance Requests.',
            'Native Customer Portal.',
        ],
        cta: 'Run Your Development Portfolio',
    },
    {
        id: 'society',
        name: 'Society Ecosystem',
        badge: 'Mega Project / Real Estate Society',
        audience:
            'Custom multi-branch system deployed for massive mega-developments, housing societies, and regional land networks.',
        highlighted: false,
        ribbon: '',
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
            'Unlimited Properties & Plot Ledger Registry.',
            'Dedicated Cloud Infrastructure.',
            'Custom Local Bank API Integrations.',
            'Full AI Automation Suite.',
            '24/7 Dedicated Support SLA.',
        ],
        cta: 'Speak to Our Solutions Architect',
    },
];

export const pricingDisclaimer =
    'Figures shown reflect standard onboarding milestones for each tier, not a fixed monthly subscription. ' +
    'Final project-based quotes account for legacy data migration, custom module add-ons, and your ' +
    "organization's specific regional compliance requirements. Speak with our enterprise team for a proposal scoped to your project.";

// =============================================================================
// COMPARISON SECTION  (Comparison/data.js + inline from Comparison/index.jsx)
// =============================================================================
export const comparisonContent = {
    eyebrow: 'How We Compare',
    title: 'One Platform,',
    titleAccent: 'No Compromises',
    subtitle: "See how PropertyVerx stacks up against the tools you're already juggling.",
    thFeature: 'Feature Matrix',
    footnote: 'Swipe sideways on mobile to see the full comparison →',
};

export const competitors = [
    { key: 'propertyverx', name: 'Our Real Estate OS', highlight: true },
    { key: 'legacyErps', name: 'Legacy Real Estate ERPs', highlight: false },
    { key: 'basicCrms', name: 'Basic Listing CRMs', highlight: false },
    { key: 'manualSheets', name: 'Manual Spreadsheets', highlight: false },
];

export const comparisonRows = [
    {
        feature: 'Custom Installment Matrices',
        propertyverx: 'Yes (Built-in)',
        legacyErps: 'Add-on Only',
        basicCrms: 'No',
        manualSheets: 'Error-Prone',
    },
    {
        feature: 'Native Customer & Buyer Portal',
        propertyverx: 'Yes (Free Native)',
        legacyErps: 'Highly Expensive',
        basicCrms: 'No',
        manualSheets: 'No',
    },
    {
        feature: 'Multi-Tier Agent Commission Splits',
        propertyverx: 'Yes (Automated)',
        legacyErps: 'Basic Tracking',
        basicCrms: 'Manual',
        manualSheets: 'Manual Calculation',
    },
    {
        feature: 'Rental & Sale/Purchase Modes',
        propertyverx: 'Yes (Unified)',
        legacyErps: 'Separate Modules',
        basicCrms: 'Sale Only',
        manualSheets: 'Separate Files',
    },
    {
        feature: 'Automated Invoicing & Reminders',
        propertyverx: 'Yes (SMS & Email)',
        legacyErps: 'Complex Setup',
        basicCrms: 'Manual',
        manualSheets: 'Manual',
    },
];

// =============================================================================
// EDGE GRID SECTION  (inline hardcoded table data from EdgeGrid/index.jsx)
// =============================================================================
export const edgeGridContent = {
    sectionTitle: 'The',
    sectionTitleAccent: 'PropertyVerx',
    sectionTitleSuffix: 'Edge',
    col1Header: 'Capability',
    col2Header: 'PropertyVerx AI-OS',
    col3Header: 'Legacy Systems / Excel',
    rows: [
        { capability: 'Data Access', propertyverx: 'AI Command Search', legacy: 'Manual Filtering' },
        { capability: 'Revenue Recovery', propertyverx: 'Automated Workflows', legacy: 'Manual Phone Calls' },
        { capability: 'Security', propertyverx: 'End-to-End Encryption', legacy: 'Local Excel Risks' },
    ],
};

// =============================================================================
// FAQ SECTION  (FAQ/data.js + inline from FAQ/index.jsx)
// =============================================================================
export const faqContent = {
    sectionTitle: 'Common',
    sectionTitleAccent: 'Questions',
};

export const faqData = [
    {
        q: 'How secure is our member data?',
        a: 'We use end-to-end encryption and offer deployment on both global cloud servers (AWS) and local on-premise servers.',
    },
    {
        q: 'Can we migrate from existing Excel files?',
        a: 'Yes! Our team handles the entire data migration process cleanly within days.',
    },
    {
        q: 'Is there a mobile app for customers?',
        a: 'Absolutely. We provide a Member Portal and mobile-optimized interfaces.',
    },
];

// =============================================================================
// MULTI-FAQ SECTION  (MultiFAQ/data.js + inline from MultiFAQ/index.jsx)
// =============================================================================
export const multiFaqContent = {
    eyebrow: 'Support Center',
    sectionTitle: 'Frequently Asked',
    sectionTitleAccent: 'Questions',
    sectionSubtitle:
        'Everything you need to know about deploying PropertyVerx for your society, development company, or broker network.',
    ctaText: 'Still have questions?',
    ctaBtnText: 'Talk to our team',
    ctaHref: '#contact',
};

export const faqItems = [
    {
        q: 'Can the platform support compound, variable, or non-standard installment plans?',
        a: 'Yes. The backend is designed with extreme financial flexibility. You can configure arbitrary down payments, uneven quarterly balloon structures, customized processing rebates, and automated grace periods matching any booking structure.',
    },
    {
        q: 'How does the system handle broker networks and multi-tier agent commissions?',
        a: 'The system automatically applies predefined split matrices when a sale or booking is recorded. It handles internal sales reps, external agency fees, and multi-tier payouts, pushing clean payouts straight into your corporate ledger.',
    },
    {
        q: 'Is the Customer Portal white-labeled under our own real estate brand?',
        a: 'Absolutely. When your buyers or tenants log in to check their active installment progress or lease status, they see only your logo, custom brand assets, and personalized domain.',
    },
    {
        q: 'Can we migrate our existing property inventory and active customer data safely?',
        a: 'Yes. Our specialized real estate onboarding engineers will carefully map, cleanse, and securely import your historical payment files, plot registers, and tenant histories into the new framework with zero down-time.',
    },
    {
        q: 'Does the platform automate payment reminders when an installment date approaches?',
        a: 'Yes. The automated engine dispatches SMS, email, and native tenant portal notifications based on a custom schedule you control (e.g., 5 days before, on the due date, and when overdue), cutting collection lag drastically.',
    },
];

// =============================================================================
// CTA SECTION  (inline text from CTA/index.jsx)
// =============================================================================
export const ctaContent = {
    heading:
        'Ready to eliminate manual spreadsheets and centralize your entire property inventory?',
    btnText: 'Consult with a Real Estate Systems Architect',
    contactHref: '#contact',
};

// =============================================================================
// ARTICLES / MARKET INSIGHTS  (Articles/data.js)
// =============================================================================
export const marketInsights = [
    {
        id: 'rx-01',
        ref: 'RX-2026-01',
        category: 'Research',
        icon: 'search',
        title: 'The 2026 Pakistan Housing Society Benchmark Report',
        description:
            "A data-backed look at how DHA, Bahria Town, and CDA-approved societies are moving from manual ledger registers to fully digital plot management — and what it's costing the developers who haven't.",
        bullets: [
            'Benchmarks recovery rates across 40+ private societies still on manual files',
            'Maps the real cost-per-plot of ledger errors and duplicate allocations',
            'Shows how AI-assisted tracking recovers up to 30% more overdue installments',
        ],
        keywords: ['property management Pakistan', 'DHA Bahria Town software', 'digital plot files'],
        cta: 'Get the Report',
        image: 'https://picsum.photos/seed/rx-karachi-buildings/700/500',
    },
    {
        id: 'rx-02',
        ref: 'RX-2026-02',
        category: 'Article',
        icon: 'news',
        title: 'Ushering in the Era of AI-Powered Society Management',
        description:
            "From balloting halls to head-office ledgers, Pakistani developers are replacing paperwork with autonomous AI agents. Here's what that transition actually looks like on the ground.",
        bullets: [
            'AI agents auto-flag overdue files before disputes reach the front desk',
            'Every plot transfer and allocation logged with a tamper-proof digital trail',
            'Society staff shift from data entry to actual customer relationships',
        ],
        keywords: ['AI real estate ERP', 'society management software Pakistan', 'automated installment recovery'],
        cta: 'Read the Article',
        image: 'https://picsum.photos/seed/rx-professionals-city/700/500',
    },
    {
        id: 'rx-03',
        ref: 'RX-2026-03',
        category: 'Report',
        icon: 'chart',
        title: 'The Installment Recovery Crisis: What Manual Ledgers Are Really Costing You',
        description:
            "Late monthly installments quietly erode developer cash flow every quarter. This report breaks down why manual tracking fails in today's economic climate — and how automated recovery closes the gap.",
        bullets: [
            'Identifies the top 3 points where manual recovery breaks down monthly',
            'Automated reminders recover overdue files without an awkward phone call',
            'Real-time dashboards flag at-risk files 30 days before default',
        ],
        keywords: ['installment recovery Pakistan', 'real estate cash flow', 'property ledger automation'],
        cta: 'Get the Report',
        image: 'https://picsum.photos/seed/rx-lahore-housing/700/500',
    },
    {
        id: 'rx-04',
        ref: 'RX-2026-04',
        category: 'Article',
        icon: 'news',
        title: 'Ending the Dealer Commission Dispute, Once and For All',
        description:
            'Commission disagreements between developers and dealer networks are one of the most common causes of stalled sales in Pakistani real estate. See how a rule-based commission engine removes the argument entirely.',
        bullets: [
            'Fixed and percentage-based commission rules calculated automatically, per agent',
            'Every commission line tied directly to a confirmed sale or tenancy agreement',
            "Dealers see their own settlement history — no more disputed math",
        ],
        keywords: ['dealer commission software', 'real estate broker network Pakistan', 'commission settlement automation'],
        cta: 'Read the Article',
        image: 'https://picsum.photos/seed/rx-agents-handshake/700/500',
    },
    {
        id: 'rx-05',
        ref: 'RX-2026-05',
        category: 'Article',
        icon: 'news',
        title: 'Balloting Without the Back Room: Making Plot Allocation Tamper-Proof',
        description:
            'Masked or manipulated balloting has cost developers public trust for decades. Here\'s how digital allocation engines make every draw auditable, from the first file to the last plot.',
        bullets: [
            'Randomized digital draws remove any manual influence over allocation',
            'Full allocation history available instantly to landlord, agent, and admin',
            'Disputes drop sharply once the process is visible end-to-end',
        ],
        keywords: ['property balloting software', 'plot allocation transparency', 'housing society Pakistan'],
        cta: 'Read the Article',
        image: 'https://picsum.photos/seed/rx-society-aerial/700/500',
    },
    {
        id: 'rx-06',
        ref: 'RX-2026-06',
        category: 'Report',
        icon: 'chart',
        title: 'Quarterly Market Update: The Widening Gap Between Plot Demand and Delivery',
        description:
            "Buyer demand in CDA and RDA-regulated projects keeps outpacing developers' ability to process files manually. This quarter's data shows exactly where the bottleneck sits — and how automation closes it.",
        bullets: [
            'New buyer inquiries up while manual file-processing capacity stays flat',
            'Automated intake and KYC cut onboarding time from weeks to hours',
            'Developers running ERP automation report faster time-to-agreement across the board',
        ],
        keywords: ['real estate market update Pakistan', 'CDA RDA compliance', 'property demand supply'],
        cta: 'Read the Update',
        image: 'https://picsum.photos/seed/rx-islamabad-housing/700/500',
    },
    {
        id: 'rx-07',
        ref: 'RX-2026-07',
        category: 'Article',
        icon: 'news',
        title: 'Are You Actually LDA, RDA, and CDA Compliant — Or Just Assuming You Are?',
        description:
            'Regulatory transparency is no longer optional for serious developers. This piece walks through the documentation gaps manual record-keeping tends to hide, and what full compliance actually requires.',
        bullets: [
            'Digital activity logs create an audit trail regulators can verify instantly',
            'Standardized agreement templates keep clauses inside approved terms',
            'On-premise server options for developers who must keep data within Pakistan',
        ],
        keywords: ['LDA RDA CDA compliance', 'real estate legal transparency Pakistan', 'regulated housing societies'],
        cta: 'Read the Article',
        image: 'https://picsum.photos/seed/rx-govt-buildings/700/500',
    },
    {
        id: 'rx-08',
        ref: 'RX-2026-08',
        category: 'Update',
        icon: 'sparkle',
        title: "What's New in PropertyVerx: Winter Release Notes",
        description:
            'This release focuses on faster commission settlements, a redesigned tenant portal, and smarter overdue-file alerts built for how Pakistani societies actually operate day to day.',
        bullets: [
            'One-click vendor bills for confirmed agent commission settlements',
            'Tenant self-service portal for statements, receipts, and complaints',
            'Smarter overdue alerts that account for local holiday and payment cycles',
        ],
        keywords: ['PropertyVerx release notes', 'property ERP update', 'tenant portal Pakistan'],
        cta: 'Explore the Update',
        image: 'https://picsum.photos/seed/rx-dashboard-ui/700/500',
    },
    {
        id: 'rx-09',
        ref: 'RX-2026-09',
        category: 'Research',
        icon: 'search',
        title: 'From Registry Books to Real-Time Dashboards: A Field Study',
        description:
            'We surveyed housing society admins still running parallel manual registers alongside digital systems. The findings explain why full migration — not partial digitization — is what actually saves time.',
        bullets: [
            'Admins running dual systems spend 40% more time on reconciliation',
            "Full migration eliminates the 'two versions of the truth' problem",
            'Staff resistance drops sharply once dashboards replace daily manual entry',
        ],
        keywords: ['ledger digitization Pakistan', 'housing society records', 'real estate data migration'],
        cta: 'Get the Report',
        image: 'https://picsum.photos/seed/rx-ledger-books/700/500',
    },
    {
        id: 'rx-10',
        ref: 'RX-2026-10',
        category: 'Article',
        icon: 'news',
        title: "Building Buyer Trust in a Market That's Learned to Doubt Paperwork",
        description:
            'Years of file manipulation and delayed statements have made Pakistani buyers cautious. Here\'s how full transparency — from allocation to invoice — rebuilds the confidence developers need to sell faster.',
        bullets: [
            'Buyers check their own file status and payment history anytime',
            'Automated statements remove the wait — and the room for error',
            'Transparent systems shorten the sales cycle by reducing buyer hesitation',
        ],
        keywords: ['buyer trust real estate Pakistan', 'transparent property management', 'automated account statements'],
        cta: 'Read the Article',
        image: 'https://picsum.photos/seed/rx-new-home-family/700/500',
    },
];

// =============================================================================
// ASSETS PORTFOLIO SECTION  (AssetsPorfolio/data.js)
// =============================================================================
export const assetData = [
    {
        stat: '285',
        unit: 'units',
        name: '15 Hudson Yards',
        type: 'Multifamily',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&q=80',
    },
    {
        stat: '202K',
        unit: 'sqft',
        name: '3405 S. McQueen Rd',
        type: 'Industrial',
        image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=500&q=80',
    },
    {
        stat: '419K',
        unit: 'sqft',
        name: '100 Congress',
        type: 'Commercial Office',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80',
    },
    {
        stat: '250K',
        unit: 'sqft',
        name: '3.0 University Place',
        type: 'Life Science',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80',
    },
    {
        stat: '409K',
        unit: 'sqft',
        name: 'Gulf Tower Pittsburgh',
        type: 'Commercial Office',
        image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&q=80',
    },
    {
        stat: '128',
        unit: 'keys',
        name: 'The Laurel Hotel',
        type: 'Hospitality',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80',
    },
    {
        stat: '96K',
        unit: 'sqft',
        name: 'Meridian Plaza Retail',
        type: 'Retail',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=80',
    },
    {
        stat: '312',
        unit: 'units',
        name: 'Willow Creek Residences',
        type: 'Residential',
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80',
    },
];

// =============================================================================
// FOOTER SECTION  (inline text from Footer/index.jsx)
// =============================================================================
export const footerContent = {
    brandDesc: 'Building high-performance software systems for global property and business automation.',
    contactLinkText: 'Get in contact with us',
    contactHref: '#contact',
    socialLinks: [
        { label: 'LinkedIn', href: '#', display: 'in' },
        { label: 'Facebook', href: '#', display: 'f' },
    ],
    otherLinksHeading: 'Other Links',
    otherLinks: [
        { label: 'Help Center', href: '#help' },
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Use', href: '#terms' },
    ],
    newsletterHeading: 'Newsletter',
    newsletterDesc: 'Sign-up to receive product updates. Only good stuff, no spam.',
    newsletterPlaceholder: 'Work Email*',
    newsletterBtnText: 'Sign Up',
};
