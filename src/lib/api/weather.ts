// src/lib/api/weather.ts

/**
 * Coordenadas de Managua, Nicaragua.
 * Latitud: 12.13, Longitud: -86.25
 */
const MANAGUA_COORDS = {
  latitude: 12.13,
  longitude: -86.25,
};

export type WeatherData = {
  temperature: number;      // en °C
  weatherCode: number;      // código WMO
  windspeed: number;        // km/h
  isDay: boolean;
  updatedAt: string;        // ISO timestamp
};

/**
 * Obtiene el clima actual de Managua desde Open-Meteo.
 * Usa el cache de Next.js para revalidar cada 10 minutos.
 * En caso de error, devuelve null (el componente maneja el fallback).
 */
export async function getManaguaWeather(): Promise<WeatherData | null> {
  try {
    const url = new URL("https://api.open-meteo.com/v1/forecast");
    url.searchParams.set("latitude", String(MANAGUA_COORDS.latitude));
    url.searchParams.set("longitude", String(MANAGUA_COORDS.longitude));
    url.searchParams.set("current_weather", "true");

    const res = await fetch(url.toString(), {
      next: { revalidate: 200 }, // 2 minutos
    });

    if (!res.ok) {
      console.error("[weather] Failed to fetch:", res.status);
      return null;
    }

    const data = await res.json();
    const current = data.current_weather;

    if (!current) return null;

    return {
      temperature: Math.round(current.temperature),
      weatherCode: current.weathercode,
      windspeed: Math.round(current.windspeed),
      isDay: current.is_day === 1,
      updatedAt: current.time,
    };
  } catch (error) {
    console.error("[weather] Error:", error);
    return null;
  }
}

/**
 * Mapea un código WMO de clima a un emoji.
 * Ref: https://open-meteo.com/en/docs
 */
export function getWeatherEmoji(code: number, isDay: boolean): string {
  if (code === 0) return isDay ? "☀️" : "🌙";
  if (code >= 1 && code <= 3) return isDay ? "⛅" : "☁️";
  if (code === 45 || code === 48) return "🌫️";
  if (code >= 51 && code <= 57) return "🌦️";
  if (code >= 61 && code <= 67) return "🌧️";
  if (code >= 71 && code <= 77) return "🌨️";
  if (code >= 80 && code <= 82) return "🌧️";
  if (code >= 85 && code <= 86) return "🌨️";
  if (code >= 95 && code <= 99) return "⛈️";
  return "☀️";
}