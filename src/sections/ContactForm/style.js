// src/components/ContactForm/style.js
export const styles = {
  section: "py-24 px-6 bg-sand",

  grid: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start",

  // ---- left context column ----
  leftCol: "lg:col-span-2",

  eyebrowRow: "flex items-center gap-3 mb-4",
  eyebrowLine: "h-px w-8 bg-forest/40",
  eyebrow: "font-inter text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-forest",

  heading: "font-poppins text-3xl md:text-4xl font-extrabold text-ink leading-tight mb-4",
  subhead: "font-inter text-base text-body-text leading-relaxed mb-8 max-w-md",

  contactList: "flex flex-col gap-4",
  contactItem: "flex items-center gap-3",
  contactIconWrap:
    "w-10 h-10 rounded-xl bg-paper border border-sand flex items-center justify-center text-forest shrink-0",
  contactLabel: "font-inter text-[11px] text-body-text uppercase tracking-wide",
  contactValue: "font-inter font-semibold text-ink text-sm",

  // ---- form card ----
  formCard:
    "lg:col-span-3 bg-paper rounded-[32px] border border-sand shadow-[var(--shadow-lg)] p-8 md:p-10",

  formGrid: "grid grid-cols-1 sm:grid-cols-2 gap-5",

  fieldWrap: "flex flex-col gap-1.5",
  fieldWrapFull: "flex flex-col gap-1.5 sm:col-span-2",

  label: "font-inter text-xs font-semibold text-ink uppercase tracking-wide",

  inputWrap:
    "flex items-center gap-2 bg-cream border border-sand rounded-xl px-4 py-3 " +
    "transition-colors duration-200 focus-within:border-forest",

  inputWrapStart:
    "flex items-start gap-2 bg-cream border border-sand rounded-xl px-4 py-3 " +
    "transition-colors duration-200 focus-within:border-forest",

  inputIcon: "w-4 h-4 text-forest shrink-0 mt-0.5",

  input:
    "bg-transparent outline-none w-full text-sm text-ink placeholder:text-body-text/50 font-inter",

  textarea:
    "bg-transparent outline-none w-full text-sm text-ink placeholder:text-body-text/50 " +
    "font-inter resize-none leading-relaxed",

  errorText: "font-inter text-[11px] text-red-600 mt-0.5",

  submitRow: "flex flex-col sm:flex-row items-center gap-4 mt-7 sm:col-span-2",

  submitButton:
    "inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 " +
    "font-inter text-sm font-semibold text-cream transition-colors duration-300 " +
    "hover:bg-forest disabled:opacity-60 disabled:pointer-events-none w-full sm:w-auto",

  submitNote: "font-inter text-xs text-body-text/70 text-center sm:text-left",

  // ---- success state ----
  successBox: "flex items-start gap-3 bg-mint/15 border border-mint/40 rounded-2xl px-5 py-5",
  successIcon: "w-5 h-5 text-forest shrink-0 mt-0.5",
  successTitle: "font-inter font-semibold text-ink text-sm mb-1",
  successText: "font-inter text-sm text-body-text leading-relaxed",
  successReset:
    "font-inter text-xs font-semibold text-forest underline decoration-dotted underline-offset-4 mt-3 hover:text-ink transition-colors",

  // ---- custom dropdown (Project Scale) ----
  dropdownRoot: "relative",

  dropdownTrigger:
    "flex items-center gap-2 w-full bg-cream border border-sand rounded-xl px-4 py-3 " +
    "text-left transition-colors duration-200 cursor-pointer " +
    "focus:outline-none focus-visible:border-forest",
  dropdownTriggerOpen: "border-forest",

  dropdownIcon: "w-4 h-4 text-forest shrink-0",

  dropdownValue: "flex-1 text-sm font-inter text-ink truncate",
  dropdownPlaceholder: "flex-1 text-sm font-inter text-body-text/50 truncate",

  dropdownChevron: "w-4 h-4 text-body-text shrink-0 transition-transform duration-200",
  dropdownChevronOpen: "rotate-180 text-forest",

  dropdownMenu:
    "absolute z-20 mt-2 w-full bg-paper border border-sand rounded-xl shadow-[var(--shadow-md)] " +
    "overflow-hidden py-1 animate fade-down",

  dropdownOption:
    "px-4 py-2.5 text-sm font-inter text-ink cursor-pointer transition-colors duration-150 " +
    "hover:bg-cream",
  dropdownOptionActive: "bg-mint/15 text-forest font-semibold",
};