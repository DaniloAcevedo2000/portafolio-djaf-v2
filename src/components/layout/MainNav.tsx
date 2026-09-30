// src/components/layout/MainNav.tsx
"use client";

import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { useState } from "react";

import { navigation, type NavItem } from "@/config/navigation";
import { cn } from "@/lib/utils/cn";

import { MegaDropdown } from "./MegaDropdown";

export function MainNav() {
  const locale = useLocale() as "es" | "en";
  const [openId, setOpenId] = useState<string | null>(null);

  const openItem = navigation.find(
    (item) => item.id === openId && item.type === "dropdown",
  );

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="hidden items-center gap-1 lg:flex"
      >
        {navigation.map((item) => {
          const isOpen = openId === item.id;
          const label = item.label[locale];

          if (item.type === "link") {
            return (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-text-muted transition-all",
                  "hover:bg-bg-subtle hover:text-text",
                )}
              >
                {label}
              </a>
            );
          }

          return (
            <button
              key={item.id}
              type="button"
              onClick={() =>
                setOpenId((current) => (current === item.id ? null : item.id))
              }
              onMouseEnter={() => setOpenId(item.id)}
              aria-expanded={isOpen}
              aria-haspopup="menu"
              className={cn(
                "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all",
                isOpen
                  ? "bg-primary/10 text-primary"
                  : "text-text-muted hover:bg-bg-subtle hover:text-text",
              )}
            >
              {label}
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  isOpen && "rotate-180",
                )}
              />
            </button>
          );
        })}
      </nav>

      {/* Mega dropdown: se renderiza FUERA del nav, anclado al header completo */}
      {openItem && openItem.type === "dropdown" && (
        <div
          className="absolute left-0 right-0 top-full z-40 hidden lg:block"
          onMouseLeave={() => setOpenId(null)}
        >
          <div className="mx-auto max-w-7xl px-6 pt-2">
            <div className="animate-in fade-in slide-in-from-top-2 duration-200">
              <MegaDropdown
                group={openItem.group}
                locale={locale}
                onNavigate={() => setOpenId(null)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}