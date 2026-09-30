// src/components/sections/ProjectsSection.tsx
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/ui/Container";
import { ProjectGrid } from "@/components/ui/ProjectGrid";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { getProjects } from "@/lib/repositories/projects.repository";

type Props = {
  locale: string;
};

export async function ProjectsSection({ locale }: Props) {
  const t = await getTranslations("sections.projects");
  const projects = await getProjects();

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <Container size="lg">
        <RevealOnScroll direction="up" duration={500}>
          <div className="mb-12 max-w-3xl md:mb-16">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
              {t("eyebrow")}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-base text-text-muted">{t("subtitle")}</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={150} duration={600}>
          <ProjectGrid
            projects={projects}
            locale={locale as "es" | "en"}
            labels={{
              filters: {
                all: t("filters.all"),
                client: t("filters.client"),
                freelance: t("filters.freelance"),
              },
              badge: {
                client: t("badge.client"),
                freelance: t("badge.freelance"),
                private: t("badge.private"),
              },
              empty: t("empty"),
            }}
          />
        </RevealOnScroll>
      </Container>
    </section>
  );
}