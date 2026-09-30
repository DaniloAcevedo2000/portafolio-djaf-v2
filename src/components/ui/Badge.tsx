// src/components/ui/Badge.tsx
import { cn } from "@/lib/utils/cn";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "primary" | "success" | "neutral";
  withDot?: boolean;
  className?: string;
};

const variantClasses = {
  primary: "border-primary/30 bg-primary/10 text-primary",
  success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-500",
  neutral: "border-border bg-bg-subtle text-text-muted",
} as const;

const dotClasses = {
  primary: "bg-primary",
  success: "bg-emerald-500",
  neutral: "bg-text-muted",
} as const;

export function Badge({
  children,
  variant = "primary",
  withDot = false,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium",
        variantClasses[variant],
        className,
      )}
    >
      {withDot && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
              dotClasses[variant],
            )}
          />
          <span
            className={cn(
              "relative inline-flex h-2 w-2 rounded-full",
              dotClasses[variant],
            )}
          />
        </span>
      )}
      {children}
    </span>
  );
}