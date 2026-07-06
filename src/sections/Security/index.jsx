import React from 'react';
import { styles } from './style';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver'; // Adjust file name path if needed
import { Cloud, Server, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Security() {
  // Separate hooks to trigger the left side and right side independently on scroll
  const leftContentRef = useScrollAnimation();
  const rightContentRef = useScrollAnimation();

  const specs = [
    "AES-256 Database Encryption",
    "Role-Based Access Control",
    "99.99% Server Uptime Guarantee",
    "Daily Automated Cloud Backups",
  ];

  return (
    <section id="security" className={`${styles.py5} ${styles.bgLight}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Side Container: Slides smoothly from the left side of the viewport */}
        <div
          ref={leftContentRef}
          className="lg:pr-8 animate slide-left scroll-hidden"
        >
          <span className={`${styles.sectionTag} inline-block animate pop-in delay-1`}>
            CyberSecurity
          </span>

          <h2 className={`${styles.heading} animate fade-up delay-2`}>
            Enterprise-Grade Security & Deployment Flexibility
          </h2>

          <p className={`${styles.bodyText} animate fade-up delay-3`}>
            Built with military-grade standards to ensure your society data and financial records are protected 24/7/365.
          </p>

          {/* Infrastructure Grid Box Items */}
          <div className={styles.infraGrid}>
            <div className={`${styles.infraBox} animate scale-in delay-4 card-lift`}>
              <div className={styles.infraIcon}><Cloud color="currentColor" /></div>
              <h6 className={styles.infraTitle}>AWS Hosting</h6>
            </div>
            <div className={`${styles.infraBox} animate scale-in delay-5 card-lift`}>
              <div className={styles.infraIcon}><Server color="currentColor" /></div>
              <h6 className={styles.infraTitle}>On-Premise</h6>
            </div>
          </div>
        </div>

        {/* Right Side Container: Slides symmetrically from the right side of the viewport */}
        <div
          ref={rightContentRef}
          className="animate slide-right scroll-hidden"
        >
          <div className={styles.specsCard}>
            <div className={`${styles.specsTitleRow} animate fade-down delay-2`}>
              <ShieldCheck className="text-forest" size={22} />
              <h4 className={styles.specsTitle}>Infrastructure Specs</h4>
            </div>

            <ul className={styles.specsList}>
              {specs.map((spec, i) => (
                <li
                  key={i}
                  className={`${styles.specsItem} animate fade-up delay-${Math.min(i + 3, 6)}`}
                >
                  <CheckCircle2 className={styles.specsCheck} size={20} /> {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}