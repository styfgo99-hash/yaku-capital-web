import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] px-6 md:px-16 pt-16 pb-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 pb-12">
          <div className="lg:w-72 lg:flex-shrink-0">
            <div className="flex items-center gap-2.5 mb-5">
              <Image src="/logo-icon.png" alt="YAKU CAPITAL" width={32} height={32} className="object-contain" />
              <div className="flex flex-col leading-none gap-0.5">
                <span className="font-display text-sm font-bold tracking-wide text-text">YAKU</span>
                <span className="font-display text-[0.5rem] font-medium tracking-[0.3em] text-muted">CAPITAL</span>
              </div>
            </div>
            <p className="text-xs text-muted leading-relaxed mb-1">Razón social: YAKU CAPITAL GROUP S.A.C.</p>
            <p className="text-xs text-muted leading-relaxed mb-5">RUC: 20616011732</p>

            <p className="font-display text-[0.6rem] font-semibold tracking-wide text-text uppercase mb-3">Síguenos</p>
            <div className="flex items-center gap-3 mb-6">
              <Link href="/" aria-label="Facebook" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.08] text-muted hover:text-text hover:border-white/20 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.5.3v2.7h-1.4c-1.3 0-1.7.8-1.7 1.7V12h2.9l-.5 2.9h-2.4v7A10 10 0 0022 12z"/></svg>
              </Link>
              <Link href="/" aria-label="Instagram" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.08] text-muted hover:text-text hover:border-white/20 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </Link>
              <Link href="/" aria-label="LinkedIn" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.08] text-muted hover:text-text hover:border-white/20 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.3 9.5H5.7V18h2.6V9.5zM7 5.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm11 7.1c0-2.4-1.3-3.5-3-3.5-1.4 0-2 .8-2.3 1.3v-1.1H10v8.5h2.6v-4.7c0-.3 0-.6.1-.8.2-.5.7-1 1.4-1 1 0 1.4.7 1.4 1.9v4.6H18v-4.9z"/></svg>
              </Link>
              <Link href="/" aria-label="X" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.08] text-muted hover:text-text hover:border-white/20 transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7 8 7.6 12h-6l-4.7-7.3L6.2 22H3l7.4-8.5L3 2h6.1l4.3 6.7L18.9 2z"/></svg>
              </Link>
            </div>

            <p className="font-display text-[0.6rem] font-semibold tracking-wide text-text uppercase mb-1">Horario de atención</p>
            <p className="text-xs text-muted leading-relaxed">Lunes a sábado, 9:00 am – 7:00 pm</p>
          </div>

          <div className="flex flex-1 flex-wrap justify-between gap-10">
            <div>
              <p className="font-display text-[0.6rem] font-semibold tracking-wide text-text uppercase mb-4">Recursos</p>
              <ul className="flex flex-col gap-2.5 list-none">
                <li><Link href="/#servicios" className="text-xs text-muted hover:text-text transition-colors">Servicios</Link></li>
                <li><Link href="/#faq" className="text-xs text-muted hover:text-text transition-colors">Preguntas frecuentes</Link></li>
                <li><Link href="/#para-quien" className="text-xs text-muted hover:text-text transition-colors">¿Cómo trabajamos?</Link></li>
              </ul>
            </div>

            <div>
              <p className="font-display text-[0.6rem] font-semibold tracking-wide text-text uppercase mb-4">Contáctanos</p>
              <ul className="flex flex-col gap-2.5 list-none">
                <li><a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-text transition-colors">WhatsApp</a></li>
                <li><a href="mailto:contacto@yakugroup.com.pe" className="text-xs text-muted hover:text-text transition-colors">contacto@yakugroup.com.pe</a></li>
                <li><span className="text-xs text-muted">Av. Militar N.° 1727, Lince, Lima</span></li>
              </ul>
            </div>

            <div>
              <p className="font-display text-[0.6rem] font-semibold tracking-wide text-text uppercase mb-4">Legal</p>
              <ul className="flex flex-col gap-2.5 list-none">
                <li><Link href="/aviso-legal" className="text-xs text-muted hover:text-text transition-colors">Aviso Legal</Link></li>
                <li><Link href="/politica-privacidad" className="text-xs text-muted hover:text-text transition-colors">Política de Privacidad</Link></li>
                <li className="mt-1">
                  <Link href="/libro-de-reclamaciones" className="flex items-center gap-2 group w-fit">
                    <svg width="22" height="22" viewBox="0 0 48 48" fill="none" className="text-muted group-hover:text-accent transition-colors flex-shrink-0">
                      <path d="M24 12c-3-2.4-7-4-12-4-2 0-4 .2-6 .8v29c2-.6 4-.8 6-.8 5 0 9 1.6 12 4 3-2.4 7-4 12-4 2 0 4 .2 6 .8v-29c-2-.6-4-.8-6-.8-5 0-9 1.6-12 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                      <path d="M24 12v29" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="text-xs text-muted group-hover:text-text transition-colors">Libro de Reclamaciones</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-8 flex flex-col gap-4">
          <p className="text-[0.68rem] text-muted/70 leading-relaxed text-justify">
            YAKU CAPITAL GROUP S.A.C. se encuentra inscrita en el Registro de Proveedores de Servicios de Activos Virtuales de la Superintendencia de Banca, Seguros y AFP (SBS) bajo el N.° 02914-2025, conforme a la Ley N.° 27693 y su reglamento. Esta inscripción no implica aprobación, verificación, ni supervisión por parte de la SBS sobre las actividades comerciales del PSAV.
          </p>
          <p className="font-display text-[0.56rem] tracking-wide text-muted uppercase text-center">
            © 2026 YAKU CAPITAL GROUP S.A.C. — Lima, Perú
          </p>
        </div>
      </div>
    </footer>
  );
}