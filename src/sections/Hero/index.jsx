import { styles } from "./style";
// Explicitly import the image so the bundler tracks and resolves the path correctly
import heroImage from "../../assets/images/heroImage.png";

const painPoints = [
  "Stop Revenue Leakage: Track every installment automatically.",
  "Zero Dealer Disputes: Eliminate calculation errors on commissions.",
  "No Operational Chaos: Automate balloting and plot allocations instantly.",
  "Lighten Staff Burden: No more manual printing of client statements.",
];

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroGrid}>
        {/* Left column — copy */}
        <div className="lg:pb-10 xxl:pb-0 animate delay-3 slide-left">
          <span className={styles.sectionTag}>The Next-Gen Real Estate OS</span>

          <h1 className={styles.heroTitle}>
            Take Your Real Estate Beyond Excel.
            <br />
            Run It on Agentic AI.
          </h1>

          <p className={styles.heroDescription}>
            Stop losing revenue to manual tracking, record disputes, and messy
            paperwork. RealEstateX is a premium, secure operating system that
            automates your entire lifecycle—from CRM and automated
            installments to effortless plot balloting.
          </p>

          <ul className={styles.painList}>
            {painPoints.map((point, i) => (
              <li key={i} className={styles.painItem}>
                <span className={styles.painIcon}>✓</span>
                {point}
              </li>
            ))}
          </ul>

          <div className={styles.heroBtnGroup}>
            <button className={styles.heroBtnPremium + ' animate delay-5 pop-in text-forest-deep!'}>
              Book a Live Demo
            </button>
            <button className={styles.heroBtnOutline + ' animate delay-5 pop-in'}>
              📞 Call Sales Team
            </button>
          </div>
        </div>

        {/* Right column — composite visual */}
        <div className={styles.mockupWrapper + ' animate delay-5 blur-in'}>
          <div className={styles.mockupContainer}>
            {/* Background wrapper: Fixed responsive mobile heights via Tailwind classes */}
            <div
              className={`${styles.mockupImg}`}
            >
              <img
                src={heroImage}
                alt="RealEstateX Dashboard"
                className="w-full h-full object-cover rounded-[20px]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}