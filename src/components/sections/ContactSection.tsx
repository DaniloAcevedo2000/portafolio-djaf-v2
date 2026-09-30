// src/components/sections/ContactSection.tsx
import { Mail, MessageCircle, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/ui/Container";
import { ContactChannelRow } from "@/components/ui/ContactChannelRow";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { getProfile } from "@/lib/repositories/profile.repository";
import { getLocalized } from "@/lib/utils/localized";

type Props = {
  locale: string;
};

export async function ContactSection({ locale }: Props) {
  const t = await getTranslations("sections.contact");
  const profile = await getProfile();

  const whatsappNumber = profile.whatsapp ?? "50585184853";

  const channels = [
    {
      key: "email" as const,
      icon: Mail,
      accent: "primary" as const,
      value: profile.email,
      href: `mailto:${profile.email}`,
      external: false,
    },
    {
      key: "whatsapp" as const,
      icon: MessageCircle,
      accent: "success" as const,
      value: profile.phone,
      href: `https://wa.me/${whatsappNumber}`,
      external: true,
    },
    {
      key: "linkedin" as const,
      icon: FaLinkedin,
      accent: "info" as const,
      value: profile.links.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
      href: profile.links.linkedin,
      external: true,
    },
    {
      key: "phone" as const,
      icon: Phone,
      accent: "primary" as const,
      value: profile.phone,
      href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
      external: false,
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <Container size="lg">
        {/* Encabezado */}
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

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[360px_1fr] lg:gap-12">
          {/* Panel izquierdo */}
          <RevealOnScroll direction="left" duration={600}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-elevated p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary opacity-[0.06] blur-3xl"
              />

              <div className="relative flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
                <ProfileImage
                  src={profile.photo}
                  alt={profile.name}
                  size="sm"
                />

                <div>
                  <h3 className="text-xl font-bold text-text">{profile.name}</h3>
                  <p className="mt-1 text-sm text-text-muted">
                    {getLocalized(profile.headline, locale).split("·")[0].trim()}
                  </p>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

                <div className="flex w-full flex-col gap-3">
                  <div className="flex items-center gap-2.5 text-sm">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </span>
                    <span className="font-medium text-text">
                      {t("availability.available")}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 text-sm text-text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                    <span>{t("availability.responseTime")}</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-sm text-text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                    <span>{t("availability.remoteFriendly")}</span>
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

                <div className="flex items-center gap-2.5 text-sm text-text-muted">
                  <span className="text-primary">📍</span>
                  <span>
                    <span className="font-medium text-text">
                      {t("availability.basedIn")}{" "}
                    </span>
                    {getLocalized(profile.location, locale)}
                  </span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Canales */}
          <div className="flex flex-col gap-3">
            {channels.map((channel, i) => (
              <RevealOnScroll
                key={channel.key}
                direction="right"
                delay={i * 100}
                duration={500}
              >
                <ContactChannelRow
                  icon={channel.icon}
                  accent={channel.accent}
                  label={t(`channels.${channel.key}.label`)}
                  description={t(`channels.${channel.key}.description`)}
                  cta={t(`channels.${channel.key}.cta`)}
                  value={channel.value}
                  href={channel.href}
                  external={channel.external}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}