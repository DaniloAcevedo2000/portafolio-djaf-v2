// src/components/ui/TimelineCard.tsx
import { cn } from "@/lib/utils/cn";

type TimelineCardProps = {
  company: string;
  role: string;
  summary: string;
  year: string;
  current?: boolean;
  className?: string;
};

export function TimelineCard({
  company,
  role,
  summary,
  year,
  current = false,
  className,
}: TimelineCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col rounded-2xl border p-5 transition-all duration-300",
        current
          ? "border-primary/40 bg-primary/[0.03] shadow-lg shadow-primary/5"
          : "border-border bg-bg-elevated hover:border-primary/30",
        className,
      )}
    >
      {/* Año */}
      <span className="font-mono text-xs font-medium text-primary">
        {year}
      </span>

      {/* Empresa */}
      <p className="mt-2 text-base font-bold text-text">{company}</p>

      {/* Rol */}
      <p className="text-sm font-medium text-text-muted">{role}</p>

      {/* Resumen */}
      <p className="mt-3 text-xs leading-relaxed text-text-muted">
        {summary}
      </p>

      {/* Badge "actual" si aplica */}
      {current && (
        <span className="absolute -top-2 -right-2 flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          ACTUAL
        </span>
      )}
    </div>
  );
}