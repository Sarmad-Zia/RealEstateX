export const styles = {
  // Hero Area
  heroSection: "relative h-auto min-h-[100vh] pt-25 lg:pt-10 max-lg:pb-10 px-6 bg-cream",
  heroGrid: "w-full p-5 lg:p-20 pt-0 pb-0 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center",
  sectionTag: "inline-block px-4 py-1.5 bg-sand text-forest font-bold text-xs uppercase tracking-wider rounded-full mb-6",
  heroTitle: "text-4xl md:text-5xl lg:text-6xl font-extrabold font-poppins mb-4 leading-tight text-ink",
  heroDescription: "text-lg text-body-text mb-8 font-normal leading-relaxed",
  painList: "space-y-4 mb-10",
  painItem: "flex items-center text-body-text font-medium text-base",
  painIcon: "text-rose-500 mr-4 text-xl shrink-0",
  heroBtnGroup: "flex flex-wrap gap-3",
  heroBtnPremium: "bg-neon text-ink px-9 py-4 rounded-xl font-semibold shadow-[0_10px_20px_-5px_rgba(185,251,166,0.5)] hover:-translate-y-0.5 hover:shadow-[0_20px_30px_-10px_rgba(185,251,166,0.6)] active:translate-y-0 transition-all duration-300 text-base",
  heroBtnOutline: "border-2 border-sand text-ink bg-paper px-9 py-4 rounded-xl font-semibold hover:border-forest hover:bg-sand transition-all duration-200 text-base",

  // Hero Mockup Graphics
  mockupWrapper: "relative justify-self-center lg:justify-self-end w-full lg:max-w-[800px] mt-12 lg:mt-0 max-lg:mb-30",
  mockupContainer: "relative w-full",
  mockupImg: "w-full h-auto object-cover rounded-[20px]",
  floatBadge: "absolute bg-paper px-5 py-3 rounded-2xl shadow-md border border-sand font-bold text-xs text-forest animate-floating select-none whitespace-nowrap z-10",

  // Sections Common
  py5: "py-24 px-6",
  bgLight: "bg-sand",
  bgWhite: "bg-paper",
  sectionHeader: "text-center mb-16",
  sectionTitle: "text-3xl md:text-4xl font-extrabold font-poppins text-ink tracking-tight",
  sectionDesc: "text-body-text mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed",

  // AI Grid Components
  agentsGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
  aiCard: "bg-paper border border-sand rounded-3xl p-10 shadow-sm relative overflow-hidden group hover:-translate-y-2.5 hover:shadow-lg transition-all duration-400 before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-grad-premium before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300",
  aiIconBox: "w-[70px] h-[70px] bg-grad-icon text-forest flex items-center justify-center rounded-2xl text-2xl mb-8 transition-transform duration-300 group-hover:scale-105",
  aiCardTitle: "text-xl font-bold font-poppins text-ink mb-2",
  aiCardDesc: "text-sm text-body-text leading-relaxed mb-6",
  aiCommandBox: "bg-sand border-l-4 border-mint p-4 rounded-r-xl font-mono text-xs text-ink font-semibold break-words",

  // Interstitial Banner Strip
  interstitialBanner: "py-16 px-6 bg-grad-premium text-center text-white relative overflow-hidden",
  bannerTitle: "text-2xl md:text-3xl font-bold font-poppins mb-3 max-w-4xl mx-auto leading-snug",
  bannerDesc: "opacity-75 text-base md:text-lg mb-8 max-w-2xl mx-auto",
  bannerBtn: "bg-neon text-ink font-bold rounded-full px-9 py-4 hover:scale-105 active:scale-95 transition-all shadow-md text-sm tracking-wide",

  // Feature OS Engine
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

  // Enterprise Grid Matrix Comparison Table
  tableResponsive: "w-full overflow-x-auto rounded-3xl shadow-md border border-sand",
  table: "w-full border-collapse bg-paper text-left text-sm text-ink",
  th: "bg-ink text-white font-bold p-6 text-center text-base font-poppins tracking-wide border-none",
  tdLabel: "p-5 font-bold text-body-text border-b border-sand pl-8",
  tdValueSuccess: "p-5 text-center text-forest font-bold border-b border-sand",
  tdValueMuted: "p-5 text-center text-slate-400 font-medium opacity-60 border-b border-sand",

  // Infrastructure Deployment Framework
  infraGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8",
  infraBox: "bg-paper p-8 rounded-2xl border border-sand text-center transition-all duration-300 hover:scale-105 hover:border-forest",
  infraTitle: "font-bold text-ink mt-3 text-base",
  specsCard: "bg-paper p-10 rounded-[40px] shadow-lg border-l-8 border-forest h-full flex flex-col justify-center",
  specsTitle: "text-xl font-bold mb-6 font-poppins text-ink",
  specsList: "space-y-4",
  specsItem: "flex items-center text-body-text font-medium text-base",
  specsCheck: "text-mint mr-4 text-xl shrink-0",

  // Interactive Accordion FAQs
  faqWrapper: "max-w-[850px] mx-auto space-y-4",
  faqCard: "border border-sand rounded-2xl bg-paper transition-all duration-300 overflow-hidden",
  faqCardOpen: "border-forest shadow-md",
  faqHeader: "w-full px-8 py-6 bg-transparent flex justify-between items-center font-bold text-lg text-ink text-left cursor-pointer transition-colors hover:text-forest",
  faqIcon: "text-forest text-2xl transition-transform duration-300",
  faqBody: "transition-all duration-300 text-body-text text-base leading-relaxed pl-8 pr-8 pb-6",

  // Institutional Footer System
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
  footerBottomRow: "max-w-7xl mx-auto text-center text-xs text-slate-500 font-medium"
};