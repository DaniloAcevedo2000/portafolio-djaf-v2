// src/lib/repositories/expertise.repository.ts
import { expertiseAreas as seedAreas } from "@/seed";
import type { ExpertiseArea } from "@/seed/types";

/**
 * Obtiene las áreas de especialidad del portafolio.
 * En Fase 1: viene del seed local.
 * En Fase 2: `return await prisma.expertiseArea.findMany()`.
 */
export async function getExpertiseAreas(): Promise<ExpertiseArea[]> {
  return seedAreas;
}

/**
 * Obtiene una sola área por su id.
 */
export async function getExpertiseArea(
  id: string,
): Promise<ExpertiseArea | null> {
  return seedAreas.find((area) => area.id === id) ?? null;
}