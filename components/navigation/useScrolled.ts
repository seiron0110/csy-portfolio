"use client";

import { useSyncExternalStore } from "react";

const DEFAULT_THRESHOLD = 8;

function subscribe(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
}

function getScrolledSnapshot(threshold: number) {
  return window.scrollY > threshold;
}

/**
 * Tracks whether the page has scrolled past a threshold.
 * Used to toggle navigation background styles.
 */
export function useScrolled(threshold = DEFAULT_THRESHOLD): boolean {
  return useSyncExternalStore(
    subscribe,
    () => getScrolledSnapshot(threshold),
    () => false,
  );
}
