// src/seed/experience.ts
import type { Experience } from "./types";

export const experience: Experience[] = [
  {
    id: "banpro-data-engineer",
    company: "Banpro",
    role: { es: "Ingeniero de Datos", en: "Data Engineer" },
    location: { es: "Managua, Nicaragua", en: "Managua, Nicaragua" },
    startDate: "2026-05",
    endDate: null,
    current: true,
    summary: {
      es: "Soluciones ETL, SSRS y SSAS para banca, con automatización de procesos y optimización de SQL Server.",
      en: "ETL, SSRS, and SSAS solutions for banking, with process automation and SQL Server optimization.",
    },
    highlights: {
      es: [
        "Desarrollo de soluciones de Data Engineering y Business Intelligence (ETL, SSRS, SSAS) para atender requerimientos de información y generar reportes orientados al negocio.",
        "Diseño y automatización de procesos de carga y actualización de datos mediante SQL Server Agent Jobs y mecanismos de control de información histórica.",
        "Optimización y administración de soluciones en SQL Server: análisis de consultas, procedimientos, índices, vistas y particionamiento de tablas.",
        "Gestión de requerimientos y desarrollo mediante Azure DevOps y metodología Scrum, participando en la evolución de la arquitectura de datos hacia tecnologías cloud.",
      ],
      en: [
        "Development of Data Engineering and Business Intelligence solutions (ETL, SSRS, SSAS) to fulfill information requirements and generate business-oriented reports.",
        "Design and automation of data loading and updating processes through SQL Server Agent Jobs and historical data control mechanisms.",
        "Optimization and administration of SQL Server solutions: query analysis, stored procedures, indexes, views, and table partitioning.",
        "Requirements management and development using Azure DevOps and Scrum methodology, contributing to the evolution of data architecture towards cloud technologies.",
      ],
    },
    technologies: ["SQL Server", "SSIS", "SSRS", "SSAS", "Azure DevOps", "Scrum"],
  },
  {
    id: "claro-financial-specialist",
    company: "Claro Nicaragua",
    role: { es: "Especialista Financiero A", en: "Financial Specialist A" },
    location: { es: "Managua, Nicaragua", en: "Managua, Nicaragua" },
    startDate: "2025-04",
    endDate: "2026-05",
    current: false,
    summary: {
      es: "Proyecciones financieras, análisis desde SAP y dashboards en Power BI para el área financiera.",
      en: "Financial projections, SAP analysis, and Power BI dashboards for the financial area.",
    },
    highlights: {
      es: [
        "Elaboración de proyecciones financieras a partir del análisis de datos históricos.",
        "Descarga, análisis y seguimiento de reportes financieros desde SAP.",
        "Automatización de procesos para reducir tareas manuales y mejorar la eficiencia del trabajo diario.",
        "Administración de bases de datos en SQL Server, Oracle y PostgreSQL.",
        "Diseño de dashboards en Power BI para visualizar indicadores clave.",
      ],
      en: [
        "Preparation of financial projections based on historical data analysis.",
        "Download, analysis, and tracking of financial reports from SAP.",
        "Process automation to reduce manual tasks and improve daily work efficiency.",
        "Database administration on SQL Server, Oracle, and PostgreSQL.",
        "Power BI dashboard design to visualize key indicators.",
      ],
    },
    technologies: ["SQL Server", "Oracle", "PostgreSQL", "SAP", "Power BI"],
  },
  {
    id: "claro-commission-analyst",
    company: "Claro Nicaragua",
    role: {
      es: "Analista de Comisiones e Indicadores",
      en: "Commission & KPI Analyst",
    },
    location: { es: "Managua, Nicaragua", en: "Managua, Nicaragua" },
    startDate: "2022-10",
    endDate: "2025-04",
    current: false,
    summary: {
      es: "Procesos ETL, administración de BD (SQL Server, Oracle, MySQL) y desarrollo en PHP y .NET.",
      en: "ETL processes, DB administration (SQL Server, Oracle, MySQL), and PHP/.NET development.",
    },
    highlights: {
      es: [
        "Administración de bases de datos en SQL Server, Oracle y MySQL, incluyendo optimización de consultas.",
        "Desarrollo, actualización, despliegue y mantenimiento de sistemas en PHP y .NET según requerimientos del negocio.",
        "Diseño de bases de datos y modelado ER utilizando Case Studio 2 y UML.",
        "Creación de procesos ETL para consolidación y transformación de datos desde múltiples fuentes.",
        "Cálculo, validación y análisis de comisiones del personal interno.",
      ],
      en: [
        "Database administration on SQL Server, Oracle, and MySQL, including query optimization.",
        "Development, updating, deployment, and maintenance of systems in PHP and .NET according to business requirements.",
        "Database design and ER modeling using Case Studio 2 and UML.",
        "Creation of ETL processes for consolidating and transforming data from multiple sources.",
        "Calculation, validation, and analysis of internal staff commissions.",
      ],
    },
    technologies: ["SQL Server", "Oracle", "MySQL", "PHP", ".NET", "ETL"],
  },
];