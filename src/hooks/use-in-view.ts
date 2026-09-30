// src/hooks/use-in-view.ts
"use client";

import { useEffect, useRef, useState } from "react";

type UseInViewOptions = {
  threshold?: number | number[];
  rootMargin?: string;
  /** Si es true, se re-anima cada vez que entra al viewport */
  repeat?: boolean;
};

export function useInView({
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  repeat = true,
}: UseInViewOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else if (repeat) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, repeat]);

  return { ref, isInView };
}