// src/components/ui/HorizontalTimeline.tsx
import { cn } from "@/lib/utils/cn";

type TimelineEntry = {
  id: string;
  year: string;
  node: React.ReactNode;
};

type HorizontalTimelineProps = {
  entries: TimelineEntry[];
  className?: string;
};

export function HorizontalTimeline({
  entries,
  className,
}: HorizontalTimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* ─── Línea horizontal (desktop) ─── */}
      <div className="pointer-events-none absolute left-0 right-0 top-[7px] hidden h-px bg-gradient-to-r from-transparent via-border-strong to-transparent md:block" />

      {/* ─── Grid de items ─── */}
      <div className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible">
        {entries.map((entry, i) => (
          <div
            key={entry.id}
            className="flex min-w-[280px] snap-start flex-col items-center md:min-w-0 md:items-stretch"
          >
            {/* Punto en la línea */}
            <div className="relative mb-4 flex items-center justify-center">
              <span
                className={cn(
                  "relative z-10 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-bg",
                  i === entries.length - 1
                    ? "bg-primary shadow-[0_0_12px_var(--color-primary)]"
                    : "bg-primary/70",
                )}
              >
                {i === entries.length - 1 && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
                )}
              </span>
            </div>

            {/* Card */}
            <div className="w-full">{entry.node}</div>
          </div>
        ))}
      </div>
    </div>
  );
}