// src/components/ui/AnimatedTerminal.tsx
"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils/cn";

type TerminalLine =
  | { type: "json-open" }
  | { type: "json-entry"; key: string; value: string | number | boolean }
  | { type: "json-array"; key: string; items: string[] }
  | { type: "json-object"; key: string; entries: [string, string][] }
  | { type: "json-close" };

type AnimatedTerminalProps = {
  command: string;
  data: Record<string, unknown>;
  className?: string;
};

export function AnimatedTerminal({
  command,
  data,
  className,
}: AnimatedTerminalProps) {
  const containerRef = useRef<HTMLPreElement>(null);
  const startedRef = useRef(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const [typedCommand, setTypedCommand] = useState("");
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Convertir el objeto en líneas animables
  const lines: TerminalLine[] = [
    { type: "json-open" },
    ...Object.entries(data).flatMap(([key, value]): TerminalLine[] => {
      if (Array.isArray(value)) {
        return [{ type: "json-array", key, items: value.map(String) }];
      }
      if (typeof value === "object" && value !== null) {
        return [
          {
            type: "json-object",
            key,
            entries: Object.entries(value as Record<string, unknown>).map(
              ([k, v]) => [k, String(v)],
            ),
          },
        ];
      }
      return [
        {
          type: "json-entry",
          key,
          value: value as string | number | boolean,
        },
      ];
    }),
    { type: "json-close" },
  ];

  // ─── Observar cuando el componente entra en viewport ───
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            setHasStarted(true);
          }
        });
      },
      {
        threshold: 0.3, // 30% visible
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // ─── Animación: se ejecuta cuando hasStarted === true ───
  useEffect(() => {
    if (!hasStarted) return;

    // Reset (por si acaso)
    setTypedCommand("");
    setVisibleLines(0);
    setShowCursor(false);

    // 1) Escribir el comando letra por letra
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      charIndex++;
      setTypedCommand(command.slice(0, charIndex));
      if (charIndex >= command.length) {
        clearInterval(typeInterval);

        // 2) Después de un delay, empezar a mostrar líneas del JSON
        const t = setTimeout(() => {
          let currentLine = 0;
          const lineInterval = setInterval(() => {
            currentLine++;
            setVisibleLines(currentLine);
            if (currentLine >= lines.length) {
              clearInterval(lineInterval);
              setShowCursor(true);
            }
          }, 180);
          timersRef.current.push(lineInterval);
        }, 400);
        timersRef.current.push(t);
      }
    }, 50);

    timersRef.current.push(typeInterval);

    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current.forEach(clearInterval);
      timersRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasStarted, command, lines.length]);

  return (
    <pre
      ref={containerRef}
      className={cn(
        "overflow-x-auto whitespace-pre font-mono text-[13px] leading-relaxed",
        className,
      )}
    >
      {/* Comando que se está "escribiendo" */}
      <div className="text-white">
        <span className="text-emerald-400">
          {typedCommand}
          {typedCommand.length < command.length && hasStarted && (
            <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-emerald-400 align-middle" />
          )}
        </span>
      </div>

      {/* Líneas del JSON que aparecen una por una */}
      {lines.map((line, i) => {
        const isVisible = i < visibleLines;
        if (!isVisible) return null;

        return (
          <div
            key={i}
            className="animate-fade-in"
            style={{ animationDuration: "250ms" }}
          >
            <LineContent
              line={line}
              isLast={i === lines.length - 1}
            />
          </div>
        );
      })}

      {/* Cursor parpadeante al final */}
      {showCursor && (
        <div className="text-white">
          <span className="text-emerald-400">$ </span>
          <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-emerald-400 align-middle" />
        </div>
      )}
    </pre>
  );
}

// ─────────────────────────────────────────────
// Render de cada tipo de línea
// ─────────────────────────────────────────────
function LineContent({
  line,
  isLast,
}: {
  line: TerminalLine;
  isLast: boolean;
}) {
  const comma = isLast ? "" : ",";

  if (line.type === "json-open") {
    return <span className="text-white/90">&#123;</span>;
  }

  if (line.type === "json-close") {
    return <span className="text-white/90">&#125;</span>;
  }

  if (line.type === "json-entry") {
    return (
      <span className="text-white/90">
        {"  "}
        <span className="text-sky-400">&quot;{line.key}&quot;</span>
        {": "}
        <ValueSpan value={line.value} />
        {comma}
      </span>
    );
  }

  if (line.type === "json-array") {
    return (
      <span className="text-white/90">
        {"  "}
        <span className="text-sky-400">&quot;{line.key}&quot;</span>
        {": ["}
        {line.items.map((item, i) => (
          <span key={i}>
            <span className="text-amber-300">&quot;{item}&quot;</span>
            {i < line.items.length - 1 && ", "}
          </span>
        ))}
        ]{comma}
      </span>
    );
  }

  if (line.type === "json-object") {
    return (
      <span className="text-white/90">
        {"  "}
        <span className="text-sky-400">&quot;{line.key}&quot;</span>
        {": {"}
        {line.entries.map(([k, v], i) => (
          <span key={k}>
            <br />
            {"    "}
            <span className="text-sky-400">&quot;{k}&quot;</span>
            {": "}
            <span className="text-amber-300">&quot;{v}&quot;</span>
            {i < line.entries.length - 1 && ","}
          </span>
        ))}
        <br />
        {"  }"}
        {comma}
      </span>
    );
  }

  return null;
}

function ValueSpan({ value }: { value: string | number | boolean }) {
  if (typeof value === "string") {
    return <span className="text-amber-300">&quot;{value}&quot;</span>;
  }
  if (typeof value === "number") {
    return <span className="text-orange-400">{value}</span>;
  }
  if (typeof value === "boolean") {
    return <span className="text-purple-400">{String(value)}</span>;
  }
  return <span className="text-white/50">{String(value)}</span>;
}