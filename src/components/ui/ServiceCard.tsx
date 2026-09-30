// src/components/ui/ServiceCard.tsx
import {
  Code2,
  Database,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { Service } from "@/seed/types";
import { cn } from "@/lib/utils/cn";

const iconMap: Record<string, LucideIcon> = {
  Database,
  Code2,
  Smartphone,
  Sparkles,
};

type Props = {
  service: Service;
  locale: string;
  index: number;
  capabilitiesLabel: string;
};

export function ServiceCard({
  service,
  locale,
  index,
  capabilitiesLabel,
}: Props) {
  const Icon = iconMap[service.iconKey] ?? Sparkles;
  const l = locale as "es" | "en";

  return (
    <RevealOnScroll
      direction="up"
      delay={index * 100}
      duration={600}
      className="h-full"
    >
      <article
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-bg-elevated p-7 transition-all duration-300",
          "hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5",
        )}
      >
        {/* Glow sutil en hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10"
        />

        {/* ─── Header: icono + categoría ─── */}
        <div className="relative flex items-center gap-3">
          <span
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
              "bg-gradient-to-br from-primary/20 to-accent/10",
              "text-primary",
            )}
          >
            <Icon className="h-5 w-5" />
          </span>
          <span
            className={cn(
              "rounded-full border border-border bg-bg-subtle/40 px-3 py-1",
              "font-mono text-[10px] font-semibold uppercase tracking-wider text-text-muted",
            )}
          >
            {service.category[l]}
          </span>
        </div>

        {/* ─── Título ─── */}
        <h3 className="relative mt-5 text-xl font-bold leading-tight tracking-tight text-text sm:text-2xl">
          {service.title[l]}
        </h3>

        {/* ─── Descripción ─── */}
        <p className="relative mt-3 text-sm leading-relaxed text-text-muted">
          {service.description[l]}
        </p>

        {/* ─── Separador ─── */}
        <div className="relative my-6 h-px w-full bg-gradient-to-r from-border via-border to-transparent" />

        {/* ─── Capabilities ─── */}
        <div className="relative mt-auto">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
            {capabilitiesLabel}
          </p>
          <ul className="space-y-2">
            {service.capabilities[l].map((capability, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-text"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                <span>{capability}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </RevealOnScroll>
  );
}