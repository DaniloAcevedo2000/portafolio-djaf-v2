// src/components/sections/AboutTerminal.tsx
"use client";

import { useLocale } from "next-intl";

import { AnimatedTerminal } from "@/components/ui/AnimatedTerminal";
import type { Profile } from "@/seed/types";
import { getLocalized } from "@/lib/utils/localized";

type Props = {
  profile: Profile;
};

export function AboutTerminal({ profile }: Props) {
  const locale = useLocale();

  const headlineParts = getLocalized(profile.headline, locale)
    .split("·")
    .map((s) => s.trim());

  const profileJson = {
    nombre: profile.name,
    rol: headlineParts[0],
    especialidad: headlineParts[1] ?? "",
    ubicacion: getLocalized(profile.location, locale),
    experiencia: `${profile.experienceYears} años`,
    desde: profile.since,
    dominios: getLocalized(profile.domains, locale),
    idiomas: {
      español: getLocalized(profile.languages.spanish, locale),
      inglés: getLocalized(profile.languages.english, locale),
    },
    disponible: profile.available,
  };

  return (
    <AnimatedTerminal
      command="cat profile.json"
      data={profileJson}
    />
  );
}