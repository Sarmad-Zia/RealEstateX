export const styles = {
  section:
    "relative overflow-hidden py-8 md:py-12 px-6 text-[#f6efe9] " +
    "bg-[linear-gradient(135deg,#122523,#115946)]",

  glowTopLeft:
    "pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-neon/10 blur-3xl",

  glowBottomRight:
    "pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-mint/10 blur-3xl",

  content:
    "relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center",

  heading:
    "font-poppins text-3xl md:text-3xl lg:text-4xl font-bold text-[#f6efe9] leading-tight max-w-5xl mx-auto",

  buttonsRow:
    "flex justify-center mt-10",

  primaryButton:
    "inline-flex items-center justify-center gap-2 rounded-full bg-neon px-8 py-4 " +
    "font-inter text-base font-semibold text-[#122523] shadow-[var(--shadow-lg)] " +
    "transition-all duration-300 hover:bg-mint hover:scale-105",
};