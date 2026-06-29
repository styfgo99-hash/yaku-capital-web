"use client";

import { useState } from "react";

export default function ComplaintForm() {
  const [form, setForm] = useState({
    nombre: "",
    documento: "",
    correo: "",
    telefono: "",
    tipo: "Reclamo",
    detalle: "",
    pedido: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Tipo: ${form.tipo}%0D%0ANombre: ${form.nombre}%0D%0ADocumento: ${form.documento}%0D%0ACorreo: ${form.correo}%0D%0ATeléfono: ${form.telefono}%0D%0A%0D%0ADetalle:%0D%0A${form.detalle}%0D%0A%0D%0APedido:%0D%0A${form.pedido}`;
    window.location.href = `mailto:contacto@yakugroup.com.pe?subject=Libro de Reclamaciones&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white/[0.03] border border-white/[0.07] rounded-xl p-6 md:p-8">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="font-display text-[0.6rem] font-semibold tracking-wide text-muted uppercase">Nombre completo</label>
          <input required value={form.nombre} onChange={(e) => handleChange("nombre", e.target.value)} className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-text outline-none focus:border-accent/50" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-display text-[0.6rem] font-semibold tracking-wide text-muted uppercase">Documento de identidad</label>
          <input required value={form.documento} onChange={(e) => handleChange("documento", e.target.value)} className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-text outline-none focus:border-accent/50" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-display text-[0.6rem] font-semibold tracking-wide text-muted uppercase">Correo electrónico</label>
          <input required type="email" value={form.correo} onChange={(e) => handleChange("correo", e.target.value)} className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-text outline-none focus:border-accent/50" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-display text-[0.6rem] font-semibold tracking-wide text-muted uppercase">Teléfono</label>
          <input required value={form.telefono} onChange={(e) => handleChange("telefono", e.target.value)} className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-text outline-none focus:border-accent/50" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-display text-[0.6rem] font-semibold tracking-wide text-muted uppercase">Tipo</label>
        <select value={form.tipo} onChange={(e) => handleChange("tipo", e.target.value)} className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-text outline-none focus:border-accent/50">
          <option className="bg-bg">Reclamo</option>
          <option className="bg-bg">Queja</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-display text-[0.6rem] font-semibold tracking-wide text-muted uppercase">Detalle de tu reclamo o queja</label>
        <textarea required rows={4} value={form.detalle} onChange={(e) => handleChange("detalle", e.target.value)} className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-text outline-none focus:border-accent/50 resize-none" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-display text-[0.6rem] font-semibold tracking-wide text-muted uppercase">Tu pedido</label>
        <textarea required rows={3} value={form.pedido} onChange={(e) => handleChange("pedido", e.target.value)} className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-text outline-none focus:border-accent/50 resize-none" />
      </div>

      <button type="submit" className="font-display text-xs font-semibold tracking-wide uppercase text-bg bg-gradient-to-br from-accent to-accent-light px-8 py-3 rounded-lg hover:opacity-85 transition-opacity self-start">
        Enviar reclamo
      </button>
    </form>
  );
}
