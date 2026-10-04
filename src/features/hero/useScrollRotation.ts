import { useEffect, useRef, useState } from "react";

/**
 * Returns a reversible 0 → 1 value for the referenced section's native scroll
 * travel. It observes scroll position without intercepting or modifying it.
 */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      // One viewport height of native scrolling carries the hero out of view;
      // that distance is the natural 0 → 1 scroll range.
      const travel = Math.max(1, window.innerHeight);
      setProgress(Math.min(1, Math.max(0, -rect.top / travel)));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { ref, progress };
}
