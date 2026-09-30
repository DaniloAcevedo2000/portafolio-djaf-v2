// src/components/ui/SkillIcon.tsx
"use client";

import * as SiIcons from "react-icons/si";
import * as LuIcons from "lucide-react";
import type { IconType } from "react-icons";

import { cn } from "@/lib/utils/cn";

/**
 * Diccionario de iconos de lucide que usamos como fallback.
 * Si una skill no tiene icono en Simple Icons, se busca aquí.
 */
const lucideMap: Record<string, IconType> = {
  Code2: LuIcons.Code2,
  Server: LuIcons.Server,
  Key: LuIcons.Key,
  Database: LuIcons.Database,
  Workflow: LuIcons.Workflow,
  BarChart3: LuIcons.BarChart3,
  FileBarChart: LuIcons.FileBarChart,
  Wrench: LuIcons.Wrench,
  Layout: LuIcons.Layout,
};

type SkillIconProps = {
  iconKey: string;
  color?: string;
  className?: string;
};

export function SkillIcon({ iconKey, color, className }: SkillIconProps) {
  // 1) Intentar Simple Icons (react-icons/si)
  const SiIcon = (SiIcons as unknown as Record<string, IconType>)[iconKey];

  if (SiIcon) {
    return (
      <SiIcon
        className={cn("h-6 w-6 shrink-0", className)}
        style={color ? { color } : undefined}
        aria-hidden
      />
    );
  }

  // 2) Fallback a lucide
  const LuIcon = lucideMap[iconKey];

  if (LuIcon) {
    const LucideComp = LuIcon as React.ComponentType<{ className?: string }>;
    return (
      <LucideComp
        className={cn("h-6 w-6 shrink-0", className)}
      />
    );
  }

  // 3) Último fallback: primer carácter
  return (
    <span
      className={cn(
        "flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10",
        "text-xs font-bold text-primary",
        className,
      )}
      aria-hidden
    >
      {iconKey.slice(0, 1)}
    </span>
  );
}