export const styles = {
  section: "relative bg-forest py-7 md:py-12 px-4 md:px-6 overflow-hidden",
  heading: "text-center text-white text-xl md:text-3xl font-extrabold font-poppins mb-10 md:mb-14 px-2",
  headingAccent: "text-neon",

  carouselRow: "relative max-w-4xl mx-auto flex items-center justify-center gap-4 md:gap-8 w-full",
  
  // Shared base navigation styling
  navBtn: "shrink-0 w-10 h-10 rounded-full bg-paper text-ink flex items-center justify-center shadow-md hover:bg-sand transition-colors duration-200 active:scale-95 transform",

  // Responsive padding and rounding scale down gracefully on mobile viewport widths
  card: "bg-paper rounded-[24px] md:rounded-[32px] shadow-lg px-4 md:px-14 py-8 md:py-12 flex-1 text-center w-full  ",
  quoteText: "text-lg md:text-xl leading-relaxed text-ink font-medium",
  quoteBold: "font-extrabold",

  authorRow: "flex items-center justify-center gap-3 mt-8",
  avatarPhoto: "w-12 h-12 rounded-full object-cover border-2 border-sand",
  avatarInitials: "w-12 h-12 rounded-full bg-forest-deep text-white flex items-center justify-center font-bold text-sm",
  authorInfo: "text-left",
  authorName: "text-forest font-bold text-sm",
  authorRole: "text-body-text text-xs leading-snug",

  // Mobile dedicated row selector (Hidden by default on md/desktop screens)
  mobileNavRow: "flex md:hidden items-center justify-center gap-6 mt-8",
  divider: "max-w-4xl m-auto h-[1.5px] bg-paper/20 my-10",

  
  cornerBadge: "absolute bottom-6 right-6 w-12 h-12 rounded-full bg-mint text-white flex items-center justify-center text-lg shadow-md",
};