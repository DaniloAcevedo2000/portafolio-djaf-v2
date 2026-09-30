// src/lib/utils/localized.ts
import type { Localized } from "@/seed/types";

/**
 * Extrae el valor del idioma solicitado de un campo Localized<T>.
 * Si el idioma no existe, cae al español por defecto.
 */

export function getLocalized<T>(value: Localized<T>, locale: string): T {
  return value[locale as keyof Localized<T>] ?? value.es;
}