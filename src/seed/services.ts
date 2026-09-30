// src/seed/services.ts
import type { Service } from "./types";

export const services: Service[] = [
  {
    id: "data-engineering",
    category: {
      es: "Data Engineering & BI",
      en: "Data Engineering & BI",
    },
    title: {
      es: "Datos que generan decisiones",
      en: "Data that drives decisions",
    },
    description: {
      es: "Diseño pipelines ETL, modelo datos y construyo reportes y dashboards que convierten información cruda en decisiones de negocio.",
      en: "I design ETL pipelines, model data, and build reports and dashboards that turn raw information into business decisions.",
    },
    iconKey: "Database",
    capabilities: {
      es: [
        "ETL y pipelines de datos",
        "Dashboards en Power BI",
        "Modelado y optimización SQL",
        "Automatización con SQL Server Agent",
      ],
      en: [
        "ETL and data pipelines",
        "Power BI dashboards",
        "SQL modeling and optimization",
        "SQL Server Agent automation",
      ],
    },
  },
  {
    id: "full-stack",
    category: {
      es: "Full Stack Development",
      en: "Full Stack Development",
    },
    title: {
      es: "Aplicaciones web a medida",
      en: "Custom web applications",
    },
    description: {
      es: "Construyo aplicaciones web modernas con React y Next.js, o con .NET cuando el entorno lo requiere, priorizando código limpio y buenas prácticas.",
      en: "I build modern web applications with React and Next.js — or .NET when the environment requires it — prioritizing clean code and best practices.",
    },
    iconKey: "Code2",
    capabilities: {
      es: [
        "Aplicaciones SPA y SSR",
        "APIs REST y autenticación",
        "Integración con bases de datos",
        "Buenas prácticas de seguridad",
      ],
      en: [
        "SPA and SSR applications",
        "REST APIs and authentication",
        "Database integration",
        "Security best practices",
      ],
    },
  },
  {
    id: "mobile",
    category: {
      es: "Mobile Development",
      en: "Mobile Development",
    },
    title: {
      es: "Apps móviles multiplataforma",
      en: "Cross-platform mobile apps",
    },
    description: {
      es: "Desarrollo aplicaciones móviles con React Native y Expo, con backend propio cuando el proyecto lo necesita.",
      en: "I develop mobile applications with React Native and Expo, with custom backend when the project requires it.",
    },
    iconKey: "Smartphone",
    capabilities: {
      es: [
        "iOS y Android desde una base",
        "Backend integrado (REST)",
        "Almacenamiento local (SQLite)",
        "Interfaz moderna y responsive",
      ],
      en: [
        "iOS and Android from one base",
        "Integrated backend (REST)",
        "Local storage (SQLite)",
        "Modern, responsive interface",
      ],
    },
  },
  {
    id: "consulting",
    category: {
      es: "Consulting & Tech Leadership",
      en: "Consulting & Tech Leadership",
    },
    title: {
      es: "Asesoría técnica y mentoría",
      en: "Technical consulting & mentoring",
    },
    description: {
      es: "Asesoro equipos en arquitectura de datos, optimización de bases de datos y buenas prácticas de desarrollo y seguridad.",
      en: "I advise teams on data architecture, database optimization, and best practices for development and security.",
    },
    iconKey: "Sparkles",
    capabilities: {
      es: [
        "Arquitectura de datos",
        "Optimización de rendimiento",
        "Code review y buenas prácticas",
        "Mentoría técnica",
      ],
      en: [
        "Data architecture",
        "Performance optimization",
        "Code review and best practices",
        "Technical mentoring",
      ],
    },
  },
];