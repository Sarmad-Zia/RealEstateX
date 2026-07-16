// src/components/TrustedBy/style.js
export const styles = {
  section: " px-3",
  container: "max-w-[80%] mx-auto flex flex-col items-center",

  eyebrowRow: "flex items-center gap-3 mb-4",
  eyebrowLine: "h-px w-8 bg-mint/40",
  eyebrow: "font-inter text-xs md:text-sm font-semibold uppercase text-cream mb-2 lg:mb-4",

  heading: "text-center text-white text-xl md:text-3xl font-extrabold font-poppins mb-10 md:mb-14 px-2",
  headingAccent: "text-neon",

  // no overflow, wraps naturally — never scrolls in any direction
  logoRow: "flex flex-wrap items-center justify-center gap-3 w-full w-full  ",

  logoWrap:
    "flex items-center justify-center h-20 md:h-25 w-auto grayscale opacity-60 " +
    "hover:grayscale-0 hover:opacity-100 transition-all duration-300",

  logoImg: "h-full w-auto object-contain",
  divider: "max-w-4xl h-[1px] bg-paper/20 mt-12 md:mt-16",
};