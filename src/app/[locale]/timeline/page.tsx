// src/app/[locale]/timeline/page.tsx
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Header } from "@/components/layout/Header";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DotGrid } from "@/components/ui/DotGrid";
import { VerticalTimelineItem } from "@/components/ui/VerticalTimelineItem";
import { Link } from "@/i18n/navigation";
import { getEducation } from "@/lib/repositories/education.repository";
import { getExperience } from "@/lib/repositories/experience.repository";
import { formatDate, getDuration } from "@/lib/utils/date";
import { getLocalized } from "@/lib/utils/localized";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "timelinePage.meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function TimelinePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("timelinePage");
  const experience = await getExperience();
  const education = await getEducation();

  // Ordenar: más reciente primero
  const sortedExperience = [...experience].sort((a, b) =>
    b.startDate.localeCompare(a.startDate),
  );

  // Formatear periodo
  function formatPeriod(startDate: string, endDate: string | null) {
    const start = formatDate(startDate, locale);
    const end = endDate ? formatDate(endDate, locale) : t("duration.present");

    const { years, months, totalMonths } = getDuration(startDate, endDate);

    let duration = "";
    if (totalMonths > 0) {
      if (years > 0 && months > 0) {
        duration = ` · ${years}y ${months}m`;
      } else if (years > 0) {
        duration = years === 1 ? ` · ${t("duration.oneYear")}` : ` · ${t("duration.years", { count: years })}`;
      } else {
        duration = ` · ${t("duration.months", { count: months })}`;
      }
    }

    return `${start} – ${end}${duration}`;
  }

  return (
    <>
      <Header />

      <main className="relative min-h-screen pt-32 pb-24">
        {/* Fondo decorativo */}
        <DotGrid className="opacity-20" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_60%)] opacity-[0.08]"
        />

        <Container size="md" className="relative">
          {/* Botón volver */}
          <AnimatedSection animation="fade-up" delay={0}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("backHome")}
            </Link>
          </AnimatedSection>

          {/* Encabezado */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="mt-10 mb-16">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
                {t("eyebrow")}
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
                {t("title")}
              </h1>
              <p className="mt-4 max-w-2xl text-base text-text-muted">
                {t("subtitle")}
              </p>
            </div>
          </AnimatedSection>

          {/* Timeline vertical: experiencia */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="space-y-0">
              {sortedExperience.map((exp, i) => (
                <VerticalTimelineItem
                  key={exp.id}
                  year={exp.startDate.slice(0, 4)}
                  title={exp.company}
                  subtitle={getLocalized(exp.role, locale)}
                  period={formatPeriod(exp.startDate, exp.endDate)}
                  location={getLocalized(exp.location, locale)}
                  current={exp.current}
                  highlights={getLocalized(exp.highlights, locale)}
                  technologies={exp.technologies}
                  isLast={i === sortedExperience.length - 1}
                  index={i}
                />
              ))}
            </div>
          </AnimatedSection>

          {/* Educación (opcional, se puede mostrar al final) */}
          {education.length > 0 && (
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="mt-20">
                <h2 className="mb-10 text-xl font-bold text-text sm:text-2xl">
                  {t("sections.education")}
                </h2>
                <div className="space-y-0">
                  {education.map((edu, i) => (
                    <VerticalTimelineItem
                      key={edu.id}
                      year={edu.startDate.slice(0, 4)}
                      title={edu.institution}
                      subtitle={getLocalized(edu.degree, locale)}
                      period={formatPeriod(edu.startDate, edu.endDate)}
                      location={getLocalized(edu.location, locale)}
                      isLast={i === education.length - 1}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* CTA volver */}
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="mt-20 flex justify-center">
              <Button as="a" href="/" variant="secondary">
                <ArrowLeft className="h-4 w-4" />
                {t("backToPortfolio")}
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </main>
    </>
  );
}