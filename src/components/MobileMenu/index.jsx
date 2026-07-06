// index.js
import React from 'react';
import { styles } from './style';
import { Button } from '../CTAButton';
import { X, Bot, LayoutGrid, ShieldCheck, Phone, CalendarCheck } from 'lucide-react';

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
          <a href="#agents" className={`${styles.navLink} group`} onClick={() => setIsOpen(false)}>
            <Bot size={20} className={styles.navLinkIcon} />
            AI Agents
          </a>
          <a href="#features" className={`${styles.navLink} group`} onClick={() => setIsOpen(false)}>
            <LayoutGrid size={20} className={styles.navLinkIcon} />
            Core Features
          </a>
          <a href="#security" className={`${styles.navLink} group`} onClick={() => setIsOpen(false)}>
            <ShieldCheck size={20} className={styles.navLinkIcon} />
            Security
          </a>

          <div className="flex flex-col gap-3 mt-6">
            <Button
              className={styles.navBtnOutline}
              text={<><Phone size={16} /> Call Now</>}
              onPress={() => window.location.href = 'tel:+923344071716'}
            />
            <Button
              className={styles.navBtnPremium}
              text={<><CalendarCheck size={16} /> Book Demo</>}
              onPress={() => console.log('Book Demo Clicked')}
            />
          </div>
        </div>

        {/* Optional decorative bottom spacer matching premium branding */}
        <div className={styles.footerNote}>
          <p className={styles.footerText}>HashVerx © 2026</p>
        </div>

      </div>
    </div>
  );
}

export default MobileMenu;