// src/components/layout/Footer.tsx
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { getManaguaWeather } from "@/lib/api/weather";
import { getProfile } from "@/lib/repositories/profile.repository";
import { getLocalized } from "@/lib/utils/localized";

import { WeatherWidget } from "./WeatherWidget";

type Props = {
  locale: string;
};

const NAV_LINKS = [
  { href: "#top", key: "home" },
  { href: "#about", key: "about" },
  { href: "#experience", key: "experience" },
  { href: "#skills", key: "skills" },
  { href: "#projects", key: "projects" },
  { href: "#services", key: "services" },
  { href: "#contact", key: "contact" },
] as const;

export async function Footer({ locale }: Props) {
  const t = await getTranslations("footer");
  const tHeader = await getTranslations("header");
  const profile = await getProfile();
  const weather = await getManaguaWeather();

  const year = new Date().getFullYear();

  return (
    <footer
      className="relative"
      style={{
        backgroundColor: "var(--color-footer-bg)",
        color: "var(--color-footer-text)",
      }}
    >
      <Container size="lg" className="py-16">
        {/* Grid: 3 columnas */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1.2fr] lg:gap-16">
          {/* ─── Columna 1: Marca ─── */}
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-90"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold shadow-md"
                style={{
                  backgroundColor: "var(--color-footer-text)",
                  color: "var(--color-footer-bg)",
                }}
              >
                {tHeader("brandShort")}
              </span>
              <span
                className="text-base font-bold"
                style={{ color: "var(--color-footer-text)" }}
              >
                {tHeader("brandName")}
              </span>
            </a>

            <p
              className="mt-5 max-w-xs text-sm leading-relaxed"
              style={{ color: "var(--color-footer-text-muted)" }}
            >
              {getLocalized(profile.headline, locale)}
            </p>

            {/* Redes */}
            <div className="mt-5 flex items-center gap-2">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border transition-all hover:scale-105"
                style={{
                  borderColor: "var(--color-footer-border)",
                  color: "var(--color-footer-text-muted)",
                }}
              >
                <FaGithub className="h-4 w-4" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border transition-all hover:scale-105"
                style={{
                  borderColor: "var(--color-footer-border)",
                  color: "var(--color-footer-text-muted)",
                }}
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border transition-all hover:scale-105"
                style={{
                  borderColor: "var(--color-footer-border)",
                  color: "var(--color-footer-text-muted)",
                }}
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <p
              className="mt-5 text-xs"
              style={{ color: "var(--color-footer-text-subtle)" }}
            >
              📍 {getLocalized(profile.location, locale)}
            </p>
          </div>

          {/* ─── Columna 2: Navegación ─── */}
          <div>
            <h3
              className="font-mono text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--color-footer-text)" }}
            >
              {t("navigationTitle")}
            </h3>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.map(({ href, key }) => (
                <li key={key}>
                  <a
                    href={href}
                    className="text-sm transition-opacity hover:opacity-100"
                    style={{ color: "var(--color-footer-text-muted)" }}
                  >
                    {t(`navigation.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Columna 3: Weather Widget ─── */}
          <div>
            <WeatherWidget
              weather={weather}
              location={getLocalized(profile.location, locale)}
              labels={{
                live: t("weather.live"),
                wind: t("weather.wind"),
                weatherUnavailable: t("weather.unavailable"),
                poweredBy: t("weather.poweredBy"),
              }}
            />
          </div>
        </div>

        {/* ─── Bottom bar ─── */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row"
          style={{ borderColor: "var(--color-footer-border)" }}
        >
          <p
            className="text-xs"
            style={{ color: "var(--color-footer-text-subtle)" }}
          >
            © {year} {profile.name}. {t("rights")}
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/timeline"
              className="text-xs transition-opacity hover:opacity-100"
              style={{ color: "var(--color-footer-text-muted)" }}
            >
              {t("links.timeline")}
            </Link>
            <a
              href="#top"
              aria-label={t("backToTop")}
              className="flex h-9 w-9 items-center justify-center rounded-full border transition-all hover:scale-105"
              style={{
                borderColor: "var(--color-footer-border)",
                color: "var(--color-footer-text-muted)",
              }}
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}