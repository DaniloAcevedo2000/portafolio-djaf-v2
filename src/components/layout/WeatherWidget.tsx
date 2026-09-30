// src/components/layout/WeatherWidget.tsx
"use client";

import { useEffect, useState } from "react";

import { getWeatherEmoji, type WeatherData } from "@/lib/api/weather";

type Props = {
  weather: WeatherData | null;
  location: string;
  labels: {
    live: string;
    wind: string;
    weatherUnavailable: string;
    poweredBy: string;
  };
};

export function WeatherWidget({ weather, location, labels }: Props) {
  const [localTime, setLocalTime] = useState<string | null>(null);

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const managuaTime = new Date(
        now.getTime() + now.getTimezoneOffset() * 60000 - 6 * 3600000,
      );
      const hh = String(managuaTime.getHours()).padStart(2, "0");
      const mm = String(managuaTime.getMinutes()).padStart(2, "0");
      setLocalTime(`${hh}:${mm}`);
    }
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const emoji = weather
    ? getWeatherEmoji(weather.weatherCode, weather.isDay)
    : "•";

  return (
    <div
      className="relative overflow-hidden rounded-2xl border p-5 backdrop-blur-sm"
      style={{
        backgroundColor: "var(--color-footer-card-bg)",
        borderColor: "var(--color-footer-card-border)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span
            className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em]"
            style={{ color: "var(--color-footer-text)" }}
          >
            {labels.live}
          </span>
        </div>
      </div>

      {/* Contenido */}
      {weather ? (
        <div className="mt-4 flex items-start gap-4">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl"
            style={{
              backgroundColor: "var(--color-footer-card-bg)",
              border: "1px solid var(--color-footer-card-border)",
            }}
          >
            {emoji}
          </div>

          <div className="flex flex-col gap-1">
            <p
              className="text-3xl font-bold leading-none"
              style={{ color: "var(--color-footer-text)" }}
            >
              {weather.temperature}
              <span
                className="ml-0.5 text-lg font-medium"
                style={{ color: "var(--color-footer-text-muted)" }}
              >
                °C
              </span>
            </p>
            <p
              className="text-xs"
              style={{ color: "var(--color-footer-text-muted)" }}
            >
              {location}
            </p>
            <p
              className="font-mono text-xs"
              style={{ color: "var(--color-footer-text-subtle)" }}
            >
              {localTime ?? "--:--"} · {labels.wind} {weather.windspeed} km/h
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-4 flex items-center gap-3">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-2xl"
            style={{ backgroundColor: "var(--color-footer-card-bg)" }}
          >
            🌐
          </div>
          <p
            className="text-xs"
            style={{ color: "var(--color-footer-text-muted)" }}
          >
            {labels.weatherUnavailable}
          </p>
        </div>
      )}

      {/* Footer */}
      <div
        className="mt-4 border-t pt-3"
        style={{ borderColor: "var(--color-footer-border)" }}
      >
        <p
          className="text-[10px]"
          style={{ color: "var(--color-footer-text-subtle)" }}
        >
          {labels.poweredBy}{" "}
          <a
            href="https://open-meteo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline transition-opacity hover:opacity-100"
            style={{ color: "var(--color-footer-text-muted)" }}
          >
            Open-Meteo
          </a>
        </p>
      </div>
    </div>
  );
}