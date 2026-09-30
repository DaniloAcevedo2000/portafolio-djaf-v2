// src/i18n/routing-config.ts
import type { Pathnames } from "next-intl/routing";

// ─────────────────────────────────────────────
// Idiomas
// ─────────────────────────────────────────────
export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const localePrefix = "always" as const;

// ─────────────────────────────────────────────
// UI de idiomas (selector)
// ─────────────────────────────────────────────
export const localsDisplay: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

export const localeFlags: Record<Locale, string> = {
  es: "🇪🇸",
  en: "🇺🇸",
};

export const appLocales = [
  { value: "es", label: "Español", flag: "🇪🇸" },
  { value: "en", label: "English", flag: "🇺🇸" },
] satisfies { value: Locale; label: string; flag: string }[];

// ─────────────────────────────────────────────
// Rutas traducidas
// ─────────────────────────────────────────────
/**
 * La KEY es lo que usas en el código (hrefs).
 * El VALOR es la URL real por locale.
 *
 * ⚠️ Cada ruta declarada aquí DEBE tener su page.tsx en:
 *    src/app/[locale]/<ruta>/page.tsx
 *
 * Las rutas que aún no tienen página están COMENTADAS.
 * Descoméntalas cuando crees su page.tsx correspondiente.
 */
export const pathnames = {
  // ─── Públicas ───
  "/": "/",

  "/timeline": {
    es: "/linea-de-tiempo",
    en: "/timeline",
  },

  // Descomenta cuando crees su page.tsx:
  // "/about": {
  //   es: "/sobre-mi",
  //   en: "/about",
  // },
  // "/curriculum-vitae": {
  //   es: "/curriculum-vitae",
  //   en: "/curriculum-vitae",
  // },
  // "/skills/[slug]": {
  //   es: "/habilidades/[slug]",
  //   en: "/skills/[slug]",
  // },
  // "/projects/[slug]": {
  //   es: "/proyectos/[slug]",
  //   en: "/projects/[slug]",
  // },
  // "/privacy": {
  //   es: "/privacidad",
  //   en: "/privacy",
  // },
} satisfies Pathnames<typeof locales>;