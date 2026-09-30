// src/components/ui/ExpertiseCard.tsx
import { ArrowRight, Code2, Database, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { ExpertiseArea, Metric } from "@/seed/types";
import { cn } from "@/lib/utils/cn";

const iconMap: Record<string, LucideIcon> = {
  Database,
  Code2,
  Smartphone,
};

type Props = {
  area: ExpertiseArea;
  locale: string;
  index: number;
  labels: {
    appliedIn: string;
    featuredProjects: string;
    mainStack: string;
  };
  relatedExperienceLabels?: { id: string; label: string; year: string }[];
  relatedProjectLabels?: { id: string; label: string; year: string }[];
};

export function ExpertiseCard({
  area,
  locale,
  index,
  labels,
  relatedExperienceLabels = [],
  relatedProjectLabels = [],
}: Props) {
  const Icon = iconMap[area.icon] ?? Database;
  const l = locale as "es" | "en";

  const reversed = index % 2 === 1;

  const hasRelatedExperience = relatedExperienceLabels.length > 0;
  const hasRelatedProjects = relatedProjectLabels.length > 0;

  // ─────────────────────────────────────────
  // SIDEBAR (columna corta con línea decorativa)
  // ─────────────────────────────────────────
  // La línea decorativa SIEMPRE va del lado opuesto al borde entre columnas.
  //   - Normal: borde a la derecha → línea a la IZQUIERDA
  //   - Reversed: borde a la izquierda → línea a la DERECHA
  const sidebar = (
    <div
      className={cn(
        "relative",
        reversed ? "md:pr-6" : "md:pl-6",
      )}
    >
      {/* Línea decorativa vertical */}
      <span
        aria-hidden
        className={cn(
          "absolute top-0 hidden h-full w-px md:block",
          "bg-gradient-to-b from-primary/50 via-border to-transparent",
          reversed ? "right-0" : "left-0",
        )}
      />

      <div className="flex flex-col gap-5">
        {/* Icono */}
        <span
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-2xl",
            "bg-gradient-to-br from-primary/20 to-accent/10",
            "text-primary",
          )}
        >
          <Icon className="h-5 w-5" />
        </span>

        {/* Título */}
        <h3 className="text-xl font-bold leading-tight tracking-tight text-text sm:text-2xl">
          {area.title[l]}
        </h3>

        {/* Tech count */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-primary/40" />
          <span className="font-mono text-xs font-medium uppercase tracking-wider text-text-muted">
            {area.technologies.length} techs
          </span>
        </div>

        {/* CTA */}
        {area.cta && (
          <a
            href={area.cta.href}
            className={cn(
              "group inline-flex w-fit items-center gap-2 rounded-full border border-border bg-bg px-4 py-2",
              "text-xs font-medium text-text",
              "transition-all hover:border-primary/40 hover:bg-bg-subtle hover:text-primary",
            )}
          >
            {area.cta.label[l]}
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        )}
      </div>
    </div>
  );

  // ─────────────────────────────────────────
  // CONTENT (columna ancha)
  // ─────────────────────────────────────────
  const content = (
    <div className="space-y-6">
      {/* Descripción */}
      <p className="text-base leading-relaxed text-text-muted sm:text-lg">
        {area.description[l]}
      </p>

      {/* Métricas */}
      <div className="flex flex-wrap gap-3">
        {area.metrics.map((metric: Metric) => (
          <div
            key={metric.label.es}
            className={cn(
              "rounded-2xl border border-border bg-bg-subtle/30 px-4 py-2.5",
              "transition-colors hover:border-primary/30",
            )}
          >
            <p className="text-xl font-bold leading-none text-primary sm:text-2xl">
              {metric.value}
            </p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-text-muted">
              {metric.label[l]}
            </p>
          </div>
        ))}
      </div>

      {/* Experiencia aplicada */}
      {hasRelatedExperience && (
        <div>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted">
            {labels.appliedIn}
          </p>
          <ul className="space-y-2">
            {relatedExperienceLabels.map((exp) => (
              <li
                key={exp.id}
                className="group flex items-center gap-4 text-sm text-text"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60 transition-all group-hover:scale-125 group-hover:bg-primary" />
                <span className="flex-1">{exp.label}</span>
                <span className="font-mono text-xs text-text-muted">
                  {exp.year}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Proyectos destacados */}
      {hasRelatedProjects && (
        <div>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted">
            {labels.featuredProjects}
          </p>
          <ul className="space-y-2">
            {relatedProjectLabels.map((proj) => (
              <li
                key={proj.id}
                className="group flex items-center gap-4 text-sm text-text"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60 transition-all group-hover:scale-125 group-hover:bg-primary" />
                <span className="flex-1">{proj.label}</span>
                <span className="font-mono text-xs text-text-muted">
                  {proj.year}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Stack principal */}
      <div>
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted">
          {labels.mainStack}
        </p>
        <div className="flex flex-wrap gap-2">
          {area.technologies.map((tech) => (
            <span
              key={tech}
              className={cn(
                "rounded-full border border-border bg-bg px-3 py-1",
                "font-mono text-xs font-medium text-text-muted",
                "transition-colors hover:border-primary/40 hover:text-primary",
              )}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <RevealOnScroll direction={reversed ? "right" : "left"} duration={600}>
      <div
        className={cn(
          "grid grid-cols-1 gap-8 md:gap-10",
          reversed
            ? "md:grid-cols-[1fr_260px]"
            : "md:grid-cols-[260px_1fr]",
        )}
      >
        {/* Sidebar con borde y línea */}
        <div
          className={cn(
            // Borde entre columnas + padding correcto
            !reversed && "md:order-1 md:border-r md:border-border md:pr-10",
            reversed && "md:order-2 md:border-l md:border-border md:pl-10",
          )}
        >
          {sidebar}
        </div>

        {/* Content */}
        <div className={cn(reversed ? "md:order-1" : "md:order-2")}>
          {content}
        </div>
      </div>
    </RevealOnScroll>
  );
}