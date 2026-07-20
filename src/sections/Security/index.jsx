import React from 'react';
import { styles } from './style';
import { securityHostingOptions as hostingOptions, securitySpecs as specs, securityContent } from '../../data/commonData';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

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
            {securityContent.sectionTag}
          </span>

          <h2 className={`${styles.heading + ' generalTitle' } animate fade-up delay-2`}>
            {securityContent.heading}
          </h2>

          <p className={`${styles.bodyText } animate fade-up delay-3`}>
            {securityContent.bodyText}
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
              <h4 className={styles.specsTitle}>{securityContent.specsTitle}</h4>
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

      {/* <div className={`${styles.ctaWrap} animate fade-up delay-5`}>
        <button type="button" className={styles.ctaButton}>
          Review Security &amp; Deployment Options
          <ArrowRight className="w-4 h-4" />
        </button>
      </div> */}
    </section>
  );
}