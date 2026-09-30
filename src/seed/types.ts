// src/seed/types.ts

export type Localized<T> = {
  es: T;
  en: T;
};

// ─────────────────────────────────────────────
// PERFIL
// ─────────────────────────────────────────────
export interface Profile {
  name: string;
  headline: Localized<string>;
  shortBio: Localized<string>;
  bio: Localized<string>;
  location: Localized<string>;
  email: string;
  phone: string;
  whatsapp?: string; 
  photo?: string;
  links: {
    github: string;
    linkedin: string;
    portfolio?: string;
  };

  // Campos para terminal y stats
  experienceYears: number;
  since: string;
  domains: Localized<string[]>;
  languages: {
    spanish: Localized<string>;
    english: Localized<string>;
  };
  available: boolean;
}

// ─────────────────────────────────────────────
// EXPERIENCIA
// ─────────────────────────────────────────────
export interface Experience {
  id: string;
  company: string;
  role: Localized<string>;
  location: Localized<string>;
  startDate: string;
  endDate: string | null;
  current: boolean;
  summary: Localized<string>;
  highlights: Localized<string[]>;
  technologies: string[];
}

// ─────────────────────────────────────────────
// PROYECTOS
// ─────────────────────────────────────────────
// src/seed/types.ts → sección de PROYECTOS

export type ProjectClientType = "client" | "freelance";
export type ProjectKind = "web-app" | "mobile-app" | "dashboard" | "api" | "other";

export interface Project {
  id: string;
  title: Localized<string>;
  description: Localized<string>;
  clientType: ProjectClientType;
  kind: ProjectKind;                  
  company?: string;
  year: string;
  technologies: string[];
  highlight?: Localized<string>;
  highlights?: Localized<string[]>;
  images?: string[];
  link?: string;
  isPrivate: boolean;
}

// ─────────────────────────────────────────────
// EDUCACIÓN Y CERTIFICACIONES
// ─────────────────────────────────────────────
export interface Education {
  id: string;
  institution: string;
  degree: Localized<string>;
  location: Localized<string>;
  startDate: string;
  endDate: string | null;
}

export interface Certification {
  id: string;
  name: Localized<string>;
  issuer: string;
  year: string;
  url?: string;
}

// ─────────────────────────────────────────────
// ÁREAS DE ESPECIALIDAD (Experience Section)
// ─────────────────────────────────────────────
export interface Metric {
  value: string;
  label: Localized<string>;
}

export interface ExpertiseArea {
  id: string;
  title: Localized<string>;
  description: Localized<string>;
  icon: string;
  metrics: Metric[];
  relatedExperiences?: string[];
  relatedProjects?: string[];
  technologies: string[];
  cta?: {
    label: Localized<string>;
    href: string;
  };
}

// ─────────────────────────────────────────────
// HABILIDADES (Skills Section)
// ─────────────────────────────────────────────

/**
 * Habilidad individual con metadata de icono.
 */
export interface Skill {
  name: string;
  iconKey: string;                    
  color?: string;                     
}


export interface SkillCategory {
  id: string;
  name: Localized<string>;
  description: Localized<string>;
  iconKey: string;
  skills: Skill[];
}



// ─────────────────────────────────────────────
// SERVICIOS (Services Section)
// ─────────────────────────────────────────────


export interface Service {
  id: string;
  title: Localized<string>;
  description: Localized<string>;
  category: Localized<string>;         // "Data Engineering", "Full Stack"
  iconKey: string;                     // Nombre del icono Lucide
  capabilities: Localized<string[]>;   // Lista de capacidades
}