// src/lib/repositories/education.repository.ts
import { education as seedEducation } from "@/seed";
import type { Education } from "@/seed/types";

export async function getEducation(): Promise<Education[]> {
  return [...seedEducation].sort((a, b) =>
    b.startDate.localeCompare(a.startDate),
  );
}