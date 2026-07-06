import { styles } from "./style";

const HERO_BG_IMAGE =
  "https://images.unsplash.com/photo-1764866557879-059e1db80a50?auto=format&fit=crop&w=1200&q=80";

const painPoints = [
  "Stop Revenue Leakage: Track every installment automatically.",
  "Zero Dealer Disputes: Eliminate calculation errors on commissions.",
  "No Operational Chaos: Automate balloting and plot allocations instantly.",
  "Lighten Staff Burden: No more manual printing of client statements.",
];

const floatingLabels = [
  { text: "🏷️ Auto-Installments Active", position: "top-[14%] -left-6" },
  { text: "🏷️ AI Command Mode", position: "top-[46%] -right-8" },
  { text: "🏷️ Secure Plot Allocation", position: "bottom-[10%] left-[8%]" },
];

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroGrid}>
        {/* Left column — copy */}
        <div className="lg:pb-10 xxl:pb-0 animate delay-3 slide-left  " >
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
            <button className={styles.heroBtnPremium + 
              ' animate delay-5 pop-in'
             }>Book a Live Demo</button>
            <button className={styles.heroBtnOutline+ 
              ' animate delay-5 pop-in'}>
              📞 Call Sales Team
            </button>
          </div>
        </div>

        {/* Right column — composite visual */}
        <div className={styles.mockupWrapper + ' animate delay-5 blur-in ' }>
  <div className={styles.mockupContainer} style={{ position: "relative" }}>
    {/* Background layer: premium architecture photo — borders and frame backgrounds removed */}
    <div
      className={styles.mockupImg}
      style={{
        backgroundImage: `url(${HERO_BG_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "420px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Foreground overlap layer: dark dashboard UI frame */}
      <div
        style={{
          position: "absolute",
          bottom: "6%",
          left: "8%",
          width: "62%",
          background: "rgba(18,37,35,0.88)",
          borderRadius: "16px",
          padding: "16px 18px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
          backdropFilter: "blur(4px)",
        }}
      >
        <p
          style={{
            color: "#5cdb97",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          RealEstateX Dashboard
        </p>
        
        {/* Abstract chart bars */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "6px",
            height: "48px",
          }}
        >
          {[40, 70, 55, 90, 65, 80, 50].map((h, i) => (
            <div
              key={i}
              style={{
                width: "10px",
                height: `${h}%`,
                borderRadius: "3px",
                background: i % 2 === 0 ? "#b9fba6" : "rgba(185,251,166,0.4)",
              }}
            />
          ))}
        </div>
      </div>
    </div>

    {/* Floating AI micro-labels */}
    {floatingLabels.map((label, i) => (
      <span
        key={i}
        className={`${styles.floatBadge} ${label.position}`}
      >
        {label.text}
      </span>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}