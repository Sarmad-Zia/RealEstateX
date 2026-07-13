// src/components/TrustedBy/style.js
export const styles = {
  section: "py-5 md:py-6 px-6",
  container: "max-w-6xl mx-auto flex flex-col items-center",

  eyebrowRow: "flex items-center gap-3 mb-4",
  eyebrowLine: "h-px w-8 bg-forest/40",
  eyebrow: "font-inter text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-forest",

  heading: "font-poppins text-lg md:text-2xl font-bold text-ink text-center mb-10 md:mb-12 text-neon ",

  // no overflow, wraps naturally — never scrolls in any direction
  logoRow: "flex flex-wrap items-center justify-spacebetween mx-auto",

  logoWrap:
    "flex items-center justify-center h-22 md:h-30 w-auto grayscale opacity-60 " +
    "hover:grayscale-0 hover:opacity-100 transition-all duration-300",

  logoImg: "h-full w-auto object-contain",
  divider: "max-w-4xl h-[1px] bg-paper/20 mt-12 md:mt-16",
};