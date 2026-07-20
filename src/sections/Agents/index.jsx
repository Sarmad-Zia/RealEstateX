import React from 'react';
import { styles } from './style';
import { agentsData, agentsContent } from '../../data/commonData';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver';


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
          <agent.icon size={25} color="currentColor" />
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
          <span className={styles.sectionTag}>{agentsContent.sectionTag}</span>
          <h2 className={styles.sectionTitle + ' generalTitle' }>{agentsContent.sectionTitle}   <span className="text-gradient dark:lightText-gradient">{agentsContent.sectionTitleAccent}</span></h2>
          <p className={styles.sectionDesc+ ' generalDesc'}>{agentsContent.sectionDesc}</p>
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