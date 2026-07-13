export const styles = {
  // No background here on purpose — section sits directly on the page bg
  section: "py-6 px-6 md:py-8 w-full",

  label:
    "text-center font-inter text-lg md:text-xl  uppercase tracking-[0.14em] " +
    "text-mint mb-10 font-bold! ",

  // Clips the scrolling track + anchors the two edge-fade overlays
  marqueeOuter: "relative w-auto mx-auto overflow-hidden",

  // Edge fades blend into whatever page bg sits behind (cream flips in dark mode too)
  fadeEdge: "pointer-events-none absolute inset-y-0 z-10 w-16 md:w-28",
  // fadeLeft: "left-0 bg-gradient-to-r from-cream to-transparent",
  // fadeRight: "right-0 bg-gradient-to-l from-cream to-transparent",

  // Infinite loop reuses the existing `marquee-scroll` keyframe (0% -> -50%)
  // already defined in index.css — no new CSS needed. Pauses on hover.

  discrption:
    "text-center font-inter text-sm md:text-base text-paper/80 max-w-3xl mx-auto mb-10",

  track:
    "flex w-max items-center gap-6 md:gap-10 lg:gap-14 " +
    "[animation:marquee-scroll_26s_linear_infinite] hover:[animation-play-state:paused]",

  logoWrap:
    "group flex h-24 w-40 md:h-28 md:w-48 shrink-0 items-center justify-center " +
    "rounded-2xl border border-sand bg-paper px-6 shadow-sm transition-all duration-300 " +
    "hover:-translate-y-1 hover:border-forest/40 hover:shadow-lg dark:bg-mint/5",

  logoImage:
    "max-h-10 md:max-h-20 w-auto object-contain grayscale opacity-70 " +
    "transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100",
};