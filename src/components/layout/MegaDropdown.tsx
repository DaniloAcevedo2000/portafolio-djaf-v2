// src/components/layout/MegaDropdown.tsx
"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import type { NavGroup } from "@/config/navigation";
import { cn } from "@/lib/utils/cn";

type MegaDropdownProps = {
  group: NavGroup;
  locale: "es" | "en";
  onNavigate?: () => void;
};

export function MegaDropdown({
  group,
  locale,
  onNavigate,
}: MegaDropdownProps) {
  const t = useTranslations("header");

  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl border border-border bg-bg-elevated shadow-2xl",
        "backdrop-blur-2xl",
      )}
    >
      {/* Contenido principal: 2 columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
        {/* Columna izquierda: descripción */}
        <div className="border-b border-border p-6 lg:border-b-0 lg:border-r">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
            {group.label[locale]}
          </p>

          <h3 className="mt-3 text-base font-bold leading-snug text-text">
            {group.description[locale].split(".")[0]}
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-text-muted">
            {group.description[locale]}
          </p>
        </div>

        {/* Columna derecha: items */}
        <div className="p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted">
            {t("exploreLabel")}
          </p>

          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
            {group.items.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={onNavigate}
                  className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-bg-subtle"
                >
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                      "bg-gradient-to-br from-primary/15 to-accent/10",
                      "text-primary transition-transform group-hover/item:scale-105",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-text group-hover/item:text-primary">
                      {item.label[locale]}
                    </p>
                    <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-text-muted">
                      {item.description[locale]}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer con CTAs */}
      <div className="flex flex-col items-start justify-between gap-3 border-t border-border bg-bg-subtle/50 px-6 py-4 sm:flex-row sm:items-center">
        <div className="flex flex-wrap items-center gap-2">
          {/* CTA primario */}
          <a
            href={group.ctas.primary.href}
            onClick={onNavigate}
            className={cn(
              "inline-flex h-9 items-center gap-1.5 rounded-full bg-primary px-4",
              "text-xs font-medium text-primary-foreground shadow-sm",
              "transition-colors hover:bg-primary-hover",
            )}
          >
            {group.ctas.primary.label[locale]}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>

          {/* CTA secundario */}
          {group.ctas.secondary && (
            <a
              href={group.ctas.secondary.href}
              onClick={onNavigate}
              className={cn(
                "inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-bg-elevated px-4",
                "text-xs font-medium text-text",
                "transition-colors hover:bg-bg-subtle",
              )}
            >
              {group.ctas.secondary.icon && (
                <group.ctas.secondary.icon className="h-3.5 w-3.5" />
              )}
              {group.ctas.secondary.label[locale]}
            </a>
          )}
        </div>

        {group.ctas.footnote && (
          <p className="text-[11px] text-text-muted">
            {group.ctas.footnote[locale]}
          </p>
        )}
      </div>
    </div>
  );
}