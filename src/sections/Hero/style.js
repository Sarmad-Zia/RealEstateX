export const styles = {
  // Hero Area — mobile-first, natural flow, image only appears at md+
  heroSection:
    "relative w-full pt-28 pb-14 px-5 sm:px-6 " +
    "md:pt-32 lg:pt-[50vh] xl:pt-24 lg:pb-0 lg:h-screen lg:max-h-screen " +
    "bg-cream overflow-hidden flex items-center",

  heroGrid:
    "w-full mx-auto flex flex-col-reverse lg:flex-row " +
    "gap-2 md:gap-5 lg:gap-2 ",

  copyCol:
    "w-full lg:w-[38%] text-center lg:text-left flex flex-col justify-center md:gap-10",

  textSection: "flex flex-col justify-center items-center lg:items-start lg:gap-6",

sectionTag:
    "inline-block px-4 py-1.5 bg-sand text-forest font-bold " +
    "text-xs lg:text-sm uppercase tracking-wider rounded-full mb-3 w-fit",

  heroTitle:
    "text-2xl sm:text-3xl md:text-4xl lg:text-[40px] " +
    "font-extrabold justify-center font-poppins mb-4 leading-[1.2] text-ink",

  heroDescription:
    "text-sm sm:text-base text-body-text mb-6 font-normal align-left " +
    "leading-relaxed max-w-md mx-auto lg:max-w-lg lg:mx-0",

  painList: "space-y-3 mb-6 flex flex-col items-start",

  painItem:
    "flex  items-center  gap-3 text-ink font-semibold text-sm sm:text-base",

  painIconBadge:
    "flex items-center justify-center w-6 h-6 rounded-md " +
    "bg-rose-50 border border-rose-200 text-rose-500 shrink-0",

  heroBtnGroup: "flex flex-wrap gap-3 justify-center lg:justify-start mt-2",

  heroBtnPremium:
    "bg-neon text-ink px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold " +
    "shadow-[0_10px_20px_-5px_rgba(185,251,166,0.5)] " +
    "hover:-translate-y-0.5 hover:shadow-[0_20px_30px_-10px_rgba(185,251,166,0.6)] " +
    "active:translate-y-0 transition-all duration-300 text-sm",

  heroBtnOutline:
    "border-2 border-sand text-ink bg-paper px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl " +
    "font-semibold hover:border-forest hover:bg-sand transition-all duration-200 text-sm",

  // // Mockup — hidden on phones, doubled in size, takes majority width at lg+
  // mockupWrapper:
  //   "lg:flex w-full lg:w-[62%] lg:items-center lg:justify-center bg-red-900",

  // mockupContainer: "relative w-full lg:flex lg:items-center lg:justify-center",

  // mockupImg:
  //   "w-full h-full lg:h-auto max-w-[1100px] lg:max-w-none lg:max-h-[88vh] object- lg:object-cover rounded-[20px]",

  //testing the changes to the git

    mockupWrapper:
    "flex w-full h-[260px] sm:h-[340px] md:h-[420px] " +
    "lg:h-auto lg:w-[62%] lg:items-center lg:justify-center",

  mockupContainer:
    "relative w-full h-full flex items-center justify-center " +
    "lg:h-auto",

  mockupImg:
    "w-full h-full object-cover rounded-[20px] " +
    "lg:w-full lg:h-auto lg:max-w-none lg:max-h-[88vh] lg:object-cover",

  mockupShadow:
    "absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-8 bg-black/10 " +
    "rounded-[100%] blur-xl z-0 pointer-events-none",

  floatBadge:
    "absolute bg-paper px-5 py-3 rounded-2xl shadow-md border border-sand " +
    "font-bold text-xs text-forest animate-floating select-none whitespace-nowrap z-10",

  // Rest of your styles remain untouched...
  py5: "py-24 px-6",
  bgLight: "bg-sand",
  bgWhite: "bg-paper",
  sectionHeader: "text-center mb-16",
  sectionTitle: "text-3xl md:text-4xl font-extrabold font-poppins text-ink tracking-tight",
  sectionDesc: "text-body-text mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed",
  agentsGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
  aiCard: "bg-paper border border-sand rounded-3xl p-10 shadow-sm relative overflow-hidden group hover:-translate-y-2.5 hover:shadow-lg transition-all duration-400 before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-grad-premium before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300",
  aiIconBox: "w-[70px] h-[70px] bg-grad-icon text-forest flex items-center justify-center rounded-2xl text-2xl mb-8 transition-transform duration-300 group-hover:scale-105",
  aiCardTitle: "text-xl font-bold font-poppins text-ink mb-2",
  aiCardDesc: "text-sm text-body-text leading-relaxed mb-6",
  aiCommandBox: "bg-sand border-l-4 border-mint p-4 rounded-r-xl font-mono text-xs text-ink font-semibold break-words",
  interstitialBanner: "py-16 px-6 bg-grad-premium text-center text-white relative overflow-hidden",
  bannerTitle: "text-2xl md:text-3xl font-bold font-poppins mb-3 max-w-4xl mx-auto leading-snug",
  bannerDesc: "opacity-75 text-base md:text-lg mb-8 max-w-2xl mx-auto",
  bannerBtn: "bg-neon text-ink font-bold rounded-full px-9 py-4 hover:scale-105 active:scale-95 transition-all shadow-md text-sm tracking-wide",
  featureBox: "bg-paper border border-sand rounded-[32px] shadow-lg flex flex-col lg:flex-row min-h-[600px] overflow-hidden",
  featureSidebar: "w-full lg:w-[350px] bg-sand border-b lg:border-b-0 lg:border-r border-sand py-10 overflow-x-auto lg:overflow-x-visible flex lg:flex-col shrink-0 custom-scrollbar",
  featureContentArea: "p-8 lg:p-14 flex-grow flex items-center bg-paper",
  featureDisplayGrid: "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full",
  featureVisualMockup: "h-[350px] bg-gradient-to-br from-sand to-sand/40 rounded-2xl flex items-center justify-center font-extrabold text-forest/50 border border-sand shadow-inner text-center p-6 text-sm uppercase tracking-wider",
  featureTitle: "text-2xl lg:text-3xl font-bold text-gradient mb-4 font-poppins",
  featureBulletList: "space-y-3 mb-6",
  featureBulletItem: "flex items-center font-medium text-body-text text-sm md:text-base",
  featureCheckmark: "text-forest mr-3 text-lg shrink-0",
  featureTextDescription: "text-body-text text-sm md:text-base leading-relaxed mb-6",
  featureKeywordTag: "inline-block bg-forest/10 text-forest text-xs font-bold px-3.5 py-1.5 rounded-md uppercase tracking-wider",
  tableResponsive: "w-full overflow-x-auto rounded-3xl shadow-md border border-sand",
  table: "w-full border-collapse bg-paper text-left text-sm text-ink",
  th: "bg-ink text-white font-bold p-6 text-center text-base font-poppins tracking-wide border-none",
  tdLabel: "p-5 font-bold text-body-text border-b border-sand pl-8",
  tdValueSuccess: "p-5 text-center text-forest font-bold border-b border-sand",
  tdValueMuted: "p-5 text-center text-slate-400 font-medium opacity-60 border-b border-sand",
  infraGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8",
  infraBox: "bg-paper p-8 rounded-2xl border border-sand text-center transition-all duration-300 hover:scale-105 hover:border-forest",
  infraTitle: "font-bold text-ink mt-3 text-base",
  specsCard: "bg-paper p-10 rounded-[40px] shadow-lg border-l-8 border-forest h-full flex flex-col justify-center",
  specsTitle: "text-xl font-bold mb-6 font-poppins text-ink",
  specsList: "space-y-4",
  specsItem: "flex items-center text-body-text font-medium text-base",
  specsCheck: "text-mint mr-4 text-xl shrink-0",
  faqWrapper: "max-w-[850px] mx-auto space-y-4",
  faqCard: "border border-sand rounded-2xl bg-paper transition-all duration-300 overflow-hidden",
  faqCardOpen: "border-forest shadow-md",
  faqHeader: "w-full px-8 py-6 bg-transparent flex justify-between items-center font-bold text-lg text-ink text-left cursor-pointer transition-colors hover:text-forest",
  faqIcon: "text-forest text-2xl transition-transform duration-300",
  faqBody: "transition-all duration-300 text-body-text text-base leading-relaxed pl-8 pr-8 pb-6",
  footer: "bg-ink text-slate-400 pt-24 pb-8 px-6",
  footerGrid: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12",
  footerColBrand: "lg:col-span-5",
  footerColLinks: "lg:col-span-3 lg:ml-auto",
  footerColContact: "lg:col-span-4",
  footerBrand: "text-white text-3xl font-bold font-poppins mb-4",
  footerBrandDesc: "text-sm leading-relaxed mt-4 text-slate-400 max-w-sm",
  footerSectionHeading: "text-white font-bold mb-6 uppercase tracking-wider text-xs",
  footerList: "space-y-3 text-sm",
  footerLink: "hover:text-white transition-colors duration-200 text-slate-400 text-decoration-none",
  footerContactItem: "flex items-center gap-3 text-sm mb-3 text-slate-400",
  footerIcon: "text-neon text-base",
  footerDivider: "max-w-7xl mx-auto my-12 border-slate-800",
  footerBottomRow: "max-w-7xl mx-auto text-center text-xs text-slate-500 font-medium",

 decorIconWrap: "relative w-full flex justify-center lg:justify-start mb-2",
  decorIconSparkle:
    "absolute -top-2 left-2 lg:left-0 text-mint w-8 h-8 md:w-9 md:h-9 watermark-wave", 

};