// src/components/ui/ProfileImage.tsx
import Image from "next/image";

import { cn } from "@/lib/utils/cn";

type ProfileImageProps = {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "h-24 w-24",
  md: "h-56 w-56",
  lg: "h-72 w-72 lg:h-80 lg:w-80",
} as const;

export function ProfileImage({
  src,
  alt,
  size = "lg",
  className,
}: ProfileImageProps) {
  const initials = alt
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className={cn("group relative", sizeClasses[size], className)}>
      {/* Glow pulsante detrás */}
      <div
        aria-hidden
        className="absolute inset-2 animate-pulse-glow rounded-full bg-primary opacity-40 blur-2xl"
      />

      {/* Anillo cónico animado (rota) */}
      <div
        aria-hidden
        className="absolute inset-0 animate-spin-slow rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, var(--color-primary) 90deg, var(--color-accent) 180deg, transparent 270deg)",
        }}
      />

      {/* Anillo sólido interno (fondo) */}
      <div className="absolute inset-[3px] rounded-full bg-bg" />

      {/* Foto */}
      <div className="absolute inset-[6px] overflow-hidden rounded-full">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 20rem, 18rem"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-bg-subtle text-5xl font-bold text-text-muted">
            {initials}
          </div>
        )}
      </div>

      {/* Punto de estado (disponible) */}
      <span
        aria-hidden
        className="absolute bottom-3 right-3 h-4 w-4 rounded-full border-[3px] border-bg bg-emerald-500 shadow-lg"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-75" />
      </span>
    </div>
  );
}