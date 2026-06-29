"use client";

import { useActionState, useState } from "react";
import { accionGuardarPrecios, accionLogout } from "../../../lib/acciones";

const MARGEN_USDT = 0.035;
const MARGEN_USDC = 0.05;

interface Props {
  precioInicialUsdt: number;
  precioInicialUsdc: number;
  actualizadoEn: string;
}

export default function FormularioPrecios({
  precioInicialUsdt,
  precioInicialUsdc,
  actualizadoEn,
}: Props) {
  const [estado, ejecutarAccion, enProceso] = useActionState(
    accionGuardarPrecios,
    undefined
  );

  const [usdtVenta, setUsdtVenta] = useState(precioInicialUsdt.toString());
  const [usdcVenta, setUsdcVenta] = useState(precioInicialUsdc.toString());

  const usdtVentaNum = Number(usdtVenta);
  const usdcVentaNum = Number(usdcVenta);

  const usdtCompra = Number.isFinite(usdtVentaNum)
    ? (usdtVentaNum - MARGEN_USDT).toFixed(3)
    : "—";
  const usdcCompra = Number.isFinite(usdcVentaNum)
    ? (usdcVentaNum - MARGEN_USDC).toFixed(3)
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
            USDT
          </legend>
          <label
            htmlFor="usdt"
            style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}
          >
            Precio de venta (soles por USDT)
          </label>
          <input
            id="usdt"
            name="usdt"
            type="number"
            step="0.001"
            min="0"
            required
            value={usdtVenta}
            onChange={(evento) => setUsdtVenta(evento.target.value)}
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
            Precio de compra calculado (margen 0.035): <strong>{usdtCompra}</strong>
          </p>
        </fieldset>

        <fieldset
          style={{
            border: "1px solid var(--color-muted)",
            borderRadius: "10px",
            padding: "1rem 1.2rem",
          }}
        >
          <legend style={{ fontSize: "0.85rem", color: "var(--color-accent)" }}>
            USDC
          </legend>
          <label
            htmlFor="usdc"
            style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}
          >
            Precio de venta (soles por USDC)
          </label>
          <input
            id="usdc"
            name="usdc"
            type="number"
            step="0.001"
            min="0"
            required
            value={usdcVenta}
            onChange={(evento) => setUsdcVenta(evento.target.value)}
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
            Precio de compra calculado (margen 0.05): <strong>{usdcCompra}</strong>
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
