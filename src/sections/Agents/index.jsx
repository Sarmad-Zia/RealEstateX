import React from 'react';
import { styles } from './style';
import { Banknote, UsersRound, Blocks, ChartPie } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver'; // Adjust path as necessary
import { Button } from '../../components/CTAButton';


const agentsData = [
  {
    title: "Recovery Agent",
    desc: "Automates overdue tracking and multi-channel reminders.",
    cmd: '"Show overdue files in Block B above 3 months."',
    icon: "Banknote"
  },
  {
    title: "Dealer Agent",
    desc: "Calculates complex tiered rebates and payout schedules.",
    cmd: '"Calculate March commission for Platinum dealers."',
    icon: "UsersRound"
  },
  {
    title: "Balloting Agent",
    desc: "Handles provable digital plot allocations and letters.",
    cmd: '"Ballot 50% paid 10 Marla files in Phase 2."',
    icon: "Blocks"
  },
  {
    title: "Report Agent",
    desc: "Instant revenue summaries and possession readiness lists.",
    cmd: '"Generate cashflow summary for management."',
    icon: "ChartPie"
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
        {agent.icon === "Banknote" && <Banknote size={25} color="currentColor" />}
        {agent.icon === "UsersRound" && <UsersRound size={25} color="currentColor" />}
        {agent.icon === "Blocks" && <Blocks size={25} color="currentColor" />}
        {agent.icon === "ChartPie" && <ChartPie size={25} color="currentColor" />}
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
    <section id="agents" className={styles.py5}>
      <div className="max-w-7xl mx-auto">

        {/* Header wrapper section with scroll visibility tracking setup */}
        <div
          ref={headerRef}
          className={`${styles.sectionHeader} animate blur-in scroll-hidden`}
        >
          <span className={styles.sectionTag}>Operational AI</span>
          <h2 className={styles.sectionTitle}>Meet Your <span className="text-gradient">AI Workforce</span></h2>
          <p className={styles.sectionDesc}>RealEstateX replaces manual effort with intelligent AI agents that understand your society data like a human expert.</p>
        </div>

        {/* Dynamic grid engine mapping structural item containers */}
        <div className={styles.agentsGrid}>
          {agentsData.map((agent, index) => (
            <AgentCard key={index} agent={agent} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className={`${styles.heroBtnPremium} px-12`} text="Activate AI Mode" onPress={()=>console.log('Activate AI Mode')} />
        </div>
      </div>
    </section>
  );
}