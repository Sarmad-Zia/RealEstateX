import React, { useState } from 'react';
import Navbar from '../../sections/Navbar';
import Hero from '../../sections/Hero';
import Agents from '../../sections/Agents';
import InterstitialBanner from '../../sections/Banner';
import Features from '../../sections/Feature';
import EdgeGrid from '../../sections/EdgeGrid';
import Security from '../../sections/Security';
import FAQ from '../../sections/FAQ';
import CTA from '../../sections/CTA';
import Footer from '../../sections/Footer';
import TrustedBy from '../../sections/TurstedBy';
import AssetPortfolio from '../../sections/AssetsPorfolio';
import FootprintStrip from '../../sections/Counter';
import { Button } from '../../components/CTAButton';
import Testimonials from '../../sections/Testimonials';
import OperationsShowcase from '../../sections/Operations';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

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

      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />

      {/* 1. Immediate social proof & global reach right after the hook */}
      <TrustedBy />
      <FootprintStrip />
      <OperationsShowcase/>

      {/* 2. Show the core tech differentiator (The AI Workers) */}
      <Agents />

      {/* 3. Deep dive into the actual system mechanics */}
      <Features />

      {/* 4. Show the business transformation & ROI (Before vs. After / Cost Savings) */}
      <EdgeGrid />

      {/* 5. Back up your claims with human proof & enterprise trust */}
      <Testimonials />
      <Security />

      {/* 6. Address final hesitations just before the closing pitch */}
      <FAQ />
      <CTA />

      <Footer />
    </div>
  );
}