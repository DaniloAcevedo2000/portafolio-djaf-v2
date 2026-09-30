// src/lib/repositories/skills.repository.ts
import { skillCategories as seedCategories } from "@/seed";
import type { SkillCategory } from "@/seed/types";

export async function getSkillCategories(): Promise<SkillCategory[]> {
  return seedCategories;
}