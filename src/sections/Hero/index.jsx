import { styles } from "./style";
import { images } from "../../assets/images.js";
import { ShieldAlert } from "lucide-react";
import { painPoints } from "./data";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroGrid}>
        {/* Copy column */}
        <div className={styles.copyCol + " animate delay-3 py-10 slide-left"}>
            <span className={styles.sectionTag}>The Next-Gen Real Estate OS</span>
          <div className={styles.textSection}>

            <h1 className={styles.heroTitle + ' generalTitle' }>
              The Enterprise Real Estate OS: Automate Listings, Installments,
              and Agent Commissions
            </h1>

            <p className={styles.heroDescription}>
              A unified management platform built for modern developers,
              realtors, and property societies. Streamline buying, selling,
              and leasing with automated invoicing, localized flexible
              installment plans, and an instant client portal.
            </p>

            <ul className={styles.painList + " animate delay-4 fade-up"}>
              {painPoints.map((point, i) => (
                <li key={i} className={styles.painItem}>
                  <span className={styles.painIconBadge}>
                    <ShieldAlert className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.heroBtnGroup}>
            <button
              className={
                styles.heroBtnPremium +
                " animate delay-5 pop-in text-forest-deep!"
              }
            >
              Book a Live Demo
            </button>

            <button
              className={styles.heroBtnOutline + " animate delay-5 pop-in"}
            >
              📞 Call Sales Team
            </button>
          </div>
        </div>

        {/* Mockup column — hidden below md */}
        <div className={styles.mockupWrapper + " animate delay-5 blur-in"}>
          <div className={styles.mockupContainer}>
            <img
              src={images.hero.main}
              alt="PropertyVerx Dashboard"
              className={styles.mockupImg}
              loading="eager"
            />
            <div className={styles.mockupShadow} />
          </div>
        </div>
      </div>
    </section>
  );
}