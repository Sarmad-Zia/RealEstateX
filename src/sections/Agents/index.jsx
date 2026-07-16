import React from 'react';
import { styles } from './style';
import {
  UsersRound,
  ChartPie,
  FileText,
  Sparkles
} from "lucide-react";
import { useScrollAnimation } from '../../hooks/UserInteractionObserver'; // Adjust path as necessary
import { Button } from '../../components/CTAButton';


const agentsData = [
  {
    title: "Predictive Smart Lead and Tenant Matching",
    desc: "Match verified buyers and prospective tenants with available properties, plots, or commercial spaces using predictive budget and behavioral analysis.",
    cmd: '"Match verified buyers with suitable properties based on budget and behavior."',
    icon: "UsersRound"
  },
  {
    title: "Automated Smart Contract & Rental Generation",
    desc: "Feed property parameters directly into our localized AI engine to draft, audit, and instantly generate air-tight rental agreements and purchase deeds.",
    cmd: '"Generate a rental agreement for a commercial property."',
    icon: "FileText"
  },
  {
    title: "Intelligent Real-Time Revenue Forecasting Engine ",
    desc: "Run predictive cash flow models on your entire development portfolio. Let AI calculate project timelines against future monthly installment collections.",
    cmd: '"Forecast monthly cash flow for all active development projects."',
    icon: "ChartPie"
  },
  {
    title: "AI-Generated SEO Optimization for Listings",
    desc: "Instantly generate high-converting, professional property descriptions tailored for regional listing portals with a single click inside your dashboard.",
    cmd: '"Generate an SEO-optimized listing description for a 10 Marla plot."',
    icon: "Sparkles"
  }
];


function AgentCard({ agent, index }) {
  const cardRef = useScrollAnimation();

  const delayClass = `delay-${(index % 4) + 1}`;

  return (
    <div
      ref={cardRef}
      className={`${styles.aiCard} animate fade-up ${delayClass} scroll-hidden card-lift`}
    >
      {/* color="currentColor" lets each icon inherit text-forest from aiIconBox
          instead of being locked to a hardcoded hex — retheme-proof going forward */}
      <div className={styles.aiIconBox}>
          {agent.icon === "UsersRound" && <UsersRound size={25} color="currentColor" />}
          {agent.icon === "ChartPie" && <ChartPie size={25} color="currentColor" />}
          {agent.icon === "FileText" && <FileText size={25} color="currentColor" />}
          {agent.icon === "Sparkles" && <Sparkles size={25} color="currentColor" />}
      </div>

      <h4 className={styles.aiCardTitle}>{agent.title}</h4>
      <p className={styles.aiCardDesc}>{agent.desc}</p>
      <div className={styles.aiCommandBox}>{agent.cmd}</div>
    </div>
  );
}

export default function Agents() {
  const headerRef = useScrollAnimation(); // Separate hook observer for header section text

  return (
    <section id="agents" className={styles.py5 + " dark:bg-mint/40!"}>
      <div className="max-w-7xl mx-auto">

        {/* Header wrapper section with scroll visibility tracking setup */}
        <div
          ref={headerRef}
          className={`${styles.sectionHeader} animate blur-in scroll-hidden`}
        >
          <span className={styles.sectionTag}>Operational AI</span>
          <h2 className={styles.sectionTitle + ' generalTitle' }>Intelligent Property Tech:   <span className="text-gradient dark:lightText-gradient">AI-Driven Real Estate Operations</span></h2>
          <p className={styles.sectionDesc+ ' generalDesc'}>PropertyVerx replaces manual effort with intelligent AI agents that understand your society data like a human expert.</p>
        </div>

        {/* Dynamic grid engine mapping structural item containers */}
        <div className={styles.agentsGrid}>
          {agentsData.map((agent, index) => (
            <AgentCard key={index} agent={agent} index={index} />
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button className={`${styles.heroBtnPremium} px-12`} text="Activate AI Mode" onPress={() => console.log('Activate AI Mode')} />
        </div> */}
      </div>
    </section>
  );
}