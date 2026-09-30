// src/components/ui/SkillPill.tsx
import type { Skill } from "@/seed/types";
import { cn } from "@/lib/utils/cn";

import { SkillIcon } from "./SkillIcon";

type SkillPillProps = {
  skill: Skill;
  className?: string;
};

export function SkillPill({ skill, className }: SkillPillProps) {
  return (
    <div
      className={cn(
        "group flex items-center gap-3 rounded-2xl border border-border bg-bg-elevated/60 px-4 py-3",
        "transition-all duration-200",
        "hover:border-primary/40 hover:bg-bg-elevated hover:shadow-md hover:shadow-primary/5",
        className,
      )}
    >
      <SkillIcon iconKey={skill.iconKey} color={skill.color} />
      <span className="text-sm font-medium text-text">{skill.name}</span>
    </div>
  );
}