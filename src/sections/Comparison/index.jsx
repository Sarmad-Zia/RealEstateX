import React from 'react';
import { CheckCircle2, XCircle, MinusCircle } from 'lucide-react';
import { styles } from './style';
import { competitors, comparisonRows } from './data';
import { useScrollAnimation } from '../../hooks/UserInteractionObserver'; // Adjust file path if needed

function getStatus(value) {
  if (typeof value === 'boolean') return value ? 'positive' : 'negative';
  if (/^yes/i.test(value)) return 'positive';
  if (/^no$/i.test(value)) return 'negative';
  return 'neutral';
}

function Availability({ value }) {
  const status = getStatus(value);
  const label = typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value;

  const Icon = status === 'positive' ? CheckCircle2 : status === 'negative' ? XCircle : MinusCircle;
  const iconClass =
    status === 'positive' ? styles.iconYes : status === 'negative' ? styles.iconNo : 'inline-block h-5 w-5 text-body-text/50';

  return (
    <span className="flex flex-col items-center gap-1">
      <Icon className={iconClass} aria-hidden="true" />
      <span className="whitespace-normal text-center text-xs font-inter font-medium text-body-text">
        {label}
      </span>
    </span>
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
          <h2 className={styles.title + ' generalTitle'}>
            One Platform, <span className="text-gradient">No Compromises</span>
          </h2>
          <p className={styles.subtitle + ' generalDesc'}>
            See how PropertyVerx stacks up against the tools you&apos;re already juggling.
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
                <th className={styles.thFeature}>Feature Matrix</th>
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