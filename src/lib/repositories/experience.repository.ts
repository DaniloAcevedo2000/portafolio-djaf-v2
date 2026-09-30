// src/lib/repositories/experience.repository.ts
import { experience as seedExperience } from "@/seed";
import type { Experience } from "@/seed/types";

/**
 * Obtiene todas las experiencias laborales, ordenadas por fecha descendente.
 */
export async function getExperience(): Promise<Experience[]> {
  return [...seedExperience].sort((a, b) =>
    b.startDate.localeCompare(a.startDate),
  );
}

/**
 * Obtiene la experiencia actual (current: true).
 */
export async function getCurrentExperience(): Promise<Experience | null> {
  return seedExperience.find((e) => e.current) ?? null;
}