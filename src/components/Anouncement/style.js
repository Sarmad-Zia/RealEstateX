// style.js
// Dark ink bar with cream text — the same visual language as the BRD's
// "AI Highlight Strip" dark banner, so this reads as one system rather than
// a bolted-on plugin. Colors are CSS-var-driven, so dark mode is automatic.

export const styles = {
  bar: "relative w-full bg-ink px-4 md:px-6 py-2.5 md:py-3",

  inner:
    "mx-auto max-w-7xl flex items-center justify-center gap-2 pr-8 md:pr-10",

  icon: "w-4 h-4 text-mint shrink-0",

  content:
    "flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center " +
    "font-inter text-xs md:text-sm text-cream/90 leading-snug",

  // rendered by the exported <AnnouncementLink>
  link:
    "inline-flex items-center gap-1 font-inter font-semibold text-mint " +
    "underline decoration-mint/40 underline-offset-4 hover:text-neon transition-colors duration-200",

  // rendered by the exported <AnnouncementButton>
  button:
    "inline-flex items-center gap-1 rounded-full bg-neon px-3.5 py-1 " +
    "font-inter text-[11px] md:text-xs font-semibold text-ink " +
    "hover:bg-mint transition-colors duration-200 whitespace-nowrap",

  closeButton:
    "absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center " +
    "justify-center rounded-full text-cream/70 hover:text-cream hover:bg-cream/10 " +
    "transition-colors duration-200",
};