import React from 'react';
import { styles } from './style';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver'; // Adjust file path if needed
import { Cloud, Server, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

// Every claim below is traceable to the BRD's Cybersecurity & Infrastructure
// section: AWS hosting, end-to-end encryption, daily backups, activity logs,
// and the on-premise option. Nothing about integrations/APIs is included —
// that's not a documented capability yet.

const hostingOptions = [
  {
    icon: Cloud,
    title: 'AWS Cloud Hosting',
    caption: 'Rapid deployment on Tier-1 AWS infrastructure.',
  },
  {
    icon: Server,
    title: 'On-Premises Server',
    caption: 'Full data residency on infrastructure you control.',
  },
];

const specs = [
  {
    title: 'End-to-End Data Encryption',
    caption: 'Every record and transaction is protected, at rest and in transit.',
  },
  {
    title: 'Daily Automated Backups',
    caption: 'Nightly cloud backups so no ledger entry or agreement is ever lost.',
  },
  {
    title: 'Immutable Activity Logs',
    caption: 'Every user action is timestamped and permanently recorded for auditability.',
  },
];

export default function Security() {
  // Separate hooks to trigger the left side and right side independently on scroll
  const leftContentRef = useScrollAnimation();
  const rightContentRef = useScrollAnimation();

  return (
    <section id="security" className={`${styles.py5} ${styles.bgLight}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Side Container: Slides smoothly from the left side of the viewport */}
        <div
          ref={leftContentRef}
          className="lg:pr-8 animate slide-left scroll-hidden"
        >
          <span className={`${styles.sectionTag} inline-block animate pop-in delay-1`}>
            Cybersecurity &amp; Deployment
          </span>

          <h2 className={`${styles.heading} animate fade-up delay-2`}>
            Enterprise-Grade Security &amp; Deployment Flexibility
          </h2>

          <p className={`${styles.bodyText} animate fade-up delay-3`}>
            Run RealEstateX on Tier-1 AWS cloud infrastructure, or keep every record on a
            server you control — the same security guarantees apply either way.
          </p>

          {/* Hosting options */}
          <div className={styles.infraGrid}>
            {hostingOptions.map((option, i) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.title}
                  className={`${styles.infraBox} animate scale-in delay-${i + 4} card-lift`}
                >
                  <div className={styles.infraIcon}>
                    <Icon color="currentColor" />
                  </div>
                  <h6 className={styles.infraTitle}>{option.title}</h6>
                  <p className={styles.infraCaption}>{option.caption}</p>
                </div>
              );
            })}
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
              <h4 className={styles.specsTitle}>Security Guarantees</h4>
            </div>

            <ul className={styles.specsList}>
              {specs.map((spec, i) => (
                <li
                  key={spec.title}
                  className={`${styles.specsItem} animate fade-up delay-${Math.min(i + 3, 6)}`}
                >
                  <CheckCircle2 className={styles.specsCheck} size={20} />
                  <div>
                    <p className={styles.specsItemTitle}>{spec.title}</p>
                    <p className={styles.specsItemCaption}>{spec.caption}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      <div className={`${styles.ctaWrap} animate fade-up delay-5`}>
        <button type="button" className={styles.ctaButton}>
          Review Security &amp; Deployment Options
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}