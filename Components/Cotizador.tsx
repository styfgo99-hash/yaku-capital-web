import { leerPrecios, calcularPrecioCompra } from "../lib/precios";
import CotizadorWidget from "./CotizadorWidget";

export default async function Cotizador() {
  const precios = await leerPrecios();

  const datos = {
    USD: {
      venta: precios.USD,
      compra: calcularPrecioCompra("USD", precios.USD),
    },
  };

  return <CotizadorWidget datos={datos} />;
}
