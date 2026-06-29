/*
  CONFIGURACION DE PRECIOS DEL COTIZADOR
  ----------------------------------------
  Este archivo ya NO se edita a mano una vez que el panel de administracion
  este funcionando -- los precios se actualizan desde /admin/precios y se
  guardan via lib/precios.ts.

  Esta constante MARGENES define el margen fijo de compra para cada activo.
  Si en el futuro cambia el margen de negocio (no el precio del dia, sino
  la regla del margen en si), se edita aqui.

  Formula: precioCompra = precioVenta - margen
*/

export const MARGENES = {
  USDT: 0.035,
  USDC: 0.05,
} as const;

export type Activo = keyof typeof MARGENES;
