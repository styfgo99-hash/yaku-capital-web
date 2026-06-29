import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/*
  En Next.js 16, middleware.ts fue renombrado a proxy.ts.

  Esta capa es solo una OPTIMIZACION (evita cargar la pagina si claramente
  no hay cookie de sesion) -- la verificacion de seguridad real ocurre
  dentro de cada Server Component protegido (ver app/admin/precios/page.tsx),
  por las razones explicadas en lib/auth.ts (CVE-2025-29927).

  Aqui solo comprobamos que la cookie EXISTA, sin verificar su firma --
  esa verificacion criptografica completa pasa dentro de la pagina misma.
*/

const NOMBRE_COOKIE = "yaku_admin_session";

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin/precios")) {
    const tieneCookie = request.cookies.has(NOMBRE_COOKIE);
    if (!tieneCookie) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
