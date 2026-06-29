import Image from "next/image";
import Cotizador from "./Cotizador";

export default function Hero() {
  return (
    <section className="min-h-screen grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center px-6 md:px-16 pt-36 pb-24">
      <div>
        <p className="font-display text-xs font-medium tracking-[0.26em] text-accent uppercase mb-7">
          Proveedor de Servicios de Activos Virtuales — Lima, Perú
        </p>
        <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold uppercase leading-none tracking-tight max-w-3xl mb-8">
          LIQUIDEZ<br />DIGITAL<br />
          <span className="bg-gradient-to-br from-silver-light to-accent bg-clip-text text-transparent">
            SIN LÍMITES.
          </span>
        </h1>
        <p className="text-lg font-light text-muted max-w-md leading-relaxed mb-10">
          Convertimos activos digitales en dinero real. Rápido, seguro y al mejor precio del mercado.
        </p>
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <a href="#contacto" className="font-display text-xs font-semibold tracking-wide uppercase text-bg bg-gradient-to-br from-accent to-accent-light px-10 py-3.5 rounded-lg hover:opacity-85 transition-opacity">
            Empieza ahora
          </a>
          <a href="#servicios" className="font-display text-xs font-medium tracking-wide uppercase text-muted bg-white/[0.03] border border-white/[0.07] px-10 py-3.5 rounded-lg hover:text-text hover:border-white/15 hover:bg-white/[0.06] transition-all">
            Conoce más
          </a>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <span className="font-display text-[0.56rem] font-semibold tracking-wide text-green-400 uppercase">Inscritos en la SBS (N.° 02914–2025)</span>
        </div>
      </div>

      <div className="relative hidden lg:flex items-center justify-center">
        <Cotizador />
      </div>
    </section>
  );
}