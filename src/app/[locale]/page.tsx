// src/app/[locale]/page.tsx
import { ArrowRight, Download } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { Header } from "@/components/layout/Header";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DotGrid } from "@/components/ui/DotGrid";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { getProfile } from "@/lib/repositories/profile.repository";
import { getLocalized } from "@/lib/utils/localized";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const profile = await getProfile();
  const t = await getTranslations("hero");

  return (
    <>
      <Header />

      <main
        id="top"
        className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
      >
        {/* Fondo decorativo */}
        <DotGrid className="opacity-40" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_60%)] opacity-[0.10]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent opacity-[0.08] blur-3xl"
        />

        <Container size="lg" className="relative py-32">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
            {/* Columna izquierda */}
            <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
              <AnimatedSection animation="fade-up" delay={0}>
                <Badge variant="success" withDot>
                  {t("available")}
                </Badge>
              </AnimatedSection>

              <div className="space-y-5">
                <AnimatedSection animation="fade-up" delay={150}>
                  <p className="text-lg text-text-muted">{t("greeting")}</p>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={300}>
                  <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-6xl">
                    {profile.name}
                  </h1>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={450}>
                  <p className="text-lg font-medium text-primary sm:text-xl">
                    {getLocalized(profile.headline, locale)}
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={600}>
                  <p className="max-w-xl text-base leading-relaxed text-text-muted">
                    {getLocalized(profile.shortBio, locale)}
                  </p>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-up" delay={750}>
                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <Button as="a" href="/cv/danilo-acevedo-cv-es.pdf" download>
                    <Download className="h-4 w-4" />
                    {t("downloadCV")}
                  </Button>
                  <Button as="a" href="#contact" variant="secondary">
                    {t("contactMe")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={900}>
                <SocialLinks
                  github={profile.links.github}
                  linkedin={profile.links.linkedin}
                  email={profile.email}
                  portfolio={profile.links.portfolio}
                  size="sm"
                  className="md:justify-start"
                />
              </AnimatedSection>
            </div>

            {/* Columna derecha: foto */}
            <div className="flex justify-center md:justify-end">
              <AnimatedSection animation="scale-in" delay={400}>
                <ProfileImage src={profile.photo} alt={profile.name} size="lg" />
              </AnimatedSection>
            </div>
          </div>
        </Container>

        {/* Scroll indicator */}
        <ScrollIndicator targetId="#about" />
      </main>

      <AboutSection locale={locale} />
      <ExperienceSection locale={locale} />
      <SkillsSection locale={locale} />
      <ServicesSection locale={locale} />
      <ProjectsSection locale={locale} />
      <ContactSection locale={locale} /> 

      
    </>
  );
}