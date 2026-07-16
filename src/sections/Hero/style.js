export const styles = {
  heroSection:
    "relative w-full bg-cream overflow-hidden  lg:overflow-visible flex items-center " +
    "pt-24 pb-12 px-6 sm:px-10 lg:px-12 xl:px-16 " + // Reduced side padding to let content stretch further out
    "lg:h-screen lg:min-h-[650px] lg:max-h-auto", // Safe vertical constraints for 150% zoom responsiveness

  heroGrid:
    "w-full max-w-[1512px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between " + // Expanded container width to eliminate side gaps
    "gap-8 lg:gap-10 xl:gap-14", 

  copyCol:
    "w-full lg:w-[48%] xl:w-[46%] " + // Optimized split to give text breathing room
    "text-center lg:text-left flex flex-col justify-center gap-6 lg:gap-5 xl:gap-6",

  textSection: "flex flex-col justify-center items-center lg:items-start gap-3 lg:gap-3 xl:gap-4",

  sectionTag:
    " hidden md :inline-block px-3.5 py-1.5 bg-sand text-forest font-bold " +
    "text-[10px] md:text-xs uppercase tracking-wider rounded-full mb-1 w-fit",

  heroTitle:
    "text-2xl sm:text-3xl md:text-[2.25rem] lg:text-[2.1rem] xl:text-[2.6rem] 2xl:text-[3rem] " + 
    "font-extrabold text-center lg:text-left xl:text-left font-poppins mb-2 lg:mb-4 leading-[1.15] text-ink", // REMOVED text-justify to fix word gaps

  heroDescription:
    "text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-base text-body-text mb-4 lg:mb-5 font-normal text-center lg:text-left xl:text-left w-full", // REMOVED text-justify to keep readable alignment

  painList: "space-y-2 lg:space-y-1.5 mb-4 lg:mb-5 flex flex-col items-start",

  painItem:
    "flex items-center gap-3 text-ink font-semibold text-xs sm:text-sm lg:text-[11px] xl:text-sm",

  painIconBadge:
    "flex items-center justify-center w-5 h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 rounded-md " + 
    "bg-rose-50 border border-rose-200 text-rose-500 shrink-0",

  heroBtnGroup: "flex flex-wrap gap-3 justify-center lg:justify-start mt-2",
  heroBtnPremium: "bg-neon text-ink px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold shadow-[0_10px_20px_-5px_rgba(185,251,166,0.5)] hover:-translate-y-0.5 hover:shadow-[0_20px_30px_-10px_rgba(185,251,166,0.6)] active:translate-y-0 transition-all duration-300 text-xs sm:text-sm",
  heroBtnOutline: "border-2 border-sand text-ink bg-paper px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold hover:border-forest hover:bg-sand transition-all duration-200 text-xs sm:text-sm",

  // --- STYLING SPECIFICALLY TAILORED FOR 4:3 RATIO IMAGE ---
  mockupWrapper:
    "w-full lg:w-[50%] xl:w-[52%] " + 
    "flex items-center justify-center lg:self-center",

  mockupContainer:
    "relative w-full max-w-[320px] sm:max-w-[480px] md:max-w-[580px] lg:max-w-[620px] xl:max-w-[760px] " + // Scaled up container to let the 4:3 dashboard pop on desktop
    "flex items-center justify-center",

  mockupImg:
    "w-full h-auto aspect-[4/3] object-contain rounded-[1.25rem] " + // Forced clean 4:3 bounding rendering
    "max-h-[260px] sm:max-h-[360px] md:max-h-[400px] lg:max-h-[50vh] xl:max-h-[62vh] 2xl:max-h-[66vh] " + // Keeps mockup within view bounds during high browser zooms
    "shadow-lg transition-transform duration-300",

  mockupShadow:
  ''
    // "absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-6 bg-black/10 " +
    // "rounded-[100%] blur-xl z-0 pointer-events-none",
};