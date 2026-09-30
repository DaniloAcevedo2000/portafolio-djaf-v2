// src/i18n/routing.ts
import { defineRouting } from "next-intl/routing";

import {
  locales,
  defaultLocale,
  localePrefix,
  pathnames,
} from "./routing-config";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix,
  pathnames,
});