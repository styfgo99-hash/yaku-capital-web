import { promises as fs } from "fs";
import path from "path";
import { MARGENES, type Activo } from "../config-precios";

/*
  ALMACENAMIENTO DE PRECIOS
  ---------------------------
  En PRODUCCION (Vercel): usa Edge Config, que SI persiste entre
  despliegues y es gratuito en el plan Hobby.

  En DESARROLLO LOCAL (npm run dev): usa un archivo JSON local, porque
  conectar Edge Config requiere "vercel env pull" primero. Esto te deja
  probar todo el flujo sin configurar nada externo todavia.

  ----------------------------------------------------------------------
  CONFIGURACION REQUERIDA EN VERCEL (una sola vez, deberia tomar 5 min):

  1. En el dashboard de Vercel, dentro del proyecto yaku-capital-web:
     Storage -> Create Database -> Edge Config -> nombrarlo "precios_yaku"

  2. Una vez creado, conectalo al proyecto (deberia ofrecerse automatico).
     Esto crea la variable de entorno EDGE_CONFIG.

  3. En tu terminal, dentro de la carpeta del proyecto:
       npm install @vercel/edge-config
       vercel link
       vercel env pull .env.local

  4. Para ESCRIBIR en Edge Config necesitas tambien un token de API y el
     ID del Edge Config (no solo la connection string de lectura).
     Ve a: Vercel dashboard -> tu Edge Config -> Settings -> copia:
       - EDGE_CONFIG_ID
       - Token (crealo en Account Settings -> Tokens si no tienes uno)
     Agrega ambos a .env.local:
       EDGE_CONFIG_ID=ecfg_xxxxxxxx
       VERCEL_API_TOKEN=xxxxxxxx

  5. Repite el mismo .env.local en Vercel -> Settings -> Environment
     Variables, para que funcione tambien en produccion.
  ----------------------------------------------------------------------
*/

const RUTA_ARCHIVO_LOCAL = path.join(process.cwd(), "data", "precios.json");
const CLAVE_EDGE_CONFIG = "precios_venta";

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

function usandoEdgeConfig(): boolean {
  return Boolean(process.env.EDGE_CONFIG);
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

async function leerDeEdgeConfig(): Promise<PreciosVenta> {
  const { get } = await import("@vercel/edge-config");
  const datos = await get<PreciosVenta>(CLAVE_EDGE_CONFIG);
  return datos ?? PRECIOS_POR_DEFECTO;
}

async function guardarEnEdgeConfig(datos: PreciosVenta): Promise<void> {
  const edgeConfigId = process.env.EDGE_CONFIG_ID;
  const apiToken = process.env.VERCEL_API_TOKEN;

  if (!edgeConfigId || !apiToken) {
    throw new Error(
      "Faltan EDGE_CONFIG_ID o VERCEL_API_TOKEN. Revisa los pasos de " +
        "configuracion al inicio de este archivo (lib/precios.ts)."
    );
  }

  const respuesta = await fetch(
    `https://api.vercel.com/v1/edge-config/${edgeConfigId}/items`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          {
            operation: "upsert",
            key: CLAVE_EDGE_CONFIG,
            value: datos,
          },
        ],
      }),
    }
  );

  if (!respuesta.ok) {
    const detalle = await respuesta.text();
    throw new Error(`Error al guardar en Edge Config: ${detalle}`);
  }
}

export async function leerPrecios(): Promise<PreciosVenta> {
  if (usandoEdgeConfig()) {
    return leerDeEdgeConfig();
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

  if (usandoEdgeConfig()) {
    await guardarEnEdgeConfig(datos);
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
