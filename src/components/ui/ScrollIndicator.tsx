// src/components/ui/ScrollIndicator.tsx
"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils/cn";

type ScrollIndicatorProps = {
  /** Selector CSS del elemento destino al hacer click. Ej: "#experience" */
  targetId?: string;
  className?: string;
};

export function ScrollIndicator({
  targetId,
  className,
}: ScrollIndicatorProps) {
  const t = useTranslations("scrollIndicator");
  const [visible, setVisible] = useState(true);

  // Ocultar cuando el usuario empieza a scrollear
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    if (targetId) {
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    // Fallback: scrollear una pantalla completa
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={t("label")}
      className={cn(
        // Oculto en mobile
        "group absolute bottom-10 right-8 z-20 hidden",
        // Desde desktop
        "md:flex md:flex-col md:items-center md:gap-3",
        // Animación de entrada (delay para que el Hero entre primero)
        "animate-fade-in opacity-0",
        // Transición suave para visibilidad
        "transition-opacity duration-500",
        visible ? "opacity-40 hover:opacity-100" : "pointer-events-none opacity-0",
        className,
      )}
      style={{ animationDelay: "1500ms" }}
    >
      {/* Línea vertical con el texto rotado */}
      <div className="relative flex flex-col items-center gap-2">
        {/* Línea superior (arriba del texto) */}
        <span className="h-10 w-px bg-border-strong transition-colors group-hover:bg-primary/60" />

        {/* Texto rotado */}
        <span
          className={cn(
            "text-[10px] font-medium uppercase tracking-[0.3em] text-text-muted",
            "transition-colors group-hover:text-primary",
          )}
          style={{ writingMode: "vertical-rl" }}
        >
          {t("text")}
        </span>

        {/* Línea inferior (abajo del texto) */}
        <span className="relative h-10 w-px overflow-hidden bg-border-strong transition-colors group-hover:bg-primary/60">
          {/* Punto animado que baja */}
          <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)] animate-scroll-dot" />
        </span>
      </div>
    </button>
  );
}