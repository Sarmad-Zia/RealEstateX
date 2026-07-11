import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { styles } from './style';
import { competitors, comparisonRows } from './data';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver'; // Adjust file path if needed

function Availability({ value }) {
  return value ? (
    <CheckCircle2 className={styles.iconYes} aria-label="Yes" />
  ) : (
    <XCircle className={styles.iconNo} aria-label="No" />
  );
}

export default function FeatureComparisonMatrix() {
  // Dedicated observer hooks so the header and table can stagger independently
  const headerRef = useScrollAnimation();
  const tableRef = useScrollAnimation();

  return (
    <section id="comparison" className={styles.section}>
      {/* Thin scrollbar for the horizontal swipe area, tinted with the theme's mint token */}
      <style>{`
        .rex-compare-scroll::-webkit-scrollbar { height: 6px; }
        .rex-compare-scroll::-webkit-scrollbar-track { background: transparent; }
        .rex-compare-scroll::-webkit-scrollbar-thumb { background-color: var(--color-mint); border-radius: 9999px; }
      `}</style>

      <div className={styles.container}>
        {/* Header */}
        <div
          ref={headerRef}
          className={`${styles.sectionHeader} animate blur-in scroll-hidden`}
        >
          <span className={styles.eyebrow}>How We Compare</span>
          <h2 className={styles.title}>
            One Platform, <span className="text-gradient">No Compromises</span>
          </h2>
          <p className={styles.subtitle}>
            See how RealEstateX stacks up against the tools you&apos;re already juggling.
          </p>
        </div>

        {/* Table */}
        <div
          ref={tableRef}
          className={`${styles.tableOuter} animate fade-up delay-1 scroll-hidden`}
        >
          <table className={styles.table}>
            <thead>
              <tr className={styles.theadRow}>
                <th className={styles.thFeature}>Core ERP &amp; Automation Features</th>
                {competitors.map((c) => (
                  <th
                    key={c.key}
                    className={c.highlight ? styles.thHighlight : styles.thCompetitor}
                  >
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr
                  key={row.feature}
                  className={`${styles.bodyRow} ${idx % 2 === 1 ? styles.bodyRowAlt : ''}`}
                >
                  <td className={styles.tdFeature}>{row.feature}</td>
                  {competitors.map((c) => (
                    <td
                      key={c.key}
                      className={c.highlight ? styles.tdHighlight : styles.tdCompetitor}
                    >
                      <Availability value={row[c.key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.footnote}>Swipe sideways on mobile to see the full comparison →</p>
      </div>
    </section>
  );
}