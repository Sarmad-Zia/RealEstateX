export const styles = {
  // ============ Section shell ============
  section: "relative overflow-hidden py-24 px-6 md:py-32 dark:bg-forest-deep ",
  container: "relative z-10 max-w-4xl mx-auto",

  // ============ Header ============
  sectionHeader: "max-w-2xl mx-auto mb-12 text-center md:mb-14",
  eyebrow:
    "inline-flex items-center gap-2 mb-5 rounded-full bg-forest/10 px-4 py-1.5 font-inter text-xs font-bold uppercase tracking-[0.2em] text-forest dark:bg-mint/10 dark:text-mint",
  sectionTitle:
    "mb-4 font-poppins text-4xl font-extrabold tracking-tight text-ink md:text-5xl",
  sectionSubtitle:
    "font-inter text-base leading-relaxed text-body-text md:text-lg",

  // ============ Category tabs ============
  tabsWrapper: "mb-12 flex flex-wrap items-center justify-center gap-2.5 md:mb-14 md:gap-3",
  tabButton:
    "flex cursor-pointer items-center gap-2 rounded-full border px-5 py-2.5 font-inter text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
  tabButtonActive:
    "scale-[1.03] border-forest/20 bg-grad-premium text-mint shadow-lg",
  tabButtonInactive:
    "border-sand bg-paper text-body-text hover:-translate-y-0.5 hover:border-forest hover:text-forest",
  tabIcon: "shrink-0",

  // ============ FAQ grid & cards ============
  faqGrid: "flex flex-col gap-6 md:gap-8 ",
  faqCard:
    "group relative overflow-hidden rounded-2xl border border-sand bg-paper shadow-sm transition-all duration-300 hover:shadow-md dark:bg-mint/5",
  faqCardOpen: "border-forest/50 shadow-lg ring-1 ring-forest/10",

  faqHeader:
    "flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/50 focus-visible:ring-offset-2 focus-visible:ring-offset-paper md:px-7 md:py-6",
  faqQuestionRow: "flex min-w-0 items-center gap-4",
  faqNumber:
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-grad-icon font-poppins text-xs font-bold text-forest transition-all duration-300 dark:text-white",
  faqNumberOpen: "scale-105 bg-grad-premium text-cream dark:text-white ",
  faqQuestionText:
    "font-poppins text-base font-bold leading-snug text-ink md:text-[17px]",

  faqIcon:
    "flex h-8 w-8 shrink-0 rotate-0 items-center justify-center rounded-full bg-sand/60 text-forest transition-all duration-300 dark:bg-mint/10",
  faqIconOpen: "rotate-45 bg-forest text-cream",

  faqAnswerPanel: "grid transition-[grid-template-rows] duration-[420ms] ease-in-out",
  faqAnswerPanelOpen: "grid-rows-[1fr]",
  faqAnswerPanelClosed: "grid-rows-[0fr]",
  faqBody:
    "overflow-hidden pl-[52px] pr-8 pb-6 font-inter text-[15px] leading-relaxed text-body-text",

  // ============ Bottom CTA ============
  faqCta: "mt-14 flex flex-col items-center justify-center gap-4 text-center sm:flex-row",
  faqCtaText: "font-poppins text-lg font-semibold text-ink",
  faqCtaButton:
    "inline-flex items-center gap-2 rounded-full bg-neon px-7 py-3.5 font-inter text-sm font-bold text-ink shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/50 focus-visible:ring-offset-2 dark:text-forest-deep! ",

  // ============ Decorative glow blobs ============
  glowTop:
    "pointer-events-none absolute -top-32 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-mint/10 blur-[120px]",
  glowBottom:
    "pointer-events-none absolute -bottom-40 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-neon/10 blur-[120px]",
};