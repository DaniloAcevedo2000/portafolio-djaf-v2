// src/lib/utils/date.ts

/**
 * Calcula la duración entre dos fechas en formato "YYYY-MM".
 * Si endDate es null, usa la fecha actual.
 * Devuelve un objeto con años y meses.
 */
export function getDuration(
  startDate: string,
  endDate: string | null,
): { years: number; months: number; totalMonths: number } {
  const [startYear, startMonth] = startDate.split("-").map(Number);

  let endYear: number;
  let endMonth: number;

  if (endDate) {
    [endYear, endMonth] = endDate.split("-").map(Number);
  } else {
    const now = new Date();
    endYear = now.getFullYear();
    endMonth = now.getMonth() + 1;
  }

  const totalMonths =
    (endYear - startYear) * 12 + (endMonth - startMonth);

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return { years, months, totalMonths };
}

/**
 * Formatea una fecha "YYYY-MM" a un formato legible según locale.
 * Ej: "2026-05" → "May 2026" (en) / "May 2026" (es)
 */
export function formatDate(
  date: string,
  locale: string,
  format: "short" | "long" = "short",
): string {
  const [year, month] = date.split("-").map(Number);
  const d = new Date(year, month - 1, 1);

  return d.toLocaleDateString(locale === "es" ? "es-ES" : "en-US", {
    year: "numeric",
    month: format === "long" ? "long" : "short",
  });
}