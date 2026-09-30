// src/components/sections/AboutSection.tsx
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { AboutTerminal } from "./AboutTerminal";
import { Container } from "@/components/ui/Container";
import { HorizontalTimeline } from "@/components/ui/HorizontalTimeline";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TerminalCard } from "@/components/ui/TerminalCard";
import { TimelineCard } from "@/components/ui/TimelineCard";
import { Link } from "@/i18n/navigation";
import { getExperience } from "@/lib/repositories/experience.repository";
import { getProfile } from "@/lib/repositories/profile.repository";
import { getLocalized } from "@/lib/utils/localized";

type Props = {
  locale: string;
};

export async function AboutSection({ locale }: Props) {
  const t = await getTranslations("sections.about");
  const profile = await getProfile();
  const experience = await getExperience();

  const bioParagraphs = getLocalized(profile.bio, locale).split("\n\n");

  const sortedExperience = [...experience].sort((a, b) =>
    a.startDate.localeCompare(b.startDate),
  );

  const entries = sortedExperience.map((exp) => ({
    id: exp.id,
    year: exp.startDate.slice(0, 4),
    node: (
      <TimelineCard
        company={exp.company}
        role={getLocalized(exp.role, locale)}
        summary={getLocalized(exp.summary, locale)}
        year={exp.startDate.slice(0, 4)}
        current={exp.current}
      />
    ),
  }));

  return (
    <section id="about" className="relative py-24 md:py-32">
      <Container size="lg">
        {/* ─── Encabezado ─── */}
        <RevealOnScroll direction="up" duration={500}>
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
              {t("eyebrow")}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              {t("title")}
            </h2>
          </div>
        </RevealOnScroll>

        {/* ─── Grid: Bio + Terminal ─── */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Bio con stagger por párrafo */}
          <div className="space-y-5">
            {bioParagraphs.map((paragraph, i) => (
              <RevealOnScroll
                key={i}
                direction="up"
                delay={i * 150}
                duration={500}
              >
                <p className="text-base leading-relaxed text-text-muted md:text-lg">
                  {paragraph}
                </p>
              </RevealOnScroll>
            ))}
          </div>

          {/* Terminal */}
          <RevealOnScroll direction="scale" delay={200} duration={600}>
            <TerminalCard title="danilo@portfolio:~$">
              <AboutTerminal profile={profile} />
            </TerminalCard>
          </RevealOnScroll>
        </div>

        {/* ─── Timeline horizontal ─── */}
        <div className="mt-24 md:mt-32">
          <RevealOnScroll direction="up" duration={500}>
            <div className="mb-10 max-w-2xl">
              <h3 className="text-xl font-bold tracking-tight text-text sm:text-2xl">
                {t("timeline.title")}
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                {t("timeline.subtitle")}
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={150} duration={600}>
            <HorizontalTimeline entries={entries} />
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={300} duration={500}>
            <div className="mt-12 flex flex-col items-center gap-3">
              <Link
                href="/timeline"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-bg-elevated px-6 text-sm font-medium text-text transition-colors hover:bg-bg-subtle"
              >
                {t("timeline.viewFull")}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-xs text-text-muted">
                {t("timeline.viewFullHint")}
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}