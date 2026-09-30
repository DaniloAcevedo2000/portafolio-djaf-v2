// src/components/ui/AnimatedSection.tsx
import { cn } from "@/lib/utils/cn";

type AnimationType = "fade-up" | "fade-in" | "scale-in" | "slide-in-left";

type AnimatedSectionProps = {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
};

export function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  className,
}: AnimatedSectionProps) {
  return (
    <div
      className={cn(`animate-${animation}`, className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}