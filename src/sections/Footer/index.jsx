import React from 'react';
import { styles } from './style';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver'; // Hook file verbatim

export default function Footer() {
  const footerContentRef = useScrollAnimation();
  const dividerRef = useScrollAnimation();

  return (
    <div className="w-full h-auto flex justify-center items-center pt-10" >
      <footer className={styles.footer}>
        <div
          ref={footerContentRef}
          className={`${styles.footerGrid} animate fade-up scroll-hidden`}
        >
          {/* Brand + Social Column */}
          <div className={styles.footerColBrand}>
            <div className={`${styles.footerSocialRow} animate fade-in delay-3`}>
              <a href="#" aria-label="LinkedIn" className={styles.footerSocialIcon}>in</a>
              <a href="#" aria-label="Facebook" className={styles.footerSocialIcon}>f</a>
            </div>
            <a href="#contact" className={`${styles.footerContactLink} animate fade-in delay-4`}>
              Get in contact with us <span>›</span>
            </a>
          </div>

          {/* Company Column */}
          <div className={styles.footerColLinks}>
            <h6 className={`${styles.footerSectionHeading} animate fade-down delay-2`}>Company</h6>
            <ul className={styles.footerList}>
              <li className="animate slide-left delay-3">
                <a href="#about" className={styles.footerLink}>About Us</a>
              </li>
              <li className="animate slide-left delay-4">
                <a href="#careers" className={styles.footerLink}>Careers</a>
              </li>
              <li className="animate slide-left delay-5">
                <a href="#partners" className={styles.footerLink}>Partners</a>
              </li>
            </ul>
          </div>

          {/* Other Links Column */}
          <div className={styles.footerColLinks}>
            <h6 className={`${styles.footerSectionHeading} animate fade-down delay-2`}>Other Links</h6>
            <ul className={styles.footerList}>
              <li className="animate slide-left delay-3">
                <a href="#login" className={styles.footerLink}>Login</a>
              </li>
              <li className="animate slide-left delay-4">
                <a href="#help" className={styles.footerLink}>Help Center</a>
              </li>
              <li className="animate slide-left delay-5">
                <a href="#privacy" className={styles.footerLink}>Privacy Policy</a>
              </li>
              <li className="animate slide-left delay-6">
                <a href="#terms" className={styles.footerLink}>Terms of Use</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className={styles.footerColNewsletter}>
            <h6 className={`${styles.footerSectionHeading} animate fade-down delay-2`}>Newsletter</h6>
            <p className={`${styles.footerNewsletterDesc} animate fade-in delay-3`}>
              Sign-up to receive product updates. Only good stuff, no spam.
            </p>
            <form
              className={`${styles.footerNewsletterForm} animate fade-up delay-4`}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Work Email*"
                className={styles.footerNewsletterInput}
              />
              <button type="submit" className={styles.footerNewsletterBtn}>
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div
          ref={dividerRef}
          className={`${styles.footerDivider} animate text-reveal scroll-hidden`}
          style={{ animationDuration: '1.2s' }}
        />

        <p className={`${styles.footerBottomRow} animate fade-in delay-2`}>
          © 2026 Hashverx Labs. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}