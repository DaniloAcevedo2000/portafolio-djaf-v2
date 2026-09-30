// src/components/sections/ServicesSection.tsx
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ServiceCtaCard } from "@/components/ui/ServiceCtaCard";
import { getServices } from "@/lib/repositories/services.repository";

type Props = {
  locale: string;
};

export async function ServicesSection({ locale }: Props) {
  const t = await getTranslations("sections.services");
  const services = await getServices();

  return (
    <section id="services" className="relative py-24 md:py-32">
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

        {/* ─── Grid 2x2 de servicios ─── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              locale={locale}
              index={i}
              capabilitiesLabel={t("capabilitiesLabel")}
            />
          ))}
        </div>

        {/* ─── CTA card ─── */}
        <div className="mt-6">
          <ServiceCtaCard
            title={t("cta.title")}
            description={t("cta.description")}
            buttonLabel={t("cta.button")}
          />
        </div>
      </Container>
    </section>
  );
}