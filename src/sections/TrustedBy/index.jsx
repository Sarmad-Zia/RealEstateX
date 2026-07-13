// src/components/TrustedBy/index.jsx
import React from 'react';
import { styles } from './style';
import { trustedClients } from './data';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver'; // adjust path if needed

export default function TrustedBy() {
  const sectionRef = useScrollAnimation();

  return (
    <div
      ref={sectionRef}
      className={`${styles.section} animate fade-up scroll-hidden`}
    >
      <div className={styles.container}>
        <div className={styles.eyebrowRow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrow}>Trusted By</span>
        </div>

        <h2 className={styles.heading}>
          Leading Societies &amp; Developers Run on RealEstateX
        </h2>

        <div className={styles.logoRow}>
          {trustedClients.map((client, i) => (
            <div
              key={client.id}
              className={`${styles.logoWrap} animate pop-in delay-${i + 1}`}
            >
              <img
                src={client.logo}
                alt={client.name}
                className={styles.logoImg}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}