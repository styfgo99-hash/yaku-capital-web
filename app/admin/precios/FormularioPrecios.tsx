"use client";

import { useActionState, useState } from "react";
import { accionGuardarPrecios, accionLogout } from "../../../lib/acciones";

const MARGEN_USD = 0.035;

interface Props {
  precioInicialUsd: number;
  actualizadoEn: string;
}

export default function FormularioPrecios({
  precioInicialUsd,
  actualizadoEn,
}: Props) {
  const [estado, ejecutarAccion, enProceso] = useActionState(
    accionGuardarPrecios,
    undefined
  );

  const [usdVenta, setUsdVenta] = useState(precioInicialUsd.toString());

  const usdVentaNum = Number(usdVenta);

  const usdCompra = Number.isFinite(usdVentaNum)
    ? (usdVentaNum - MARGEN_USD).toFixed(3)
    : "—";

  return (
    <div style={{ maxWidth: "480px", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <p style={{ fontSize: "0.8rem", color: "var(--color-muted)", margin: 0 }}>
          Ultima actualizacion: {new Date(actualizadoEn).toLocaleString("es-PE")}
        </p>
        <form action={accionLogout}>
          <button
            type="submit"
            style={{
              fontSize: "0.8rem",
              background: "none",
              border: "1px solid var(--color-muted)",
              color: "var(--color-muted)",
              borderRadius: "6px",
              padding: "0.3rem 0.7rem",
              cursor: "pointer",
            }}
          >
            Cerrar sesion
          </button>
        </form>
      </div>

      <form
        action={ejecutarAccion}
        style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
      >
        <fieldset
          style={{
            border: "1px solid var(--color-muted)",
            borderRadius: "10px",
            padding: "1rem 1.2rem",
          }}
        >
          <legend style={{ fontSize: "0.85rem", color: "var(--color-accent)" }}>
            USD
          </legend>
          <label
            htmlFor="usd"
            style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}
          >
            Precio de venta del dólar (soles por USD)
          </label>
          <input
            id="usd"
            name="usd"
            type="number"
            step="0.001"
            min="0"
            required
            value={usdVenta}
            onChange={(evento) => setUsdVenta(evento.target.value)}
            style={{
              width: "100%",
              marginTop: "0.4rem",
              padding: "0.6rem 0.8rem",
              borderRadius: "8px",
              border: "1px solid var(--color-muted)",
              background: "transparent",
              color: "var(--color-text)",
              fontSize: "1.1rem",
            }}
          />
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--color-silver)",
              marginTop: "0.6rem",
              marginBottom: 0,
            }}
          >
            Precio de compra calculado (margen 0.035): <strong>{usdCompra}</strong>
          </p>
        </fieldset>

        {estado?.error && (
          <p style={{ color: "#ff6b6b", fontSize: "0.85rem", margin: 0 }}>
            {estado.error}
          </p>
        )}
        {estado?.exito && (
          <p style={{ color: "#4ade80", fontSize: "0.85rem", margin: 0 }}>
            Precios actualizados. Ya se reflejan en el cotizador del sitio.
          </p>
        )}

        <button
          type="submit"
          disabled={enProceso}
          style={{
            padding: "0.8rem",
            borderRadius: "8px",
            border: "none",
            background: "var(--color-accent)",
            color: "#0A1018",
            fontWeight: 600,
            cursor: enProceso ? "wait" : "pointer",
            opacity: enProceso ? 0.7 : 1,
          }}
        >
          {enProceso ? "Guardando..." : "Guardar precios"}
        </button>
      </form>
    </div>
  );
}
