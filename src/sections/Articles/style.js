export const styles = {
  section:
    "relative overflow-hidden bg-cream py-24 md:py-32 px-6 md:px-12",

  // faint oversized watermark type sitting behind the heading — quiet, not loud
  watermark:
    "pointer-events-none select-none absolute -top-6 left-0 w-full text-center " +
    "font-poppins font-extrabold text-[18vw] leading-none text-forest/5 whitespace-nowrap",

  header: "relative z-10 max-w-3xl mb-14 md:mb-20",

  eyebrowRow: "flex items-center gap-3 mb-4",

  eyebrowLine: "h-px w-8 bg-forest/40",

  eyebrow:
    "font-inter text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-forest",

  heading:
    "font-poppins text-4xl md:text-5xl lg:text-6xl font-extrabold text-ink leading-[1.05] mb-5",

  subhead:
    "font-inter text-base md:text-lg text-body-text max-w-xl leading-relaxed",

  // ---- carousel shell ----
  carouselWrap: "relative z-10",

  track:
    "flex gap-6 md:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory " +
    "pb-6 -mx-6 px-6 md:-mx-12 md:px-12 cursor-grab active:cursor-grabbing " +
    "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none",

  // ---- card ----
  card:
    "group shrink-0 snap-start w-[280px] sm:w-[320px] md:w-[340px] rounded-2xl " +
    "bg-paper border border-sand shadow-[var(--shadow-md)] flex flex-col overflow-hidden " +
    "card-lift cursor-pointer",

  imageWrap: "relative h-40 md:h-44 w-full overflow-hidden shrink-0",

  image: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",

  // rubber-stamp category badge, slightly rotated — the section's signature detail
  stamp:
    "absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-paper/95 " +
    "border border-dashed border-forest/50 px-3 py-1 -rotate-3 shadow-sm " +
    "backdrop-blur-sm",

  stampIcon: "w-3.5 h-3.5 text-forest",

  stampText:
    "font-inter text-[10px] font-semibold tracking-[0.14em] uppercase text-forest",

  cardBody: "flex flex-col flex-1 p-5 gap-2.5",

  refCode: "font-inter text-[11px] tracking-widest text-forest/70 uppercase",

  cardTitle:
    "font-poppins text-base md:text-lg font-bold text-ink leading-snug line-clamp-3",

  cardDescription:
    "font-inter text-sm text-body-text leading-relaxed line-clamp-3 flex-1",

  cardFooter: "flex items-center justify-between pt-2 mt-auto",

  ctaButton:
    "inline-flex items-center gap-1.5 rounded-full border border-ink px-4 py-2 " +
    "font-inter text-xs font-semibold text-ink transition-colors duration-300 " +
    "hover:bg-neon hover:border-neon",

  detailsButton:
    "inline-flex items-center gap-1 font-inter text-[11px] font-semibold text-forest " +
    "underline decoration-dotted underline-offset-4 hover:text-ink transition-colors",

  // ---- modal ----
  overlay:
    "fixed inset-0 z-50 flex items-end sm:items-center justify-center " +
    "bg-ink/50 backdrop-blur-sm p-0 sm:p-6 animate fade-in",

  modalPanel:
    "relative w-full sm:max-w-xl max-h-[88vh] overflow-y-auto bg-paper " +
    "rounded-t-3xl sm:rounded-3xl border border-sand shadow-[var(--shadow-lg)] " +
    "animate scale-in",

  modalImageWrap: "relative h-48 md:h-56 w-full overflow-hidden shrink-0",

  modalImage: "w-full h-full object-cover",

  modalClose:
    "absolute top-4 right-4 w-9 h-9 rounded-full bg-paper/90 border border-sand " +
    "flex items-center justify-center text-ink hover:bg-neon hover:border-neon " +
    "transition-colors backdrop-blur-sm",

  modalBody: "p-6 md:p-8 flex flex-col gap-5",

  modalRefRow: "flex items-center justify-between",

  modalTitle: "font-poppins text-xl md:text-2xl font-bold text-ink leading-snug",

  modalDescription: "font-inter text-sm md:text-base text-body-text leading-relaxed",

  modalSectionLabel:
    "font-inter text-[11px] font-semibold tracking-[0.14em] uppercase text-forest/80",

  bulletList: "flex flex-col gap-3",

  bulletRow: "flex items-start gap-2.5",

  bulletIcon: "w-4 h-4 mt-0.5 text-mint shrink-0",

  bulletText: "font-inter text-[13px] md:text-sm text-body-text leading-relaxed",

  keywordRow: "flex flex-wrap gap-1.5",

  keywordChip:
    "font-inter text-[10px] text-forest bg-sand/60 rounded-full px-2.5 py-1",

  modalFooter: "flex items-center justify-between gap-3 pt-2 border-t border-sand",

  modalCta:
    "inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 " +
    "font-inter text-xs md:text-sm font-semibold text-cream transition-colors duration-300 " +
    "hover:bg-forest",

  modalSecondary:
    "font-inter text-xs md:text-sm font-semibold text-body-text hover:text-ink transition-colors",

  // ---- controls ----
  controlsRow: "relative z-10 flex items-center justify-between mt-10",

  progressTrack: "h-[3px] w-40 md:w-56 rounded-full bg-sand overflow-hidden",

  progressFill: "h-full rounded-full bg-mint transition-[width] duration-200 ease-out",

  arrowGroup: "flex items-center gap-3",

  arrowButton:
    "w-10 h-10 rounded-full border border-ink flex items-center justify-center text-ink " +
    "transition-colors duration-300 hover:bg-ink hover:text-cream " +
    "disabled:opacity-30 disabled:pointer-events-none",
};

// inline style used for the faint ledger-ruled-paper texture behind the modal's
// bullet list — reinforces the "opening a case file" motif. Kept out of Tailwind
// because repeating-linear-gradient with commas parses unreliably as an
// arbitrary utility value.
export const ledgerLinesStyle = {
  backgroundImage:
    "repeating-linear-gradient(to bottom, transparent, transparent 25px, var(--color-sand) 26px)",
  backgroundPosition: "0 8px",
};