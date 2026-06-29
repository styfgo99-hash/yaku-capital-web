import { put, list } from "@vercel/blob";
import { promises as fs } from "fs";
import path from "path";
import { MARGENES, type Activo } from "../config-precios";

/*
  ALMACENAMIENTO DE PRECIOS
  ---------------------------
  En PRODUCCION (Vercel): usa Vercel Blob, que persiste entre despliegues
  y es gratuito en el plan Hobby. La autenticacion se maneja automaticamente
  via OIDC (VERCEL_OIDC_TOKEN + BLOB_STORE_ID), que Vercel configura solo
  al conectar el Blob store al proyecto -- no hay tokens que copiar a mano.

  En DESARROLLO LOCAL (npm run dev): usa un archivo JSON local.
*/

const RUTA_ARCHIVO_LOCAL = path.join(process.cwd(), "data", "precios.json");
const NOMBRE_BLOB = "precios-venta.json";

export interface PreciosVenta {
  USDT: number;
  USDC: number;
  actualizadoEn: string;
}

const PRECIOS_POR_DEFECTO: PreciosVenta = {
  USDT: 3.34,
  USDC: 3.34,
  actualizadoEn: new Date().toISOString(),
};

function usandoBlob(): boolean {
  return Boolean(process.env.BLOB_STORE_ID || process.env.BLOB_READ_WRITE_TOKEN);
}

async function leerDeArchivoLocal(): Promise<PreciosVenta> {
  try {
    const contenido = await fs.readFile(RUTA_ARCHIVO_LOCAL, "utf-8");
    return JSON.parse(contenido) as PreciosVenta;
  } catch {
    return PRECIOS_POR_DEFECTO;
  }
}

async function guardarEnArchivoLocal(datos: PreciosVenta): Promise<void> {
  await fs.mkdir(path.dirname(RUTA_ARCHIVO_LOCAL), { recursive: true });
  await fs.writeFile(
    RUTA_ARCHIVO_LOCAL,
    JSON.stringify(datos, null, 2),
    "utf-8"
  );
}

async function leerDeBlob(): Promise<PreciosVenta> {
  try {
    const resultado = await list({ prefix: NOMBRE_BLOB });
    if (resultado.blobs.length === 0) {
      return PRECIOS_POR_DEFECTO;
    }
    const ultimoBlob = resultado.blobs[0];
    const respuesta = await fetch(ultimoBlob.url);
    if (!respuesta.ok) {
      return PRECIOS_POR_DEFECTO;
    }
    const datos = await respuesta.json();
    return datos as PreciosVenta;
  } catch {
    return PRECIOS_POR_DEFECTO;
  }
}

async function guardarEnBlob(datos: PreciosVenta): Promise<void> {
  await put(NOMBRE_BLOB, JSON.stringify(datos), {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/json",
  });
}

export async function leerPrecios(): Promise<PreciosVenta> {
  if (usandoBlob()) {
    return leerDeBlob();
  }
  return leerDeArchivoLocal();
}

export async function guardarPrecios(nuevosPrecios: {
  USDT: number;
  USDC: number;
}): Promise<PreciosVenta> {
  const datos: PreciosVenta = {
    USDT: nuevosPrecios.USDT,
    USDC: nuevosPrecios.USDC,
    actualizadoEn: new Date().toISOString(),
  };

  if (usandoBlob()) {
    await guardarEnBlob(datos);
  } else {
    await guardarEnArchivoLocal(datos);
  }

  return datos;
}

export function calcularPrecioCompra(
  activo: Activo,
  precioVenta: number
): number {
  const margen = MARGENES[activo];
  return Math.round((precioVenta - margen) * 1000) / 1000;
}