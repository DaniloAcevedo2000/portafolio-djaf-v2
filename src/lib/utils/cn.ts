// src/lib/utils/cn.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases de Tailwind de forma inteligente.
 *
 * Ejemplo:
 *   cn("px-2 py-1", condition && "bg-red-500", "px-4")
 *   → "py-1 bg-red-500 px-4"  (resuelve el conflicto px-2 vs px-4)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}