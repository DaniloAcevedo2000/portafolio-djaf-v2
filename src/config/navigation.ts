// src/config/navigation.ts
import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Calendar,
  GraduationCap,
  Home,
  Mail,
  Rocket,
  User,
  Wrench,
} from "lucide-react";

// ─────────────────────────────────────────────
// Tipos
// ─────────────────────────────────────────────
export type LocalizedString = { es: string; en: string };

export type NavSubItem = {
  id: string;
  label: LocalizedString;
  description: LocalizedString;
  href: string;
  icon: LucideIcon;
};

export type NavGroup = {
  id: string;
  label: LocalizedString;
  description: LocalizedString;
  items: NavSubItem[];
  ctas: {
    primary: { label: LocalizedString; href: string; icon?: LucideIcon };  
    secondary?: { label: LocalizedString; href: string; icon?: LucideIcon };
    footnote?: LocalizedString;
  };
};

export type NavItem =
  | {
      id: string;
      type: "link";
      label: LocalizedString;
      href: string;
      icon?: LucideIcon;
    }
  | {
      id: string;
      type: "dropdown";
      label: LocalizedString;
      href: string;
      group: NavGroup;
    };

// ─────────────────────────────────────────────
// Navegación
// ─────────────────────────────────────────────
export const navigation: NavItem[] = [
  {
    id: "home",
    type: "link",
    label: { es: "Inicio", en: "Home" },
    href: "#top",
    icon: Home,
  },
  {
    id: "about",
    type: "dropdown",
    label: { es: "Sobre mí", en: "About" },
    href: "#about",
    group: {
      id: "about-group",
      label: { es: "Sobre mí", en: "About me" },
      description: {
        es: "Mi trayectoria, experiencia y formación técnica.",
        en: "My journey, experience, and technical background.",
      },
      items: [
        {
          id: "about-me",
          label: { es: "Acerca de mí", en: "About me" },
          description: {
            es: "Quién soy, mi filosofía y enfoque profesional.",
            en: "Who I am, my philosophy and professional approach.",
          },
          href: "#about",
          icon: User,
        },
        {
          id: "experience",
          label: { es: "Experiencia", en: "Experience" },
          description: {
            es: "Historial laboral en banca y telecomunicaciones.",
            en: "Work history in banking and telecommunications.",
          },
          href: "#experience",
          icon: Briefcase,
        },
        {
          id: "education",
          label: { es: "Educación", en: "Education" },
          description: {
            es: "Formación académica y certificaciones.",
            en: "Academic background and certifications.",
          },
          href: "#education",
          icon: GraduationCap,
        },
      ],
      ctas: {
        primary: {
          label: { es: "Contáctame", en: "Contact me" },
          href: "#contact",
        },
        secondary: {
          label: { es: "Descargar CV", en: "Download CV" },
          href: "/cv/danilo-acevedo-cv-es.pdf",
          icon: Calendar,
        },
        footnote: {
          es: "Respuesta en menos de 24 h · Disponible para nuevas oportunidades",
          en: "Response within 24 h · Available for new opportunities",
        },
      },
    },
  },
  {
    id: "portfolio",
    type: "dropdown",
    label: { es: "Portafolio", en: "Portfolio" },
    href: "#projects",
    group: {
      id: "portfolio-group",
      label: { es: "Portafolio", en: "Portfolio" },
      description: {
        es: "Lo que he construido y las herramientas que uso.",
        en: "What I've built and the tools I use.",
      },
      items: [
        {
          id: "projects",
          label: { es: "Proyectos", en: "Projects" },
          description: {
            es: "Proyectos profesionales y personales destacados.",
            en: "Featured professional and personal projects.",
          },
          href: "#projects",
          icon: Rocket,
        },
        {
          id: "skills",
          label: { es: "Habilidades", en: "Skills" },
          description: {
            es: "Stack técnico completo y herramientas del día a día.",
            en: "Complete technical stack and daily tools.",
          },
          href: "#skills",
          icon: Wrench,
        },
      ],
      ctas: {
        primary: {
          label: { es: "Contáctame", en: "Contact me" },
          href: "#contact",
        },
        secondary: {
          label: { es: "Ver todos", en: "View all" },
          href: "#projects",
          icon: Rocket,
        },
        footnote: {
          es: "Proyectos en banca, telecomunicaciones y desarrollo independiente",
          en: "Projects in banking, telecommunications, and independent development",
        },
      },
    },
  },
  {
    id: "contact",
    type: "link",
    label: { es: "Contacto", en: "Contact" },
    href: "#contact",
    icon: Mail,
  },
];