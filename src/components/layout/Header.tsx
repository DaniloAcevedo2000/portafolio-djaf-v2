// src/components/layout/Header.tsx
"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils/cn";

import { LocaleSwitcher } from "./LocaleSwitcher";
import { MainNav } from "./MainNav";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
  const t = useTranslations("header");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 py-4 sm:px-6">
      {/* Wrapper relative para anclar el dropdown */}
      <div className="relative mx-auto max-w-7xl">
        {/* Pill del header */}
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-full border px-4 py-2 transition-all duration-300 sm:px-6",
            scrolled
              ? "border-border bg-bg-elevated/70 shadow-lg backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          {/* Logo */}
          <a
            href="#top"
            aria-label={t("brandAria")}
            className="group flex shrink-0 items-center gap-2 rounded-full transition-opacity hover:opacity-80"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-md">
              {t("brandShort")}
            </span>
            <span className="hidden text-sm font-bold tracking-tight sm:inline">
              {t("brandName")}
            </span>
          </a>

          {/* Nav */}
          <MainNav />

          {/* Controles derecha */}
          <div className="flex shrink-0 items-center gap-2">
            <LocaleSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}