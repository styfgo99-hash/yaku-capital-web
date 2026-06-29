import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

/*
  AUTENTICACION SIMPLE PARA UN SOLO USUARIO (admin de precios)
  ---------------------------------------------------------------
  No usamos Auth.js / NextAuth porque esto NO necesita:
    - login social (Google, GitHub, etc.)
    - multiples usuarios o roles
    - base de datos de usuarios

  Es una sola persona (Styf) con una sola contrasena. Por eso, un JWT
  firmado guardado en una cookie httpOnly es suficiente y mas simple
  de mantener.

  IMPORTANTE -- variables de entorno requeridas (.env.local):
    ADMIN_PASSWORD=     (la contrasena que tu eliges, nunca la subas a Git)
    AUTH_SECRET=        (cadena aleatoria larga, usada para firmar el JWT)

  Para generar un AUTH_SECRET seguro, corre en la terminal:
    node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

  La verificacion de sesion se hace en el propio Server Component / Route
  Handler que protege /admin/precios -- NO solo en el proxy/middleware.
  Esto es deliberado: en 2025 se descubrio una vulnerabilidad (CVE-2025-29927)
  donde la proteccion hecha SOLO en middleware podia saltarse falsificando
  un header HTTP. Verificar tambien dentro de la ruta protegida cierra ese
  hueco.
*/

const NOMBRE_COOKIE = "yaku_admin_session";
const DURACION_SESION_HORAS = 12;

function obtenerSecreto(): Uint8Array {
  const secreto = process.env.AUTH_SECRET;
  if (!secreto) {
    throw new Error(
      "Falta la variable de entorno AUTH_SECRET. Generala con: " +
        "node -e \"console.log(require('crypto').randomBytes(32).toString('hex'))\""
    );
  }
  return new TextEncoder().encode(secreto);
}

export async function crearSesion(): Promise<void> {
  const secreto = obtenerSecreto();

  const token = await new SignJWT({ rol: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${DURACION_SESION_HORAS}h`)
    .sign(secreto);

  const cookieStore = await cookies();
  cookieStore.set(NOMBRE_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: DURACION_SESION_HORAS * 60 * 60,
  });
}

export async function cerrarSesion(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(NOMBRE_COOKIE);
}

export async function haySesionActiva(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(NOMBRE_COOKIE)?.value;
    if (!token) return false;

    const secreto = obtenerSecreto();
    await jwtVerify(token, secreto);
    return true;
  } catch {
    return false;
  }
}

export function validarContrasena(intento: string): boolean {
  const contrasenaCorrecta = process.env.ADMIN_PASSWORD;
  if (!contrasenaCorrecta) {
    throw new Error("Falta la variable de entorno ADMIN_PASSWORD.");
  }
  return intento === contrasenaCorrecta;
}
