export default function Stats() {
  return (
    <div className="grid sm:grid-cols-3 border-b border-white/[0.07]">
      <div className="px-6 md:px-16 py-12 border-b sm:border-b-0 sm:border-r border-white/[0.07]">
        <div className="font-display text-4xl font-bold mb-1">
          USDT<span className="text-accent"> / PEN</span>
        </div>
        <div className="font-display text-xs font-medium tracking-wide text-muted uppercase">
          Activos disponibles
        </div>
      </div>
      <div className="px-6 md:px-16 py-12 border-b sm:border-b-0 sm:border-r border-white/[0.07]">
        <div className="font-display text-4xl font-bold mb-1">
          24<span className="text-accent">/7</span>
        </div>
        <div className="font-display text-xs font-medium tracking-wide text-muted uppercase">
          Disponibilidad de operaciones
        </div>
      </div>
      <div className="px-6 md:px-16 py-12">
        <div className="font-display text-4xl font-bold mb-1">
          &lt;15<span className="text-accent"> min</span>
        </div>
        <div className="font-display text-xs font-medium tracking-wide text-muted uppercase">
          Tiempo promedio por operación
        </div>
      </div>
    </div>
  );
}
