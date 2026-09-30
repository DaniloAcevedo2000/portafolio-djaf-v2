// src/components/layout/ThemeSwitcher.tsx
"use client";

import { Check, Moon, Palette, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import {
  modes,
  themeMetadata,
  themes,
  upcomingThemes,
  type Mode,
  type Theme,
} from "@/config/themes";
import { useTheme } from "@/providers/ThemeProvider";
import { cn } from "@/lib/utils/cn";

export function ThemeSwitcher() {
  const t = useTranslations("themeSwitcher");
  const { theme, mode, setTheme, setMode } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("trigger")}
        aria-expanded={open}
        className={cn(
          "flex h-10 items-center gap-2 rounded-full border border-border bg-bg-elevated px-4 text-sm font-medium text-text transition-all",
          "hover:border-primary/50 hover:bg-bg-subtle",
          open && "border-primary/50 bg-bg-subtle",
        )}
      >
        <Palette className="h-4 w-4 text-primary" />
        <span className="hidden sm:inline">{t("trigger")}</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-64 origin-top-right rounded-2xl border border-border bg-bg-elevated p-2 shadow-2xl"
        >
          <div className="px-2 pb-2 pt-1">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">
              {t("modeSection")}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-1 pb-2">
            {modes.map((m) => {
              const Icon = m === "light" ? Sun : Moon;
              const active = mode === m;
              return (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={cn(
                    "flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium transition-all",
                    active
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-transparent text-text-muted hover:border-border hover:bg-bg-subtle hover:text-text",
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {t(`mode.${m}`)}
                </button>
              );
            })}
          </div>

          <div className="my-2 h-px bg-border" />

          <div className="px-2 pb-2">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">
              {t("paletteSection")}
            </p>
          </div>
          <div className="space-y-0.5">
            {themes.map((th) => (
              <button
                key={th}
                type="button"
                onClick={() => setTheme(th)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm transition-all",
                  theme === th
                    ? "bg-primary/10 text-text"
                    : "text-text-muted hover:bg-bg-subtle hover:text-text",
                )}
              >
                <span
                  className="h-4 w-4 shrink-0 rounded-full ring-1 ring-border"
                  style={{ backgroundColor: themeMetadata[th].preview }}
                />
                <span className="flex-1 text-left font-medium">
                  {themeMetadata[th].label}
                </span>
                {theme === th && <Check className="h-4 w-4 text-primary" />}
              </button>
            ))}
            {upcomingThemes.map((th) => (
              <div
                key={th.id}
                className="flex w-full cursor-not-allowed items-center gap-3 rounded-xl px-3 py-2 text-sm opacity-50"
              >
                <span
                  className="h-4 w-4 shrink-0 rounded-full ring-1 ring-border"
                  style={{ backgroundColor: th.preview }}
                />
                <span className="flex-1 text-left font-medium">{th.label}</span>
                <span className="rounded-full bg-bg-subtle px-2 py-0.5 text-[10px] font-medium text-text-muted">
                  {t("comingSoon")}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}