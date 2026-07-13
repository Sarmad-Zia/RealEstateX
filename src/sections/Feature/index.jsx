  import React, { useState } from 'react';
  import { styles } from './style';
  import { useScrollAnimation } from '../../hooks/UserInteractionObserver'; // Double-check this matches your hook's file name
  import {
    Building2,
    Receipt,
    Handshake,
    LayoutDashboard,
    Users,
  } from "lucide-react";

  export default function Features() {
    const [activeTab, setActiveTab] = useState('property');

    // Create distinct observer node refs for macro entrance sequencing
    const headerRef = useScrollAnimation();
    const mainContentRef = useScrollAnimation();

    const featureData = {
    property: {
      title: "Multi-Mode Property, Plot & Land Management",
      icon: Building2,
      bullets: [
        "Manage development portfolios",
        "Commercial spaces management",
        "Rental, purchase & off-plan booking modes"
      ],
      text: "Efficiently manage vast development portfolios, commercial spaces, or multi-family properties under rental, purchase, or off-plan booking modes.",
      keywords: "property management software",
    },

    accounting: {
      title: "Advanced Installment Plans & Dynamic Accounting",
      icon: Receipt,
      bullets: [
        "Custom down-payment matrices",
        "Balloon-payment & monthly installment plans",
        "Automated ledgers, rebates & digital receipts"
      ],
      text: "Create custom down-payment, balloon-payment, and monthly installment matrices with automated ledger calculation, rebates, and instant digital receipts.",
      keywords: "installment accounting software",
    },

    realtor: {
      title: "Realtor, Broker & Commission Management",
      icon: Handshake,
      bullets: [
        "Track broker networks",
        "Manage internal sales agents",
        "Multi-tier commission splits & rebate structures"
      ],
      text: "Keep your sales pipelines healthy. Track external broker networks and internal agents with automated multi-tier commission splits and automated rebate structures.",
      keywords: "broker commission management",
    },

    listings: {
      title: "Secure Public Property Listings Portal",
      icon: LayoutDashboard,
      bullets: [
        "Publish from internal inventory",
        "High-resolution property galleries",
        "Interactive booking forms"
      ],
      text: "Push properties live directly from your internal inventory onto an external, lightning-fast public listing site complete with high-res galleries and interactive booking forms.",
      keywords: "property listings portal",
    },

    customer: {
      title: "Transparent End-User Customer Portal",
      icon: Users,
      bullets: [
        "Track remaining balance",
        "Download invoices & payment history",
        "Request maintenance online"
      ],
      text: "Give buyers and tenants complete control. Let them log in to track their remaining balance, download active invoices, view payment histories, and request maintenance.",
      keywords: "customer property portal",
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
            <h2 className={styles.sectionTitle}>Everything Needed to Scale Your   <span className="text-gradient">Real Estate Operations</span></h2>
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