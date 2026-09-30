// src/components/sections/SkillsSection.tsx
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SkillsTabs } from "@/components/ui/SkillsTabs";
import { Link } from "@/i18n/navigation";
import { getSkillCategories } from "@/lib/repositories/skills.repository";

type Props = {
  locale: string;
};

export async function SkillsSection({ locale }: Props) {
  const t = await getTranslations("sections.skills");
  const categories = await getSkillCategories();

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <Container size="lg">
        {/* ─── Encabezado ─── */}
        <RevealOnScroll direction="up" duration={500}>
          <div className="mb-12 max-w-3xl md:mb-16">
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

        {/* ─── Tabs + búsqueda ─── */}
        <RevealOnScroll direction="up" delay={150} duration={600}>
          <SkillsTabs categories={categories} locale={locale} />
        </RevealOnScroll>

        {/* ─── CTA certificados ─── */}
        <RevealOnScroll direction="up" delay={300} duration={500}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/timeline"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary-hover"
            >
              {t("viewCertificates")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}