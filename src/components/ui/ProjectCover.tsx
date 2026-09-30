// src/components/ui/ProjectCover.tsx
import { SkillIcon } from "./SkillIcon";
import type { Project } from "@/seed/types";
import { cn } from "@/lib/utils/cn";

type Props = {
  project: Project;
  className?: string;
};

export function ProjectCover({ project, className }: Props) {
  const techsToShow = project.technologies.slice(0, 3);

  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded-t-3xl",
        "bg-gradient-to-br from-primary/10 via-bg-subtle to-accent/10",
        className,
      )}
    >
      {/* Patrón de puntos */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-border-strong) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Glow decorativo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary opacity-10 blur-3xl"
      />

      {/* Contenido */}
      <div className="relative flex h-full flex-col items-center justify-center gap-5 p-8">
        <div className="flex items-center gap-3 rounded-full border border-border bg-bg-elevated/90 px-5 py-3 shadow-lg shadow-primary/5 backdrop-blur-sm">
          {techsToShow.map((tech, i) => (
            <div key={tech} className="flex items-center gap-2">
              {i > 0 && <span className="text-text-muted/40">·</span>}
              <SkillIcon iconKey={getTechIconKey(tech)} className="h-5 w-5" />
            </div>
          ))}
        </div>

        <p className="max-w-xs text-center font-mono text-xs text-text-muted">
          {techsToShow.join(" · ")}
          {project.technologies.length > 3 && (
            <> · +{project.technologies.length - 3}</>
          )}
        </p>
      </div>

      {/* Gradiente inferior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg-elevated/60 to-transparent"
      />
    </div>
  );
}

function getTechIconKey(tech: string): string {
  const map: Record<string, string> = {
    "C#": "SiCsharp",
    "SQL Server": "SiMicrosoftsqlserver",
    "Power BI": "SiPowerbi",
    "React Native": "SiReact",
    "API REST": "Server",
    "Next.js": "SiNextdotjs",
    "NextAuth": "SiAuth0",
    "Entity Framework": "SiDotnet",
    ".NET": "SiDotnet",
    Bootstrap: "SiBootstrap",
    JWT: "Key",
    React: "SiReact",
    TypeScript: "SiTypescript",
    JavaScript: "SiJavascript",
    Auth0: "SiAuth0",
    Prisma: "SiPrisma",
    Expo: "SiExpo",
    SQLite: "SiSqlite",
    PHP: "SiPhp",
    MySQL: "SiMysql",
    AJAX: "Server",
    HTML: "SiHtml5",
    DAX: "BarChart3",
  };
  return map[tech] ?? "Code2";
}