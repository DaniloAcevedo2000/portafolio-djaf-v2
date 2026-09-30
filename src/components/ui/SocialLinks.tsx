// src/components/ui/SocialLinks.tsx
import { Globe, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { cn } from "@/lib/utils/cn";

type SocialLinksProps = {
  github?: string;
  linkedin?: string;
  email?: string;
  portfolio?: string;
  className?: string;
  size?: "sm" | "md";
};

const sizeClasses = {
  sm: { button: "h-9 w-9", icon: "h-4 w-4", brandIcon: "h-4 w-4" },
  md: { button: "h-11 w-11", icon: "h-5 w-5", brandIcon: "h-5 w-5" },
} as const;

export function SocialLinks({
  github,
  linkedin,
  email,
  portfolio,
  className,
  size = "md",
}: SocialLinksProps) {
  const sizes = sizeClasses[size];

  const linkClass = cn(
    "inline-flex items-center justify-center rounded-full border border-border bg-bg-elevated text-text-muted transition-all hover:border-primary hover:text-primary",
    sizes.button,
  );

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-3",
        className,
      )}
    >
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={linkClass}
        >
          <FaGithub className={sizes.brandIcon} />
        </a>
      )}
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={linkClass}
        >
          <FaLinkedin className={sizes.brandIcon} />
        </a>
      )}
      {email && (
        <a href={`mailto:${email}`} aria-label="Email" className={linkClass}>
          <Mail className={sizes.icon} />
        </a>
      )}
      {portfolio && (
        <a
          href={portfolio}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Portfolio"
          className={linkClass}
        >
          <Globe className={sizes.icon} />
        </a>
      )}
    </div>
  );
}