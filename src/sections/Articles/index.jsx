import { useEffect, useRef, useState } from "react";
import {
  Search,
  Newspaper,
  BarChart3,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react";
import marketInsights from "./data";
import { styles, ledgerLinesStyle } from "./style";

const ICONS = {
  search: Search,
  news: Newspaper,
  chart: BarChart3,
  sparkle: Sparkles,
};

export default function MarketInsights({ onArticleClick = () => {} }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  // Reveal-on-scroll for the whole section, once
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

  // Controls the horizontal scrolling shift when buttons are clicked
  const scrollByStep = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  // Lock body scroll + support Escape while the modal is open
  useEffect(() => {
    if (!activeItem) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveItem(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeItem]);

  return (
    <section ref={sectionRef} className={styles.section}>
      <p aria-hidden="true" className={styles.watermark}>
        FIELD LOG
      </p>

      <header
        className={`${styles.header} animate fade-up scroll-hidden ${isVisible ? "in-view" : ""}`}
      >
        <div className={styles.eyebrowRow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrow}>Field Intelligence &mdash; Ref Log</span>
        </div>
        <h2 className={styles.heading}>Market Intelligence &amp; Insights</h2>
        <p className={styles.subhead}>
          Benchmarks, field reports, and release notes from inside Pakistan&apos;s shift
          toward AI-run housing societies &mdash; for developers, dealers, and society
          administrators who&apos;d rather read the numbers than argue about them.
        </p>
      </header>

      <div className={styles.carouselWrap}>
        <div ref={trackRef} className={styles.track}>
          {marketInsights.map((item, index) => {
            const Icon = ICONS[item.icon] ?? Newspaper;
            const delay = `delay-${(index % 6) + 1}`;

            return (
              <article
                key={item.id}
                className={`${styles.card} animate fade-up scroll-hidden ${delay} ${
                  isVisible ? "in-view" : ""
                }`}
                onClick={() => setActiveItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActiveItem(item);
                }}
              >
                <div className={styles.imageWrap}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className={styles.image}
                  />
                  <span className={styles.stamp}>
                    <Icon className={styles.stampIcon} />
                    <span className={styles.stampText}>{item.category}</span>
                  </span>
                </div>

                <div className={styles.cardBody}>
                  <span className={styles.refCode}>{item.ref}</span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>

                  <div className={styles.cardFooter}>
                    <button
                      type="button"
                      className={styles.ctaButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        onArticleClick(item);
                      }}
                    >
                      {item.cta}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className={styles.detailsButton}>View details</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className={styles.controlsRow}>
        <div className={styles.arrowGroup}>
          <button
            type="button"
            aria-label="Scroll to previous insights"
            className={styles.arrowButton}
            onClick={() => scrollByStep(-1)}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Scroll to next insights"
            className={styles.arrowButton}
            onClick={() => scrollByStep(1)}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {activeItem && (
        <div className={styles.overlay} onClick={() => setActiveItem(null)} role="presentation">
          <div
            className={styles.modalPanel}
            role="dialog"
            aria-modal="true"
            aria-labelledby="market-insight-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalImageWrap}>
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className={styles.modalImage}
              />
              <span className={styles.stamp}>
                {(() => {
                  const Icon = ICONS[activeItem.icon] ?? Newspaper;
                  return <Icon className={styles.stampIcon} />;
                })()}
                <span className={styles.stampText}>{activeItem.category}</span>
              </span>
              <button
                type="button"
                aria-label="Close"
                className={styles.modalClose}
                onClick={() => setActiveItem(null)}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalRefRow}>
                <span className={styles.refCode}>{activeItem.ref}</span>
              </div>

              <h3 id="market-insight-modal-title" className={styles.modalTitle}>
                {activeItem.title}
              </h3>

              <p className={styles.modalDescription}>{activeItem.description}</p>

              <div>
                <p className={styles.modalSectionLabel} style={{ marginBottom: "0.75rem" }}>
                  How PropertyVerx Solves This
                </p>
                <div className={styles.bulletList} style={ledgerLinesStyle}>
                  {activeItem.bullets.map((bullet, i) => (
                    <div key={i} className={styles.bulletRow}>
                      <CheckCircle2 className={styles.bulletIcon} />
                      <p className={styles.bulletText}>{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className={styles.modalSectionLabel} style={{ marginBottom: "0.5rem" }}>
                  Related Topics
                </p>
                <div className={styles.keywordRow}>
                  {activeItem.keywords.map((kw) => (
                    <span key={kw} className={styles.keywordChip}>
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.modalFooter}>
                <button type="button" className={styles.modalSecondary} onClick={() => setActiveItem(null)}>
                  Close
                </button>
                <button
                  type="button"
                  className={styles.modalCta}
                  onClick={() => onArticleClick(activeItem)}
                >
                  {activeItem.cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}