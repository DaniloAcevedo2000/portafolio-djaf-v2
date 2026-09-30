// src/seed/expertise.ts
import type { ExpertiseArea } from "./types";

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: "data-engineering",
    title: {
      es: "Data Engineering & BI",
      en: "Data Engineering & BI",
    },
    description: {
      es: "Diseño pipelines ETL, modelo datos y construyo reportes y dashboards que convierten información cruda en decisiones de negocio.",
      en: "I design ETL pipelines, model data, and build reports and dashboards that turn raw information into business decisions.",
    },
    icon: "Database",
    metrics: [
      {
        value: "4",
        label: { es: "Años exp.", en: "Years exp." },
      },
      {
        value: "3",
        label: { es: "Roles", en: "Roles" },
      },
      {
        value: "15+",
        label: { es: "Tecnologías", en: "Technologies" },
      },
    ],
    relatedExperiences: [
      "banpro-data-engineer",
      "claro-financial-specialist",
      "claro-commission-analyst",
    ],
    technologies: [
      "SQL Server",
      "ETL",
      "SSRS",
      "SSAS",
      "Power BI",
      "SAP",
    ],
    cta: {
      label: { es: "Ver timeline completa", en: "View full timeline" },
      href: "/timeline",
    },
  },
  {
    id: "full-stack",
    title: {
      es: "Full Stack Development",
      en: "Full Stack Development",
    },
    description: {
      es: "Construyo aplicaciones web end-to-end con React, Next.js y TypeScript, o con .NET cuando el entorno lo requiere, priorizando código limpio y buenas prácticas.",
      en: "I build end-to-end web applications with React, Next.js, and TypeScript — or .NET when the environment requires it — prioritizing clean code and best practices.",
    },
    icon: "Code2",
    metrics: [
      {
        value: "3",
        label: { es: "Proyectos", en: "Projects" },
      },
      {
        value: "2",
        label: { es: "Dominios", en: "Domains" },
      },
      {
        value: "15+",
        label: { es: "Tecnologías", en: "Technologies" },
      },
    ],
    relatedProjects: [
      "activos-fijos",
      "portal-dashboards",
      "helpdesk",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      ".NET",
      "Prisma",
      "Auth0",
    ],
    cta: {
      label: { es: "Ver proyectos", en: "View projects" },
      href: "#projects",
    },
  },
  {
    id: "mobile",
    title: {
      es: "Mobile Development",
      en: "Mobile Development",
    },
    description: {
      es: "Desarrollo aplicaciones móviles multiplataforma con React Native y Expo, con backend propio cuando el proyecto lo necesita.",
      en: "I develop cross-platform mobile applications with React Native and Expo, with custom backend when the project requires it.",
    },
    icon: "Smartphone",
    metrics: [
      {
        value: "2",
        label: { es: "Proyectos", en: "Projects" },
      },
      {
        value: "1",
        label: { es: "Dominio", en: "Domain" },
      },
      {
        value: "6",
        label: { es: "Tecnologías", en: "Technologies" },
      },
    ],
    relatedProjects: [
      "momoto-cafe",
      "barberia",
    ],
    technologies: [
      "React Native",
      "Expo",
      "SQLite",
      "Prisma",
      "SQL Server",
    ],
  },
];