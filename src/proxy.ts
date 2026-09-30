// src/proxy.ts
import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

/*
 * Proxy (antes "middleware") de i18n.
 *
 * Intercepta cada request y decide a qué locale redirigir.
 * Next.js 16 renombró este concepto de "middleware" a "proxy"
 * para dejar claro que actúa como un proxy de red en el borde.
 */
export default createMiddleware(routing);

export const config = {
  /*
   * Matcher: en qué rutas ejecutar el proxy.
   *
   * Excluye:
   *   - api        → rutas de API
   *   - _next      → archivos internos de Next.js
   *   - _vercel    → rutas internas de Vercel
   *   - *\..*      → cualquier ruta con extensión (.png, .pdf, etc.)
   */
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};