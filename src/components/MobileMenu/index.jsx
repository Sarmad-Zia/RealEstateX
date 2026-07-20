import React from 'react';
import { styles } from './style';
import { Button } from '../CTAButton';
import { X, Bot, LayoutGrid, ShieldCheck, Phone, CalendarCheck, Currency, BadgePercent } from 'lucide-react';
import { navbarContent } from '../../data/commonData';

function MobileMenu({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <div className={styles.mobileMenuOverlay} onClick={() => setIsOpen(false)}>
      {/* Stopping propagation prevents clicking the internal menu area from closing it */}
      <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>

        <div className={styles.mobileMenuHeader}>
          <h2 className={styles.menuTitle}>Menu</h2>
          <button
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className={styles.navLinksContainer}>
          <a href={navbarContent.links[0].href} className={`${styles.navLink} group`} onClick={() => setIsOpen(false)}>
            <Bot size={20} className={styles.navLinkIcon} />
            {navbarContent.links[0].label}
          </a>
          <a href={navbarContent.links[1].href} className={`${styles.navLink} group`} onClick={() => setIsOpen(false)}>
            <LayoutGrid size={20} className={styles.navLinkIcon} />
            {navbarContent.links[1].label}
          </a>
          <a href={navbarContent.links[2].href} className={`${styles.navLink} group`} onClick={() => setIsOpen(false)}>
            <ShieldCheck size={20} className={styles.navLinkIcon} />
            {navbarContent.links[2].label}
          </a>
          <a href={navbarContent.links[3].href} className={`${styles.navLink} group`} onClick={() => setIsOpen(false)}>
            <BadgePercent  size={20} className={styles.navLinkIcon} />
            {navbarContent.links[3].label}
          </a>

          <div className="flex flex-col gap-3 mt-6">
            <Button
              className={styles.navBtnOutline}
              text={<><Phone size={16} /> {navbarContent.callBtnText}</>}
              onPress={() => window.location.href = navbarContent.callHref}
            />
            <Button
              className={styles.navBtnPremium}
              text={<><CalendarCheck size={16} /> {navbarContent.mobileDemoBtnText}</>}
              onPress={() => console.log('Book Demo Clicked')}
            />
          </div>
        </div>

        {/* Optional decorative bottom spacer matching premium branding */}
        <div className={styles.footerNote}>
          <p className={styles.footerText}>{navbarContent.mobileFooterNote}</p>
        </div>

      </div>
    </div>
  );
}

export default MobileMenu;