export const styles = {
  py5: "py-24 px-6",
  bgLight: "bg-sand",
  sectionHeader: "text-center mb-16",
  sectionTitle: "font-extrabold font-poppins text-ink tracking-tight",
  sectionDesc: "text-body-text mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed",

  featureBox:
    "bg-paper border border-sand rounded-[32px] shadow-md shadow-mint/50 flex flex-col lg:flex-row overflow-hidden",

  // Sidebar
  featureSidebar:
    "w-full lg:w-[340px] bg-sand/50 p-3 lg:p-4 flex lg:flex-col gap-2.5 " +
    "overflow-x-auto lg:overflow-visible shrink-0 custom-scrollbar",

  tabItemBase:
    "group flex items-center gap-3.5 px-4 py-3.5 rounded-2xl shrink-0 lg:shrink " +
    "cursor-pointer transition-all duration-300 ease-out border",
  tabItemActive:
    "bg-forest border-forest shadow-[0_10px_25px_-8px_rgba(17,89,70,0.5)] " +
    "translate-x-0 lg:translate-x-1",
  tabItemInactive:
    "bg-paper border-sand hover:border-forest/30 hover:bg-paper " +
    "hover:shadow-md hover:-translate-y-0.5",

  iconBadgeBase:
    "flex items-center justify-center w-10 h-10 rounded-xl shrink-0 transition-all duration-300",
  iconBadgeActive: "bg-white/15 text-neon",
  iconBadgeInactive: "bg-sand text-forest group-hover:bg-mint/20 group-hover:text-forest",

  tabLabelBase: "text-sm md:text-[15px] font-semibold leading-snug transition-colors duration-300",
  tabLabelActive: "text-white",
  tabLabelInactive: "text-body-text group-hover:text-ink",

  // Right side: the WHOLE panel IS the window now — no padded stage around it
  featureContentArea:
    "flex-grow flex flex-col bg-gradient-to-br from-sand/40 to-cream relative",

  // Window fills the entire panel width, chrome bar spans full top edge
  featureWindowCard: "relative flex flex-col flex-grow group",

  featureWindowChrome:
    "flex items-center gap-2 px-5 py-3.5 bg-paper border-b border-sand shrink-0",
  chromeDotRed: "w-2.5 h-2.5 rounded-full bg-rose-400/70",
  chromeDotAmber: "w-2.5 h-2.5 rounded-full bg-amber-400/70",
  chromeDotGreen: "w-2.5 h-2.5 rounded-full bg-mint",
  featureWindowUrlBar:
    "ml-3 flex-grow max-w-[240px] h-5.5 rounded-md bg-sand/60 border border-sand " +
    "text-[11px] text-body-text/60 flex items-center px-2.5 font-medium truncate",

  // Image sits on a neutral surface, contained (not cropped), fills available height
  featureImageClip:
    "flex-grow flex items-center justify-center bg-paper min-h-[280px] md:min-h-[380px]",
  featureImage:
    "w-full h-full object-contain rounded-lg " +
    "transition-transform duration-500 ease-out group-hover:scale-[0.98]",

  featureTextWrap: "px-6 md:px-8 py-6 md:py-7 bg-paper border-t border-sand",
  featureTitle: "text-2xl lg:text-[28px] font-bold font-poppins text-ink mb-3",
  featureUnderline:
    "block w-14 h-[3px] rounded-full bg-gradient-to-r from-forest to-mint mb-4",
  featureTextDescription:
    "text-body-text text-sm md:text-base leading-relaxed w-full text-justify md:text-left",
};