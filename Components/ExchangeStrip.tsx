export default function ExchangeStrip() {
  return (
    <div className="flex items-center gap-6 md:gap-10 flex-wrap px-6 md:px-16 py-7 border-t border-b border-white/[0.07]">
      <span className="font-display text-[0.56rem] font-semibold tracking-[0.22em] text-muted uppercase whitespace-nowrap">
        Pagos vía
      </span>
      <div className="w-px h-5 bg-white/[0.07]" />
      <div className="flex items-center gap-8 flex-wrap">
        <div className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity">
          <span className="font-display text-sm font-semibold text-green-300">BCP</span>
        </div>
        <div className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity">
          <span className="font-display text-sm font-semibold text-blue-200">BBVA</span>
        </div>
        <div className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity">
          <span className="font-display text-sm font-semibold text-emerald-300">Interbank</span>
        </div>
      </div>
    </div>
  );
}