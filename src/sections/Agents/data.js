import { ChartPie, FileText, Sparkles, UsersRound } from "lucide-react";

export const agentsData = [
  {
    title: "Predictive Smart Lead and Tenant Matching",
    desc: "Match verified buyers and prospective tenants with available properties, plots, or commercial spaces using predictive budget and behavioral analysis.",
    cmd: '"Match verified buyers with suitable properties based on budget and behavior."',
    icon: UsersRound,
  },
  {
    title: "Automated Smart Contract & Rental Generation",
    desc: "Feed property parameters directly into our localized AI engine to draft, audit, and instantly generate air-tight rental agreements and purchase deeds.",
    cmd: '"Generate a rental agreement for a commercial property."',
    icon: FileText,
  },
  {
    title: "Intelligent Real-Time Revenue Forecasting Engine",
    desc: "Run predictive cash flow models on your entire development portfolio. Let AI calculate project timelines against future monthly installment collections.",
    cmd: '"Forecast monthly cash flow for all active development projects."',
    icon: ChartPie,
  },
  {
    title: "AI-Generated SEO Optimization for Listings",
    desc: "Instantly generate high-converting, professional property descriptions tailored for regional listing portals with a single click inside your dashboard.",
    cmd: '"Generate an SEO-optimized listing description for a 10 Marla plot."',
    icon: Sparkles,
  },
];