
// export const styles = {
//   screen:
//     "splash-screen fixed inset-0 z-[9999] flex items-center justify-center bg-navy-dark",
//   screenExit: "splash-exit",

//   glow: "splash-glow pointer-events-none absolute inset-0",

//   bgIcon: "splash-bg-icon absolute text-sky-accent",
//   bgIconTopLeft: "top-[14%] left-[10%] h-16 w-16 sm:h-20 sm:w-20",
//   bgIconTopRight: "top-[18%] right-[12%] hidden h-14 w-14 sm:block",
//   bgIconBottomLeft: "bottom-[20%] left-[14%] hidden h-14 w-14 sm:block",
//   bgIconBottomRight: "bottom-[16%] right-[9%] h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]",
//   bgIconCenterLeft: "top-[48%] left-[4%] hidden h-12 w-12 lg:block",

//   content: "relative flex flex-col items-center px-6",

//   wordmark:
//     "flex font-['Fraunces'] text-6xl italic font-semibold tracking-tight text-white sm:text-7xl",
//   letter: "splash-letter inline-block",

//   underline:
//     "splash-underline mt-4 block h-[2px] w-16 bg-gradient-to-r from-sky-accent to-azure-primary",

//   badge:
//     "splash-badge animate pop-in delay-5 mt-7 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm",
//   badgeIcon: "h-4 w-4 text-sky-accent",
//   badgeText: "font-inter text-[11px] tracking-wide text-slate-300 sm:text-xs",

//   progressTrack:
//     "absolute bottom-12 left-1/2 h-[2px] w-40 -translate-x-1/2 overflow-hidden rounded-full bg-white/10 sm:w-48",
//   progressBar: "splash-progress h-full bg-sky-accent",
// };

// export default styles;


/**
 * Tailwind classname map for <SplashScreen />.
 * Custom animation classes (splash-letter, splash-underline, splash-progress,
 * splash-exit, splash-glow) are defined in style.css — combined here with
 * Tailwind utilities so each element only needs one className reference.
 */
export const styles = {
  screen:
    "splash-screen fixed inset-0 z-[9999] flex items-center justify-center bg-navy-dark",
  screenExit: "splash-exit",

  glow: "splash-glow pointer-events-none absolute inset-0",

  building: "splash-building mb-5 h-20 w-20 object-contain sm:h-24 sm:w-24",

  bgIcon: "splash-bg-icon absolute text-sky-accent",
  bgIconTopLeft: "top-[14%] left-[10%] h-16 w-16 sm:h-20 sm:w-20",
  bgIconTopRight: "top-[18%] right-[12%] hidden h-14 w-14 sm:block",
  bgIconBottomLeft: "bottom-[20%] left-[14%] hidden h-14 w-14 sm:block",
  bgIconBottomRight: "bottom-[16%] right-[9%] h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]",
  bgIconCenterLeft: "top-[48%] left-[4%] hidden h-12 w-12 lg:block",

  content: "relative z-10 flex flex-col items-center px-6",

  wordmark:
    "flex font-['Fraunces'] text-6xl italic font-semibold tracking-tight text-white sm:text-7xl",
  letter: "splash-letter inline-block",

  underline:
    "splash-underline mt-4 block h-[2px] w-16 bg-gradient-to-r from-sky-accent to-azure-primary",

  badge:
    "splash-badge splash-badge-in mt-7 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm",
  badgeIcon: "h-4 w-4 text-sky-accent",
  badgeText: "font-inter text-[11px] tracking-wide text-slate-300 sm:text-xs",

  progressTrack:
    "absolute bottom-12 left-1/2 h-[2px] w-40 -translate-x-1/2 overflow-hidden rounded-full bg-white/10 sm:w-48",
  progressBar: "splash-progress h-full bg-sky-accent",
};

export default styles;