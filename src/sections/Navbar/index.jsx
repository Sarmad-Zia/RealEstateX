import React, { useState, useEffect } from 'react';
import { styles } from './style';
import { Button } from '../../components/CTAButton';
import { Menu, Moon, Sun } from 'lucide-react';
import MobileMenu from '../../components/MobileMenu';
import { brand, navbarContent } from '../../data/commonData';

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
          {brand.logoText}
          <span className={`${styles.logoAccent} animate-logo-x`}>
            {brand.logoAccent}
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
          {navbarContent.links.map((link, idx) => (
            <a key={idx} href={link.href} className={isScrolled ? styles.navLinkIsland : styles.navLinkFull}>
              {link.label}
            </a>
          ))}
          
          <Button 
            className={isScrolled ? styles.navBtnOutlineIsland : styles.navBtnOutlineFull } 
            text={navbarContent.callBtnText} 
            onPress={() => window.location.href = navbarContent.callHref} 
          />
          <Button 
            className={isScrolled ? styles.navBtnPremiumIsland : styles.navBtnPremiumFull + " text-forest-deep!"} 
            text={navbarContent.demoBtnText} 
            onPress={() => {console.log('Book Demo Clicked'); window.location.href= '#contact' }} 
          />
          {/* {
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
          } */}

        </div>
      </div>
    </nav>
  );
}