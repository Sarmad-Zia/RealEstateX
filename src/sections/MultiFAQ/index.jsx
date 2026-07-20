import React, { useState } from 'react';
import { styles } from './style';
import { faqItems, multiFaqContent } from '../../data/commonData';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver';
import { Plus } from 'lucide-react';

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
          <span className={styles.eyebrow}>{multiFaqContent.eyebrow}</span>
          <h2 className={styles.sectionTitle + ' generalTitle'}>
            {multiFaqContent.sectionTitle} <span className="text-gradient">{multiFaqContent.sectionTitleAccent}</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            {multiFaqContent.sectionSubtitle}
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
          <p className={styles.faqCtaText}>{multiFaqContent.ctaText}</p>
          <a href={multiFaqContent.ctaHref} className={styles.faqCtaButton}>
            {multiFaqContent.ctaBtnText}
          </a>
        </div>
      </div>
    </section>
  );
}