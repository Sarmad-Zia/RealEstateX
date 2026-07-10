import React from 'react';
import { styles } from './style';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver'; // Adjust file path if needed
import { Sparkles, CalendarCheck, Phone, ShieldCheck, Server, FileCheck2 } from 'lucide-react';


const trustItems = [
  // { icon: ShieldCheck, label: 'AWS-Grade Security' },
  // { icon: Server, label: 'On-Premise Available' },
  { icon: FileCheck2, label: 'LDA / RDA / CDA Aligned' },
];

// TODO: replace with the real sales line before this goes live.
const SALES_PHONE = '+92 300 1234567';
const SALES_PHONE_HREF = 'tel:+923001234567';

export default function CTA({ onBookDemo = () => {} }) {
  const contentRef = useScrollAnimation();

  return (
    <section id="cta" className={styles.section}>
      <div className={styles.glowTopLeft} aria-hidden="true" />
      <div className={styles.glowBottomRight} aria-hidden="true" />

      <div ref={contentRef} className={`${styles.content} animate fade-up scroll-hidden`}>
        <span className={`${styles.badge} animate pop-in delay-1`}>
          <Sparkles className={styles.badgeIcon} />
          <span className={styles.badgeText}>Limited Onboarding Slots &mdash; Q1 2026</span>
        </span>

        <h2 className={`${styles.heading} animate fade-up delay-2`}>
          Make This the Last Manual Ledger You Ever Keep
        </h2>

        <p className={`${styles.subhead} animate fade-up delay-3`}>
          Book a live walkthrough of RealEstateX, or speak directly with our team &mdash;
          Q1 implementation slots are limited.
        </p>

        <div className={`${styles.buttonsRow} animate scale-in delay-4`}>
          <button type="button" className={styles.primaryButton} onClick={onBookDemo}>
            <CalendarCheck className="w-5 h-5" />
            Book a Live Demo
          </button>

          <a href={SALES_PHONE_HREF} className={styles.secondaryButton}>
            <Phone className="w-5 h-5" />
            {SALES_PHONE}
          </a>
        </div>

        <div className={`${styles.trustRow} animate fade-up delay-5`}>
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <span key={item.label} className={styles.trustItem}>
                <Icon className={styles.trustIcon} />
                {item.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}