import React from 'react';
import { styles } from './style';
import { operations } from './data';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver'; // Adjust path if needed

function OperationCard({ op, index }) {
  const cardRef = useScrollAnimation();
  const delayClass = `delay-${(index % 4) + 1}`;

  return (
    <div ref={cardRef} className={`${styles.opsCol} animate fade-up ${delayClass} scroll-hidden`}>
      <span className={styles.opsLabel}>{op.label}</span>
      <div className={styles.opsCard}>
        <img
          src={op.image}
          alt={op.alt}
          loading="lazy"
          className={`${styles.opsImage} animate scale-in ${delayClass}`}
        />
      </div>
      <p className={styles.opsDesc}>{op.desc}</p>
    </div>
  );
}

export default function OperationsShowcase() {
  const headerRef = useScrollAnimation();

  return (
    <section id="operations" className={`${styles.py5} ${styles.bgWhite}`}>
      <div className="max-w-7xl mx-auto">

        {/* Header Block */}
        <div
          ref={headerRef}
          className={`${styles.sectionHeader} animate blur-in scroll-hidden`}
        >
          <h2 className={styles.sectionTitle}>
            Real Estate <span className="text-gradient">Operations, Redefined</span>
          </h2>
          <p className={styles.sectionDesc}>
            One system, four roles — landlords, agents, tenants, and finance teams all work
            from the same live data, with no spreadsheets in between.
          </p>
        </div>

        {/* Mobile-first grid: 1 col on phones, 2 on tablets, 4 on desktop */}
        <div className={styles.opsGrid}>
          {operations.map((op, index) => (
            <OperationCard key={op.label} op={op} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}