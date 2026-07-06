// style.js
export const styles = {
  // Main overlay backdrop with glassmorphism blur
  mobileMenuOverlay: "fixed inset-0 z-50 min-h-[100vh] flex justify-end bg-ink/50 backdrop-blur-sm animate fade-in",

  // Sidebar panel — bg-ink is a real token (near-black), so this now actually renders
  mobileMenu: "w-full max-w-sm h-full bg-ink border-l border-forest/30 p-6 flex flex-col justify-between shadow-lg animate slide-right",

  // Header configuration
  mobileMenuHeader: "flex items-center justify-between pb-6 border-b border-paper/10",
  menuTitle: "text-2xl font-poppins font-bold text-paper tracking-wide",

  // Close button — now wraps a lucide X icon instead of a unicode "✕"
  closeButton: "w-10 h-10 flex items-center justify-center rounded-full text-paper/70 hover:text-paper bg-paper/5 hover:bg-paper/10 border border-paper/10 transition-all duration-200 cursor-pointer",

  // Link column layout
  navLinksContainer: "flex flex-col gap-2 my-auto",

  // Individual menu item — icon + label row, forest/neon accent on hover to match the island navbar
  navLink: "flex items-center gap-3 font-inter font-medium text-lg text-sand hover:text-neon py-3 transition-colors duration-200 border-b border-paper/5 hover:border-neon/30",
  navLinkIcon: "text-forest group-hover:text-neon shrink-0",

  // Outline action (Call Now)
  navBtnOutline: "w-full flex items-center justify-center gap-2 text-center font-inter font-semibold py-3 px-6 rounded-xl border-2 border-forest text-paper hover:bg-forest-deep shadow-sm transition-all duration-300 transform active:scale-95 cursor-pointer",

  // Filled primary action (Book Demo) — neon CTA, dark text for contrast
  navBtnPremium: "w-full flex items-center justify-center gap-2 text-center font-inter font-semibold py-3 px-6 rounded-xl bg-neon text-ink shadow-md hover:shadow-lg hover:shadow-neon/20 transition-all duration-300 transform active:scale-95 cursor-pointer",

  footerNote: "pt-6 border-t border-paper/5 text-center",
  footerText: "text-xs text-sand/60 font-inter",
};