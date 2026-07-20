import { styles } from "./style";
import { images } from "../../assets/images.js";
import { ShieldAlert } from "lucide-react";
import { painPoints, heroContent } from "../../data/commonData";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroGrid}>
        {/* Copy column */}
        <div className={styles.copyCol + " animate delay-3 py-10 slide-left"}>
            <span className={styles.sectionTag}>{heroContent.sectionTag}</span>
          <div className={styles.textSection}>

            <h1 className={styles.heroTitle + ' generalTitle' }>
              {heroContent.title}
            </h1>

            <p className={styles.heroDescription}>
              {heroContent.description}
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
              {heroContent.primaryBtn}
            </button>

            <button
              className={styles.heroBtnOutline + " animate delay-5 pop-in"}
            >
              {heroContent.secondaryBtn}
            </button>
          </div>
        </div>

        {/* Mockup column — hidden below md */}
        <div className={styles.mockupWrapper + " animate delay-5 blur-in"}>
          <div className={styles.mockupContainer}>
            <img
              src={images.hero.main}
              alt={heroContent.mockupAlt}
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