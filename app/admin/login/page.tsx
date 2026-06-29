import { redirect } from "next/navigation";
import { haySesionActiva } from "../../../lib/auth";
import FormularioLogin from "./FormularioLogin";

export const metadata = {
  title: "Acceso administrador — YAKU CAPITAL",
  robots: "noindex, nofollow",
};

export default async function PaginaLogin() {
  const yaTieneSesion = await haySesionActiva();
  if (yaTieneSesion) {
    redirect("/admin/precios");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div style={{ width: "100%" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "1.1rem",
            marginBottom: "2rem",
            color: "var(--color-text)",
          }}
        >
          Panel de precios — YAKU CAPITAL
        </h1>
        <FormularioLogin />
      </div>
    </main>
  );
}
