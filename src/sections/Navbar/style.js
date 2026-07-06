export const styles = {
  // Base classes handled via dynamic logic in the component
  navbarBase: "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out font-inter",
  navbarFull: "w-full bg-paper/90 backdrop-blur-md border-b border-sand py-5 shadow-sm",
  navbarIsland: "max-w-4xl mx-auto top-4 rounded-full bg-ink/95 backdrop-blur-md border border-forest/30 py-3 px-2 shadow-lg",
  
  menuIcon: "lg:hidden cursor-pointer transition-colors duration-200",
  navWrapper: "max-w-7xl mx-auto px-6 flex justify-between items-center w-full",
  
  // Logos matching theme
  logo: "text-2xl font-extrabold font-poppins transition-colors duration-300",
  logoFull: "text-ink",
  logoIsland: "text-paper",
  logoAccent: "text-mint inline-block animate-[bounce_2s_infinite] hover:scale-125 transition-transform duration-200 cursor-pointer",
  
  navLinksContainer: "hidden lg:flex items-center gap-6 font-semibold",
  
  // Dynamic Nav Links
  navLinkFull: "text-body-text hover:text-forest transition-colors duration-200 px-3",
  navLinkIsland: "text-sand hover:text-neon transition-colors duration-200 px-3",
  
  // Buttons adjusted for the theme palette
  navBtnOutlineFull: "border-2 border-sand text-ink bg-transparent px-5 py-2 rounded-lg hover:border-forest hover:bg-cream transition-all duration-200 text-sm font-semibold",
  navBtnOutlineIsland: "border-2 border-forest text-paper bg-transparent px-5 py-2 rounded-lg hover:border-neon hover:bg-forest-deep transition-all duration-200 text-sm font-semibold",
  
  navBtnPremiumFull: "bg-neon text-ink px-5 py-2 rounded-lg shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm font-semibold",
  navBtnPremiumIsland: "bg-grad-premium text-white border border-forest px-5 py-2 rounded-lg shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm font-semibold",
};