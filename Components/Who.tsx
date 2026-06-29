interface Profile {
  title: string;
  description: string;
}

const profiles: Profile[] = [
  {
    title: "Retail",
    description: "Personas que buscan proteger sus ahorros en dólares y operar con criptomonedas de forma simple y segura.",
  },
  {
    title: "Traders",
    description: "Profesionales que necesitan liquidez rápida, spreads competitivos y un partner confiable para operar con volumen frecuente.",
  },
  {
    title: "Remesas",
    description: "Empresas que mueven dinero entre fronteras buscando reducir costos y tiempos de liquidación significativamente.",
  },
  {
    title: "Corporativos",
    description: "Organizaciones que buscan dolarizarse estratégicamente o integrar activos digitales en su estructura financiera.",
  },
];

export default function Who() {
  return (
    <section id="para-quien" className="px-6 md:px-16 py-28 border-b border-white/[0.07]">
      <p className="font-display text-[0.58rem] font-medium tracking-[0.26em] text-accent uppercase mb-6">
        Para quién
      </p>
      <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase mb-16">
        CONSTRUIDO PARA TI.
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {profiles.map((profile) => (
          <div
            key={profile.title}
            className="bg-white/[0.03] backdrop-blur-xl border border-accent/[0.14] rounded-xl p-8 hover:border-accent/30 transition-all"
          >
            <div className="w-6 h-0.5 bg-gradient-to-r from-accent to-accent-light rounded-full mb-5" />
            <div className="font-display text-sm font-semibold tracking-wide uppercase mb-3">
              {profile.title}
            </div>
            <div className="text-sm text-muted leading-relaxed">
              {profile.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
