// src/components/ui/ContactChannelRow.tsx
import { ArrowRight } from "lucide-react";
import type { ComponentType } from "react";

import { cn } from "@/lib/utils/cn";

type IconComponent = ComponentType<{ className?: string }>;

type Props = {
  icon: IconComponent;
  label: string;
  description: string;
  value: string;
  cta: string;
  href: string;
  external?: boolean;
  accent?: "primary" | "success" | "info";
};

const accentMap = {
  primary: {
    iconBg: "bg-primary/10 text-primary",
    hoverBorder: "hover:border-primary/40",
    hoverBg: "hover:bg-primary/[0.03]",
    leftBar: "bg-primary",
    cta: "text-primary",
  },
  success: {
    iconBg: "bg-emerald-500/10 text-emerald-500",
    hoverBorder: "hover:border-emerald-500/40",
    hoverBg: "hover:bg-emerald-500/[0.03]",
    leftBar: "bg-emerald-500",
    cta: "text-emerald-500",
  },
  info: {
    iconBg: "bg-sky-500/10 text-sky-500",
    hoverBorder: "hover:border-sky-500/40",
    hoverBg: "hover:bg-sky-500/[0.03]",
    leftBar: "bg-sky-500",
    cta: "text-sky-500",
  },
};

export function ContactChannelRow({
  icon: Icon,
  label,
  description,
  value,
  cta,
  href,
  external = false,
  accent = "primary",
}: Props) {
  const a = accentMap[accent];

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-border bg-bg-elevated p-5",
        "transition-all duration-300",
        a.hoverBorder,
        a.hoverBg,
      )}
    >
      {/* Barra izquierda animada */}
      <span
        aria-hidden
        className={cn(
          "absolute left-0 top-0 h-full w-0.5 -translate-x-full transition-transform duration-300",
          a.leftBar,
          "group-hover:translate-x-0",
        )}
      />

      {/* Icono */}
      <span
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
          a.iconBg,
          "transition-transform duration-300 group-hover:scale-105",
        )}
      >
        <Icon className="h-5 w-5" />
      </span>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <p className="text-sm font-bold text-text">{label}</p>
          <span className="hidden text-[11px] text-text-muted sm:inline">
            · {description}
          </span>
        </div>
        <p className="mt-0.5 truncate font-mono text-xs text-text-muted">
          {value}
        </p>
      </div>

      {/* CTA */}
      <div className="flex shrink-0 items-center gap-1.5">
        <span
          className={cn(
            "hidden text-xs font-semibold sm:inline",
            a.cta,
          )}
        >
          {cta}
        </span>
        <ArrowRight
          className={cn(
            "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
            a.cta,
          )}
        />
      </div>
    </a>
  );
}