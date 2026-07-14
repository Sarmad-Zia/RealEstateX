import { useState } from "react";
import { styles } from "./style";
import { featureData } from "./data";
import { useScrollAnimation } from "../../hooks/UserInteractionObserver";

export default function Features() {
  const [activeTab, setActiveTab] = useState("property");

  const headerRef = useScrollAnimation();
  const mainContentRef = useScrollAnimation();

  const active = featureData[activeTab];

  return (
    <section id="features" className={`${styles.py5} bg-cream`}>
      <div className="max-w-7xl mx-auto">

        <div
          ref={headerRef}
          className={`${styles.sectionHeader} animate blur-in scroll-hidden delay-2`}
        >
          <h2 className={styles.sectionTitle}>
            Everything Needed to Scale Your{" "}
            <span className="text-gradient">Real Estate Operations</span>
          </h2>
          <p className={styles.sectionDesc}>
            A full-lifecycle ERP designed for the high-stakes property market.
          </p>
        </div>

        <div
          ref={mainContentRef}
          className={`${styles.featureBox} animate fade-up scroll-hidden`}
        >
          {/* Sidebar */}
          <div className={styles.featureSidebar}>
            {Object.keys(featureData).map((key) => {
              const item = featureData[key];
              const Icon = item.icon;
              const isActive = activeTab === key;

              return (
                <div
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`${styles.tabItemBase} ${
                    isActive ? styles.tabItemActive : styles.tabItemInactive
                  }`}
                >
                  <span
                    className={`${styles.iconBadgeBase} ${
                      isActive ? styles.iconBadgeActive : styles.iconBadgeInactive
                    }`}
                  >
                    <Icon size={18} strokeWidth={2.25} />
                  </span>
                  <span
                    className={`${styles.tabLabelBase} ${
                      isActive ? styles.tabLabelActive : styles.tabLabelInactive
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Content panel — this whole side IS the window now */}
          <div key={activeTab} className={`${styles.featureContentArea} animate fade-in`}>
            <div className={styles.featureWindowCard}>
              {/* Chrome bar spans the full top edge of the right panel */}
              <div className={styles.featureWindowChrome}>
                <span className={styles.chromeDotRed} />
                <span className={styles.chromeDotAmber} />
                <span className={styles.chromeDotGreen} />
                <span className={styles.featureWindowUrlBar}>
                  app.realestatex.io
                </span>
              </div>

              {/* Image fully contained — nothing gets cropped or squished */}
              <div className={`${styles.featureImageClip} animate scale-in`}>
                <img
                  src={active.image}
                  alt={active.title}
                  className={styles.featureImage}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Caption strip below the window, still inside the same panel */}
            <div className={`${styles.featureTextWrap} animate fade-up delay-2`}>
              <h3 className={styles.featureTitle}>{active.title}</h3>
              <span className={styles.featureUnderline} />
              <p className={styles.featureTextDescription}>{active.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}