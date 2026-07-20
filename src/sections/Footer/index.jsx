import React from 'react';
import { styles } from './style';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver';
import { brand, footerContent } from '../../data/commonData';

export default function Footer() {
  const footerContentRef = useScrollAnimation();
  const dividerRef = useScrollAnimation();

  return (
    <div className="w-full h-auto flex justify-center items-center pt-10 dark:bg-mint/40" >
      <footer className={styles.footer}>
        <div
          ref={footerContentRef}
          className={`${styles.footerGrid} animate fade-up scroll-hidden`}
        >
          {/* Brand + Social Column */}
          <div className={styles.footerColBrand}>
            <div className={`${styles.logo} ${styles.logoFull} animate fade-in delay-2`}>
              {brand.footerLogoText}
              <span className={`${styles.logoAccent} animate-logo-x`}>
                {brand.footerLogoAccent}
              </span>
            </div>
            <p className={`${styles.footerBrandDesc} animate fade-in delay-3 mb-5 `}>
              {footerContent.brandDesc}
            </p>
            <div className={`${styles.footerSocialRow} animate fade-in delay-3`}>
              {footerContent.socialLinks.map((link, idx) => (
                <a key={idx} href={link.href} aria-label={link.label} className={styles.footerSocialIcon}>{link.display}</a>
              ))}
            </div>
            <a href={footerContent.contactHref} className={`${styles.footerContactLink} animate fade-in delay-4`}>
              {footerContent.contactLinkText} <span>›</span>
            </a>
          </div>

          {/* Company Column */}
          {/* <div className={styles.footerColLinks}>
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
          </div> */}

          {/* Other Links Column */}
          <div className={styles.footerColLinks}>
            <h6 className={`${styles.footerSectionHeading} animate fade-down delay-2`}>{footerContent.otherLinksHeading}</h6>
            <ul className={styles.footerList}>
              {footerContent.otherLinks.map((link, idx) => (
                <li key={idx} className={`animate slide-left delay-${3 + idx}`}>
                  <a href={link.href} className={styles.footerLink}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className={styles.footerColNewsletter}>
            <h6 className={`${styles.footerSectionHeading} animate fade-down delay-2`}>{footerContent.newsletterHeading}</h6>
            <p className={`${styles.footerNewsletterDesc} animate fade-in delay-3`}>
              {footerContent.newsletterDesc}
            </p>
            <form
              className={`${styles.footerNewsletterForm} animate fade-up delay-4`}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder={footerContent.newsletterPlaceholder}
                className={styles.footerNewsletterInput}
              />
              <button type="submit" className={styles.footerNewsletterBtn}>
                {footerContent.newsletterBtnText}
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
          {brand.copyright} <a href={brand.copyrightLink} className='text-forest' >{brand.copyrightLinkText}</a>{brand.copyrightSuffix}
        </p>
      </footer>
    </div>
  );
}