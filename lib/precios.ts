import { put, list, get } from "@vercel/blob";
import { promises as fs } from "fs";
import path from "path";
import { MARGENES, type Activo } from "../config-precios";

/*
  ALMACENAMIENTO DE PRECIOS
  ---------------------------
  En PRODUCCION (Vercel): usa Vercel Blob (store PRIVADO), con
  autenticacion automatica via OIDC (VERCEL_OIDC_TOKEN + BLOB_STORE_ID),
  que Vercel configura solo al conectar el Blob store al proyecto -- no
  hay tokens que copiar a mano.

  Como el store es privado, usamos get() del SDK (no fetch a una URL
  cruda) para leer el contenido -- get() maneja la autenticacion
  necesaria para blobs privados.

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
  return Boolean(
    process.env.BLOB_STORE_ID || process.env.BLOB_READ_WRITE_TOKEN
  );
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
    const existe = await list({ prefix: NOMBRE_BLOB, limit: 1 });
    if (existe.blobs.length === 0) {
      return PRECIOS_POR_DEFECTO;
    }

    const respuesta = await get(NOMBRE_BLOB, { access: "private" });
    if (!respuesta || respuesta.statusCode !== 200) {
      return PRECIOS_POR_DEFECTO;
    }
    const texto = await new Response(respuesta.stream).text();
    return JSON.parse(texto) as PreciosVenta;
  } catch {
    return PRECIOS_POR_DEFECTO;
  }
}

async function guardarEnBlob(datos: PreciosVenta): Promise<void> {
  await put(NOMBRE_BLOB, JSON.stringify(datos), {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
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