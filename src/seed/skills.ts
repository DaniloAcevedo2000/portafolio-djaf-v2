// src/seed/skills.ts
import type { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  // ═════════════════════════════════════════
  // LENGUAJES
  // ═════════════════════════════════════════
  {
    id: "languages",
    name: { es: "Lenguajes", en: "Languages" },
    description: {
      es: "Lenguajes de programación que uso en producción, desde backend hasta scripting.",
      en: "Programming languages I use in production, from backend to scripting.",
    },
    iconKey: "Code2",
    skills: [
      { name: "TypeScript", iconKey: "SiTypescript", color: "#3178C6" },
      { name: "JavaScript", iconKey: "SiJavascript", color: "#F7DF1E" },
      { name: "C#", iconKey: "SiCsharp", color: "#239120" },
      { name: "Python", iconKey: "SiPython", color: "#3776AB" },
      { name: "PHP", iconKey: "SiPhp", color: "#777BB4" },
      { name: "VB.NET", iconKey: "SiDotnet", color: "#512BD4" },
    ],
  },

  // ═════════════════════════════════════════
  // FRONTEND
  // ═════════════════════════════════════════
  {
    id: "frontend",
    name: { es: "Frontend", en: "Frontend" },
    description: {
      es: "Aplicaciones React y Next.js en producción a escala, desde dashboards internos hasta plataformas corporativas.",
      en: "React and Next.js applications in production at scale, from internal dashboards to enterprise platforms.",
    },
    iconKey: "Layout",
    skills: [
      { name: "React", iconKey: "SiReact", color: "#61DAFB" },
      { name: "Next.js", iconKey: "SiNextdotjs", color: "#000000" },
      { name: "React Native", iconKey: "SiReact", color: "#61DAFB" },
      { name: "Tailwind CSS", iconKey: "SiTailwindcss", color: "#06B6D4" },
      { name: "HTML5", iconKey: "SiHtml5", color: "#E34F26" },
      { name: "CSS3", iconKey: "SiCss3", color: "#1572B6" },
      { name: "Bootstrap", iconKey: "SiBootstrap", color: "#7952B3" },
      { name: "Expo", iconKey: "SiExpo", color: "#000020" },
    ],
  },

  // ═════════════════════════════════════════
  // BACKEND
  // ═════════════════════════════════════════
  {
    id: "backend",
    name: { es: "Backend", en: "Backend" },
    description: {
      es: "APIs REST, autenticación y lógica de negocio con .NET, Node.js, Prisma y soluciones de identidad.",
      en: "REST APIs, authentication, and business logic with .NET, Node.js, Prisma, and identity solutions.",
    },
    iconKey: "Server",
    skills: [
      { name: ".NET", iconKey: "SiDotnet", color: "#512BD4" },
      { name: "Node.js", iconKey: "SiNodedotjs", color: "#339933" },
      { name: "Prisma ORM", iconKey: "SiPrisma", color: "#2D3748" },
      { name: "NextAuth", iconKey: "SiAuth0", color: "#EB5424" },
      { name: "Auth0", iconKey: "SiAuth0", color: "#EB5424" },
      { name: "REST APIs", iconKey: "Server", color: "#6366f1" },
      { name: "JWT", iconKey: "Key", color: "#000000" },
    ],
  },

  // ═════════════════════════════════════════
  // BASES DE DATOS
  // ═════════════════════════════════════════
  {
    id: "databases",
    name: { es: "Bases de Datos", en: "Databases" },
    description: {
      es: "Diseño, optimización y administración de bases de datos relacionales en entornos corporativos.",
      en: "Design, optimization, and administration of relational databases in enterprise environments.",
    },
    iconKey: "Database",
    skills: [
      { name: "SQL Server", iconKey: "SiMicrosoftsqlserver", color: "#CC2927" },
      { name: "PostgreSQL", iconKey: "SiPostgresql", color: "#4169E1" },
      { name: "MySQL", iconKey: "SiMysql", color: "#4479A1" },
      { name: "Oracle", iconKey: "SiOracle", color: "#F80000" },
      { name: "SQLite", iconKey: "SiSqlite", color: "#003B57" },
    ],
  },

  // ═════════════════════════════════════════
  // DATA ENGINEERING & BI
  // ═════════════════════════════════════════
  {
    id: "data-bi",
    name: { es: "Data & BI", en: "Data & BI" },
    description: {
      es: "Pipelines ETL, reportes y dashboards que convierten datos crudos en decisiones de negocio.",
      en: "ETL pipelines, reports, and dashboards that turn raw data into business decisions.",
    },
    iconKey: "BarChart3",
    skills: [
      { name: "ETL", iconKey: "Workflow", color: "#6366f1" },
      { name: "SSIS", iconKey: "SiMicrosoftsqlserver", color: "#CC2927" },
      { name: "SSRS", iconKey: "FileBarChart", color: "#CC2927" },
      { name: "SSAS", iconKey: "BarChart3", color: "#CC2927" },
      { name: "Power BI", iconKey: "SiPowerbi", color: "#F2C811" },
      { name: "SAP", iconKey: "SiSap", color: "#0FAAFF" },
      { name: "Data Warehouse", iconKey: "Database", color: "#6366f1" },
    ],
  },

  // ═════════════════════════════════════════
  // HERRAMIENTAS
  // ═════════════════════════════════════════
  {
    id: "tools",
    name: { es: "Herramientas", en: "Tools" },
    description: {
      es: "Herramientas del día a día que mantienen el trabajo rápido, ordenado y de calidad.",
      en: "Day-to-day tools that keep work fast, organized, and high-quality.",
    },
    iconKey: "Wrench",
    skills: [
      { name: "Git", iconKey: "SiGit", color: "#F05032" },
      { name: "GitHub", iconKey: "SiGithub", color: "#181717" },
      { name: "Azure DevOps", iconKey: "SiAzuredevops", color: "#0078D7" },
      { name: "VS Code", iconKey: "SiVisualstudiocode", color: "#007ACC" },
      { name: "Visual Studio", iconKey: "SiVisualstudio", color: "#5C2D91" },
      { name: "Postman", iconKey: "SiPostman", color: "#FF6C37" },
      { name: "DBeaver", iconKey: "SiDbeaver", color: "#382923" },
      { name: "Scrum", iconKey: "SiScrumalliance", color: "#009FDA" },
    ],
  },
];