// import { useEffect, useState } from "react";
// import { ShieldCheck, Building2, LandPlot, ReceiptText, Landmark } from "lucide-react";
// import { styles } from "./style.js";
// import "./style.css";

// const NAME = "PropertyVerx";
// const SPLASH_DURATION = 2600;
// const EXIT_DURATION = 900; 
// const LETTER_START_DELAY = 0.2; 
// const LETTER_STAGGER = 0.045; 


// const BACKGROUND_ICONS = [
//   { Icon: Building2, position: styles.bgIconTopLeft, opacity: 0.09, duration: "6.5s", delay: "0s", dissolveX: "-24px", dissolveY: "-24px" },
//   { Icon: LandPlot, position: styles.bgIconTopRight, opacity: 0.07, duration: "7.5s", delay: "0.6s", dissolveX: "24px", dissolveY: "-24px" },
//   { Icon: ReceiptText, position: styles.bgIconBottomLeft, opacity: 0.07, duration: "7s", delay: "0.3s", dissolveX: "-24px", dissolveY: "24px" },
//   { Icon: Landmark, position: styles.bgIconBottomRight, opacity: 0.08, duration: "8s", delay: "0.9s", dissolveX: "24px", dissolveY: "24px" },
// ];

// export default function SplashScreen({ onFinish }) {
//   const [isExiting, setIsExiting] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const exitTimer = setTimeout(() => setIsExiting(true), SPLASH_DURATION);
//     const removeTimer = setTimeout(() => {
//       setIsVisible(false);
//       onFinish?.();
//     }, SPLASH_DURATION + EXIT_DURATION);

//     return () => {
//       clearTimeout(exitTimer);
//       clearTimeout(removeTimer);
//     };
//   }, [onFinish]);

//   if (!isVisible) return null;

//   return (
//     <div
//       className={`${styles.screen} ${isExiting ? styles.screenExit : ""}`}
//       role="status"
//       aria-label="Loading PropertyVerx"
//     >
//       {/* background watermarks — subtle, purpose-driven, never competing with the wordmark */}
//       {BACKGROUND_ICONS.map(({ Icon, position, opacity, duration, delay, dissolveX, dissolveY }, i) => (
//         <Icon
//           key={i}
//           aria-hidden="true"
//           strokeWidth={1.25}
//           className={`${styles.bgIcon} ${position}`}
//           style={{
//             "--bg-icon-opacity": opacity,
//             "--dissolve-x": dissolveX,
//             "--dissolve-y": dissolveY,
//             animationDuration: `1s, ${duration}`,
//             animationDelay: `${0.4 + i * 0.15}s, ${delay}`,
//           }}
//         />
//       ))}

//       {/* ambient background glow — kept subtle, the one atmospheric touch */}
//       <div className={styles.glow} />

//       <div className={styles.content}>
//         {/* wordmark, announced as one string for screen readers even
//             though it's rendered as individually animated letters */}
//         <h1 className={styles.wordmark} aria-label={NAME}>
//           {NAME.split("").map((char, i) => {
//             // Scatter letters outward from the wordmark's center as they dissolve:
//             // ones left of center drift left, right of center drift right.
//             const offsetFromCenter = i - (NAME.length - 1) / 2;
//             const dissolveX = `${offsetFromCenter * 10}px`;
//             const dissolveY = `${-14 - Math.abs(offsetFromCenter) * 4}px`;
//             return (
//               <span
//                 key={i}
//                 aria-hidden="true"
//                 className={styles.letter}
//                 style={{
//                   animationDelay: `${LETTER_START_DELAY + i * LETTER_STAGGER}s`,
//                   "--dissolve-x": dissolveX,
//                   "--dissolve-y": dissolveY,
//                 }}
//               >
//                 {char}
//               </span>
//             );
//           })}
//         </h1>

//         {/* accent underline */}
//         <span className={styles.underline} />

//         {/* verified / trust badge — echoes the security guarantees buyers care about */}
//         <div className={styles.badge}>
//           <ShieldCheck className={styles.badgeIcon} strokeWidth={2} />
//           <span className={styles.badgeText}>Secure. Encrypted. Verified.</span>
//         </div>
//       </div>

//       {/* boot progress bar — reinforces the "operating system" positioning */}
//       <div className={styles.progressTrack}>
//         <div className={styles.progressBar} />
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import { ShieldCheck, Building2, LandPlot, ReceiptText, Landmark } from "lucide-react";
import { styles } from "./style.js";
import "./style.css";

// Adjust this path if SplashScreen doesn't live at src/components/SplashScreen/ —
// it should point at src/assets/image/building.png relative to this file.
import buildingImg from "../../assets/images/building.png";

/**
 * Splash screen shown once on initial app load.
 * The wordmark's letters rise into place one after another, then a thin
 * accent line grows underneath and a "Secure. Encrypted. Verified." badge
 * settles in — steady and institutional rather than decorative, in line
 * with the enterprise-grade positioning in the brief. No tagline copy.
 * Faint watermark icons (building, plot, ledger, landmark) drift slowly
 * in the background, tying the screen back to what the product actually
 * manages — units, allocations, and statements — without competing with
 * the wordmark. The building image sits above the wordmark as a small
 * mark, fading in from fully transparent to fully visible.
 *
 * Keep SPLASH_DURATION and the .splash-progress animation-duration
 * in style.css in sync (both are 2600ms). EXIT_DURATION must match the
 * .splash-exit background fade duration in style.css (900ms) — the
 * letter/icon/badge dissolve animations are shorter and finish inside
 * that window.
 */
const NAME = "PropertyVerx";
const SPLASH_DURATION = 2600; // total time the splash stays fully visible
const EXIT_DURATION = 900; // must match .splash-exit background fade duration in style.css
const LETTER_START_DELAY = 0.8; // seconds before the first letter animates (after the image fades in)
const LETTER_STAGGER = 0.045; // seconds between each letter's animation start

// Faint background watermarks — chosen for what PropertyVerx actually manages:
// buildings/units, plot allocation, statements & commissions, and record-keeping.
const BACKGROUND_ICONS = [
  { Icon: Building2, position: styles.bgIconTopLeft, opacity: 0.09, duration: "6.5s", delay: "0s", dissolveX: "-24px", dissolveY: "-24px" },
  { Icon: LandPlot, position: styles.bgIconTopRight, opacity: 0.07, duration: "7.5s", delay: "0.6s", dissolveX: "24px", dissolveY: "-24px" },
  { Icon: ReceiptText, position: styles.bgIconBottomLeft, opacity: 0.07, duration: "7s", delay: "0.3s", dissolveX: "-24px", dissolveY: "24px" },
  { Icon: Landmark, position: styles.bgIconBottomRight, opacity: 0.08, duration: "8s", delay: "0.9s", dissolveX: "24px", dissolveY: "24px" },
];

export default function SplashScreen({ onFinish }) {
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const exitTimer = setTimeout(() => setIsExiting(true), SPLASH_DURATION);
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
      onFinish?.();
    }, SPLASH_DURATION + EXIT_DURATION);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div
      className={`${styles.screen} ${isExiting ? styles.screenExit : ""}`}
      role="status"
      aria-label="Loading PropertyVerx"
    >
      {/* background watermarks — subtle, purpose-driven, never competing with the wordmark */}
      {BACKGROUND_ICONS.map(({ Icon, position, opacity, duration, delay, dissolveX, dissolveY }, i) => (
        <Icon
          key={i}
          aria-hidden="true"
          strokeWidth={1.25}
          className={`${styles.bgIcon} ${position}`}
          style={{
            "--bg-icon-opacity": opacity,
            "--dissolve-x": dissolveX,
            "--dissolve-y": dissolveY,
            animationDuration: `1s, ${duration}`,
            animationDelay: `${0.4 + i * 0.15}s, ${delay}`,
          }}
        />
      ))}

      {/* ambient background glow — kept subtle, the one atmospheric touch */}
      <div className={styles.glow} />

      <div className={styles.content}>
        {/* building mark — fades in above the title before the letters rise */}
        <img src={buildingImg} alt="" className={styles.building} />
        {/* wordmark, announced as one string for screen readers even
            though it's rendered as individually animated letters */}
        <h1 className={styles.wordmark} aria-label={NAME}>
          {NAME.split("").map((char, i) => {
            // Scatter letters outward from the wordmark's center as they dissolve:
            // ones left of center drift left, right of center drift right.
            const offsetFromCenter = i - (NAME.length - 1) / 2;
            const dissolveX = `${offsetFromCenter * 10}px`;
            const dissolveY = `${-14 - Math.abs(offsetFromCenter) * 4}px`;
            return (
              <span
                key={i}
                aria-hidden="true"
                className={styles.letter}
                style={{
                  animationDelay: `${LETTER_START_DELAY + i * LETTER_STAGGER}s`,
                  "--dissolve-x": dissolveX,
                  "--dissolve-y": dissolveY,
                }}
              >
                {char}
              </span>
            );
          })}
        </h1>

        {/* accent underline */}
        <span className={styles.underline} />

        {/* verified / trust badge — echoes the security guarantees buyers care about */}
        <div className={styles.badge}>
          <ShieldCheck className={styles.badgeIcon} strokeWidth={2} />
          <span className={styles.badgeText}>Secure. Encrypted. Verified.</span>
        </div>
      </div>

      {/* boot progress bar — reinforces the "operating system" positioning */}
      <div className={styles.progressTrack}>
        <div className={styles.progressBar} />
      </div>
    </div>
  );
}