// src/config/themes.ts

/**
 * Temas (paletas de color) disponibles.
 * Por ahora solo "blue". En el futuro: "crimson", "orange", etc.
 */
export const themes = ["blue"] as const;
export type Theme = (typeof themes)[number];

/**
 * Temas planificados (para mostrarlos como "próximamente" en el switcher).
 */
export const upcomingThemes = [
  { id: "crimson", label: "Crimson", preview: "#a83232" },
  { id: "orange", label: "Orange", preview: "#ea580c" },
] as const;

/**
 * Modos de color (light / dark).
 */
export const modes = ["light", "dark"] as const;
export type Mode = (typeof modes)[number];

/**
 * Metadata de cada tema para mostrar en el switcher.
 */
export const themeMetadata: Record<
  Theme,
  { label: string; preview: string }
> = {
  blue: { label: "Azul", preview: "#2563eb" },
};

/**
 * Metadata de cada modo.
 */
export const modeMetadata: Record<Mode, { label: string }> = {
  light: { label: "Claro" },
  dark: { label: "Oscuro" },
};

/**
 * Configuración por defecto.
 */
export const DEFAULT_THEME: Theme = "blue";
export const DEFAULT_MODE: Mode = "dark";

/**
 * Keys usadas en localStorage.
 */
export const STORAGE_KEYS = {
  theme: "portfolio-theme",
  mode: "portfolio-mode",
} as const;