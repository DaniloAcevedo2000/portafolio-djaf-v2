// src/providers/ThemeProvider.tsx
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  DEFAULT_MODE,
  DEFAULT_THEME,
  STORAGE_KEYS,
  type Mode,
  type Theme,
} from "@/config/themes";

type ThemeContextValue = {
  theme: Theme;
  mode: Mode;
  setTheme: (theme: Theme) => void;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const [mode, setModeState] = useState<Mode>(DEFAULT_MODE);

  // ─── Inicialización: leer de localStorage o preferencia del sistema ───
  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedTheme = localStorage.getItem(STORAGE_KEYS.theme) as Theme | null;
    const storedMode = localStorage.getItem(STORAGE_KEYS.mode) as Mode | null;

    if (storedTheme && storedTheme === DEFAULT_THEME) {
      setThemeState(storedTheme);
    }

    if (storedMode === "light" || storedMode === "dark") {
      setModeState(storedMode);
    } else {
      // Si no hay preferencia guardada, usar la del sistema
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setModeState(prefersDark ? "dark" : "light");
    }
  }, []);

  // ─── Sincronizar atributos en <html> cuando cambia el tema/modo ───
  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.setAttribute("data-mode", mode);
  }, [theme, mode]);

  // ─── Setters con persistencia ───
  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    localStorage.setItem(STORAGE_KEYS.theme, next);
  }, []);

  const setMode = useCallback((next: Mode) => {
    setModeState(next);
    localStorage.setItem(STORAGE_KEYS.mode, next);
  }, []);

  const toggleMode = useCallback(() => {
    setModeState((current) => {
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEYS.mode, next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, mode, setTheme, setMode, toggleMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook para consumir el contexto de tema.
 */

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}