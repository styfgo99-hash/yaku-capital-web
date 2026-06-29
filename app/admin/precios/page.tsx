import { redirect } from "next/navigation";
import { haySesionActiva } from "../../../lib/auth";
import { leerPrecios } from "../../../lib/precios";
import FormularioPrecios from "./FormularioPrecios";

export const metadata = {
  title: "Panel de precios — YAKU CAPITAL",
  robots: "noindex, nofollow",
};

// Esta pagina NUNCA debe cachearse ni pre-renderizarse estaticamente,
// porque depende de la sesion del usuario y de datos que cambian.
export const dynamic = "force-dynamic";

export default async function PaginaPrecios() {
  // Verificacion de sesion DENTRO de la propia ruta protegida, no solo
  // en el proxy -- ver el comentario en lib/auth.ts sobre CVE-2025-29927.
  const sesionValida = await haySesionActiva();
  if (!sesionValida) {
    redirect("/admin/login");
  }

  const precios = await leerPrecios();

  return (
    <main style={{ minHeight: "100vh", padding: "3rem 1.5rem" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
          marginBottom: "2rem",
          color: "var(--color-text)",
        }}
      >
        Panel de precios — YAKU CAPITAL
      </h1>
      <FormularioPrecios
        precioInicialUsdt={precios.USDT}
        precioInicialUsdc={precios.USDC}
        actualizadoEn={precios.actualizadoEn}
      />
    </main>
  );
}
