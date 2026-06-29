import { IconoBinance, IconoOKX, IconoBybit, IconoBitget } from "./IconosExchanges";

export default function ExchangeStrip() {
  return (
    <div className="flex items-center gap-6 md:gap-10 flex-wrap px-6 md:px-16 py-7 border-t border-b border-white/[0.07]">
      <span className="font-display text-[0.56rem] font-semibold tracking-[0.22em] text-muted uppercase whitespace-nowrap">
        Operamos en
      </span>
      <div className="w-px h-5 bg-white/[0.07]" />
      <div className="flex items-center gap-8 flex-wrap">
        <div className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity">
          <IconoBinance className="w-[22px] h-[22px]" />
          <span className="font-display text-sm font-semibold" style={{ color: "#F0B90B" }}>Binance</span>
        </div>
        <div className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity">
          <IconoOKX className="w-[22px] h-[22px]" />
          <span className="font-display text-sm font-semibold text-text">OKX</span>
        </div>
        <div className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity">
          <IconoBybit className="w-[22px] h-[22px]" />
          <span className="font-display text-sm font-semibold" style={{ color: "#F7A600" }}>Bybit</span>
        </div>
        <div className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity">
          <IconoBitget className="w-[22px] h-[22px]" />
          <span className="font-display text-sm font-semibold" style={{ color: "#00E0C6" }}>Bitget</span>
        </div>
      </div>
    </div>
  );
}