// src/components/sections/ExperienceSection.tsx
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/ui/Container";
import { ExpertiseCard } from "@/components/ui/ExpertiseCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { getExperience } from "@/lib/repositories/experience.repository";
import { getExpertiseAreas } from "@/lib/repositories/expertise.repository";
import { getProjects } from "@/lib/repositories/projects.repository";
import { getLocalized } from "@/lib/utils/localized";

type Props = {
  locale: string;
};

export async function ExperienceSection({ locale }: Props) {
  const t = await getTranslations("sections.experience");
  const areas = await getExpertiseAreas();
  const experience = await getExperience();
  const projects = await getProjects();

  function resolveExperiences(ids?: string[]) {
    if (!ids) return [];
    return ids
      .map((id) => {
        const exp = experience.find((e) => e.id === id);
        if (!exp) return null;
        return {
          id: exp.id,
          label: `${exp.company} · ${getLocalized(exp.role, locale)}`,
          year: exp.startDate.slice(0, 4),
        };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);
  }

  function resolveProjects(ids?: string[]) {
    if (!ids) return [];
    return ids
      .map((id) => {
        const proj = projects.find((p) => p.id === id);
        if (!proj) return null;
        return {
          id: proj.id,
          label: getLocalized(proj.title, locale),
          year: proj.year,
        };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);
  }

  const labels = {
    appliedIn: t("appliedIn"),
    featuredProjects: t("featuredProjects"),
    mainStack: t("mainStack"),
  };

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <Container size="lg">
        {/* ─── Encabezado ─── */}
        <RevealOnScroll direction="up" duration={500}>
          <div className="mb-16 max-w-2xl md:mb-20">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
              {t("eyebrow")}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-base text-text-muted">
              {t("subtitle")}
            </p>
          </div>
        </RevealOnScroll>

        {/* ─── Áreas alternadas ─── */}
        <div>
          {areas.map((area, i) => (
            <div key={area.id}>
              {/* Separador entre áreas (excepto la primera) */}
              {i > 0 && (
                <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent md:my-20" />
              )}

              <ExpertiseCard
                area={area}
                locale={locale}
                index={i}
                labels={labels}
                relatedExperienceLabels={resolveExperiences(
                  area.relatedExperiences,
                )}
                relatedProjectLabels={resolveProjects(area.relatedProjects)}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}