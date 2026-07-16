import React, { useState } from 'react';
import { styles } from './style';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver';
import { Plus } from 'lucide-react';

// The 5 FAQs from the brief — flat accordion (no category tabs)
const faqItems = [
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation();

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.glowTop} aria-hidden="true" />
      <div className={styles.glowBottom} aria-hidden="true" />

      <div className={styles.container}>
        {/* Header */}
        <div
          ref={headerRef}
          className={`${styles.sectionHeader} animate blur-in scroll-hidden`}
        >
          <span className={styles.eyebrow}>Support Center</span>
          <h2 className={styles.sectionTitle + ' generalTitle'}>
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Everything you need to know about deploying PropertyVerx for your
            society, development company, or broker network.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div
          ref={gridRef}
          className={`${styles.faqGrid} animate fade-up delay-1 scroll-hidden`}
        >
          {faqItems.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-button-${idx}`;
            const panelId = `faq-answer-${idx}`;

            return (
              <div
                key={buttonId}
                className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ''}`}
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
                        className={`${styles.faqNumber} ${isOpen ? styles.faqNumberOpen : ''}`}
                        aria-hidden="true"
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className={styles.faqQuestionText}>{faq.q}</span>
                    </span>

                    <span
                      className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ''}`}
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
                    isOpen ? styles.faqAnswerPanelOpen : styles.faqAnswerPanelClosed
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
          <a href="#contact" className={styles.faqCtaButton}>
            Talk to our team
          </a>
        </div>
      </div>
    </section>
  );
}