export const styles = {
  py5: "py-24 px-6",
  bgLight: "bg-sand",
  sectionHeader: "text-center mb-16",
  sectionTitle: "text-3xl md:text-4xl font-extrabold font-poppins text-ink tracking-tight",
  sectionDesc: "text-body-text mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed",

  featureBox: "bg-paper border border-sand rounded-[32px] shadow-lg flex flex-col lg:flex-row min-h-[600px] overflow-hidden",
  featureSidebar: "w-full lg:w-[350px] bg-sand border-b lg:border-b-0 lg:border-r border-sand py-10 overflow-x-auto lg:overflow-x-visible flex lg:flex-col shrink-0 custom-scrollbar",

  // Sidebar tab item states (used directly in index.jsx's conditional className)
  tabItemBase: "px-8 py-4 cursor-pointer font-semibold flex items-center gap-3 justify-between transition-all duration-200",
  tabItemActive: "bg-paper text-forest border-b-4 lg:border-b-0 lg:border-r-4 border-forest shadow-sm",
  tabItemInactive: "text-body-text hover:text-forest hover:bg-paper",

  featureContentArea: "p-8 lg:p-14 flex-grow flex items-center bg-paper",
  featureDisplayGrid: "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full",

  featureVisualMockup: "h-[350px] bg-grad-icon rounded-2xl flex flex-col items-center justify-center gap-4 text-forest border border-sand shadow-inner text-center p-6",
  featureVisualIcon: "w-16 h-16 text-forest dark:text-ink",
  featureVisualLabel: "font-extrabold text-sm uppercase tracking-wider text-forest/70 dark:text-ink/70 ",

  featureTitle: "text-2xl lg:text-3xl font-bold text-gradient mb-4 font-poppins",
  featureBulletList: "space-y-3 mb-6",
  featureBulletItem: "flex items-center font-medium text-body-text text-sm md:text-base",
  featureCheckmark: "text-forest mr-3 text-lg shrink-0",
  featureTextDescription: "text-body-text text-sm md:text-base leading-relaxed mb-6",
  featureKeywordTag: "inline-block bg-forest/10 text-forest text-xs font-bold px-3.5 py-1.5 rounded-md uppercase tracking-wider",
  
};