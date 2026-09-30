// src/components/ui/RevealOnScroll.tsx
"use client";

import { cn } from "@/lib/utils/cn";

import { useInView } from "@/hooks/use-in-view";

type RevealDirection = "up" | "down" | "left" | "right" | "scale" | "fade";

type RevealOnScrollProps = {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  as?: "div" | "li" | "section";
};

const directionClasses: Record<RevealDirection, { hidden: string; visible: string }> = {
  up: {
    hidden: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  down: {
    hidden: "opacity-0 -translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  left: {
    hidden: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  right: {
    hidden: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  scale: {
    hidden: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
  fade: {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
};

export function RevealOnScroll({
  children,
  direction = "up",
  delay = 0,
  duration = 500,
  threshold = 0.15,
  className,
  as: Tag = "div",
}: RevealOnScrollProps) {
  const { ref, isInView } = useInView({ threshold, repeat: true });
  const dir = directionClasses[direction];

  return (
    <Tag
      ref={ref as never}
      className={cn(
        "transition-all ease-out",
        isInView ? dir.visible : dir.hidden,
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}