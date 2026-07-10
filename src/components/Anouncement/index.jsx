import { useEffect, useState } from "react";
import { Megaphone, X, ArrowRight } from "lucide-react";
import { styles } from "./style";

const storageKey = (id) => `announcement-dismissed-${id}`;

/**
 * AnnouncementBar
 * A slim, dark institutional banner meant to render as the very first thing
 * in your app tree — above the Navbar — so it visually sits "on top of
 * everything". It doesn't parse its children; instead it gives you three
 * building blocks to compose freely:
 *
 *   <AnnouncementBar id="q1-2026-onboarding">
 *     Limited onboarding slots for Q1 implementation.
 *   </AnnouncementBar>
 *
 *   <AnnouncementBar id="onprem-launch">
 *     On-premise deployment is now available for CDA-regulated projects.
 *     <AnnouncementLink href="/features/on-premise">Learn more</AnnouncementLink>
 *   </AnnouncementBar>
 *
 *   <AnnouncementBar id="demo-push">
 *     Book your live demo before Q1 slots close.
 *     <AnnouncementButton onClick={openDemoModal}>Book a Demo</AnnouncementButton>
 *   </AnnouncementBar>
 *
 * Props:
 * - id          optional string. When set, dismissal is remembered in
 *               localStorage so the bar stays closed across visits. Omit it
 *               for a session-only bar that resets on page reload.
 * - icon        lucide icon component, or `null` to hide it. Defaults to Megaphone.
 * - dismissible boolean, default true. Shows the close (X) button.
 * - sticky      boolean, default false. Pins the bar to the viewport top
 *               while scrolling (place it above your Navbar's own sticky bar).
 */
export default function AnnouncementBar({
  children,
  id,
  icon: Icon = Megaphone,
  dismissible = true,
  sticky = false,
  className = "",
}) {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!id) return;
    try {
      if (window.localStorage.getItem(storageKey(id)) === "1") {
        setDismissed(true);
      }
    } catch {
      // localStorage unavailable (private mode, etc.) — fail open, bar stays visible
    }
  }, [id]);

  const handleDismiss = () => {
    setDismissed(true);
    if (!id) return;
    try {
      window.localStorage.setItem(storageKey(id), "1");
    } catch {
      // ignore write failures — worst case it reappears next visit
    }
  };

  if (dismissed || !children) return null;

  return (
    <div
      className={`${styles.bar} ${sticky ? "sticky top-0 z-[60]" : ""} animate fade-down ${className}`}
    >
      <div className={styles.inner}>
        {Icon && <Icon className={styles.icon} />}
        <div className={styles.content}>{children}</div>
      </div>

      {dismissible && (
        <button
          type="button"
          aria-label="Dismiss announcement"
          className={styles.closeButton}
          onClick={handleDismiss}
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}

/** Inline link styled for the dark announcement bar — underlined mint, hovers to neon. */
export function AnnouncementLink({ href = "#", children, ...props }) {
  return (
    <a href={href} className={styles.link} {...props}>
      {children}
      <ArrowRight className="w-3 h-3" />
    </a>
  );
}

/** Inline pill button styled for the dark announcement bar — solid neon, the bar's one CTA color. */
export function AnnouncementButton({ children, ...props }) {
  return (
    <button type="button" className={styles.button} {...props}>
      {children}
    </button>
  );
}