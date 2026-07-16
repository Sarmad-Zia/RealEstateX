import React, { useEffect, useState } from 'react';
import Navbar from '../../sections/Navbar';
import Hero from '../../sections/Hero';
import Agents from '../../sections/Agents';
import InterstitialBanner from '../../sections/Banner';
import Features from '../../sections/Feature';
import EdgeGrid from '../../sections/EdgeGrid';
import Security from '../../sections/Security';
import FAQ from '../../sections/MultiFAQ';
import CTA from '../../sections/CTA';
import Footer from '../../sections/Footer';
// import TrustedBy from '../../sections/TurstedBy';
import AssetPortfolio from '../../sections/AssetsPorfolio';
import FootprintStrip from '../../sections/Counter';
import { Button } from '../../components/CTAButton';
import Testimonials from '../../sections/Testimonials';
import OperationsShowcase from '../../sections/Operations';
import MarketInsights from '../../sections/Articles';
import Pricing from '../../sections/Pricing';
import ContactForm from '../../sections/ContactForm';
import CTABanner from '../../sections/CTA_Mid';
import RegulatoryCompliance from '../../sections/Accredatation';
import FeatureComparisonMatrix from '../../sections/Comparison';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  return (
    <div className="w-full bg-paper text-ink overflow-x-hidden">
      {/* <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <TrustedBy />
      <FootprintStrip />
      <Security />
      <Agents />
      <FAQ />
       <Features />
      <EdgeGrid />
      <Testimonials/>
      <CTA />
      <Footer /> */}

      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} isDark={isDarkMode} setIsDark={setIsDarkMode} />
      <Hero />

      <FootprintStrip /> 

      <CTABanner />
      <Agents />
      <Features />

      <Testimonials />

      <CTA />

      <FeatureComparisonMatrix />
      <Security />



      <Pricing />

      <FAQ />
      <ContactForm />

      <Footer />
    </div>
  );
}