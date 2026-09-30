// src/components/ui/VerticalTimelineItem.tsx
"use client";

import { cn } from "@/lib/utils/cn";
import { useInView } from "@/hooks/use-in-view";

type VerticalTimelineItemProps = {
  year: string;
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  current?: boolean;
  highlights?: string[];
  technologies?: string[];
  isLast?: boolean;
  index?: number;
};

export function VerticalTimelineItem({
  year,
  title,
  subtitle,
  period,
  location,
  current = false,
  highlights = [],
  technologies = [],
  isLast = false,
  index = 0,
}: VerticalTimelineItemProps) {
  const { ref, isInView } = useInView({ threshold: 0.2, repeat: true });

  return (
    <div ref={ref} className="relative flex gap-6">
      {/* ─── Columna izquierda: punto + línea ─── */}
      <div className="flex shrink-0 flex-col items-center">
        {/* Punto */}
        <div
          className={cn(
            "relative z-10 mt-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-bg transition-all duration-500",
            isInView
              ? current
                ? "scale-100 bg-primary shadow-[0_0_20px_var(--color-primary)]"
                : "scale-100 bg-primary/70"
              : "scale-50 bg-primary/20",
          )}
        >
          {current && isInView && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
          )}
        </div>

        {/* Línea vertical */}
        {!isLast && (
          <div className="relative mt-2 w-px flex-1 overflow-hidden bg-border">
            <div
              className={cn(
                "absolute inset-0 origin-top bg-gradient-to-b from-primary via-primary/60 to-primary/20 transition-transform duration-700 ease-out",
                isInView ? "scale-y-100" : "scale-y-0",
              )}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            />
          </div>
        )}
      </div>

      {/* ─── Contenido ─── */}
      <div
        className={cn(
          "min-w-0 flex-1 transition-all duration-500 ease-out",
          !isLast && "pb-12",
          isInView
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0",
        )}
        style={{ transitionDelay: `${index * 120}ms` }}
      >
        {/* Año + badge */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-sm font-medium text-primary">
            {year}
          </span>
          {current && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Present
            </span>
          )}
        </div>

        {/* Título */}
        <h3 className="mt-2 text-lg font-bold text-text sm:text-xl">
          {title}
        </h3>

        {/* Subtítulo */}
        <p className="text-sm font-medium text-primary sm:text-base">
          {subtitle}
        </p>

        {/* Meta: periodo + ubicación */}
        <p className="mt-1 text-xs text-text-muted sm:text-sm">
          {period}
          {location && <> · {location}</>}
        </p>

        {/* Highlights (con stagger) */}
        {highlights.length > 0 && (
          <ul className="mt-4 space-y-2">
            {highlights.map((item, i) => (
              <li
                key={i}
                className={cn(
                  "flex gap-3 text-sm leading-relaxed text-text-muted transition-all duration-400 ease-out",
                  isInView
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0",
                )}
                style={{
                  transitionDelay: isInView
                    ? `${200 + index * 120 + i * 80}ms`
                    : "0ms",
                }}
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tecnologías (con stagger) */}
        {technologies.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span
                key={tech}
                className={cn(
                  "rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs font-medium text-text-muted transition-all duration-300",
                  "hover:border-primary/40 hover:text-primary",
                  isInView
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-0",
                )}
                style={{
                  transitionDelay: isInView
                    ? `${400 + index * 120 + i * 50}ms`
                    : "0ms",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}