import React, { useState } from 'react';
import { styles } from './style';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver'; // Hook file verbatim
import { HelpCircle, Plus } from 'lucide-react';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  // Dedicated observer hooks for the header and the wrapper container
  const headerRef = useScrollAnimation();
  const faqWrapperRef = useScrollAnimation();

  const faqData = [
    { q: "How secure is our member data?", a: "We use end-to-end encryption and offer deployment on both global cloud servers (AWS) and local on-premise servers." },
    { q: "Can we migrate from existing Excel files?", a: "Yes! Our team handles the entire data migration process cleanly within days." },
    { q: "Is there a mobile app for customers?", a: "Absolutely. We provide a Member Portal and mobile-optimized interfaces." },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className={`${styles.py5} ${styles.bgWhite}`}>
      <div className="max-w-7xl mx-auto">

        {/* Header Block */}
        <div
          ref={headerRef}
          className={`${styles.sectionHeader} animate blur-in scroll-hidden`}
        >
          <h2 className={styles.sectionTitle}>
            Common <span className="text-gradient">Questions</span>
          </h2>
        </div>

        <div
          ref={faqWrapperRef}
          className={`${styles.faqWrapper} animate fade-in scroll-hidden`}
        >
          {faqData.map((faq, idx) => {
            const isOpen = openFaq === idx;

            return (
              <div
                key={idx}
                className={`
                  ${styles.faqCard}
                  ${isOpen ? styles.faqCardOpen : ''}
                  animate fade-up delay-${Math.min(idx + 1, 6)}
                `}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className={styles.faqHeader}
                >
                  <span className={styles.faqQuestionRow}>
                    <HelpCircle size={20} className={styles.faqQuestionIcon} />
                    <span>{faq.q}</span>
                  </span>
                  <span
                    className={`${styles.faqIcon} ${isOpen ? 'pulse' : ''}`}
                    style={{
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease-out',
                    }}
                  >
                    <Plus size={22} />
                  </span>
                </button>

                <div
                  className={`
                    ${styles.faqBody}
                    transition-all duration-300 ease-in-out
                    ${isOpen ? 'max-h-[300px] opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none pb-0'}
                  `}
                >
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}