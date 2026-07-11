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
import TrustedBy from '../../sections/TurstedBy';
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
    <div className="font-sans text-navy-dark bg-white min-h-screen selection:bg-azure-primary selection:text-white antialiased">
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

      {/* 1. Immediate social proof & global reach right after the hook */}
      {/* <TrustedBy /> */}
      <FootprintStrip />
      {/* <CTA />
       */}
      <CTABanner onBookDemo={() => setIsOpen(true)} />=
      <Agents />
      <Features />
      {/* 5. Back up your claims with human proof & enterprise trust */}
      {/* <RegulatoryCompliance/> */}
      <Testimonials />
      {/* <CTABanner onBookDemo={() => setIsOpen(true)} /> */}
      <CTA />
      {/* <EdgeGrid /> */}
      <FeatureComparisonMatrix/>
      <Security />
      {/* <OperationsShowcase /> */}

      {/* 2. Show the core tech differentiator (The AI Workers) */}
      {/* 3. Deep dive into the actual system mechanics */}

      {/* 4. Show the business transformation & ROI (Before vs. After / Cost Savings) */}

      {/* <MarketInsights /> */}
      {/* 6. Address final hesitations just before the closing pitch */}
      <Pricing />
      {/* <FAQ /> */}
      <FAQ />
      <ContactForm />

      <Footer />
    </div>
  );
}