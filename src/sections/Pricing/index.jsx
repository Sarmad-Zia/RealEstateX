import { useEffect, useRef, useState } from "react";
import {
  Cloud,
  Server,
  FileText,
  Users,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { hostingOptions, pricingTiers, pricingDisclaimer } from "./data";
import { styles } from "./style";

const METRIC_ICONS = {
  files: FileText,
  seats: Users,
  building: Building2,
};

const HOSTING_ICONS = {
  cloud: Cloud,
  server: Server,
};

export default function Pricing({ onSelectTier = () => {} }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hostingIndex, setHostingIndex] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const activeHosting = hostingOptions[hostingIndex];

  return (
    <section id='pricing' ref={sectionRef} className={styles.section}>
      <header
        className={`${styles.header} animate fade-up scroll-hidden ${isVisible ? "in-view" : ""}`}
      >
        <div className={styles.eyebrowRow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrow}>Enterprise Investment</span>
          <span className={styles.eyebrowLine} />
        </div>
        <h2 className={styles.heading}>Pricing Built for Scale, Not Subscriptions</h2>
        <p className={styles.subhead}>
          RealEstateX is procured the way enterprise infrastructure is procured —
          scoped to your portfolio, not billed like a phone app.
        </p>
      </header>

      <div
        className={`${styles.toggleWrap} animate fade-up delay-1 scroll-hidden ${
          isVisible ? "in-view" : ""
        }`}
      >
        <div className={styles.toggleTrack}>
          <div
            className={styles.toggleThumb}
            style={{ transform: hostingIndex === 1 ? "translateX(100%)" : "translateX(0%)" }}
          />
          {hostingOptions.map((option, index) => {
            const Icon = HOSTING_ICONS[option.icon] ?? Cloud;
            const active = index === hostingIndex;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setHostingIndex(index)}
                className={`${styles.toggleButton} ${
                  active ? styles.toggleButtonActive : styles.toggleButtonInactive
                }`}
              >
                <Icon className="w-4 h-4" />
                {option.label}
              </button>
            );
          })}
        </div>
        <p className={styles.toggleNote}>{activeHosting.note}</p>
      </div>

      <div className={styles.grid}>
        {pricingTiers.map((tier, index) => {
          const delay = `delay-${index + 2}`;
          return (
            <div
              key={tier.id}
              className={`${styles.card} ${tier.highlighted ? styles.cardHighlighted : ""} animate fade-up scroll-hidden ${delay} ${
                isVisible ? "in-view" : ""
              }`}
            >
              {tier.ribbon && <span className={styles.ribbon}>{tier.ribbon}</span>}

              <h3 className={styles.tierName}>{tier.name}</h3>
              <p className={styles.tierAudience}>{tier.audience}</p>

              <div className={styles.metricsRow}>
                {tier.metrics.map((metric) => {
                  const MetricIcon = METRIC_ICONS[metric.icon] ?? FileText;
                  return (
                    <div key={metric.label} className={styles.metricCell}>
                      <MetricIcon className={styles.metricIcon} />
                      <span className={styles.metricValue}>{metric.value}</span>
                      <span className={styles.metricLabel}>{metric.label}</span>
                    </div>
                  );
                })}
              </div>

              <div className={styles.priceBlock}>
                <p className={styles.priceEyebrow}>{tier.price.eyebrow}</p>
                <p className={styles.priceAmount}>{tier.price.amount}</p>
                <p className={styles.priceNote}>{tier.price.note}</p>
              </div>

              <div className={styles.featureList}>
                {tier.features.map((feature, i) => (
                  <div key={i} className={styles.featureRow}>
                    <CheckCircle2 className={styles.featureIcon} />
                    <p className={styles.featureText}>{feature}</p>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className={tier.highlighted ? styles.ctaPrimary : styles.ctaSecondary}
                onClick={() => onSelectTier(tier)}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>

      <div
        className={`${styles.disclaimerWrap} animate fade-up delay-3 scroll-hidden ${
          isVisible ? "in-view" : ""
        }`}
      >
        <p className={styles.disclaimerText}>{pricingDisclaimer}</p>
      </div>
    </section>
  );
}