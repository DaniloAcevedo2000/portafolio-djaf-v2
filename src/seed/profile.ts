// src/seed/profile.ts
import type { Profile } from "./types";

export const profile: Profile = {
  name: "Danilo José Acevedo Flores",

  headline: {
    es: "Ingeniero en Computación · Full Stack Developer & Data Engineer",
    en: "Computer Engineer · Full Stack Developer & Data Engineer",
  },

  shortBio: {
    es: "Ingeniero en Computación con experiencia en Data Engineering, Business Intelligence y desarrollo Full Stack. Especializado en SQL Server, ETL, React y TypeScript.",
    en: "Computer Engineer with experience in Data Engineering, Business Intelligence, and Full Stack development. Specialized in SQL Server, ETL, React, and TypeScript.",
  },

  bio: {
    es: "Soy Ingeniero en Computación especializado en Data Engineering, Business Intelligence y desarrollo Full Stack. He trabajado en banca y telecomunicaciones diseñando procesos ETL, optimizando bases de datos y construyendo aplicaciones web y móviles con React, Next.js, TypeScript y .NET.\n\nMe enfoco en escribir código limpio, aplicar buenas prácticas de seguridad y crear soluciones que escalen. Me apasiona transformar datos en decisiones y construir software que resuelva problemas reales.",
    en: "I'm a Computer Engineer specialized in Data Engineering, Business Intelligence, and Full Stack development. I've worked in banking and telecommunications designing ETL processes, optimizing databases, and building web and mobile applications with React, Next.js, TypeScript, and .NET.\n\nI focus on writing clean code, applying security best practices, and creating solutions that scale. I'm passionate about turning data into decisions and building software that solves real problems.",
  },

  location: {
    es: "Managua, Nicaragua",
    en: "Managua, Nicaragua",
  },

  email: "daniloacevedo2000@gmail.com",
  phone: "(+505) 8518 4853",
  whatsapp: "50585184853",  

  // Cuando tengas la foto:
  photo: "/images/perfil-danilo.jpg",

  links: {
    github: "https://github.com/DaniloAcevedo",
    linkedin: "https://linkedin.com/in/daniloacevedo",
    portfolio: "https://portafolio-djaf.vercel.app/",
  },

  // ─── NUEVOS CAMPOS ───
  experienceYears: 4,
  since: "2022",
  domains: {
    es: ["Banca", "Telecomunicaciones"],
    en: ["Banking", "Telecommunications"],
  },
  languages: {
    spanish: { es: "Nativo", en: "Native" },
    english: { es: "B2", en: "B2" },
  },
  available: true,
};