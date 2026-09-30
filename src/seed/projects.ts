// src/seed/projects.ts
import type { Project } from "./types";

export const projects: Project[] = [
  // ═══════════════ CLIENT WORK ═══════════════
  {
    id: "kpi-helpdesk",
    title: {
      es: "KPI HelpDesk — Dashboard Power BI",
      en: "KPI HelpDesk — Power BI Dashboard",
    },
    description: {
      es: "Dashboard interactivo de Power BI que visualiza la productividad de los agentes de HelpDesk, identifica canales con mayor reincidencia y hace seguimiento del ciclo de vida de los tickets.",
      en: "Interactive Power BI dashboard that visualizes HelpDesk agent productivity, identifies channels with highest recurrence, and tracks the ticket lifecycle.",
    },
    clientType: "client",
    kind: "dashboard",
    company: "Claro Nicaragua",
    year: "2024",
    technologies: ["Power BI", "SQL Server", "DAX"],
    highlight: {
      es: "Dashboard de KPIs para monitorear productividad, reincidencias y SLA de más de 34,000 tickets al año.",
      en: "KPI dashboard to monitor productivity, recurrence, and SLA across 34,000+ tickets per year.",
    },
    images: [
      "/images/projects/kpi-helpdesk-1.png",
      "/images/projects/kpi-helpdesk-2.png",
    ],
    isPrivate: true,
  },
  {
    id: "sistema-control-ventas",
    title: {
      es: "Sistema de Control de Ventas",
      en: "Sales Control System",
    },
    description: {
      es: "Aplicación web empresarial para registrar y validar ventas, con módulos de reportes, gestión de usuarios, roles, permisos y administración de catálogos. Incluye encriptación de contraseñas.",
      en: "Enterprise web application to register and validate sales, with reports, user management, roles, permissions, and catalog administration modules. Includes password encryption.",
    },
    clientType: "client",
    kind: "web-app",
    company: "Claro Nicaragua",
    year: "2023",
    technologies: ["PHP", "MySQL", "AJAX", "JavaScript", "HTML", "Bootstrap"],
    highlight: {
      es: "Sistema web con autenticación, control de accesos por roles (RBAC) y auditoría completa de operaciones de venta.",
      en: "Web system with authentication, role-based access control (RBAC), and full audit of sales operations.",
    },
    images: ["/images/projects/sistema-ventas-1.png"],
    isPrivate: true,
  },
  {
    id: "excepciones-ventas",
    title: {
      es: "Sistema de Excepciones de Ventas",
      en: "Sales Exceptions System",
    },
    description: {
      es: "Aplicación web en .NET C# para el control de excepciones en ventas, con ingreso de datos, generación de archivos PDF, seguimiento por usuario y gestión por roles y permisos.",
      en: "Web application built with .NET C# to manage sales exceptions, with data entry, PDF generation, per-user tracking, and role-based permissions.",
    },
    clientType: "client",
    kind: "web-app",
    company: "Claro Nicaragua",
    year: "2023",
    technologies: [".NET", "C#", "SQL Server"],
    highlight: {
      es: "Generación automatizada de reportes PDF y trazabilidad completa de excepciones por usuario.",
      en: "Automated PDF report generation and full traceability of exceptions per user.",
    },
    images: ["/images/projects/excepciones-ventas-1.png"],
    isPrivate: true,
  },
  {
    id: "portal-indicadores",
    title: {
      es: "Portal Centralizador de Indicadores",
      en: "Centralized Indicators Portal",
    },
    description: {
      es: "Plataforma web para la gestión y visualización centralizada de dashboards de Power BI, con un modelo de seguridad RBAC que restringe accesos por perfiles y áreas.",
      en: "Web platform for centralized management and visualization of Power BI dashboards, with an RBAC security model restricting access by profiles and areas.",
    },
    clientType: "client",
    kind: "web-app",
    company: "Claro Nicaragua",
    year: "2024",
    technologies: ["React", "Power BI", "Prisma", "JWT", "SQL Server"],
    highlight: {
      es: "Plataforma que eliminó la dispersión de información corporativa con control de acceso RBAC por perfil y área.",
      en: "Platform that eliminated corporate information dispersion with RBAC access control by profile and area.",
    },
    isPrivate: true,
  },
  {
    id: "activos-fijos",
    title: {
      es: "Sistema Web de Activos Fijos",
      en: "Fixed Assets Web System",
    },
    description: {
      es: "Aplicación web empresarial para la gestión de activos fijos mediante solicitudes de colaboradores, con reportes, notificaciones automáticas y control de accesos por roles.",
      en: "Enterprise web application for fixed asset management through employee requests, with reports, automatic notifications, and role-based access control.",
    },
    clientType: "client",
    kind: "web-app",
    company: "Claro Nicaragua",
    year: "2024",
    technologies: [".NET", "C#", "Bootstrap", "SQL Server", "JWT", "Entity Framework"],
    highlight: {
      es: "Centralización completa del inventario de activos fijos, eliminando procesos manuales y garantizando su disponibilidad.",
      en: "Full centralization of fixed asset inventory, eliminating manual processes and ensuring availability.",
    },
    isPrivate: true,
  },

  // ═══════════════ FREELANCE ═══════════════
  {
    id: "momoto-cafe",
    title: {
      es: "Momoto Café — App Móvil",
      en: "Momoto Café — Mobile App",
    },
    description: {
      es: "Aplicación móvil para gestión y control de ventas de cafetería: registro de productos, ventas, dashboards de ingresos y una interfaz moderna y responsive.",
      en: "Mobile application for cafeteria sales management: product registration, sales, revenue dashboards, and a modern, responsive interface.",
    },
    clientType: "freelance",
    kind: "mobile-app",
    year: "2024",
    technologies: ["TypeScript", "React Native", "Expo", "SQLite"],
    highlight: {
      es: "App móvil end-to-end para gestión de cafetería, con control de inventario y dashboard de ventas en tiempo real.",
      en: "End-to-end mobile app for café management, with inventory control and real-time sales dashboard.",
    },
    images: [
      "/images/projects/momoto-cafe-1.jpeg",
      "/images/projects/momoto-cafe-2.jpeg",
      "/images/projects/momoto-cafe-3.jpeg",
      "/images/projects/momoto-cafe-4.jpeg",
    ],
    isPrivate: true,
  },
  {
    id: "barberia",
    title: {
      es: "Sistema para Barbería — App Móvil + API",
      en: "Barbershop System — Mobile App + API",
    },
    description: {
      es: "Solución full-stack compuesta por aplicación móvil y API REST. Backend con TypeScript, Prisma ORM y SQL Server, con autenticación, autorización, protección de rutas y manejo de tokens.",
      en: "Full-stack solution composed of a mobile app and a REST API. Backend with TypeScript, Prisma ORM, and SQL Server, with authentication, authorization, route protection, and token handling.",
    },
    clientType: "freelance",
    kind: "mobile-app",
    year: "2024",
    technologies: ["TypeScript", "React Native", "API REST", "Prisma", "SQL Server", "NextAuth", "Auth0"],
    highlight: {
      es: "Solución full-stack (app móvil + API) con autenticación segura, protección de rutas y manejo de tokens.",
      en: "Full-stack solution (mobile app + API) with secure authentication, route protection, and token handling.",
    },
    isPrivate: true,
  },
];