// src/lib/repositories/services.repository.ts
import { services as seedServices } from "@/seed";
import type { Service } from "@/seed/types";

export async function getServices(): Promise<Service[]> {
  return seedServices;
}