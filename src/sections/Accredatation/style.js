export const styles = {
  section: "py-16 px-6 bg-cream w-full",

  label:
    "text-center font-inter text-xl md:text-2xl font-semibold uppercase tracking-[0.14em] " +
    "text-forest/80 mb-8",

  // 2-column grid on mobile, forces a single horizontal row with no wrapping from md onwards
  row: "grid grid-cols-2 md:flex md:flex-nowrap items-center justify-center gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto justify-items-center",

  logoWrap: "flex items-center justify-center w-full md:w-auto",

  // Small size for mobile grid, scales up naturally across larger screen breakpoints
  logoImage:
    "max-h-14 sm:max-h-16 md:max-h-20 lg:max-h-24 w-auto object-contain " +
    "hover:grayscale-0 hover:opacity-100 transition-all duration-300",
};