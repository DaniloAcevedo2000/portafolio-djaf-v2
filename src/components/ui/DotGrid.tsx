// src/components/ui/DotGrid.tsx
import { cn } from "@/lib/utils/cn";

type DotGridProps = {
  className?: string;
  size?: number;
  dotSize?: number;
};

/**
 * Grid de puntos decorativo, con máscara radial para desvanecer hacia los bordes.
 */
export function DotGrid({
  className,
  size = 32,
  dotSize = 1,
}: DotGridProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: `radial-gradient(circle, var(--color-border-strong) ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${size}px ${size}px`,
        maskImage:
          "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
      }}
    />
  );
}