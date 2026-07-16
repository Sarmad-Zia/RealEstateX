export const styles = {
  // No forced background — sits directly on the page bg, like the other sections
  section: "relative overflow-hidden py-16 px-6 md:py-20",
  container: "relative z-10 max-w-5xl mx-auto",

  // ============ Header ============
  sectionHeader: "mb-8 max-w-xl mx-auto text-center",
  eyebrow:
    "inline-flex items-center gap-2 mb-3 rounded-full bg-forest/10 px-4 py-1.5 " +
    "font-inter text-xs font-semibold uppercase tracking-[0.14em] text-forest " +
    "dark:bg-mint/10 dark:text-mint",
  title: "mb-2 font-poppins text-2xl md:text-3xl font-bold tracking-tight text-ink",
  subtitle: "font-inter text-sm text-body-text",

  // ============ Table shell ============
  tableOuter:
    "rex-compare-scroll overflow-x-auto whitespace-nowrap custom-scrollbar " +
    "rounded-xl border border-sand bg-paper",
  table: "w-full border-collapse text-sm",

  // ============ Head row ============
  theadRow: "border-b border-sand bg-sand/30",
  thFeature:
    "sticky left-0 z-10 min-w-[240px] whitespace-normal bg-sand/30 px-4 py-3 " +
    "text-left font-poppins font-semibold text-body-text",
  thCompetitor:
    "min-w-[130px] px-4 py-3 text-center font-poppins font-semibold text-body-text",
  thHighlight:
    "min-w-[130px] bg-grad-premium px-4 py-3 text-center font-poppins font-bold text-mint",

  // ============ Body rows ============
  bodyRow: "border-b border-sand/60 last:border-b-0",
  bodyRowAlt: "bg-sand/10",
  tdFeature:
    "sticky left-0 z-10 min-w-[240px] whitespace-normal bg-inherit px-4 py-2.5 " +
    "text-left font-inter font-medium text-ink",
  tdCompetitor: "px-4 py-2.5 text-center",
  tdHighlight:
    "border-x border-forest/10 bg-forest/5 px-4 py-2.5 text-center font-semibold " +
    "dark:border-mint/10 dark:bg-mint/10 ",

  // ============ Icons — YES stays on-brand, NO keeps a neutral warning red ============
  iconYes: "inline-block h-5 w-5 text-forest dark:text-mint",
  iconNo: "inline-block h-5 w-5 text-rose-400",

  footnote: "mt-4 md:hidden text-center font-inter text-xs text-body-text/70",
};