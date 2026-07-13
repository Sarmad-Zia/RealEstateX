import { styles } from "./style";
import heroImage from "../../assets/images/heroImage.png";
import { Sparkles, Star, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroGrid}>
        {/* Copy column */}
        <div className={styles.copyCol + " animate delay-3 py-10 slide-left"}>
          {/* Decorative icon cluster */}
          <div className={styles.decorIconWrap}>
            <Sparkles className={styles.decorIconSparkle} strokeWidth={2.5} />
          </div>
          <div className={styles.textSection}>
            <span className={styles.sectionTag}>The Next-Gen Real Estate OS</span>
            <h1 className={styles.heroTitle}>
              The Enterprise Real Estate OS: Automate Listings, Installments,
              and Agent Commissions
            </h1>

            <p className={styles.heroDescription}>
              A unified management platform built for modern developers,
              realtors, and property societies. Streamline buying, selling,
              and leasing with automated invoicing, localized flexible
              installment plans, and an instant client portal.
            </p>
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
              className={
                styles.heroBtnOutline + " animate delay-5 pop-in"
              }
            >
              📞 Call Sales Team
            </button>
          </div>
        </div>

        {/* Mockup column — hidden below md */}
        <div className={styles.mockupWrapper + " animate delay-5 blur-in"}>
          <div className={styles.mockupContainer}>
            <img
              src={heroImage}
              alt="RealEstateX Dashboard"
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