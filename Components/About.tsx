export default function About() {
  return (
    <section id="nosotros" className="grid lg:grid-cols-2 gap-16 px-6 md:px-16 py-28 border-b border-white/[0.07]">
      <div>
        <p className="font-display text-[0.58rem] font-medium tracking-[0.26em] text-accent uppercase mb-6">
          Sobre nosotros
        </p>
        <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase leading-tight mb-8">
          EL PUENTE<br />ENTRE DOS<br />MUNDOS.
        </h2>
        <p className="text-base text-muted leading-loose">
          <strong className="text-text font-normal">YAKU CAPITAL</strong> nace de la necesidad de operar en un
          mercado donde la velocidad, la confianza y la precisión son todo. Somos un PSAV especializado en la
          conversión entre criptomonedas y moneda fiat.
          <br /><br />
          En quechua, <strong className="text-text font-normal">YAKU significa agua</strong>: fluida, esencial,
          que se adapta y siempre encuentra su camino. Así operamos nosotros.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <div>
          <div className="font-display text-[0.56rem] font-semibold tracking-[0.2em] text-muted uppercase mb-3">
            Regulación y cumplimiento
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md font-display text-xs font-semibold bg-green-500/10 border border-green-500/25 text-green-400">
              SBS N.° 02914–2025
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md font-display text-xs font-semibold bg-red-400/10 border border-red-400/25 text-red-400">
              SUNAT
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md font-display text-xs font-semibold bg-blue-400/10 border border-blue-400/25 text-blue-400">
              UIF Perú
            </span>
          </div>
        </div>

        <div>
          <div className="font-display text-[0.56rem] font-semibold tracking-[0.2em] text-muted uppercase mb-3">
            Bancos aceptados
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md font-display text-xs font-semibold bg-green-400/10 border border-green-400/20 text-green-300">BCP</span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md font-display text-xs font-semibold bg-blue-300/10 border border-blue-300/20 text-blue-200">BBVA</span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md font-display text-xs font-semibold bg-emerald-400/10 border border-emerald-400/20 text-emerald-300">Interbank</span>
          </div>
        </div>

        <div>
          <div className="font-display text-[0.56rem] font-semibold tracking-[0.2em] text-muted uppercase mb-3">
            Pagos digitales
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md font-display text-xs font-semibold bg-purple-400/10 border border-purple-400/25 text-purple-300">Yape</span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md font-display text-xs font-semibold bg-orange-400/10 border border-orange-400/25 text-orange-300">Plin</span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md font-display text-xs font-semibold bg-violet-400/10 border border-violet-400/25 text-violet-300">Ligo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
