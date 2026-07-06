export const styles = {
  // Global View Layout
  container: "font-sans text-navy-dark bg-white min-h-screen selection:bg-azure-primary selection:text-white antialiased",
  
  // // Navigation Bar
  // navbar: "sticky top-0 bg-white border-b border-periwinkle-soft/60 z-50 py-3.5 shadow-sm",
  // navWrapper: "max-w-7xl mx-auto px-6 flex justify-between items-center",
  // logo: "text-2xl font-extrabold font-poppins text-indigo-deep",
  // logoAccent: "text-azure-primary",
  // navLinksContainer: "hidden md:flex items-center gap-8 font-semibold",
  // navLink: "text-slate-text hover:text-azure-primary transition-colors duration-200",
  // navBtnOutline: "border-2 border-periwinkle-soft text-indigo-deep px-6 py-2.5 rounded-lg hover:border-azure-primary hover:bg-periwinkle-soft transition-all duration-200 text-sm font-semibold",
  // navBtnPremium: "bg-grad-premium text-white px-6 py-2.5 rounded-lg shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm font-semibold",

  // // Hero Presentation Section
  // heroSection: "relative pt-32 pb-24 px-6 bg-[radial-gradient(circle_at_90%_10%,rgba(56,189,248,0.08),transparent),radial-gradient(circle_at_10%_90%,rgba(37,99,235,0.05),transparent)]",
  // heroGrid: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
  // heroBadge: "inline-block px-4 py-1.5 bg-periwinkle-soft text-azure-primary font-bold text-xs uppercase tracking-wider rounded-full mb-6",
  // heroTitle: "text-4xl md:text-5xl lg:text-6xl font-extrabold font-poppins mb-6 leading-tight text-indigo-deep",
  // heroDescription: "text-lg md:text-xl text-slate-text mb-8 font-normal leading-relaxed",
  // heroPainList: "space-y-4 mb-10",
  // heroPainItem: "flex items-center text-slate-text font-medium text-base",
  // heroPainIcon: "text-rose-500 mr-4 text-xl shrink-0",
  // heroBtnGroup: "flex flex-wrap gap-4",
  // heroBtnPremium: "bg-grad-premium text-white px-8 py-4 rounded-xl font-semibold shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 hover:shadow-[0_20px_30px_-10px_rgba(37,99,235,0.5)] active:translate-y-0 transition-all duration-300 text-base",
  // heroBtnOutline: "border-2 border-periwinkle-soft text-indigo-deep bg-white px-8 py-4 rounded-xl font-semibold hover:border-azure-primary hover:bg-periwinkle-soft transition-all duration-200 text-base",
  
  // // Hero Mockup Canvas
  // mockupWrapper: "relative justify-self-center lg:justify-self-end w-full max-w-[550px] mt-10 lg:mt-0",
  // mockupContainer: "bg-white rounded-[30px] p-4 shadow-lg border border-black/5 relative",
  // floatBadge: "absolute bg-white px-5 py-2.5 rounded-2xl shadow-md border border-periwinkle-soft font-bold text-xs text-azure-primary animate-floating select-none whitespace-nowrap z-10",
  // mockupImg: "w-full h-auto object-cover rounded-[20px] bg-slate-50 border border-slate-100",

  // // Core Section Headers
  // agentsSection: "py-24 px-6 bg-white",
  // agentsWrapper: "max-w-7xl mx-auto",
  // sectionHeader: "text-center mb-16",
  // sectionBadge: "inline-block px-4 py-1.5 bg-periwinkle-soft text-azure-primary font-bold text-xs uppercase tracking-wider rounded-full mb-4",
  // sectionTitle: "text-3xl md:text-4xl font-extrabold font-poppins text-indigo-deep tracking-tight",
  // sectionDesc: "text-slate-text mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed",
  
  // // AI Workforce Architecture Grid
  // agentsGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
  // aiCard: "bg-white border border-slate-100 rounded-3xl p-8 shadow-sm relative overflow-hidden group hover:-translate-y-2.5 hover:shadow-lg transition-all duration-400 before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-grad-premium before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300",
  // aiIconBox: "w-16 h-16 bg-grad-icon text-azure-primary flex items-center justify-center rounded-2xl text-2xl mb-6 transition-transform duration-300 group-hover:scale-105",
  // aiCardTitle: "text-xl font-bold font-poppins text-indigo-deep mb-2",
  // aiCardDesc: "text-sm text-slate-text leading-relaxed mb-6",
  // aiCommandBox: "bg-slate-50 border-l-4 border-sky-accent p-3.5 rounded-r-xl font-mono text-xs text-sky-700 font-semibold break-words",

  // // Operational Interstitial Banner Strip
  // interstitialBanner: "py-16 px-6 bg-grad-premium text-center text-white relative overflow-hidden",
  // bannerTitle: "text-2xl md:text-3xl font-bold font-poppins mb-3 max-w-4xl mx-auto leading-snug",
  // bannerDesc: "opacity-85 text-base md:text-lg mb-8 max-w-2xl mx-auto",
  // bannerBtn: "bg-white text-azure-primary font-bold rounded-full px-8 py-3.5 hover:scale-105 active:scale-95 transition-all shadow-md text-sm tracking-wide",

  // // Interactive System Engine Operating System Zone
  // featuresSection: "py-24 px-6 bg-slate-50",
  // featureBox: "bg-white border border-slate-200 rounded-[32px] shadow-lg flex flex-col lg:flex-row min-h-[600px] overflow-hidden",
  // featureSidebar: "w-full lg:w-[350px] bg-slate-50/80 border-b lg:border-b-0 lg:border-r border-slate-200 py-8 overflow-x-auto lg:overflow-x-visible flex lg:flex-col shrink-0 custom-scrollbar",
  // featureContentArea: "p-8 lg:p-14 flex-grow flex items-center bg-white",
  // featureDisplayGrid: "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full",
  // featureVisualMockup: "h-72 bg-gradient-to-br from-slate-50 to-periwinkle-soft/30 rounded-2xl flex items-center justify-center font-extrabold text-azure-primary/40 border border-slate-100 shadow-inner text-center p-6 text-sm uppercase tracking-wider",
  // featureTitle: "text-2xl lg:text-3xl font-bold text-gradient mb-4 font-poppins",
  // featureBulletList: "space-y-3 mb-6",
  // featureBulletItem: "flex items-center font-medium text-slate-text text-sm md:text-base",
  // featureCheckmark: "text-azure-primary mr-3 text-lg shrink-0",
  // featureTextDescription: "text-slate-text text-sm md:text-base leading-relaxed mb-6",
  // featureKeywordTag: "inline-block bg-azure-primary/10 text-azure-primary text-xs font-bold px-3.5 py-1.5 rounded-md uppercase tracking-wider",

  // // Institutional Footer Architecture
  // footer: "bg-[#020617] text-slate-400 py-20 px-6 border-t border-slate-900",
  // footerGrid: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12",
  // footerBrand: "text-white text-2xl font-bold font-poppins mb-4",
  // footerBrandDesc: "text-sm leading-relaxed mt-4 text-slate-400 max-w-sm",
  // footerSectionHeading: "text-white font-bold mb-4 uppercase tracking-wider text-xs",
  // footerList: "space-y-2.5 text-sm",
  // footerLink: "hover:text-white transition-colors duration-200 text-slate-400",
  // footerContactItem: "flex items-center gap-2.5 text-sm mb-2.5",
  // footerDivider: "max-w-7xl mx-auto my-10 border-slate-900",
  // footerBottomRow: "max-w-7xl mx-auto text-center text-xs text-slate-500 font-medium"
};