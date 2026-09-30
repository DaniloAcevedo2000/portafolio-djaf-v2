// src/lib/repositories/projects.repository.ts
import { projects as seedProjects } from "@/seed";
import type { Project } from "@/seed/types";

export async function getProjects(): Promise<Project[]> {
  return seedProjects;
}

export async function getProjectsByType(
  type: Project["type"],
): Promise<Project[]> {
  return seedProjects.filter((p) => p.type === type);
}