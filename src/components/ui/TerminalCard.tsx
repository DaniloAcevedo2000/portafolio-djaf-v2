// src/components/ui/TerminalCard.tsx
import { cn } from "@/lib/utils/cn";

type TerminalCardProps = {
  title?: string;
  className?: string;
  children: React.ReactNode;
};

export function TerminalCard({
  title = "~/profile",
  className,
  children,
}: TerminalCardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-[#0d1117] shadow-2xl",
        "font-mono text-sm",
        className,
      )}
    >
      {/* Barra superior estilo macOS */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-[#161b22] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-xs text-white/40">{title}</span>
      </div>

      {/* Contenido */}
      <div className="overflow-x-auto p-5 text-[13px] leading-relaxed">
        {children}
      </div>
    </div>
  );
}