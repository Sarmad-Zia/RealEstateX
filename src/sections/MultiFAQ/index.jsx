import React, { useState } from 'react';
import { styles } from './style';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver'; // Hook file verbatim
import {
  Plus,
  LayoutGrid,
  Sparkles,
  ShieldCheck,
  Wallet,
  LifeBuoy,
} from 'lucide-react';

const faqCategories = [
  {
    id: 'basics',
    label: 'Getting Started',
    icon: LayoutGrid,
    questions: [
      {
        q: 'What is RealEstateX and who is it for?',
        a: "RealEstateX is an AI-powered operating system built for housing societies, real estate developers, and broker networks across Pakistan and the wider Asian market. It replaces manual paperwork and Excel sheets with one connected platform.",
      },
      {
        q: 'How long does onboarding take?',
        a: 'Most societies are fully live within days, not months. Our team handles data setup and configuration for you, so your staff can start working from day one.',
      },
      {
        q: 'Can I manage multiple societies or projects from one account?',
        a: 'Yes. Developers and dealer networks can manage unlimited societies, projects, and portfolios from a single dashboard with role-based access for every team member.',
      },
      {
        q: 'Do I need to install anything, or is it fully cloud-based?',
        a: 'RealEstateX runs entirely in the cloud and is accessible from any browser or device. No installation, plugins, or IT setup is required to get started.',
      },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    icon: Sparkles,
    questions: [
      {
        q: 'What does the Installment Recovery Agent actually do?',
        a: 'It tracks every plot and unit installment automatically, flags overdue payments in real time, and sends reminders — closing the gaps where revenue used to slip through the cracks.',
      },
      {
        q: 'How does the Dealer Commission Agent prevent disputes?',
        a: 'Commissions are calculated automatically from a single source of truth, removing manual entry errors and giving dealers a transparent, auditable breakdown of every payout.',
      },
      {
        q: 'Can the Balloting & Allocation Agent handle plot draws automatically?',
        a: 'Yes. It runs fair, verifiable balloting and plot allocation digitally, replacing manual draws with a process every stakeholder can trust and review.',
      },
      {
        q: 'What kind of commands can I type into AI Command Mode?',
        a: 'Plain-language requests like "show me overdue files in Block B" or "generate this month\'s commission report" — the assistant understands your data and responds instantly.',
      },
    ],
  },
  {
    id: 'security',
    label: 'Security & Data',
    icon: ShieldCheck,
    questions: [
      {
        q: 'How is our member and financial data protected?',
        a: 'All data is protected with end-to-end encryption, both in transit and at rest, and access is governed by strict role-based permissions across every user type.',
      },
      {
        q: 'Can we host RealEstateX on our own on-premise servers?',
        a: 'Yes. Alongside global cloud hosting on AWS, we offer a local on-premise server deployment option for organizations with specific data-residency requirements.',
      },
      {
        q: 'How often is data backed up?',
        a: 'Backups run daily and automatically, so your records — installments, agreements, and communications — stay safe and recoverable at all times.',
      },
      {
        q: 'Is there an audit trail of every action taken in the system?',
        a: 'Every action, from a status change to a new agreement, is logged with a full activity trail so admins can review exactly what happened and when.',
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing & Plans',
    icon: Wallet,
    questions: [
      {
        q: 'How is RealEstateX priced?',
        a: 'Pricing is based on your portfolio size and the modules you need, from a single society to a multi-project developer suite. Book a demo for a tailored quote.',
      },
      {
        q: 'Is there a setup or implementation fee?',
        a: 'Implementation is included in every onboarding plan — our team configures the system, migrates your records, and trains your staff at no extra cost.',
      },
      {
        q: 'Can we start with a live demo before committing?',
        a: 'Absolutely. Every engagement starts with a live walkthrough of the platform using scenarios relevant to your society or project, with no obligation.',
      },
      {
        q: 'What happens if we outgrow our current plan?',
        a: 'You can upgrade at any time as your portfolio grows. Your data, configurations, and history carry over seamlessly with zero downtime.',
      },
    ],
  },
  {
    id: 'support',
    label: 'Support',
    icon: LifeBuoy,
    questions: [
      {
        q: 'Can you migrate our existing Excel records?',
        a: 'Yes. Our team handles the entire data migration process cleanly, mapping your existing spreadsheets into RealEstateX within days.',
      },
      {
        q: 'Is there a mobile app or portal for tenants, dealers, and owners?',
        a: 'Yes — we provide a dedicated Member Portal along with mobile-optimized interfaces, so tenants, dealers, and owners can self-serve from their phones.',
      },
      {
        q: 'What support is available after go-live?',
        a: 'You get an assigned support contact plus access to our help desk for day-to-day questions, updates, and troubleshooting — no ticket queues into the void.',
      },
      {
        q: 'Do you offer training for our staff?',
        a: 'Every onboarding includes live training sessions for your admin, accounting, and dealer-facing teams so the whole organization is confident from launch day.',
      },
    ],
  },
];

export default function FAQ() {
  const [activeCategoryId, setActiveCategoryId] = useState(faqCategories[0].id);
  const [openIndex, setOpenIndex] = useState(null);

  // Dedicated observer hooks for the header, tabs, and card grid
  const headerRef = useScrollAnimation();
  const tabsRef = useScrollAnimation();
  const gridRef = useScrollAnimation();

  const activeCategory = faqCategories.find((c) => c.id === activeCategoryId);

  const handleCategoryChange = (id) => {
    if (id === activeCategoryId) return;
    setActiveCategoryId(id);
    setOpenIndex(null); // open the first question of the newly selected category
  };

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section} id="faq">
      {/* Decorative ambient glows, consistent with the site's premium feel */}
      <div className={styles.glowTop} aria-hidden="true" />
      <div className={styles.glowBottom} aria-hidden="true" />

      <div className={styles.container}>
        {/* Header */}
        <div
          ref={headerRef}
          className={`${styles.sectionHeader} animate blur-in scroll-hidden`}
        >
          <span className={styles.eyebrow}>Support Center</span>
          <h2 className={styles.sectionTitle}>
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Everything you need to know about running your society or
            portfolio on RealEstateX — from onboarding to AI automation.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          ref={tabsRef}
          className={`${styles.tabsWrapper} animate fade-up delay-1 scroll-hidden`}
          role="tablist"
          aria-label="FAQ categories"
        >
          {faqCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`faq-panel-group-${cat.id}`}
                onClick={() => handleCategoryChange(cat.id)}
                className={`${styles.tabButton} ${
                  isActive ? styles.tabButtonActive : styles.tabButtonInactive
                }`}
              >
                <Icon size={16} className={styles.tabIcon} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* FAQ Card Grid */}
        <div
          ref={gridRef}
          id={`faq-panel-group-${activeCategory.id}`}
          className={`${styles.faqGrid} animate fade-up delay-2 scroll-hidden`}
        >
          {activeCategory.questions.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-button-${activeCategory.id}-${idx}`;
            const panelId = `faq-answer-${activeCategory.id}-${idx}`;

            return (
              <div
                key={buttonId}
                className={`${styles.faqCard} ${
                  isOpen ? styles.faqCardOpen : ''
                }`}
              >
                <h3 className="m-0">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFaq(idx)}
                    className={styles.faqHeader}
                  >
                    <span className={styles.faqQuestionRow}>
                      <span
                        className={`${styles.faqNumber} ${
                          isOpen ? styles.faqNumberOpen : ''
                        }`}
                        aria-hidden="true"
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className={styles.faqQuestionText}>{faq.q}</span>
                    </span>

                    <span
                      className={`${styles.faqIcon} ${
                        isOpen ? styles.faqIconOpen : ''
                      }`}
                      aria-hidden="true"
                    >
                      <Plus size={18} strokeWidth={2.5} />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`${styles.faqAnswerPanel} ${
                    isOpen
                      ? styles.faqAnswerPanelOpen
                      : styles.faqAnswerPanelClosed
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className={styles.faqBody}>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing CTA */}
        <div className={styles.faqCta}>
          <p className={styles.faqCtaText}>Still have questions?</p>
          <a href="#demo" className={styles.faqCtaButton}>
            Talk to our team
          </a>
        </div>
      </div>
    </section>
  );
}