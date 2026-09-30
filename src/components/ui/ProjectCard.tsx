// src/components/ui/ProjectCard.tsx
import { Lock } from "lucide-react";

import { ProjectCover } from "./ProjectCover";
import { ProjectCoverGallery } from "./ProjectCoverGallery";
import { Badge } from "./Badge";
import { RevealOnScroll } from "./RevealOnScroll";
import type { Project } from "@/seed/types";
import { cn } from "@/lib/utils/cn";

type Props = {
  project: Project;
  locale: "es" | "en";
  index: number;
  labels: {
    client: string;
    freelance: string;
    private: string;
  };
};

export function ProjectCard({ project, locale, index, labels }: Props) {
  const hasImages = project.images && project.images.length > 0;
  const l = locale;

  return (
    <RevealOnScroll direction="up" delay={index * 80} duration={600} className="h-full">
      <article
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-bg-elevated",
          "transition-all duration-300",
          "hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10",
        )}
      >
        {/* Portada */}
        <div className="relative overflow-hidden">
          {hasImages ? (
            <ProjectCoverGallery images={project.images!} alt={project.title[l]} />
          ) : (
            <ProjectCover project={project} />
          )}

          {/* Badges */}
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <Badge
              variant={project.clientType === "client" ? "primary" : "success"}
              className="border-white/20 bg-black/60 text-white shadow-md backdrop-blur-md"
            >
              {project.clientType === "client"
                ? labels.client
                : labels.freelance}
            </Badge>

            {project.isPrivate && (
              <Badge
                variant="neutral"
                className="border-white/20 bg-black/60 text-white shadow-md backdrop-blur-md"
              >
                <Lock className="h-3 w-3" />
                {labels.private}
              </Badge>
            )}
          </div>
        </div>

        {/* Contenido */}
        <div className="flex flex-1 flex-col p-5">
          {/* Meta */}
          <div className="flex items-center gap-2 font-mono text-[11px] text-text-muted">
            <span className="font-medium text-primary">{project.year}</span>
            {project.company && (
              <>
                <span>·</span>
                <span className="truncate">{project.company}</span>
              </>
            )}
          </div>

          {/* Título */}
          <h3 className="mt-2 text-base font-bold leading-tight text-text sm:text-lg">
            {project.title[l]}
          </h3>

          {/* Descripción */}
          <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-text-muted sm:text-sm">
            {project.description[l]}
          </p>

          {/* Tecnologías */}
          <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className={cn(
                  "rounded-full border border-border bg-bg-subtle/40 px-2 py-0.5",
                  "font-mono text-[10px] font-medium text-text-muted",
                  "transition-colors hover:border-primary/40 hover:text-primary",
                )}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="rounded-full border border-border bg-bg-subtle/40 px-2 py-0.5 font-mono text-[10px] font-medium text-text-muted">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </article>
    </RevealOnScroll>
  );
}