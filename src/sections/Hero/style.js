export const styles = {
  heroSection:
    "relative w-full bg-cream overflow-hidden lg:overflow-visible flex items-center " +
    "pt-24 pb-12 px-6 sm:px-10 lg:px-12 xl:px-16 " + 
    "lg:min-h-screen lg:py-20", // Changed h-screen to min-h-screen with natural padding to prevent bottom clipping on high zoom

  heroGrid:
    "w-full max-w-[1512px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between " + 
    "gap-8 lg:gap-8 xl:gap-12", // Slightly tightened gap to save vertical space

  copyCol:
    "w-full lg:w-[48%] xl:w-[46%] " + 
    "text-center lg:text-left flex flex-col justify-center gap-5 lg:gap-4 xl:gap-5", // Reduced gaps to give content breathing room vertically

  textSection: "flex flex-col justify-center items-center lg:items-start gap-2.5 lg:gap-2.5 xl:gap-3.5",

  sectionTag:
    "hidden md:inline-block px-3 py-1 bg-sand text-forest font-bold " + // Reduced padding slightly
    "text-[10px] md:text-xs uppercase tracking-wider rounded-full mb-0.5 w-fit",

  heroTitle:
    "text-2xl sm:text-3xl md:text-[2.25rem] lg:text-[1.95rem] xl:text-[2.4rem] 2xl:text-[2.85rem] " + // Scaled down slightly on desktop to fit short viewports
    "font-extrabold text-center lg:text-left xl:text-left font-poppins mb-2 lg:mb-3 leading-[1.15] text-ink", 

  heroDescription:
    "generalDesc mb-3 lg:mb-4 font-normal text-center lg:text-left xl:text-left w-full text-sm lg:text-base", // Reduced bottom margin

  painList: "space-y-1.5 lg:space-y-1 mb-3 lg:mb-4 flex flex-col items-start", // Compacted list item spacing

  painItem:
    "flex items-center gap-2.5 text-ink font-semibold text-xs sm:text-sm lg:text-[13px] xl:text-[15px]",

  painIconBadge:
    "flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-md " + 
    "bg-rose-50 border border-rose-200 text-rose-500 shrink-0",

  heroBtnGroup: "flex flex-wrap gap-3 justify-center lg:justify-start mt-1", // Reduced top margin
  
  heroBtnPremium: "bg-neon text-ink px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-semibold shadow-[0_10px_20px_-5px_rgba(185,251,166,0.5)] hover:-translate-y-0.5 hover:shadow-[0_20px_30px_-10px_rgba(185,251,166,0.6)] active:translate-y-0 transition-all duration-300 text-xs sm:text-sm",
  heroBtnOutline: "border-2 border-sand text-ink bg-paper px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-semibold hover:border-forest hover:bg-sand transition-all duration-200 text-xs sm:text-sm",

  // --- STYLING SPECIFICALLY TAILORED FOR 4:3 RATIO IMAGE ---
  mockupWrapper:
    "w-full lg:w-[50%] xl:w-[52%] " + 
    "flex items-center justify-center lg:self-center",

  mockupContainer:
    "relative w-full max-w-[320px] sm:max-w-[480px] md:max-w-[540px] lg:max-w-[580px] xl:max-w-[720px] " + // Scaled down max-width slightly to prevent drawing too much height
    "flex items-center justify-center",

  mockupImg:
    "w-full h-auto aspect-[4/3] object-contain rounded-[1.25rem] " + 
    "max-h-[240px] sm:max-h-[320px] md:max-h-[360px] lg:max-h-[46vh] xl:max-h-[56vh] 2xl:max-h-[60vh] " + // Slightly tightened viewport-relative heights
    "shadow-lg transition-transform duration-300",

  mockupShadow: ''
};