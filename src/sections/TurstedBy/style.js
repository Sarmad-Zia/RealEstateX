export const styles = {
    // FIXED: Removed absolute positioning. Added -mt-20 for the overlap, and h-auto for responsiveness.
    trustContainer:
        'relative z-10 w-full h-auto -mt-20 bg-paper dark:bg-mint/40! py-8 px-4 shadow-md rounded-t-[100px] overflow-hidden',
    trustTitle: 'text-xl text-center text-ink',
    // outer viewport: hides overflow, blocks manual scroll
    trustGrid: 'w-full overflow-hidden mt-8 ',
    // inner track: this is what actually animates
    trustTrack:
        'flex gap-4 w-max animate-[marquee-scroll_20s_linear_infinite] hover:[animation-play-state:paused] hover:cursor-pointer',
    trustItem: 'flex items-center justify-center p-4 shrink-0',
    trustImage: 'max-w-[120px] max-h-[60px] object-contain'
}