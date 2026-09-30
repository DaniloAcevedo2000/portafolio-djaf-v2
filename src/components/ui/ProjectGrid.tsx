// src/components/ui/ProjectGrid.tsx
"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "./ProjectCard";
import { ProjectFilters, type ProjectFilter } from "./ProjectFilters";
import type { Project } from "@/seed/types";
import { cn } from "@/lib/utils/cn";

type Props = {
  projects: Project[];
  locale: "es" | "en";
  labels: {
    filters: {
      all: string;
      client: string;
      freelance: string;
    };
    badge: {
      client: string;
      freelance: string;
      private: string;
    };
    empty: string;
  };
};

export function ProjectGrid({ projects, locale, labels }: Props) {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const counts = useMemo(
    () => ({
      all: projects.length,
      client: projects.filter((p) => p.clientType === "client").length,
      freelance: projects.filter((p) => p.clientType === "freelance").length,
    }),
    [projects],
  );

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.clientType === filter);
  }, [filter, projects]);

  // Grid adaptable según cantidad
  const gridCols = cn(
    "grid gap-6",
    filtered.length === 1 && "grid-cols-1 max-w-md mx-auto",
    filtered.length === 2 && "grid-cols-1 sm:grid-cols-2",
    filtered.length >= 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  );

  return (
    <div className="space-y-10">
      <div className="flex justify-center">
        <ProjectFilters
          active={filter}
          onChange={setFilter}
          labels={labels.filters}
          counts={counts}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-16 text-center">
          <p className="text-sm text-text-muted">{labels.empty}</p>
        </div>
      ) : (
        <div className={gridCols}>
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              locale={locale}
              index={i}
              labels={labels.badge}
            />
          ))}
        </div>
      )}
    </div>
  );
}