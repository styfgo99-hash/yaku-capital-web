"use client";

import { useState } from "react";

interface FAQItemData {
  question: string;
  answer: string;
}

const faqs: FAQItemData[] = [
  {
    question: "¿Qué es YAKU CAPITAL?",
    answer: "Somos un Proveedor de Servicios de Activos Virtuales (PSAV) registrado ante la SBS, especializado en la compra, venta y conversión de criptomonedas (USDT y USDC) a soles y dólares, y viceversa.",
  },
  {
    question: "¿Están autorizados para operar en Perú?",
    answer: "Sí. Estamos inscritos en el Registro de la SBS bajo el N.° 02914-2025, conforme a la Ley N.° 27693 y su reglamento.",
  },
  {
    question: "¿En qué plataformas operan?",
    answer: "Operamos a través de Binance, OKX, Bybit y Bitget, integrados con BCP, BBVA, Interbank, Yape, Plin y Ligo.",
  },
  {
    question: "¿Cómo se calcula el tipo de cambio?",
    answer: "El cotizador de nuestra página muestra el precio de compra y venta vigente para USDT y USDC. El monto que ves se actualiza con cada cambio de precio y es el que se aplica al momento de confirmar tu operación.",
  },
  {
    question: "¿Hay un monto mínimo o máximo por operación?",
    answer: "El monto mínimo por operación es de S/ 500. No tenemos un monto máximo definido; para montos altos, contáctanos directamente y coordinamos la mejor forma de procesarlo.",
  },
  {
    question: "¿Cuánto tiempo toma una operación?",
    answer: "La mayoría de operaciones P2P se completan en menos de 15 minutos, dependiendo del método de pago y el monto.",
  },
  {
    question: "¿Qué documentos necesito para operar?",
    answer: "Solicitamos verificación de identidad básica (KYC) conforme a nuestras políticas de prevención de lavado de activos, en cumplimiento de la normativa vigente.",
  },
  {
    question: "¿Cómo me pongo en contacto?",
    answer: "Puedes escribirnos por WhatsApp o al correo contacto@yakugroup.com.pe — nuestro equipo responde en horario de atención.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 md:px-16 py-28 border-b border-white/[0.07]">
      <p className="font-display text-[0.58rem] font-medium tracking-[0.26em] text-accent uppercase mb-6">
        Preguntas frecuentes
      </p>
      <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase mb-16">
        ¿TIENES DUDAS?
      </h2>
      <div className="max-w-2xl flex flex-col gap-3">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className="bg-white/[0.03] border border-white/[0.07] rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-sm font-semibold">{item.question}</span>
                <span className="font-display text-lg text-accent">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="px-6 pb-5 text-sm text-muted leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}