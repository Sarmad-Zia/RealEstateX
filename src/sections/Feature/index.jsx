import React, { useState } from 'react';
import { styles } from './style';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver'; // Double-check this matches your hook's file name
import {
  Users,
  IdCard,
  Receipt,
  Building2,
  Shuffle,
  FileCheck2,
  Handshake,
  Calculator,
  Gavel,
  LayoutDashboard,
  UsersRound,
  BarChart3,
} from 'lucide-react';

export default function Features() {
  const [activeTab, setActiveTab] = useState('crm');

  // Create distinct observer node refs for macro entrance sequencing
  const headerRef = useScrollAnimation();
  const mainContentRef = useScrollAnimation();

  const featureData = {
    crm: {
      title: "CRM & Lead Management",
      icon: Users,
      bullets: ["Track walk-in, digital & dealer leads", "Convert lead → member → file in 1 click", "Automated follow-up reminders"],
      text: "RealEstateX provides a powerful real estate CRM built for Asian property markets.",
      keywords: "real estate management system",
    },
    member: {
      title: "Member & File Creation",
      icon: IdCard,
      bullets: ["Biometric verification", "Digital archive of CNIC/Passport", "Automatic file numbering"],
      text: "Digitize every file registration. Ensure your records are tamper-proof.",
      keywords: "File management system",
    },
    install: {
      title: "Installment Plans & Auto Invoicing",
      icon: Receipt,
      bullets: ["Auto-generating payment schedules", "SMS/WhatsApp invoice alerts", "Late fee fine engine"],
      text: "Stop manual installment tracking. Our engine calculates dues instantly.",
      keywords: "installment tracking software",
    },
    inventory: {
      title: "Units & Inventory Management",
      icon: Building2,
      bullets: ["Interactive map integration", "Real-time availability status", "Plot blocking & reservation"],
      text: "Know exactly what is sold, what is available, and what is on hold.",
      keywords: "inventory management system",
    },
    ballot: {
      title: "Balloting & Allotment Engine",
      icon: Shuffle,
      bullets: ["Provable digital balloting", "Randomized allocation logic", "Allotment letter generation"],
      text: "Run massive balloting events with total transparency.",
      keywords: "balloting system software",
    },
    noc: {
      title: "File Transfer & NOC System",
      icon: FileCheck2,
      bullets: ["Workflow-based transfers", "NDC/NOC issuance portal", "Buyer verification"],
      text: "Streamline transfers safely. RealEstateX ensures all dues are clear.",
      keywords: "Property management system",
    },
    dealer: {
      title: "Dealer Management",
      icon: Handshake,
      bullets: ["Dealer hierarchy tracking", "Automatic commission rebates", "Dealer performance portals"],
      text: "Automate payouts for your sales network.",
      keywords: "dealer commission management",
    },
    accounting: {
      title: "Accounting & Partial Payments",
      icon: Calculator,
      bullets: ["Double-entry bookkeeping", "Token payment support", "Expense tracking"],
      text: "Full-scale accounting built for real estate.",
      keywords: "real estate ERP Asia",
    },
    auction: {
      title: "Auction Management",
      icon: Gavel,
      bullets: ["Digital bidding interface", "Bidder qualification", "Highest bidder allocation"],
      text: "Run digital auctions for premium or commercial units.",
      keywords: "Property management system",
    },
    portal: {
      title: "Customer & Dealer Portal",
      icon: LayoutDashboard,
      bullets: ["Self-service ledgers", "Online payments", "Support ticket system"],
      text: "Give your members peace of mind with a dedicated portal.",
      keywords: "society management system",
    },
    hrms: {
      title: "HRMS & Payroll",
      icon: UsersRound,
      bullets: ["Attendance logs", "Salary & Bonus calculation", "Staff permissions"],
      text: "Manage your internal team and sales agents with an integrated module.",
      keywords: "HRMS for property",
    },
    reports: {
      title: "Dashboards & Critical Reports",
      icon: BarChart3,
      bullets: ["Revenue leakage alerts", "Daily collection heatmaps", "Executive summaries"],
      text: "Get a 360-degree view of your society's operational health.",
      keywords: "real estate ERP Asia",
    },
  };

  const ActiveIcon = featureData[activeTab].icon;

  return (
    <section id="features" className={`${styles.py5} ${'bg-cream'}`}>
      <div className="max-w-7xl mx-auto">

        {/* Header Block: Entrance sequence utilizing blur-in */}
        <div
          ref={headerRef}
          className={`${styles.sectionHeader} animate blur-in scroll-hidden delay-2`}
        >
          <h2 className={styles.sectionTitle}>The Complete <span className="text-gradient">Society Engine</span></h2>
          <p className={styles.sectionDesc}>A full-lifecycle ERP designed for the high-stakes property market.</p>
        </div>

        {/* Feature Layout Console: Sweeps gently from the base when visible */}
        <div
          ref={mainContentRef}
          className={`${styles.featureBox} animate fade-up scroll-hidden`}
        >
          {/* Navigation Sidebar Layout Wrapper */}
          <div className={styles.featureSidebar}>
            {Object.keys(featureData).map((key) => {
              const Icon = featureData[key].icon;
              const isActive = activeTab === key;
              return (
                <div
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`${styles.tabItemBase} ${isActive ? styles.tabItemActive : styles.tabItemInactive}`}
                >
                  <span className="flex items-center gap-3">
                    <Icon size={18} className="shrink-0" />
                    <span className="text-sm md:text-base">{featureData[key].title}</span>
                  </span>
                  <span className="hidden lg:inline text-xs opacity-40">➔</span>
                </div>
              );
            })}
          </div>

          {/* Active Content Panel: Changes key configuration on tab toggles to reset CSS animations */}
          <div
            key={activeTab}
            className={`${styles.featureContentArea} animate fade-in`}
          >
            <div className={styles.featureDisplayGrid}>

              {/* Mockup Element: icon-led visual instead of plain text placeholder */}
              <div className={`${styles.featureVisualMockup} animate scale-in`}>
                <ActiveIcon className={styles.featureVisualIcon} strokeWidth={1.5} />
                <span className={styles.featureVisualLabel}>
                  {featureData[activeTab].title} Console
                </span>
              </div>

              {/* Explanatory Typography Panel: Uses slide-right on selection change */}
              <div className="animate slide-right">
                <h3 className={styles.featureTitle}>{featureData[activeTab].title}</h3>
                <ul className={styles.featureBulletList}>
                  {featureData[activeTab].bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className={`${styles.featureBulletItem} animate fade-up delay-${Math.min(i + 1, 3)}`}
                    >
                      <span className={styles.featureCheckmark}>✓</span> {bullet}
                    </li>
                  ))}
                </ul>
                <p className={`${styles.featureTextDescription} animate fade-up delay-2`}>{featureData[activeTab].text}</p>
                <span className={`${styles.featureKeywordTag} inline-block animate pop-in delay-3`}>
                  {featureData[activeTab].keywords}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}