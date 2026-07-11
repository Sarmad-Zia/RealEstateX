
export const styles = {
  section:
    "relative overflow-hidden py-4 md:py-10 px-6 text-[#f6efe9] " +
    "bg-[linear-gradient(135deg,#122523,#115946)]",

  glowTopLeft:
    "pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-neon/10 blur-3xl",
  glowBottomRight:
    "pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-mint/10 blur-3xl",

  content: "relative z-10 max-w-4xl mx-auto text-center",

  badge:
    "inline-flex items-center gap-2 bg-[#f6efe9]/10 border border-[#f6efe9]/20 rounded-full " +
    "px-4 py-1.5 backdrop-blur-sm mb-6",
  badgeIcon: "w-3.5 h-3.5 text-neon", 
  badgeText: "font-inter text-xs font-semibold uppercase tracking-wide text-[#f6efe9]/90",

  heading:
    "font-poppins text-2xl md:text-3xl lg:text-5xl font-extrabold text-[#f6efe9] leading-[1.08] mb-6",

  subhead:
    "font-inter text-base md:text-sm text-[#f6efe9]/75 max-w-xl mx-auto leading-relaxed mb-5",

  buttonsRow: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-5",

  primaryButton:
    "inline-flex items-center justify-center gap-2 rounded-full bg-neon px-4 py-2 " +
    "font-inter text-sm md:text-base font-bold text-[#122523] shadow-[var(--shadow-lg)] " +
    "transition-colors duration-300 hover:bg-mint w-full sm:w-auto",

  secondaryButton:
    "inline-flex items-center justify-center gap-2 rounded-full border border-[#f6efe9]/30 px-4 py-2 " +
    "font-inter text-sm md:text-base font-semibold text-[#f6efe9] transition-colors duration-300 " +
    "hover:bg-[#f6efe9]/10 hover:border-[#f6efe9]/50 w-full sm:w-auto",

  trustRow:
    "flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-8 border-t border-[#f6efe9]/15",

  trustItem: "flex items-center gap-2 text-[#f6efe9]/70 text-xs md:text-sm font-inter",
  trustIcon: "w-4 h-4 text-mint shrink-0",
};