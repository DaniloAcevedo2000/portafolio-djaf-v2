// src/components/ui/ServiceCtaCard.tsx
import { ArrowRight, MessageSquare } from "lucide-react";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils/cn";

type Props = {
  title: string;
  description: string;
  buttonLabel: string;
};

export function ServiceCtaCard({ title, description, buttonLabel }: Props) {
  return (
    <RevealOnScroll direction="up" delay={200} duration={600}>
      <div
        className={cn(
          "group relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl border border-primary/30 p-8",
          "bg-gradient-to-br from-primary/10 via-primary/[0.05] to-accent/10",
          "sm:flex-row sm:items-center sm:p-10",
        )}
      >
        {/* Glow decorativo */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary opacity-10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-accent opacity-10 blur-3xl"
        />

        {/* Contenido izquierda */}
        <div className="relative flex items-start gap-4 sm:items-center">
          <span
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl",
              "bg-primary text-primary-foreground shadow-lg shadow-primary/20",
            )}
          >
            <MessageSquare className="h-5 w-5" />
          </span>

          <div>
            <h3 className="text-lg font-bold leading-tight tracking-tight text-text sm:text-xl">
              {title}
            </h3>
            <p className="mt-1 text-sm text-text-muted">
              {description}
            </p>
          </div>
        </div>

        {/* CTA derecha */}
        <a
          href="#contact"
          className={cn(
            "group/btn relative inline-flex h-12 shrink-0 items-center gap-2 rounded-full",
            "bg-primary px-6 text-sm font-semibold text-primary-foreground",
            "shadow-lg shadow-primary/20 transition-all",
            "hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/30",
          )}
        >
          {buttonLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
        </a>
      </div>
    </RevealOnScroll>
  );
}