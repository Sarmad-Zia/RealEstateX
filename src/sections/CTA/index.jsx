import React from "react";
import { styles } from "./style";
import { useScrollAnimation } from "../../hooks/UserInteractionObserver";
import { CalendarCheck } from "lucide-react";

export default function CTA({ onBookDemo = () => {} }) {
  const contentRef = useScrollAnimation();

  return (
    <section id="cta" className={styles.section}>
      <div className={styles.glowTopLeft} aria-hidden="true" />
      <div className={styles.glowBottomRight} aria-hidden="true" />

      <div
        ref={contentRef}
        className={`${styles.content} animate fade-up scroll-hidden`}
      >
        <h2 className={`${styles.heading} animate fade-up delay-1`}>
          Ready to eliminate manual spreadsheets and centralize your entire
          property inventory?
        </h2>

        <div className={`${styles.buttonsRow} animate scale-in delay-2`}>
          <button
            type="button"
            className={styles.primaryButton}
            onClick={onBookDemo}
          >
            <CalendarCheck className="w-5 h-5" />
            Consult with a Real Estate Systems Architect
          </button>
        </div>
      </div>
    </section>
  );
}