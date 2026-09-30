// src/lib/repositories/projects.repository.ts
import { projects as seedProjects } from "@/seed";
import type { Project, ProjectClientType } from "@/seed/types";

export async function getProjects(): Promise<Project[]> {
  return seedProjects;
}

export async function getProjectsByClientType(
  clientType: ProjectClientType,
): Promise<Project[]> {
  return seedProjects.filter((p) => p.clientType === clientType);
}