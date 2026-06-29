import { leerPrecios, calcularPrecioCompra } from "../lib/precios";
import CotizadorWidget from "./CotizadorWidget";

export default async function Cotizador() {
  const precios = await leerPrecios();

  const datos = {
    USDT: {
      venta: precios.USDT,
      compra: calcularPrecioCompra("USDT", precios.USDT),
    },
    USDC: {
      venta: precios.USDC,
      compra: calcularPrecioCompra("USDC", precios.USDC),
    },
  };

  return <CotizadorWidget datos={datos} />;
}
