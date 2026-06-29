import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-0.1 bg-bg/24 backdrop-blur-xl border-b border-white/[0.01]">
      <div className="flex items-center gap-7">
        <Link href="/" className="flex items-center gap-0.6">
         <Image src="/logo-icon.png" alt="YAKU CAPITAL" width={95} height={95} className="rounded-md object-contain translate-y-4" />
          <div className="flex flex-col justify-between h-5 leading-none">
            <span className="font-display text-base font-bold tracking-wide text-text">YAKU</span>
            <span className="font-display text-[0.5rem] font-medium tracking-[0.2em] text-silver">CAPITAL</span>
          </div>
        </Link>
        <div className="hidden sm:inline-flex items-center gap-2 ml-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 translate-y-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <span className="font-display text-[0.56rem] font-semibold tracking-wide text-green-400 uppercase">SBS N.° 02914–2025</span>
        </div>
      </div>

      <ul className="hidden lg:flex items-center gap-10 list-none">
        <li><Link href="/#servicios" className="font-display text-xs font-medium tracking-wide text-muted hover:text-text transition-colors uppercase">Servicios</Link></li>
        <li><Link href="/#para-quien" className="font-display text-xs font-medium tracking-wide text-muted hover:text-text transition-colors uppercase">Para quién</Link></li>
        <li><Link href="/#faq" className="font-display text-xs font-medium tracking-wide text-muted hover:text-text transition-colors uppercase">FAQ</Link></li>
        <li><Link href="/#nosotros" className="font-display text-xs font-medium tracking-wide text-muted hover:text-text transition-colors uppercase">Nosotros</Link></li>
      </ul>

      <Link href="/#contacto" className="font-display text-xs font-semibold tracking-wide uppercase text-accent border border-accent/30 bg-accent/[0.07] hover:bg-accent/[0.16] hover:border-accent/60 transition-all px-6 py-2.5 rounded-lg">
        Contactar
      </Link>
    </nav>
  );
}
