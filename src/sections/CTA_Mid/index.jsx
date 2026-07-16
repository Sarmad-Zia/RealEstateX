import React from 'react';
import { styles } from './style';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver'; // Adjust file path if needed
import { CalendarCheck } from 'lucide-react';

// After ai section 
export default function CTABanner({ onBookDemo = () => {
  window.location.href=  '#contact'
} }) {
  const cardRef = useScrollAnimation();

  return (
    <section className={styles.wrap}>
      <div ref={cardRef} className={`${styles.card} animate scale-in scroll-hidden`}>
        <div className={styles.textBlock}>
          <p className={styles.eyebrow}>See It In Action</p>
          <h3 className={styles.heading + ' generalTitle' }>Want to see how easy it is to set up a <span className='text-forest' >36-months</span> custom property installment plan? </h3>
          {/* <h3 className={styles.heading}>See Your Own Ledger Inside PropertyVerx</h3> */}
          {/* <p className={styles.subhead}>
            A walkthrough shows exactly how your society&apos;s files, installments, and
            balloting would look, live.
          </p> */}
        </div>

        <button type="button" className={styles.ctaButton + ' dark:text-black!'} onClick={onBookDemo}>
          <CalendarCheck className="w-5 h-5" />
          Book a Live Demo
        </button>
      </div>
    </section>
  );
}