"use client";

import { useState } from "react";

interface DatosPrecio {
  venta: number;
  compra: number;
}

interface Props {
  datos: {
    USDT: DatosPrecio;
    USDC: DatosPrecio;
  };
}

type Activo = "USDT" | "USDC";
type Operacion = "comprar" | "vender";

export default function CotizadorWidget({ datos }: Props) {
  const [activo, setActivo] = useState<Activo>("USDT");
  const [operacion, setOperacion] = useState<Operacion>("comprar");
  const [montoSoles, setMontoSoles] = useState("100");

  const precioActual =
    operacion === "comprar" ? datos[activo].venta : datos[activo].compra;

  const monto = Number(montoSoles);
  const resultado =
    Number.isFinite(monto) && monto > 0 ? (monto / precioActual).toFixed(2) : "0.00";

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        padding: "1.5rem",
        maxWidth: "380px",
        backdropFilter: "blur(8px)",
      }}
    >
      <h3
        style={{
          margin: "0 0 1rem",
          fontSize: "1rem",
          color: "var(--color-text)",
        }}
      >
        Cotizador
      </h3>

      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        {(["USDT", "USDC"] as Activo[]).map((opcion) => (
          <button
            key={opcion}
            type="button"
            onClick={() => setActivo(opcion)}
            style={{
              flex: 1,
              padding: "0.5rem",
              borderRadius: "8px",
              border:
                activo === opcion
                  ? "1px solid var(--color-accent)"
                  : "1px solid rgba(255,255,255,0.12)",
              background:
                activo === opcion ? "rgba(14,165,255,0.12)" : "transparent",
              color:
                activo === opcion ? "var(--color-accent)" : "var(--color-muted)",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            {opcion}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.2rem" }}>
        {(
          [
            { valor: "comprar" as Operacion, etiqueta: "Quiero comprar" },
            { valor: "vender" as Operacion, etiqueta: "Quiero vender" },
          ]
        ).map((opcion) => (
          <button
            key={opcion.valor}
            type="button"
            onClick={() => setOperacion(opcion.valor)}
            style={{
              flex: 1,
              padding: "0.5rem",
              borderRadius: "8px",
              border:
                operacion === opcion.valor
                  ? "1px solid var(--color-accent)"
                  : "1px solid rgba(255,255,255,0.12)",
              background:
                operacion === opcion.valor
                  ? "rgba(14,165,255,0.12)"
                  : "transparent",
              color:
                operacion === opcion.valor
                  ? "var(--color-accent)"
                  : "var(--color-muted)",
              cursor: "pointer",
              fontSize: "0.85rem",
            }}
          >
            {opcion.etiqueta}
          </button>
        ))}
      </div>

      <label
        htmlFor="monto-soles"
        style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}
      >
        {operacion === "comprar" ? "Pagas (soles)" : "Recibes (soles)"}
      </label>
      <input
        id="monto-soles"
        type="number"
        min="0"
        value={montoSoles}
        onChange={(evento) => setMontoSoles(evento.target.value)}
        style={{
          width: "100%",
          marginTop: "0.3rem",
          marginBottom: "1rem",
          padding: "0.6rem 0.8rem",
          borderRadius: "8px",
          border: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(255,255,255,0.03)",
          color: "var(--color-text)",
          fontSize: "1.1rem",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          padding: "0.8rem 1rem",
          background: "rgba(14,165,255,0.08)",
          borderRadius: "10px",
          marginBottom: "1rem",
        }}
      >
        <span style={{ fontSize: "0.85rem", color: "var(--color-muted)" }}>
          {operacion === "comprar" ? "Recibes" : "Entregas"}
        </span>
        <span
          style={{
            fontSize: "1.4rem",
            fontWeight: 700,
            color: "var(--color-accent-light)",
          }}
        >
          {resultado} {activo}
        </span>
      </div>

      <p
        style={{
          fontSize: "0.75rem",
          color: "var(--color-muted)",
          margin: 0,
          textAlign: "center",
        }}
      >
        Tipo de cambio: {precioActual.toFixed(3)} PEN por {activo}
      </p>
    </div>
  );
}
