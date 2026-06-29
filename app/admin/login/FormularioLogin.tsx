"use client";

import { useActionState } from "react";
import { accionLogin } from "../../../lib/acciones";

export default function FormularioLogin() {
  const [estado, ejecutarAccion, enProceso] = useActionState(
    accionLogin,
    undefined
  );

  return (
    <form
      action={ejecutarAccion}
      style={{
        maxWidth: "360px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <label htmlFor="contrasena" style={{ fontSize: "0.9rem" }}>
        Contrasena de administrador
      </label>
      <input
        id="contrasena"
        name="contrasena"
        type="password"
        autoComplete="current-password"
        required
        style={{
          padding: "0.6rem 0.8rem",
          borderRadius: "8px",
          border: "1px solid var(--color-muted)",
          background: "transparent",
          color: "var(--color-text)",
        }}
      />

      {estado?.error && (
        <p style={{ color: "#ff6b6b", fontSize: "0.85rem", margin: 0 }}>
          {estado.error}
        </p>
      )}

      <button
        type="submit"
        disabled={enProceso}
        style={{
          padding: "0.7rem",
          borderRadius: "8px",
          border: "none",
          background: "var(--color-accent)",
          color: "#0A1018",
          fontWeight: 600,
          cursor: enProceso ? "wait" : "pointer",
          opacity: enProceso ? 0.7 : 1,
        }}
      >
        {enProceso ? "Verificando..." : "Ingresar"}
      </button>
    </form>
  );
}
