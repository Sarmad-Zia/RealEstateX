// style.js
// Same CSS-var-driven color system as MarketInsights — no dark: prefixes
// needed for color since the tokens flip automatically under [data-theme="dark"].

export const styles = {
  section: "relative overflow-hidden bg-cream py-24 md:py-32 px-6 md:px-12",

  header: "relative z-10 max-w-6xl mx-auto text-center mb-12 md:mb-14",

  eyebrowRow: "flex items-center justify-center gap-3 mb-4",

  eyebrowLine: "h-px w-8 bg-forest/40",

  eyebrow:
    "font-inter text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-forest",

  heading:
    "font-poppins text-4xl md:text-5xl lg:text-6xl font-extrabold text-ink leading-[1.05] mb-5",

  subhead:
    "font-inter text-base md:text-lg text-body-text max-w-xl mx-auto leading-relaxed",

  // ---- hosting toggle ----
  toggleWrap: "flex flex-col items-center gap-3 mb-16 md:mb-20",

  toggleTrack:
    "relative inline-flex items-center rounded-full bg-sand p-1 gap-1",

  toggleThumb:
    "absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-ink " +
    "shadow-[var(--shadow-sm)] transition-transform duration-300 ease-out",

  toggleButton:
    "relative z-10 flex items-center gap-2 rounded-full px-5 py-2.5 " +
    "font-inter text-xs md:text-sm font-semibold transition-colors duration-300 whitespace-nowrap",

  toggleButtonActive: "text-cream",

  toggleButtonInactive: "text-ink hover:text-forest",

  toggleNote:
    "font-inter text-sm text-body-text max-w-md text-center leading-relaxed min-h-[2.5rem]",

  // ---- grid ----
  grid: "relative z-10 grid gap-8 md:grid-cols-3 items-start max-w-6xl mx-auto",

  card:
    "relative flex flex-col rounded-2xl bg-paper border border-sand p-8 " +
    "shadow-[var(--shadow-md)] card-lift h-full",

  cardHighlighted:
    "border-2 border-forest shadow-[var(--shadow-lg)] md:-translate-y-4",

  ribbon:
    "absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full " +
    "bg-neon px-4 py-1.5 font-inter text-[11px] font-semibold uppercase tracking-wide text-ink " +
    "shadow-[var(--shadow-sm)]",

  tierName: "font-poppins text-xl md:text-2xl font-extrabold text-ink mb-2",

  tierAudience: "font-inter text-sm text-body-text leading-relaxed min-h-[3.5rem]",

  metricsRow:
    "grid grid-cols-3 divide-x divide-sand border-y border-sand my-6 py-4",

  metricCell: "flex flex-col items-center text-center gap-1 px-1",

  metricIcon: "w-4 h-4 text-forest mb-1",

  metricValue: "font-poppins text-sm md:text-base font-bold text-ink",

  metricLabel: "font-inter text-[10px] text-body-text uppercase tracking-wide leading-tight",

  priceBlock: "mb-6",

  priceEyebrow:
    "font-inter text-[11px] font-semibold uppercase tracking-[0.14em] text-forest/80 mb-1",

  priceAmount: "font-poppins text-2xl md:text-3xl font-extrabold text-ink leading-tight",

  priceNote: "font-inter text-xs text-body-text mt-1",

  featureList: "flex flex-col gap-3 mb-8 flex-1",

  featureRow: "flex items-start gap-2.5",

  featureIcon: "w-4 h-4 mt-0.5 text-mint shrink-0",

  featureText: "font-inter text-[13px] md:text-sm text-body-text leading-relaxed",

  ctaPrimary:
    "inline-flex items-center justify-center gap-1.5 rounded-full bg-ink px-5 py-3 " +
    "font-inter text-sm font-semibold text-cream transition-colors duration-300 hover:bg-forest",

  ctaSecondary:
    "inline-flex items-center justify-center gap-1.5 rounded-full border border-ink px-5 py-3 " +
    "font-inter text-sm font-semibold text-ink transition-colors duration-300 " +
    "hover:bg-neon hover:border-neon",

  // ---- disclaimer ----
  disclaimerWrap: "relative z-10 max-w-3xl mx-auto mt-16 md:mt-20 pt-8 border-t border-sand text-center",

  disclaimerText: "font-inter text-xs text-body-text/80 leading-relaxed",
};