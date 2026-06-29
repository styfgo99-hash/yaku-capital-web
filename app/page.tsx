// Esta directiva evita que Next.js prerenderice esta pagina como estatica
// en el momento del build. El Cotizador (dentro de Hero) necesita leer el
// precio actual desde Vercel Blob en cada visita, no mostrar siempre el
// mismo valor congelado desde el momento en que se compilo el sitio.
export const dynamic = "force-dynamic";

import Hero from "../Components/Hero";
import ExchangeStrip from "../Components/ExchangeStrip";
import Stats from "../Components/Stats";
import About from "../Components/About";
import Services from "../Components/Services";
import Who from "../Components/Who";
import FAQ from "../Components/FAQ";
import CTA from "../Components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ExchangeStrip />
      <Stats />
      <About />
      <Services />
      <Who />
      <FAQ />
      <CTA />
    </>
  );
}