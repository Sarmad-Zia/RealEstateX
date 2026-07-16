// data.js
// Content sourced/localized for the Pakistani real estate market (DHA, Bahria Town,
// CDA / RDA / LDA / KDA approved societies). Replace `image` URLs with real
// photography from /src/assets/images once available — currently using
// Lorem Picsum as a stable, license-free placeholder service.
//
// `icon` maps to a lucide-react icon in index.jsx via the ICONS lookup table.
// `category` drives both the stamp badge label and the icon choice.

const marketInsights = [
  {
    id: "rx-01",
    ref: "RX-2026-01",
    category: "Research",
    icon: "search",
    title: "The 2026 Pakistan Housing Society Benchmark Report",
    description:
      "A data-backed look at how DHA, Bahria Town, and CDA-approved societies are moving from manual ledger registers to fully digital plot management — and what it's costing the developers who haven't.",
    bullets: [
      "Benchmarks recovery rates across 40+ private societies still on manual files",
      "Maps the real cost-per-plot of ledger errors and duplicate allocations",
      "Shows how AI-assisted tracking recovers up to 30% more overdue installments",
    ],
    keywords: ["property management Pakistan", "DHA Bahria Town software", "digital plot files"],
    cta: "Get the Report",
    image: "https://picsum.photos/seed/rx-karachi-buildings/700/500",
  },
  {
    id: "rx-02",
    ref: "RX-2026-02",
    category: "Article",
    icon: "news",
    title: "Ushering in the Era of AI-Powered Society Management",
    description:
      "From balloting halls to head-office ledgers, Pakistani developers are replacing paperwork with autonomous AI agents. Here's what that transition actually looks like on the ground.",
    bullets: [
      "AI agents auto-flag overdue files before disputes reach the front desk",
      "Every plot transfer and allocation logged with a tamper-proof digital trail",
      "Society staff shift from data entry to actual customer relationships",
    ],
    keywords: ["AI real estate ERP", "society management software Pakistan", "automated installment recovery"],
    cta: "Read the Article",
    image: "https://picsum.photos/seed/rx-professionals-city/700/500",
  },
  {
    id: "rx-03",
    ref: "RX-2026-03",
    category: "Report",
    icon: "chart",
    title: "The Installment Recovery Crisis: What Manual Ledgers Are Really Costing You",
    description:
      "Late monthly installments quietly erode developer cash flow every quarter. This report breaks down why manual tracking fails in today's economic climate — and how automated recovery closes the gap.",
    bullets: [
      "Identifies the top 3 points where manual recovery breaks down monthly",
      "Automated reminders recover overdue files without an awkward phone call",
      "Real-time dashboards flag at-risk files 30 days before default",
    ],
    keywords: ["installment recovery Pakistan", "real estate cash flow", "property ledger automation"],
    cta: "Get the Report",
    image: "https://picsum.photos/seed/rx-lahore-housing/700/500",
  },
  {
    id: "rx-04",
    ref: "RX-2026-04",
    category: "Article",
    icon: "news",
    title: "Ending the Dealer Commission Dispute, Once and For All",
    description:
      "Commission disagreements between developers and dealer networks are one of the most common causes of stalled sales in Pakistani real estate. See how a rule-based commission engine removes the argument entirely.",
    bullets: [
      "Fixed and percentage-based commission rules calculated automatically, per agent",
      "Every commission line tied directly to a confirmed sale or tenancy agreement",
      "Dealers see their own settlement history — no more disputed math",
    ],
    keywords: ["dealer commission software", "real estate broker network Pakistan", "commission settlement automation"],
    cta: "Read the Article",
    image: "https://picsum.photos/seed/rx-agents-handshake/700/500",
  },
  {
    id: "rx-05",
    ref: "RX-2026-05",
    category: "Article",
    icon: "news",
    title: "Balloting Without the Back Room: Making Plot Allocation Tamper-Proof",
    description:
      "Masked or manipulated balloting has cost developers public trust for decades. Here's how digital allocation engines make every draw auditable, from the first file to the last plot.",
    bullets: [
      "Randomized digital draws remove any manual influence over allocation",
      "Full allocation history available instantly to landlord, agent, and admin",
      "Disputes drop sharply once the process is visible end-to-end",
    ],
    keywords: ["property balloting software", "plot allocation transparency", "housing society Pakistan"],
    cta: "Read the Article",
    image: "https://picsum.photos/seed/rx-society-aerial/700/500",
  },
  {
    id: "rx-06",
    ref: "RX-2026-06",
    category: "Report",
    icon: "chart",
    title: "Quarterly Market Update: The Widening Gap Between Plot Demand and Delivery",
    description:
      "Buyer demand in CDA and RDA-regulated projects keeps outpacing developers' ability to process files manually. This quarter's data shows exactly where the bottleneck sits — and how automation closes it.",
    bullets: [
      "New buyer inquiries up while manual file-processing capacity stays flat",
      "Automated intake and KYC cut onboarding time from weeks to hours",
      "Developers running ERP automation report faster time-to-agreement across the board",
    ],
    keywords: ["real estate market update Pakistan", "CDA RDA compliance", "property demand supply"],
    cta: "Read the Update",
    image: "https://picsum.photos/seed/rx-islamabad-housing/700/500",
  },
  {
    id: "rx-07",
    ref: "RX-2026-07",
    category: "Article",
    icon: "news",
    title: "Are You Actually LDA, RDA, and CDA Compliant — Or Just Assuming You Are?",
    description:
      "Regulatory transparency is no longer optional for serious developers. This piece walks through the documentation gaps manual record-keeping tends to hide, and what full compliance actually requires.",
    bullets: [
      "Digital activity logs create an audit trail regulators can verify instantly",
      "Standardized agreement templates keep clauses inside approved terms",
      "On-premise server options for developers who must keep data within Pakistan",
    ],
    keywords: ["LDA RDA CDA compliance", "real estate legal transparency Pakistan", "regulated housing societies"],
    cta: "Read the Article",
    image: "https://picsum.photos/seed/rx-govt-buildings/700/500",
  },
  {
    id: "rx-08",
    ref: "RX-2026-08",
    category: "Update",
    icon: "sparkle",
    title: "What's New in PropertyVerx: Winter Release Notes",
    description:
      "This release focuses on faster commission settlements, a redesigned tenant portal, and smarter overdue-file alerts built for how Pakistani societies actually operate day to day.",
    bullets: [
      "One-click vendor bills for confirmed agent commission settlements",
      "Tenant self-service portal for statements, receipts, and complaints",
      "Smarter overdue alerts that account for local holiday and payment cycles",
    ],
    keywords: ["PropertyVerx release notes", "property ERP update", "tenant portal Pakistan"],
    cta: "Explore the Update",
    image: "https://picsum.photos/seed/rx-dashboard-ui/700/500",
  },
  {
    id: "rx-09",
    ref: "RX-2026-09",
    category: "Research",
    icon: "search",
    title: "From Registry Books to Real-Time Dashboards: A Field Study",
    description:
      "We surveyed housing society admins still running parallel manual registers alongside digital systems. The findings explain why full migration — not partial digitization — is what actually saves time.",
    bullets: [
      "Admins running dual systems spend 40% more time on reconciliation",
      "Full migration eliminates the 'two versions of the truth' problem",
      "Staff resistance drops sharply once dashboards replace daily manual entry",
    ],
    keywords: ["ledger digitization Pakistan", "housing society records", "real estate data migration"],
    cta: "Get the Report",
    image: "https://picsum.photos/seed/rx-ledger-books/700/500",
  },
  {
    id: "rx-10",
    ref: "RX-2026-10",
    category: "Article",
    icon: "news",
    title: "Building Buyer Trust in a Market That's Learned to Doubt Paperwork",
    description:
      "Years of file manipulation and delayed statements have made Pakistani buyers cautious. Here's how full transparency — from allocation to invoice — rebuilds the confidence developers need to sell faster.",
    bullets: [
      "Buyers check their own file status and payment history anytime",
      "Automated statements remove the wait — and the room for error",
      "Transparent systems shorten the sales cycle by reducing buyer hesitation",
    ],
    keywords: ["buyer trust real estate Pakistan", "transparent property management", "automated account statements"],
    cta: "Read the Article",
    image: "https://picsum.photos/seed/rx-new-home-family/700/500",
  },
];

export default marketInsights;