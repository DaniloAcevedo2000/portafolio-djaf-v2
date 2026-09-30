// src/lib/repositories/profile.repository.ts
import { profile as seedProfile } from "@/seed";
import type { Profile } from "@/seed/types";

/**
 * Obtiene el perfil del portafolio.
 * En Fase 1: viene del seed local.
 * En Fase 2: `return await prisma.profile.findFirst()`.
 */
export async function getProfile(): Promise<Profile> {
  return seedProfile;
}