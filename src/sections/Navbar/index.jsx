import React, { useState, useEffect } from 'react';
import { styles } from './style';
import { Button } from '../../components/CTAButton';
import { Menu, Moon, Sun } from 'lucide-react';
import MobileMenu from '../../components/MobileMenu';

export default function Navbar({ isOpen, setIsOpen,isDark,setIsDark }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`${styles.navbarBase} ${
        isScrolled ? styles.navbarIsland : styles.navbarFull
      } animate fade-in`}
    >
      <div className={styles.navWrapper}>
        {/* Dynamic Logo Text Color */}
        <div className={`${styles.logo} ${isScrolled ? styles.logoIsland : styles.logoFull}`}>
          RealEstate
          <span className={`${styles.logoAccent} animate-logo-x`}>
            X
          </span>
        </div>
        
        {/* Mobile Menu Icon color adaptation */}
        <div className={styles.menuIcon}>
          <Menu 
            size={30} 
            color={isScrolled ? '#fefcf9' : '#122523'} 
            onClick={() => setIsOpen(!isOpen)} 
          />
          {isOpen && <MobileMenu setIsOpen={setIsOpen} isOpen={isOpen} />}
        </div>
        
        {/* Dynamic Links and Buttons based on scroll state */}
        <div className={styles.navLinksContainer}>
          <a href="#agents" className={isScrolled ? styles.navLinkIsland : styles.navLinkFull}>
            AI Agents
          </a>
          <a href="#features" className={isScrolled ? styles.navLinkIsland : styles.navLinkFull}>
            Core Features
          </a>
          <a href="#security" className={isScrolled ? styles.navLinkIsland : styles.navLinkFull}>
            Security
          </a>
          <a href="#pricing" className={isScrolled ? styles.navLinkIsland : styles.navLinkFull}>
            Pricing
          </a>
          
          <Button 
            className={isScrolled ? styles.navBtnOutlineIsland : styles.navBtnOutlineFull } 
            text="Call Now" 
            onPress={() => window.location.href = 'tel:+923344071716'} 
          />
          <Button 
            className={isScrolled ? styles.navBtnPremiumIsland : styles.navBtnPremiumFull + " text-forest-deep!"} 
            text="Book Live Demo" 
            onPress={() => console.log('Book Demo Clicked')} 
          />
          {
            isDark ? (
              <Button 
                className={isScrolled ? styles.navBtnPremiumIsland : styles.navBtnPremiumFull + " text-forest-deep!"}  
              // text="Light Mode"
                onPress={() => setIsDark(false)}
              >
                <Sun size={20} />
              </Button>
            ) : (
              <Button
                className={isScrolled ? styles.navBtnPremiumIsland : styles.navBtnPremiumFull}
                // text="Dark Mode"
                onPress={() => setIsDark(true)}
              >
                <Moon size={20} />
              </Button>
            )
          }

        </div>
      </div>
    </nav>
  );
}