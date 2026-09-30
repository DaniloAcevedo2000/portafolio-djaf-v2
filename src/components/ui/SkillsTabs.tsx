// `src/components/ui/SkillsTabs.tsx`
"use client";

import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import type { SkillCategory } from "@/seed/types";
import { cn } from "@/lib/utils/cn";

import { SkillIcon } from "./SkillIcon";
import { SkillPill } from "./SkillPill";

type SkillsTabsProps = {
  categories: SkillCategory[];
  locale: string;
};

export function SkillsTabs({ categories, locale }: SkillsTabsProps) {
  const t = useTranslations("sections.skills");
  const l = locale as "es" | "en";

  const [activeTab, setActiveTab] = useState(categories[0]?.id ?? "");
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const isSearching = query.trim().length > 0;

  // Atajo `/` para enfocar el input
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape" && document.activeElement === inputRef.current) {
        setQuery("");
        inputRef.current?.blur();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Búsqueda global: filtra por nombre, en todas las categorías
  const searchResults = useMemo(() => {
    if (!isSearching) return [];
    const q = query.toLowerCase();
    const results: { category: SkillCategory; skills: SkillCategory["skills"] }[] = [];
    for (const cat of categories) {
      const matches = cat.skills.filter((s) =>
        s.name.toLowerCase().includes(q),
      );
      if (matches.length > 0) {
        results.push({ category: cat, skills: matches });
      }
    }
    return results;
  }, [query, categories, isSearching]);

  const totalResults = searchResults.reduce(
    (acc, r) => acc + r.skills.length,
    0,
  );

  const activeCategory = categories.find((c) => c.id === activeTab);

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-bg-elevated/50 backdrop-blur-sm">
      {/* ─── Barra de tabs + búsqueda ─── */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-6 py-4">
        {/* Tabs (ocultos si buscamos) */}
        <div
          role="tablist"
          aria-label={t("tabsAria")}
          className={cn(
            "flex flex-wrap items-center gap-1 transition-opacity duration-200",
            isSearching && "pointer-events-none opacity-30",
          )}
        >
          {categories.map((cat) => {
            const active = cat.id === activeTab && !isSearching;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={active}
                type="button"
                onClick={() => {
                  setActiveTab(cat.id);
                  setQuery("");
                }}
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-text-muted hover:bg-bg-subtle hover:text-text",
                )}
              >
                <SkillIcon iconKey={cat.iconKey} className="h-4 w-4" />
                <span>{cat.name[l]}</span>
                <span className="text-xs opacity-60">
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Búsqueda */}
        <div className="relative w-full sm:w-64">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-mono text-xs text-primary">
            $
          </span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("search.placeholder")}
            aria-label={t("search.placeholder")}
            className={cn(
              "w-full rounded-xl border border-border bg-bg py-2 pl-7 pr-10",
              "font-mono text-xs text-text placeholder:text-text-muted",
              "outline-none transition-colors",
              "focus:border-primary/50 focus:ring-2 focus:ring-primary/20",
            )}
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label={t("search.clear")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted transition-colors hover:text-text"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          ) : (
            <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded border border-border bg-bg-subtle px-1.5 py-0.5 font-mono text-[10px] text-text-muted sm:inline-block">
              /
            </kbd>
          )}
        </div>
      </div>

      {/* ─── Contenido ─── */}
      <div className="p-6 sm:p-8">
        {isSearching ? (
          // Modo búsqueda
          totalResults === 0 ? (
            <div className="flex flex-col items-center gap-2 py-8 text-center">
              <Search className="h-6 w-6 text-text-muted" />
              <p className="text-sm text-text-muted">
                {t("search.noResults")}
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {searchResults.map(({ category, skills }) => (
                <div key={category.id}>
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                    {category.name[l]}
                  </p>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    {skills.map((skill) => (
                      <SkillPill key={`${category.id}-${skill.name}`} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          // Modo normal: categoría activa
          activeCategory && (
            <div>
              <p className="mb-6 max-w-3xl text-sm leading-relaxed text-text-muted sm:text-base">
                {activeCategory.description[l]}
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {activeCategory.skills.map((skill) => (
                  <SkillPill key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}