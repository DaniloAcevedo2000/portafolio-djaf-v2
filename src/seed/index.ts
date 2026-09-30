// src/seed/index.ts
// Punto único de acceso a los datos del portafolio.
// En Fase 2, este archivo será reemplazado por consultas a Prisma/MongoDB.

export type * from "./types";
export { profile } from "./profile";
export { experience } from "./experience";
export { projects } from "./projects";
export { skillCategories } from "./skills";
export { education, certifications } from "./education";
export { expertiseAreas } from "./expertise";
export { services } from "./services"; 