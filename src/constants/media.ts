import { BREAKPOINTS } from "./breakpoints";

export const media = {
  mobile: `@media (max-width: ${BREAKPOINTS.MOBILE})`,

  desktop: `@media (min-width: ${BREAKPOINTS.MOBILE})`,
} as const;

export const ANIMATION = {
  DURATION: {
    FAST: "0.15s",
    NORMAL: "0.3s",
    SLOW: "0.5s",
    SLOWEST: "1s",
  },
  EASING: {
    EASE: "ease",
    EASE_IN: "ease-in",
    EASE_OUT: "ease-out",
    EASE_IN_OUT: "ease-in-out",
    CUBIC_BEZIER: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  },
  DELAY: {
    SMALL: "0.3s",
  },
} as const;
