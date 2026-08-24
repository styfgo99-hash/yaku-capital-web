interface Service {
  number: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "Compra y venta de dólares",
    description: "Operaciones de cambio USD/PEN con tipo de cambio competitivo en tiempo real. Liquidez inmediata en soles o dólares sin complicaciones.",
  },
  {
    number: "02",
    title: "Dolarización empresarial",
    description: "Protege el patrimonio de tu empresa convirtiendo soles a dólares de forma ágil y transparente.",
  },
  {
    number: "03",
    title: "Remesas y transferencias internacionales",
    description: "Soluciones para empresas y personas que envían o reciben dólares desde el extranjero, con tiempos de liquidación rápidos.",
  },
  {
    number: "04",
    title: "Gestión de liquidez",
    description: "Mantén tu capital siempre disponible en la moneda correcta. Equipo disponible con respuesta inmediata cuando lo necesitas.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="px-6 md:px-16 py-28 border-b border-white/[0.07]">
      <p className="font-display text-[0.58rem] font-medium tracking-[0.26em] text-accent uppercase mb-6">
        Servicios
      </p>
      <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase mb-16">
        LO QUE HACEMOS.
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.number}
            className="bg-white/[0.03] backdrop-blur-xl border border-accent/[0.14] rounded-xl p-10 hover:border-accent/30 hover:bg-white/[0.05] transition-all"
          >
            <div className="font-display text-[0.58rem] font-semibold tracking-[0.22em] text-accent mb-6">
              {service.number}
            </div>
            <div className="font-display text-xl font-semibold uppercase mb-3">
              {service.title}
            </div>
            <div className="text-sm text-muted leading-relaxed">
              {service.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}