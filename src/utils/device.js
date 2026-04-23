/** True for phones/tablets where hover is not the primary pointer (touch). */
export function prefersCoarsePointer() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia("(pointer: coarse)").matches;
}

/** iOS WebKit often needs non-smooth scroll and stricter timing for lazy sections. */
export function prefersReducedScrollMotion() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  if (window.matchMedia("(pointer: coarse)").matches) return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
