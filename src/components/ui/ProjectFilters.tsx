// src/components/ui/ProjectFilters.tsx
"use client";

import { Briefcase, Eye, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils/cn";

export type ProjectFilter = "all" | "client" | "freelance";

type Props = {
  active: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
  labels: {
    all: string;
    client: string;
    freelance: string;
  };
  counts: {
    all: number;
    client: number;
    freelance: number;
  };
};

const filters: { value: ProjectFilter; icon: typeof Eye }[] = [
  { value: "all", icon: Eye },
  { value: "client", icon: Briefcase },
  { value: "freelance", icon: Sparkles },
];

export function ProjectFilters({
  active,
  onChange,
  labels,
  counts,
}: Props) {
  return (
    <div
      role="tablist"
      aria-label="Project filters"
      className="inline-flex flex-wrap items-center gap-1 rounded-full border border-border bg-bg-elevated p-1.5"
    >
      {filters.map(({ value, icon: Icon }) => {
        const isActive = active === value;
        const label = labels[value];
        const count = counts[value];

        return (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(value)}
            className={cn(
              "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all",
              isActive
                ? "bg-primary/10 text-primary"
                : "text-text-muted hover:bg-bg-subtle hover:text-text",
            )}
          >
            <Icon className="h-3.5 w-3.5" />
            <span>{label}</span>
            <span
              className={cn(
                "rounded-full px-1.5 py-0.5 font-mono text-[10px]",
                isActive
                  ? "bg-primary/20 text-primary"
                  : "bg-bg-subtle text-text-muted",
              )}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}