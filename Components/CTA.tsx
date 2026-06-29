export default function CTA() {
  return (
    <section id="contacto" className="px-6 md:px-16 py-32 text-center">
      <p className="font-display text-[0.58rem] font-medium tracking-[0.26em] text-accent uppercase mb-6">
        Contacto
      </p>
      <h2 className="font-display text-5xl lg:text-7xl font-bold uppercase leading-none mb-6">
        ¿LISTO PARA<br />
        <span className="bg-gradient-to-br from-silver-light to-accent bg-clip-text text-transparent">
          OPERAR?
        </span>
      </h2>
      <p className="text-base text-muted mb-12">
        Habla con nuestro equipo y recibe atención personalizada.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer" className="font-display text-xs font-semibold tracking-wide uppercase text-bg bg-gradient-to-br from-accent to-accent-light px-10 py-3.5 rounded-lg hover:opacity-85 transition-opacity">
          WhatsApp
        </a>
        <a href="mailto:contacto@yakugroup.com.pe" className="font-display text-xs font-medium tracking-wide uppercase text-muted bg-white/[0.03] border border-white/[0.07] px-10 py-3.5 rounded-lg hover:text-text hover:border-white/15 transition-all">
          contacto@yakugroup.com.pe
        </a>
      </div>
    </section>
  );
}
