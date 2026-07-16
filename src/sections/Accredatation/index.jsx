import React from 'react';
import { styles } from './style';
import { accreditations } from './data';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver'; // Adjust file path if needed

export default function RegulatoryCompliance() {
  const marqueeRef = useScrollAnimation();

  return (
    <section id="compliance" className={styles.section}>
      <p className={styles.label}>Built for Compliance, Regulated for Security
      </p>

      <p className={styles.discrption + ' generalDesc'}>
        Our real estate ecosystem integrates natively with regional housing authorities, land departments, and financial frameworks to protect legal data and transaction integrity. 
      </p>

      {/* Entrance animation lives here; the infinite scroll animation lives
          on the inner track below, so the two never fight over the
          `animation` property on the same element. */}
      <div
        ref={marqueeRef}
        className={`${styles.marqueeOuter} animate fade-up scroll-hidden`}
      >
        <div className={`${styles.fadeEdge} ${styles.fadeLeft}`} aria-hidden="true" />
        <div className={`${styles.fadeEdge} ${styles.fadeRight}`} aria-hidden="true" />

        <div className={styles.track}>
          {accreditations.map((item) => (
            <div key={item.id} className={styles.logoWrap}>
              <img src={item.logo} alt={item.alt} className={styles.logoImage} loading="lazy" />
            </div>
          ))}

          {/* Duplicate set makes the -50% translate loop seamless.
              Hidden from screen readers so logos aren't announced twice. */}
          {accreditations.map((item) => (
            <div key={`${item.id}-dup`} className={styles.logoWrap} aria-hidden="true">
              <img src={item.logo} alt="" className={styles.logoImage} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}