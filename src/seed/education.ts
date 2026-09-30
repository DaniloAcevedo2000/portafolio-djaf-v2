// src/seed/education.ts
import type { Education, Certification } from "./types";

export const education: Education[] = [
  {
    id: "uni-computer-engineering",
    institution: "Universidad Nacional de Ingeniería (UNI)",
    degree: {
      es: "Ingeniería en Computación",
      en: "Computer Engineering",
    },
    location: {
      es: "Managua, Nicaragua",
      en: "Managua, Nicaragua",
    },
    startDate: "2017-02",
    endDate: "2022-11",
  },
];

export const certifications: Certification[] = [
  {
    id: "fabric-analytics",
    name: {
      es: "DP-600T00 Microsoft Fabric Analytics Engineer",
      en: "DP-600T00 Microsoft Fabric Analytics Engineer",
    },
    issuer: "TECNASA",
    year: "2026",
  },
  {
    id: "scrum-azure",
    name: {
      es: "Capacitación Scrum – Azure DevOps",
      en: "Scrum Training – Azure DevOps",
    },
    issuer: "BANPRO",
    year: "2026",
  },
  {
    id: "advanced-analytics",
    name: {
      es: "Analítica Avanzada con Power BI, R y Python",
      en: "Advanced Analytics with Power BI, R and Python",
    },
    issuer: "Universidad Nacional de Ingeniería (UNI)",
    year: "2024",
  },
];