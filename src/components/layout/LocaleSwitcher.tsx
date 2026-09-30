// src/components/layout/LocaleSwitcher.tsx
"use client";

import { Check, Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState, useTransition } from "react";

import { appLocales } from "@/i18n/routing-config";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils/cn";

export function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLocale = appLocales.find((l) => l.value === locale) ?? appLocales[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  function handleChange(nextLocale: string) {
    setOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("label")}
        aria-expanded={open}
        disabled={isPending}
        className={cn(
          "flex h-10 items-center gap-2 rounded-full border border-border bg-bg-elevated px-4 text-sm font-medium text-text transition-all",
          "hover:border-primary/50 hover:bg-bg-subtle",
          open && "border-primary/50 bg-bg-subtle",
          isPending && "opacity-60",
        )}
      >
        <Globe className="h-4 w-4 text-primary" />
        <span className="hidden sm:inline uppercase">{currentLocale.value}</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-48 origin-top-right rounded-2xl border border-border bg-bg-elevated p-1.5 shadow-2xl"
        >
          {appLocales.map((l) => {
            const active = l.value === locale;
            return (
              <button
                key={l.value}
                type="button"
                onClick={() => handleChange(l.value)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm transition-all",
                  active
                    ? "bg-primary/10 text-text"
                    : "text-text-muted hover:bg-bg-subtle hover:text-text",
                )}
              >
                <span className="text-base">{l.flag}</span>
                <span className="flex-1 text-left font-medium">{l.label}</span>
                {active && <Check className="h-4 w-4 text-primary" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}