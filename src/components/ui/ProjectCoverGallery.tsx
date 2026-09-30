// src/components/ui/ProjectCoverGallery.tsx
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils/cn";

type Props = {
  images: string[];
  alt: string;
  className?: string;
};

export function ProjectCoverGallery({ images, alt, className }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) return null;

  const goPrev = () => {
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };
  const goNext = () => {
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className={cn("relative", className)}>
      {/* Contenedor de la imagen */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-3xl bg-bg-subtle">
        {/* Fondo con blur de la imagen activa (rellena el espacio) */}
        <img
          src={images[activeIndex]}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-2xl"
        />

        {/* Overlay para oscurecer el fondo */}
        <div className="absolute inset-0 bg-bg/30" />

        {/* Imagen principal (contiene, no recorta) */}
        <div className="relative flex h-full w-full items-center justify-center p-4">
          <img
            src={images[activeIndex]}
            alt={`${alt} — ${activeIndex + 1}`}
            className="max-h-full max-w-full object-contain drop-shadow-2xl"
          />
        </div>

        {/* Overlay superior para contraste de badges */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />
      </div>

      {/* Flechas de navegación */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Imagen anterior"
            className={cn(
              "absolute left-3 top-1/2 -translate-y-1/2",
              "flex h-9 w-9 items-center justify-center rounded-full",
              "border border-white/20 bg-black/50 text-white backdrop-blur-sm",
              "opacity-0 transition-opacity duration-200",
              "hover:bg-black/70 group-hover:opacity-100",
            )}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Imagen siguiente"
            className={cn(
              "absolute right-3 top-1/2 -translate-y-1/2",
              "flex h-9 w-9 items-center justify-center rounded-full",
              "border border-white/20 bg-black/50 text-white backdrop-blur-sm",
              "opacity-0 transition-opacity duration-200",
              "hover:bg-black/70 group-hover:opacity-100",
            )}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 backdrop-blur-sm">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir a imagen ${i + 1}`}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === activeIndex
                  ? "w-6 bg-white"
                  : "w-1.5 bg-white/40 hover:bg-white/70",
              )}
            />
          ))}
        </div>
      )}

      {/* Contador */}
      {images.length > 1 && (
        <div className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/60 px-2.5 py-1 font-mono text-[10px] font-medium text-white backdrop-blur-sm">
          {activeIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}