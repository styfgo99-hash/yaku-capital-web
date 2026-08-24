"use server";

import { redirect } from "next/navigation";
import { crearSesion, cerrarSesion, validarContrasena } from "./auth";
import { guardarPrecios } from "./precios";

export async function accionLogin(
  _estadoPrevio: { error?: string } | undefined,
  formData: FormData
): Promise<{ error?: string }> {
  const contrasena = formData.get("contrasena");

  if (typeof contrasena !== "string" || contrasena.length === 0) {
    return { error: "Ingresa la contrasena." };
  }

  let esValida: boolean;
  try {
    esValida = validarContrasena(contrasena);
  } catch {
    return {
      error:
        "El servidor no tiene configurada la contrasena de administrador (ADMIN_PASSWORD).",
    };
  }

  if (!esValida) {
    return { error: "Contrasena incorrecta." };
  }

  await crearSesion();
  redirect("/admin/precios");
}

export async function accionLogout(): Promise<void> {
  await cerrarSesion();
  redirect("/admin/login");
}

export async function accionGuardarPrecios(
  _estadoPrevio: { error?: string; exito?: boolean } | undefined,
  formData: FormData
): Promise<{ error?: string; exito?: boolean }> {
  const usdTexto = formData.get("usd");

  const usd = Number(usdTexto);

  if (!Number.isFinite(usd) || usd <= 0) {
    return { error: "El precio del dolar no es un numero valido." };
  }

  try {
    await guardarPrecios({ USD: usd });
  } catch (error) {
    const mensaje =
      error instanceof Error ? error.message : "Error desconocido al guardar.";
    return { error: mensaje };
  }

  return { exito: true };
}
