import React from 'react';
import { styles } from './style';
import { accreditations } from './data';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver'; // Adjust file path if needed


export default function RegulatoryCompliance() {
  const rowRef = useScrollAnimation();

  return (
    <section id="compliance" className={styles.section}>
      <p className={styles.label}>Aligned With Pakistan&apos;s Regulatory Bodies</p>

      <div ref={rowRef} className={`${styles.row} animate fade-up scroll-hidden`}>
        {accreditations.map((item) => (
          <div key={item.id} className={styles.logoWrap}>
            <img src={item.logo} alt={item.alt} className={styles.logoImage} />
          </div>
        ))}
      </div>
    </section>
  );
}